import { Component, OnInit, Input } from '@angular/core';
import { IDevice, IPin } from '../Definitions';
@Component({
  selector: 'app-output-pin',
  templateUrl: './output-pin.component.html',
  styleUrls: ['./output-pin.component.scss']
})
export class OutputPinComponent implements OnInit {
  
  pinValueChange (pin: IPin , t) {
    console.log('Pin Change: ' , pin, t);
    return true;
  }
  @Input() pin: any;
  constructor() { }

  ngOnInit() {
  }

}
