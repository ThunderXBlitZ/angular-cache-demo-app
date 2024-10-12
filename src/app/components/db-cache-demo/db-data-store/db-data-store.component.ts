import { Component } from '@angular/core';
import { generateIntBetweenInclusive } from '../../../utils/utils';

@Component({
  selector: 'app-db-data-store',
  standalone: true,
  imports: [],
  templateUrl: './db-data-store.component.html',
  styleUrl: './db-data-store.component.scss'
})
export class DBDataStoreComponent {
  dbValue: number | null;

  constructor() {
    this.dbValue = generateIntBetweenInclusive(0, 100);
  }

  quickStart() {
    // emit
    // initalizes value, auto runs all
  }

  clearCaches() {
    // emit
  }

  updateDbValue(value: number) {
    this.dbValue = value;
  }
}
