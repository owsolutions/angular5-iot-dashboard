import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LocationsComponent } from './locations/locations.component';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';

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
        path: 'devices',
        component: DevicesComponent,
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
