/**
 * This is the core module; Since each app is a module for itself,
 * you can configure which app to be loaded.
 * By default, CoreModule is included, so you can use it's services and components
 * There is a Basic Module also, if you want to write your own app,
 * you can continue on that, instead of Iot App.
 *
 * Iot functionality, data flow and components, routing and simply speaking everything
 * related to that is independent of project. Just remove the iot folder, if you don't want to use it
 * at all, and use this dashboard for other purpose.
 */
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import CoreModule from '@app/core/app.module.core';
import MODULE from '@app/iot/app.module.iot';

/**
 * You can uncomment this line, and comment iot module
 * so now you can extend your own application!
 * make sure you are importing CoreModule, because it has user, and dataflow
 */

// import MODULE from '@app/basic/app.module.basic';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    ... CoreModule.declarations,
    ... MODULE.declarations,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ...MODULE.imports,
    ...CoreModule.imports
  ],
  providers: [
    ... CoreModule.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
