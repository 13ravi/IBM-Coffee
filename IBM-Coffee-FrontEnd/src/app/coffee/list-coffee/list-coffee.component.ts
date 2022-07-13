import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Coffee } from 'src/app/models/coffee';

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})

export class ListCoffeeComponent implements OnInit {

  constructor() { 
   } 

  ngOnInit(): void {
  }
}

