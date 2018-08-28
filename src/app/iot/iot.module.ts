import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgUikitModule } from '@app/ng-uikit/ng-uikit.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgxTooltipModule } from '../components/ngx-tooltip/ngx-tooltip.module';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'environments/environment';
import { IotRequestsService } from '@app/iot/iot-requests.service';
import { iotModuleReducersGenerator } from '@app/iot/iot-module.reducers';
import { IotCommonService } from '@app/iot/iot-common.service';
import { IotMockService } from '@app/iot/iot-mocks.service';
import { IotMockInterceptor } from '@app/iot/iot-mock.interceptor';
import { DevicesComponent } from '@app/iot/devices/devices.component';
import { ActivityWidgetComponent } from '@app/iot/activity/activity-widget/activity-widget.component';
import { LocationsComponent } from '@app/iot/locations/locations.component';
import { ActivityComponent } from '@app/iot/activity/activity.component';
import { LocationRowComponent } from '@app/iot/locations/location-row/location-row.component';
import { LocationSingleComponent } from '@app/iot/locations/location-single/location-single.component';
import { SwitchWidgetsComponent } from '@app/iot/switch-widgets/switch-widgets.component';
import { PlacesComponent } from '@app/iot/places/places.component';
import { DeviceSingleComponent } from '@app/iot/device-single/device-single.component';
import { DocsComponent } from '@app/iot/docs/docs.component';
import { DocsApiWorkaroundComponent } from '@app/iot/docs/docs-api-workaround/docs-api-workaround.component';
import { DeviceGeneralInformationComponent } from '@app/iot/device-general-information/device-general-information.component';
import { DeviceTemperatureComponent } from '@app/iot/device-temperature/device-temperature.component';
import { DeviceLampComponent } from '@app/iot/device-lamp/device-lamp.component';
import { DeviceCO2Component } from '@app/iot/device-co2/device-co2.component';
import { DeviceHumidityComponent } from '@app/iot/device-humidity/device-humidity.component';
import { ActivitiesComponent } from '@app/iot/widgets/activities/activities.component';
import { HistoryStatisticsComponent } from '@app/iot/widgets/history-statistics/history-statistics.component';
import { DailyStatisticsComponent } from '@app/iot/widgets/daily-statistics/daily-statistics.component';
import { SendingInformationHttpsComponent } from '@app/iot/docs/sending-information-https/sending-information-https.component';
import { DeviceEventsActionsComponent } from '@app/iot/device-events-actions/device-events-actions.component';
import { ExperimentalComponent } from '@app/iot/experimental/experimental.component';
import { GpsComponent } from '@app/iot/gps/gps.component';
import { D3neComponent } from '@app/iot/d3ne/d3ne.component';
import { LampCardComponent } from '@app/iot/widgets/lamp-card//lamp-card.component';
import { HumidityComponent } from '@app/iot/widgets/humidity/humidity.component';
import { CO2WidgetComponent } from '@app/iot/widgets/co2-widget/co2-widget.component';
import { RestfulComponent } from '@app/iot/docs/restful/restful.component';
import { WaterBubbleComponent } from '@app/iot/water-bubble/water-bubble.component';
import { Co2Component } from '@app/iot/co2/co2.component';
import { IfExperimentalComponent } from '@app/components/if-experimental/if-experimental.component';
import { NgMediaModule } from '@app/ng-media';
import { IfNotEnglishComponent } from '@app/iot/if-not-english/if-not-english.component';
import { RealtimeDocumentModule } from 'realtime-document';
import { IconWidgetsComponent } from '@app/iot/index/icon-widgets/icon-widgets.component';
import { IndexComponent } from '@app/iot/index/index.component';
import { StatisticsComponent } from '@app/iot/statistics/statistics.component';
import { RealtimeService } from '@app/iot/realtime.service';

