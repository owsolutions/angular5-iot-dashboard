import { Component, OnInit } from '@angular/core';
import { DailyStatistics } from '../../../mocks/dailyStatistics';
import { HistoryStatistics } from '../../../mocks/historyStatistics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public hs = HistoryStatistics;
  public ds = DailyStatistics;
  public liveData: any;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.liveData = [new Date().getTime(), Math.floor(Math.random() * 8 + 30)];
    }, 2000);
  }

}
