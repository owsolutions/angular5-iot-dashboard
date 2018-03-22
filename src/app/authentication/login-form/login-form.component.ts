import { Component, OnInit } from '@angular/core';
import { IUserForm, userLoginMock, GetNetworkError } from '../shared';
import { Router } from '@angular/router';
import { IResponse } from 'response-type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public isRequesting = false;
  public signinUrl = 'http://localhost:1337/login';
  public response: IResponse<any> = null;
  public user: IUserForm = {
    email: '',
    password: ''
  };
  public message = '';
  public passwordVisibilty = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public async login (e) {
    e.preventDefault();
    this.isRequesting = true;

    this.signinHttp(this.user);
    // setTimeout(async () => {
    //   const ref = await userLoginMock({
    //     email: this.user.email,
    //     password: this.user.password
    //   });
    //   this.response = ref;
    //   this.isRequesting = false;
    // }, 300);
  }
  public error (fieldName: string) {
    if ( ! this.response || ! this.response.error || !this.response.error.errors) {
      return '';
    }
    const error = this.response.error.errors.find(x => x.location === fieldName);
    return error ? error.message : '';
  }
  togglePassword() {
    this.passwordVisibilty = this.passwordVisibilty ? false : true;
  }

  public onSigninSuccess (response = null) {

  }
  private signinHttp (data: IUserForm) {
    this.http.post(this.signinUrl, data).subscribe(
      (response) => {
        this.response = response;
        this.isRequesting = false;
        this.onSigninSuccess(response);
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
