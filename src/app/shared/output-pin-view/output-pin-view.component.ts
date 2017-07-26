import { Component, OnInit, Input } from '@angular/core';
import { IPin, IDevice }from '../Definitions';

@Component({
  selector: 'app-output-pin-view',
  templateUrl: './output-pin-view.component.html',
  styleUrls: ['./output-pin-view.component.scss']
})
export class OutputPinViewComponent implements OnInit {

  @Input('pin') public pin: IPin;
  @Input('device') public device: IDevice;

  constructor() { }

  ngOnInit() {
    
  }

}
