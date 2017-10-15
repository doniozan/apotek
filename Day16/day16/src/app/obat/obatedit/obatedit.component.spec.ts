import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObateditComponent } from './obatedit.component';

describe('ObateditComponent', () => {
  let component: ObateditComponent;
  let fixture: ComponentFixture<ObateditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObateditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObateditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
