import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  errorMsg: string = null;
  loginForm:FormGroup;

  constructor(private loginService:LoginService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'phoneNo': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/),Validators.minLength(10),Validators.maxLength(10)]),
      'password': new FormControl(null, Validators.required),
    });
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit() {
    const phoneNo =this.loginForm.value.phoneNo
    const password = this.loginForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.loginService.login(phoneNo, password);
    } else {
      authObs = this.loginService.signup(phoneNo, password);
    }

    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['/posts']);
      },
    );

  }
  onHandleError() {
  }
  ngOnDestroy(): void {
  }
}
