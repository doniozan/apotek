import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipepembayaraneditComponent } from './tipepembayaranedit.component';

describe('TipepembayaraneditComponent', () => {
  let component: TipepembayaraneditComponent;
  let fixture: ComponentFixture<TipepembayaraneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipepembayaraneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipepembayaraneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
