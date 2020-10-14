package zwds

//安主星模块
import (
	"fmt"
)

//type HeroInfo HeroInfo
//////////////////////////////////////////////////////////////
//本页所需
//type HeroInfo struct {
//	农月, 农日, 农时     int
//	年干, 年支, 性别     string //性别 (见性别序表);
//}
//////////////////////////////////////////////////////////////

func (ui UIZHUX) checkShengRi(hi HeroInfo) (srGeShi bool) {
	check := 0
	gz := hi.年干 + hi.年支
	for _, v := range 干支序 {
		if v == gz {
			check++
		}
	}
	// fmt.Println(check)
	if hi.农月 > 0 && hi.农月 < 13 {
		check++
	}
	// fmt.Println(check)
	if hi.农日 > 0 && hi.农日 < 31 {
		check++
	}
	// fmt.Println(check)
	if hi.农时 > 0 && hi.农时 < 13 {
		check++
	}
	// fmt.Println(check)
	for _, v := range 性别序 {
		if v == hi.性别 {
			check++
		}
	}
	// fmt.Println(check)
	if check == 5 {
		srGeShi = true
	} else {
		srGeShi = false
	}
	return srGeShi
}
func (xg XGINDEX) bGongMing(hi HeroInfo) {
	//十二宫
	index := 1 + hi.农月 - hi.农时
	var i int
	for i = 0; i < 12; i++ {
		xg[宫名[i]] = correctIndex(index)
		index++
	}
	//身宫
	index = hi.农月 + hi.农时 - 1
	xg[宫名[i]] = correctIndex(index)
	return
}

// correctIndex - 返回1-12;
func correctIndex(index int) (newindex int) {
	if index > 12 {
		//		index -= 12
		index = index % 12
	} //(1-12)
	if index < 1 {
		//		index += 12
		index = index%12 + 12
	}
	newindex = index
	return newindex
}

func (ui *UIZHUX) aGongGan(hi HeroInfo) {
	var indexGongGan int
	switch hi.年干 {
	case "甲", "己":
		indexGongGan = 0
	case "乙", "庚":
		indexGongGan = 1
	case "丙", "辛":
		indexGongGan = 2
	case "丁", "壬":
		indexGongGan = 3
	case "戊", "癸":
		indexGongGan = 4
		// default:
		// 	fmt.Println("Wrong! in func dnGongGan().")
	}
	j := 0
	for i := 1; i < 13; i++ {
		ui[i] = append(ui[i], 宫干[indexGongGan][j], 宫支[j])
		j++
	}
	return
}

func (xg XGINDEX) cWuXing(ui UIZHUX) {
	i := xg["命宫"]
	gongGan := ui[i][0]
	gongZhi := ui[i][1]
	var idGan int
	switch gongGan {
	case "甲", "乙":
		idGan = 0
	case "丙", "丁":
		idGan = 1
	case "戊", "己":
		idGan = 2
	case "庚", "辛":
		idGan = 3
	case "壬", "癸":
		idGan = 4
	}
	var idZhi int
	switch gongZhi {
	case "子", "丑", "午", "未":
		idZhi = 0
	case "寅", "卯", "申", "酉":
		idZhi = 1
	case "辰", "巳", "戌", "亥":
		idZhi = 2
	}
	xg["五行局"] = 五行局表[idGan][idZhi]
	return
}

func (xg XGINDEX) dZiFuX(hi HeroInfo) {
	xg["紫微"] = 紫微表[xg["五行局"]][hi.农日-1]
	for i := 0; i < 13; i++ {
		xg[紫府系[i]] = 紫府系表[xg["紫微"]-1][i]
	}
}
func (xg XGINDEX) eYueX(hi HeroInfo) {
	for i := 0; i < 8; i++ {
		xg[月系[i]] = 月系表[hi.农月-1][i]
	}
}

func (xg XGINDEX) fShiX(hi HeroInfo) {
	for i := 0; i < 6; i++ {
		xg[时系[i]] = 时系表[hi.农时-1][i]
	}
}

func (xg XGINDEX) gRiX(hi HeroInfo) {
	xg["三台"] = correctIndex(xg["左辅"] + hi.农日 - 1)
	xg["八座"] = correctIndex(xg["右弼"] - hi.农日 + 1)
	xg["恩光"] = correctIndex(xg["文昌"] + hi.农日 - 2)
	xg["天贵"] = correctIndex(xg["文曲"] + hi.农日 - 2)
}

