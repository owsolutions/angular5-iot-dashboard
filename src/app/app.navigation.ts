import { environment } from 'environments/environment';
export const navigation = [
  {
    link: '/index',
    icon: 'icon-home',
    title: 'Home',
    class: 'home'
  },
  {
    icon: 'icon-devices_other',
    title: 'Devices',
    permissions: ['DEVICES::VIEW'],
    class: 'device',
    auth: true,
    children: [
      {
        link: '/device/create',
        icon: '',
        title: 'Create a device',
        permissions: ['DEVICES::VIEW'],
        auth: true,
        class: 'device-create'
      },
      {
        link: '/devices',
        icon: '',
        title: 'Devices List',
        permissions: ['DEVICES::VIEW'],
        auth: true,
        class: 'device-list'
      }
    ]
  },
  {
    icon: 'icon-location_searching',
    title: 'Locations',
    class: 'location',
    children: [
      {
        link: '/location/new',
        icon: '',
        title: 'Create a location',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'location-create'
      },
      {
        link: '/locations',
        icon: '',
        title: 'View Locations',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'location-list'
      },
    ]
  },
  {
    icon: 'icon-visibility',
    title: 'Monitoring',
    class: 'monitoring',
    children: [
      {
        link: '/monitoring/manage-contacts',
        icon: '',
        title: 'Manage contacts',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'manage-contacts'
      },
    ]
  },
  ! environment.production ? {
    icon: 'icon-verified_user',
    title: 'Users & Access',
    class: 'users-access',
    children: [
      {
        link: '/roles',
        icon: '',
        title: 'Roles list',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'roles-list'
      },
    ]
  } : null,
  ! environment.production ? {
    link: '/gallery',
    icon: 'icon-attach_file',
    title: 'Gallery',
    permissions: ['USERS::VIEW'],
    auth: true,
    class: 'gallery'
  } : null,
  {
    title: 'Integration',
    icon: 'icon-link',
    children: [
      {
        link: '/token',
        icon: 'icon-settings',
        title: 'Access tokens',
        class: 'settings',
        auth: true
      },
      {
        // link: '/docs',
        icon: 'icon-help',
        title: 'documents',
        class: 'docs',
        children: [
          {
            title: 'Introduction',
            class: 'docs-introduction',
            link: '/docs'
          },
          {
            title: 'Restful API',
            class: 'docs-restful-api',
            link: '/docs/restful-api'
          },
          {
            title: 'Sending information',
            class: 'docs-sending-information',
            link: '/docs/sending-information-over-https'
          },

        ]
      },
    ]
  },
  ! environment.production ? {
    icon: 'icon-fingerprint',
    title: 'Experimental',
    class: 'experimental',
    children: [
      {
        link: '/experimental',
        title: 'Introduction',
        class: 'introduction',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
      },
      {
        link: '/gps',
        icon: '',
        title: 'GPS Location',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'gps-location'
      },
    ]
  } : null,
  {
    link: '/login',
    icon: 'icon-power_settings_new',
    title: 'Logout',
    class: 'logout'
  }
];
