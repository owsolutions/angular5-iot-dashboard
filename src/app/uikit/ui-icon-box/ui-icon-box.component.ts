import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-icon-box',
  templateUrl: './ui-icon-box.component.html',
  styleUrls: ['./ui-icon-box.component.scss']
})
export class UiIconBoxComponent {

  @HostBinding('class') public klass = 'col-md-3 col-6';
  @Input('title') public title: string;
  @Input('icon') public icon: string;
  @Input('url') public url: string;
}
