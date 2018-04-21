import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  public searchStatus = false;
  constructor() { }

  ngOnInit() {
  }

  ToggleSearch() {
    this.searchStatus = (this.searchStatus) ? false : true;
    console.log(this.searchStatus);
  }
}
