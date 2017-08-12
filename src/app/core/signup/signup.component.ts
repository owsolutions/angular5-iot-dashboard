import { IVPCInformation } from '@app/iot/definitions';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from '@app/core/services/requests.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public formErrors: Array<any> = [];
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

  constructor (private requests: RequestsService) {

  }

  changeInput (field , value) {
    this.form[field] = value;
  }

  async signup () {
    const result = await this.requests.createVPC(this.form);
    if (result.error && result.error.errors) {
      this.formErrors = result.error.errors;
      console.log('Errors: ' , this.formErrors);
    }
  }
}
