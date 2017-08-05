import { LoginComponent } from './membership/login/login.component';
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
import { RolesComponent } from './roles/roles.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import layout from './layout/DefaultLayout';

export const appRoutes: Routes = [
    layout (IndexComponent, 'index'),
    layout (SummaryComponent, 'summary'),
    layout (LocationsComponent, 'locations'),
    layout (SettingsComponent, 'settings'),
    layout (LocationEditComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
    layout (LocationEditComponent, 'locations/edit/:id', {data: {mode: 'new'}}),
    layout (UsersComponent, 'users'),
    layout (RolesComponent, 'roles'),
    layout (LoginComponent, 'login'),
    layout (ActivityComponent, 'activities'),
    layout (DevicesComponent, 'devices'),
    layout (WidgetsComponent, 'widgets'),
    layout (FormElementsComponent, 'form-elements'),
    layout (UserSingleComponent, 'user/:id'),
    { path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
