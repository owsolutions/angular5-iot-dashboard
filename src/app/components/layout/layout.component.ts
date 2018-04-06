import { Component, OnInit } from '@angular/core';
import { SidebarControllerService } from '../ngx-sidebar/sidebar-controller.service';
import { RealtimeService } from '@app/services/realtime.service';
import { RequestsService } from '@app/services/requests.service';
import { UserService } from '@app/services/user.service';
import { environment } from 'environments/environment';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public sideState = true;
  public toastConfig: ToasterConfig = new ToasterConfig({
    animation: 'flyRight',
    positionClass: 'toast-bottom-right'
  });
  constructor(
    public _sdieController: SidebarControllerService,
    private realtime: RealtimeService,
    private requests: RequestsService,
    private user: UserService,
  ) {
    this._sdieController.ToggleSidebar.subscribe((e) => {
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
    if (window.innerWidth < 992) {
      this.sideState = false;
    }
    this.requests.getDevices();
    this.requests.getLocations();
    this.requests.getUnconnected();
    setTimeout(( ) => {
      if (environment.production) {
        this.realtime.connectToRoom(this.user.GetToken());
      }
    }, 500);
  }

  sideOff() {
    if (this.sideState) {
      this._sdieController.closeSidebar();
    }
  }

}
