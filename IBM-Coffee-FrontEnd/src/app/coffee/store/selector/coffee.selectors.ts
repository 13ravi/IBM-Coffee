import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coffeeState } from '../reducer/coffee.reducer';

import * as fromCoffee from '../reducer/coffee.reducer';
import { Coffee } from 'src/app/models/coffee';

export const coffeeSelector = createSelector(
  (state: coffeeState) => state.coffees,
  (coffees: ReadonlyArray<Coffee>) => coffees
);