@NgModule({
  imports: [
    CommonModule,
    NgUikitModule,
    RouterModule.forChild([]),
    TranslateModule.forRoot(),
    NgxTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbModalModule.forRoot(),
    iotModuleReducersGenerator(),
    NgMediaModule,
    RealtimeDocumentModule,
  ],
  providers: [
    IotCommonService,
    IotMockService,
    RealtimeService,
    IotRequestsService,
    !environment.targetAPI ? { provide: HTTP_INTERCEPTORS, useClass: IotMockInterceptor, multi: true } : [],
  ],
  declarations: [
    StatisticsComponent,
    IndexComponent,
    IconWidgetsComponent,
    IfNotEnglishComponent,
    ExperimentalComponent,
    DocsApiWorkaroundComponent,
    DeviceSingleComponent,
    DailyStatisticsComponent,
    DevicesComponent,
    LampCardComponent,
    HumidityComponent,
    ActivityWidgetComponent,
    LocationsComponent,
    ActivityComponent,
    DeviceGeneralInformationComponent,
    LocationRowComponent,
    LocationSingleComponent,
    DeviceTemperatureComponent,
    DeviceLampComponent,
    DeviceCO2Component,
    DeviceHumidityComponent,
    SwitchWidgetsComponent,
    PlacesComponent,
    DocsComponent,
    DevicesComponent,
    CO2WidgetComponent,
    LocationsComponent,
    ActivitiesComponent,
    HistoryStatisticsComponent,
    SendingInformationHttpsComponent,
    DeviceEventsActionsComponent,
    GpsComponent,
    D3neComponent,
    RestfulComponent,
    WaterBubbleComponent,
    Co2Component,
    IfExperimentalComponent,
  ]
})
export class IotModule { 
  constructor(
    private realtime: RealtimeService,
  ) {
    this.realtime.ActivateRealtime();
  }
}

export const DefaultIotModuleNavigation = [
  {
    icon: 'icon-devices_other',
    title: 'Devices',
    permissions: ['DEVICES::VIEW'],
    class: 'device',
    auth: true,
    children: [
      {
        link: '/device/create',
        icon: '',
        title: 'Create a device',
        permissions: ['DEVICES::VIEW'],
        auth: true,
        class: 'device-create'
      },
      {
        link: '/devices',
        icon: '',
        title: 'Devices List',
        permissions: ['DEVICES::VIEW'],
        auth: true,
        class: 'device-list',
      }
    ]
  },
  {
    icon: 'icon-location_searching',
    title: 'Locations',
    class: 'location',
    children: [
      {
        link: '/location/new',
        icon: '',
        title: 'Create a location',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'location-create'
      },
      {
        link: '/locations',
        icon: '',
        title: 'View Locations',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'location-list'
      },
    ]
  },
  {
    icon: 'icon-visibility',
    title: 'Monitoring',
    class: 'monitoring',
    children: [
      {
        link: '/monitoring/manage-contacts',
        icon: '',
        title: 'Manage contacts',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'manage-contacts'
      },
    ]
  },
  {
    title: 'Integration',
    icon: 'icon-link',
    children: [
      {
        link: '/token',
        icon: 'icon-settings',
        title: 'Access tokens',
        class: 'settings',
        auth: true
      },
      {
        // link: '/docs',
        icon: 'icon-help',
        title: 'documents',
        class: 'docs',
        children: [
          {
            title: 'Introduction',
            class: 'docs-introduction',
            link: '/docs'
          },
          {
            title: 'Restful API',
            class: 'docs-restful-api',
            link: '/docs/restful-api'
          },
          {
            title: 'Sending information',
            class: 'docs-sending-information',
            link: '/docs/sending-information-over-https'
          },

        ]
      },
    ]
  },
  ! environment.production ? {
    icon: 'icon-fingerprint',
    title: 'Experimental',
    class: 'experimental',
    children: [
      {
        link: '/experimental',
        title: 'Introduction',
        class: 'introduction',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
      },
      {
        link: '/gps',
        icon: '',
        title: 'GPS Location',
        permissions: ['LOCATIONS::VIEW'],
        auth: true,
        class: 'gps-location'
      },
    ]
  } : null,
];
