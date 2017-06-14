import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ChartComponent } from './index/chart/chart.component';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { SwitchWidgetsComponent } from './shared/switch-widgets/switch-widgets.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DevicesComponent } from './devices/devices.component';

declare global {
  
  interface Window {
    io: any,
    currentSocket: any
  }

}
let IO = window.io;
let SOCKET: any = window.currentSocket = {};
if (IO) {
    IO.sails.autoConnect = false;
    window.currentSocket = IO.sails.connect('http://localhost:1337' , undefined , true);

    window.currentSocket.on('connect' , function (client) {
      console.log('Client : ' , client);
    });

}

const appRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    data: { title: 'Index page' }
  },
  {
    path: 'summary',
    component: SummaryComponent,
    data: {}
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {}
  },
  {
    path: 'devices',
    component: DevicesComponent,
    data: {}
  },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];



import {
  MdButtonModule,
  MdCheckboxModule,
  MdSidenav,
  MdToolbarModule,
  MdSidenavContainer,
  MdSidenavModule,
  MdNavListCssMatStyler,
  MdListItem
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SummaryComponent,
    SettingsComponent,
    ChartComponent,
    SwitchWidgetsComponent,
    DevicesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
