import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() public category:Category;

  constructor() { }

  ngOnInit(): void {
  }

}
