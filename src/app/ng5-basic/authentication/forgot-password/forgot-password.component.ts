import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'response-type';
import { GetNetworkError } from '@app/common';
import { RequestsService } from '@app/services/requests.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public forgetUrl = 'http://localhost:1337/forgot';
  public email = '';
  public response: IResponse<any> = null;
  public isRequesting = false;

  constructor(
    private http: HttpClient,
    private requests: RequestsService,
  ) { }

  ngOnInit() {

  }

  requestPassword(e) {
    e.preventDefault();
    this.forgetPasswordHttp ({email: this.email});
  }

  public error (fieldName: string) {
    if ( ! this.response || ! this.response.error || !this.response.error.errors) {
      return '';
    }
    const error = this.response.error.errors.find(x => x.location === fieldName);
    return error ? error.message : '';
  }
  public async forgetPasswordHttp (data: { email: string}) {
    try {
      const response = await this.requests.RequestPasswordReset(data.email);
      this.response = response;
      this.isRequesting = false;
      this.onResetSuccess(response);
    } catch (response) {
      this.isRequesting = false;
      if (response.name === 'HttpErrorResponse') {
        this.response = GetNetworkError();
        return false;
      }
      this.response = response;
    }
  }

  public onResetSuccess (response = null) {

  }
}
