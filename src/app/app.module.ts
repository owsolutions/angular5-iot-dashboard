import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appReducersGenerator } from './app.reducers';
import { createRoutes  } from './app.routes';
import { NgMediaModule } from 'ng-media';
import { NgIotModule } from 'ng-iot';
import { LayoutComponent } from './components/layout/layout.component';
import { RealtimeService } from '@services/realtime.service';
import { NgxUserModule } from './authentication/authentication.module';
import { SettingsComponent } from '@components/settings/settings.component';
import { DataTableComponent } from '@components/data-table/data-table.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TextInputComponent } from '@components/forms/text-input/text-input.component';
import { RadioInputComponent } from '@components/forms/radio-input/radio-input.component';
import { SelectInputComponent } from '@components/forms/select-input/select-input.component';
import { FormElementsComponent } from '@components/form-elements/form-elements.component';
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
import { LocationEditComponent } from '@components/locations/location-edit/location-edit.component';
import { OutputPinViewComponent } from '@components/shared/output-pin-view/output-pin-view.component';
import { SwitchWidgetsComponent } from '@components/shared/switch-widgets/switch-widgets.component';
import { UnConnectedSourceComponent } from '@components/shared/unconnected-source/unconnected-source.component';
import { IconWidgetsComponent } from '@components/index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from '@components/index/places/places.component';
import { IndexComponent } from '@components/index/index.component';
import { DefaultLayoutComponent } from '@components/default-layout/default-layout.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { UserWidgetComponent } from '@components/user-widget/user-widget.component';
import { AppInfoComponent } from '@components/app-info/app-info.component';
import { ModesComponent } from '@components/app-info/modes/modes.component';
import { DropFileComponent } from '@components/gallery/gallery.component';
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


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SettingsComponent,
    DataTableComponent,
    PageHeaderComponent,
    TextInputComponent,
    DocsApiWorkaroundComponent,
    DeviceSingleComponent,
    RadioInputComponent,
    SelectInputComponent,
    FormElementsComponent,
    SidebarWidgetComponent,
    RolesComponent,
    UnConnectedSourceComponent,
    CheckboxInputComponent,
    DevicesComponent,
    ActivityWidgetComponent,
    LocationsComponent,
    ActivityComponent,
    DeviceGeneralInformationComponent,
    LocationRowComponent,
    LocationEditComponent,
    OutputPinViewComponent,
    NavigationComponent,
    DeviceCustomizationComponent,
    SwitchWidgetsComponent,
    IconWidgetsComponent,
    PlacesComponent,
    DocsComponent,
    IndexComponent,
    DefaultLayoutComponent,
    SidebarComponent,
    UserWidgetComponent,
    AppInfoComponent,
    ModesComponent,
    DropFileComponent,
    LoadingComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgIotModule,
    NgxUserModule,
    HttpModule,
    NgMediaModule,
    NgIotModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgIotModule,
    HttpModule,
    NgMediaModule,
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
    UserService,
    AuthGuard,
    !environment.production ? { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true } : [],
    IotSvgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (
    private realtime: RealtimeService,
  ) {
  }
}
