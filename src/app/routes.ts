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
import layout from './layout/DefaultLayout';



export const appRoutes: Routes = [
    { path: '',
        redirectTo: '/form-elements',
        pathMatch: 'full'
    },
    appendAuthGuard(layout (IndexComponent, 'index')),
    appendAuthGuard(layout (LocationsComponent, 'locations')),
    appendAuthGuard(layout (SettingsComponent, 'settings')),
    appendAuthGuard(layout (LocationEditComponent, 'locations/edit/:id', {data: {mode: 'edit'}})),
    appendAuthGuard(layout (LocationEditComponent, 'locations/edit/:id', {data: {mode: 'new'}})),
    appendAuthGuard(layout (UsersComponent, 'users')),
    appendAuthGuard(layout (RolesComponent, 'roles')),
    appendAuthGuard(layout (ActivityComponent, 'activities')),
    appendAuthGuard(layout (DevicesComponent, 'devices')),
    appendAuthGuard(layout (WidgetsComponent, 'widgets')),
    layout (FormElementsComponent, 'form-elements'),
    appendAuthGuard(layout (UserSingleComponent, 'user/:id')),
    {
        path: 'login',
        component: LoginComponent
    }
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
