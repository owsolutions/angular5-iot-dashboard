import { IRole } from '@shared/core/definitions';

/**
 * A pin is any kind of I/O port of a device.
 * it has a type, which can be input, or output
 * also there is a unique id on device.
 * value, is the current status of device, can be TRUE,FALSE for digital
 * or can be a float number for analog data, such as temperature, humidity, light
 */
export interface IPin {
  type: any;
  id: any;
  value: any;
}

/**
 * A device is consisting an array of pins.
 */
export interface IDevice {
  uniqueid: string;
  pins: Array<IPin>;
}


export interface IWidgetForm {
  name: string;
  location: any;
}

/**
 * A place, defines the area of modules and infrustructure
 */
export interface ILocation {
  id: Number;
  name: string;
  icon: string;
  level: string;
}

/**
 * A widget, is only a shortuct ( alias ) for a device pin,
 * to make it user friendly for normal users.
 * As a user perspective, when you want to turn on your house lamp,
 * you are not expecting to go for devices, and "set pin 4 on device x8395 to 5V",
 * so you can create alias on top of pin, and give it to users by security group to control
 * the pin
 */
export interface IWidget {
  device: IDevice;
  pin: IPin;
  name: string;
  location: ILocation;
}

export interface IPermission {
  title: string;
  key: string;
  group: string;
}

/**
 * Represents the application store structure
 */
export interface AppState {
  devices: Array<CloudDevice>;
  roles: Array<IRole>;
  locations: Array<any>;
  activities: Array<IActivity>;
  widgets: Array<IWidget>;
  analogEvents: Array<AnalogEvent>;
  thermometers: Array<Thermometer>;
}

/**
 * Occures when a device changes
 */
export enum ActivityTypes {
  DevicePinChange
}
/**
 * This represents if an activity occures in application
 */
export interface IActivity {
  id: Number;
  description: string;
  type: ActivityTypes;
  meta: any;
  icon: string;
  iconType: string;
  reason: string;
  time: string;
}


export interface IVPCInformation {
  administrator: string;
  administratorPassword: string;
  vpcname: string;
  vpcregion: string;
}
export interface WorkspaceUser {
  Email: string;
  Name: string;
  LastActivity: string;
  Access: string;
}

/**
 * Represents a change in device data, when happens inside a analog device reader;
 * such as temperature, pressure, and humidity.
 */
export interface AnalogEvent {
  createdAt: Date;
  source?: any;
  value: number;
  device: string;
}
export interface AnalogSource {

}
/**
 * Represents a thermomether device, and keeps it's values overtime.
 * Since a thermometer is basically a analog source, we are extending it from that
 * interface for semantic reasons
 */
export interface Thermometer extends AnalogSource {
  name?: string;
  location?: number;
  data?: Array<AnalogEvent>;

}
export enum TemperatureCustomization {
  SidebarRealTimeValue,
  SidebarLastWeekAverage
}

export interface IDeviceDisplayPreference {
  type: 'TemperatureDevice',
  key: TemperatureCustomization,
  value: any
}

export interface DataSource {
  device: string;
  value: any;
  geo?: {
    lat: number;
    lng: number;
  }
  date?: Date
}

export enum CloudDeviceType {
  TemperatureSensor
}

export interface CloudDevice {
  id?: any;
  name?: string;
  datasource?: string;
  type: CloudDeviceType;
  description?: string;
  model?: string;
  location?: any;
  preferences: Array<IDeviceDisplayPreference>;
}