func (xg XGINDEX) hNianZhiX(hi HeroInfo) {
	indexNianZhi := indexZhi(hi.年支)
	for i := 0; i < 19; i++ {
		xg[年支系[i]] = 年支系表[indexNianZhi][i]
	}
	xg["天才"] = correctIndex(xg["命宫"] + indexNianZhi)
	xg["天寿"] = correctIndex(xg["身宫"] + indexNianZhi)
	xg["天殇"] = xg["仆役"]
	xg["天使"] = xg["疾厄"]
	xg["龙德"] = correctIndex(未 + indexNianZhi)
}

func (xg XGINDEX) iNianGanX(hi HeroInfo) {
	indexNianGan := indexGan(hi.年干)
	for i := 0; i < 10; i++ {
		xg[年干系[i]] = 年干系表[indexNianGan][i]
	}
}

func (xg XGINDEX) jHuoLingX(hi HeroInfo) {
	var idNianZhi int
	switch hi.年支 {
	case "寅", "午", "戌":
		idNianZhi = 0
	case "申", "子", "辰":
		idNianZhi = 1
	case "巳", "酉", "丑":
		idNianZhi = 2
	case "亥", "卯", "未":
		idNianZhi = 3
	}
	xg["火星"] = 火星表[idNianZhi][hi.农时-1]
	xg["铃星"] = 铃星表[idNianZhi][hi.农时-1]

}

func (xg XGINDEX) kChangShengX(hi HeroInfo) {
	var cs int
	switch xg["五行局"] {
	case 水二局, 土五局:
		cs = 申
	case 木三局:
		cs = 亥
	case 金四局:
		cs = 巳
	case 火六局:
		cs = 寅
	}
	for i := 0; i < 12; i++ {
		switch hi.性别 {
		case "阳男", "阴女":
			xg[长生系[i]] = correctIndex(cs + i)
		case "阳女", "阴男":
			xg[长生系[i]] = correctIndex(cs - i)
		}
	}
}
func (xg XGINDEX) lXunKongX(hi HeroInfo) {
	idNianGan := indexGan(hi.年干)
	idNianZhi := indexZhi(hi.年支)
	xg["旬空"] = 旬空表[idNianGan][idNianZhi]
	switch hi.年干 {
	case "甲", "丙", "戊", "庚", "壬":
		xg["副旬"] = xg["旬空"] + 1
	case "乙", "丁", "己", "辛", "癸":
		xg["副旬"] = xg["旬空"] - 1
	}
}
func (ui *UIZHUX) mDaXian(hi HeroInfo, xg XGINDEX) {
	var uid int
	for k, v := range 大限表[xg["五行局"]] {
		switch hi.性别 {
		case "阳男", "阴女":
			uid = correctIndex(xg["命宫"] + k)
		case "阳女", "阴男":
			uid = correctIndex(xg["命宫"] - k)
		}
		ui[uid] = append(ui[uid], v)
	}
}
func indexGan(gan string) (index int) {
	for k, v := range 干序 {
		if gan == v {
			index = k
		}
	}
	return index
}

// indexZhi - get 0-11.
func indexZhi(zhi string) (index int) {
	for k, v := range 支序 {
		if zhi == v {
			index = k
		}
	}
	return index
}

//////////////////////////////////////////////////////////////////////////////
func (ui *UIZHUX) anZhuX(hi HeroInfo, xg XGINDEX) {
	if !ui.checkShengRi(hi) {
		fmt.Println("检查生日格式失败.")
		return
	}
	ui.aGongGan(hi)
	xg.bGongMing(hi)    //13.
	xg.cWuXing(*ui)     //1.此步骤必须在dnGongGan(),anGongMing()之后; 在安星之前;
	xg.dZiFuX(hi)       //14
	xg.eYueX(hi)        //8
	xg.fShiX(hi)        //6
	xg.gRiX(hi)         //4 此步骤必须在anYueX(),anShiX()之后;
	xg.hNianZhiX(hi)    //24
	xg.iNianGanX(hi)    //10
	xg.jHuoLingX(hi)    //2
	xg.kChangShengX(hi) //12
	xg.lXunKongX(hi)    //2
	ui.mDaXian(hi, xg)
	//安星按照公式总共有96个, 今后还可以增加, 形成了一个字典什么星在什么宫位;
}
