import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appReducersGenerator } from '@app/core/app.reducers';
import { NavigationComponent } from '@app/core/navigation/navigation.component';
import { SettingsComponent } from '@app/core/settings/settings.component';
import { DataTableComponent } from '@app/core/data-table/data-table.component';
import { PageHeaderComponent } from '@app/core/page-header/page-header.component';
import { TextInputComponent } from '@app/core/forms/text-input/text-input.component';
import { RadioInputComponent } from '@app/core/forms/radio-input/radio-input.component';
import { SelectInputComponent } from '@app/core/forms/select-input/select-input.component';
import { FormElementsComponent } from '@app/core/form-elements/form-elements.component';
import { UsersComponent } from '@app/core/users/users.component';
import { RolesComponent } from '@app/core/roles/roles.component';
import { UserSingleComponent } from '@app/core/users/user-single/user-single.component';
import { LogoutComponent } from '@app/core/users/logout/logout.component';
import { LoginComponent } from '@app/core/login/login.component';

import { PermissionsService } from '@app/core/services/permissions.service';
import { RequestsService } from '@app/core/services/requests.service';
import { CheckboxInputComponent } from '@app/core/forms/checkbox-input/checkbox-input.component';
import { MocksService } from '@app/core/services/mocks.service';
import { ActionsService } from '@app/core/services/actions.service';
import { UserService, AuthGuard } from '@app/core/services/user.service';
import { CommunicateService } from '@app/core/services/communicate.service';


// Iot related
import { DevicesComponent } from '@app/iot/devices/devices.component';
import { WidgetsComponent } from '@app/iot/widgets/widgets.component';
import { ActivityWidgetComponent } from '@app/iot/activity/activity-widget/activity-widget.component';
import { LocationsComponent } from '@app/iot/locations/locations.component';
import { ActivityComponent } from '@app/iot/activity/activity.component';
import { LocationRowComponent } from '@app/iot/locations/location-row/location-row.component';
import { LocationEditComponent } from '@app/iot/locations/location-edit/location-edit.component';
import { DeviceSvgComponent } from '@app/iot/shared/device-svg/device-svg.component';
import { HelperBoxComponent } from '@app/iot/shared/helper-box/helper-box.component';
import { OutputPinViewComponent } from '@app/iot/shared/output-pin-view/output-pin-view.component';
import { SwitchWidgetsComponent } from '@app/iot/shared/switch-widgets/switch-widgets.component';
import { InputPinComponent } from '@app/iot/shared/input-pin/input-pin.component';
import { OutputPinComponent } from '@app/iot/shared/output-pin/output-pin.component';
import { IconWidgetsComponent } from '@app/iot/index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from '@app/iot/index/places/places.component';
import { IndexComponent } from '@app/iot/index/index.component';
import { ChartComponent } from '@app/iot/index/chart/chart.component';
import { DefaultLayoutComponent } from '@app/iot/default-layout/default-layout.component';
import { LargeIconWidgetComponent } from '@app/iot/widgets/large-icon-widget/large-icon-widget.component';
import { MediumIconWidgetComponent } from '@app/iot/widgets/medium-icon-widget/medium-icon-widget.component';
import { LargeValueWidgetComponent } from '@app/iot/widgets/large-value-widget/large-value-widget.component';
import { FullWidgetComponent } from '@app/iot/widgets/full-widget/full-widget.component';
import { QuickStatusComponent } from '@app/iot/quick-status/quick-status.component';
import { QuickChartComponent } from '@app/iot/quick-status/quick-chart/quick-chart.component';
import { UserWidgetComponent } from '@app/iot/quick-status/user-widget/user-widget.component';
import { AppInfoComponent } from '@app/iot/app-info/app-info.component';
import { ThermostatComponent } from '@app/iot/app-info/thermostat/thermostat.component';
import { ModesComponent } from '@app/iot/app-info/modes/modes.component';
import { ReminderTimelineComponent } from '@app/iot/app-info/reminder-timeline/reminder-timeline.component';
import { appRoutesGenerator } from '@app/app.routes.iot';
import { DropFileComponent } from './core/drop-file/drop-file.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SettingsComponent,
    DataTableComponent,
    PageHeaderComponent,
    TextInputComponent,
    RadioInputComponent,
    SelectInputComponent,
    FormElementsComponent,
    UsersComponent,
    RolesComponent,
    UserSingleComponent,
    CheckboxInputComponent,
    LoginComponent,
    DevicesComponent,
    WidgetsComponent,
    ActivityWidgetComponent,
    LocationsComponent,
    ActivityComponent,
    LocationRowComponent,
    LocationEditComponent,
    DeviceSvgComponent,
    HelperBoxComponent,
    OutputPinViewComponent,
    SwitchWidgetsComponent,
    InputPinComponent,
    OutputPinComponent,
    IconWidgetsComponent,
    PlacesComponent,
    IndexComponent,
    ChartComponent,
    DefaultLayoutComponent,
    LargeIconWidgetComponent,
    MediumIconWidgetComponent,
    LargeValueWidgetComponent,
    FullWidgetComponent,
    QuickStatusComponent,
    QuickChartComponent,
    UserWidgetComponent,
    AppInfoComponent,
    ThermostatComponent,
    ModesComponent,
    ReminderTimelineComponent,
    DropFileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutesGenerator(),
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
