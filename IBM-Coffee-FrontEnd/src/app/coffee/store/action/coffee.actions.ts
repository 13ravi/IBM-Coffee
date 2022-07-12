import { createAction, props } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';

export const coffeeCoffees = createAction(
  '[Coffee] Coffee Coffees',
  (coffee: Coffee) => ({coffee})
);

