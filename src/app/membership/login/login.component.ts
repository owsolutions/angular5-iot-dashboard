import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public bodyClass: any = 'login-state';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.document.body.classList.add(this.bodyClass);
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.bodyClass);
  }

  async login() {
    await this.user.loadUser();
    this.router.navigateByUrl('/index');

  }
}
