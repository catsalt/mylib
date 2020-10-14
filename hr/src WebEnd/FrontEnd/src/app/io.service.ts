import { Injectable } from '@angular/core';
import { HeroInfo, Hi, LiuNianInfo, Lni } from "./io-data";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, Observer } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IoService {

  // hi: HeroInfo;
  // lni: LiuNianInfo;
  // zhuX: string[][];
  constructor(private http: HttpClient) { }

  /////////////////////////////////////////////////////////////////////////////
  getHeroInfo(): Observable<HeroInfo> {
    return this.http.get<HeroInfo>('/api/heroInfo', httpOptions);
  }
  prevHeroInfo(): Observable<HeroInfo> {
    return this.http.get<HeroInfo>("/api/heroInfo/prev");
  }
  nextHeroInfo(): Observable<HeroInfo> {
    return this.http.get<HeroInfo>("/api/heroInfo/next");
  }
  saveHeroInfo(hi: HeroInfo): Observable<HeroInfo> {
    return this.http.post<HeroInfo>('/api/heroInfo', hi, httpOptions);
  }
  /////////////////////////////////////////////////////////////////////////////
  getLiuNianInof(): Observable<LiuNianInfo> {
    return this.http.get<LiuNianInfo>('/api/liuNianInfo', httpOptions);
  }
  moveLni(lni: LiuNianInfo): Observable<LiuNianInfo> {
    return this.http.post<LiuNianInfo>('/api/liuNianInfo/liuX', lni, httpOptions);
  }
  getLiuX(): Observable<string[][]> {
    return this.http.get<string[][]>("/api/liuNianInfo/liuX", httpOptions);
  }

  /////////////////////////////////////////////////////////////////////////////
  getZhuX(): Observable<string[][]> {
    return this.http.get<string[][]>("/api/heroInfo/zhuX", httpOptions);
  }
  /////////////////////////////////////////////////////////////////////////////
}
