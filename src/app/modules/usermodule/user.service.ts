import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

  url = 'https://reqres.in/api/users';

  constructor(private _http: HttpClient) {

  }

  loginUser(user){
    console.log("user", user);
    localStorage.setItem('loggedInUser', user);
  }

  createUser(user){
    console.log(this._http)
    return this._http.post(this.url, user);
      // .map(data => {
      //   console.log(data);
      // });
  }

  getUsers(){
    return this._http.get(this.url)
      .map(data => {
        console.log(data);
        return data;
      })
  }

}
