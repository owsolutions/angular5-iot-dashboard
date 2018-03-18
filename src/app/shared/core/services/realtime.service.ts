import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, CloudDevice, CloudDeviceType } from '@shared/iot/definitions';
import { random } from 'lodash';

@Injectable()
export class RealtimeService {

  constructor(
    private store: Store<AppState>,
  ) {
    setInterval(() => {
      console.warn('Recieved update');
      this.RecieveDeviceChange({
        id: 1,
        name: 'Hall temperature',
        type: CloudDeviceType.TemperatureSensor,
        datasource: 'device-1',
        value: random(1700, 1799) / 100,
        preferences: {}
      });
    }, 1500);
  }

  /**
   * Whenever for any sort of reason if the device is changed, either by user details changes
   * api call for value change, and a cron job, all instances of the the dashboard will recieve this function
   */
  public RecieveDeviceChange (device: CloudDevice) {
    // this.store.select('devices').subscribe((devices) => {
      // let $device = devices.find( x => x.id === device.id);
      // if ( $device ) {
      //   device = merge($device, device);
      // }
      this.store.dispatch({
        type: 'UPDATE_DEVICE',
        payload: device
      });
    // }).unsubscribe();;
  }


}
