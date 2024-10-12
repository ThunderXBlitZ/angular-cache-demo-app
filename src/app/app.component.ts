import { Component } from '@angular/core';
import { RouterOutlet, ROUTES } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { DBCachePageComponent } from './components/db-cache-demo/db-cache-page/db-cache-page.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, 
    NavBarComponent, DBCachePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {provide: ROUTES, useValue: routes }
  ]
})
export class AppComponent {
  title = 'angular-cache-demo-app';
}
