import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AksestokodetailComponent } from './aksestokodetail.component';

describe('AksestokodetailComponent', () => {
  let component: AksestokodetailComponent;
  let fixture: ComponentFixture<AksestokodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksestokodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AksestokodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
