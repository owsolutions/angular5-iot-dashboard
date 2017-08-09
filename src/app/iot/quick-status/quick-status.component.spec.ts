import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';

import { QuickStatusComponent } from './quick-status.component';

describe('QuickStatusComponent', () => {
  let component: QuickStatusComponent;
  let fixture: ComponentFixture<QuickStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuickStatusComponent,
        MockComponent({selector: 'app-user-widget'}),
        MockComponent({selector: 'app-quick-chart'})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
