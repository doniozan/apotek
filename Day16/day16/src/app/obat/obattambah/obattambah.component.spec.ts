import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObattambahComponent } from './obattambah.component';

describe('ObattambahComponent', () => {
  let component: ObattambahComponent;
  let fixture: ComponentFixture<ObattambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObattambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObattambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
