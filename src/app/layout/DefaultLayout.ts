import { NavigationComponent } from '../shared/navigation/navigation.component';
import { QuickStatusComponent } from './quick-status/quick-status.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { Route } from '@angular/router';
import { DefaultLayoutComponent } from '../default-layout/default-layout.component';
import { AuthGuard } from '../user.service';

const SidebarOutlets = [
    {
        path: '',
        outlet: 'navigation',
        component: NavigationComponent
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
        canActivate: [AuthGuard],
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
