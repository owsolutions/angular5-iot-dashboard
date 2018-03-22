import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  public user: User = {
    email: '',
    username: '',
    password: ''
  };
  public message = {
    content: '',
    type: ''
  };
  public passwordVisibilty = false;

  constructor( private _auth: AuthService ) { }

  ngOnInit() {
  }

  signup(e) {
    e.preventDefault();
    if (this.user.email === '' || this.user.username === '' || this.user.password === '' ) {
      this.message = {
        content: 'Please fill all inputs.',
        type: 'text-danger'
      };
      return;
    }
    const register = this._auth.register(this.user);
    this.message = {
      content: register,
      type: 'text-success'
    };
  }

  togglePassword() {
    this.passwordVisibilty = this.passwordVisibilty ? false : true;
  }
}
