import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPanelBoxComponent } from './ui-panel-box.component';

describe('UiPanelBoxComponent', () => {
  let component: UiPanelBoxComponent;
  let fixture: ComponentFixture<UiPanelBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPanelBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPanelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
