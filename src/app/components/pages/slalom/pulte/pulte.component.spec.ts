import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulteComponent } from './pulte.component';

describe('PulteComponent', () => {
  let component: PulteComponent;
  let fixture: ComponentFixture<PulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
