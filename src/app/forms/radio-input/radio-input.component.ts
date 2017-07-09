import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
