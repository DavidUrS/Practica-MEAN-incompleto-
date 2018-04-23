import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GetPeoplesComponent }  from "./components/peoples/get-peoples/get-peoples.component";
import { NewPeoplesComponent }  from "./components/peoples/new-peoples/new-peoples.component";

const routes : Routes = [
  {path: 'get', component: GetPeoplesComponent },
  {path: 'new', component: NewPeoplesComponent},
  {path: '', redirectTo: '/get', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
