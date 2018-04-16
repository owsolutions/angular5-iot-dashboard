import { Component, OnInit } from '@angular/core';
import { SidebarControllerService } from '../ngx-sidebar/sidebar-controller.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public sidebar: SidebarControllerService) { }

  ngOnInit() {
  }

  ToggleSidebar() {
    this.sidebar.ToggleSidebar.emit();
  }
}
