import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserCacheComparisonComponent } from './browser-cache-comparison.component';

describe('BrowserCacheComparisonComponent', () => {
  let component: BrowserCacheComparisonComponent;
  let fixture: ComponentFixture<BrowserCacheComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserCacheComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserCacheComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
