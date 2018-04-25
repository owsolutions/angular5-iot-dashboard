import { Component, OnInit, Input, OnDestroy } from '@angular/core';
declare var Highcharts: any;
import { CloudDevice, DataSource, AppState } from '@app/definitions';
import { Store } from '@ngrx/store';

function generateMockSeries() {
  const series = [];
  for (let i = 20; i >= 1; i = i - 2) {
      series.push([previousSeconds(i), Math.floor(Math.random() * 8 + 30)]);
  }
  return series;
}

function previousSeconds(s) {
  return new Date().getTime() - (s * 1000);
}

function CastHistoryToSeries (items: Array<DataSource>): Array<Array<any>> {
  return items.map(x => {
    return [x.date, +x.value];
  });
}
@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit, OnDestroy {

  private ref = null;
  public data: any = {};
  @Input('device') public device: CloudDevice = null;
  @Input('id') public id: any = null;

  public currentValue = 0;
  public highest: number;
  public lowest: number;
  public average = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.ref = this.store.select('devices').subscribe(devices => {
      this.device = devices.find(x => +x.id === +this.id);
    });
  }
  ngOnDestroy () {
    this.ref.unsubscribe();
  }
}
