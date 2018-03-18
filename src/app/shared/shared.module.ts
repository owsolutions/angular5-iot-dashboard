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
import { UsersComponent } from './core/users/users.component';
import { RolesComponent } from './core/roles/roles.component';
import { UserSingleComponent } from './core/users/user-single/user-single.component';
import { LoginComponent } from './core/login/login.component';
import { PermissionsService } from './core/services/permissions.service';
import { RequestsService } from './core/services/requests.service';
import { CheckboxInputComponent } from './core/forms/checkbox-input/checkbox-input.component';
import { MocksService } from './core/services/mocks.service';
import { ActionsService } from './core/services/actions.service';
import { UserService, AuthGuard } from './core/services/user.service';
import { CommunicateService } from './core/services/communicate.service';
import { SignupComponent } from './iot/signup/signup.component';
import { SignupSuccessComponent } from './iot/signup/signup-success/signup-success.component';
import { DevicesComponent } from './iot/devices/devices.component';
import { ActivityWidgetComponent } from './iot/activity/activity-widget/activity-widget.component';
import { LocationsComponent } from './iot/locations/locations.component';
import { ActivityComponent } from './iot/activity/activity.component';
import { LocationRowComponent } from './iot/locations/location-row/location-row.component';
import { LocationEditComponent } from './iot/locations/location-edit/location-edit.component';
import { OutputPinViewComponent } from './iot/shared/output-pin-view/output-pin-view.component';
import { SwitchWidgetsComponent } from './iot/shared/switch-widgets/switch-widgets.component';
import { IconWidgetsComponent } from './iot/index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from './iot/index/places/places.component';
import { IndexComponent } from './iot/index/index.component';
import { DefaultLayoutComponent } from './iot/default-layout/default-layout.component';
import { QuickStatusComponent } from './iot/quick-status/quick-status.component';
import { UserWidgetComponent } from './iot/quick-status/user-widget/user-widget.component';
import { AppInfoComponent } from './iot/app-info/app-info.component';
import { ModesComponent } from './iot/app-info/modes/modes.component';
import { NgMediaModule } from 'ng-media';
import { NgIotModule } from 'ng-iot';
import { DropFileComponent } from './core/drop-file/drop-file.component';
import { LoadingComponent } from './core/loading/loading.component';
import { InputComponent } from './forms/input/input.component';
import { FormHolderComponent } from './forms/form-holder/form-holder.component';
import { LogoutComponent } from './core/users/logout/logout.component';
import { NavigationComponent } from '@shared/core/navigation/navigation.component';
import { SidebarWidgetComponent } from '@shared/iot/sidebar-widget/sidebar-widget.component';
import { IotSvgService } from './iot-svg/iot-svg.service';
import { DeviceSingleComponent } from 'app/components/device-single/device-single.component';
import { DocsComponent } from './docs/docs.component';
import { DocsApiWorkaroundComponent } from './docs/docs-api-workaround/docs-api-workaround.component';
import { DeviceGeneralInformationComponent } from 'app/components/device-general-information/device-general-information.component';
import { DeviceCustomizationComponent } from 'app/components/device-customization/device-customization.component';
import { RealtimeService } from '../shared/core/services/realtime.service';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    SettingsComponent,
    DataTableComponent,
    LogoutComponent,
    PageHeaderComponent,
    TextInputComponent,
    DocsApiWorkaroundComponent,
    DeviceSingleComponent,
    RadioInputComponent,
    SelectInputComponent,
    FormElementsComponent,
    SidebarWidgetComponent,
    UsersComponent,
    RolesComponent,
    UserSingleComponent,
    CheckboxInputComponent,
    LoginComponent,
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
    SignupComponent,
    SignupSuccessComponent,
    DropFileComponent,
    LoadingComponent,
    InputComponent,
    FormHolderComponent,
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
    MocksService,
    ActionsService,
    UserService,
    CommunicateService,
    AuthGuard,
    IotSvgService
  ],
})
export class SharedModule { }
