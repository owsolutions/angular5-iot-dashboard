import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public user: User = {
    email: '',
    username: '',
    password: ''
  };
  public message = '';
  public passwordVisibilty = false;

  constructor(
    private _auth: AuthService,
  ) { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault();
    if (this.user.email === '' || this.user.username === '' || this.user.password === '' ) {
      this.message = 'Please fill all inputs.';
      return;
    }
    const login = this._auth.login(this.user);
    this.message = login;
  }

  togglePassword() {
    this.passwordVisibilty = this.passwordVisibilty ? false : true;
  }
}
