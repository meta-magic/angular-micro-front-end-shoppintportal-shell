import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private store: Store<any>) {
  }

  ngOnInit() {
    this.store.select<any>('productState').subscribe((customerState: any) =>  {
      debugger;
      console.log(customerState);
      });
  }

  logOutHandle(event: any) {
    this._router.navigate(['login']);
  }


  addProductHandle(event: any) {
    this._router.navigate(['home/product/add-product']);
  }

  orderHandle(event: any) {
    this._router.navigate(['home/order']);
  }

  catlogHandle(event: any) {
    this._router.navigate(['home/product/catlog']);
  }

  cartHandle(event: any) {
    this._router.navigate(['home/cart']);

  }
}
