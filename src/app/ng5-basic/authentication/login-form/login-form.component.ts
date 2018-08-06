import { Component, OnInit } from '@angular/core';
import { IUserForm } from '../shared';
import { GetNetworkError, error } from '@app/common';
import { Router } from '@angular/router';
import { IResponse } from 'response-type';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@app/services/user.service';
import { environment} from '../../../../environments/environment';
import { FacebookService } from '@app/services/facebook.service';
declare var FB: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public isRequesting = false;
  public url = `${environment.api}/api/user/signin`;
  public facebookUrl = `${environment.api}/api/facebook/auth`;
  public response: IResponse<any> = null;
  public error = error;
  public form: IUserForm = {
    email: '',
    password: ''
  };
  public message = '';
  public passwordVisibilty = false;
  public isLoggedInByFacebook = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private user: UserService,
    private facebook: FacebookService,
  ) { }

  ngOnInit() {
    this.user.Revoke();
    this.facebook.IsLoggedInByFacebook().then((result) => {
      if (result) {
        this.isLoggedInByFacebook = true;
      } else {
        this.isLoggedInByFacebook = false;
      }
    });
  }

  public async login (e) {
    e.preventDefault();
    this.isRequesting = true;
    this.signinHttp(this.form);
  }

  public loginFacebook() {
    FB.login((result: any) => {
      console.log('Hey', result);
    }, { scope: 'public_profile,email' });
  }
  public togglePassword() {
    this.passwordVisibilty = this.passwordVisibilty ? false : true;
  }

  public onSigninSuccess (response = null) {
    this.user.SetUser(response.data.items[0].user);
    this.user.SetToken(response.data.items[0].token);
    this.router.navigateByUrl('/index');
  }

  public continueWithFacebook () {
    this.signinFacebook(this.facebook.GetUserAuthenticationInformation());
  }
  private signinFacebook (data: any) {
    window.scroll(0, 0);
    this.http.post(this.facebookUrl, data).subscribe(
      (response) => {
        this.response = response;
        if (this.response.data && this.response.data.items[0]) {
          this.user.SetToken(this.response.data.items[0].token);
          this.user.SetUser(this.response.data.items[0].user);
          this.router.navigateByUrl('/index');        }
        this.isRequesting = false;
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
  private signinHttp (data: IUserForm) {
    window.scroll(0, 0);
    this.http.post(this.url, data).subscribe(
      (response) => {
        this.response = response;
        if (this.response.data && this.response.data.items[0]) {
          this.onSigninSuccess(response);
        }
        this.isRequesting = false;
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
