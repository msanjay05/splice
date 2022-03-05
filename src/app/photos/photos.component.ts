import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Photos } from './photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit,OnDestroy,OnChanges {
  photos:Photos[]=[];
  subs:Subscription;
  filteredStatus:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.subs=this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos').pipe(
      map(photos=>{
        return photos.slice(0,10);
      }),
      tap(photos=>{
        this.photos=photos;
      })
    ).subscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.filteredStatus)
  }
  filtervalue(value:string)
  {
    this.filteredStatus=value
  }
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

}
