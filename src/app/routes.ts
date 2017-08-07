import { LoginComponent } from './membership/login/login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LocationsComponent } from './locations/locations.component';
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
import { DefaultLayout, AuthLayout } from './layout/DefaultLayout';


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
    }
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
