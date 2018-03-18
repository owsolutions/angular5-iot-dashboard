import { Injectable } from '@angular/core';
import { random } from 'lodash';
import { IDevice, CloudDevice, AppState, IActivity, IWidget, IPin, ActivityTypes, ILocation } from '@shared/iot/definitions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActionsService {

  public widgets: Observable<Array<IWidget>>;
  constructor (
    private store: Store<AppState>,
  ) {
  }

  triggerDeviceChange ($event: any, device: IDevice, pin: IPin, newValue: any) {
    this.notfityActivity({
      icon: 'icon-play',
      iconType: 'icon',
      reason: 'Ali',
      time: '10 Minutes ago',
      description: $event.target.value + ' -> ' + device.uniqueid + ' > ' + newValue,
      id: random(111, 999),
      type: ActivityTypes.DevicePinChange,
      meta: {
        device, pin, newValue
      }
    });
  }

  /**
   * When a new event happens on system, you can call this function
   * to notify the rest of application an event occured.
   */
  public notfityActivity (activity: IActivity) {
    this.store.dispatch({type: 'UPDATE_ACTIVITY', payload: activity});
  }

  public findWidgets (devices, location: ILocation): Array<CloudDevice> {
    return devices.filter(device => device.location === location.id);
  }

}
