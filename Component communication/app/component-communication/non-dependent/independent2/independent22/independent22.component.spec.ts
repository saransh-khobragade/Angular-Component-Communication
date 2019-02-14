import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Independent22Component } from './independent22.component';

describe('Independent22Component', () => {
  let component: Independent22Component;
  let fixture: ComponentFixture<Independent22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Independent22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Independent22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
