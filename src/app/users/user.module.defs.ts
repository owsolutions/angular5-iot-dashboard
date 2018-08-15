import { IRole, IUser } from '@app/definitions';

export interface UserModuleState {
  userModule: {
    roles: Array<IRole>;
    users: Array<IUser>;
  };
}
