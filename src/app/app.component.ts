import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './login/login.service';
import { PhotosService } from './photos/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'blog';
  subs:Subscription;
  constructor(private loginService:LoginService,private photosService:PhotosService){}
  ngOnInit(): void {
      this.loginService.autoLogin();
      this.subs=this.photosService.fetchPhotos().subscribe();
  }
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
}
