import { CoffeeState, initialCoffeeState } from './coffee.state';

export interface GlobalState {
  coffee: CoffeeState;
}

export const initialGlobalState: GlobalState = {
  coffee: initialCoffeeState
};
