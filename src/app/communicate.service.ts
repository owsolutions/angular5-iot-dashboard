import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UPDATE_DEVICE } from './devices/devices.reducer';
import * as devicesMocks from './devices/devices.mock';
import * as locationsMocks from './locations/locations.mock';
import * as activityMocks from './activity/activity-widget/activity.mock';
import { UPDATE_LOCATION } from './locations/locations.reducer';
import { IDevice, ILocation, AppState, IActivity, IWidget, IPin, ActivityTypes } from './shared/Definitions';
import { sample, random } from 'lodash';

@Injectable()
export class CommunicateService {

  /**
   * Holds the current socket connection to server.
   * If you want to change your remote, you need to change
   * this socket connection.
   */
  public socket: any;
  public devices: Observable<Array<IDevice>>;
  public locations: Observable<Array<ILocation>>;
  public activities: Observable<Array<IActivity>>;
  public widgets: Observable<Array<IWidget>>;

  constructor(private store: Store<AppState>) {
    this.createDevices();
    this.createLocations();
    this.createActivities();
    this.widgets = this.store.select('widgets');
    this.mockWidgets();
  }



  makeMockWidget(device: IDevice, location: ILocation): IWidget {
    const widget: IWidget = {
      device: device,
      location: location,
      name : sample(['Cloud', 'Lamp', 'Roberry']),
      pin: sample(device.pins)
    };
    return widget;
  }

  mockWidgets() {
    this.devices.subscribe(devices => {
      this.locations.subscribe(locations => {
        locations.forEach((location: ILocation) => {
          for (let i = 1; i <= 4; i ++) {
            console.log('>> ' , i, location);
            this.store.dispatch({type: 'UPDATE_WIDGET' , payload: this.makeMockWidget(sample(devices), location)});
          }
        });
      });
    });
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

  createLocations () {
    this.locations = this.store.select('locations');
    const locations = locationsMocks.generateMock();
    for (const location of locations) {
      this.store.dispatch({type: UPDATE_LOCATION, payload: location});
    }
  }

  createActivities () {
    this.activities = this.store.select('activities');
    const activities = activityMocks.generateMock(5);
    for (const activity of activities) {
      this.store.dispatch({type: 'UPDATE_ACTIVITY', payload: activity});
    }
  }

  createDevices () {
    this.devices = this.store.select('devices');
    const devices = devicesMocks.generateMock();
    this.store.dispatch({type: UPDATE_DEVICE, payload: devices[0]});
    this.store.dispatch({type: UPDATE_DEVICE, payload: devices[1]});
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
   * Inserts a new device into store
   */
  insertDevice () {
    const devices = devicesMocks.generateMock();
    this.store.dispatch({type: 'INSERT_DEVICE' , payload: devices[0]});
  }

  /**
   * When a new event happens on system, you can call this function
   * to notify the rest of application an event occured.
   */
  public notfityActivity (activity: IActivity) {
    this.store.dispatch({type: 'UPDATE_ACTIVITY', payload: activity});
  }
  /**
   * Connects to a socket IO server, based on it's url
   */
  connect(URL = 'http://localhost:7000') {

    if (window.io) {
      // xonsole.log('%c Connecting to server at: ' + URL , 'color:yellow; background:black;');
      window.io.sails.autoConnect = false;
      this.socket = window.io.sails.connect(URL , undefined , true);

      this.socket.on('connect' , function (client) {
        // xonsole.log('Connected to remote socket server' , URL);
      });

      this.socket.on('message', message => {
        this.store.dispatch({type: UPDATE_DEVICE, payload: message.device});
      });

    } else {
      // xonsole.warn('%c window.io is not present. Make sure you included client socket file.' , 'color: orange');
    }
  }
}
