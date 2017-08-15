import { IVPCInformation } from '@app/iot/definitions';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from '@app/core/services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public formErrors: Array<any> = [];
  public isRequesting: Boolean = false;
  public form: IVPCInformation = {
    administrator: '',
    administratorPassword: '',
    vpcname: '',
    vpcregion: ''
  };

  findFieldErrorMessage (fieldName: string) {
    const error = this.formErrors.find(x => x.field === fieldName);
    return error ? error.message : '';
  }

  constructor (private requests: RequestsService, private router: Router) {
    this.formErrors = [];
  }

  changeInput (field , value) {
    this.form[field] = value;
  }



  async signup () {
    this.isRequesting = true;
    try {
      const result = await this.requests.createVPC(this.form);
      this.isRequesting = false;
      if (result.error && result.error.errors) {
        this.formErrors = result.error.errors;
        console.log('Errors: ' , this.formErrors);
      }
      if (result.data && result.data.items && result.data.items.length) {
        console.log('Success: ' , result.data.items[0]);
        this.router.navigateByUrl('/signup-success');
      }
    } catch (error) {
      this.isRequesting = false;
      alert('Unexpected error occured.');
    }
  }
}
