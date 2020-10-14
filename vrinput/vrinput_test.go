package vrinput

import (
	"testing"
	// "github.com/gonutz/input"
)

//abcdefghijklmnopqrstuvwxyz
func TestKeyboard(t *testing.T) {

	// kEwrite("")
	// kEwrite("!!!")
	// kDcombind(VK_SHIFT, 'A')
	// cAcopy("456")
	// cBpaste()

	// var i uint16
	// for i = 'A'; i <= 'Z'; i++ {
	// 	kFtypeVk(i)
	// }

}

//
func _TestCopyPaste(t *testing.T) {
	p := Copy("Hello")
	Paste()
	Paste()
	CopyFree(p)

}
func TestMouse(t *testing.T) {
	mDmoveTo(150, 200)
	mFclickLMR(VK_LBUTTON)
	mFclickLMR(VK_LBUTTON)

	// mFclickLMR(VK_LBUTTON)
	// mDmoveTo(300, 300)
	// mFclickLMR(VK_RBUTTON)
	// kFtypeVk(VK_UP)
	// input.RightClick()
	// mGclick(8, 18)
	// fmt.Println(mGpressHold(VK_LBUTTON))

	// mDmove(100, 100)
	// fmt.Println(mGreleaseVk(VK_LBUTTON))

}
