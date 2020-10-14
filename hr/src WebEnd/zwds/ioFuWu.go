// sjFuWu
package zwds

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
//	"os"
	"strings"
	"time"
)

////////////////////////////////////////////////
//都为全局变量:
var hi HeroInfo
var xg = make(XGINDEX)
var lni LiuNianInfo
var ln LiuNian

//ui - 全局变量 - 目前最长35 用来排流化盘;每次使用需初始化;
var ui UIZHUX
var uilx UILIUX //每次使用初始化;90;

//HeroList -全局变量,  for 转换,存储
var HeroList []Hero

//Id - 全局变量,HeroList 的序号,
var Id int
var demo = Hero{
	XingMing: "示例", XingBie: "女",
	Nian: 1955, Yue: 3, Ri: 7, Shi: 4}
var demo1 = LiuNian{
	OutPut1: "本命", HuaGong1: "原", OutPut2: "大运", HuaGong2: "原", OutPut3: "流年", HuaGong3: "原",
	OutPut4: "流月", HuaGong4: "原", OutPut5: "流日", HuaGong5: "原", OutPut6: "流时", HuaGong6: "原",
	SiHua: "中州", LiuNian: 1999, LiuYue: 9, LiuRi: 9, LiuShi: 9}

const (
	inFile  = "data/inputHero.txt"
	inFile1 = "data/inputLiuNian.txt"
)

////////////////////////////////////////////////

func setId() {
	if Id < 0 {
		Id = len(HeroList) - 1
	} else if Id > (len(HeroList) - 1) {
		Id = 0
	}
}
func getIdUp() {
	Id++
	setId()
}
func getIdDown() {
	Id--
	setId()
}

func saveFile(b []byte, userFile string) {
	err := ioutil.WriteFile(userFile, b, 0777)
	if err != nil {
		fmt.Println("saveFile() wrong!")
		return
	}
}

// readFile - file to HeroList, set Id
func readFile(userFile string) {
	data, err := ioutil.ReadFile(userFile)
	if err != nil {
		fmt.Println("readFile() wrong!")
		return
	}
	err = json.Unmarshal(data, &HeroList)
	if err != nil {
		fmt.Println("Unmarshal() wrong!")
		return
	}
	Id = len(HeroList) - 1
}

// addHero - add hero to HeroList, and save to inFile, set Id.
func addHero(w http.ResponseWriter, r *http.Request) {
	var hero Hero
	err := json.NewDecoder(r.Body).Decode(&hero)
	if err != nil {
		panic(err)
	}
	if len(HeroList) < 10 {
		HeroList = append(HeroList, hero)
		Id = len(HeroList) - 1
	} else {
		HeroList[Id] = hero
	}
	//save to file.
	record, _ := json.Marshal(HeroList)
	saveFile(record, inFile)
	w.WriteHeader(http.StatusOK)
	//	getHero(w, r)
}
func infoReq(r *http.Request) {
	fmt.Println("=============")
	fmt.Println("method", r.Method)
	urlPathElements := strings.Split(r.URL.Path, "/")
	for k, v := range urlPathElements {
		fmt.Println(k, v)
	}
	if len(r.Header) > 0 {
		for k, v := range r.Header {
			fmt.Printf("%s=%s\n", k, v[0])
		}
	}
	fmt.Println("=============")
}
func readHero() (hero Hero) {
	if Id >= 0 && Id < len(HeroList) {
		hero = HeroList[Id]
	} else {
		hero = demo
	}
	return
}

// getHero - readHero from HeroList by Id, and encode it to Http.
func getHero(w http.ResponseWriter, r *http.Request) {
	j, err := json.Marshal(readHero())
	if err != nil {
		panic(err)
	}
	//输出检测,
	//	fmt.Println(string(j))
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
}

//GetHandler - /api/heroInfo
func GetHandler(w http.ResponseWriter, r *http.Request) {
	infoReq(r)
	if r.Method == "GET" {
		readFile(inFile)
		println(Id)
		getHero(w, r)
	}
	if r.Method == "POST" {
		addHero(w, r)
	}
}

//GetUpHandler - /api/heroInfo/prev
func GetUpHandler(w http.ResponseWriter, r *http.Request) {
	getIdUp()
	getHero(w, r)
	fmt.Println(Id)
}

//GetDownHandler - /api/heroInfo/next
func GetDownHandler(w http.ResponseWriter, r *http.Request) {
	getIdDown()
	getHero(w, r)
	fmt.Println(Id)
}

//ZhuXHanderler - /api/heroInfo/zhuX
func ZhuXHandler(w http.ResponseWriter, r *http.Request) {
	var uix UIZHUX
	hero := readHero()
	fmt.Println(Id, hero)       //////
	hi.anInfoHero(hero)         //第一步
	uix.outZhuX(hi, xg)         //第二步
	hi.anXingHero(uix, xg)      //第三步
	uix.outHeroInfo(hi)         //第四步
	j, err := json.Marshal(uix) ///////
	if err != nil {
		panic(err)
	}
	outFile := "data/" + hi.姓名 + " 主星盘 " + time.Now().Format("2006-01-02") + ".txt"
	saveFile(j, outFile)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
	for i := 0; i < 13; i++ {
		ui[i] = make([]string, 40) //重新初始化ui
		for k, v := range uix[i] {
			ui[i][k] = v
		}
	}
}

//LiuXHandler - api/liuNianInfo/liuX
func LiuXHandler(w http.ResponseWriter, r *http.Request) {
	infoReq(r)
	if len(ui[0]) == 0 {
		println("请先排主星盘!")
		return
	}
	if r.Method == "GET" {
		lni.anInfoLiuNian(ln)             //第一步
		xg.anLiuMingGong(lni, hi)         //第二步
		uilx.outLiuX(hi, ln, lni, ui, xg) //第三步
		uilx.outLiuNianInfo(lni, xg)      //第四步
		j, err := json.Marshal(uilx)      //第五步
		if err != nil {
			panic(err)
		}
		outFile := "data/" + hi.姓名 + " 流星盘 " + time.Now().Format("2006-01-02") + ".txt"
		saveFile(j, outFile)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(j)
	}
	if r.Method == "POST" {
		err := json.NewDecoder(r.Body).Decode(&ln)
		if err != nil {
			panic(err)
		}
		record, _ := json.Marshal(ln)
		saveFile(record, inFile1)
		w.WriteHeader(http.StatusOK)
	}
}

//////////////////////////////////////////////////////////////////
//GetDownHandler(); GetHandler(); GetUpHandler();ZwdsHanderler
