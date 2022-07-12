import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import {select, Store} from '@ngrx/store';
import { coffeeState } from '../store/reducer/coffee.reducer';
import { coffeeSelector } from '../store/selector/coffee.selectors';
import { RandomapiService } from 'src/app/services/randomapi.service';
import { getCoffees } from '../store/action/coffee.actions';



@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})

export class ListCoffeeComponent implements OnInit {

  // coffee$: Observable<Coffee[]>;
  coffee$ = this.store.pipe(select(coffeeSelector));
  

  constructor(private randomapiService: RandomapiService, private store: Store<coffeeState>) { 

    this.coffee$= this.store.pipe(select(coffeeSelector));
    console.log(this.coffee$);
   } 

  ngOnInit(): void {
  }


}

