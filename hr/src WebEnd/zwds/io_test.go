// ioInfo_test.go
package zwds

import (
	"fmt"
	"testing"
)

func check(ui [13][]string) {
	for i := 0; i < 13; i++ {
		println(len(ui[i]))
	}
}

func TestAny(t *testing.T) {
	check(ui)
	hi.anInfoHero(demo)
	ui.outZhuX(hi, xg)
	hi.anXingHero(ui, xg)
	ui.outHeroInfo(hi)
	fmt.Println(hi)
	printUI()
	check(ui)
	check(uilx)
	lni.anInfoLiuNian(demo1)
	xg.anLiuMingGong(lni, hi)
	uilx.outLiuX(hi, demo1, lni, ui, xg)
	uilx.outLiuNianInfo(lni, xg)
	prtuilx()
	check(uilx)

}
func printUI() {
	for i := 0; i < 13; i++ {
		fmt.Printf("%0.2d: ", i)
		for _, v := range ui[i] {
			fmt.Printf("%s ", v)
		}
		fmt.Println(len(ui[i]))
	}
	println()
}
func prtuilx() {
	for i := 0; i < 13; i++ {
		fmt.Printf("%0.2d: ", i)
		for _, v := range uilx[i] {
			fmt.Printf("%s ", v)
		}
		fmt.Println()
	}
	println()
}

//func TestInterface(t *testing.T) {
//	var test = Info{公年: 1980, 公月: 7, 公日: 15, 公时: 6}
//	//	var test1 = new(LiuNianInfo)
//	var test1 = LiuNianInfo{Info: test, 四化: "中州", 大运: 3}
//	fmt.Println(test1)
//	var i BasicInfo = &test1
//	//	i = &test1
//	i.aGetBaZi()
//	i.bGetNongLi()
//	fmt.Println(test1, test)
//	test.aGetBaZi()
//	test.bGetNongLi()
//	fmt.Println(test)
//}

//func TestAny(t *testing.T) {

//	hi.anInfoHero(demo)
//	ui.outZhuX(hi, xg)
//	hi.anXingHero(ui, xg)
//	ui.outHeroInfo(hi)
//	fmt.Println(hi)
//	printUI()

//	lni.anInfoLiuNian(demo1)
//	//	fmt.Println(lni)
//	//	fmt.Println(demo1)
//	xg.anLiuMingGong(lni, hi)
//	//	uilx.mOutput(demo1.OutPut1, demo1.HuaGong1, hi, lni, ui, xg)
//	//	prtuilx()
//	//	uilx.mOutput(demo1.OutPut2, demo1.HuaGong2, hi, lni, ui, xg)
//	//	prtuilx()
//	//	uilx.mOutput(demo1.OutPut3, demo1.HuaGong3, hi, lni, ui, xg)
//	//	prtuilx()
//	//	uilx.mOutput(demo1.OutPut4, demo1.HuaGong4, hi, lni, ui, xg)
//	//	prtuilx()
//	//	uilx.mOutput(demo1.OutPut5, demo1.HuaGong5, hi, lni, ui, xg)
//	//	prtuilx()
//	//	uilx.mOutput(demo1.OutPut6, demo1.HuaGong6, hi, lni, ui, xg)
//	//	prtuilx()
//	uilx.outLiuX(hi, demo1, lni, ui, xg)
//	uilx.outLiuNianInfo(lni, xg)
//	prtuilx()

//	println(流运名[2], eJianMing(流运名[2]))
//}
