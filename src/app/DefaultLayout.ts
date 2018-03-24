import { NavigationComponent } from '@components/navigation/navigation.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { Route } from '@angular/router';
import { DefaultLayoutComponent } from '@components/default-layout/default-layout.component';
import { AuthGuard } from '@services/user.service';
import { environment } from '../environments/environment';

const SidebarOutlets = [
  {
    path: '',
    outlet: 'navigation',
    component: NavigationComponent
  },
  {
    outlet: 'sidebar',
    path: '',
    component: SidebarComponent
  }
];

export function AuthLayout (component: any, route: string, options: any = {}): Route {
    return {
        path: route,
        ... options,
        canActivate: environment.production ? [AuthGuard] : [],
        component: DefaultLayoutComponent,
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
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                component: component
            },
            ...SidebarOutlets
        ],
    };
}
