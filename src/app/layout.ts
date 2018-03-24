import { NavigationComponent } from '@components/navigation/navigation.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard , DataSyncGuard} from '@services/user.service';
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
        }
      ]
    }
  },
  {
    outlet: 'sidebar',
    path: '',
    component: SidebarComponent
  },

];

export function AuthLayout (component: any, route: string, options: any = {}): Route {
    return {
        path: route,
        ... options,
        canActivate: environment.production ? [AuthGuard, DataSyncGuard] : [DataSyncGuard],
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
