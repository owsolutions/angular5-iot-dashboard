import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSmallBoxComponent } from './ui-small-box.component';

describe('UiSmallBoxComponent', () => {
  let component: UiSmallBoxComponent;
  let fixture: ComponentFixture<UiSmallBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSmallBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSmallBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
