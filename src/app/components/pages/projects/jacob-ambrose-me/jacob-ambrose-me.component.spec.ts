import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacobAmbroseMeComponent } from './jacob-ambrose-me.component';

describe('JacobAmbroseMeComponent', () => {
  let component: JacobAmbroseMeComponent;
  let fixture: ComponentFixture<JacobAmbroseMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacobAmbroseMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacobAmbroseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
