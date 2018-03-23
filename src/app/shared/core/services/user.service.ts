import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IUser } from '@shared/core/definitions';
import { RequestsService } from '@app/shared/core/services/requests.service';

@Injectable()
export class UserService {

  private user: IUser;
  constructor (
    private requests: RequestsService,
  ) {
    try {
      this.user = JSON.parse(localStorage.getItem('userInformation'));
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

  public SetUser (user: IUser) {
    this.user = user;
    localStorage.setItem('userInformation', JSON.stringify(user));
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
