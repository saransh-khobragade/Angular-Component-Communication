import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhiddenDirectiveComponent } from './myhidden-directive.component';

describe('MyhiddenDirectiveComponent', () => {
  let component: MyhiddenDirectiveComponent;
  let fixture: ComponentFixture<MyhiddenDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhiddenDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhiddenDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
