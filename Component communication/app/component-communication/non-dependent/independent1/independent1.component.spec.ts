import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Independent1Component } from './independent1.component';

describe('Independent1Component', () => {
  let component: Independent1Component;
  let fixture: ComponentFixture<Independent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Independent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Independent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
