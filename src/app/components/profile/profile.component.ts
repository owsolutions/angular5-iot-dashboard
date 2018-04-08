import { Component, OnInit } from '@angular/core';
import { IUser } from '@app/definitions';
import { IResponse } from 'response-type';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { RequestsService } from '@app/services/requests.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isRequesting = false;
  public response: IResponse<IUser> = null;
  public form: IUser = {
    email: null,
    avatar: null,
    firstname: null,
    lastname: null,
    role: null,
    username: null,
    phone: null
  };
  constructor(
    private toasterService: ToasterService,
    private router: Router,
    private requests: RequestsService,
    private user: UserService,
  ) { }

  ngOnInit() {
    this.form = Object.assign({}, this.user.User);
  }
  public async SubmitForm () {
    this.isRequesting = true;
    const user = Object.assign({}, this.form);
    try {
      const response: IResponse<IUser> = await this.requests.UpdateUserProfile(user);
      if (response.data && response.data.items && response.data.items[0]) {
        const $user = response.data.items[0];
        this.user.SetUser($user);
        this.toasterService.pop('success', 'Profile updated',
          'Your profile changes has been saved. Some of the changes may affect in the next signin.'); ;
      }
      this.response = response;
    } catch (error) {
      this.response = error;
    }
    this.isRequesting = false;
  }


}
