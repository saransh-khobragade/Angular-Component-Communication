import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDependentComponent } from './non-dependent.component';

describe('NonDependentComponent', () => {
  let component: NonDependentComponent;
  let fixture: ComponentFixture<NonDependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonDependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
