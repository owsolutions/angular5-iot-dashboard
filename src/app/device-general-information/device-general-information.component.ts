import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CloudDevice, CloudDeviceType, AppState } from '@shared/iot/definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-device-general-information',
  templateUrl: './device-general-information.component.html',
  styleUrls: ['./device-general-information.component.scss']
})
export class DeviceGeneralInformationComponent implements OnInit, OnDestroy {

  @Input('mode') public mode: 'edit' | 'new' = 'new';
  @Input('device') public set device (value: CloudDevice) {
    this.form = value;
  }
  private ref = null;
  public locations: Array<any> = [];
  public form: any = {};

  constructor (
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.ref = this.store.select('locations').subscribe((data) => {
      this.locations = data;
    });

  }

  ngOnDestroy () {
    if ( this.ref ) {
      this.ref.unsubscribe ();
    }
  }
}
