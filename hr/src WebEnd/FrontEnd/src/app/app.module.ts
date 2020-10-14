import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { MainComponent } from './main/main.component';
import { IoService } from "./io.service";
import { PartThreeComponent } from './part-three/part-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PartOneComponent,
    PartTwoComponent,
    MainComponent,
    PartThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
