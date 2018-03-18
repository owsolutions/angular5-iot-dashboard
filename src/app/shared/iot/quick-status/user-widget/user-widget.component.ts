import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/core/services/user.service';
@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss']
})
export class UserWidgetComponent implements OnInit {

  constructor (private user: UserService) { }

  ngOnInit() {

  }

  get User () {
    return this.user.User;
  }

}
