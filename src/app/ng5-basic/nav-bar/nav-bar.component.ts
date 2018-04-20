import { Component, OnInit } from '@angular/core';
import { SidebarControllerService } from '../ngx-sidebar/sidebar-controller.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public sidebar: SidebarControllerService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
  }

  ToggleSidebar() {
    this.sidebar.ToggleSidebar.emit();
  }
  public CurrentLanguage () {
    return this.translate.currentLang;
  }
}
