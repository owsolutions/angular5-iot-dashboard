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

  public name (name: string) {
    return this.display.substr(0, 2);
  }

}
