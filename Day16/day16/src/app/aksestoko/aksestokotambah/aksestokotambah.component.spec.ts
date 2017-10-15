import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AksestokotambahComponent } from './aksestokotambah.component';

describe('AksestokotambahComponent', () => {
  let component: AksestokotambahComponent;
  let fixture: ComponentFixture<AksestokotambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksestokotambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AksestokotambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
