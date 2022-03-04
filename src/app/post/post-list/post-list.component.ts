import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[]=[];
  constructor(private postService: PostService,
    private router: Router,
    private route: ActivatedRoute) {
}

  ngOnInit(): void {
    this.posts=this.postService.getPosts(0);
    // console.log(this.posts);
  }
  loadMore()
  {
    this.posts=this.postService.getPosts(+this.posts[this.posts.length-1].id);
    this.router.navigate(['/posts'])
  }
  loadPosts()
  {
    this.posts=this.postService.getPosts(0);
    this.router.navigate(['/posts'])
  }
}
