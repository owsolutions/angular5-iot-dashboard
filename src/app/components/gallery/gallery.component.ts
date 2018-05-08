import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { NgMediaComponent } from '../../ng-media';
import { IotSvgService } from '@app/services/iot-svg/iot-svg.service';

declare var $: any;
import { IotImages } from '@app/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterContentInit {

  @ViewChild('gallery')
  public gallery: NgMediaComponent;

  constructor(
    private iot: IotSvgService
  ) { }

  ngAfterContentInit () {
    this.gallery.ResetItems(IotImages);
  }
}
