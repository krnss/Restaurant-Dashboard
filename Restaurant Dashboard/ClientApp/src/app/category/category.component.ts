import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { DataService } from 'src/service/data.service';
import { ModalService } from '../_modal/modal.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category:Category;

  categoryForCreate:Category;
  imageSrc: string | ArrayBuffer;
  file: File;
  public response: {dbPath: ''};

  constructor(
    private modalService: ModalService,
    private categoryDataService:DataService
  ) {
    this.category = new Category(15,"rfntujhsz","https://thumbs.dreamstime.com/z/cofe-cup-3810598.jpg");
    this.categoryDataService.setUrl("/api/category")
   }

  ngOnInit(): void {
  }

  public uploadFinished = (event) => {
    this.response = event;
  }
  craeteCategory(){
    this.categoryDataService.saveImg(this.file).subscribe(data=>{
      console.log(data);
    });
  }

  readURL(event: Event): void {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
        this.file = (<HTMLInputElement>event.target).files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
    this.categoryForCreate = new Category();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
