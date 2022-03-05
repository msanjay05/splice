import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  @Output() searchValue=new EventEmitter<string>();
  search:string="";
  searchString=[
    'accusamus',
    'reprehenderit',
    'officia'
  ]
  constructor() { }
  selected(searchValue)
  {
    this.searchValue.emit(searchValue)
  }
  ngOnInit(): void {
  }

}
