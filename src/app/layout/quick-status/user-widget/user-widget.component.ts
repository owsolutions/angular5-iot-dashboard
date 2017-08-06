import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss']
})
export class UserWidgetComponent implements OnInit {

  constructor (private user: UserService) { }

  ngOnInit() {
    console.log(this.user.User);
  }

  get User () {
    return this.user.User;
  }

}
