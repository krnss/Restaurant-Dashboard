import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(
    private _categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(){
    this._categoryService.getAll().subscribe(data=>{
      this.categories = data as Category[];
    });
  }
}
