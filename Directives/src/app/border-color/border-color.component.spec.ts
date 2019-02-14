import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderColorComponent } from './border-color.component';

describe('BorderColorComponent', () => {
  let component: BorderColorComponent;
  let fixture: ComponentFixture<BorderColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
