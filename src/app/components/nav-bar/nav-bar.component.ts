import { Component, OnInit } from '@angular/core';
import { SidebarControllerService } from '../ngx-sidebar/sidebar-controller.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public _sdieController: SidebarControllerService) { }

  ngOnInit() {
  }

  ToggleSidebar() {
    this._sdieController.ToggleSidebar.emit();
  }
}
