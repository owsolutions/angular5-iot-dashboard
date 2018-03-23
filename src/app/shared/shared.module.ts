import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SettingsComponent } from './core/settings/settings.component';
import { DataTableComponent } from './core/data-table/data-table.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { TextInputComponent } from './core/forms/text-input/text-input.component';
import { RadioInputComponent } from './core/forms/radio-input/radio-input.component';
import { SelectInputComponent } from './core/forms/select-input/select-input.component';
import { FormElementsComponent } from './core/form-elements/form-elements.component';
import { RolesComponent } from './core/roles/roles.component';
import { PermissionsService } from './core/services/permissions.service';
import { RequestsService } from './core/services/requests.service';
import { CheckboxInputComponent } from './core/forms/checkbox-input/checkbox-input.component';
import { ActionsService } from './core/services/actions.service';
import { UserService, AuthGuard } from './core/services/user.service';
import { DevicesComponent } from './core/devices/devices.component';
import { ActivityWidgetComponent } from './core/activity/activity-widget/activity-widget.component';
import { LocationsComponent } from './core/locations/locations.component';
import { ActivityComponent } from './core/activity/activity.component';
import { LocationRowComponent } from './core/locations/location-row/location-row.component';
import { LocationEditComponent } from './core/locations/location-edit/location-edit.component';
import { OutputPinViewComponent } from './core/shared/output-pin-view/output-pin-view.component';
import { SwitchWidgetsComponent } from './core/shared/switch-widgets/switch-widgets.component';
import { UnConnectedSourceComponent } from './core/shared/unconnected-source/unconnected-source.component';
import { IconWidgetsComponent } from './core/index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from './core/index/places/places.component';
import { IndexComponent } from './core/index/index.component';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { QuickStatusComponent } from './core/quick-status/quick-status.component';
import { UserWidgetComponent } from './core/quick-status/user-widget/user-widget.component';
import { AppInfoComponent } from './core/app-info/app-info.component';
import { ModesComponent } from './core/app-info/modes/modes.component';
import { NgMediaModule } from 'ng-media';
import { NgIotModule } from 'ng-iot';
import { DropFileComponent } from './core/drop-file/drop-file.component';
import { LoadingComponent } from './core/loading/loading.component';
import { NavigationComponent } from '@shared/core/navigation/navigation.component';
import { SidebarWidgetComponent } from '@shared/core/sidebar-widget/sidebar-widget.component';
import { IotSvgService } from './iot-svg/iot-svg.service';
import { DeviceSingleComponent } from 'app/components/device-single/device-single.component';
import { DocsComponent } from './docs/docs.component';
import { DocsApiWorkaroundComponent } from './docs/docs-api-workaround/docs-api-workaround.component';
import { DeviceGeneralInformationComponent } from 'app/components/device-general-information/device-general-information.component';
import { DeviceCustomizationComponent } from 'app/components/device-customization/device-customization.component';
import { RealtimeService } from '../shared/core/services/realtime.service';
import { StatisticsComponent } from './statistics/statistics.component';
import { environment } from '../../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from '@app/services/mock.interceptor';
import { MockService } from '@app/shared/core/services/mocks.service';

@NgModule({
  declarations: [
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
    QuickStatusComponent,
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
    HttpModule,
    NgMediaModule,
    RouterModule
  ],
  providers: [
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
})
export class SharedModule { }
