import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiaComponent } from './saia.component';

describe('SaiaComponent', () => {
  let component: SaiaComponent;
  let fixture: ComponentFixture<SaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
