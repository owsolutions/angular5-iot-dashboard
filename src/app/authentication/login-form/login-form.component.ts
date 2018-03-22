import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUserForm, userLoginMock} from '../shared';
import { Router } from '@angular/router';
import { IResponse } from 'response-type';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public response: IResponse<any> = null;
  public user: IUserForm = {
    email: '',
    password: ''
  };
  public message = '';
  public passwordVisibilty = false;

  constructor(
    private _auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public async login (e) {
    e.preventDefault();
    console.log('hey');
    // this.router.navigateByUrl('/index');
    const ref = await userLoginMock({
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
