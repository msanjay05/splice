import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostItemComponent } from "./post-list/post-item/post-item.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostComponent } from "./post.component";
import { PostRoutingModule } from "./post.routing.module";


@NgModule({
    declarations:[
      PostComponent,
      PostListComponent,
      PostItemComponent,
      PostDetailComponent
    ],
    imports:[
        RouterModule,
        PostRoutingModule,
        CommonModule
    ]
})
export class PostModule{

}
