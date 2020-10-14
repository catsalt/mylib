(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-main></app-main> -->\n<app-part-one></app-part-one>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./part-one/part-one.component */ "./src/app/part-one/part-one.component.ts");
/* harmony import */ var _part_two_part_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./part-two/part-two.component */ "./src/app/part-two/part-two.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _io_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./io.service */ "./src/app/io.service.ts");
/* harmony import */ var _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./part-three/part-three.component */ "./src/app/part-three/part-three.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_5__["PartOneComponent"],
                _part_two_part_two_component__WEBPACK_IMPORTED_MODULE_6__["PartTwoComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_9__["PartThreeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_io_service__WEBPACK_IMPORTED_MODULE_8__["IoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/io-data.ts":
/*!****************************!*\
  !*** ./src/app/io-data.ts ***!
  \****************************/
/*! exports provided: HeroInfo, LiuNianInfo, XingBieS, SiHuaS, HuaGongS, YunLiuS, Hi, Lni, OutNull1, OutNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroInfo", function() { return HeroInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiuNianInfo", function() { return LiuNianInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XingBieS", function() { return XingBieS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiHuaS", function() { return SiHuaS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuaGongS", function() { return HuaGongS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YunLiuS", function() { return YunLiuS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hi", function() { return Hi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lni", function() { return Lni; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutNull1", function() { return OutNull1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutNull", function() { return OutNull; });
var HeroInfo = /** @class */ (function () {
    function HeroInfo(xingMing, xingBie, nian, yue, ri, shi) {
        this.xingMing = xingMing;
        this.xingBie = xingBie;
        this.nian = nian;
        this.yue = yue;
        this.ri = ri;
        this.shi = shi;
    }
    return HeroInfo;
}());

;
var LiuNianInfo = /** @class */ (function () {
    function LiuNianInfo(outPut1, huaGong1, outPut2, huaGong2, outPut3, huaGong3, outPut4, huaGong4, outPut5, huaGong5, outPut6, huaGong6, siHua, liuNian, liuYue, liuRi, liuShi) {
        this.outPut1 = outPut1;
        this.huaGong1 = huaGong1;
        this.outPut2 = outPut2;
        this.huaGong2 = huaGong2;
        this.outPut3 = outPut3;
        this.huaGong3 = huaGong3;
        this.outPut4 = outPut4;
        this.huaGong4 = huaGong4;
        this.outPut5 = outPut5;
        this.huaGong5 = huaGong5;
        this.outPut6 = outPut6;
        this.huaGong6 = huaGong6;
        this.siHua = siHua;
        this.liuNian = liuNian;
        this.liuYue = liuYue;
        this.liuRi = liuRi;
        this.liuShi = liuShi;
    }
    return LiuNianInfo;
}());

;
var XingBieS = ["男", "女"];
var SiHuaS = ["中州", "全书"];
var HuaGongS = ["命", "父", "福", "宅", "官", "友", "迁", "疾", "财", "子", "配", "兄", "原"];
var YunLiuS = ["本命", "大运", "流年", "流月", "流日", "流时", "留空"];
var Hi = { "xingMing": "某女士", "xingBie": "女", "nian": 1955, "yue": 3, "ri": 7, "shi": 4 };
var Lni = {
    outPut1: "本命", huaGong1: "原", outPut2: "留空", huaGong2: "原", outPut3: "留空", huaGong3: "原",
    outPut4: "留空", huaGong4: "原", outPut5: "留空", huaGong5: "原", outPut6: "留空", huaGong6: "原",
    siHua: "中州", liuNian: 1999, liuYue: 9, liuRi: 9, liuShi: 9
};
var OutNull1 = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];
var OutNull = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];


/***/ }),

/***/ "./src/app/io.service.ts":
/*!*******************************!*\
  !*** ./src/app/io.service.ts ***!
  \*******************************/
