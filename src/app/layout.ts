import { NavigationComponent } from '@components/navigation/navigation.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { AppInfoComponent } from '@components/app-info/app-info.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '@services/user.service';
import { environment } from '../environments/environment';

const SidebarOutlets = [
  {
    path: '',
    outlet: 'navigation',
    component: NavigationComponent,
    data: {
      navigation: [
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
        },
        // {
        //   link: '/users',
        //   icon: 'icon icon-account_box',
        //   title: 'Users',
        //   permissions: ['USERS::VIEW'],
        //   auth: true
        // },
        // {
        //   link: '/roles',
        //   icon: 'icon icon-key',
        //   title: 'Roles & permissions',
        //   permissions: ['ROLES::VIEW'],
        //   auth: true
        // },
        // {
        //   link: '/form-elements',
        //   icon: 'icon icon-wpforms',
        //   title: 'Form elements'
        // },
        // {
        //   link: '/activities',
        //   icon: 'icon icon-notifications_active',
        //   title: 'Activities',
        //   permissions: ['ACTIVITIES::VIEW'],
        //   auth: true
        // },

      ]
    }
  },
  {
    outlet: 'sidebar',
    path: '',
    component: SidebarComponent
  },
  {
    outlet: 'app-info',
    path: '',
    component: AppInfoComponent
  }
];

export function AuthLayout (component: any, route: string, options: any = {}): Route {
    return {
        path: route,
        ... options,
        canActivate: environment.production ? [AuthGuard] : [],
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: component
            },
            ...SidebarOutlets
        ],
    };
}
export function DefaultLayout (component: any, route: string, options: any = {}): Route {
    return {
        path: route,
        ... options,
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: component
            },
            ...SidebarOutlets
        ],
    };
}
