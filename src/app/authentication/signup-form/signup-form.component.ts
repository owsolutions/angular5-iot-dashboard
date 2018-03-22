import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IResponse } from 'response-type';
import { RequestsService } from '@app/shared/core/services/requests.service';
import { IUserForm, createUserMock } from '../shared';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public response: IResponse<any> = null;
  public user: IUserForm = {
    email: '',
    password: ''
  };
  public passwordVisibilty = false;

  constructor(
    private _auth: AuthService,
    private requests: RequestsService,
  ) { }

  ngOnInit() {
  }

  async signup (e) {
    e.preventDefault();
    const ref = await createUserMock({
      email: this.user.email,
      password: this.user.password
    });
    this.response = ref;
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
}

