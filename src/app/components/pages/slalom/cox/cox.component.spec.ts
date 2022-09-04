import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoxComponent } from './cox.component';

describe('CoxComponent', () => {
  let component: CoxComponent;
  let fixture: ComponentFixture<CoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
