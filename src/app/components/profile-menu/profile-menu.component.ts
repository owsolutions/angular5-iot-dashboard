import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  avatar = require('../../../assets/img/avatar.jpg');

  constructor() { }

  ngOnInit() {
  }

}
