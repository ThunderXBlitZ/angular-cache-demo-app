import { Component } from '@angular/core';
import { BrowserCacheComparisonComponent } from "../browser-cache-comparison/browser-cache-comparison.component";
import { BrowserDataStoreComponent } from "../browser-data-store/browser-data-store.component";

@Component({
  selector: 'app-browser-cache-page',
  standalone: true,
  imports: [BrowserDataStoreComponent, BrowserCacheComparisonComponent],
  templateUrl: './browser-cache-page.component.html',
  styleUrl: './browser-cache-page.component.scss'
})
export class BrowserCachePageComponent {

}
