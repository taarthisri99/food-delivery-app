import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningOutItemsComponent } from './dining-out-items.component';

describe('DiningOutItemsComponent', () => {
  let component: DiningOutItemsComponent;
  let fixture: ComponentFixture<DiningOutItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningOutItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningOutItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
