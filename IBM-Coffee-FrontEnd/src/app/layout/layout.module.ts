import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { LeftnavComponent } from './leftnav/leftnav.component';



@NgModule({
  declarations: [
    TopmenuComponent,
    LeftnavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
