import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserCachePageComponent } from './browser-cache-page.component';

describe('BrowserCachePageComponent', () => {
  let component: BrowserCachePageComponent;
  let fixture: ComponentFixture<BrowserCachePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserCachePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserCachePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
