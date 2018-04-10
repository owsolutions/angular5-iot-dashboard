import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { CloudDevice, ILocation } from '@app/definitions';

@Injectable()
export class NotificationService {

  constructor(
    private toaster: ToasterService,
  ) { }

  public InvokeUserSignup () {
    const message = 'Welcome to your dashboard. Please read introductions, in Integration>Docs to learn more.';
    this.toaster.popAsync('success', 'Signup successful', message);
  }

  public InvokeDeviceCreate (device: CloudDevice) {
    const toaserTitle = 'Device Created Succesfully';
    this.toaster.pop('success', toaserTitle, device.name);
  }

  public InvokeDeviceUpdate (device: CloudDevice) {
    const toaserTitle = 'Device Edited!';
    this.toaster.pop('success', toaserTitle, device.name);
  }

  public InvokeDeviceDelete (device: CloudDevice) {
    this.toaster.pop('error', 'Your Device Deleted', device.name);
  }
  public InvokeLocationDelete (location: ILocation) {
    this.toaster.pop('error', 'Your Device Deleted', location.name);
  }
  public InvokeLocationUpdate (location: ILocation) {
    this.toaster.pop('success', 'Your Location has been updated', location.name);
  }
  public InvokeLocationCreate (location: ILocation) {
    this.toaster.pop('success', 'Location Created Succesfully', location.name);
  }
  public InvokeProfileUpdate() {
    this.toaster.pop('success', 'Profile updated',
      'Your profile changes has been saved. Some of the changes may affect in the next signin.'); ;
  }
  public InvokeSocketConnect () {
    this.toaster.popAsync('success', 'Server', 'You are now connected');
  }
  public InvokeRoomConnect () {
    this.toaster.popAsync('success', 'Private environment', 'You are inside your environment now');
  }
}
