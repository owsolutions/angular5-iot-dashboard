import { Component, OnInit } from '@angular/core';
import { SidebarControllerService } from '../../services/sidebar-controller.service';
import {navigation } from '@app/app.navigation';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public sideState = true;
  public keepOpen = false;
  public navigation = navigation;
  constructor(public _sdieController: SidebarControllerService) {
    this._sdieController.ToggleSidebar.subscribe((e) => {
      if (e === 'hidden' && !this.keepOpen) {
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
  }

}
