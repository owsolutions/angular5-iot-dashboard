import { Component, OnInit, Input, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarControllerService } from '@app/components/ngx-sidebar/sidebar-controller.service';

@Component({
  /* tslint:disable */
  selector: 'ngx-sidebar',
  templateUrl: './ngx-sidebar.component.html',
  styleUrls: ['./ngx-sidebar.component.scss']
})
export class NgxSidebarComponent implements OnInit {

  @Input('navigation') navigation: Array<any>;
  @Input('containerClass') containerClass = 'main-ul';
  public state = true;

  constructor(
    private renderer: Renderer,
    private route: ActivatedRoute,
    private _sidebar: SidebarControllerService
  ) {}

  ngOnInit() {
  }

  menuToggle(event: any, nav: any) {
    if (nav.hasOwnProperty('children')) {
      this.state = !event.currentTarget.classList.contains('opened') ? true : false;
      this.renderer.setElementClass(event.currentTarget, 'opened', this.state);
      this.state = !this.state;
    } else {
      this._sidebar.closeSidebar();
    }
  }
}
