import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { CloudDevice, ILocation, AppState, INotification } from '@app/definitions';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class NotificationService {

  constructor(
    private toaster: ToasterService,
    private store: Store<AppState>,
    private translation: TranslateService,
  ) { }

  private StoreNotification (notification: INotification) {
    notification.title = this.translation.get(notification.title)['value'];
    notification.message = this.translation.get(notification.message)['value'];
    this.store.dispatch({
      type: 'INSERT_NOTIFICATION',
      payload: notification
    });
    this.toaster.popAsync(notification.type, notification.title , notification.message);
  }
  public InvokePasswordReset () {
    const notification: INotification = {
      message: 'Your password has been reset successfully.',
      status: 'icon-vpn_key',
      date: new Date(),
      title: 'Password reset',
      type: 'success'
    };
    this.toaster.popAsync(notification.type, notification.title, notification.message);
  }
  public InvokeUserSignup () {
    const title = 'Signup successful';
    const message = 'Welcome to your dashboard. Please read introductions, in Integration>Docs to learn more.';
    this.StoreNotification({
      title,
      type: 'success',
      status: 'icon-exit_to_app',
      date: new Date(),
      message
    });
  }

  public InvokeDeviceCreate (device: CloudDevice) {
    const title = 'Device Created Succesfully';
    this.StoreNotification({
      title,
      type: 'success',
      status: 'icon-add_circle',
      date: new Date(),
      message: device.name
    });
  }

  public InvokeDeviceUpdate (device: CloudDevice) {
    const title = 'Device Edited!';
    this.StoreNotification({
      title,
      type: 'success',
      status: 'icon-mode_edit',
      date: new Date(),
      message: device.name
    });
  }

  public InvokeDeviceDelete (device: CloudDevice) {
    this.StoreNotification({
      title: 'Your Device Deleted',
      type: 'error',
      status: 'icon-remove_circle',
      date: new Date(),
      message: device.name
    });
  }
  public InvokeLocationDelete (location: ILocation) {
    this.StoreNotification({
      title: 'Your Location Deleted',
      type: 'error',
      status: 'icon-remove_circle',
      date: new Date(),
      message: location.name
    });
  }
  public InvokeContactsUpdate() {
    this.StoreNotification({
      title: 'Contact details has been updated and will be used effectivly',
      type: 'success',
      status: 'icon-mode_edit',
      date: new Date()
    });
  }
  public InvokeLocationUpdate (location: ILocation) {
    this.StoreNotification({
      title: 'Your Location has been updated',
      type: 'success',
      status: 'icon-mode_edit',
      date: new Date(),
      message: location.name
    });
  }
  public InvokeLocationCreate (location: ILocation) {
    this.StoreNotification({
      title: 'Location Created Succesfully',
      type: 'success',
      status: 'icon-add_circle',
      date: new Date(),
      message: location.name
    });
  }
  public InvokeProfileUpdate() {
    this.StoreNotification({
      title: 'Profile updated',
      type: 'success',
      status: 'icon-account_box',
      date: new Date(),
      message: 'Your profile changes has been saved. Some of the changes may affect in the next signin.'
    });
  }
  public InvokeSocketConnect () {
    this.StoreNotification({
      title:  'Server',
      type: 'success',
      status: 'icon-dns',
      date: new Date(),
      message: 'You are now connected'
    });
  }
  public InvokeRoomConnect () {
    this.StoreNotification({
      title:  'Private environment',
      type: 'success',
      status: 'icon-cloud_done',
      date: new Date,
      message: 'You are inside your private environment now'
    });
  }
}
