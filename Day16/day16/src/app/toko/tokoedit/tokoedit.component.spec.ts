import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokoeditComponent } from './tokoedit.component';

describe('TokoeditComponent', () => {
  let component: TokoeditComponent;
  let fixture: ComponentFixture<TokoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
