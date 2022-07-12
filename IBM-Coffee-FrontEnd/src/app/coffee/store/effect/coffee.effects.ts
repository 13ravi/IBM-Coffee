import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import { RandomapiService } from 'src/app/services/randomapi.service';
import { getCoffees, getCoffeesSuccess } from '../action/coffee.actions';
import {  catchError,  concatMap,  exhaustMap,  map,  mergeMap,  tap,} from 'rxjs/operators';


@Injectable()
export class CoffeeEffects {


  coffee$= createEffect(()=>
  this.action$.pipe(
    ofType(getCoffees),
    exhaustMap(() =>
      this.randomapiService.getCoffees().pipe(
        map((coffees) => getCoffeesSuccess(coffees)),
        catchError(() => EMPTY)
      )
    )
  )
);

  constructor(private action$: Actions, private randomapiService: RandomapiService) {}


}
