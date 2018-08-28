import { IRole, IUser, CloudDevice, DataSource } from '@app/definitions';

export interface IotModuleState {
  iotModule: {
    devices: Array<CloudDevice>;
    locations: Array<any>;
    unconnectedSources: Array<DataSource>;
  };
}
