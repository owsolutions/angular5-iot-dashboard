import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleComponent } from './user-single.component';

describe('UserSingleComponent', () => {
  let component: UserSingleComponent;
  let fixture: ComponentFixture<UserSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
