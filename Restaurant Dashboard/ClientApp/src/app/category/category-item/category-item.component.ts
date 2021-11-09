import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() public name:string;
  @Input() public imgUrl:string;
  @Input() public isAdminPanel:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
