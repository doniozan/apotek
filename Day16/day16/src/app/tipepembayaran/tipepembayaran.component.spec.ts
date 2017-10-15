import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipepembayaranComponent } from './tipepembayaran.component';

describe('TipepembayaranComponent', () => {
  let component: TipepembayaranComponent;
  let fixture: ComponentFixture<TipepembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipepembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipepembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
