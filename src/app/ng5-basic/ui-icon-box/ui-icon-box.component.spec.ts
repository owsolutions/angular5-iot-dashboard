import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconBoxComponent } from './ui-icon-box.component';

describe('UiIconBoxComponent', () => {
  let component: UiIconBoxComponent;
  let fixture: ComponentFixture<UiIconBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiIconBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiIconBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
