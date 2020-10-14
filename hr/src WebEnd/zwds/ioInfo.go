package zwds

import "fmt"

//Hero - 用于与前端交互
type Hero struct {
	XingMing string `json:"xingMing"`
	XingBie  string `json:"xingBie"`
	Nian     int    `json:"nian"`
	Yue      int    `json:"yue"`
	Ri       int    `json:"ri"`
	Shi      int    `json:"shi"`
}

//LiuNian - 交互
type LiuNian struct {
	OutPut1  string `json:"outPut1"`
	HuaGong1 string `json:"huaGong1"`
	OutPut2  string `json:"outPut2"`
	HuaGong2 string `json:"huaGong2"`
	OutPut3  string `json:"outPut3"`
	HuaGong3 string `json:"huaGong3"`
	OutPut4  string `json:"outPut4"`
	HuaGong4 string `json:"huaGong4"`
	OutPut5  string `json:"outPut5"`
	HuaGong5 string `json:"huaGong5"`
	OutPut6  string `json:"outPut6"`
	HuaGong6 string `json:"huaGong6"`
	SiHua    string `json:"siHua"`
	LiuNian  int    `json:"liuNian"`
	LiuYue   int    `json:"liuYue"`
	LiuRi    int    `json:"liuRi"`
	LiuShi   int    `json:"liuShi"`
}

type Info struct {
	公年, 公月, 公日, 公时, 农年, 农月, 农日, 农时     int
	年干, 年支, 月干, 月支, 日干, 日支, 时干, 时支, 闰月 string
}
type BasicInfo interface {
	aSuanBaZi()
	bSuanNongLi()
}

//HeroInfo -用于保存处理后的Hero
type HeroInfo struct {
	姓名, 性别, 命主, 身主, 五行 string
	Info
}

type LiuNianInfo struct {
	四化 string
	Info
}

//UI系列数组,第0组存放生日等信息, 十二宫位(1-12), 此数组为每个宫位的输出内容, 供GUI使用;
//XGINDEX字典,查询任一输出内容对应的宫位,v值存放UISHIZU十二宫位的序列号, key值为输出内容;
type (
	XGINDEX map[string]int //定盘主星
	UIZHUX  [13][]string   //定盘主星
	UILIUX  [13][]string   //流化类星
)

//ganAndZhi 辅助程序;
func ganAndZhi(str string) (str1, str2 string) {
	strs := []rune(str)
	str1, str2 = string(strs[0]), string(strs[1])
	return
}

// 计算八字四柱; 1点钟正算子时; 1点过到3点正算丑时!!!!以此类推;23点-24点正算当天的子时;
func (info *Info) aSuanBaZi() {
	ganzhi := yearGanZhi(info.公年)
	info.年干, info.年支 = ganAndZhi(ganzhi)
	ganzhi = monthGanZhi(info.公年, info.公月, info.公日)
	info.月干, info.月支 = ganAndZhi(ganzhi)
	ganzhi = dayGanZhi(info.公年, info.公月, info.公日)
	info.日干, info.日支 = ganAndZhi(ganzhi)
	ganzhi = hourGanZhi(info.公年, info.公月, info.公日, info.公时)
	info.时干, info.时支 = ganAndZhi(ganzhi)
}

// 计算农历时间, 农年,农月,农日,农时,
func (info *Info) bSuanNongLi() {
	lunar := solarToLunar(Solar{SolarYear: info.公年,
		SolarMonth: info.公月, SolarDay: info.公日})
	info.农年, info.农月, info.农日 = lunar.LunarYear, lunar.LunarMonth, lunar.LunarDay
	if lunar.IsLeap {
		info.闰月 = "闰"
	}
	info.农时 = indexZhi(info.时支) + 1 //24点是子时,就是1
}

func (hi *HeroInfo) cCopyInfo(hero Hero) {
	hi.姓名 = hero.XingMing
	hi.公年, hi.公月, hi.公日, hi.公时 = hero.Nian, hero.Yue, hero.Ri, hero.Shi

}
func (hi *HeroInfo) dSuanXingBie(hero Hero) {
	switch hi.年干 {
	case "甲", "丙", "戊", "庚", "壬":
		hi.性别 = "阳" + hero.XingBie
	case "乙", "丁", "己", "辛", "癸":
		hi.性别 = "阴" + hero.XingBie
	}
}

