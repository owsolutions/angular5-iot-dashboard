import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudDevice, CloudDeviceType, AppState } from '@shared/iot/definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-device-single',
  templateUrl: './device-single.component.html',
  styleUrls: ['./device-single.component.scss']
})
export class DeviceSingleComponent implements OnInit, OnDestroy {

  private ref = null;
  public mode: 'edit' | 'new' = 'new';
  public locations: Array<any> = [];
  public form: CloudDevice = {
    type: CloudDeviceType.TemperatureSensor
  };
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit() {

  }
  ngOnDestroy () {

  }

}
