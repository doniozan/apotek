import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipepembayarantambahComponent } from './tipepembayarantambah.component';

describe('TipepembayarantambahComponent', () => {
  let component: TipepembayarantambahComponent;
  let fixture: ComponentFixture<TipepembayarantambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipepembayarantambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipepembayarantambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
