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
    type: CloudDeviceType.TemperatureSensor,
    preferences: {},
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data: {id?: any}) => {
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
    console.warn(' I am called');
    delete this.form.value;
    this.store.dispatch({
      type: 'UPDATE_DEVICE',
      payload: Object.assign({}, this.form)
    });
    this.router.navigateByUrl('/devices');
  }

  public DeviceGeneralChange (data: any) {
    this.form = Object.assign(this.form, data);
  }
  public DeviceCustomizationChange (value) {
    console.log('I am changed', value);
    this.form.preferences = value;
  }
}
