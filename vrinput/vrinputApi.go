// vrinputApi.go
package vrinput

// 复制到剪贴板;
func Copy(str string) uintptr {
	return cAcopy(str)
}

// 读取剪贴板;
func PasteStr() string {
	return cBpaste()
}

// 在光标处输入剪贴板内容;
func Paste() {
	KeyWrite(cBpaste())
}

// 用完Copy()要释放, 避免野指针
func CopyFree(c uintptr) {
	cCfree(c)
}
func MouseMoveTo(x, y int32) error {
	return mDmoveTo(x, y)
}
func MouseMove(x, y int32) error {
	return mDmove(x, y)
}
func MouseClick(vk uint16) error {
	return mFclickLMR(vk)
}
func MousePressHold(vk uint16) error {
	return mGpressHold(vk)
}
func MouseRelease(vk uint16) error {
	return mGreleaseVk(vk)
}
func MousePosition() (int32, int32, error) {
	p, err := mEgetPos()
	return p.x, p.y, err
}

// 一组组合合键, 或者一键;
func KeyType(vks ...uint16) error {
	return kDcombind(vks...)
}
func KeyWrite(str string) error {
	return kEwrite(str)
}
func KeyPressHold(vk uint16) error {
	return kGpressHold(vk)
}
func KeyRelease(vk uint16) error {
	return kGrelease(vk)
}
