import { HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { DataService } from 'src/service/data.service';
import { ModalService } from '../_modal/modal.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category;

  categoryForCreate:Category;
  imageSrc: string | ArrayBuffer;


  createCategryModal:string="craete-category-modal"

  constructor(
    private modalService: ModalService,
    private categoryDataService:DataService
    ) {
      this.categoryDataService.setUrl("/api/categories");
   }

  ngOnInit(): void {
    this.loadAllData();
  }
  loadAllData(){
    this.categoryDataService.getAll().subscribe(data=>{
      this.categories = data;
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
    this.categoryForCreate = new Category();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
