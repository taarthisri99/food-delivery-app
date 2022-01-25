import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMainContentComponent } from './trending-main-content.component';

describe('TrendingMainContentComponent', () => {
  let component: TrendingMainContentComponent;
  let fixture: ComponentFixture<TrendingMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
