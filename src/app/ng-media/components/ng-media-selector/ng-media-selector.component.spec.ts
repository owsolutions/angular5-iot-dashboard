import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMediaSelectorComponent } from './ng-media-selector.component';

describe('NgMediaSelectorComponent', () => {
  let component: NgMediaSelectorComponent;
  let fixture: ComponentFixture<NgMediaSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMediaSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMediaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
