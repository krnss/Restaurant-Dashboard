import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DataService } from 'src/service/data.service';
import { AppRoutingModule } from './app-routing.module';
import { CategotyModule } from './category/categoty.module';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { GreadComponent } from './components/gread/gread.component';
import { GreadModule } from './components/gread/gread.module';
import { ProductComponent } from './product/product.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AdminPanelComponent,
    ProductComponent,
    DeleteModalComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CategotyModule,
    GreadModule,
    NgbModule,
  ],
  entryComponents: [DeleteModalComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
