import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../../models/login.model";
import {HttpService} from "../../services/http.service";
import {SERVICE_URL} from "../../constant/service.constant";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;

  constructor(private _route: Router, private http: HttpClient, private _httpService: HttpService) {
    this.loginModel = new LoginModel();
  }

  ngOnInit() {
  }

  onLoginHandle() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

     this.http.post('http://localhost:8082/api/authenticate/validate', {"userName":"gic","password":"gic"}, httpOptions)
      .subscribe(
        (res: any)=>{
          debugger;
        },
        (error:any)=>{
          debugger;
        },
        ()=>{
          debugger;
        }
      );


/*    const headers = new HttpHeaders().append('Content-Type', 'application/json');
 this.http.post(SERVICE_URL.auth, {"userId":"userId","password":"passwordsss"}, {headers}).subscribe((res: any) => {
   debugger;
 });*/


 /*   this._httpService.restCall(SERVICE_URL.auth, 'post', this.loginModel).subscribe((res: any) => {
       debugger;
      });*/
   // this._route.navigate(['home']);
  }
  onAddUserHandle() {
    this._route.navigate(['add-user']);
  }
}
