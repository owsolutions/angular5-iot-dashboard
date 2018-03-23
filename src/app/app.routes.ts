import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@components/index/index.component';
import { LocationsComponent } from '@components/locations/locations.component';
import { SettingsComponent } from '@components/settings/settings.component';
import { DevicesComponent } from '@components/devices/devices.component';
import { ActivityComponent } from '@components/activity/activity.component';
import { LocationEditComponent } from '@components/locations/location-edit/location-edit.component';
import { FormElementsComponent } from '@components/form-elements/form-elements.component';
import { RolesComponent } from '@components/roles/roles.component';
import { DefaultLayout, AuthLayout } from './layout';
import { DropFileComponent } from '@components/drop-file/drop-file.component';
import { DeviceSingleComponent } from '../app/components/device-single/device-single.component';
import { DocsComponent } from '@components/docs/docs.component';

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
  AuthLayout (RolesComponent, 'roles'),
  AuthLayout (ActivityComponent, 'activities'),
  AuthLayout (DevicesComponent, 'devices'),
  AuthLayout (DeviceSingleComponent, 'devices/:id'),
  AuthLayout (DeviceSingleComponent, 'create-device-from-source/:sourceId'),
  AuthLayout (FormElementsComponent, 'form-elements'),
  DefaultLayout(DocsComponent, 'docs'),
  DefaultLayout(DropFileComponent, 'gallery')
];

export function createRoutes () {
  return RouterModule.forRoot(appRoutes, { useHash: true});
}
