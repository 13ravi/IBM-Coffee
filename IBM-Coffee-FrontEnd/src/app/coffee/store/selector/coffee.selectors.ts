import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCoffee from '../reducer/coffee.reducer';

export const selectCustomerState = createFeatureSelector<fromCoffee.coffeeState>(
fromCoffee.coffeeFeatureKey,
);

export const selectCoffee = createSelector(
selectCustomerState,
  (state: fromCoffee.coffeeState) => state.coffee
);

