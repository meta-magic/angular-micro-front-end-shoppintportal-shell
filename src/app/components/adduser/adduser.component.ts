import { Component, OnInit } from '@angular/core';
import {AddUserModel} from '../../models/adduser.model'
import { FormGroup, FormBuilder,Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AddUserComponent implements OnInit {
addUserForm : any;
addUserModel: AddUserModel;
  constructor(private fb: FormBuilder,private _route: Router) {
    this.addUserModel = new AddUserModel();
   }

  ngOnInit() {
    this.validateFieldDefinationFields();
  }
  validateFieldDefinationFields() {
    this.addUserForm = this.fb.group({
      userId: ['userId', [Validators.required]],
      password: ['password', [Validators.required]], 
      firstName: ['firstName', [Validators.required]], 
      lastName: ['lastName', [Validators.required]], 
      emailId :['emailId', [Validators.required]], 
      PhoneNo : ['PhoneNo',[Validators.required]]
    });
  }
  onBackClick() {
    this._route.navigate(['login']);
  }
}
