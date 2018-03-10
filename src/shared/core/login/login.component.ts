import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { UserService } from '@shared/core/services/user.service';
import { Router } from '@angular/router';
import { CommunicateService } from '@shared/core/services/communicate.service';

interface IForm {
  username: string;
  password: string;
  remember: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: IForm = {
    password: '',
    remember: false,
    username: ''
  };
  public bodyClass: any = 'login-state';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private user: UserService,
    private router: Router,
    private communicate: CommunicateService
  ) { }

  ngOnInit() {
    this.document.body.classList.add(this.bodyClass);
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.bodyClass);
  }
  changeInput (field , value) {
    this.form[field] = value;
  }
  async login() {
    if (await this.user.Login(this.form.username, this.form.password)) {
      this.router.navigateByUrl('/index');
    }
  }
}
