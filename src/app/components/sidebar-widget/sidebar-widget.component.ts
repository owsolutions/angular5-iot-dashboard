import { Component, OnInit, Input } from '@angular/core';
import { SidebarWidgetItem } from '@app/definitions';

@Component({
  selector: 'app-sidebar-widget',
  templateUrl: './sidebar-widget.component.html',
  styleUrls: ['./sidebar-widget.component.scss']
})
export class SidebarWidgetComponent implements OnInit {

  @Input('items') public items: Array<SidebarWidgetItem> = [];
  constructor() { }

  ngOnInit() {
  }

}
