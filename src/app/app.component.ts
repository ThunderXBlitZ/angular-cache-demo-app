import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CacheComparisonComponent } from './components/db-cache/cache-comparison/cache-comparison.component';
import { DataStoreComponent } from "./components/db-cache/data-store/data-store.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, 
    NavBarComponent,
    CacheComparisonComponent, DataStoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-cache-demo-app';
}
