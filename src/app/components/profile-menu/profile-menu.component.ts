import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user.service';
declare var require: any;

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  public display = '';
  constructor(
    private user: UserService,
  ) { }

  ngOnInit() {
    this.display = this.user.User.email;
  }

  public name () {
    const user = this.user.User;
    if (user.firstname && user.lastname) {
      return `${user.firstname.substr(0, 1)}${user.lastname.substr(0, 1)}`;
    }
    if (user.firstname) {
      return `${user.firstname.substr(0, 2)}`;
    }
    if (user.lastname) {
      return `${user.lastname.substr(0, 2)}`;
    }
    return user.email.substr(0, 2);
  }

}
