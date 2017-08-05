import { Injectable } from '@angular/core';
import { IPermission } from './shared/Definitions';

@Injectable()
export class PermissionsService {

  constructor() { }

  getAll (): Array<IPermission>  {
    return [
      {
        title: 'Change devices pin',
        group: 'DEVICES',
        key: 'DEVICES_PIN_CHANGE'
      },
      {
        title: 'Create new user',
        group: 'USERS',
        key: 'CREATE_USER'
      },
      {
        title: 'Update the user',
        group: 'USERS',
        key: 'UPDATE_USER'
      }
    ];
  }

  findByKey (key: string) {
    return this.getAll().find(x => x.key === key);
  }

}
