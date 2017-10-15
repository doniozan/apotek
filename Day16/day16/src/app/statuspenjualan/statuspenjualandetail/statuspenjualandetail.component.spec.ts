import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspenjualandetailComponent } from './statuspenjualandetail.component';

describe('StatuspenjualandetailComponent', () => {
  let component: StatuspenjualandetailComponent;
  let fixture: ComponentFixture<StatuspenjualandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspenjualandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspenjualandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
