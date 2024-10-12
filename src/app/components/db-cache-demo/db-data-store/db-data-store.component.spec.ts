import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBDataStoreComponent } from './db-data-store.component';

describe('DBDataStoreComponent', () => {
  let component: DBDataStoreComponent;
  let fixture: ComponentFixture<DBDataStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DBDataStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBDataStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
