import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@components/index/index.component';
import { LocationsComponent } from '@components/locations/locations.component';
import { SettingsComponent } from '@components/settings/settings.component';
import { DevicesComponent } from '@components/devices/devices.component';
import { ActivityComponent } from '@components/activity/activity.component';
import { LocationSingleComponent } from '@components/locations/location-single/location-single.component';
import { RolesComponent } from '@components/roles/roles.component';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { DeviceSingleComponent } from '../app/components/device-single/device-single.component';
import { DocsComponent } from '@components/docs/docs.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard , DataSyncGuard} from '@services/user.service';
import { environment } from '../environments/environment';
import { ExperimentalComponent } from '@app/components/experimental/experimental.component';
import { SendingInformationHttpsComponent } from './components/docs/sending-information-https/sending-information-https.component';

export function AuthLayout (component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    ... options,
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: component
      },
    ],
  };
}
export function DefaultLayout (component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    ... options,
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: component
      },
    ],
  };
}

export function AuthLayoutChild(component: any, route: string, options: any = {}): Route {
    return {
        path: route,
        component: component,
        ... options,
        canActivate: environment.production ? [AuthGuard, DataSyncGuard] : [DataSyncGuard],
    };
}


export const appRoutes: Routes = [
  {   path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: '',
    canActivate: environment.production ? [AuthGuard, DataSyncGuard] : [AuthGuard, DataSyncGuard],
    component: LayoutComponent,
    children: [
        AuthLayoutChild (IndexComponent, 'index'),
        AuthLayoutChild (LocationsComponent, 'locations'),
        AuthLayoutChild (SettingsComponent, 'settings'),
        AuthLayoutChild (LocationSingleComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
        AuthLayoutChild (LocationSingleComponent, 'location/new', {data: {mode: 'new'}}),
        AuthLayoutChild (RolesComponent, 'roles'),
        AuthLayoutChild (ActivityComponent, 'activities'),
        AuthLayoutChild (DevicesComponent, 'devices'),
        AuthLayoutChild (DeviceSingleComponent, 'device/create'),
        AuthLayoutChild (DeviceSingleComponent, 'device/:id'),
        AuthLayoutChild (ExperimentalComponent, 'experimental'),
        AuthLayoutChild (DeviceSingleComponent, 'create-device-from-source/:sourceId'),
        AuthLayoutChild (DocsComponent, 'docs'),
        AuthLayoutChild (SendingInformationHttpsComponent, 'docs/sending-information-over-https'),
        AuthLayoutChild (GalleryComponent, 'gallery')
    ]
  },
  {   path: '**', redirectTo: '/index' }
];

export function createRoutes () {
  return RouterModule.forRoot(appRoutes, { useHash: true});
}
