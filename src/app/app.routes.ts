import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@shared/core/index/index.component';
import { LocationsComponent } from '@shared/core/locations/locations.component';
import { SettingsComponent } from '@shared/core/settings/settings.component';
import { DevicesComponent } from '@shared/core/devices/devices.component';
import { ActivityComponent } from '@shared/core/activity/activity.component';
import { LocationEditComponent } from '@shared/core/locations/location-edit/location-edit.component';
import { FormElementsComponent } from '@shared/core/form-elements/form-elements.component';
import { RolesComponent } from '@shared/core/roles/roles.component';
import { DefaultLayout, AuthLayout } from './layout';
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
