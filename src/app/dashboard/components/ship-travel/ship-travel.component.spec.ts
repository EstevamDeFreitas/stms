import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipTravelComponent } from './ship-travel.component';

describe('ShipTravelComponent', () => {
  let component: ShipTravelComponent;
  let fixture: ComponentFixture<ShipTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
