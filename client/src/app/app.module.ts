import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeoplesService } from './services/peoples.service';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { GetPeoplesComponent } from './components/peoples/get-peoples/get-peoples.component';
import { NewPeoplesComponent } from './components/peoples/new-peoples/new-peoples.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent,
    GetPeoplesComponent,
    NewPeoplesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PeoplesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
