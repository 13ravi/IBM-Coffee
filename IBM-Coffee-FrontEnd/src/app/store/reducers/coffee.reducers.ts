import {
  initialCoffeeState,
  coffeeAdapter,
} from "../states/coffee.state";
import * as coffee from "../actions/coffee.actions";
import { createReducer, on } from "@ngrx/store";

export const coffeeReducer = createReducer(
  initialCoffeeState,
  on(coffee.loadingCoffees, (state) => ({ ...state, loading: true })),
  on(coffee.loadCoffeesSuccess, (state, { response }) =>
  coffeeAdapter.setAll(response.coffees, {
      ...state,
      error: false,
      loading: false,
      total: response.total,
    })
  ),
  on(coffee.loadCoffeesFailure, (state) =>
  coffeeAdapter.removeAll({
      ...state,
      error: true,
      loading: false,
      total: 0,
    })
  )
);
