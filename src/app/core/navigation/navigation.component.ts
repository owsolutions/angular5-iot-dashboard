import { Component } from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { AuthGuard } from '@app/core/services/user.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public navigation: Array<any> = [
    {
      link: '/index',
      icon: 'icon icon-home',
      title: 'Home',
      children: [
        {
          link: '/index',
          icon: 'icon icon-home',
          title: 'Test1',
          children: []
        },
        {
          link: '/index',
          icon: 'icon icon-home',
          title: 'Test2',
          children: [{
            link: '/index',
            icon: 'icon icon-home',
            title: 'Test2-1',
            children: []
          }]
        },
        {
          link: '/index',
          icon: 'icon icon-home',
          title: 'Test3',
          children: [
            {
              link: '/index',
              icon: 'icon icon-home',
              title: 'Test3-1',
              children: []
            }
          ]
        }
      ]
    },
    {
      link: '/devices',
      icon: 'icon icon-developer_board',
      title: 'Devices',
      permissions: ['DEVICES::VIEW'],
      auth: true,
      children: []
    },
    {
      link: '/widgets',
      icon: 'icon icon-widgets',
      title: 'Widgets',
      permissions: ['WIDGETS::VIEW'],
      auth: true,
      children: []
    },
    {
      link: '/drop-file',
      icon: 'icon icon-account_box',
      title: 'File upload',
      permissions: ['USERS::VIEW'],
      auth: true,
      children: []
    },
    {
      link: '/users',
      icon: 'icon icon-account_box',
      title: 'Users',
      permissions: ['USERS::VIEW'],
      auth: true,
      children: []
    },
    {
      link: '/roles',
      icon: 'icon icon-key',
      title: 'Roles & permissions',
      permissions: ['ROLES::VIEW'],
      auth: true,
      children: []
    },
    {
      link: '/locations',
      icon: 'icon icon-room',
      title: 'locations',
      permissions: ['LOCATIONS::VIEW'],
      auth: true,
      children: []
    },
    {
      link: '/activities',
      icon: 'icon icon-notifications_active',
      title: 'Activities',
      permissions: ['ACTIVITIES::VIEW'],
      auth: true,
      children: []
    },
    {
      link: '/form-elements',
      icon: 'icon icon-wpforms',
      title: 'Form elements',
      children: []
    },
    {
      link: '/login',
      icon: 'icon icon-exit_to_app',
      title: 'Logout',
      children: []
    }
  ];

  constructor(private user: UserService, private authGurard: AuthGuard) {}

  getNavigation (): Array<any> {

    return this.navigation.filter((item) => {
      if (item.auth === true) {
        if (!this.authGurard.canActivate()) {
          return false;
        }
      }
      return this.user.canActivate(item.permissions);
    });
  }
}
