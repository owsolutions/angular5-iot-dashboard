import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStatisticsComponent } from './history-statistics.component';

describe('HistoryStatisticsComponent', () => {
  let component: HistoryStatisticsComponent;
  let fixture: ComponentFixture<HistoryStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
