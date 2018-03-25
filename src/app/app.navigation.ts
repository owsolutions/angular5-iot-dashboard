export const navigation = [
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
    link: '/locations',
    icon: 'icon icon-room',
    title: 'Locations',
    permissions: ['LOCATIONS::VIEW'],
    auth: true
  },
  {
    link: '/gallery',
    icon: 'icon icon-eye',
    title: 'Gallery',
    permissions: ['USERS::VIEW'],
    auth: true
  },
  {
    link: '/settings',
    icon: 'icon icon-settings',
    title: 'Settings',
    auth: true
  },
  {
    link: '/docs',
    icon: 'icon icon-star',
    title: 'documents',
  },
  {
    link: '/login',
    icon: 'icon icon-exit_to_app',
    title: 'Logout'
  }
];