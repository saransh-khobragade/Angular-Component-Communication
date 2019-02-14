import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Independent2Component } from './independent2.component';

describe('Independent2Component', () => {
  let component: Independent2Component;
  let fixture: ComponentFixture<Independent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Independent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Independent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
