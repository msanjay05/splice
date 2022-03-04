import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../login/login.guard";
import { PhotosComponent } from "./photos.component";

const appRoutes:Routes=[
    {path:'',component:PhotosComponent,canActivate:[LoginGuard]},
]

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class PhotosRoutingModule{}
