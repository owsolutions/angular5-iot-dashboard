import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '@shared/core/services/requests.service';
import { WorkspaceUser, AppState } from '@shared/iot/definitions';
import { IRole } from '@shared/core/definitions';
import { Store } from '@ngrx/store';
declare var $: any;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public roles: Array<IRole> = [];
  public users: Array<WorkspaceUser> = [];
  constructor(
    private router: Router,
    private requests: RequestsService,
    private store: Store<AppState>,
  ) {

  }

  public changeUserRole (user: string, role: string) {
    this.requests.ChangeUserRole(user, role);
  }

  ngOnInit() {
    this.store.select('roles').subscribe(collection => {
      this.roles = (collection as Array<IRole>);
    });
    this.requests.GetWorkspaceUsers().subscribe((users: Array<WorkspaceUser>) => {
      this.users = users;
    });

  }

}
