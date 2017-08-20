import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IUser } from '@app/core/definitions';
import { CommunicateService } from './communicate.service';

@Injectable()
export class UserService {

  private user: IUser;
  constructor (private communicate: CommunicateService) {}
  get User (): IUser {
    return this.user;
  }

  logout () {
    this.user = null;
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

  async Login (username: string, password: string) {
    const user = await this.communicate.authenticateUser(username, password);
    this.user = user;
    return user;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private user: UserService) {}
  canActivate (): boolean {
    return !!this.user.User;
  }
}
