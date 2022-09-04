import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlalomComponent } from './slalom.component';

describe('SlalomComponent', () => {
  let component: SlalomComponent;
  let fixture: ComponentFixture<SlalomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlalomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlalomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
