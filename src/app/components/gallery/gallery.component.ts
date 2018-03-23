import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { NgMediaComponent } from 'ng-media';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
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
