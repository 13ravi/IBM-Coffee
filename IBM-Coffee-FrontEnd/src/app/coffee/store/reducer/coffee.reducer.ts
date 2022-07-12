import { Action, createReducer, on } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';

export const coffeeFeatureKey = 'coffee';

export interface coffeeState {
  coffee: Coffee[];
}

export const initialState: coffeeState = {
  coffee: []
};

export const coffeeReducer = createReducer(
  initialState,
);

export function reducer(state: coffeeState | undefined, action: Action): any {
  return coffeeReducer(state, action);
}
