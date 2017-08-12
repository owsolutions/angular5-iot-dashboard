import { LoginComponent } from '@app/core/login/login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@app/iot/index/index.component';
import { LocationsComponent } from '@app/iot/locations/locations.component';
import { SettingsComponent } from '@app/core/settings/settings.component';
import { DevicesComponent } from '@app/iot/devices/devices.component';
import { ActivityComponent } from '@app/iot/activity/activity.component';
import { WidgetsComponent } from '@app/iot/widgets/widgets.component';
import { LocationEditComponent } from '@app/iot/locations/location-edit/location-edit.component';
import { DataTableComponent } from '@app/core/data-table/data-table.component';
import { FormElementsComponent } from '@app/core/form-elements/form-elements.component';
import { UsersComponent } from '@app/core/users/users.component';
import { RolesComponent } from '@app/core/roles/roles.component';
import { UserSingleComponent } from '@app/core/users/user-single/user-single.component';
import { DefaultLayout, AuthLayout } from '@app/iot/layout/DefaultLayout';
import { DropFileComponent } from '@app/core/drop-file/drop-file.component';

export const appRoutes: Routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    AuthLayout (IndexComponent, 'index'),
    AuthLayout (LocationsComponent, 'locations'),
    AuthLayout (SettingsComponent, 'settings'),
    AuthLayout (LocationEditComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
    AuthLayout (LocationEditComponent, 'locations/edit/:id', {data: {mode: 'new'}}),
    AuthLayout (UsersComponent, 'users'),
    AuthLayout (RolesComponent, 'roles'),
    AuthLayout (ActivityComponent, 'activities'),
    AuthLayout (DevicesComponent, 'devices'),
    AuthLayout (WidgetsComponent, 'widgets'),
    AuthLayout (FormElementsComponent, 'form-elements'),
    AuthLayout (UserSingleComponent, 'user/:id'),
    {
        path: 'login',
        component: LoginComponent
    },
    DefaultLayout(DropFileComponent, 'drop-file')
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
