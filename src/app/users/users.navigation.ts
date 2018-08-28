
export const DefaultUsersModuleNavigation = {
  icon: 'icon-verified_user',
  title: 'Users & Access',
  class: 'users-access',
  children: [
    {
      link: '/roles',
      icon: 'fa-user-circle',
      title: 'Roles list',
      permissions: ['LOCATIONS::VIEW'],
      auth: true,
      class: 'roles-list'
    },
    {
      link: '/users',
      icon: 'fa-users',
      title: 'View users',
      class: 'users-list'
    },
    {
      link: '/user/create',
      icon: 'fa-plus',
      title: 'Create a user',
      class: 'users-create'
    },
  ]
};
