import { NavigationComponent } from '../shared/navigation/navigation.component';
import { QuickStatusComponent } from './quick-status/quick-status.component';
import { AppInfoComponent } from './app-info/app-info.component';

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

export default function DefaultLayout (component: any, route: string, options: any = {}) {
    return {
        path: route,
        ... options,
        children: [
            {
                path: '',
                component: component
            },
            ...SidebarOutlets
        ]
    };
}
