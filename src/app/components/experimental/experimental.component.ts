import { Component, OnInit } from '@angular/core';
import { DailyStatistics } from '../../../mocks/dailyStatistics';
import { HistoryStatistics } from '../../../mocks/historyStatistics';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.scss']
})
export class ExperimentalComponent implements OnInit {

  public hs = HistoryStatistics;
  public ds = DailyStatistics;
  public liveData: any;

  ngOnInit() {
    setInterval(() => {
      this.liveData = [new Date().getTime(), Math.floor(Math.random() * 8 + 30)];
    }, 2000);
  }
}
