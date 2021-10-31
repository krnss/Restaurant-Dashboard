import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DataService } from 'src/service/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CategotyModule } from './category/categoty.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CategotyModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
