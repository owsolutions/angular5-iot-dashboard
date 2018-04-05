import { Injectable, ApplicationRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, CloudDevice, DataSource } from '@app/definitions';
import { random, isNumber } from 'lodash';
import { environment } from 'environments/environment';
import { IsDataSource } from '@app/common';
import { ToasterService } from 'angular2-toaster';

declare var Pusher: any;

declare var require: any;
const io = require('sails.io.js')( require('socket.io-client') );
window['io'] = io;

@Injectable()
export class RealtimeService {

  public channel: any = null;
  public devices: Array<CloudDevice> = [];
  public unconnectedDevices: Array<DataSource> = [];
  constructor(
    private store: Store<AppState>,
    private toast: ToasterService,
    private ref: ApplicationRef,
    private toaster: ToasterService,
  ) {

    this.store.select('devices').subscribe((devices) => {
      this.devices = devices;
    });
  }

  public ActivateRealtime () {
    if (environment.production) {
      this.StartSailsSocket();
    } else {
      this.ActivateMockIncomingMessages();
    }
  }
  /**
   * For people who have developed their backend service in sails.js
   */
  public StartSailsSocket () {

    io.sails.url = environment.api;
    io.sails.autoConnect = true;
    io.socket.on('DataSourceChange', (data: DataSource) => {
      console.warn('Data change', data);
      if (!IsDataSource(data)) {
        console.warn('Recieved a data source which is not valid: ', data);
        return false;
      }
      this.RecieveDataSourceIncoming(data);
    });
    io.socket.on('connect', () => {
      console.log('connected to socket server');
      this.toaster.popAsync('success', 'Server', 'You are now connected');
    });
  }

  async connectToRoom (token) {
    const options = {
      url: environment.api + '/api/get/a/room',
      method: 'get',
      headers: {
        'x-token': token
      }
    };
    io.socket.request(options, (data) => {
      // connects the socket to the room on server.
      console.warn('Connected to the room', data);
      this.toast.popAsync('success', 'Server' , 'Your connected to server');
    });
  }

  /**
   * For development purposes, we simulate the incoming messages from server socket.
   */
  protected ActivateMockIncomingMessages () {
    setInterval(() => {
      this.MockDataIncome();
    }, 1000);
  }

  /**
   * Whenever for any sort of reason if the device is changed, either by user details changes
   * api call for value change, and a cron job, all instances of the the dashboard will recieve this function
   */
  public RecieveDeviceChange (device: any) {
    this.store.dispatch({
      type: 'UPDATE_DEVICE',
      payload: device
    });
  }

  public RecieveDataSourceIncoming (data: DataSource) {

    if (!data.date) {
      data.date = (new Date()).getTime() as any;
    }
    if (!isNumber(data.value)) {
      data.value = +data.value;
    }
    const deviceWithThisSource = this.devices.find(x => x.datasource === data.dataSourceId);
    if ( ! deviceWithThisSource) {
      this.store.dispatch({
        type: 'UPDATE_UNCONNECTED_DATA_SOURCE',
        payload: data
      });
    } else {
      this.store.dispatch({
        type: 'DEVICE_GET_DATA_SOURCE',
        payload: data
      });
    }
    this.ref.tick();
  }

  public MockDataIncome () {
    const data: DataSource = {
      date: new Date(),
      value: random (1100, 1799) / 100,
      geo: {
        lat: 22,
        lng: 21
      },
      dataSourceId: 'device-' + random(1, 2)
    };
    this.RecieveDataSourceIncoming(data);
  }

}
