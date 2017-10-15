import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObatdetailComponent } from './obatdetail.component';

describe('ObatdetailComponent', () => {
  let component: ObatdetailComponent;
  let fixture: ComponentFixture<ObatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
