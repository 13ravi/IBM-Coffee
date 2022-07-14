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

 readonly baseUrl ='https://random-data-api.com/api';

constructor(private httpClient: HttpClient) { }


public getCoffees(params: CoffeeParams): Observable<CoffeeResponse> {
 
  this.loadCoffees();
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

private loadCoffees(){
  coffees: this.httpClient.get<Coffee[]>(this.baseUrl + '/coffee/random_coffee?size=50');
  return true;
}

getData() {
  return this.httpClient.get<Coffee>(this.baseUrl + '/coffee/random_coffee?size=50').pipe(
    map(data => { return data
    }),
  );
}


}

// const coffees = <Coffee[]>[];

const coffees = <Coffee[]>[
  <Coffee>{
    id:'3481',
    uid:'9f65fceb-96f5-4c5f-8e51-fc2703ac3a8c',
    blend_name:"The Captain's Cake",
    origin:"Boyacá, Colombia",
    variety:"SL28",
    notes:"rounded, juicy, almond, sundried tomato, rubber",
    intensifier:"astringent"
  },
  <Coffee>{
  id:'3481',
  uid:'9f65fceb-96f5-4c5f-8e51-fc2703ac3a8c',
  blend_name:"The Captain's Cake",
  origin:"Boyacá, Colombia",
  variety:"SL28",
  notes:"rounded, juicy, almond, sundried tomato, rubber",
  intensifier:"astringent"
  }
];

