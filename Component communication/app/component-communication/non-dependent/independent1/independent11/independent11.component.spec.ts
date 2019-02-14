import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Independent11Component } from './independent11.component';

describe('Independent11Component', () => {
  let component: Independent11Component;
  let fixture: ComponentFixture<Independent11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Independent11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Independent11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
