import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddsucculentComponent } from './addsucculent/addsucculent.component';
import { QAComponent } from './q-a/q-a.component';
import { RequestComponent } from './request/request.component';
import { SharableComponent } from './sharable/sharable.component';
import { ShowmydetailsComponent } from './showmydetails/showmydetails.component';
import { AnswersComponent } from './answers/answers.component';
import { ResponceComponent } from './responce/responce.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
  { path: 'addsucculent', component: AddsucculentComponent },
  { path: 'q_a', component: QAComponent },
  { path: 'request/:id', component: RequestComponent },
  { path: 'sharable', component:SharableComponent },
  { path: 'showmydetails', component: ShowmydetailsComponent },
  { path: 'answers/:id', component: AnswersComponent },
  { path: 'responce/:id', component: ResponceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
