import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddsucculentComponent } from './addsucculent/addsucculent.component';
import { QAComponent } from './q-a/q-a.component';
import { ShowmydetailsComponent } from './showmydetails/showmydetails.component';
import { SharableComponent } from './sharable/sharable.component';
import { RequestComponent } from './request/request.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AnswersComponent } from './answers/answers.component';
import { ResponceComponent } from './responce/responce.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddsucculentComponent,
    QAComponent,
    ShowmydetailsComponent,
    SharableComponent,
    RequestComponent,
    AnswersComponent,
    ResponceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
