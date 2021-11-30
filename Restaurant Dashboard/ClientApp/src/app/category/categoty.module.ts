import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';

import { ModalModule } from '../components/_modal/modal.module';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from '../components/upload/upload.component';
import { CategoryCreateModalComponent } from './category-create-modal/category-create-modal.component';
import { ModalService } from '../../service/modal.service';
import { GreadModule } from '../components/gread/gread.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAdminListComponent } from './category-admin-list/category-admin-list.component';

@NgModule({
  declarations: [
    CategoryItemComponent,
    CategoryListComponent,
    CategoryAdminListComponent,
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
    CategoryListComponent,
    CategoryAdminListComponent,
    UploadComponent,
    CategoryCreateModalComponent
  ]
})
export class CategotyModule { }
