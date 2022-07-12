import { createAction, props } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';

export const addCoffees = createAction(
  '[Coffee] Add Coffee',
  (coffee: Coffee) => ({coffee})
);

export const getCoffees = createAction(
  '[Coffee] Get Coffee'
  );

export const getCoffeesSuccess = createAction(
  '[Coffee] Get Coffee success',
  (coffees: ReadonlyArray<Coffee>) => ({ coffees })
);


