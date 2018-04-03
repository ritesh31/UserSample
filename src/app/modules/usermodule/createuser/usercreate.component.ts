import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'user-create',
  templateUrl: './usercreate.component.html',
  // styleUrls: ['./app.component.css']
})
export class UserCreateComponent implements OnInit{
  title = 'app';


  createUserForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _router: Router, private route: ActivatedRoute,) {
    this.createForm();
  }

  ngOnInit(){
    var editUserId = this.route.params['_value'].id;
    if(editUserId){
      this._userService.getUsers()
        .subscribe(data => {
          var users = data['data'];
          var selectedUser = users.find(user => user.id == editUserId);
          console.log(selectedUser);
          this.createUserForm.setValue({
            firstname: selectedUser.first_name,
            lastname: selectedUser.last_name
          });
        });
    }
  }

  createForm() {
    this.createUserForm = this._formBuilder.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      // city: ['', Validators.required ]
    });
  }

  createUser(){
    this._userService.createUser(this.createUserForm.value)
      .subscribe(data => {
        console.log(data);
        this._router.navigate(['/userlist']);
      })

  }
}
