import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appReducersGenerator } from './app.reducers';
import { createRoutes  } from './app.routes';
import { NgMediaModule } from 'ng-media';
import { RealtimeService } from '@services/realtime.service';
import { NotificationService } from '@services/notification.service';
import { NgxUserModule } from './authentication/authentication.module';
import { SettingsComponent } from '@components/settings/settings.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TextInputComponent } from '@components/forms/text-input/text-input.component';
import { RadioInputComponent } from '@components/forms/radio-input/radio-input.component';
import { SelectInputComponent } from '@components/forms/select-input/select-input.component';
import { RolesComponent } from '@components/roles/roles.component';
import { PermissionsService } from '@services/permissions.service';
import { RequestsService } from '@services/requests.service';
import { CheckboxInputComponent } from '@components/forms/checkbox-input/checkbox-input.component';
import { ActionsService } from '@services/actions.service';
import { UserService, AuthGuard } from '@services/user.service';
import { DevicesComponent } from '@components/devices/devices.component';
import { ActivityWidgetComponent } from '@components/activity/activity-widget/activity-widget.component';
import { LocationsComponent } from '@components/locations/locations.component';
import { ActivityComponent } from '@components/activity/activity.component';
import { LocationRowComponent } from '@components/locations/location-row/location-row.component';
import { LocationSingleComponent } from '@components/locations/location-single/location-single.component';
import { OutputPinViewComponent } from '@components/output-pin-view/output-pin-view.component';
import { SwitchWidgetsComponent } from '@components/switch-widgets/switch-widgets.component';
import { IconWidgetsComponent } from '@components/index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from '@components/index/places/places.component';
import { IndexComponent } from '@components/index/index.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { UserWidgetComponent } from '@components/user-widget/user-widget.component';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { SidebarWidgetComponent } from '@components/sidebar-widget/sidebar-widget.component';
import { IotSvgService } from '@services/iot-svg/iot-svg.service';
import { DeviceSingleComponent } from 'app/components/device-single/device-single.component';
import { DocsComponent } from '@components/docs/docs.component';
import { DocsApiWorkaroundComponent } from '@components/docs/docs-api-workaround/docs-api-workaround.component';
import { DeviceGeneralInformationComponent } from 'app/components/device-general-information/device-general-information.component';
import { DeviceCustomizationComponent } from 'app/components/device-customization/device-customization.component';
import { StatisticsComponent } from '@components/statistics/statistics.component';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from '@services/mock.interceptor';
import { MockService } from '@services/mocks.service';
import { TokenInterceptor } from '@services/token.interceptor';
import { QuickChartComponent } from './components/quick-chart/quick-chart.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ProgressLineComponent } from './components/progress-line/progress-line.component';
import { RealtimeDocumentModule } from 'realtime-document';
import { ToasterModule } from 'angular2-toaster';

import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NgxSidebarModule } from './components/ngx-sidebar/ngx-sidebar.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarControllerService } from './components/ngx-sidebar/sidebar-controller.service';
import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivitiesComponent } from './components/widgets/activities/activities.component';
import { HistoryStatisticsComponent } from './components/widgets/history-statistics/history-statistics.component';
import { FooterComponent } from './components/footer/footer.component';
import { DailyStatisticsComponent } from '@app/components/widgets/daily-statistics/daily-statistics.component';
import { ExperimentalComponent } from './components/experimental/experimental.component';
import { NgxTooltipModule } from './components/ngx-tooltip/ngx-tooltip.module';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { SendingInformationHttpsComponent } from './components/docs/sending-information-https/sending-information-https.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';


declare var require: any;
const Highcharts = require('highcharts/highstock');
window['Highcharts'] = Highcharts;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor (
    private _sidebarController: SidebarControllerService,
    private realtime: RealtimeService,
  ) {
    this.realtime.ActivateRealtime();
  }
}



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SettingsComponent,
    PageHeaderComponent,
    TextInputComponent,
    DocsApiWorkaroundComponent,
    DeviceSingleComponent,
    ProgressLineComponent,
    RadioInputComponent,
    SelectInputComponent,
    DailyStatisticsComponent,
    SidebarWidgetComponent,
    RolesComponent,
    CheckboxInputComponent,
    DevicesComponent,
    ActivityWidgetComponent,
    LocationsComponent,
    ActivityComponent,
    DeviceGeneralInformationComponent,
    LocationRowComponent,
    LocationSingleComponent,
    OutputPinViewComponent,
    NavigationComponent,
    DeviceCustomizationComponent,
    SwitchWidgetsComponent,
    IconWidgetsComponent,
    PlacesComponent,
    DocsComponent,
    QuickChartComponent,
    IndexComponent,
    SidebarComponent,
    UserWidgetComponent,
    GalleryComponent,
    LoadingComponent,
    StatisticsComponent,
    ErrorMessageComponent,


    ProfileMenuComponent,
    NotificationListComponent,
    NavBarComponent,
    SideBarComponent,
    ApplicationsListComponent,
    DevicesComponent,
    LocationsComponent,
    DashboardComponent,
    ActivitiesComponent,
    HistoryStatisticsComponent,
    FooterComponent,
    ExperimentalComponent,
    PageContainerComponent,
    SendingInformationHttpsComponent,
    PrivacyPolicyComponent,
    ProfileComponent,
    ContactDetailsComponent,
  ],
  imports: [
    NgxUserModule,
    NgxSidebarModule,
    RealtimeDocumentModule,
    NgxTooltipModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgMediaModule,
    ToasterModule.forRoot(),
    createRoutes (),
    appReducersGenerator()
  ],
  providers: [
    RealtimeService,
    PermissionsService,
    RequestsService,
    RealtimeService,
    MockService,
    ActionsService,
    NotificationService,
    UserService,
    AuthGuard,
    SidebarControllerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    !environment.production ? { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true } : [],
    IotSvgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor (
    private realtime: RealtimeService,
  ) {
    // Realtime service is imported intentionally
  }
}
