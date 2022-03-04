import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../login/login.guard";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostComponent } from "./post.component";

const appRoutes:Routes=[
    {path:'',component:PostComponent,
        children:[
            {path:':id',component:PostDetailComponent,canActivate:[LoginGuard]},
        ]
    },
]

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class PostRoutingModule{}
