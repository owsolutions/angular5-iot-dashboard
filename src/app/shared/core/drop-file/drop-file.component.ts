import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { NgMediaComponent } from 'ng-media';

declare var $: any;

@Component({
  selector: 'app-drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.scss']
})
export class DropFileComponent implements AfterContentInit {


  @ViewChild('gallery')
  public gallery: NgMediaComponent;

  constructor() { }

  ngAfterContentInit () {
    setTimeout(() => {
      this.gallery.ResetItems([{
        id: '2',
        src: '',
        name: 'text.svg',
      }]);
    });
  }
}
