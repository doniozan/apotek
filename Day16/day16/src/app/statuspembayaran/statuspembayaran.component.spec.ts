import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspembayaranComponent } from './statuspembayaran.component';

describe('StatuspembayaranComponent', () => {
  let component: StatuspembayaranComponent;
  let fixture: ComponentFixture<StatuspembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
