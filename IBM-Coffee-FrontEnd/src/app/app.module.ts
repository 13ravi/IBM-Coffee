import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoffeeModule } from './coffee/coffee.module'; 
import { RandomapiService } from './services/randomapi.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CoffeeModule, 
    MatSidenavModule,
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  providers: [RandomapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
