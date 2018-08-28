import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '@services/permissions.service';
import { IRole, IPermission } from '@app/definitions';
import { Store } from '@ngrx/store';
import { error } from '@app/common';
import { IResponse } from 'response-type';
import { NotificationService } from '@app/services/notification.service';
import { UserModuleState } from '@app/users/user.module.defs';
import { UserRequestsService } from '@app/users/user-requests.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-role-single',
  templateUrl: './role-single.component.html',
  styleUrls: ['./role-single.component.scss']
})
export class RoleSingleComponent implements OnInit {

  public isRequesting = false;
  public response: IResponse<IRole> = null;
  public error = error;
  public form: IRole = {
    id: null,
    permissions: [],
    title: ''
  };
  public perms: Array<any> = [];
  public roles: Array<IRole> = [];
  constructor (
    private router: Router,
    private permissions: PermissionsService,
    private requests: UserRequestsService,
    private store: Store<UserModuleState>,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private translate: TranslateService,

  ) { }

  public DeleteRole (role: IRole) {
    if (confirm( this.translate.get('Are you sure to delete this role?')['value'])) {
      this.requests.deleteRole(role.id);
      this.notification.InvokeRoleDelete(role);
      this.router.navigateByUrl('/roles');
    }
  }

  async ngOnInit() {
    this.store.select('userModule').subscribe(({roles}) => {
      this.roles = (roles as Array<IRole>);
    });
    this.perms = this.permissions.getAll();
    this.Init();
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

  public async SubmitForm () {
    this.isRequesting = true;
    const role = Object.assign({}, this.form);
    try {
      const response: IResponse<IRole> = await this.requests.PostRole(role);
      if (response.data && response.data.items && response.data.items[0]) {
        this.router.navigateByUrl('/roles');
        if (this.form.id) {
          this.notification.InvokeRoleUpdate(response.data.items[0]);
        } else {
          this.notification.InvokeRoleCreate(response.data.items[0]);
        }
      }
      this.response = response;
    } catch (error) {
      this.response = error;
    }
    this.isRequesting = false;
  }
  public Init () {
    this.route.params.subscribe((data: {id?: any}) => {
      if (data.id) {
        this.form.id = data.id;
      }
      if ( ! data.id ) {
        return ;
      }
      this.form.id = data.id;
      this.store.select('userModule').subscribe(({roles}) => {
        /* tslint:disable */
        const form = roles.find(dev => dev.id == data.id);
        if ( ! form) {
          return;
        }
        this.form = Object.assign({}, form);
      }).unsubscribe();
    }).unsubscribe();
  }
}
