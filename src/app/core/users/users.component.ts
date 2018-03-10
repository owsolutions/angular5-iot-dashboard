import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '@app/core/services/requests.service';
import { WorkspaceUser } from '@app/iot/definitions';
declare var $: any;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<WorkspaceUser> = [];
  constructor(
    private router: Router,
    private requests: RequestsService,
  ) {
     
  }
 
  ngOnInit() {
    this.requests.GetWorkspaceUsers().subscribe((users: Array<WorkspaceUser>) => {
      console.log('users: ', users);
      this.users = users;
    });

  }

}
