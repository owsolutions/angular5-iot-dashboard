import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { IUserForm } from '../shared';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from '@services/user.service';
import { Router } from '@angular/router';
import { GetNetworkError } from '@app/common';
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

  public signupUrl = environment.api + '/api/user/signup';
  constructor(
    private http: HttpClient,
    private user: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  async signup (e) {
    e.preventDefault();
    this.isRequesting = true;

    this.signupHttp(this.form);

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

  public onSignupSuccess (response = null) {

  }
  private signupHttp (data: IUserForm) {
    this.http.post(this.signupUrl, data).subscribe(
      (response) => {
        this.response = response;
        this.isRequesting = false;
        if (this.response.data && this.response.data.items[0]) {
          this.user.SetUser(this.response.data.items[0].user);
          this.router.navigateByUrl('/index');
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
