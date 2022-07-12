import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';
import {StoreModule} from '@ngrx/store';
import { coffeeFeatureKey, coffeeReducer } from './store/reducer/coffee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './store/effect/coffee.effects';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListCoffeeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    EffectsModule.forFeature([CoffeeEffects]) 
   ],
  exports:[
    ListCoffeeComponent
  ]
})
export class CoffeeModule { }
