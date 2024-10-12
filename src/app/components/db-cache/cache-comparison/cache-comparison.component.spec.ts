import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheComparisonComponent } from './cache-comparison.component';

describe('CacheComparisonComponent', () => {
  let component: CacheComparisonComponent;
  let fixture: ComponentFixture<CacheComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacheComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
