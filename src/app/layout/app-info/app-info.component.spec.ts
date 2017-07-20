import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';
import { AppInfoComponent } from './app-info.component';

describe('AppInfoComponent', () => {
  let component: AppInfoComponent;
  let fixture: ComponentFixture<AppInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppInfoComponent,
        MockComponent({ selector: 'app-thermostat'}),
        MockComponent({ selector: 'app-modes'}),
        MockComponent({ selector: 'app-activity-widget'}),
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
