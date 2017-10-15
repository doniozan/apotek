import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinsieditComponent } from './propinsiedit.component';

describe('PropinsieditComponent', () => {
  let component: PropinsieditComponent;
  let fixture: ComponentFixture<PropinsieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropinsieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropinsieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
