import { Injectable } from '@angular/core';
import { random } from 'lodash';
import { IDevice, AppState, IActivity, IWidget, IPin, ActivityTypes } from '@app/iot/definitions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActionsService {
  public widgets: Observable<Array<IWidget>>;

  constructor (private store: Store<AppState>) {

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
  createWidgets (widget: IWidget) {
    this.widgets = this.store.select('widgets');
    this.store.dispatch({type: 'UPDATE_WIDGET' , payload: widget});
  }


  findWidget (device: IDevice, pin: IPin) {
    return new Promise((resolve, reject) => {
      this.store.select<Array<IWidget>>(state => state.widgets).subscribe(widgets => {
        const widget = widgets.filter(x => pin && device && x.device.uniqueid === device.uniqueid && x.pin.id === pin.id);
        resolve(widget[0]);
      });
    });
  }

  /**
   * When a new event happens on system, you can call this function
   * to notify the rest of application an event occured.
   */
  public notfityActivity (activity: IActivity) {
    this.store.dispatch({type: 'UPDATE_ACTIVITY', payload: activity});
  }


}
