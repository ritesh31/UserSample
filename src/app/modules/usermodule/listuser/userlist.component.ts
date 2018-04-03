import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './userlist.component.html',
  // styleUrls: ['./app.component.css']
})
export class UserListComponent implements OnInit{

  userList = [];

  constructor(private _userService: UserService) {
  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers()
      .subscribe(data => {
        console.log(data);
        this.userList = data['data'];
        console.log(this.userList)
      })
  }
}
