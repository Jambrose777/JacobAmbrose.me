import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSlalomComponent } from './slalom.component';

describe('SubSlalomComponent', () => {
  let component: SubSlalomComponent;
  let fixture: ComponentFixture<SubSlalomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSlalomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSlalomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
