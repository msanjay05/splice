import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "../login/login.service";


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    userSub:Subscription;
    constructor(private loginService:LoginService) { }
    ngOnInit(): void {
      this.userSub = this.loginService.user.subscribe(user => {
        this.isAuthenticated = !!user;
      });
    }
    ngOnDestroy(): void {

    }
    onLogOut() {
      this.loginService.logout();
    }
}