/*! exports provided: IoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoService", function() { return IoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var IoService = /** @class */ (function () {
    // hi: HeroInfo;
    // lni: LiuNianInfo;
    // zhuX: string[][];
    function IoService(http) {
        this.http = http;
    }
    /////////////////////////////////////////////////////////////////////////////
    IoService.prototype.getHeroInfo = function () {
        return this.http.get('/api/heroInfo', httpOptions);
    };
    IoService.prototype.prevHeroInfo = function () {
        return this.http.get("/api/heroInfo/prev");
    };
    IoService.prototype.nextHeroInfo = function () {
        return this.http.get("/api/heroInfo/next");
    };
    IoService.prototype.saveHeroInfo = function (hi) {
        return this.http.post('/api/heroInfo', hi, httpOptions);
    };
    /////////////////////////////////////////////////////////////////////////////
    IoService.prototype.getLiuNianInof = function () {
        return this.http.get('/api/liuNianInfo', httpOptions);
    };
    IoService.prototype.moveLni = function (lni) {
        return this.http.post('/api/liuNianInfo/liuX', lni, httpOptions);
    };
    IoService.prototype.getLiuX = function () {
        return this.http.get("/api/liuNianInfo/liuX", httpOptions);
    };
    /////////////////////////////////////////////////////////////////////////////
    IoService.prototype.getZhuX = function () {
        return this.http.get("/api/heroInfo/zhuX", httpOptions);
    };
    IoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IoService);
    return IoService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* 主框架 */\r\n.level1{\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-columns: (19em)[4];\r\n        grid-template-columns: repeat(4,19em);\r\n        -ms-grid-rows: (14.6em)[4];\r\n        grid-template-rows: repeat(4,14.6em);\r\n    justify-content: center;\r\n        grid-template-areas: \r\n\r\n        \"si wu wei shen\"\r\n        \"chen c c you\"\r\n        \"mao c c xu\"\r\n        \"yin chou zi hai\";\r\n\r\n}\r\n/* 中间区域 */\r\n.level2{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 2;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: c;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    /* grid-template-columns: 1em 10em 12em; */\r\n    -ms-grid-rows: 12em 12.5em;\r\n        grid-template-rows: 12em 12.5em;\r\n    border: 1px solid blueviolet;\r\n    /* align-content: center; */\r\n    margin-right: 0.28em;\r\n    margin-top: 0.1em; \r\n    margin-bottom: 0.28em;\r\n    /* padding:0.5em; */\r\n    /* padding-right: 1em; */\r\n   \r\n}\r\n.level3{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    grid-area: yin;\r\n}\r\n.level4{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: mao;\r\n}\r\n.level5{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: chen;\r\n}\r\n.level6{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: si;\r\n}\r\n.level7{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    grid-area: wu;\r\n}\r\n.level8{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n    grid-area: wei;\r\n}\r\n.level9{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 4;\r\n    grid-area: shen;\r\n}\r\n.level10{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 4;\r\n    grid-area: you;\r\n}\r\n.level11{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 4;\r\n    grid-area: xu;\r\n}\r\n.level12{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 4;\r\n    grid-area: hai;\r\n}\r\n.level13{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 3;\r\n    grid-area: zi;\r\n}\r\n.level14{\r\n    /* border: 1px solid orchid; */\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 2;\r\n    grid-area: chou;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"level1\">\n  <div class=\"level2\">\n    <!-- <app-part-three [(zhuX)]=\"outZhuX[0]\" [(liuX)]=\"outLiuX[0]\"></app-part-three> -->\n  </div>\n\n  <div class=\"level3\">\n    <app-part-two [(zhuX)]=\"outZhuX[1]\" [(liuX)]=\"outLiuX[1]\"></app-part-two>\n  </div>\n  <div class=\"level4\">\n    <app-part-two [(zhuX)]=\"outZhuX[2]\" [(liuX)]=\"outLiuX[2]\"></app-part-two>\n  </div>\n  <div class=\"level5\">\n    <app-part-two [(zhuX)]=\"outZhuX[3]\" [(liuX)]=\"outLiuX[3]\"></app-part-two>\n  </div>\n  <div class=\"level6\">\n    <app-part-two [(zhuX)]=\"outZhuX[4]\" [(liuX)]=\"outLiuX[4]\"></app-part-two>\n  </div>\n  <div class=\"level7\">\n    <app-part-two [(zhuX)]=\"outZhuX[5]\" [(liuX)]=\"outLiuX[5]\"></app-part-two>\n  </div>\n  <div class=\"level8\">\n    <app-part-two [(zhuX)]=\"outZhuX[6]\" [(liuX)]=\"outLiuX[6]\"></app-part-two>\n  </div>\n  <div class=\"level9\">\n    <app-part-two [(zhuX)]=\"outZhuX[7]\" [(liuX)]=\"outLiuX[7]\"></app-part-two>\n  </div>\n  <div class=\"level10\">\n    <app-part-two [(zhuX)]=\"outZhuX[8]\" [(liuX)]=\"outLiuX[8]\"></app-part-two>\n  </div>\n  <div class=\"level11\">\n    <app-part-two [(zhuX)]=\"outZhuX[9]\" [(liuX)]=\"outLiuX[9]\"> </app-part-two>\n  </div>\n  <div class=\"level12\">\n    <app-part-two [(zhuX)]=\"outZhuX[10]\" [(liuX)]=\"outLiuX[10]\"></app-part-two>\n  </div>\n  <div class=\"level13\">\n    <app-part-two [(zhuX)]=\"outZhuX[11]\" [(liuX)]=\"outLiuX[11]\"></app-part-two>\n  </div>\n  <div class=\"level14\">\n    <app-part-two [(zhuX)]=\"outZhuX[12]\" [(liuX)]=\"outLiuX[12]\"></app-part-two>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MainComponent.prototype, "outZhuX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MainComponent.prototype, "outLiuX", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/part-one/part-one.component.css":
/*!*************************************************!*\
  !*** ./src/app/part-one/part-one.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.level21{\r\n\r\n    display: -ms-grid;\r\n\r\n    display: grid;\r\n        -ms-grid-columns: 15em 15em 15em 15em;\r\n        grid-template-columns: 15em 15em 15em 15em;\r\n        -ms-grid-rows: 3em 12.5em;\r\n        grid-template-rows: 3em 12.5em;\r\n    border: 1px solid blueviolet;\r\n    /* width: 60em; */\r\n    /* margin-left: 3em; */\r\n    margin-left: 22em;\r\n    margin-right: 22em;\r\n   \r\n    justify-content: center;\r\n    align-items: center;\r\n        grid-template-areas: \r\n        \"a a b b\"\r\n        \"c d e f\";\r\n}\r\n\r\n.level28{\r\n    \r\n    color: rgb(77, 4, 4);\r\n    /* margin-left: 22em;\r\n    margin-right: 22em; */\r\n    min-width:70em;\r\n}\r\n\r\n.level26{\r\n\r\n    -ms-grid-row: 1;\r\n\r\n    -ms-grid-column: 1;\r\n\r\n    -ms-grid-column-span: 2;\r\n\r\n    grid-area: a;\r\n}\r\n\r\n.level27{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: b;\r\n}\r\n\r\n.level22{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: c;\r\n    width: 15em;\r\n    /* border: 1px solid black; */\r\n}\r\n\r\n.level221{\r\n    width: 4em;\r\n}\r\n\r\n.level23{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: d;\r\n    width: 12em;\r\n\r\n    /* border: 1px solid black; */\r\n}\r\n\r\n.level24{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 3;\r\n    grid-area: e;\r\n    width: 15em;\r\n\r\n    /* border: 1px solid black; */\r\n}\r\n\r\n.level25{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 4;\r\n    grid-area: f;\r\n    width: 15em;\r\n    /* border: 1px solid black; */\r\n}\r\n\r\n.level231{\r\n    width: 4em;\r\n\r\n}\r\n\r\n.level241{\r\n    width: 4em;\r\n\r\n}\r\n\r\n.level251{\r\n    width:2em;\r\n\r\n}"

/***/ }),

