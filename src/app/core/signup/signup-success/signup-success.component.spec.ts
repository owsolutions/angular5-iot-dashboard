import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSuccessComponent } from './signup-success.component';

describe('SignupSuccessComponent', () => {
  let component: SignupSuccessComponent;
  let fixture: ComponentFixture<SignupSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
