import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnDestroy {
  subs:Subscription;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.subs= this.postService.fetchPosts().subscribe();
  }
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

}
