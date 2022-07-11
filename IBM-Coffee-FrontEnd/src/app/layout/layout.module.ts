import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    TopmenuComponent,
    LeftnavComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports:[
    TopmenuComponent,
    LeftnavComponent
  ]
})

export class LayoutModule { }
