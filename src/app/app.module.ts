import { Component, Inject, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appReducersGenerator } from './app.reducers';
import { createRoutes  } from './app.routes';
import { NgMediaModule } from './ng-media/ng-media-module';
import { RealtimeService } from '@services/realtime.service';
import { NotificationService } from '@services/notification.service';
import { SettingsComponent } from '@components/settings/settings.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TextInputComponent } from '@components/forms/text-input/text-input.component';
import { RadioInputComponent } from '@components/forms/radio-input/radio-input.component';
import { SelectInputComponent } from '@components/forms/select-input/select-input.component';
import { PermissionsService } from '@services/permissions.service';
import { RequestsService } from '@services/requests.service';
import { CheckboxInputComponent } from '@components/forms/checkbox-input/checkbox-input.component';
import { ActionsService } from '@services/actions.service';
import { UserService, AuthGuard } from '@services/user.service';
import { DevicesComponent } from '@app/iot/devices/devices.component';
import { ActivityWidgetComponent } from '@app/iot/activity/activity-widget/activity-widget.component';
import { LocationsComponent } from '@components/locations/locations.component';
import { ActivityComponent } from '@app/iot/activity/activity.component';
import { LocationRowComponent } from '@components/locations/location-row/location-row.component';
import { LocationSingleComponent } from '@components/locations/location-single/location-single.component';
import { OutputPinViewComponent } from '@components/output-pin-view/output-pin-view.component';
import { SwitchWidgetsComponent } from '@app/iot/switch-widgets/switch-widgets.component';
import { IconWidgetsComponent } from '@components/index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from '@app/iot/places/places.component';
import { IndexComponent } from '@components/index/index.component';
import { UserWidgetComponent } from '@components/user-widget/user-widget.component';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { SidebarWidgetComponent } from '@components/sidebar-widget/sidebar-widget.component';
import { IotSvgService } from '@services/iot-svg/iot-svg.service';
import { DeviceSingleComponent } from '@app/iot/device-single/device-single.component';
import { DocsComponent } from '@components/docs/docs.component';
import { DocsApiWorkaroundComponent } from '@components/docs/docs-api-workaround/docs-api-workaround.component';
import { DeviceGeneralInformationComponent } from '@app/iot/device-general-information/device-general-information.component';
import { DeviceTemperatureComponent } from '@app/iot/device-temperature/device-temperature.component';
import { DeviceLampComponent } from '@app/iot/device-lamp/device-lamp.component';
import { DeviceCO2Component } from '@app/iot/device-co2/device-co2.component';
import { DeviceHumidityComponent } from '@app/iot/device-humidity/device-humidity.component';
import { StatisticsComponent } from '@components/statistics/statistics.component';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from '@services/mock.interceptor';
import { MockService } from '@services/mocks.service';
import { TokenInterceptor } from '@services/token.interceptor';
import { GeneralInterceptorService } from '@services/general-interceptor.service';
import { QuickChartComponent } from '@app/components/quick-chart/quick-chart.component';
import { ProgressLineComponent } from '@app/components/progress-line/progress-line.component';
import { RealtimeDocumentModule } from 'realtime-document';
import { ToasterModule } from 'angular2-toaster';
import { ApplicationsListComponent } from '@app/components/applications-list/applications-list.component';
import { DashboardComponent } from '@app/components/dashboard/dashboard.component';
import { ActivitiesComponent } from '@app/iot/widgets/activities/activities.component';
import { HistoryStatisticsComponent } from '@app/iot/widgets/history-statistics/history-statistics.component';
import { DailyStatisticsComponent } from '@app/iot/widgets/daily-statistics/daily-statistics.component';
import { ExperimentalComponent } from '@app/components/experimental/experimental.component';
import { NgxTooltipModule } from '@app/components/ngx-tooltip/ngx-tooltip.module';
import { SendingInformationHttpsComponent } from '@app/components/docs/sending-information-https/sending-information-https.component';
import { PrivacyPolicyComponent } from '@app/components/privacy-policy/privacy-policy.component';
import { ProfileComponent } from '@app/components/profile/profile.component';
import { DeviceEventsActionsComponent } from '@app/iot/device-events-actions/device-events-actions.component';
import { ContactDetailsComponent } from '@app/components/contact-details/contact-details.component';
import { IfExperimentalComponent } from '@app/components/if-experimental/if-experimental.component';
import { GpsComponent } from '@app/iot/gps/gps.component';
import { D3neComponent } from '@app/iot/d3ne/d3ne.component';
import { LampCardComponent } from '@app/iot/widgets/lamp-card//lamp-card.component';
import { HumidityComponent } from '@app/iot/widgets/humidity/humidity.component';
import { CO2WidgetComponent } from '@app/iot/widgets/co2-widget/co2-widget.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { Ng5BasicModule } from './ng5-basic/ng5-basic.module';
import pl from './translations/pl';
import fa from './translations/fa';
import { GlobalizationService } from '@app/services/globalization.service';
import { RestfulComponent } from '@app/components/docs/restful/restful.component';
import { IfNotEnglishComponent } from '@app/components/if-not-english/if-not-english.component';
import { WaterBubbleComponent } from '@app/iot/water-bubble/water-bubble.component';
import { Co2Component } from '@app/iot/co2/co2.component';
import { DOCUMENT } from '@angular/common';
import { UsersModule } from '@app/users/users.module';
import { NgUikitModule } from '@app/ng-uikit/ng-uikit.module';
import { CalendarModule } from 'angular-calendar';
import { AngularCalendarComponent } from '@app/components/angular-calendar/angular-calendar.component';

