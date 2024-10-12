import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserDataStoreComponent } from './browser-data-store.component';

describe('BrowserDataStoreComponent', () => {
  let component: BrowserDataStoreComponent;
  let fixture: ComponentFixture<BrowserDataStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserDataStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserDataStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
