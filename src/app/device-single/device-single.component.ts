import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudDevice, CloudDeviceType, AppState } from '@shared/iot/definitions';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-device-single',
  templateUrl: './device-single.component.html',
  styleUrls: ['./device-single.component.scss']
})
export class DeviceSingleComponent implements OnInit, OnDestroy {

  private ref = null;
  public mode: 'edit' | 'new' = 'new';
  public form: CloudDevice = {
    type: CloudDeviceType.TemperatureSensor
  };
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data: {id?: any}) => {
      if ( ! data.id) {
        return;
      }
      this.mode = 'edit';
      this.form.id = data.id;
      this.ref = this.store.select('devices').subscribe((devices: Array<CloudDevice>) => {

        const form = devices.find(dev => dev.id == data.id);
        if ( ! form) {
          return;
        }
        this.form = form;
      });
    });
  }
  ngOnDestroy () {
    if (this.ref) {
      this.ref.unsubscribe();
    }
  }

  public SubmitForm () {
    console.log('done', this.form);
    this.store.dispatch({
      type: 'UPDATE_DEVICE',
      payload: this.form
    });
  }

}
