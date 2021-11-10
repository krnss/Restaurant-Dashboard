import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryComponent } from './category.component';
import { ModalModule } from '../components/_modal/modal.module';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from '../components/upload/upload.component';
import { CategoryCreateModalComponent } from './category-create-modal/category-create-modal.component';
import { GreadComponent } from '../components/gread/gread.component';
import { ModalService } from '../components/_modal/modal.service';
import { GreadModule } from '../components/gread/gread.module';

@NgModule({
  declarations: [
    CategoryItemComponent,
    CategoryComponent,
    UploadComponent,
    CategoryCreateModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    GreadModule
  ],
  providers:[ModalService],
  exports: [
    CategoryItemComponent,
    CategoryComponent,
    UploadComponent,
    CategoryCreateModalComponent
  ]
})
export class CategotyModule { }
