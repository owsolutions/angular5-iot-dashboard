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
        key: 'DEVICES_PIN_CHANGE',
        checkLabel: ['ON','OFF']
      },
      {
        title: 'Create new user',
        group: 'USERS',
        key: 'CREATE_USER',
        checkLabel: ['YES','NO']
      },
      {
        title: 'Update the user',
        group: 'USERS',
        key: 'UPDATE_USER',
        checkLabel: ['0','1']
      }
    ];
  }

  findByKey (key: string) {
    return this.getAll().find(x => x.key === key);
  }

}
