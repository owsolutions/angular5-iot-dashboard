import { IVPCInformation } from '@app/iot/definitions';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from '@app/core/services/requests.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public form: IVPCInformation = {
    administrator: '',
    administratorPassword: '',
    vpcname: '',
    vpcregion: ''
  };

  constructor (private requests: RequestsService) {
    
  }

  changeInput (field , value) {
    this.form[field] = value;
  }
  signup () {
    this.requests.createVPC(this.form);
  }
}
