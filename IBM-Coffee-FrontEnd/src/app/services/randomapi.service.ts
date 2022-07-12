import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomapiService {

  http: HttpClient;
  readonly baseUrl ='https://random-data-api.com/api';

  constructor(http: HttpClient) {
    this.http = http;
  }

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.baseUrl + '/coffee/random_coffee?size=10');
  }

}



