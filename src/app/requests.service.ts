import { Injectable } from '@angular/core';
import { IRole } from './shared/Definitions';
import { PermissionsService } from './permissions.service';

@Injectable()
export class RequestsService {

  constructor(private permissions: PermissionsService) { }

  async getRoles (): Promise<Array<IRole>> {
    return [
      {
        permissions: [
          this.permissions.findByKey('DEVICES_PIN_CHANGE'),
          this.permissions.findByKey('UPDATE_USER')
        ],
        id: 1,
        title: 'Content Moderator'
      },
      {
        permissions: [],
        id: 2,
        title: 'Higher manager'
      },
      {
        permissions: [],
        id: 3,
        title: 'Installler'
      }
    ];
  }

}
