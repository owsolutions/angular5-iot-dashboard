import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { IUser, IRole } from './shared/Definitions';
import { CommunicateService } from './communicate.service';
import { IPermission } from './shared/Definitions';

@Injectable()
export class UserService {

  private user: IUser;
  constructor (private communicate: CommunicateService) {
    // this.loadUser();
  }

  async loadUser () {
    this.user = await this.communicate.getCurrentUser();
  }

  get User (): IUser {
    return this.user;
  }

  canActivate(permissions: Array<string>) {
    if (permissions && permissions.length) {
      for (const key of permissions) {
        const perm = this.User.role.permissions.find(x => x && x.key === key);
        if ( ! perm ) {
          return false;
        }
      }
    }
    return true;
  }

}


@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private user: UserService) {}
  canActivate (): boolean {
    return !!this.user.User;
  }
}
