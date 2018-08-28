import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-small-box',
  templateUrl: './ui-small-box.component.html',
  styleUrls: ['./ui-small-box.component.scss']
})
export class UiSmallBoxComponent {

  @HostBinding('class') public klass = 'col-md-3 col-6';
  @Input('title') public title: string;
  @Input('description') public description: string;
  @Input('value') public value: string;

}
