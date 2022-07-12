import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoffeeComponent } from './coffee/list-coffee/list-coffee.component';


const routes: Routes = [
{path:'',component:ListCoffeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
