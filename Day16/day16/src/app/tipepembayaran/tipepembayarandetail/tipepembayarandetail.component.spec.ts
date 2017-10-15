import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipepembayarandetailComponent } from './tipepembayarandetail.component';

describe('TipepembayarandetailComponent', () => {
  let component: TipepembayarandetailComponent;
  let fixture: ComponentFixture<TipepembayarandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipepembayarandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipepembayarandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
