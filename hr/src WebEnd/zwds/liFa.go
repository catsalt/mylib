package zwds

// - 历法, 公历, 农历,干支历转换; for shiJian.go
import "strconv"

func fixSuffix(y int) int {
	return y - 1900
}

func getTermInfo(y, n int) int {
	y = fixSuffix(y)
	if y < 0 || y > len(termInfoList) {
		return -1
	}
	if n < 1 || n > 24 {
		return -1
	}
	i := (n - 1) / 4 * 5
	n = (n - 1) % 4
	idx, _ := strconv.ParseInt(termInfoList[y][i:i+5], 16, 64)
	a := strconv.FormatInt(idx, 10)
	day := []string{a[0:1], a[1:3], a[3:4], a[4:6]}
	i, _ = strconv.Atoi(day[n])
	return i
}

//hourGanZhi
func hourGanZhi(y, m, d, h int) string {
	i := ganZhiIndex(y, m, d) % 5 * 12
	h = h / 2 % 12
	return 干支序[i+h]
}

func ganZhiIndex(y, m, d int) int {
	y = fixSuffix(y)
	if y < 0 || y > len(yearNumber) {
		return 0
	}
	if m < 3 {
		y -= 1
	}
	m = (m - 1) % 12
	return (yearNumber[y] + monthNumber[m] + d - 1) % 60
}

// dayGanZhi 获取日柱
func dayGanZhi(y, m, d int) string {
	return 干支序[ganZhiIndex(y, m, d)]
}

//monthGanZhi
func monthGanZhi(y, m, d int) string {
	//月柱 1900年1月小寒以前为 丙子月(60进制12)
	fir := getTermInfo(y, m*2-1) //返回当月「节」为几日开始
	//sec := getTermInfo(y, m*2)   //返回当月「节」为几日开始

	//依据12节气修正干支月
	var sb = getGanZhi(fixSuffix(y)*12 + m + 11)
	if d >= fir {
		sb = getGanZhi(fixSuffix(y)*12 + m + 12)
	}
	return sb
}

//getGanZhi 月干支序列
func getGanZhi(y int) string {
	return 干序[y%10] + 支序[y%12]
}

//yearGanZhi
func yearGanZhi(y int) string {
	num := y - 4
	return 干序[num%10] + 支序[num%12]
}

//GetBaZi - 八字, 通过公历年月日时
////////////////////////////////////////////////////////////////////////
func getBaZi(year, month, day, hour int) (zNian, zYue, zRi, zShi string) {
	zNian = yearGanZhi(year)
	zYue = monthGanZhi(year, month, day)
	zRi = dayGanZhi(year, month, day)
	zShi = hourGanZhi(year, month, day, hour)
	return
}

///////////////////////////////////////////////////////////////////////

type Lunar struct {
	IsLeap     bool //是否闰月,指的是输入的月份是不是闰月
	LunarDay   int
	LunarMonth int
	LunarYear  int
}

type Solar struct {
	SolarDay   int
	SolarMonth int
	SolarYear  int
}

//农历转公历
/////////////////////////////////////////////////////////////////////////
func lunarToSolar(lunar Lunar) *Solar {
	var days = lunarMonthDays[lunar.LunarYear-lunarMonthDays[0]]
	var leap = getBitInt(days, 4, 13)
	var offset = 0
	var loopend = leap
	if !lunar.IsLeap {
		if lunar.LunarMonth <= leap || leap == 0 {
			loopend = lunar.LunarMonth - 1
		} else {
			loopend = lunar.LunarMonth
		}
	}
	for i := 0; i < loopend; i++ {
		offset += getBitInt(days, 1, 12-i) + 29
	}
	offset += lunar.LunarDay
	var solar11 = solar_1_1[lunar.LunarYear-solar_1_1[0]]
	var y = getBitInt(solar11, 12, 9)
	var m = getBitInt(solar11, 4, 5)
	var d = getBitInt(solar11, 5, 0)
	var solar = solarFromInt(solarToInt(y, m, d) + int64(offset-1))
	return solar
}

//公历转农历
/////////////////////////////////////////////////////////////////////////////////////////
func solarToLunar(solar Solar) *Lunar {
	lunar := &Lunar{}
	var index = solar.SolarYear - solar_1_1[0]
	var data = (solar.SolarYear << 9) | (solar.SolarMonth << 5) | (solar.SolarDay)
	var solar11 = 0
	if solar_1_1[index] > data {
		index--
	}
	solar11 = solar_1_1[index]
	var y = getBitInt(solar11, 12, 9)
	var m = getBitInt(solar11, 4, 5)
	var d = getBitInt(solar11, 5, 0)
	var offset int = int(solarToInt(solar.SolarYear, solar.SolarMonth, solar.SolarDay) - solarToInt(y, m, d))
	var days = lunarMonthDays[index]
	var leap = getBitInt(days, 4, 13)
	var lunarY = index + solar_1_1[0]
	var lunarM = 1
	var lunarD = 0
	offset += 1
	for i := 0; i < 13; i++ {
		dm := getBitInt(days, 1, 12-i) + 29
		if offset > dm {
			lunarM++
			offset -= dm
		} else {
			break
		}
	}
	lunarD = (int)(offset)
	lunar.LunarYear = lunarY
	lunar.LunarMonth = lunarM
	lunar.IsLeap = false
	if leap != 0 && lunarM > leap {
		lunar.LunarMonth = lunarM - 1
		if lunarM == leap+1 {
			lunar.IsLeap = true
		}
	}
	lunar.LunarDay = lunarD
	return lunar
}

func getBitInt(data int, length int, shift int) int {
	return (data & (((1 << uint32(length)) - 1) << uint32(shift))) >> uint32(shift)
}

//WARNING: Dates before Oct. 1582 are inaccurate
func solarToInt(y int, m int, d int) int64 {
	m = (m + 9) % 12
	y = y - m/10
	return int64(365*y + y/4 - y/100 + y/400 + (m*306+5)/10 + (d - 1))
}

func solarFromInt(g int64) *Solar {
	var y = (10000*g + 14780) / 3652425
	var ddd = g - (365*y + y/4 - y/100 + y/400)
	if ddd < 0 {
		y--
		ddd = g - (365*y + y/4 - y/100 + y/400)
	}
	var mi = (100*ddd + 52) / 3060
	var mm = (mi+2)%12 + 1
	y = y + (mi+2)/12
	dd := ddd - (mi*306+5)/10 + 1
	var solar = &Solar{}
	solar.SolarYear = int(y)
	solar.SolarMonth = int(mm)
	solar.SolarDay = int(dd)
	return solar
}
