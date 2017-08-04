import { Injectable } from '@angular/core';
import { IRole } from './shared/Definitions';
@Injectable()
export class RequestsService {

  constructor() { }

  async getRoles (): Promise<Array<IRole>> {
    return [
      {
        permissions: [],
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
