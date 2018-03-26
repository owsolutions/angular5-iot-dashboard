import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IUser } from '@app/definitions';
import { RequestsService } from '@services/requests.service';
import { PermissionsService } from '@app/services/permissions.service';

@Injectable()
export class UserService {

  private user: IUser;
  private token: string;
  constructor (
    private requests: RequestsService,
    private permissions: PermissionsService
  ) {
    try {
      this.user = JSON.parse(localStorage.getItem('userInformation'));
      this.token = JSON.parse(localStorage.getItem('tokenInformation'));
    } catch (err) {

    }
  }
  get User (): IUser {
    return this.user;
  }

  logout () {
    this.user = null;
  }
  canActivate(permissions: Array<string>) {
    const user = this.User;
    if (!user.role) {
      user.role = {
        permissions: [
          this.permissions.findByKey('DEVICES::VIEW'),
          this.permissions.findByKey('WIDGETS::VIEW'),
          this.permissions.findByKey('LOCATIONS::VIEW'),
          this.permissions.findByKey('ACTIVITIES::VIEW'),
          this.permissions.findByKey('ROLES::VIEW'),
          this.permissions.findByKey('USERS::VIEW')
        ],
        id: null,
        title: 'normal'
      };
    }
    if (permissions && permissions.length) {

      for (const key of permissions) {
        const perm = user.role.permissions.find(x => x && x.key === key);
        if ( ! perm ) {
          return false;
        }
      }
    }
    return true;
  }

  public GetToken () {
    return this.token || '';
  }
  public SetUser (user: IUser) {
    this.user = user;
    localStorage.setItem('userInformation', JSON.stringify(user));
  }
  public SetToken (token: string) {
    this.token = token;
    localStorage.setItem('tokenInformation', JSON.stringify(token));
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
    private user: UserService,
    private router: Router
  ) {}
  canActivate (): boolean {
    if (! this.user.User) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return !!this.user.User;
  }
}


@Injectable()
export class DataSyncGuard implements CanActivate {

  private isSynced = false;
  constructor (
    private requests: RequestsService,
    private user: UserService
  ) {
  }

  canActivate (): boolean {
    if ( ! this.isSynced) {
      this.requests.getDevices();
      this.requests.getLocations();
      this.requests.connectToRoom(this.user.GetToken());
      this.isSynced = true;
    }
    return true;
  }
}
