import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "../filter.pipe";
import { CustomSelectComponent } from "./custom-select/custom-select.component";
import { PhotosComponent } from "./photos.component";
import { PhotosRoutingModule } from "./photos.routing.module";


@NgModule({
    declarations:[
      PhotosComponent,
      FilterPipe,
      CustomSelectComponent
    ],
    imports:[
      PhotosRoutingModule,
      CommonModule,
      FormsModule
    ]
})
export class PhotosModule{

}
