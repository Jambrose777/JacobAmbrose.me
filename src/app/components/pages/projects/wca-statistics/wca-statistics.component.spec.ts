import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcaStatisticsComponent } from './wca-statistics.component';

describe('WcaStatisticsComponent', () => {
  let component: WcaStatisticsComponent;
  let fixture: ComponentFixture<WcaStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcaStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
