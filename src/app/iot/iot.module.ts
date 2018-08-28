import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgUikitModule } from '@app/ng-uikit/ng-uikit.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgxTooltipModule } from '../components/ngx-tooltip/ngx-tooltip.module';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserCommonService } from '@app/users/user-common.service';
import { UserMockService } from '@app/users/user-mocks.service';
import { UserRequestsService } from '@app/users/user-requests.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserMockInterceptor } from '@app/users/user-mock.interceptor';
import { environment } from 'environments/environment';
import { userModuleReducersGenerator } from '@app/users/user-module.reducers';

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
    userModuleReducersGenerator(),
  ],
  providers: [
    UserCommonService,
    UserMockService,
    UserRequestsService,
    !environment.targetAPI ? { provide: HTTP_INTERCEPTORS, useClass: UserMockInterceptor, multi: true } : [],
  ],
  declarations: [
    
  ]
})
export class IotModule { }

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
