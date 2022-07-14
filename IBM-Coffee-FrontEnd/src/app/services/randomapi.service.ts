import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CoffeeParams } from '../models/coffee-params';
import { CoffeeResponse } from '../models/coffee-response';

@Injectable({
  providedIn: 'root'
})


export class RandomapiService {

//   http: HttpClient;
 // readonly baseUrl ='https://random-data-api.com/api';

//   constructor(http: HttpClient) {
//     this.http = http;
//   }

//   getCoffees(): Observable<Coffee[]> {
//     return this.http.get<Coffee[]>(this.baseUrl + '/coffee/random_coffee?size=10');
//   }
// }

constructor(private httpClient: HttpClient) { }

public getCoffees(params: CoffeeParams): Observable<CoffeeResponse> {
  return of(this.getFakeCoffees(params)).pipe(delay(3000));
}

private getFakeCoffees(params: CoffeeParams): CoffeeResponse {
  let data = <Coffee[]>[];

  data = coffees.filter(c => ~(c.blend_name.toLocaleLowerCase()).indexOf(params.filter)
    || ~(c.origin.toLocaleLowerCase()).indexOf(params.filter)
    || ~(c.variety.toLocaleLowerCase()).indexOf(params.filter));  

  data.sort(
    (a, b) =>
      ((a as any)[params.sortField] > (b as any)[params.sortField] ? 1 : -1) *
      (params.sortDirection === "asc" ? 1 : -1)
  );    
  
  return {
    total: data.length,
    coffees: data.slice((params.pageIndex) * params.pageSize, (params.pageIndex + 1) * params.pageSize)
  };
}


}



const coffees = <Coffee[]>[
  <Coffee>{
    id:'sdfdfds',
    uid:'asdasdsa',
    blend_name:'string',
    origin:'string',
    variety:'string',
    notes:'string',
    intensifier:'string'
  },
  <Coffee>{
    id:'sdfdfds',
    uid:'asdasdsa',
    blend_name:'string',
    origin:'string',
    variety:'string',
    notes:'string',
    intensifier:'string'
  },
  <Coffee>{
    id:'sdfdfds',
    uid:'asdasdsa',
    blend_name:'string',
    origin:'string',
    variety:'string',
    notes:'string',
    intensifier:'string'
  },
  <Coffee>{
    id:'sdfdfds',
    uid:'asdasdsa',
    blend_name:'string',
    origin:'string',
    variety:'string',
    notes:'string',
    intensifier:'string'
  },
  <Coffee>{
    id:'sdfdfds',
    uid:'asdasdsa',
    blend_name:'string',
    origin:'string',
    variety:'string',
    notes:'string',
    intensifier:'string'
  },
];

