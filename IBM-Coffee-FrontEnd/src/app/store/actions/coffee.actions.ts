import { createAction, props } from "@ngrx/store";
import { CoffeeParams } from "src/app/models/coffee-params";  
import { CoffeeResponse } from "src/app/models/coffee-response"; 

enum CoffeectionType {
  Loading = "[Coffee] Loading",
  LoadCoffeesSuccess = "[Coffee] Loaded Success",
  loadCoffeesFailure = "[Coffee] Loaded Failure",
}

export const loadingCoffees = createAction(
  CoffeectionType.Loading,
  props<{ params: CoffeeParams }>()
);

export const loadCoffeesSuccess = createAction(
  CoffeectionType.LoadCoffeesSuccess,
  props<{ response: CoffeeResponse }>()
);

export const loadCoffeesFailure = createAction(
  CoffeectionType.loadCoffeesFailure,
  props<{ error: any }>()
);
