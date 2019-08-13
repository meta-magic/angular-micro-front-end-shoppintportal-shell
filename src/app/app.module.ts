import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
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
    StoreModule.forRoot({}),
    AmexioWidgetModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
