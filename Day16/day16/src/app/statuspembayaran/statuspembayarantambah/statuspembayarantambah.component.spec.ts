import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspembayarantambahComponent } from './statuspembayarantambah.component';

describe('StatuspembayarantambahComponent', () => {
  let component: StatuspembayarantambahComponent;
  let fixture: ComponentFixture<StatuspembayarantambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspembayarantambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspembayarantambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
