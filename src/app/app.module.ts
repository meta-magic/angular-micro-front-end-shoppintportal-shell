import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import {AmexioWidgetModule} from 'amexio-ng-extensions';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmexioWidgetModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
