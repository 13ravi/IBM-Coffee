import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';
import {StoreModule} from '@ngrx/store';
import { coffeeFeatureKey, reducer } from './store/reducer/coffee.reducer';

@NgModule({
  declarations: [
    ListCoffeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListCoffeeComponent
  ]
})
export class CoffeeModule { }
