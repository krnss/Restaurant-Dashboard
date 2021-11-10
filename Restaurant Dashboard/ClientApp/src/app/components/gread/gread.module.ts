import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreadComponent } from './gread.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GreadComponent],
  exports: [GreadComponent]
})
export class GreadModule { }