//////////////////////////////////////////////////////////////////
// anInfoHero - Hero为json(前端)转换的struct, 得到四柱,农历等信息;
func (hi *HeroInfo) anInfoHero(hero Hero) {
	hi.cCopyInfo(hero)
	var i BasicInfo = hi
	i.aSuanBaZi()
	i.bSuanNongLi()
	hi.dSuanXingBie(hero)
}

//!!!!!!anInfoHero之后
//根据HeroInfo的农历信息, 安星入字典XGINDEX;
//根据constOut的表格顺序, 输出字典到UIZHUX(十二宫位)
func (ui *UIZHUX) outZhuX(hi HeroInfo, xg XGINDEX) {
	ui.anZhuX(hi, xg)
	for xid, x := range 输出本表 {
		gid, ok := xg[x]
		if !ok {
			fmt.Printf("XGINDEX没有 %s 星->中断.\n", x)
			return
		}
		ui[gid] = append(ui[gid], x)
		if xid > 23 && xid < 54 {
			ui[gid] = append(ui[gid], 庙旺本表[xid-24][gid-1])
		} //!!!修改一定要注意
		if xid >= 54 && xid < 88 {
			ui[gid] = append(ui[gid], "") //为没有输出庙旺的留空;
		}
	}
}

// 完善HeroInfo, 安命主,身主星,!!!!!!必须在 outZhuX之后
func (hi *HeroInfo) anXingHero(ui UIZHUX, xg XGINDEX) {
	gongZhi := ui[xg["命宫"]][1]
	hi.命主 = 命主星[indexZhi(gongZhi)]
	hi.身主 = 身主星[indexZhi(hi.年支)]
	hi.五行 = 五行局[xg["五行局"]]
}

