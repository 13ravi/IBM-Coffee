import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RandomapiService } from './services/randomapi.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
// import { StoreModule } from '@ngrx/store';
import { StorageModule } from './store/storage.module';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatSidenavModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule,
    StorageModule
  ],
  providers: [RandomapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
