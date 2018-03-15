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
  private ref = null;
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
    this.ref = this.store.select('locations').subscribe((data) => {
      this.locations = data;
    });
    this.route.params.subscribe((data: {id?: any}) => {
      if ( ! data.id ) {
        return ;
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
    }).unsubscribe();
  }
  public SubmitForm () {
    this.store.dispatch({
      type: 'UPDATE_DEVICE',
      payload: this.form
    });
    this.router.navigateByUrl('/devices');
  }
  ngOnDestroy () {
    if ( this.ref ) {
      this.ref.unsubscribe ();
    }
  }
}
