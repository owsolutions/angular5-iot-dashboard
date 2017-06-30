import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UPDATE_DEVICE } from './devices/devices.reducer';
import * as devicesMocks from './devices/devices.mock';
import * as locationsMocks from './locations/locations.mock';
import * as activityMocks from './activity/activity-widget/activity.mock';
import { UPDATE_LOCATION } from './locations/locations.reducer';
import { UPDATE_ACTIVITY } from './activity/activity.reducer';
import { IDevice, ILocation, AppState, IActivity } from './shared/Definitions';

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

  constructor(private store: Store<AppState>) {
    this.createDevices();
    this.createLocations();
    this.createActivities();
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
      this.store.dispatch({type: UPDATE_ACTIVITY, payload: activity});
    }
  }

  createDevices () {
    this.devices = this.store.select('devices');
    const devices = devicesMocks.generateMock();
    this.store.dispatch({type: UPDATE_DEVICE, payload: devices[0]});
    this.store.dispatch({type: UPDATE_DEVICE, payload: devices[1]});
  }

  /**
   * When a new event happens on system, you can call this function
   * to notify the rest of application an event occured.
   */
  public notfityActivity (activity: IActivity) {
    
    this.store.dispatch({type: UPDATE_ACTIVITY, payload: activity});
  }
  /**
   * Connects to a socket IO server, based on it's url
   */
  connect (URL = 'http://localhost:7000') {

    if (window.io) {
      console.log('%c Connecting to server at: ' + URL , 'color:yellow; background:black;');
      window.io.sails.autoConnect = false;
      this.socket = window.io.sails.connect(URL , undefined , true);

      this.socket.on('connect' , function (client) {
        console.log('Connected to remote socket server' , URL);
      });

      this.socket.on('message', message => {
        this.store.dispatch({type: UPDATE_DEVICE, payload: message.device});
      });

    } else {
      console.warn('%c window.io is not present. Make sure you included client socket file.' , 'color: orange');
    }
  }
}
