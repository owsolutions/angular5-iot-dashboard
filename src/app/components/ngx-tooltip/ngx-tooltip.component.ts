import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ngx-tooltip',
  templateUrl: './ngx-tooltip.component.html',
  styleUrls: ['./ngx-tooltip.component.scss']
})
export class NgxTooltipComponent implements OnInit {
  @ViewChild('tooltipBox', {read: ElementRef}) tooltipBox: ElementRef;
  public positions: any;
  public tooltip: string;
  public element: any;
  public elementStyle = {
    width: 0,
    height: 0,
    opacity: 0
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.element = this.tooltipBox.nativeElement.getBoundingClientRect();
      this.elementStyle.width = this.positions.left - ((this.element.width / 2) - (this.positions.width / 2));
      this.elementStyle.height = this.positions.top - this.element.height - 10;
      this.elementStyle.opacity = 1;
    }, 0.1);
  }
}
