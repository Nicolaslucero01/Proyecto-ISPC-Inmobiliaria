import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrucelDestComponent } from './carrucel-dest.component';

describe('CarrucelDestComponent', () => {
  let component: CarrucelDestComponent;
  let fixture: ComponentFixture<CarrucelDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrucelDestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrucelDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
