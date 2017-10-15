import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspenjualantambahComponent } from './statuspenjualantambah.component';

describe('StatuspenjualantambahComponent', () => {
  let component: StatuspenjualantambahComponent;
  let fixture: ComponentFixture<StatuspenjualantambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuspenjualantambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspenjualantambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
