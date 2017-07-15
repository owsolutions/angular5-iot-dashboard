import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickChartComponent } from './quick-chart.component';

describe('QuickChartComponent', () => {
  let component: QuickChartComponent;
  let fixture: ComponentFixture<QuickChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickChartComponent);
    component = fixture.componentInstance;
    component.drawChart = () => {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
