import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWcaComponent } from './sub-wca.component';

describe('SubWcaComponent', () => {
  let component: SubWcaComponent;
  let fixture: ComponentFixture<SubWcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubWcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubWcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
