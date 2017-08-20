import { Component, OnInit } from '@angular/core';
declare var Dropzone: any;
declare var $: any;

@Component({
  selector: 'app-drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.scss']
})
export class DropFileComponent implements OnInit {

  constructor() { }

  initializeDropZone (url: string = '/upload'): any {
    const $el = $('div#drop-zone-1').dropzone({ url });
    $el.on('dragenter' , function () {
      console.log('Drag enter!');
      $el.addClass('onhover');
    });
    $el.on('dragleave' , function () {
      console.log('Drag left.');
      $el.removeClass('onhover');
    });
    return $el;
  }
  ngOnInit() {
    if (typeof $ !== 'undefined') {
      this.initializeDropZone ();
    }
  }

}
