import { Component, OnInit } from '@angular/core';
import { IUserForm, GetNetworkError } from '../shared';
import { Router } from '@angular/router';
import { IResponse } from 'response-type';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@app/shared/core/services/user.service';
import { environment} from '../../../environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public isRequesting = false;
  public signinUrl = `${environment.api}/api/user/signin`;
  public response: IResponse<any> = null;
  public form: IUserForm = {
    email: '',
    password: ''
  };
  public message = '';
  public passwordVisibilty = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private user: UserService,
  ) { }

  ngOnInit() {
  }

  public async login (e) {
    e.preventDefault();
    this.isRequesting = true;
    this.signinHttp(this.form);
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
        if (this.response.data && this.response.data.items[0]) {
          this.user.SetUser(this.response.data.items[0].user);
          this.router.navigateByUrl('/index');
        }
        this.isRequesting = false;
        this.onSigninSuccess(response);
      },
      (response) => {
        console.log('response: ', response);
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
