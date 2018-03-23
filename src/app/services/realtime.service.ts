import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, CloudDevice, DataSource } from '@app/definitions';
import { random } from 'lodash';
declare var Pusher: any;

@Injectable()
export class RealtimeService {

  public channel: any = null;
  public devices: Array<CloudDevice> = [];
  public unconnectedDevices: Array<DataSource> = [];
  constructor(
    private store: Store<AppState>,
  ) {
    this.ActivateMockIncomingMessages();
    this.store.select('devices').subscribe((devices) => {
      this.devices = devices;
    });
  }

  public StartPusher () {
    Pusher.logToConsole = true;

    const pusher = new Pusher('b2306c94cd640903c3a1', {
      cluster: 'ap1',
      encrypted: true
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(data.message);
    });
    this.channel = channel;

    setTimeout(() => {
      pusher.trigger('my-channel', 'my-event', 'asasd');
    }, 1000);
  }

  /**
   * For development purposes, we simulate the incoming messages from server socket.
   */
  private ActivateMockIncomingMessages () {
    setInterval(() => {
      // this.RecieveDeviceChange({
      //   id: 1,
      //   value: random(1700, 1799) / 100,
      // });
      this.MockDataIncome();
    }, 3500);
    setInterval(() => {
      // this.RecieveDeviceChange({
      //   id: 2,
      //   value: -1 * random(1100, 1799) / 100,
      // });
      this.MockDataIncome();
    }, 1500);
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
  }

  public MockDataIncome () {
    const data: DataSource = {
      date: new Date(),
      value: random (1100, 1799) / 100,
      geo: {
        lat: 22,
        lng: 21
      },
      dataSourceId: 'device-' + random(2, 3)
    };
    this.RecieveDataSourceIncoming(data);
  }

}
