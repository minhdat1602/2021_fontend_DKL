import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanParkComponent } from './ocean-park.component';

describe('OceanParkComponent', () => {
  let component: OceanParkComponent;
  let fixture: ComponentFixture<OceanParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
