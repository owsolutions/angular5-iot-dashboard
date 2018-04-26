import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionsService } from '@services/permissions.service';
import { RequestsService } from '@services/requests.service';
import { IRole, IPermission } from '@app/definitions';
import { AppState } from '@app/definitions';

import { Store } from '@ngrx/store';
import { ActionsService } from '@app/services/actions.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public DeleteRole = this.actions.DeleteRole.bind(this.actions);
  public perms: Array<any> = [];
  public roles: Array<IRole> = [];
  constructor (
    private router: Router,
    private permissions: PermissionsService,
    private requests: RequestsService,
    private store: Store<AppState>,
    private actions: ActionsService,
  ) { }

  async ngOnInit() {
    this.store.select('roles').subscribe(collection => {
      this.roles = (collection as Array<IRole>);
    });
    this.perms = this.permissions.getAll();
  }

  countRolePermissions(role: IRole): Number {
    return role.permissions.length;
  }

  roleHasPermission (role: IRole, permission: IPermission) {
    const $perm = role.permissions.find(perm => perm.key === permission.key);
    return $perm ? true : false;
  }

  onPermChange (value, perm: IPermission, role: IRole) {
    // If true, we need to add this permission to role, otherwise, remove it.
    if (value) {
      role.permissions = role.permissions.concat(perm);
      this.store.dispatch({
        type: 'UPDATE_ROLE',
        payload: role
      });
    } else {
      role.permissions = role.permissions.filter((p: IPermission) => p.key !== perm.key);
    }
  }
}
