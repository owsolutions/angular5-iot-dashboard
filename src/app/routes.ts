import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LocationsComponent } from './locations/locations.component';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { ActivityComponent } from './activity/activity.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { DataTableComponent } from './shared/data-table/data-table.component';

export const appRoutes: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        data: { title: 'Index page' }
    },
    {
        path: 'summary',
        component: SummaryComponent,
        data: {}
    },
    {
        path: 'locations',
        component: LocationsComponent,
        data: {}
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: {}
    },
    {
        path: 'table',
        component: DataTableComponent,
        data: {}
    },
    {
        path: 'activities',
        component: ActivityComponent,
        data: {}
    },
    {
        path: 'devices',
        component: DevicesComponent,
        data: {}
    },
    {
        path: 'widgets',
        component: WidgetsComponent,
        data: {}
    },
    { path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
