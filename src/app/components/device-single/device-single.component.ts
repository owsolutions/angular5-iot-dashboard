import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudDevice, CloudDeviceType, AppState } from '@app/definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RequestsService } from '@app/services/requests.service';
import 'rxjs/add/operator/toPromise';
import { IResponse } from 'response-type';
import { error } from '@app/common';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-device-single',
  templateUrl: './device-single.component.html',
  styleUrls: ['./device-single.component.scss']
})
export class DeviceSingleComponent implements OnInit, OnDestroy {

  public isRequesting = false;
  private ref = null;
  public response: IResponse<CloudDevice> = null;
  public locations: Array<any> = [];
  public form: CloudDevice = {
    type: CloudDeviceType.TemperatureSensor,
    preferences: {},
  };

  public error = error;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private requests: RequestsService,
    private toasterService: ToasterService
  ) {
   }

  ngOnInit() {
    this.route.params.subscribe((data: {id?: any, sourceId?: any}) => {
      if (data.sourceId) {
        this.form.datasource = data.sourceId;
      }
      if ( ! data.id ) {
        return ;
      }
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
  
  public async SubmitForm () {
    delete this.form.value;
    this.isRequesting = true;
    const device = Object.assign({}, this.form);
    try {
      const response: IResponse<CloudDevice> = await this.requests.PostDevice(device);
      if (response.data && response.data.items && response.data.items[0]) {
        this.router.navigateByUrl('/devices');
        const toaserTitle = (!this.form.id) ? 'Device Created Succesfully' : 'Device Edited!';
        this.toasterService.pop('success', toaserTitle, response.data.items[0].name);
      }
      this.response = response;
    } catch (error) {
      this.response = error;
    }
    this.isRequesting = false;
  }

  public DeleteDevice () {
    this.requests.deleteDevice(this.form.id);
    this.toasterService.pop('error', 'Your Device Deleted', this.form.name);
    this.router.navigateByUrl('/devices');
  }
  public DeviceGeneralChange (data: any) {
    this.form = Object.assign(this.form, data);
  }
  public DeviceCustomizationChange (value) {
    this.form.preferences = value;
  }
  
}
