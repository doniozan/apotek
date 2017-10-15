import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokotambahComponent } from './tokotambah.component';

describe('TokotambahComponent', () => {
  let component: TokotambahComponent;
  let fixture: ComponentFixture<TokotambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokotambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokotambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
