import { BrowserModule } from '@angular/platform-browser';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressLineComponent } from './progress-line/progress-line.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreService } from './core.service';
import { MaterialInputDirective } from './material-input.directive';
import { MockInterceptor} from '@app/services/mock.interceptor';
import { environment } from '../../../environments/environment';
import { MockService } from '@app/services/mocks.service';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginFormComponent,
    SignupFormComponent,
    ProgressLineComponent,
    MaterialInputDirective,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'signup',
        component: SignupFormComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }
    ], {
      useHash: true
    })

  ],
  exports: [
    ForgotPasswordComponent,
    LoginFormComponent,
    SignupFormComponent,
  ],
  providers: [
    CoreService,
    MockService,
    !environment.production ? { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true } : [],


  ]

})
export class NgxUserModule {

}
