import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { TopmenuComponent } from './layout/topmenu/topmenu.component';
import { LeftnavComponent } from './layout/leftnav/leftnav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IBM-Coffee-FrontEnd';
}
