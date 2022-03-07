import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Photos } from '../photos.model';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  @Output() searchValue=new EventEmitter<string>();
  search:string="";
  photos:Photos[]=[];
  constructor(private photosService:PhotosService) { }
  selected(searchValue)
  {
    this.searchValue.emit(searchValue)
  }
  ngOnInit(): void {
    this.photos=this.photosService.getPhotos().slice(0,10);
  }
}
