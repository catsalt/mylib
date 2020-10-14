package vrinput

var (
	// 0x07,0x0A,0x0B,0x0E,0x0F 未用
	// 0x16,0x1A 未用
	// 0x3A - 0x3F 未用
	// 0x5E 未用
	// 0x88 - 0x8F 未用
	// 0x97 - 0x9F 未用
	// 0xB8 - 0xB9 未用
	// 0xC1 - 0xCF 未用
	// 0xD0 - 0xDA 未用
	// 0xE0	未用
	// 0xFF	未用
	VK_LBUTTON    uint16 = 0x01 //鼠标左键（控制台不使用）
	VK_RBUTTON    uint16 = 0x02 //鼠标右键（控制台不使用）
	VK_CANCEL     uint16 = 0x03 //控制中断键，就是Ctrl+Pause Break（控制台不使用）
	VK_MBUTTON    uint16 = 0x04 //鼠标中键（控制台不使用）
	VK_XBUTTON1   uint16 = 0x05 //鼠标X1键，具体哪个键根据实际情况而定（控制台不使用）
	VK_XBUTTON2   uint16 = 0x06 //鼠标X2键，具体哪个键根据实际情况而定（控制台不使用）
	VK_BACK       uint16 = 0x08 //退格键，就是Backspace
	VK_TAB        uint16 = 0x09 //制表键，就是Tab
	VK_CLEAR      uint16 = 0x0C //Clear键，Num Lock关闭时的数字键盘5
	VK_RETURN     uint16 = 0x0D //回车键，就是Enter
	VK_SHIFT      uint16 = 0x10 //上档键，就是Shift
	VK_CONTROL    uint16 = 0x11 //控制键，就是Ctrl
	VK_MENU       uint16 = 0x12 //换挡键，就是Alt
	VK_PAUSE      uint16 = 0x13 //中断暂停键，就是Pause Break
	VK_CAPITAL    uint16 = 0x14 //大小写锁定键，就是Caps Lock
	VK_KANA       uint16 = 0x15 //输入法编辑器（Input Method Editor 简称IME）假名模式，不太清楚是什么意思
	VK_HANGEUL    uint16 = 0x15 //输入法编辑器假名模式，老名字了，为了兼容性
	VK_HANGUL     uint16 = 0x15 //输入法编辑器假名模式，老名字了，为了兼容性
	VK_JUNJA      uint16 = 0x17 //输入法编辑器junja模式，不太清楚是什么意思
	VK_FINAL      uint16 = 0x18 //输入法编辑器final模式，不太清楚是什么意思
	VK_HANJA      uint16 = 0x19 //输入法编辑器汉字模式，不太清楚是什么意思
	VK_KANJI      uint16 = 0x19 //输入法编辑器汉字模式，不太清楚是什么意思
	VK_ESCAPE     uint16 = 0x1B //退出键，就是Esc
	VK_CONVERT    uint16 = 0x1C //IME convert
	VK_NONCONVERT uint16 = 0x1D //IME nonconvert
	VK_ACCEPT     uint16 = 0x1E //IME accept
	VK_MODECHANGE uint16 = 0x1F //IME mode change request
	VK_SPACE      uint16 = 0x20 //空格键，就是SpaceBar
	VK_PRIOR      uint16 = 0x21 //向上翻页键，就是Page Up
	VK_NEXT       uint16 = 0x22 //向下翻页键，就是Page Down
	VK_END        uint16 = 0x23 //结尾键，就是End
	VK_HOME       uint16 = 0x24 //起始键，就是Home
	VK_LEFT       uint16 = 0x25 //左方向键，就是←
	VK_UP         uint16 = 0x26 //上方向键，就是↑
	VK_RIGHT      uint16 = 0x27 //右方向键，就是→
	VK_DOWN       uint16 = 0x28 //下方向键，就是↓
	VK_SELECT     uint16 = 0x29 //Select键，不太清楚是什么意思
	VK_PRINT      uint16 = 0x2A //Print键，不太清楚是什么意思
	VK_EXECUTE    uint16 = 0x2B //Excute键，不太清楚是什么意思
	VK_SNAPSHOT   uint16 = 0x2C //屏幕打印键，就是Print Screen
	VK_INSERT     uint16 = 0x2D //插入键，就是Insert
	VK_DELETE     uint16 = 0x2E //删除键，就是Delete
	VK_HELP       uint16 = 0x2F //Help键，不太清楚是什么意思
	// 0x30-0x39 0x41-0x51 跟Ascii码一致 可以直接输入
	// VK_0                   uint16= 0x30 //48,0键
	// VK_1                   uint16= 0x31 //49,1键
	// VK_2                   uint16= 0x32 //50,2键
	// VK_3                   uint16= 0x33 //51,3键
	// VK_4                   uint16= 0x34 //52,4键
	// VK_5                   uint16= 0x35 //53,5键
	// VK_6                   uint16= 0x36 //54,6键
	// VK_7                   uint16= 0x37 //55,7键
	// VK_8                   uint16= 0x38 //56,8键
	// VK_9                   uint16= 0x39 //57,9键
	// VK_A                   uint16= 0x41 //65,A键
	// VK_B                   uint16= 0x42 //66,B键
	// VK_C                   uint16= 0x43 //67,C键
	// VK_D                   uint16= 0x44 //68,D键
	// VK_E                   uint16= 0x45 //69,E键
	// VK_F                   uint16= 0x46 //70,F键
	// VK_G                   uint16= 0x47 //71,G键
	// VK_H                   uint16= 0x48 //72,H键
	// VK_I                   uint16= 0x49 //73,I键
	// VK_J                   uint16= 0x4A //74,J键
	// VK_K                   uint16= 0x4B //75,K键
	// VK_L                   uint16= 0x4C //76,L键
	// VK_M                   uint16= 0x4D //77,M键
	// VK_N                   uint16= 0x4E //78,N键
	// VK_O                   uint16= 0x4F //79,O键
	// VK_P                   uint16= 0x50 //80,P键
	// VK_Q                   uint16= 0x51 //81,Q键
	// VK_R                   uint16= 0x52 //82,R键
	// VK_S                   uint16= 0x53 //83,S键
	// VK_T                   uint16= 0x54 //84,T键
	// VK_U                   uint16= 0x55 //85,U键
	// VK_V                   uint16= 0x56 //86,V键
	// VK_W                   uint16= 0x57 //87,W键
	// VK_X                   uint16= 0x58 //88,X键
	// VK_Y                   uint16= 0x59 //89,Y键
	// VK_Z                   uint16= 0x5A //90,Z键
	VK_LWIN                uint16 = 0x5B //左windows徽标键，就是一个窗口形状的那个键
	VK_RWIN                uint16 = 0x5C //右windows徽标键，就是一个窗口形状的那个键
	VK_APPS                uint16 = 0x5D //应用程序键，就是按一下弹出右键菜单的那个键
	VK_SLEEP               uint16 = 0x5F //睡眠键，就是Sleep
	VK_NUMPAD0             uint16 = 0x60 //数字键盘0键
	VK_NUMPAD1             uint16 = 0x61 //数字键盘1键
	VK_NUMPAD2             uint16 = 0x62 //数字键盘2键
	VK_NUMPAD3             uint16 = 0x63 //数字键盘3键
	VK_NUMPAD4             uint16 = 0x64 //数字键盘4键
	VK_NUMPAD5             uint16 = 0x65 //数字键盘5键
	VK_NUMPAD6             uint16 = 0x66 //数字键盘6键
	VK_NUMPAD7             uint16 = 0x67 //数字键盘7键
	VK_NUMPAD8             uint16 = 0x68 //数字键盘8键
	VK_NUMPAD9             uint16 = 0x69 //数字键盘9键
	VK_MULTIPLY            uint16 = 0x6A //乘法键，就是数字键盘*键
	VK_ADD                 uint16 = 0x6B //加法键，就是数字键盘+键
	VK_SEPARATOR           uint16 = 0x6C //Separator键，不太清楚是什么意思
	VK_SUBTRACT            uint16 = 0x6D //减法键，就是数字键盘-键
	VK_DECIMAL             uint16 = 0x6E //小数点键，就是数字键盘.键
	VK_DIVIDE              uint16 = 0x6F //除法键，就是数字键盘/键
	VK_F1                  uint16 = 0x70 //功能1键，就是F1
	VK_F2                  uint16 = 0x71 //功能2键，就是F2
	VK_F3                  uint16 = 0x72 //功能3键，就是F3
	VK_F4                  uint16 = 0x73 //功能4键，就是F4
	VK_F5                  uint16 = 0x74 //功能5键，就是F5
	VK_F6                  uint16 = 0x75 //功能6键，就是F6
	VK_F7                  uint16 = 0x76 //功能7键，就是F7
	VK_F8                  uint16 = 0x77 //功能8键，就是F8
	VK_F9                  uint16 = 0x78 //功能9键，就是F9
	VK_F10                 uint16 = 0x79 //功能10键，就是F10
	VK_F11                 uint16 = 0x7A //功能11键，就是F11
	VK_F12                 uint16 = 0x7B //功能12键，就是F12
	VK_F13                 uint16 = 0x7C //功能13键，就是F13
	VK_F14                 uint16 = 0x7D //功能14键，就是F14
	VK_F15                 uint16 = 0x7E //功能15键，就是F15
	VK_F16                 uint16 = 0x7F //功能16键，就是F16
	VK_F17                 uint16 = 0x80 //功能17键，就是F17
	VK_F18                 uint16 = 0x81 //功能18键，就是F18
	VK_F19                 uint16 = 0x82 //功能19键，就是F19
	VK_F20                 uint16 = 0x83 //功能20键，就是F20
	VK_F21                 uint16 = 0x84 //功能21键，就是F21
	VK_F22                 uint16 = 0x85 //功能22键，就是F22
	VK_F23                 uint16 = 0x86 //功能23键，就是F23
	VK_F24                 uint16 = 0x87 //功能24键，就是F24
	VK_NUMLOCK             uint16 = 0x90 //数字键盘锁定键，就是Num Lock
	VK_SCROLL              uint16 = 0x91 //滚动锁定键，就是Scroll Lock
	// VK_OEM_NEC_EQUAL       uint16 = 0x92 //NEC PC-9800	键盘定义的数字键盘=键，不太清楚是什么意思
	// VK_OEM_FJ_JISHO        uint16 = 0x92 //Fujitsu/OASYS 键盘定义的'Dictionary'键，不太清楚是什么意思
	// VK_OEM_FJ_MASSHOU      uint16 = 0x93 //Fujitsu/OASYS 键盘定义的'Unregister word'键，不太清楚是什么意思
	// VK_OEM_FJ_TOUROKU      uint16 = 0x94 //Fujitsu/OASYS 键盘定义的'Register word'键，不太清楚是什么意思
	// VK_OEM_FJ_LOYA         uint16 = 0x95 //Fujitsu/OASYS 键盘定义的'Left OYAYUBI'键，不太清楚是什么意思
	// VK_OEM_FJ_ROYA         uint16 = 0x96 //Fujitsu/OASYS 键盘定义的'Right OYAYUBI'键，不太清楚是什么意思
	VK_LSHIFT              uint16 = 0xA0 //左上档键，就是Shift，控制台只使用VK_SHIFT（控制台不使用）
	VK_RSHIFT              uint16 = 0xA1 //右上档键，就是Shift，控制台只使用VK_SHIFT（控制台不使用）
	VK_LCONTROL            uint16 = 0xA2 //左控制键，就是Ctrl，控制台只是用VK_CONTROL（控制台不使用）
	VK_RCONTROL            uint16 = 0xA3 //右控制键，就是Ctrl，控制台只是用VK_CONTROL（控制台不使用）
	VK_LMENU               uint16 = 0xA4 //左换挡键，就是Alt，控制台只是用VK_MENU（控制台不使用）
	VK_RMENU               uint16 = 0xA5 //右换挡键，就是Alt，控制台只是用VK_MENU（控制台不使用）
	// VK_BROWSER_BACK        uint16 = 0xA6 //浏览器后退键，不太清楚是什么意思
	// VK_BROWSER_FORWARD     uint16 = 0xA7 //浏览器前进键，不太清楚是什么意思
	// VK_BROWSER_REFRESH     uint16 = 0xA8 //浏览器刷新键，不太清楚是什么意思
	// VK_BROWSER_STOP        uint16 = 0xA9 //浏览器停止键，不太清楚是什么意思
	// VK_BROWSER_SEARCH      uint16 = 0xAA //浏览器查找键，不太清楚是什么意思
	// VK_BROWSER_FAVORITES   uint16 = 0xAB //浏览器收藏夹键，不太清楚是什么意思
	// VK_BROWSER_HOME        uint16 = 0xAC //浏览器主页键，不太清楚是什么意思
	// VK_VOLUME_MUTE         uint16 = 0xAD //音量静音键
	// VK_VOLUME_DOWN         uint16 = 0xAE //音量调低键
	// VK_VOLUME_UP           uint16 = 0xAF //音量调高键
	// VK_MEDIA_NEXT_TRACK    uint16 = 0xB0 //媒体下一曲目键
	// VK_MEDIA_PREV_TRACK    uint16 = 0xB1 //媒体上一曲目键
	// VK_MEDIA_STOP          uint16 = 0xB2 //媒体停止键
	// VK_MEDIA_PLAY_PAUSE    uint16 = 0xB3 //媒体播放/暂停键
	// VK_LAUNCH_MAIL         uint16 = 0xB4 //启动邮件键
	// VK_LAUNCH_MEDIA_SELECT uint16 = 0xB5 //启动媒体选择键
	// VK_LAUNCH_APP1         uint16 = 0xB6 //启动应用程序1键
	// VK_LAUNCH_APP2         uint16 = 0xB7 //启动应用程序2键
	VK_OEM_1               uint16 = 0xBA //符号';:'键
	VK_OEM_PLUS            uint16 = 0xBB //符号'=+'键
	VK_OEM_COMMA           uint16 = 0xBC //符号',<'键
	VK_OEM_MINUS           uint16 = 0xBD //符号'-_'键
	VK_OEM_PERIOD          uint16 = 0xBE //符号'.>'键
	VK_OEM_2               uint16 = 0xBF //符号'/?'键
	VK_OEM_3               uint16 = 0xC0 //符号'`~'键
	VK_OEM_4               uint16 = 0xDB //符号'[{'键
	VK_OEM_5               uint16 = 0xDC //符号'|'键
	VK_OEM_6               uint16 = 0xDD //符号']}'键
	VK_OEM_7               uint16 = 0xDE //符号''"'键
	// VK_OEM_8               uint16 = 0xDF //用于其他字符，不同的键盘不一定一样，不太清楚是什么意思
	// VK_OEM_AX              uint16 = 0xE1 //日本AX键盘的'AX'键，不太清楚是什么意思
	// VK_OEM_102             uint16 = 0xE2 //RT 102-key键盘的"<>"或"|"键，不太清楚是什么意思
	// VK_ICO_HELP            uint16 = 0xE3 //帮助图标键，不太清楚是什么意思
	// VK_ICO_00              uint16 = 0xE4 //00图标键，不太清楚是什么意思
	// VK_PROCESSKEY          uint16 = 0xE5 //IME PROCESS键
	// VK_ICO_CLEAR           uint16 = 0xE6 //Clear图标键，不太清楚是什么意思
	// VK_PACKET              uint16 = 0xE7 //不太清楚是什么意思 组合键?
	// VK_OEM_RESET           uint16 = 0xE9 //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_JUMP            uint16 = 0xEA //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_PA1             uint16 = 0xEB //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_PA2             uint16 = 0xEC //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_PA3             uint16 = 0xED //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_WSCTRL          uint16 = 0xEE //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_CUSEL           uint16 = 0xEF //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_ATTN            uint16 = 0xF0 //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_FINISH          uint16 = 0xF1 //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_COPY            uint16 = 0xF2 //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_AUTO            uint16 = 0xF3 //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_ENLW            uint16 = 0xF4 //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_OEM_BACKTAB         uint16 = 0xF5 //诺基亚、爱立信使用的，不太清楚是什么意思
	// VK_ATTN                uint16 = 0xF6 //Attn键，不太清楚是什么意思
	// VK_CRSEL               uint16 = 0xF7 //CrSel键，不太清楚是什么意思
	// VK_EXSEL               uint16 = 0xF8 //ExSel键，不太清楚是什么意思
	// VK_EREOF               uint16 = 0xF9 //Erase EOF键，不太清楚是什么意思
	// VK_PLAY                uint16 = 0xFA //Play键，不太清楚是什么意思
	// VK_ZOOM                uint16 = 0xFB //Zoom键，不太清楚是什么意思
	// VK_NONAME              uint16 = 0xFC //未用，不太清楚是什么意思
	// VK_PA1                 uint16 = 0xFD //PA1键，不太清楚是什么意思
	// VK_OEM_CLEAR           uint16 = 0xFE //Clear键，不太清楚是什么意思
)
