import { Action, createReducer, on } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';
import { RouterReducerState } from '@ngrx/router-store';
import { getCoffeesSuccess } from '../action/coffee.actions';
export const coffeeFeatureKey = 'coffee';

// export interface coffeeState {
//   coffee: Coffee[];
// }

// export const initialState: coffeeState = {
//   coffee: []
// };

// export const coffeeReducer = createReducer(
//   initialState,
// );

// export function reducer(state: coffeeState | undefined, action: Action): any {
//   return coffeeReducer(state, action);
// }
export interface coffeeState {
  coffees: ReadonlyArray<Coffee>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeesSuccess, (state, { coffees }) => [...coffees]),
);


