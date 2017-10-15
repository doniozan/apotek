import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspenjualaneditComponent } from './statuspenjualanedit.component';

describe('StatuspenjualaneditComponent', () => {
  let component: StatuspenjualaneditComponent;
  let fixture: ComponentFixture<StatuspenjualaneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspenjualaneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspenjualaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
