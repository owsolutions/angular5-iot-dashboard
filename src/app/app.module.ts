import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutesGenerator } from './routes';
import { appReducersGenerator } from './app.reducers';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ChartComponent } from './index/chart/chart.component';
import { ChangeDetectorRef } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { SwitchWidgetsComponent } from './shared/switch-widgets/switch-widgets.component';
import { DevicesComponent } from './devices/devices.component';
import { QuickStatusComponent } from './layout/quick-status/quick-status.component';
import { QuickChartComponent } from './layout/quick-status/quick-chart/quick-chart.component';
import { QuickTimeComponent } from './layout/quick-status/quick-time/quick-time.component';
import { ActivityWidgetComponent } from './activity/activity-widget/activity-widget.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppInfoComponent } from './layout/app-info/app-info.component';
import { IconWidgetsComponent } from './index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from './index/places/places.component';
import { InputPinComponent } from './shared/input-pin/input-pin.component';
import { OutputPinComponent } from './shared/output-pin/output-pin.component';
import { LocationsComponent } from './locations/locations.component';
import { LargeIconWidgetComponent } from './elements/widgets/large-icon-widget/large-icon-widget.component';
import { MediumIconWidgetComponent } from './elements/widgets/medium-icon-widget/medium-icon-widget.component';
import { LargeValueWidgetComponent } from './elements/widgets/large-value-widget/large-value-widget.component';
import { FullWidgetComponent } from './elements/widgets/full-widget/full-widget.component';
import { ActivityComponent } from './activity/activity.component';
import { ThermostatComponent } from './layout/app-info/thermostat/thermostat.component';
import { ModesComponent } from './layout/app-info/modes/modes.component';
import { ReminderTimelineComponent } from './layout/app-info/reminder-timeline/reminder-timeline.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { TextInputComponent } from './forms/text-input/text-input.component';
import { RadioInputComponent } from './forms/radio-input/radio-input.component';
import { DeviceSvgComponent } from './shared/device-svg/device-svg.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SelectInputComponent } from './forms/select-input/select-input.component';
import { HelperBoxComponent } from './shared/helper-box/helper-box.component';
import { LocationRowComponent } from './locations/location-row/location-row.component';
import { OutputPinViewComponent } from './shared/output-pin-view/output-pin-view.component';
import { LocationEditComponent } from './locations/location-edit/location-edit.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { FormElementsComponent } from './shared/form-elements/form-elements.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SummaryComponent,
    SettingsComponent,
    ChartComponent,
    QuickStatusComponent,
    QuickChartComponent,
    SwitchWidgetsComponent,
    DevicesComponent,
    QuickTimeComponent,
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
    UsersComponent
  ],
  imports: [
    appRoutesGenerator(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    appReducersGenerator()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
