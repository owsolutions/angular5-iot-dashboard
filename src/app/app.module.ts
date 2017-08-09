import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChangeDetectorRef } from '@angular/core';

import CoreModule from '@app/core/app.module.core';
import IotModules from '@app/iot/app.module.iot';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    ... CoreModule.declarations,
    ... IotModules.declarations
  ],
  imports: [
    ...IotModules.imports,
    ...CoreModule.imports,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ... CoreModule.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
