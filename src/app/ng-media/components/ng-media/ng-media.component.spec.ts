import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMediaComponent } from './ng-media.component';

describe('NgMediaComponent', () => {
  let component: NgMediaComponent;
  let fixture: ComponentFixture<NgMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
