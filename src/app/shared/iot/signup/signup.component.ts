
import { Component } from '@angular/core';
import { RequestsService } from '@shared/core/services/requests.service';
import { Router } from '@angular/router';
import { IUserForm } from '@shared/core/definitions';
import { IResponse } from 'response-type';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public response: IResponse<any> = null;
  public formErrors: Array<any> = [];
  public isRequesting: Boolean = false;
  public form: IUserForm = {
    firstname: '',
    lastname: '',
    password: '',
    password2: '',
    email: '',
  };

  findFieldErrorMessage (fieldName: string) {
    const error = this.formErrors.find(x => x.field === fieldName);
    return error ? error.message : '';
  }

  constructor (
    private requests: RequestsService,
    private router: Router,
  ) {
    this.formErrors = [];
  }

  changeInput (field , value) {
    if (typeof value !== 'string') {
      return value;
    }
    this.form[field] = value;
  }

  async signup () {
    this.response = null;
    this.isRequesting = true;
    try {
      const result = await this.requests.createUser(this.form);
      this.isRequesting = false;
      this.response = result;
      if (result.error && result.error.errors) {
        this.formErrors = result.error.errors;
      }
      if (result.data && result.data.items && result.data.items.length) {
        this.router.navigateByUrl('/signup-success');
      }
    } catch (error) {
      this.isRequesting = false;
      alert('Unexpected error occured.');
    }
  }
}
