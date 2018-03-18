import { Injectable } from '@angular/core';
import { IPermission } from '@shared/core/definitions';

@Injectable()
export class PermissionsService {

  constructor() { }

  UsersPermissions (): Array<IPermission> {
    return [
      {
        group: 'USERS',
        key: 'USERS::CREATE',
        title: 'Create user'
      },
      {
        group: 'USERS',
        key: 'USERS::UPDATE',
        title: 'Update user'
      },
      {
        group: 'USERS',
        key: 'USERS::DELETE',
        title: 'Delete user'
      },
      {
        group: 'USERS',
        key: 'USERS::VIEW',
        title: 'View users'
      }
    ];
  }

  DevicesPermissions (): Array<IPermission> {
    return [
      {
        title: 'Update device infomration',
        group: 'DEVICES',
        key: 'DEVICES::UPDATE_INFORMATION'
      },
      {
        title: 'Update devices',
        group: 'DEVICES',
        key: 'DEVICES::VIEW'
      }
    ];
  }

  LocationsPermissions (): Array<IPermission> {
    return [
      {
        title: 'View Locations',
        group: 'LOCATIONS',
        key: 'LOCATIONS::VIEW'
      }
    ];
  }

  ActivitiesPermissions (): Array<IPermission> {
    return [
      {
        title: 'View Activities',
        group: 'ACTIVITIES',
        key: 'ACTIVITIES::VIEW'
      }
    ];
  }

  RolesPermissions (): Array<IPermission> {
    return [
      {
        title: 'View Roles',
        group: 'ROLES',
        key: 'ROLES::VIEW'
      }
    ];
  }


  WidgetsPermissions (): Array<IPermission> {
    return [
      {
        group: 'WIDGETS',
        key: 'WIDGETS::CREATE',
        title: 'Create widget'
      },
      {
        group: 'WIDGETS',
        key: 'WIDGETS::UPDATE',
        title: 'Update widget info'
      },
      {
        group: 'WIDGETS',
        key: 'WIDGETS::CHANGE',
        title: 'Change widgets output'
      },
      {
        group: 'WIDGETS',
        key: 'WIDGETS::VIEW',
        title: 'View widgets'
      }
    ];
  }

  getAll (): Array<IPermission>  {
    return this.DevicesPermissions()
      .concat(this.UsersPermissions())
      .concat(this.LocationsPermissions())
      .concat(this.RolesPermissions())
      .concat(this.ActivitiesPermissions())
      .concat(this.WidgetsPermissions());
  }

  findByKey (key: string) {
    return this.getAll().find(x => x.key === key);
  }

}