/***/ "./src/app/part-one/part-one.component.html":
/*!**************************************************!*\
  !*** ./src/app/part-one/part-one.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main [outZhuX]=\"outZhuX\" [outLiuX]=\"outLiuX\">\n</app-main>\n\n\n<!-- <div>{{diagnostic}}</div> -->\n\n<div class=\"level21\">\n\n  <div class=\"level26\">\n    <br>\n    <label for=\"\">命例: </label>\n    <button type=\"button\" (click)=\"prevHeroInfo()\">下一个</button>\n    <button type=\"button\" (click)=\"nextHeroInfo()\">上一个</button>\n    <button type=\"button\" (click)=\"saveHeroInfo()\" [disabled]=\"!formZero.form.valid\">保存 | 确认</button>\n  </div>\n  <div class=\"level27\">\n    <br>\n    <button type=\"button\" (click)=\"getZhuX()\" [disabled]=\"!formZero.form.valid\">排基础盘</button>\n    <button type=\"button\" (click)=\"getLiuX()\" [disabled]=\"check\">排流年盘</button>\n    <button type=\"button\" (click)=\"nowTime()\">现在时间</button>\n  </div>\n\n\n\n  <form (submit)=\"onSubmit()\" #formZero=\"ngForm\">\n    <div class=\"level22\">\n\n      <br>\n      <label for=\"xingMing\">姓名: </label>\n      <input required type=\"text\" [(ngModel)]=\"hi.xingMing\" name=\"xingMing\" value=\"demo\" style=\"width: 6em\">\n      <br>\n      <label for=\"xingBie\">性别: </label>\n      <select type=\"text\" [(ngModel)]=\"hi.xingBie\" name=\"xingBie\" style=\"width: 6.45em\">\n        <option *ngFor=\"let item of xingBieS\" [value]=\"item\">{{item}}</option>\n      </select>\n      <br>\n      <label for=\"nian\">生年: </label>\n      <input type=\"number\" required [(ngModel)]=\"hi.nian\" name=\"nian\" min=\"1900\" max=\"2100\" class=\"level221\">\n      <br>\n      <label for=\"yue\">生月: </label>\n      <input type=\"number\" required [(ngModel)]=\"hi.yue\" name=\"yue\" min=\"1\" max=\"12\" class=\"level221\">\n      <br>\n      <label for=\"ri\">生日: </label>\n      <input type=\"number\" required [(ngModel)]=\"hi.ri\" name=\"ri\" min=\"1\" max=\"31\" class=\"level221\">\n      <br>\n      <label for=\"shi\">生时: </label>\n      <input type=\"number\" required [(ngModel)]=\"hi.shi\" name=\"shi\" min=\"1\" max=\"24\" class=\"level221\">\n\n    </div>\n  </form>\n\n  <form (submit)=\"onSubmit()\" #formOne='ngForm'>\n    <div class=\"level23\">\n\n      <br>\n      <label for=\"\">输出: </label>\n      <select [(ngModel)]=\"lni.outPut6\" name=\"outPut6\" class=\"level231\">\n        <option *ngFor=\"let item of yunLiuS\" [value]=\"item\">{{item}}</option>\n      </select>\n      <br>\n      <label for=\"\">输出: </label>\n      <select [(ngModel)]=\"lni.outPut5\" name=\"outPut5\" class=\"level231\">\n        <option *ngFor=\"let item of yunLiuS\" [value]=\"item\">{{item}}</option>\n      </select>\n      <br>\n      <label for=\"\">输出: </label>\n      <select [(ngModel)]=\"lni.outPut4\" name=\"outPut4\" class=\"level231\">\n        <option *ngFor=\"let item of yunLiuS\" [value]=\"item\">{{item}}</option>\n      </select>\n      <br>\n      <label for=\"\">输出: </label>\n      <select [(ngModel)]=\"lni.outPut3\" name=\"outPut3\" class=\"level231\">\n        <option *ngFor=\"let item of yunLiuS\" [value]=\"item\">{{item}}</option>\n      </select>\n      <br>\n      <label for=\"\">输出: </label>\n      <select [(ngModel)]=\"lni.outPut2\" name=\"outPut2\" class=\"level231\">\n        <option *ngFor=\"let item of yunLiuS\" [value]=\"item\">{{item}}</option>\n      </select>\n      <br>\n      <label for=\"\">输出: </label>\n      <select [(ngModel)]=\"lni.outPut1\" name=\"outPut1\" class=\"level231\">\n        <option *ngFor=\"let item of yunLiuS\" [value]=\"item\">{{item}}</option>\n      </select>\n\n    </div>\n  </form>\n\n  <form (submit)=\"onSubmit()\" #formTwo='ngForm'>\n    <div class=\"level24\">\n\n      <br>\n      <label for=\"liuShi\">流时: </label>\n      <button (click)=\"reduceOneShi()\">(-1)</button>\n      <input type=\"number\" [(ngModel)]=\"lni.liuShi\" name=\"liuShi\" class=\"level241\" disabled>\n      <button (click)=\"addOneShi()\">(+1)</button>\n      <br>\n      <label for=\"liuRi\">流日: </label>\n      <button (click)=\"reduceOneDay()\">(-1)</button>\n      <input type=\"number\" [(ngModel)]=\"lni.liuRi\" name=\"liuRi\" class=\"level241\" disabled>\n      <button (click)=\"addOneDay()\">(+1)</button>\n      <br>\n      <label for=\"liuYue\">流月: </label>\n      <button (click)=\"reduceOneMonth()\">(-1)</button>\n      <input type=\"number\" [(ngModel)]=\"lni.liuYue\" name=\"liuYue\" class=\"level241\" disabled>\n      <button (click)=\"addOneMonth()\">(+1)</button>\n      <br>\n      <label for=\"liuNian\">流年: </label>\n      <button (click)=\"reduceOneYear()\">(-1)</button>\n      <input type=\"number\" [(ngModel)]=\"lni.liuNian\" name=\"liuNian\" class=\"level241\" disabled>\n      <button (click)=\"addOneYear()\">(+1)</button>\n      <br>\n      <label for=\"daYun\">大运: </label>\n      <button (click)=\"reduceTenYear()\">(-1)</button>\n      <input type=\"number\" [(ngModel)]=\"daYun\" name=\"daYun\" class=\"level241\" disabled>\n      <button (click)=\"addTenYear()\">(+1)</button>\n      <br>{{ltime}}{{test}}\n\n    </div>\n  </form>\n\n\n  <form (submit)=\"onSubmit()\" #formThree='ngForm'>\n    <div class=\"level25\">\n\n      <br>\n      <button (click)=\"nextGong6()\">顺旋</button>\n      <input type=\"text\" [(ngModel)]=\"lni.huaGong6\" name=\"huaGong6\" class=\"level251\">\n      <label for=\"\">宫干化</label>\n      <button (click)=\"prevGong6()\">逆旋</button>\n      <br>\n      <button (click)=\"nextGong5()\">顺旋</button>\n      <input type=\"text\" [(ngModel)]=\"lni.huaGong5\" name=\"huaGong5\" class=\"level251\">\n      <label for=\"\">宫干化</label>\n      <button (click)=\"prevGong5()\">逆旋</button>\n      <br>\n      <button (click)=\"nextGong4()\">顺旋</button>\n      <input type=\"text\" [(ngModel)]=\"lni.huaGong4\" name=\"huaGong4\" class=\"level251\">\n      <label for=\"\">宫干化</label>\n      <button (click)=\"prevGong4()\">逆旋</button>\n      <br>\n      <button (click)=\"nextGong3()\">顺旋</button>\n      <input type=\"text\" [(ngModel)]=\"lni.huaGong3\" name=\"huaGong3\" class=\"level251\">\n      <label for=\"\">宫干化</label>\n      <button (click)=\"prevGong3()\">逆旋</button>\n      <br>\n      <button (click)=\"nextGong2()\">顺旋</button>\n      <input type=\"text\" [(ngModel)]=\"lni.huaGong2\" name=\"huaGong2\" class=\"level251\">\n      <label for=\"\">宫干化</label>\n      <button (click)=\"prevGong2()\">逆旋</button>\n      <br>\n      <button (click)=\"nextGong1()\">顺旋</button>\n      <input type=\"text\" [(ngModel)]=\"lni.huaGong1\" name=\"huaGong1\" class=\"level251\">\n      <label for=\"\">宫干化</label>\n      <button (click)=\"prevGong1()\">逆旋</button>\n\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/part-one/part-one.component.ts":
/*!************************************************!*\
  !*** ./src/app/part-one/part-one.component.ts ***!
  \************************************************/
