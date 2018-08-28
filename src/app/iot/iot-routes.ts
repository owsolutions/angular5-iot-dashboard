import { Route } from '@angular/router';
import { AuthGuard } from '@services/user.service';
import { IndexComponent } from '@app/iot/index/index.component';
import { LocationsComponent } from '@app/iot/locations/locations.component';
import { DevicesComponent } from '@app/iot/devices/devices.component';
import { ActivityComponent } from '@app/iot/activity/activity.component';
import { LocationSingleComponent } from '@app/iot/locations/location-single/location-single.component';
import { DeviceSingleComponent } from '@app/iot/device-single/device-single.component';
import { DocsComponent } from '@app/iot/docs/docs.component';
import { ExperimentalComponent } from '@app/iot/experimental/experimental.component';
import { SendingInformationHttpsComponent } from '@app/iot/docs/sending-information-https/sending-information-https.component';
import { DeviceEventsActionsComponent } from '@app/iot/device-events-actions/device-events-actions.component';
import { GpsComponent } from '@app/iot/gps/gps.component';
import { RestfulComponent } from '@app/iot/docs/restful/restful.component';

export function AuthLayoutChild(component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    component: component,
    ... options,
    canActivate: [AuthGuard],
  };
}

export const IotAuthLayoutRoutes = [
  AuthLayoutChild (IndexComponent, 'index'),
  AuthLayoutChild (LocationsComponent, 'locations'),
  AuthLayoutChild (LocationSingleComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
  AuthLayoutChild (LocationSingleComponent, 'location/new', {data: {mode: 'new'}}),
  AuthLayoutChild (ActivityComponent, 'activities'),
  AuthLayoutChild (GpsComponent, 'gps'),
  AuthLayoutChild (DevicesComponent, 'devices'),
  AuthLayoutChild (DeviceSingleComponent, 'device/create'),
  AuthLayoutChild (DeviceEventsActionsComponent, 'device/events-and-actions/:id'),
  AuthLayoutChild (DeviceSingleComponent, 'device/:id'),
  AuthLayoutChild (ExperimentalComponent, 'experimental'),
  AuthLayoutChild (DeviceSingleComponent, 'create-device-from-source/:sourceId'),
  AuthLayoutChild (DocsComponent, 'docs'),
  AuthLayoutChild (SendingInformationHttpsComponent, 'docs/sending-information-over-https'),
  AuthLayoutChild (RestfulComponent, 'docs/restful-api'),
];
