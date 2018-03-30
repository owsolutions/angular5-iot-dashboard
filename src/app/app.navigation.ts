import { environment } from "environments/environment";


export const navigation = [
  {
    link: '/index',
    icon: 'icon-home',
    title: 'Home'
  },
  {
    icon: 'icon-devices_other',
    title: 'Devices',
    permissions: ['DEVICES::VIEW'],
    auth: true,
    children: [
      {
        link: '/devices/create',
        icon: 'icon-add',
        title: 'Create a device',
        permissions: ['DEVICES::VIEW'],
        auth: true
      },
      {
        link: '/devices',
        icon: 'icon-devices_other',
        title: 'Devices List',
        permissions: ['DEVICES::VIEW'],
        auth: true,
      }
    ]
  },
  {
    icon: 'icon-location_searching',
    title: 'Locations',
    children: [
      {
        link: '/location/new',
        icon: 'icon-add',
        title: 'Create a location',
        permissions: ['LOCATIONS::VIEW'],
        auth: true
      },
      {
        link: '/locations',
        icon: 'icon-list',
        title: 'View Locations',
        permissions: ['LOCATIONS::VIEW'],
        auth: true
      },
    ]
  },
  {
    link: '/gallery',
    icon: 'icon-attach_file',
    title: 'Gallery',
    permissions: ['USERS::VIEW'],
    auth: true
  },
  {
    link: '/settings',
    icon: 'icon-settings',
    title: 'Settings',
    auth: true
  },
  {
    link: '/docs',
    icon: 'icon-help',
    title: 'documents',
  },
  ! environment.production ? {
    link: '/experimental',
    icon: 'icon-help',
    title: 'Experimental',
  } : null,
  {
    link: '/login',
    icon: 'icon-power_settings_new',
    title: 'Logout'
  }
];
