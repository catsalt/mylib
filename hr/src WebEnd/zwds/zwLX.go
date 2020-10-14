// zwLX
package zwds

//
func (uitmp *UILIUX) bLiuGongMing(huagong, liuYunJianMing string, uid int) {
	for id := 0; id < 12; id++ {
		idx := correctIndex(uid + id)
		uitmp[idx] = append(uitmp[idx], huagong, liuYunJianMing, 宫名[id])
	}
}

// - yuanliu gan zhi;hua gan;	流运名 = []string{"本命", "大运", "流年", "流月", "流日", "流时", "空白"}
func cLiuGanZhi(output, huagong string, hi HeroInfo, lni LiuNianInfo, ui UIZHUX, xg XGINDEX) (gan, zhi, huaGan string) {
	switch output {
	case 流运名[0]:
		gan, zhi = hi.年干, hi.年支
		huaGan = dLiuGongGan(huagong, gan, "命宫")
	case 流运名[1]:
		gan, zhi = ui[xg[流命宫[1]]][0], ui[xg[流命宫[1]]][1]
		huaGan = dLiuGongGan(huagong, gan, 流命宫[1])
	case 流运名[2]:
		gan, zhi = lni.年干, lni.年支
		huaGan = dLiuGongGan(huagong, gan, 流命宫[2])
	case 流运名[3]:
		gan, zhi = lni.月干, lni.月支
		huaGan = dLiuGongGan(huagong, gan, 流命宫[3])
	case 流运名[4]:
		gan, zhi = lni.日干, lni.日支
		huaGan = dLiuGongGan(huagong, gan, 流命宫[4])
	case 流运名[5]:
		gan, zhi = lni.时干, lni.时支
		huaGan = dLiuGongGan(huagong, gan, 流命宫[5])
	default:
	}
	return
}

// 化宫简名 = [13]string{"命", "父", "福", "宅", "官", "友", "迁", "疾", "财", "子", "配", "兄","原"}
// - huagong gan 四化;
func dLiuGongGan(huagong, yuanGan, liuMingGong string) (huaGan string) {
	var id int
	for k, v := range 化宫简名 {
		if v == huagong {
			id = k
			break
		}
	}
	if id == 12 {
		huaGan = yuanGan
	} else {
		huaGan = ui[correctIndex(xg[liuMingGong]+id)][0]
	}
	return
}

//
func eJianMing(ming string) (jianMing string) {
	str := []rune(ming)
	jianMing = string(str[1])
	return
}

// indexZhuX - 用于安四化.xing在gid宫位的对应序列号.
func indexZhuX(gid int, xing string, ui UIZHUX) int {
	xid := 0
	//因为主星从id=5开始的, 回看UIZHUX结构
	for k, v := range ui[gid][5:] {
		if v == xing {
			xid = k
			break
		}
	}
	return xid / 2
}
func (uitmp *UILIUX) fHuaGanX(gan string, lni LiuNianInfo, ui UIZHUX, xg XGINDEX) {
	for k, _ := range uitmp {
		uitmp[k] = make([]string, 6)
	} //6 根据GUI制定的.
	idGan := indexGan(gan)
	var xing string
	for k, v := range 化干系 {
		switch lni.四化 {
		case "中州":
			xing = 中州化干表[idGan][k]
		case "全书":
			xing = 全书化干表[idGan][k]
		}
		gid, _ := xg[xing]
		xid := indexZhuX(gid, xing, ui)
		uitmp[gid][xid] = v
	}
}

//安流干系
func (uitmp *UILIUX) gLiuGanX(gan string) {
	idGan := indexGan(gan)

	for k, v := range 流干系 {
		uitmp[流干系表[idGan][k]] = append(uitmp[流干系表[idGan][k]], v)
	}
}

//安流支系
func (uitmp *UILIUX) hLiuZhiX(zhi string) {
	idZhi := indexZhi(zhi)
	for k, v := range 流支系 {
		uitmp[流支系表[idZhi][k]] = append(uitmp[流支系表[idZhi][k]], v)
	}
}

//安岁前
func (uitmp *UILIUX) iSuiQianX(nianZhi string) {
	for k, v := range 岁前系 {
		id := 岁前系表[indexZhi(nianZhi)][k]
		uitmp[id] = append(uitmp[id], v)
	}
}

//安将前
func (uitmp *UILIUX) kJiangQianX(nianZhi string) {
	var id int
	switch nianZhi {
	case "寅", "午", "戌":
		id = 0
	case "申", "子", "辰":
		id = 1
	case "巳", "酉", "丑":
		id = 2
	case "亥", "卯", "未":
		id = 3
	}
	for k, v := range 将前系 {
		uid := 将前系表[id][k]
		uitmp[uid] = append(uitmp[uid], v)
	}
}

