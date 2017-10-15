import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspembayaraneditComponent } from './statuspembayaranedit.component';

describe('StatuspembayaraneditComponent', () => {
  let component: StatuspembayaraneditComponent;
  let fixture: ComponentFixture<StatuspembayaraneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspembayaraneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspembayaraneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
