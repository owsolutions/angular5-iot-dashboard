import { NavigationComponent } from '../shared/core/navigation/navigation.component';
import { QuickStatusComponent } from '@shared/iot/quick-status/quick-status.component';
import { AppInfoComponent } from '@shared/iot/app-info/app-info.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '@shared/core/services/user.service';
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
        // {
        //   link: '/devices',
        //   icon: 'icon icon-developer_board',
        //   title: 'Devices',
        //   permissions: ['DEVICES::VIEW'],
        //   auth: true
        // },
        // {
        //   link: '/widgets',
        //   icon: 'icon icon-widgets',
        //   title: 'Widgets',
        //   permissions: ['WIDGETS::VIEW'],
        //   auth: true
        // },
        // {
        //   link: '/gallery',
        //   icon: 'icon icon-account_box',
        //   title: 'File upload',
        //   permissions: ['USERS::VIEW'],
        //   auth: true
        // },
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
        {
          link: '/locations',
          icon: 'icon icon-room',
          title: 'locations',
          permissions: ['LOCATIONS::VIEW'],
          auth: true
        },
        // {
        //   link: '/activities',
        //   icon: 'icon icon-notifications_active',
        //   title: 'Activities',
        //   permissions: ['ACTIVITIES::VIEW'],
        //   auth: true
        // },
        {
          link: '/login',
          icon: 'icon icon-exit_to_app',
          title: 'Logout'
        }
      ]
    }
  },
  {
    outlet: 'quick-status',
    path: '',
    component: QuickStatusComponent
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
