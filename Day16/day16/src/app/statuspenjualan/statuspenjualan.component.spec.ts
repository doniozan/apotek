import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspenjualanComponent } from './statuspenjualan.component';

describe('StatuspenjualanComponent', () => {
  let component: StatuspenjualanComponent;
  let fixture: ComponentFixture<StatuspenjualanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspenjualanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspenjualanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
