import { LoginComponent } from '@shared/core/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@shared/iot/index/index.component';
import { LocationsComponent } from '@shared/iot/locations/locations.component';
import { SettingsComponent } from '@shared/core/settings/settings.component';
import { DevicesComponent } from '@shared/iot/devices/devices.component';
import { ActivityComponent } from '@shared/iot/activity/activity.component';
import { LocationEditComponent } from '@shared/iot/locations/location-edit/location-edit.component';
import { FormElementsComponent } from '@shared/core/form-elements/form-elements.component';
import { UsersComponent } from '@shared/core/users/users.component';
import { RolesComponent } from '@shared/core/roles/roles.component';
import { UserSingleComponent } from '@shared/core/users/user-single/user-single.component';
import { DefaultLayout, AuthLayout } from './layout';
import { SignupComponent } from '@shared/iot/signup/signup.component';
import { SignupSuccessComponent } from '@shared/iot/signup/signup-success/signup-success.component';
import { DropFileComponent } from '@shared/core/drop-file/drop-file.component';
import { DeviceSingleComponent } from '../app/components/device-single/device-single.component';
import { DocsComponent } from '@shared/docs/docs.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  AuthLayout (IndexComponent, 'index'),
  AuthLayout (LocationsComponent, 'locations'),
  AuthLayout (SettingsComponent, 'settings'),
  AuthLayout (LocationEditComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
  AuthLayout (LocationEditComponent, 'locations/new', {data: {mode: 'new'}}),
  AuthLayout (UsersComponent, 'users'),
  AuthLayout (RolesComponent, 'roles'),
  AuthLayout (ActivityComponent, 'activities'),
  AuthLayout (DevicesComponent, 'devices'),
  AuthLayout (DeviceSingleComponent, 'devices/:id'),
  AuthLayout (FormElementsComponent, 'form-elements'),
  AuthLayout (UserSingleComponent, 'user/:id'),
  DefaultLayout(DocsComponent, 'docs'),
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup-success',
    component: SignupSuccessComponent
  },
  DefaultLayout(DropFileComponent, 'gallery')
];

export function createRoutes () {
  return RouterModule.forRoot(appRoutes, { useHash: true});
}
