import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;

  constructor(private _route: Router) {
    this.loginModel = new LoginModel();
  }

  ngOnInit() {
  }

  onLoginHandle() {
    this._route.navigate(['home']);

  }

}
