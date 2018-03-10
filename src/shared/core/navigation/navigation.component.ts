import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/core/services/user.service';
import { AuthGuard } from '@shared/core/services/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navigation: Array<any> = [
    {
      link: '/index',
      icon: 'icon icon-home',
      title: 'Home'
    },
    {
      link: '/devices',
      icon: 'icon icon-developer_board',
      title: 'Devices',
      permissions: ['DEVICES::VIEW'],
      auth: true
    },
    {
      link: '/widgets',
      icon: 'icon icon-widgets',
      title: 'Widgets',
      permissions: ['WIDGETS::VIEW'],
      auth: true
    },
    {
      link: '/gallery',
      icon: 'icon icon-account_box',
      title: 'File upload',
      permissions: ['USERS::VIEW'],
      auth: true
    },
    {
      link: '/users',
      icon: 'icon icon-account_box',
      title: 'Users',
      permissions: ['USERS::VIEW'],
      auth: true
    },
    {
      link: '/roles',
      icon: 'icon icon-key',
      title: 'Roles & permissions',
      permissions: ['ROLES::VIEW'],
      auth: true
    },
    {
      link: '/locations',
      icon: 'icon icon-room',
      title: 'locations',
      permissions: ['LOCATIONS::VIEW'],
      auth: true
    },
    {
      link: '/activities',
      icon: 'icon icon-notifications_active',
      title: 'Activities',
      permissions: ['ACTIVITIES::VIEW'],
      auth: true
    },
    {
      link: '/form-elements',
      icon: 'icon icon-wpforms',
      title: 'Form elements'
    },
    {
      link: '/login',
      icon: 'icon icon-exit_to_app',
      title: 'Logout'
    }
  ];

  constructor(
    private user: UserService,
    private authGurard: AuthGuard,
    private route: ActivatedRoute,
  ) {}

  ngOnInit () {
    this.route.data.subscribe((data) => {
      if (data.navigation) {
        this.navigation = data.navigation;
      }
    });
  }

  public CanIncludeItem (item): boolean {
    if (item.auth === true) {
      if (!this.authGurard.canActivate()) {
        return false;
      }
    }
    return this.user.canActivate(item.permissions);
  }
}
