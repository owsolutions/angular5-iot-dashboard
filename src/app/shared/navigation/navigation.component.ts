import { Component, OnInit } from '@angular/core';

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
      title: 'Home'
    },
    {
      link: '/devices',
      icon: 'icon icon-developer_board',
      title: 'Devices'
    },
    {
      link: '/widgets',
      icon: 'icon icon-widgets',
      title: 'Widgets'
    },
    {
      link: '/users',
      icon: 'icon icon-account_box',
      title: 'Users'
    },
    {
      link: '/roles',
      icon: 'icon icon-key',
      title: 'Roles & permissions'
    },
    {
      link: '/locations',
      icon: 'icon icon-room',
      title: 'locations'
    },
    {
      link: '/activities',
      icon: 'icon icon-notifications_active',
      title: 'Activities'
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
}
