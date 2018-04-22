import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfulComponent } from './restful.component';

describe('RestfulComponent', () => {
  let component: RestfulComponent;
  let fixture: ComponentFixture<RestfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
