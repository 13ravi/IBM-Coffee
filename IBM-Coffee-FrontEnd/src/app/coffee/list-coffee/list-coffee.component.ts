import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import {select, Store} from '@ngrx/store';
import { coffeeState } from '../store/reducer/coffee.reducer';
import { selectCoffee } from '../store/selector/coffee.selectors';


@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})

export class ListCoffeeComponent {

  coffee$: Observable<Coffee[]>;
  constructor(private store: Store<coffeeState>) { 
    this.coffee$= this.store.pipe(select(selectCoffee));
   } 

}

