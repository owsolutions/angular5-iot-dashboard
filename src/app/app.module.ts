import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChangeDetectorRef } from '@angular/core';

import { appRoutesGenerator } from '@app/routes';
import { appReducersGenerator } from '@app/app.reducers';

import { AppComponent } from '@app/app.component';
import { IndexComponent } from '@app/index/index.component';
import { ChartComponent } from '@app/index/chart/chart.component';

import { SettingsComponent } from '@app/settings/settings.component';
import { SwitchWidgetsComponent } from '@app/shared/switch-widgets/switch-widgets.component';
import { DevicesComponent } from '@app/devices/devices.component';
import { QuickStatusComponent } from '@app/layout/quick-status/quick-status.component';
import { QuickChartComponent } from '@app/layout/quick-status/quick-chart/quick-chart.component';
import { UserWidgetComponent } from '@app/layout/quick-status/user-widget/user-widget.component';
import { ActivityWidgetComponent } from '@app/activity/activity-widget/activity-widget.component';
import { NavigationComponent } from '@app/shared/navigation/navigation.component';
import { AppInfoComponent } from '@app/layout/app-info/app-info.component';
import { IconWidgetsComponent } from '@app/index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from '@app/index/places/places.component';
import { InputPinComponent } from '@app/shared/input-pin/input-pin.component';
import { OutputPinComponent } from '@app/shared/output-pin/output-pin.component';
import { LocationsComponent } from '@app/locations/locations.component';
import { LargeIconWidgetComponent } from '@app/elements/widgets/large-icon-widget/large-icon-widget.component';
import { MediumIconWidgetComponent } from '@app/elements/widgets/medium-icon-widget/medium-icon-widget.component';
import { LargeValueWidgetComponent } from '@app/elements/widgets/large-value-widget/large-value-widget.component';
import { FullWidgetComponent } from '@app/elements/widgets/full-widget/full-widget.component';
import { ActivityComponent } from '@app/activity/activity.component';
import { ThermostatComponent } from '@app/layout/app-info/thermostat/thermostat.component';
import { ModesComponent } from '@app/layout/app-info/modes/modes.component';
import { ReminderTimelineComponent } from '@app/layout/app-info/reminder-timeline/reminder-timeline.component';
import { PageHeaderComponent } from '@app/shared/page-header/page-header.component';
import { TextInputComponent } from '@app/forms/text-input/text-input.component';
import { RadioInputComponent } from '@app/forms/radio-input/radio-input.component';
import { DeviceSvgComponent } from '@app/shared/device-svg/device-svg.component';
import { WidgetsComponent } from '@app/widgets/widgets.component';
import { SelectInputComponent } from '@app/forms/select-input/select-input.component';
import { HelperBoxComponent } from '@app/shared/helper-box/helper-box.component';
import { LocationRowComponent } from '@app/locations/location-row/location-row.component';
import { OutputPinViewComponent } from '@app/shared/output-pin-view/output-pin-view.component';
import { LocationEditComponent } from '@app/locations/location-edit/location-edit.component';
import { DataTableComponent } from '@app/shared/data-table/data-table.component';
import { FormElementsComponent } from '@app/shared/form-elements/form-elements.component';
import { UsersComponent } from '@app/users/users.component';
import { RolesComponent } from '@app/roles/roles.component';
import { UserSingleComponent } from '@app/users/user-single/user-single.component';
import { PermissionsService } from '@app/services/permissions.service';
import { RequestsService } from '@app/services/requests.service';
import { CheckboxInputComponent } from '@app/forms/checkbox-input/checkbox-input.component';
import { LoginComponent } from '@app/membership/login/login.component';
import { MocksService } from '@app/services/mocks.service';
import { ActionsService } from '@app/services/actions.service';
import { UserService, AuthGuard } from '@app/services/user.service';
import { CommunicateService } from '@app/services/communicate.service';
import { DefaultLayoutComponent } from '@app/default-layout/default-layout.component';
import { LogoutComponent } from '@app/users/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SettingsComponent,
    ChartComponent,
    QuickStatusComponent,
    QuickChartComponent,
    SwitchWidgetsComponent,
    DevicesComponent,
    UserWidgetComponent,
    ActivityWidgetComponent,
    NavigationComponent,
    AppInfoComponent,
    IconWidgetsComponent,
    PlacesComponent,
    InputPinComponent,
    OutputPinComponent,
    LocationsComponent,
    LargeIconWidgetComponent,
    MediumIconWidgetComponent,
    LargeValueWidgetComponent,
    FullWidgetComponent,
    ActivityComponent,
    ThermostatComponent,
    ModesComponent,
    ReminderTimelineComponent,
    PageHeaderComponent,
    TextInputComponent,
    RadioInputComponent,
    DeviceSvgComponent,
    WidgetsComponent,
    SelectInputComponent,
    HelperBoxComponent,
    LocationRowComponent,
    OutputPinViewComponent,
    LocationEditComponent,
    DataTableComponent,
    FormElementsComponent,
    UsersComponent,
    RolesComponent,
    UserSingleComponent,
    CheckboxInputComponent,
    LoginComponent,
    DefaultLayoutComponent,
    LogoutComponent
  ],
  imports: [
    appRoutesGenerator(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    appReducersGenerator()
  ],
  providers: [
    PermissionsService,
    RequestsService,
    MocksService,
    ActionsService,
    UserService,
    CommunicateService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
