import {Action as NgrxAction} from '@ngrx/store';

export interface Action extends NgrxAction {
  payload: any;
}
export interface IUserForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password2: string;
}

export interface IUser {
  username: string;
  email: string;
  avatar: string;
  firstname: string;
  lastname: string;
  role: IRole;
}

export interface IPermission {
  title: string;
  key: string;
  group: string;
}

export interface IRole {
  id: number;
  title: string;
  permissions: Array<IPermission>;
}

declare global {
  export interface Window {
    io: any;
  }
}

export interface SidebarWidgetItem {
  title?: string;
  value?: string | {
    amount: any;
    unit: string;
  };
  icon?: string;
}

/**
 * A place, defines the area of modules and infrustructure
 */
export interface ILocation {
  id: Number;
  name: string;
  icon: string;
  temperatureDevice: any;
  level: string;
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
  unconnectedSources: Array<DataSource>;
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

export enum TemperatureCustomization {
  SidebarRealTimeValue,
  SidebarLastWeekAverage
}

export interface IDeviceDisplayPreference {
  DisplayRealTimeTemperatureInSidebar?: boolean;
  DisplayAverageLastWeekInSidebar?: boolean;
}

export interface DataSource {
  dataSourceId: string;
  value: any;
  geo?: {
    lat: number;
    lng: number;
  };
  date?: Date;
}

export enum CloudDeviceType {
  TemperatureSensor
}

export interface CloudDeviceStatistics {
  minimumValue?: number;
  maximumValue?: number;
}
export interface CloudDevice {
  id?: any;
  name?: string;
  datasource?: string;
  type: CloudDeviceType;
  description?: string;
  model?: string;
  location?: any;
  preferences: IDeviceDisplayPreference;
  value?: any;
  dataHistory?: Array<DataSource>;
  statistics?: CloudDeviceStatistics;
}
