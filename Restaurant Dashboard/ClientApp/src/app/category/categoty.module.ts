import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryComponent } from './category.component';
import { ModalModule } from '../_modal/modal.module';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from '../upload/upload.component';

@NgModule({
  declarations: [
    CategoryItemComponent,
    CategoryComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule
  ],
  exports: [
    CategoryItemComponent,
    CategoryComponent,
  ]
})
export class CategotyModule { }
