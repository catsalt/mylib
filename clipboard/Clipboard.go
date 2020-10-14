// Clipboard.go
package clipboard

import (
	"fmt"
	"syscall"
	"time"
	"unsafe"
)

var (
	wUser32   = syscall.NewLazyDLL("user32.dll")
	wKernel32 = syscall.NewLazyDLL("kernel32.dll")

	//复制,粘贴
	wEmptyClipboard   = wUser32.NewProc("EmptyClipboard")
	wOpenClipboard    = wUser32.NewProc("OpenClipboard")
	wSetClipboardData = wUser32.NewProc("SetClipboardData")
	wCloseClipboard   = wUser32.NewProc("CloseClipboard")
	wGetClipboardData = wUser32.NewProc("GetClipboardData")

	// GHND 0x0042 结合GMEM_MOVEABLE和GMEM_ZEROINIT。
	// GMEM_FIXED 0x0000 分配固定内存。返回值是指针。
	// GMEM_MOVEABLE 0x0002 分配可移动内存。内存块永远不会在物理内存中移动，但它们可以在默认堆中移动。
	// GMEM_ZEROINIT 0x0040 将内存内容初始化为零。
	// GPTR 0x0040 结合GMEM_FIXED和GMEM_ZEROINIT。
	// 可移动内存标志GHND和GMEM_MOVABLE添加不必要的开销，需要锁定才能安全使用。应避免使用，除非文件明确规定应使用它们。
	wGlobalAlloc  = wKernel32.NewProc("GlobalAlloc")
	wGlobalFree   = wKernel32.NewProc("GlobalFree")
	wGlobalLock   = wKernel32.NewProc("GlobalLock")
	wGlobalUnlock = wKernel32.NewProc("GlobalUnlock")
	// wStringCchCopyW = wKernel32.NewProc("StringCchCopyW")
	wLstrcpy = wKernel32.NewProc("lstrcpyW")
)

// 拷贝类容到剪贴板
func CaCopy(str string) (clipBuffer uintptr) {
	if n, _, _ := wOpenClipboard.Call(0); n != 0 {
		wEmptyClipboard.Call()
		capBuffer := len(syscall.StringToUTF16(str)) * 2
		clipBuffer, _, _ = wGlobalAlloc.Call(0x0040, uintptr(capBuffer))
		lockBuffer, _, _ := wGlobalLock.Call(clipBuffer)
		wLstrcpy.Call(lockBuffer, uintptr(unsafe.Pointer(syscall.StringToUTF16Ptr(str))))
		wSetClipboardData.Call(0x000D, clipBuffer)
		wGlobalUnlock.Call(clipBuffer)
		wCloseClipboard.Call()
	} else {
		fmt.Println("cAcopy() failed!")
	}
	return clipBuffer
}

// 从剪贴板读取内容
func CbPaste() (str string) {
	for i := 0; i < 5; i++ {
		if n, _, _ := wOpenClipboard.Call(0); n != 0 {
			defer wCloseClipboard.Call()
			r, _, _ := wGetClipboardData.Call(0x000D)
			l, _, _ := wGlobalLock.Call(r)
			str = syscall.UTF16ToString((*[1 << 20]uint16)(unsafe.Pointer(l))[:]) //为啥1<<20
			wGlobalUnlock.Call(r)
			break
		}
		time.Sleep(time.Millisecond * 100)
	}
	return str
}

// 用后释放, 调用程序控制较好, 避免野指针
func CcFree(clipBuffer uintptr) {
	wGlobalFree.Call(clipBuffer)
}