//安博士
func (uitmp *UILIUX) jBoShiX(nianGan string, hi HeroInfo) {
	id := 流干系表[indexGan(nianGan)][0]
	var uid int
	for k, v := range 博士系 {
		switch hi.性别 {
		case "阳男", "阴女":
			uid = correctIndex(id + k)
		case "阳女", "阴男":
			uid = correctIndex(id - k)
		}
		uitmp[uid] = append(uitmp[uid], v)
	}
}

//gXiaoXian - 生日的年支定1岁所在宫位, 定小限, 虚岁(长生年为1岁)
func (uitmp *UILIUX) lXiaoXian(hi HeroInfo, lni LiuNianInfo) {
	var idZero, idXiaoXian int
	switch hi.年支 {
	case "寅", "午", "戌":
		idZero = 辰
	case "申", "子", "辰":
		idZero = 戌
	case "巳", "酉", "丑":
		idZero = 未
	case "亥", "卯", "未":
		idZero = 丑
	}
	switch hi.性别 {
	case "阳男", "阴男":
		idXiaoXian = correctIndex(idZero + lni.农年 - hi.农年)
	case "阳女", "阴女":
		idXiaoXian = correctIndex(idZero - lni.农年 + hi.农年)
	}
	for id := 1; id < 13; id++ {
		if id == idXiaoXian {
			uitmp[id] = append(uitmp[id], "小限")
		} else {
			uitmp[id] = append(uitmp[id], "")
		}
	}
}

//////////////////////////////////////////////////////////////////////
//
func (uitmp *UILIUX) mOutput(output, huagong string, hi HeroInfo, lni LiuNianInfo, ui UIZHUX, xg XGINDEX) {

	switch output {
	case 流运名[0]:
		_, _, huaGan := cLiuGanZhi(output, huagong, hi, lni, ui, xg)
		uitmp.fHuaGanX(huaGan, lni, ui, xg)
		uitmp.bLiuGongMing(huagong, eJianMing(流运名[0]), xg["命宫"])
	case 流运名[1]://大运
		gan, zhi, huaGan := cLiuGanZhi(output, huagong, hi, lni, ui, xg)
		uitmp.fHuaGanX(huaGan, lni, ui, xg)
		uitmp.bLiuGongMing(huagong, eJianMing(流运名[1]), xg[流命宫[1]])
		uitmp.gLiuGanX(gan)
		uitmp.hLiuZhiX(zhi)
	case 流运名[2]://流年
		gan, zhi, huaGan := cLiuGanZhi(output, huagong, hi, lni, ui, xg)
		uitmp.fHuaGanX(huaGan, lni, ui, xg)
		uitmp.bLiuGongMing(huagong, eJianMing(流运名[2]), xg[流命宫[2]])
		uitmp.iSuiQianX(zhi)
		uitmp.jBoShiX(gan, hi)
		uitmp.kJiangQianX(zhi)						
		uitmp.lXiaoXian(hi, lni)
		uitmp.gLiuGanX(gan)
		uitmp.hLiuZhiX(zhi)
	case 流运名[3]://流月
		gan, zhi, huaGan := cLiuGanZhi(output, huagong, hi, lni, ui, xg)
		uitmp.fHuaGanX(huaGan, lni, ui, xg)
		uitmp.bLiuGongMing(huagong, eJianMing(流运名[3]), xg[流命宫[3]])
		uitmp.gLiuGanX(gan)
		uitmp.hLiuZhiX(zhi)
	case 流运名[4]:
		gan, zhi, huaGan := cLiuGanZhi(output, huagong, hi, lni, ui, xg)
		uitmp.fHuaGanX(huaGan, lni, ui, xg)
		uitmp.bLiuGongMing(huagong, eJianMing(流运名[4]), xg[流命宫[4]])
		uitmp.gLiuGanX(gan)
		uitmp.hLiuZhiX(zhi)
	case 流运名[5]:
		gan, zhi, huaGan := cLiuGanZhi(output, huagong, hi, lni, ui, xg)
		uitmp.fHuaGanX(huaGan, lni, ui, xg)
		uitmp.bLiuGongMing(huagong, eJianMing(流运名[5]), xg[流命宫[5]])
		uitmp.gLiuGanX(gan)
		uitmp.hLiuZhiX(zhi)
	case 流运名[6]:
		return
	}
}

//////////////////////////////////////////////////////////////////////////////
