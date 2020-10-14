import { Component, OnInit } from '@angular/core';
import { Hi, HeroInfo, XingBieS, SiHuaS, HuaGongS, YunLiuS, LiuNianInfo, Lni,OutNull } from "../io-data";
import { IoService } from "../io.service";

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.css']
})
export class PartOneComponent implements OnInit {

  xingBieS = XingBieS;
  siHuaS = SiHuaS;
  yunLiuS = YunLiuS;
  huaGongS = HuaGongS;
  hi: HeroInfo = Hi;
  lni: LiuNianInfo = Lni;

  ltime: Date;
  daYun: number;
  test: number = 0;
  check: string = "disabled";
  outZhuX: string[][];
  outLiuX: string[][];
  

  get diagnostic() { return JSON.stringify(this.outLiuX); }
  constructor(private io: IoService) { }

  ngOnInit() {
    this.getHeroInfo();
    this.nowTime();
  }
  onSubmit() {
    this.test++;
  }
  ///////////////////////////////////////////////////////////////////////////////
  //输入,浏览个人信息;
  getHeroInfo() {
    this.io.getHeroInfo().subscribe(hi => this.hi = hi);
  }
  prevHeroInfo() {
    this.io.prevHeroInfo().subscribe(hi => this.hi = hi);
  }
  nextHeroInfo() {
    this.io.nextHeroInfo().subscribe(hi => this.hi = hi);
  }
  saveHeroInfo() {
    this.onSubmit();
    this.io.saveHeroInfo(this.hi).subscribe();
  }
  ////////////////////////////////////////////////////////////////////////////////
  //排主星盘:
  getZhuX() {
    this.io.getZhuX().subscribe(outZhuX => this.outZhuX = outZhuX);
    this.outLiuX = OutNull;
    this.check = "";
  }
  ////////////////////////////////////////////////////////////////////////////////
  //排流年盘
  getLiuX() {
    if (this.check == "") {
      this.onSubmit();
      this.io.moveLni(this.lni).subscribe();
      this.io.getLiuX().subscribe(outLiuX => this.outLiuX = outLiuX);
      this.daYun = parseInt(this.outLiuX[0][0], 10);
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  //时间变化:
  getLtime() {
    this.lni.liuNian = this.ltime.getFullYear();
    this.lni.liuYue = this.ltime.getMonth() + 1;
    this.lni.liuRi = this.ltime.getDate();
    this.lni.liuShi = this.ltime.getHours();
  }
  nowTime() {
    this.ltime = new Date();
    this.getLtime();
  }
  addOneShi() {
    this.ltime.setHours(this.ltime.getHours() + 1);
    this.getLtime(); this.getLiuX();
  }
  reduceOneShi() {
    this.ltime.setHours(this.ltime.getHours() - 1);
    this.getLtime(); this.getLiuX();
  }
  addOneDay() {
    this.ltime.setDate(this.ltime.getDate() + 1);
    this.getLtime(); this.getLiuX();
  }
  reduceOneDay() {
    this.ltime.setDate(this.ltime.getDate() - 1);
    this.getLtime(); this.getLiuX();
  }
  addOneMonth() {
    this.ltime.setMonth(this.ltime.getMonth() + 1);
    this.getLtime(); this.getLiuX();
  }
  reduceOneMonth() {
    this.ltime.setMonth(this.ltime.getMonth() - 1);
    this.getLtime(); this.getLiuX();
  }
  addOneYear() {
    this.ltime.setFullYear(this.ltime.getFullYear() + 1);
    this.getLtime(); this.getLiuX();
  }
  reduceOneYear() {
    this.ltime.setFullYear(this.ltime.getFullYear() - 1);
    this.getLtime(); this.getLiuX();
  }
  addTenYear() {
    if (this.daYun >= 12) {
      return;
    }
    this.daYun++;
    this.ltime.setFullYear(this.ltime.getFullYear() + 10);
    this.getLtime(); this.getLiuX();
  }
  reduceTenYear() {
    if (this.daYun <= 1) {
      return;
    }
    this.daYun--;
    this.ltime.setFullYear(this.ltime.getFullYear() - 10);
    this.getLtime(); this.getLiuX();
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //旋转宫位:
  nextGid(huagong: string): number {
    let id = this.huaGongS.indexOf(huagong);
    id = (id + 1) % 13;
    return id;
  }
  prevGid(huagong: string): number {
    let id = this.huaGongS.indexOf(huagong);
    id = (id + 12) % 13;
    return id;
  }
  nextGong1() {
    this.lni.huaGong1 = this.huaGongS[this.nextGid(this.lni.huaGong1)]; this.getLiuX();
  }
  prevGong1() {
    this.lni.huaGong1 = this.huaGongS[this.prevGid(this.lni.huaGong1)]; this.getLiuX();
  }
  nextGong2() {
    this.lni.huaGong2 = this.huaGongS[this.nextGid(this.lni.huaGong2)]; this.getLiuX();
  }
  prevGong2() {
    this.lni.huaGong2 = this.huaGongS[this.prevGid(this.lni.huaGong2)]; this.getLiuX();
  }
  nextGong3() {
    this.lni.huaGong3 = this.huaGongS[this.nextGid(this.lni.huaGong3)]; this.getLiuX();
  }
  prevGong3() {
    this.lni.huaGong3 = this.huaGongS[this.prevGid(this.lni.huaGong3)]; this.getLiuX();
  }
  nextGong4() {
    this.lni.huaGong4 = this.huaGongS[this.nextGid(this.lni.huaGong4)]; this.getLiuX();
  }
  prevGong4() {
    this.lni.huaGong4 = this.huaGongS[this.prevGid(this.lni.huaGong4)]; this.getLiuX();
  }
  nextGong5() {
    this.lni.huaGong5 = this.huaGongS[this.nextGid(this.lni.huaGong5)]; this.getLiuX();
  }
  prevGong5() {
    this.lni.huaGong5 = this.huaGongS[this.prevGid(this.lni.huaGong5)]; this.getLiuX();
  }
  nextGong6() {
    this.lni.huaGong6 = this.huaGongS[this.nextGid(this.lni.huaGong6)]; this.getLiuX();
  }
  prevGong6() {
    this.lni.huaGong6 = this.huaGongS[this.prevGid(this.lni.huaGong6)]; this.getLiuX();
  }
  ////////////////////////////////////////////////////////////////////////////////
}
