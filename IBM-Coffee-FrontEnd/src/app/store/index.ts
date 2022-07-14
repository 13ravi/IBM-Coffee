import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './states/global.state';
import { coffeeReducer } from './reducers/coffee.reducers';

export const reducers: ActionReducerMap<GlobalState> = {
  coffee: coffeeReducer
};
