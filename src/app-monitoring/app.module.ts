import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appReducersGenerator } from '@app/app.reducers';
import { createRoutes  } from './app.routes';
import { NgMediaModule } from 'ng-media';
import { NgIotModule } from 'ng-iot';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgIotModule,
    HttpModule,
    NgMediaModule,
    SharedModule,
    NgIotModule,
    createRoutes (),
    appReducersGenerator()
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
