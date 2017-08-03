import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LocationsComponent } from './locations/locations.component';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { ActivityComponent } from './activity/activity.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { LocationEditComponent } from './locations/location-edit/location-edit.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { FormElementsComponent } from './shared/form-elements/form-elements.component';
import { UsersComponent } from './users/users.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { QuickStatusComponent } from './layout/quick-status/quick-status.component';
import { AppInfoComponent } from './layout/app-info/app-info.component';


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

export const appRoutes: Routes = [
    {
        path: 'index',
        children: [
            {
                path: '',
                component: IndexComponent
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'summary',
        children: [
            {
                path: '',
                component: SummaryComponent
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'locations',
        children: [
            {
                path: '',
                component: LocationsComponent
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'settings',
        children: [
            {
                path: '',
                component: SettingsComponent,
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'locations/edit/:id',
        data: {
            mode: 'edit'
        },
        children: [
            {
                path: '',
                component: LocationEditComponent
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'locations/new',
        data: {
            mode: 'new'
        },
        children: [
            {
                path: '',
                component: LocationEditComponent
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'users',
        children: [
            {
                path: '',
                component: UsersComponent,
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'activities',
        children: [
            {
                path: '',
                component: ActivityComponent,
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'devices',
        children: [
            {
                path: '',
                component: DevicesComponent,
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'widgets',
        children: [
            {
                path: '',
                component: WidgetsComponent,
            },
            ...SidebarOutlets
        ]
    },
    {
        path: 'form-elements',
        children: [
            {
                path: '',
                component: FormElementsComponent,
            },
            ...SidebarOutlets
        ]

    },
    { path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