/*! exports provided: PartOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartOneComponent", function() { return PartOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _io_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io-data */ "./src/app/io-data.ts");
/* harmony import */ var _io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../io.service */ "./src/app/io.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartOneComponent = /** @class */ (function () {
    function PartOneComponent(io) {
        this.io = io;
        this.xingBieS = _io_data__WEBPACK_IMPORTED_MODULE_1__["XingBieS"];
        this.siHuaS = _io_data__WEBPACK_IMPORTED_MODULE_1__["SiHuaS"];
        this.yunLiuS = _io_data__WEBPACK_IMPORTED_MODULE_1__["YunLiuS"];
        this.huaGongS = _io_data__WEBPACK_IMPORTED_MODULE_1__["HuaGongS"];
        this.hi = _io_data__WEBPACK_IMPORTED_MODULE_1__["Hi"];
        this.lni = _io_data__WEBPACK_IMPORTED_MODULE_1__["Lni"];
        this.test = 0;
        this.check = "disabled";
    }
    Object.defineProperty(PartOneComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.outLiuX); },
        enumerable: true,
        configurable: true
    });
    PartOneComponent.prototype.ngOnInit = function () {
        this.getHeroInfo();
        this.nowTime();
    };
    PartOneComponent.prototype.onSubmit = function () {
        this.test++;
    };
    ///////////////////////////////////////////////////////////////////////////////
    //输入,浏览个人信息;
    PartOneComponent.prototype.getHeroInfo = function () {
        var _this = this;
        this.io.getHeroInfo().subscribe(function (hi) { return _this.hi = hi; });
    };
    PartOneComponent.prototype.prevHeroInfo = function () {
        var _this = this;
        this.io.prevHeroInfo().subscribe(function (hi) { return _this.hi = hi; });
    };
    PartOneComponent.prototype.nextHeroInfo = function () {
        var _this = this;
        this.io.nextHeroInfo().subscribe(function (hi) { return _this.hi = hi; });
    };
    PartOneComponent.prototype.saveHeroInfo = function () {
        this.onSubmit();
        this.io.saveHeroInfo(this.hi).subscribe();
    };
    ////////////////////////////////////////////////////////////////////////////////
    //排主星盘:
    PartOneComponent.prototype.getZhuX = function () {
        var _this = this;
        this.io.getZhuX().subscribe(function (outZhuX) { return _this.outZhuX = outZhuX; });
        this.outLiuX = _io_data__WEBPACK_IMPORTED_MODULE_1__["OutNull"];
        this.check = "";
    };
    ////////////////////////////////////////////////////////////////////////////////
    //排流年盘
    PartOneComponent.prototype.getLiuX = function () {
        var _this = this;
        if (this.check == "") {
            this.onSubmit();
            this.io.moveLni(this.lni).subscribe();
            this.io.getLiuX().subscribe(function (outLiuX) { return _this.outLiuX = outLiuX; });
            this.daYun = parseInt(this.outLiuX[0][0], 10);
        }
    };
    ////////////////////////////////////////////////////////////////////////////////
    //时间变化:
    PartOneComponent.prototype.getLtime = function () {
        this.lni.liuNian = this.ltime.getFullYear();
        this.lni.liuYue = this.ltime.getMonth() + 1;
        this.lni.liuRi = this.ltime.getDate();
        this.lni.liuShi = this.ltime.getHours();
    };
    PartOneComponent.prototype.nowTime = function () {
        this.ltime = new Date();
        this.getLtime();
    };
    PartOneComponent.prototype.addOneShi = function () {
        this.ltime.setHours(this.ltime.getHours() + 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.reduceOneShi = function () {
        this.ltime.setHours(this.ltime.getHours() - 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.addOneDay = function () {
        this.ltime.setDate(this.ltime.getDate() + 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.reduceOneDay = function () {
        this.ltime.setDate(this.ltime.getDate() - 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.addOneMonth = function () {
        this.ltime.setMonth(this.ltime.getMonth() + 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.reduceOneMonth = function () {
        this.ltime.setMonth(this.ltime.getMonth() - 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.addOneYear = function () {
        this.ltime.setFullYear(this.ltime.getFullYear() + 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.reduceOneYear = function () {
        this.ltime.setFullYear(this.ltime.getFullYear() - 1);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.addTenYear = function () {
        if (this.daYun >= 12) {
            return;
        }
        this.daYun++;
        this.ltime.setFullYear(this.ltime.getFullYear() + 10);
        this.getLtime();
        this.getLiuX();
    };
    PartOneComponent.prototype.reduceTenYear = function () {
        if (this.daYun <= 1) {
            return;
        }
        this.daYun--;
        this.ltime.setFullYear(this.ltime.getFullYear() - 10);
        this.getLtime();
        this.getLiuX();
    };
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    //旋转宫位:
    PartOneComponent.prototype.nextGid = function (huagong) {
        var id = this.huaGongS.indexOf(huagong);
        id = (id + 1) % 13;
        return id;
    };
    PartOneComponent.prototype.prevGid = function (huagong) {
        var id = this.huaGongS.indexOf(huagong);
        id = (id + 12) % 13;
        return id;
    };
    PartOneComponent.prototype.nextGong1 = function () {
        this.lni.huaGong1 = this.huaGongS[this.nextGid(this.lni.huaGong1)];
        this.getLiuX();
    };
    PartOneComponent.prototype.prevGong1 = function () {
        this.lni.huaGong1 = this.huaGongS[this.prevGid(this.lni.huaGong1)];
        this.getLiuX();
    };
    PartOneComponent.prototype.nextGong2 = function () {
        this.lni.huaGong2 = this.huaGongS[this.nextGid(this.lni.huaGong2)];
        this.getLiuX();
    };
    PartOneComponent.prototype.prevGong2 = function () {
        this.lni.huaGong2 = this.huaGongS[this.prevGid(this.lni.huaGong2)];
        this.getLiuX();
    };
    PartOneComponent.prototype.nextGong3 = function () {
        this.lni.huaGong3 = this.huaGongS[this.nextGid(this.lni.huaGong3)];
        this.getLiuX();
    };
    PartOneComponent.prototype.prevGong3 = function () {
        this.lni.huaGong3 = this.huaGongS[this.prevGid(this.lni.huaGong3)];
        this.getLiuX();
    };
    PartOneComponent.prototype.nextGong4 = function () {
        this.lni.huaGong4 = this.huaGongS[this.nextGid(this.lni.huaGong4)];
        this.getLiuX();
    };
    PartOneComponent.prototype.prevGong4 = function () {
        this.lni.huaGong4 = this.huaGongS[this.prevGid(this.lni.huaGong4)];
        this.getLiuX();
    };
    PartOneComponent.prototype.nextGong5 = function () {
        this.lni.huaGong5 = this.huaGongS[this.nextGid(this.lni.huaGong5)];
        this.getLiuX();
    };
    PartOneComponent.prototype.prevGong5 = function () {
        this.lni.huaGong5 = this.huaGongS[this.prevGid(this.lni.huaGong5)];
        this.getLiuX();
    };
    PartOneComponent.prototype.nextGong6 = function () {
        this.lni.huaGong6 = this.huaGongS[this.nextGid(this.lni.huaGong6)];
        this.getLiuX();
    };
    PartOneComponent.prototype.prevGong6 = function () {
        this.lni.huaGong6 = this.huaGongS[this.prevGid(this.lni.huaGong6)];
        this.getLiuX();
    };
    PartOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-one',
            template: __webpack_require__(/*! ./part-one.component.html */ "./src/app/part-one/part-one.component.html"),
            styles: [__webpack_require__(/*! ./part-one.component.css */ "./src/app/part-one/part-one.component.css")]
        }),
        __metadata("design:paramtypes", [_io_service__WEBPACK_IMPORTED_MODULE_2__["IoService"]])
    ], PartOneComponent);
    return PartOneComponent;
}());



/***/ }),

/***/ "./src/app/part-three/part-three.component.css":
/*!*****************************************************!*\
  !*** ./src/app/part-three/part-three.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/part-three/part-three.component.html":
/*!******************************************************!*\
  !*** ./src/app/part-three/part-three.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>基本信息输入为</legend>\n  <tr>{{zhuX[0]}} </tr>\n  <tr>{{zhuX[1]}}</tr>\n  <tr>{{zhuX[2]}}</tr>\n  <tr>{{zhuX[3]}}</tr>\n  <tr>{{zhuX[4]}}</tr>\n  <tr>{{zhuX[5]}}</tr>\n\n</fieldset>\n<fieldset>\n  <legend>流年信息输入为</legend>\n  <!-- {{liuX[0]}} -->\n  <tr>{{liuX[1]}}</tr>\n  <tr>{{liuX[2]}}</tr>\n  <tr>{{liuX[3]}}</tr>\n  <tr>{{liuX[4]}}</tr>\n  <tr>{{liuX[5]}}</tr>\n  <tr>{{liuX[6]}}</tr>\n</fieldset>"

/***/ }),

/***/ "./src/app/part-three/part-three.component.ts":
/*!****************************************************!*\
  !*** ./src/app/part-three/part-three.component.ts ***!
  \****************************************************/
/*! exports provided: PartThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartThreeComponent", function() { return PartThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartThreeComponent = /** @class */ (function () {
    function PartThreeComponent() {
    }
    PartThreeComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartThreeComponent.prototype, "zhuX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartThreeComponent.prototype, "liuX", void 0);
    PartThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-three',
            template: __webpack_require__(/*! ./part-three.component.html */ "./src/app/part-three/part-three.component.html"),
            styles: [__webpack_require__(/*! ./part-three.component.css */ "./src/app/part-three/part-three.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartThreeComponent);
    return PartThreeComponent;
}());



/***/ }),

/***/ "./src/app/part-two/part-two.component.css":
/*!*************************************************!*\
  !*** ./src/app/part-two/part-two.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\n    border: 0.5px solid rgb(32, 5, 41);\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    width: 1em;\r\n    height: 1em;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/part-two/part-two.component.html":
/*!**************************************************!*\
  !*** ./src/app/part-two/part-two.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"level1\">\n    <div class=\"level2\">\n  \n      <div class=\"level31\">\n        <tr id=\"zhuX\">\n          <td id=\"28\">{{zhuX[33]}}</td>\n          <td id=\"26\">{{zhuX[31]}}</td>\n          <td id=\"24\">{{zhuX[29]}}</td>\n          <td id=\"22\">{{zhuX[27]}}</td>\n          <td id=\"20\">{{zhuX[25]}}</td>\n          <td id=\"18\">{{zhuX[23]}}</td>\n          <td id=\"16\">{{zhuX[21]}}</td>\n          <td id=\"14\">{{zhuX[19]}}</td>\n          <td id=\"12\">{{zhuX[17]}}</td>\n          <td id=\"10\">{{zhuX[15]}}</td>\n          <td id=\"8\">{{zhuX[13]}}</td>\n          <td id=\"6\">{{zhuX[11]}}</td>\n          <td id=\"4\">{{zhuX[9]}}</td>\n          <td id=\"2\">{{zhuX[7]}}</td>\n          <td id=\"0\" class=\"\">{{zhuX[5]}}</td>\n        </tr>\n      </div>\n \n      <tr id=\"miaoWang\" class=\"level32\">\n        <td id=\"29\">{{zhuX[34]}}</td>\n        <td id=\"27\">{{zhuX[32]}}</td>\n        <td id=\"25\">{{zhuX[30]}}</td>\n        <td id=\"23\">{{zhuX[28]}}</td>\n        <td id=\"21\">{{zhuX[26]}}</td>\n        <td id=\"19\">{{zhuX[24]}}</td>\n        <td id=\"17\">{{zhuX[22]}}</td>\n        <td id=\"15\">{{zhuX[20]}}</td>\n        <td id=\"13\">{{zhuX[18]}}</td>\n        <td id=\"11\">{{zhuX[16]}}</td>\n        <td id=\"9\">{{zhuX[14]}}</td>\n        <td id=\"7\">{{zhuX[12]}}</td>\n        <td id=\"5\">{{zhuX[10]}}</td>\n        <td id=\"3\">{{zhuX[8]}}</td>\n        <td id=\"1\">{{zhuX[6]}}</td>\n      </tr>\n  \n      <tr id=\"6\" class=\"level33\">\n        <td id=\"liuMing\">{{liuX[107]}}</td>\n        <td id=\"gongMing\" colspan=\"2\">{{liuX[108]}}</td>\n        <td id=\"xiaoXian\" colspan=\"2\" class=\"level36\">{{liuX[52]}}</td>\n        <td id=\"liuX\">{{liuX[111]}}</td>\n        <td id=\"liuX\">{{liuX[110]}}</td>\n        <td id=\"liuX\">{{liuX[109]}}</td>\n        <td id=\"huaGong\">{{liuX[106]}}</td>\n        <td id=\"huaX\">{{liuX[105]}} </td>\n        <td id=\"huaX\">{{liuX[104]}} </td>\n        <td id=\"huaX\">{{liuX[103]}} </td>\n        <td id=\"huaX\">{{liuX[102]}} </td>\n        <td id=\"huaX\">{{liuX[101]}} </td>\n        <td id=\"huaX\">{{liuX[100]}} </td>\n  \n  \n      </tr>\n      <tr id=\"5\" class=\"level34\">\n        <td id=\"liuMing\">{{liuX[87]}}</td>\n        <td id=\"gongMing\" colspan=\"2\">{{liuX[88]}}</td>\n        <td id=\"jiangQian\" colspan=\"2\" class=\"level36\">{{liuX[51]}}</td>\n        <td id=\"liuX\">{{liuX[91]}}</td>\n        <td id=\"liuX\">{{liuX[90]}}</td>\n        <td id=\"liuX\">{{liuX[89]}}</td>\n        <td id=\"huaGong\">{{liuX[86]}}</td>\n        <td id=\"huaX\">{{liuX[85]}} </td>\n        <td id=\"huaX\">{{liuX[84]}} </td>\n        <td id=\"huaX\">{{liuX[83]}} </td>\n        <td id=\"huaX\">{{liuX[82]}} </td>\n        <td id=\"huaX\">{{liuX[81]}} </td>\n        <td id=\"huaX\">{{liuX[80]}} </td>\n  \n  \n      </tr>\n      <tr id=\"4\" class=\"level35\">\n        <td id=\"liuMing\">{{liuX[67]}}</td>\n        <td id=\"gongMing\" colspan=\"2\">{{liuX[68]}}</td>\n        <td id=\"boShi\" colspan=\"2\" class=\"level36\">{{liuX[50]}}</td>\n        <td id=\"liuX\">{{liuX[71]}}</td>\n        <td id=\"liuX\">{{liuX[70]}}</td>\n        <td id=\"liuX\">{{liuX[69]}}</td>\n        <td id=\"huaGong\">{{liuX[66]}}</td>\n        <td id=\"huaX\">{{liuX[65]}} </td>\n        <td id=\"huaX\">{{liuX[64]}} </td>\n        <td id=\"huaX\">{{liuX[63]}} </td>\n        <td id=\"huaX\">{{liuX[62]}} </td>\n        <td id=\"huaX\">{{liuX[61]}} </td>\n        <td id=\"huaX\">{{liuX[60]}} </td>\n  \n  \n      </tr>\n      <tr id=\"3\" class=\"level36\">\n        <td id=\"liuMing\">{{liuX[47]}}</td>\n        <td id=\"gongMing\" colspan=\"2\">{{liuX[48]}}</td>\n        <td id=\"suiQian\" colspan=\"2\">{{liuX[49]}}</td>\n        <td id=\"liuX\">{{liuX[55]}}</td>\n        <td id=\"liuX\">{{liuX[54]}}</td>\n        <td id=\"liuX\">{{liuX[53]}}</td>\n        <td id=\"huaGong\">{{liuX[46]}}</td>\n        <td id=\"huaX\">{{liuX[45]}} </td>\n        <td id=\"huaX\">{{liuX[44]}} </td>\n        <td id=\"huaX\">{{liuX[43]}} </td>\n        <td id=\"huaX\">{{liuX[42]}} </td>\n        <td id=\"huaX\">{{liuX[41]}} </td>\n        <td id=\"huaX\">{{liuX[40]}} </td>\n  \n  \n      </tr>\n      <tr id=\"2\" class=\"level37\">\n        <td id=\"liuMing\">{{liuX[27]}}</td>\n        <td id=\"gongMing\" colspan=\"2\">{{liuX[28]}}</td>\n        <td id=\"changSheng\" colspan=\"2\">{{zhuX[4]}}</td>\n        <td id=\"liuX\">{{liuX[31]}}</td>\n        <td id=\"liuX\">{{liuX[30]}}</td>\n        <td id=\"liuX\">{{liuX[29]}}</td>\n        <td id=\"huaGong\">{{liuX[26]}}</td>\n        <td id=\"huaX\">{{liuX[25]}} </td>\n        <td id=\"huaX\">{{liuX[24]}} </td>\n        <td id=\"huaX\">{{liuX[23]}} </td>\n        <td id=\"huaX\">{{liuX[22]}} </td>\n        <td id=\"huaX\">{{liuX[21]}} </td>\n        <td id=\"huaX\">{{liuX[20]}} </td>\n  \n  \n      </tr>\n      <tr id=\"1\" class=\"level38\">  \n        <td id=\"liuMing\">{{liuX[7]}}</td>\n        <td id=\"gongMing\" colspan=\"2\">{{zhuX[3]}} </td>\n        <td id=\"gongGan\">{{zhuX[0]}} </td>\n        <td id=\"gongZhi\">{{zhuX[1]}} </td>\n        <td id=\"daXian\" colspan=\"3\">{{zhuX[2]}} </td>\n        <td id=\"huaGong\">{{liuX[6]}}</td>\n        <td id=\"huaX\">{{liuX[5]}} </td>\n        <td id=\"huaX\">{{liuX[4]}} </td>\n        <td id=\"huaX\">{{liuX[3]}} </td>\n        <td id=\"huaX\">{{liuX[2]}} </td>\n        <td id=\"huaX\">{{liuX[1]}} </td>\n        <td id=\"huaX\">{{liuX[0]}} </td>\n  \n      </tr>\n    </div>\n  </div>\n  <div></div>\n  "

/***/ }),

/***/ "./src/app/part-two/part-two.component.ts":
/*!************************************************!*\
  !*** ./src/app/part-two/part-two.component.ts ***!
  \************************************************/
/*! exports provided: PartTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartTwoComponent", function() { return PartTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartTwoComponent = /** @class */ (function () {
    function PartTwoComponent() {
    }
    PartTwoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartTwoComponent.prototype, "zhuX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartTwoComponent.prototype, "liuX", void 0);
    PartTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-two',
            template: __webpack_require__(/*! ./part-two.component.html */ "./src/app/part-two/part-two.component.html"),
            styles: [__webpack_require__(/*! ./part-two.component.css */ "./src/app/part-two/part-two.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartTwoComponent);
    return PartTwoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Zwds\src\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map