import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {

  @Input() canvas;
  @ViewChild('imageCanvas') canvasRef: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private utils: UtilsService,

  ) { }

  ngAfterViewInit() {
    const canvasElement = this.canvasRef.nativeElement;
    const ctx = canvasElement.getContext('2d');
    const img = new Image;
    img.src = this.canvas.src;
    img.onload = (e) => {
      const offsetX = 0.5;
      const offsetY = 0.5;
      this.utils.drawImageProp(ctx, img, { x: 0, y: 0, w: 0, h: 0}, offsetX, offsetY);
    };
  }

}
