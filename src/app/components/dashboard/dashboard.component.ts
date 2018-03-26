import { Component, OnInit } from '@angular/core';
import { HistoryStatistics } from '../../../mocks/historyStatistics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public hs = HistoryStatistics;
  constructor() { }

  ngOnInit() {
    console.log(HistoryStatistics);
  }

}
