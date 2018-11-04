import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { IUserForm, LoginResponse } from '../shared';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@services/user.service';
import { Router } from '@angular/router';
import { GetNetworkError, error, GetUrl } from '@app/common';
import { NotificationService } from '@app/services/notification.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public isRequesting = false;
  public response: IResponse<any> = null;
  public form: IUserForm = {
    email: '',
    password: ''
  };
  public passwordVisibilty = false;
  public error = error;
  public signupUrl = GetUrl('user/signup');
  constructor(
    private http: HttpClient,
    private user: UserService,
    private router: Router,
    private notification: NotificationService,
  ) { }
  ngOnInit() {
  }
  async signup (e) {
    e.preventDefault();
    this.isRequesting = true;
    this.signupHttp(this.form);
  }
  togglePassword() {
    this.passwordVisibilty = this.passwordVisibilty ? false : true;
  }

  public onSignupSuccess (response = null) {

  }
  private signupHttp (data: IUserForm) {
    window.scroll(0, 0);
    this.http.post(this.signupUrl, data).subscribe(
      (response: IResponse<LoginResponse>) => {
        this.response = response;
        this.isRequesting = false;
        if (this.response.data && this.response.data.items[0]) {
          this.user.SetUser(this.response.data.items[0].user);
          this.user.SetToken(this.response.data.items[0].token);
          this.router.navigateByUrl('/index');
          this.notification.InvokeUserSignup();
        }
        this.onSignupSuccess(response);
      },
      (response) => {
        this.isRequesting = false;
        if (response.name === 'HttpErrorResponse') {
          this.response = GetNetworkError();
          return false;
        }
        this.response = response;
      }
    );
  }
}
