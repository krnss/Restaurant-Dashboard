import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/service/category.service';
import { ModalService } from 'src/service/modal.service';

@Component({
  selector: 'app-category-admin-list',
  templateUrl: './category-admin-list.component.html',
  styleUrls: ['./category-admin-list.component.scss']
})
export class CategoryAdminListComponent implements OnInit {

  categories: Category[];
  categoryForCreate: Category;
  imageSrc: string | ArrayBuffer;

  createCategryModal:string="craete-category-modal"

  constructor(
    private _modalService: ModalService,
    private _categoryService: CategoryService,
    private ngbModal: NgbModal,
    ) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(){
    this._categoryService.getAll().subscribe(data=>{
      this.categories = data as Category[];
    });
  }

  editCategory(message){
    alert(message);
  }

  deleteCategory(categoryId:number){
    const modalRef = this.ngbModal.open(DeleteModalComponent, {size: 'sm'});
    modalRef.result.then((result) => {
      if(result)
        this._categoryService.delete(categoryId).subscribe(data=>{
          this.categories = this.categories.filter(({ id }) => id !== categoryId);
        });
    });
  }

  openModal(id: string) {
    this._modalService.open(id);
    this.categoryForCreate = new Category();
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }
}
