import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../modules/usermodule/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  // styleUrls: ['./app.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  loginUser(){
    console.log('isnde llogin user', this.loginForm.value);
    this._userService.loginUser(this.loginForm.value);
    this._router.navigate(['']);

  }
}
