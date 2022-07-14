import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError, of, Observable } from "rxjs";
import { CoffeeParams } from "src/app/models/coffee-params";
import { CoffeeResponse } from "src/app/models/coffee-response"; 
import { RandomapiService } from "src/app/services/randomapi.service"; 
import { loadCoffeesFailure ,loadCoffeesSuccess,loadingCoffees } from "../actions/coffee.actions";

@Injectable()
export class CoffeesEffects {
  constructor(private actions$: Actions, private service: RandomapiService) {}

  public loadCoffes$ = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(loadingCoffees),
        switchMap((payload: { params: CoffeeParams }) =>
          this.service.getCoffees(payload.params).pipe(
            map((response: CoffeeResponse) =>
              loadCoffeesSuccess({ response })
            ),
            catchError((error: HttpErrorResponse) =>
              of(loadCoffeesFailure({ error }))
            )
          )
        )
      )
  );
}
