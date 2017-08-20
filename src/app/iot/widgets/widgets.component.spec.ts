import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchWidgetsComponent } from '../shared/switch-widgets/switch-widgets.component';
import { WidgetsComponent } from './widgets.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

function widgetsReducer (widgets = []) {
  return widgets;
}

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         StoreModule.provideStore({
           widgets: widgetsReducer
         })
      ],
      declarations: [
        WidgetsComponent,
        SwitchWidgetsComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
