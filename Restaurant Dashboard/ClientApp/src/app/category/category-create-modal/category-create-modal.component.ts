import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Category } from 'src/models/category';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-category-create-modal',
  templateUrl: './category-create-modal.component.html',
  styleUrls: ['./category-create-modal.component.css']
})
export class CategoryCreateModalComponent implements OnInit {

  category:Category;
  file: File;
  imageSrc: string | ArrayBuffer;
  public response: {dbPath: ''};

  @Output() createNewCategory = new EventEmitter();
  @Output() clouseModal = new EventEmitter();

  @ViewChild('upload', {static: true}) uploadComponent;

  constructor(
    private categoryDataService:DataService) {
    this.categoryDataService.setUrl("/api/categories");
  }

  ngOnInit(): void {
    this.category = new Category(0);
  }

  craeteCategory(){

    this.uploadComponent.saveFile().subscribe(data => {
      this.category.imgUrl = (data as any).imgUrl;

      this.categoryDataService.create(this.category).subscribe(()=>{
        this.createNewCategory.emit();
        this.clouseModal.emit();
        this.category = new Category(0);

        this.uploadComponent.remuveFile();
      })
    });
  }

  public uploadFinished = (event) => {
    this.response = event;
  }

  readURL(event: Event): void {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
        this.file = (<HTMLInputElement>event.target).files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

}
