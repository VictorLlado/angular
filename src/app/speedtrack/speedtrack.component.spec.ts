import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedtrackComponent } from './speedtrack.component';

describe('SpeedtrackComponent', () => {
  let component: SpeedtrackComponent;
  let fixture: ComponentFixture<SpeedtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedtrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
