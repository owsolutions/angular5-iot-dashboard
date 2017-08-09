import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWidgetsComponent } from './icon-widgets.component';

describe('IconWidgetsComponent', () => {
  let component: IconWidgetsComponent;
  let fixture: ComponentFixture<IconWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