//!!!!!!anXingHero()之后
// 将HeroInfo 个人信息放入数组UIZHUX[0];
func (ui *UIZHUX) outHeroInfo(hi HeroInfo) {
	var str string
	str = fmt.Sprintf("姓名: %v  性别: %v", hi.姓名, hi.性别)
	ui[0] = append(ui[0], str)
	str = fmt.Sprintf("命主: %v  身主: %v", hi.命主, hi.身主)
	ui[0] = append(ui[0], str)
	str = fmt.Sprintf("五行局: %v", hi.五行)
	ui[0] = append(ui[0], str)
	str = fmt.Sprintf("八字: %v%v %v%v %v%v %v%v", hi.年干, hi.年支, hi.月干,
		hi.月支, hi.日干, hi.日支, hi.时干, hi.时支)
	ui[0] = append(ui[0], str)
	str = fmt.Sprintf("公历: %v %v %v %v", hi.公年, hi.公月, hi.公日, hi.公时)
	ui[0] = append(ui[0], str)
	str = fmt.Sprintf("农历: %v %v%v %v %v(1-12)", hi.农年, hi.闰月, hi.农月, hi.农日, hi.农时)
	ui[0] = append(ui[0], str)
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//func (lni *LiuNianInfo) a
func (lni *LiuNianInfo) eCopyInfo(ln LiuNian) {
	lni.公年, lni.公月, lni.公日, lni.公时 = ln.LiuNian, ln.LiuYue, ln.LiuRi, ln.LiuShi
	lni.四化 = ln.SiHua
}
func (lni *LiuNianInfo) anInfoLiuNian(ln LiuNian) {
	lni.eCopyInfo(ln)
	var i BasicInfo = lni
	i.aSuanBaZi()
	i.bSuanNongLi()
}

//	流命宫 = [6]string{"大运数", "运命宫", "年命宫", "月命宫", "日命宫", "时命宫"}
func (xg XGINDEX) anLiuMingGong(lni LiuNianInfo, hi HeroInfo) {
	//出生年虚岁1, 虚岁五行局数起大运, 所以要减一;
	xg[流命宫[0]] = (lni.农年-(xg["五行局"]+2+hi.农年-1))/10 + 1
	switch hi.性别 {
	case "阳男", "阴女":
		xg[流命宫[1]] = correctIndex(xg["命宫"] + xg[流命宫[0]] - 1) //daXian(1-12)
	case "阳女", "阴男":
		xg[流命宫[1]] = correctIndex(xg["命宫"] - xg[流命宫[0]] + 1)
	}
	xg[流命宫[2]] = 岁前系表[indexZhi(lni.年支)][0] //跟岁建同
	//算法见子年斗君表注释;月命宫,日,时; 先算正月然后顺布;
	diYiMingGong := correctIndex(indexZhi(hi.年支) + 子年斗君表[hi.农时-1][hi.农月-1] + lni.农年 - hi.农年)
	xg[流命宫[3]] = correctIndex(diYiMingGong + lni.农月 - 1)
	xg[流命宫[4]] = correctIndex(xg[流命宫[3]] + lni.农日 - 1)
	xg[流命宫[5]] = correctIndex(xg[流命宫[4]] + lni.农时 - 1)
}

// gCopySlices - 用一个二维数组生成流年,或月.. 的流化信息, 然后复制到主输出二维数组中.
func (uilx *UILIUX) gCopySlices(idx int, output, huagong string, hi HeroInfo, lni LiuNianInfo, ui UIZHUX, xg XGINDEX) {
	var uitmp UILIUX
	uitmp.mOutput(output, huagong, hi, lni, ui, xg)
	for i := 1; i < 13; i++ {
		//		for k, v := range uitmp[i] {
		//			uilx[i][k+idx] = v
		//		}
		copy(uilx[i][idx:], uitmp[i][:])
	}
}

func (uilx *UILIUX) outLiuX(hi HeroInfo, ln LiuNian, lni LiuNianInfo, ui UIZHUX, xg XGINDEX) {
	for i := 0; i < 13; i++ {
		uilx[i] = make([]string, 120)
	}
	uilx.gCopySlices(0, ln.OutPut1, ln.HuaGong1, hi, lni, ui, xg)
	uilx.gCopySlices(20, ln.OutPut2, ln.HuaGong2, hi, lni, ui, xg)
	uilx.gCopySlices(40, ln.OutPut3, ln.HuaGong3, hi, lni, ui, xg)
	uilx.gCopySlices(60, ln.OutPut4, ln.HuaGong4, hi, lni, ui, xg)
	uilx.gCopySlices(80, ln.OutPut5, ln.HuaGong5, hi, lni, ui, xg)
	uilx.gCopySlices(100, ln.OutPut6, ln.HuaGong6, hi, lni, ui, xg)

}

func (uilx *UILIUX) outLiuNianInfo(lni LiuNianInfo, xg XGINDEX) {
	uilx[0][0] = fmt.Sprintf("%v", xg["大运数"]) //这个字符串会在前端转化为数字
	uilx[0][1] = fmt.Sprintf("流年 四化: %v ", lni.四化)
	uilx[0][2] = fmt.Sprintf("公历: %v %v %v %v", lni.公年, lni.公月, lni.公日, lni.公时)
	uilx[0][3] = fmt.Sprintf("农历: %v %v%v %v %v", lni.农年, lni.闰月, lni.农月, lni.农日, lni.农时)
	uilx[0][4] = fmt.Sprintf("八字: %v%v %v%v %v%v %v%v ", lni.年干, lni.年支, lni.月干, lni.月支,
		lni.日干, lni.日支, lni.时干, lni.时支)

	//	str = fmt.Sprintf("%v", xg["大运数"])
	//	uilx[0] = append(uilx[0], str)
	//	str = fmt.Sprintf("四化: %v 流年公历: %v %v %v %v", lni.四化, lni.公年, lni.公月, lni.公日, lni.公时)
	//	uilx[0] = append(uilx[0], str)
	//	str = fmt.Sprintf("农历: %v %v%v %v %v", lni.农年, lni.闰月, lni.农月, lni.农日, lni.农时)
	//	uilx[0] = append(uilx[0], str)
	//	str = fmt.Sprintf("八字: %v%v %v%v %v%v %v%v ", lni.年干, lni.年支,
	//		lni.月干, lni.月支, lni.日干, lni.日支, lni.时干, lni.时支)
	//	uilx[0] = append(uilx[0], str)
}
