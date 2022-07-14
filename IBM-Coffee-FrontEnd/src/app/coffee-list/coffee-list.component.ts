import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, merge, Subject, Subscription, from } from "rxjs";
import { Coffee } from 'src/app/models/coffee';

import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { GlobalState } from '../store/states/global.state'; 
import { Store, select } from "@ngrx/store";
import {
  selectAllCoffee,
  selectCoffeeTotal,
  selectCoffeeError,
  selectCoffeeLoading
}from "../store/selectors/coffee.selectors";
import {loadingCoffees} from "../store/actions/coffee.actions";
import { MatPaginator } from "@angular/material/paginator";
import { tap, debounceTime, distinctUntilChanged } from "rxjs/operators";


@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})

export class CoffeeListComponent  implements OnInit, OnDestroy, AfterViewInit
{
  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  public displayedColumns: string[] = [
    "id",
    "uid",
    "blend_name",
    "origin",
    "variety",
    "notes",
    "intensifier",
  ];


  public dataSource!: MatTableDataSource<Coffee>;
  public coffeeTotal!: number;
  public noData: Coffee[] = [<Coffee>{}];
  public loading!: boolean;
  public error$!: Observable<boolean>;
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: "role", direction: "asc" };

  private filter: string = "";
  private subscription: Subscription = new Subscription();

  constructor(public store: Store<GlobalState>) {}

  public ngOnInit(): void {
    this.store
      .pipe(select(selectAllCoffee))
      .subscribe((coffees) => this.initializeData(coffees));
    this.store
      .pipe(select(selectCoffeeTotal))
      .subscribe((total) => (this.coffeeTotal = total));
    this.subscription.add(
      this.store.pipe(select(selectCoffeeLoading)).subscribe((loading) => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      })
    );
    this.error$ = this.store.pipe(select(selectCoffeeError));
  }

  public ngAfterViewInit(): void {
    this.loadCoffees();
    let filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );

    let sort$ = this.sort.sortChange.pipe(
      tap(() => (this.paginator.pageIndex = 0))
    );



    this.subscription.add(
      merge(filter$, sort$, this.paginator.page)
        .pipe(tap(() => this.loadCoffees()))
        .subscribe()
    );
  }

  private loadCoffees(): void {
    this.store.dispatch(
      loadingCoffees({
        params: {
          filter: this.filter.toLocaleLowerCase(),
          pageIndex: this.paginator.pageIndex,
          pageSize: this.paginator.pageSize,
          sortDirection: this.sort.direction,
          sortField: this.sort.active,
        },
      })
    );
  }

  private initializeData(coffees: Coffee[]): void {
    this.dataSource = new MatTableDataSource(
      coffees.length ? coffees : this.noData
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public retry(): void {
    this.loadCoffees();
  }
}

