import { Component } from '@angular/core';
import { DBCacheComparisonComponent } from '../db-cache-comparison/db-cache-comparison.component';
import { DBDataStoreComponent } from '../db-data-store/db-data-store.component';

@Component({
  selector: 'app-db-cache-page',
  standalone: true,
  imports: [DBDataStoreComponent, DBCacheComparisonComponent],
  templateUrl: './db-cache-page.component.html',
  styleUrl: './db-cache-page.component.scss'
})
export class DBCachePageComponent {

}
