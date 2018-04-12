import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { CloudDevice, ILocation, AppState, INotification } from '@app/definitions';
import { Store } from '@ngrx/store';

@Injectable()
export class NotificationService {

  constructor(
    private toaster: ToasterService,
    private store: Store<AppState>,
  ) { }

  private StoreNotification (notification: INotification) {
    this.store.dispatch({
      type: 'INSERT_NOTIFICATION',
      payload: notification
    });
    this.toaster.popAsync(notification.type, notification.title, notification.message);
  }
  public InvokeUserSignup () {
    const title = 'Signup successful';
    const message = 'Welcome to your dashboard. Please read introductions, in Integration>Docs to learn more.';
    this.StoreNotification({
      title,
      type: 'success',
      message
    });
  }

  public InvokeDeviceCreate (device: CloudDevice) {
    const title = 'Device Created Succesfully';
    this.StoreNotification({
      title,
      type: 'success',
      message: device.name
    });
  }

  public InvokeDeviceUpdate (device: CloudDevice) {
    const title = 'Device Edited!';
    this.StoreNotification({
      title,
      type: 'success',
      message: device.name
    });
  }

  public InvokeDeviceDelete (device: CloudDevice) {
    this.StoreNotification({
      title: 'Your Device Deleted',
      type: 'error',
      message: device.name
    });
  }
  public InvokeLocationDelete (location: ILocation) {
    this.StoreNotification({
      title: 'Your Location Deleted',
      type: 'error',
      message: location.name
    });
  }
  public InvokeContactsUpdate() {
    this.StoreNotification({
      title: 'Contact details has been updated and will be used effectivly',
      type: 'success',
    });
  }
  public InvokeLocationUpdate (location: ILocation) {
    this.StoreNotification({
      title: 'Your Location has been updated',
      type: 'success',
      message: location.name
    });
  }
  public InvokeLocationCreate (location: ILocation) {
    this.StoreNotification({
      title: 'Location Created Succesfully',
      type: 'success',
      message: location.name
    });
  }
  public InvokeProfileUpdate() {
    this.StoreNotification({
      title: 'Profile updated',
      type: 'success',
      message: 'Your profile changes has been saved. Some of the changes may affect in the next signin.'
    });
  }
  public InvokeSocketConnect () {
    this.StoreNotification({
      title:  'Server',
      type: 'success',
      message: 'You are now connected'
    });
  }
  public InvokeRoomConnect () {
    this.StoreNotification({
      title:  'Private environment',
      type: 'success',
      message: 'You are inside your environment now'
    });
  }
}
