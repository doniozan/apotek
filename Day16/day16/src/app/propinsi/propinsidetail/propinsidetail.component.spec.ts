import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinsidetailComponent } from './propinsidetail.component';

describe('PropinsidetailComponent', () => {
  let component: PropinsidetailComponent;
  let fixture: ComponentFixture<PropinsidetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropinsidetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropinsidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