declare var require: any;
const Highcharts = require('highcharts/highstock');
window['Highcharts'] = Highcharts;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor (
    private realtime: RealtimeService,
    private translate: TranslateService,
    private globalization: GlobalizationService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.realtime.ActivateRealtime();
    this.RestoreLanguage();
  }

  ngOnInit() {
    this.globalization.layoutDirectionEmmiter.subscribe(direction => {
      this.document.body.setAttribute('dir', direction);
    });
  }

  private RestoreLanguage () {
    let lang = 'en';
    const _lang = localStorage.getItem('preferedLanguage');
     if (_lang === 'en' || _lang === 'pl' || _lang === 'fa') {
      lang = _lang;
    }
    this.translate.setTranslation('pl', pl);
    this.translate.setTranslation('fa', fa);
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
    this.globalization.setLayoutDirection(true);
    this.document.body.setAttribute('dir', this.globalization.getLayoutDirection());
  }
}

@NgModule({
  declarations: [
    AppComponent,
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
    CheckboxInputComponent,
    DevicesComponent,
    LampCardComponent,
    HumidityComponent,
    ActivityWidgetComponent,
    LocationsComponent,
    ActivityComponent,
    DeviceGeneralInformationComponent,
    LocationRowComponent,
    LocationSingleComponent,
    OutputPinViewComponent,
    NavigationComponent,
    DeviceTemperatureComponent,
    DeviceLampComponent,
    DeviceCO2Component,
    DeviceHumidityComponent,
    SwitchWidgetsComponent,
    IconWidgetsComponent,
    PlacesComponent,
    DocsComponent,
    QuickChartComponent,
    IndexComponent,
    UserWidgetComponent,
    GalleryComponent,
    LoadingComponent,
    StatisticsComponent,
    ApplicationsListComponent,
    DevicesComponent,
    CO2WidgetComponent,
    LocationsComponent,
    DashboardComponent,
    ActivitiesComponent,
    HistoryStatisticsComponent,
    ExperimentalComponent,
    SendingInformationHttpsComponent,
    PrivacyPolicyComponent,
    ProfileComponent,
    DeviceEventsActionsComponent,
    ContactDetailsComponent,
    IfExperimentalComponent,
    GpsComponent,
    D3neComponent,
    RestfulComponent,
    IfNotEnglishComponent,
    WaterBubbleComponent,
    Co2Component,
    AngularCalendarComponent,
  ],
  imports: [
    RealtimeDocumentModule,
    NgxTooltipModule,
    BrowserAnimationsModule,
    Ng5BasicModule,
    BrowserModule,
    FormsModule,
    UsersModule,
    TranslateModule.forRoot(),
    CalendarModule.forRoot(),
    NgMediaModule,
    NgUikitModule,
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
    GlobalizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralInterceptorService,
      multi: true
    },
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
