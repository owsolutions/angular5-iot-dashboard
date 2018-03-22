import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public email = '';
  public message = {
    content: '',
    type: ''
  };
  constructor() { }

  ngOnInit() {
  }

  requestPassword(e) {
    e.preventDefault();
    if ( this.email === '' ) {
      this.message = {
        content: 'Please fill all inputs.',
        type: 'text-danger'
      };
      return;
    }
    this.message = {
      content: 'We sent the reset password email, Please check you inbox.',
      type: 'text-success'
    };
  }

}
