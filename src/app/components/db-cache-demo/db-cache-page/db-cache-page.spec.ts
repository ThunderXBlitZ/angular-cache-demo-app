import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBCachePageComponent } from './db-cache-page.component';

describe('DBCachePageComponent', () => {
  let component: DBCachePageComponent;
  let fixture: ComponentFixture<DBCachePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DBCachePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBCachePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
