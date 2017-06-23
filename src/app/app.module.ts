import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ChartComponent } from './index/chart/chart.component';
import { ChangeDetectorRef } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { SwitchWidgetsComponent } from './shared/switch-widgets/switch-widgets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesComponent } from './devices/devices.component';
import { QuickStatusComponent } from './master/quick-status/quick-status.component';
import { QuickChartComponent } from './master/quick-status/quick-chart/quick-chart.component';
import { appRoutesGenerator } from './routes';
import { QuickTimeComponent } from './master/quick-status/quick-time/quick-time.component';
import { ActivityWidgetComponent } from './activity/activity-widget/activity-widget.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppInfoComponent } from './layout/app-info/app-info.component';
import { ContentBoxComponent } from './layout/content-box/content-box.component';
import { IconWidgetsComponent } from './index/icon-widgets/icon-widgets.component';
import { PlacesComponent } from './index/places/places.component';
import { StoreModule } from '@ngrx/store';
import { devicesReducer } from './devices/devices.reducer';
import { InputPinComponent } from './shared/input-pin/input-pin.component';
import { OutputPinComponent } from './shared/output-pin/output-pin.component';
import { LocationsComponent } from './locations/locations.component';

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
    ContentBoxComponent,
    IconWidgetsComponent,
    PlacesComponent,
    InputPinComponent,
    OutputPinComponent,
    LocationsComponent
  ],
  imports: [
    appRoutesGenerator(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ devices: devicesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
