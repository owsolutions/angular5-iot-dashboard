import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appReducersGenerator } from './app.reducers';
import { createRoutes  } from './app.routes';
import { NgMediaModule } from 'ng-media';
import { NgIotModule } from 'ng-iot';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RealtimeService } from './shared/core/services/realtime.service';
import { NgxUserModule } from './authentication/authentication.module';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgIotModule,
    NgxUserModule,
    HttpModule,
    NgMediaModule,
    SharedModule,
    NgIotModule,
    createRoutes (),
    appReducersGenerator()
  ],
  providers: [
    RealtimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (
    private realtime: RealtimeService,
  ) {
    console.log('App module built');
  }
}
