import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'ui-panel-box',
  templateUrl: './ui-panel-box.component.html',
  styleUrls: ['./ui-panel-box.component.scss']
})
export class UiPanelBoxComponent implements OnInit {
  @Input('title') public title: string;
  @Input('class') public class: string;
  @HostBinding('class') public hostClass = 'col-md-6 col-sm-6';
  @Input('description') public description: string;

  ngOnInit() {
    if (this.class) {
      this.hostClass = this.class;
    }
  }
}
