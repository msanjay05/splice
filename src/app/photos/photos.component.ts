import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Photos } from './photos.model';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit,OnDestroy {
  photos:Photos[]=[];
  filteredStatus:string="";
  constructor(private http:HttpClient,private photosService:PhotosService) { }

  ngOnInit(): void {
    this.photos=this.photosService.getPhotos().slice(0,10);
  }
  filtervalue(value:string)
  {
    this.filteredStatus=value
  }
  ngOnDestroy(): void {
  }

}
