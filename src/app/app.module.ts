import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ChartComponent } from './index/chart/chart.component';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { SwitchWidgetsComponent } from './shared/switch-widgets/switch-widgets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesComponent } from './devices/devices.component';
import { QuickStatusComponent } from './master/quick-status/quick-status.component';
import { QuickChartComponent } from './master/quick-status/quick-chart/quick-chart.component';
import { appRoutesGenerator } from './routes';
import { QuickTimeComponent } from './master/quick-status/quick-time/quick-time.component';

declare global {
  interface Window {
    io: any;
    currentSocket: any;
  }
}
const IO = window.io;
const SOCKET: any = window.currentSocket = {};
if (IO) {
    IO.sails.autoConnect = false;
    window.currentSocket = IO.sails.connect('http://localhost:1337' , undefined , true);

    window.currentSocket.on('connect' , function (client) {
      console.log('Client : ' , client);
    });
}

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
    QuickTimeComponent
  ],
  imports: [
    appRoutesGenerator(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
