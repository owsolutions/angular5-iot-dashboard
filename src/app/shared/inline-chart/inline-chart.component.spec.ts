import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineChartComponent } from './inline-chart.component';

describe('InlineChartComponent', () => {
  let component: InlineChartComponent;
  let fixture: ComponentFixture<InlineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
