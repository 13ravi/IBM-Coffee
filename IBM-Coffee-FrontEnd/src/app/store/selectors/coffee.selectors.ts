import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoffeeState, coffeeAdapter } from '../states/coffee.state';

export const {
  selectIds: _selectCoffeeDataIds,
  selectEntities: _selectCoffeeEntities,
  selectAll: _selectAllCoffee,
  selectTotal: _selectCoffeeTotal
} = coffeeAdapter.getSelectors();

export const selectCoffeeState = createFeatureSelector<CoffeeState>('coffee');

export const selectCoffeeIds = createSelector(
  selectCoffeeState,
  _selectCoffeeDataIds
);

export const selectCoffeeEntities = createSelector(
  selectCoffeeState,
  _selectCoffeeEntities
);

export const selectAllCoffee = createSelector(
  selectCoffeeState,
  _selectAllCoffee
);

export const selectCoffeeError = createSelector(
  selectCoffeeState,
  (state: CoffeeState): boolean => state.error
);

export const selectCoffeeLoading = createSelector(
  selectCoffeeState,
  (state: CoffeeState): boolean => state.loading
);


export const selectCoffeeTotal = createSelector(
  selectCoffeeState,
  (state: CoffeeState): number => state.total
);
