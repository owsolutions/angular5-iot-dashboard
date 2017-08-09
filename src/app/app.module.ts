import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChangeDetectorRef } from '@angular/core';

import { appRoutesGenerator } from '@app/routes';
import { appReducersGenerator } from '@app/core/app.reducers';

import { AppComponent } from '@app/app.component';
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
import { PermissionsService } from '@app/services/permissions.service';
import { RequestsService } from '@app/services/requests.service';
import { CheckboxInputComponent } from '@app/core/forms/checkbox-input/checkbox-input.component';
import { LoginComponent } from '@app/core/login/login.component';
import { MocksService } from '@app/services/mocks.service';
import { ActionsService } from '@app/services/actions.service';
import { UserService, AuthGuard } from '@app/services/user.service';
import { CommunicateService } from '@app/services/communicate.service';
import { LogoutComponent } from '@app/core/users/logout/logout.component';

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
