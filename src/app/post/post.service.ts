import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "./post.model";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class PostService{
  posts:Post[]=[];
    constructor(private http:HttpClient){}
  fetchPosts()
  {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      tap(post=>{
        this.posts=post
      })
    );
  }
  getPosts(index:number)
  {
    return this.posts.slice(index,index+10);
  }
  getPost(id:number)
  {
    return this.posts[id];
  }
}
