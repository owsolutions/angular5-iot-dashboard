import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, INotification } from '@app/definitions';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  public notificationStatus = false;
  public searchStatus = false;
  public notifications: Array<INotification>;
  public notificationsBackup: Array<INotification>;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.notificationStatus) {
      const path = event.path || (event.composedPath && event.composedPath()) || this.composedPath(event.target);
      const isTarget = path.filter(x => x.id === 'notification-list' || x.id === 'notification-button');
      if (isTarget.length === 0) {
        this.ToggleNotification();
      }
    }
  }
  constructor(
    private store: Store<AppState>,

  ) {}

  ngOnInit() {
    this.store.select('notifications').subscribe(collection => {
      this.notifications = collection;
      this.notificationsBackup = collection;
    });
  }

  ToggleNotification() {
    this.notificationStatus = (this.notificationStatus) ? false : true;
  }

  ToggleSearch() {
    this.searchStatus = (this.searchStatus) ? false : true;
  }

  filterNotifications(value) {
    const filtered = this.notificationsBackup.filter(x => x.message.indexOf(value) > -1 || x.title.indexOf(value) > -1);
    this.notifications = (filtered.length) ? filtered : this.notificationsBackup;
  }

  composedPath (el) {
    const path = [];
    while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
            path.push(document);
            path.push(window);
            return path;
       }
       el = el.parentElement;
    }
  }
}
