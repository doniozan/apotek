import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspembayarandetailComponent } from './statuspembayarandetail.component';

describe('StatuspembayarandetailComponent', () => {
  let component: StatuspembayarandetailComponent;
  let fixture: ComponentFixture<StatuspembayarandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspembayarandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspembayarandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
