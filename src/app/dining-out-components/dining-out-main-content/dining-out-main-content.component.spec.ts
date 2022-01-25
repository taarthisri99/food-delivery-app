import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningOutMainContentComponent } from './dining-out-main-content.component';

describe('DiningOutMainContentComponent', () => {
  let component: DiningOutMainContentComponent;
  let fixture: ComponentFixture<DiningOutMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningOutMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningOutMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
