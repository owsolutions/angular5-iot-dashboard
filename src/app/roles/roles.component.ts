import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionsService } from '../permissions.service';
import { RequestsService } from '../requests.service';
import { IRole } from '../shared/Definitions';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public roles: Array<IRole> = [];
  constructor(private router: Router, private permissions: PermissionsService, private requests: RequestsService) { }

  async ngOnInit() {
    this.roles = await this.requests.getRoles();
  }
  

}
