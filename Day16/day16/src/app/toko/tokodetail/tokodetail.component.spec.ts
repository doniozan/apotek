import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokodetailComponent } from './tokodetail.component';

describe('TokodetailComponent', () => {
  let component: TokodetailComponent;
  let fixture: ComponentFixture<TokodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
