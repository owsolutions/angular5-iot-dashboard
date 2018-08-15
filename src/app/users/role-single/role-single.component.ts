import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '@services/permissions.service';
import { RequestsService } from '@services/requests.service';
import { IRole, IPermission } from '@app/definitions';
import { AppState } from '@app/definitions';
import { Store } from '@ngrx/store';
import { error } from '@app/common';
import { IResponse } from 'response-type';
import { NotificationService } from '@app/services/notification.service';
import { ActionsService } from '@app/services/actions.service';

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
  public DeleteRole = this.actions.DeleteRole.bind(this.actions);
  public perms: Array<any> = [];
  public roles: Array<IRole> = [];
  constructor (
    private router: Router,
    private permissions: PermissionsService,
    private requests: RequestsService,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private actions: ActionsService,
  ) { }

  async ngOnInit() {
    this.store.select('roles').subscribe(collection => {
      this.roles = (collection as Array<IRole>);
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
      this.store.select('roles').subscribe((devices: Array<IRole>) => {
        /* tslint:disable */
        const form = devices.find(dev => dev.id == data.id);
        if ( ! form) {
          return;
        }
        this.form = Object.assign({}, form);
      }).unsubscribe();
    }).unsubscribe();
  }
}
