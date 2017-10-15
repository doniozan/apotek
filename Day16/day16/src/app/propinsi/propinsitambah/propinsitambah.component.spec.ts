import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinsitambahComponent } from './propinsitambah.component';

describe('PropinsitambahComponent', () => {
  let component: PropinsitambahComponent;
  let fixture: ComponentFixture<PropinsitambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropinsitambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropinsitambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
