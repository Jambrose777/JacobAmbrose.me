import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcaComponent } from './wca.component';

describe('WcaComponent', () => {
  let component: WcaComponent;
  let fixture: ComponentFixture<WcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
