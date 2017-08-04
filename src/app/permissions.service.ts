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
      }
    ]
  }

}
