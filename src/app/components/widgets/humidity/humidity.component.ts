import { Component, OnInit, Input, OnDestroy } from '@angular/core';
declare var Highcharts: any;
import { CloudDevice, AppState } from '@app/definitions';
import { Store } from '@ngrx/store';

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
