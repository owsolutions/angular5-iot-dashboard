import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudDevice, CloudDeviceType, AppState } from '@app/definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RequestsService } from '@app/services/requests.service';
import { random } from 'lodash';

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
    type: CloudDeviceType.TemperatureSensor,
    preferences: {},
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private requests: RequestsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data: {id?: any, sourceId?: any}) => {
      if (data.sourceId) {
        this.form.datasource = data.sourceId;
      }
      if ( ! data.id ) {
        return ;
      }
      this.mode = 'edit';
      this.form.id = data.id;
      this.ref = this.store.select('devices').subscribe((devices: Array<CloudDevice>) => {
        /* tslint:disable */
        const form = devices.find(dev => dev.id == data.id);
        if ( ! form) {
          return;
        }
        this.form = Object.assign({}, form);


      }).unsubscribe();
    }).unsubscribe();
  }
  ngOnDestroy () {

  }
  public SubmitForm () {
    delete this.form.value;
    const device = Object.assign({id: random(1000,9999)}, this.form);
    this.store.dispatch({
      type: 'UPDATE_DEVICE',
      payload: device
    });
    this.store.dispatch({
      type: 'CLEAR_UNCONNECTED_SOURCE',
      payload: device.datasource
    });
    this.router.navigateByUrl('/devices');
  }

  public DeleteDevice () {
    this.requests.deleteDevice(this.form.id);
    this.router.navigateByUrl('/devices');

  }
  public DeviceGeneralChange (data: any) {
    this.form = Object.assign(this.form, data);
  }
  public DeviceCustomizationChange (value) {
    this.form.preferences = value;
  }
}
