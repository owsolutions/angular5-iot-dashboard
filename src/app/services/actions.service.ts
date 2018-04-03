import { Injectable } from '@angular/core';
import { CloudDevice, AppState, IActivity, ILocation } from '@app/definitions';
import { Store } from '@ngrx/store';

@Injectable()
export class ActionsService {

  constructor (
    private store: Store<AppState>,
  ) {
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
