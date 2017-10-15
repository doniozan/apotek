import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AksestokoComponent } from './aksestoko.component';

describe('AksestokoComponent', () => {
  let component: AksestokoComponent;
  let fixture: ComponentFixture<AksestokoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksestokoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AksestokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
