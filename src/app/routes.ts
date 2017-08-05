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
import DefaultLayout from './layout/DefaultLayout';

export const appRoutes: Routes = [
    DefaultLayout(IndexComponent, 'index'),
    DefaultLayout(SummaryComponent, 'summary'),
    DefaultLayout(LocationsComponent, 'locations'),
    DefaultLayout(SettingsComponent, 'settings'),
    DefaultLayout(LocationEditComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
    DefaultLayout(LocationEditComponent, 'locations/edit/:id', {data: {mode: 'new'}}),
    DefaultLayout(UsersComponent, 'users'),
    DefaultLayout(RolesComponent, 'roles'),
    DefaultLayout(ActivityComponent, 'activities'),
    DefaultLayout(DevicesComponent, 'devices'),
    DefaultLayout(WidgetsComponent, 'widgets'),
    DefaultLayout(FormElementsComponent, 'form-elements'),
    DefaultLayout(UserSingleComponent, 'user/:id'),
    { path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
