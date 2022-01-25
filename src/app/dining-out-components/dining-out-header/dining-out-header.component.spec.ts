import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningOutHeaderComponent } from './dining-out-header.component';

describe('DiningOutHeaderComponent', () => {
  let component: DiningOutHeaderComponent;
  let fixture: ComponentFixture<DiningOutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningOutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningOutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
