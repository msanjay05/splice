import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Photos } from "./photos.model";

@Injectable({
  providedIn:'root'
})
export class PhotosService{

  private photos:Photos[]=[]
  constructor(private http:HttpClient){}
  fetchPhotos()
  {
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos').pipe(
      tap(photos=>{
        this.photos=photos;
      }))
  }

  getPhotos(){
    return this.photos;
  }
}
