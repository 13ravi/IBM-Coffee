import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    TopmenuComponent,
    LeftnavComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    TopmenuComponent,
    LeftnavComponent
  ]
})

export class LayoutModule { }
