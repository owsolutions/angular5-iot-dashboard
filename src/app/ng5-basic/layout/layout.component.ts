import { Component, OnInit } from '@angular/core';
import { SidebarControllerService } from '../ngx-sidebar/sidebar-controller.service';
import { RequestsService } from '@app/services/requests.service';
import { UserService } from '@app/services/user.service';
import { ToasterConfig } from 'angular2-toaster';
import { IotRequestsService } from '@app/iot/iot-requests.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isRequesting = false;
  public sideState = true;
  public toastConfig: ToasterConfig = new ToasterConfig({
    animation: 'flyRight',
    positionClass: 'toast-bottom-right'
  });
  constructor(
    public sidebar: SidebarControllerService,
    // private realtime: RealtimeService,
    private requests: IotRequestsService,
    private user: UserService,
  ) {
    this.sidebar.ToggleSidebar.subscribe((e) => {
      if (e === 'hidden') {
        this.sideState = false;
        return;
      } else if ( e === 'show') {
        this.sideState = true;
        return;
      }
      this.sideState = (this.sideState) ? false : true;
    });
  }

  ngOnInit() {
    this.isRequesting = true;
    if (window.innerWidth < 992) {
      this.sideState = false;
    }
    this.requests.getDevices();
    this.requests.getLocations();
    this.requests.getUnconnected();
  }

  sideOff() {
    if (this.sideState) {
      this.sidebar.closeSidebar();
    }
  }

}
