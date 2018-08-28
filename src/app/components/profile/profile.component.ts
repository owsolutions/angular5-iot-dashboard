import { Component, OnInit } from '@angular/core';
import { IUser, ISettingsUpdateResponse } from '@app/definitions';
import { IResponse } from 'response-type';
import { Router } from '@angular/router';
import { RequestsService } from '@app/services/requests.service';
import { UserService } from '@app/services/user.service';
import { NotificationService } from '@app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { GlobalizationService } from '@app/ng5-basic/globalization.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isRequesting = false;
  public currentLang = 'en';
  public langs: any[] = [];
  public response: IResponse<ISettingsUpdateResponse> = null;
  public form: IUser = {
    email: null,
    avatar: null,
    firstname: null,
    lastname: null,
    preferences: {
    },
    role: null,
    username: null,
    phone: null
  };
  constructor(
    private router: Router,
    private requests: RequestsService,
    private user: UserService,
    private notification: NotificationService,
    public translate: TranslateService,
    public globalization: GlobalizationService,
  ) {
    this.langs = this.globalization.GetLanguages();
  }

  public ChangeLanguage () {
    const lang = this.form.preferences.language;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem('preferedLanguage', lang);
    this.globalization.setLayoutDirection();
  }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.form = Object.assign(this.form, this.user.User);
  }
  public async SubmitForm () {
    this.isRequesting = true;
    const user = Object.assign({}, this.form);
    try {
      const response: IResponse<ISettingsUpdateResponse> = await this.requests.UpdateUserProfile(user);
      if (response.data && response.data.items && response.data.items[0]) {
        this.user.SetUser(response.data.items[0].user);
        this.notification.InvokeProfileUpdate();
      }
      this.response = response;
    } catch (error) {
      this.response = error;
    }
    this.isRequesting = false;
  }

}
