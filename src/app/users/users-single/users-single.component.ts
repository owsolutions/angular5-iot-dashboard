import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error, IsSuccessEntity } from '@app/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCommonService } from '@app/users/user-common.service';
import en from '../translations/users.module.en';
import { IResponse } from 'response-type';
import { IUser } from '@app/definitions';
import { UserRequestsService } from '@app/users/user-requests.service';

@Component({
  selector: 'app-users-single',
  templateUrl: './users-single.component.html',
  styleUrls: ['./users-single.component.scss']
})
export class UsersSingleComponent implements OnInit {

  public response: IResponse<IUser> = null;
  public subtitle = en.user_single_new_subtitle;
  public maintitle = en.user_single_new_maintitle;

  public error = error;
  public form = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(
    private requests: UserRequestsService,
    private route: ActivatedRoute,
    private common: UserCommonService,
    private router: Router,
  ) { }

  public IsEditing () {
    return this.form.controls.id.value ? true : false;
  }
  ngOnInit() {
    this.route.params.subscribe(async (data) => {
      if (data && data.id) {
        try {
          const response = await this.requests.GetUser(+data.id);
          if (IsSuccessEntity(response)) {
            const user = response.data.items[0];
            this.form.patchValue(user);
            this.subtitle = en.user_single_edit_subtitle;
            this.maintitle = en.user_single_edit_maintitle;
          }
        } catch (error) {
          // error on getting user.
        }
      }
    });
  }

  public async SubmitForm() {
    try {
      const response = await this.requests.PostUser(this.form.getRawValue());
      this.response = response;
      if (IsSuccessEntity(response)) {
        this.common.successPosting();
        this.router.navigateByUrl('/users');
      } else {
        this.common.failPosting();
      }
    } catch (error) {
      // error
    }
  }

}
