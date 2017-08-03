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
      icon: 'icon icon-home-outline',
      title: 'Home'
    },
    {
      link: '/devices',
      icon: 'icon icon-keyboard',
      title: 'Devices'
    },
    {
      link: '/widgets',
      icon: 'icon icon-skyatlas',
      title: 'Widgets'
    },
    {
      link: '/users',
      icon: 'icon icon-users',
      title: 'Users'
    },
    {
      link: '/locations',
      icon: 'icon icon-location',
      title: 'locations'
    },
    {
      link: '/activities',
      icon: 'icon icon-camera-alt',
      title: 'Activities'
    }
  ];
}
