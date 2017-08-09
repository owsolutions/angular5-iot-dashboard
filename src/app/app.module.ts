import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChangeDetectorRef } from '@angular/core';

import { appRoutesGenerator } from '@app/routes';
import { appReducersGenerator } from '@app/core/app.reducers';

import { NavigationComponent } from '@app/core/navigation/navigation.component';


import IotModules from '@app/iot/app.module.iot';

import { SettingsComponent } from '@app/core/settings/settings.component';










import { PageHeaderComponent } from '@app/core/page-header/page-header.component';

import { TextInputComponent } from '@app/core/forms/text-input/text-input.component';
import { RadioInputComponent } from '@app/core/forms/radio-input/radio-input.component';

import { SelectInputComponent } from '@app/core/forms/select-input/select-input.component';

import { FormElementsComponent } from '@app/core/form-elements/form-elements.component';
import { UsersComponent } from '@app/core/users/users.component';
import { RolesComponent } from '@app/core/roles/roles.component';
import { UserSingleComponent } from '@app/core/users/user-single/user-single.component';
import { PermissionsService } from '@app/core/services/permissions.service';
import { RequestsService } from '@app/core/services/requests.service';
import { CheckboxInputComponent } from '@app/core/forms/checkbox-input/checkbox-input.component';
import { LoginComponent } from '@app/core/login/login.component';
import { MocksService } from '@app/core/services/mocks.service';
import { ActionsService } from '@app/core/services/actions.service';
import { UserService, AuthGuard } from '@app/core/services/user.service';
import { CommunicateService } from '@app/core/services/communicate.service';
import { LogoutComponent } from '@app/core/users/logout/logout.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    NavigationComponent,
    PageHeaderComponent,
    TextInputComponent,
    RadioInputComponent,
    SelectInputComponent,
    FormElementsComponent,
    UsersComponent,
    RolesComponent,
    UserSingleComponent,
    CheckboxInputComponent,
    LoginComponent,
    LogoutComponent,
    ... IotModules
  ],
  imports: [
    appRoutesGenerator(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    appReducersGenerator()
  ],
  providers: [
    PermissionsService,
    RequestsService,
    MocksService,
    ActionsService,
    UserService,
    CommunicateService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
