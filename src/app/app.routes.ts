import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@app/iot/index/index.component';
import { LocationsComponent } from '@app/iot/locations/locations.component';
import { SettingsComponent } from '@components/settings/settings.component';
import { DevicesComponent } from '@app/iot/devices/devices.component';
import { ActivityComponent } from '@app/iot/activity/activity.component';
import { LocationSingleComponent } from '@app/iot/locations/location-single/location-single.component';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { DeviceSingleComponent } from '@app/iot/device-single/device-single.component';
import { DocsComponent } from '@app/iot/docs/docs.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './ng5-basic/layout/layout.component';
import { AuthGuard } from '@services/user.service';
import { ExperimentalComponent } from '@app/iot/experimental/experimental.component';
import { SendingInformationHttpsComponent } from '@app/iot/docs/sending-information-https/sending-information-https.component';
import { PrivacyPolicyComponent } from '@app/components/privacy-policy/privacy-policy.component';
import { ProfileComponent } from '@app/components/profile/profile.component';
import { DeviceEventsActionsComponent } from '@app/iot/device-events-actions/device-events-actions.component';
import { ContactDetailsComponent } from '@app/components/contact-details/contact-details.component';
import { GpsComponent } from '@app/iot/gps/gps.component';
import { RestfulComponent } from '@app/iot/docs/restful/restful.component';
import { userAuthLayoutRoutes } from '@app/users/user-routes';
import { AngularCalendarComponent } from '@app/boilerplate/angular-calendar/angular-calendar.component';

export function AuthLayoutChild(component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    component: component,
    ... options,
    canActivate: [AuthGuard],
  };
}

export const appRoutes: Routes = [
  {   path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      AuthLayoutChild (IndexComponent, 'index'),
      AuthLayoutChild (LocationsComponent, 'locations'),
      AuthLayoutChild (SettingsComponent, 'token'),
      AuthLayoutChild (LocationSingleComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
      AuthLayoutChild (LocationSingleComponent, 'location/new', {data: {mode: 'new'}}),
      AuthLayoutChild (ActivityComponent, 'activities'),
      AuthLayoutChild (GpsComponent, 'gps'),
      AuthLayoutChild (ContactDetailsComponent, 'monitoring/manage-contacts'),
      AuthLayoutChild (DevicesComponent, 'devices'),
      AuthLayoutChild (DeviceSingleComponent, 'device/create'),
      AuthLayoutChild (ProfileComponent, 'profile'),
      AuthLayoutChild (DeviceEventsActionsComponent, 'device/events-and-actions/:id'),
      AuthLayoutChild (DeviceSingleComponent, 'device/:id'),
      AuthLayoutChild (ExperimentalComponent, 'experimental'),
      AuthLayoutChild (DeviceSingleComponent, 'create-device-from-source/:sourceId'),
      AuthLayoutChild (DocsComponent, 'docs'),
      AuthLayoutChild (SendingInformationHttpsComponent, 'docs/sending-information-over-https'),
      AuthLayoutChild (RestfulComponent, 'docs/restful-api'),
      AuthLayoutChild (GalleryComponent, 'gallery'),
      AuthLayoutChild (AngularCalendarComponent, 'angular-calendar'),
      ...userAuthLayoutRoutes,
    ]
  },
  {   path: '**', redirectTo: '/index' }
];

export function createRoutes () {
  return RouterModule.forRoot(appRoutes, { useHash: true});
}
