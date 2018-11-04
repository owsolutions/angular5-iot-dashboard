import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
declare var Highcharts: any;
import { CloudDevice } from '@app/definitions';
import { Store } from '@ngrx/store';
import { IotModuleState } from '@app/iot/iot.module.defs';
import { RealtimeService } from '@app/iot/realtime.service';

@Component({
  selector: 'app-kana-beta',
  templateUrl: './kana-beta.component.html',
  styleUrls: ['./kana-beta.component.scss']
})
export class KanaBetaComponent implements OnInit, AfterViewInit {

  public chartName = 'live-tempreture';
  public data: any = {};
  @Input('device') public device: CloudDevice = null;
  @Input('id') public id: any = null;

  public chart: any;
  public currentValue = 0;
  public highest: number;
  public lowest: number;
  public average = 0;

  constructor(
    private store: Store<IotModuleState>,
    private realtime: RealtimeService,
  ) { }

  public onChange (pin, value) {
    this.realtime.ChangeComplexOutputValue(this.device.datasource, pin, value);
  }

  public isChecked(pin: string) {
    const { device } = this;
    if ( !device || !device.value || device.value[pin] !== true) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.store.select('iotModule').subscribe(({devices}) => {
      this.device = devices.find(x => +x.id === +this.id);
    });
  }

  ngAfterViewInit () {

  }

}
