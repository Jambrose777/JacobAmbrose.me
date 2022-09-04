import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutheastCubingOrgComponent } from './southeast-cubing-org.component';

describe('SoutheastCubingOrgComponent', () => {
  let component: SoutheastCubingOrgComponent;
  let fixture: ComponentFixture<SoutheastCubingOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoutheastCubingOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoutheastCubingOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
