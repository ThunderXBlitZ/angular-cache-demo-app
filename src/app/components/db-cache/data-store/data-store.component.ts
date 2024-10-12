import { Component } from '@angular/core';
import { generateIntBetweenInclusive } from '../../../utils/utils';

@Component({
  selector: 'app-data-store',
  standalone: true,
  imports: [],
  templateUrl: './data-store.component.html',
  styleUrl: './data-store.component.scss'
})
export class DataStoreComponent {
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
