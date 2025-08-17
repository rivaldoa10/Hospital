import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Notfound } from './pages/notfound/notfound';

const routes : Routes = [
  {path:"dashboard", component: Dashboard},
  {path:"notfound", component: Notfound},
  {path:"", redirectTo:"/dashboard", pathMatch:"full"},
  {path:"**", component: Notfound},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
