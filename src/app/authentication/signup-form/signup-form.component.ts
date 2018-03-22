import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { IUserForm, createUserMock, GetNetworkError } from '../shared';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public isRequesting = false;
  public response: IResponse<any> = null;
  public user: IUserForm = {
    email: '',
    password: ''
  };
  public passwordVisibilty = false;

  public signupUrl = 'http://localhost:1337';
  constructor(
    private http: HttpClient
  ) { }


  ngOnInit() {
  }


  async signup (e) {
    e.preventDefault();
    this.isRequesting = true;

    return this.signupHttp(this.user);

    // setTimeout(async () => {
    //   const ref = await createUserMock({
    //     email: this.user.email,
    //     password: this.user.password
    //   });
    //   this.isRequesting = false;
    //   this.response = ref;
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

  public onSignupSuccess (response = null) {

  }
  private signupHttp (data: IUserForm) {
    this.http.post(this.signupUrl, data).subscribe(
      (response) => {
        this.response = response;
        this.isRequesting = false;
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
