import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ...IotModules.imports,
    ...CoreModule.imports
  ],
  providers: [
    ... CoreModule.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
