import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductComponent } from './product/product.component';
import { CategoryAdminListComponent } from './category/category-admin-list/category-admin-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'admin-panel', component: AdminPanelComponent, children:[
      { path: 'category', component: CategoryAdminListComponent },
      { path: 'product', component: ProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
