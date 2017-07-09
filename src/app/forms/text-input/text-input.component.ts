import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forms-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }

}
