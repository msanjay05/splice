import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { User } from './login.model';

export interface AuthResponseData {
  user: {
    phoneNo: string,
    _id: string
  },
  token: string
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signup(phoneNo: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://sanjay-task-manager-api.herokuapp.com/users',
        {
          phoneNo: phoneNo,
          password: password,
          headers:{
            'content-type':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT',
            'Access-Control-Allow-Credentials': 'true'
          }
        }
      )
      .pipe(
        tap(resData => {
          const user = new User(resData.user.phoneNo,resData.user._id, resData.token);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        })
      );
  }

  login(phoneNo: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://sanjay-task-manager-api.herokuapp.com/users/login',
        {
          phoneNo: phoneNo,
          password: password,
          headers:{
            'content-type':'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT',
            'Access-Control-Allow-Credentials': 'true'
          }
        }
      )
      .pipe(
        tap(resData => {
          const user = new User(resData.user.phoneNo,resData.user._id, resData.token);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        })
      );
  }

  autoLogin() {
    const userData: {
      phoneNo: string;
      _id: string;
      token: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.phoneNo,
      userData._id,
      userData.token,
    );
    if(loadedUser.token)
    {
      this.user.next(loadedUser)
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

}
