import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UPDATE_DEVICE } from './devices/devices.reducer';



import { IDevice, ILocation, AppState, IRole, IActivity, IWidget, IPin, ActivityTypes } from './shared/Definitions';
import { RequestsService } from './requests.service';
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
  public roles: Observable<Array<IRole>>;
  public activities: Observable<Array<IActivity>>;
  public widgets: Observable<Array<IWidget>>;

  constructor(private store: Store<AppState>, private requests: RequestsService) {
    
    this.getDevices();
    this.getRoles();
    this.getLocations();
    this.getActivities();
    this.getWidgets();

  }


  async getWidgets () {
    const collections = await this.requests.getWidgets();
    for (const item of collections) {
      this.store.dispatch({
        type: 'UPDATE_WIDGET',
        payload: item
      });
    }
  }

  async getActivities () {
    const collections = await this.requests.getActivities();
    for (const item of collections) {
      this.store.dispatch({
        type: 'UPDATE_ACTIVITY',
        payload: item
      });
    }
  }

  async getDevices () {
    const collections = await this.requests.getDevices();
    for (const item of collections) {
      this.store.dispatch({
        type: UPDATE_DEVICE,
        payload: item
      });
    }
  }

  async getLocations () {
    const collections = await this.requests.getLocations();
    for (const item of collections) {
      this.store.dispatch({
        type: 'UPDATE_LOCATION',
        payload: item
      });
    }
  }

  async getRoles () {
    const collections = await this.requests.getRoles();
    for (const item of collections) {
      this.store.dispatch({
        type: 'INSERT_ROLE',
        payload: item
      });
    }
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
