import { BrowserModule } from '@angular/platform-browser';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressLineComponent } from './progress-line/progress-line.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreService } from './core.service';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginFormComponent,
    SignupFormComponent,
    ProgressLineComponent
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
    CoreService
  ]

})
export class NgxUserModule {

}
