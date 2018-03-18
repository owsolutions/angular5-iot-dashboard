import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, CloudDevice, CloudDeviceType } from '@shared/iot/definitions';
import { random } from 'lodash';
declare var Pusher: any;

@Injectable()
export class RealtimeService {

  public channel: any = null;
  constructor(
    private store: Store<AppState>,
  ) {
    this.ActivateMockIncomingMessages();
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
      this.RecieveDeviceChange({
        id: 1,
        value: random(1700, 1799) / 100,
      });
    }, 3500);
    setInterval(() => {
      this.RecieveDeviceChange({
        id: 2,
        value: -1 * random(1100, 1799) / 100,
      });
    }, 7500);
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

}
