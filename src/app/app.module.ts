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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    ChartComponent
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
