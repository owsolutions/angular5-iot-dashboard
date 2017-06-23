import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-pin',
  templateUrl: './input-pin.component.html',
  styleUrls: ['./input-pin.component.scss']
})
export class InputPinComponent implements OnInit {

  @Input() pin: string;
  constructor() { }

  ngOnInit() {
  }

}
