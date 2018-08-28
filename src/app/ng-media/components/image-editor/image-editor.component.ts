import { Component, Input, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { IImage } from '../../interfaces/definitions';
import { UtilsService } from '../../services/utils.service';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss']
})
export class ImageEditorComponent implements OnInit {
  @Input('storage') public storage: Storage = null;
  @Input('image') image: IImage;
  @ViewChild('imageBox', {read: ViewContainerRef}) imageBox: ViewContainerRef;
  @ViewChild('editorContainer', {read: ViewContainerRef}) editorContainer: ViewContainerRef;

  private canvas: HTMLCanvasElement;
  private ctx: any;
  private img: HTMLImageElement;
  private degree = 0;
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(
    private util: UtilsService,
  ) { }

  disableEditing(image: IImage) {
    image.$meta.editing = false;
    this.storage.UpdateItem(image);
  }

  ngOnInit() {
    this.canvas = this.imageBox.element.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.img = new Image;
    this.img.src = this.image.src;
    this.img.onload = (e) => {
      this.util.getScale(this.img.naturalWidth, this.img.naturalHeight, 49).then((scaled) => {
        this.canvas.width = scaled.width;
        this.canvas.height = scaled.height;
        this.canvasWidth = scaled.width;
        this.canvasHeight = scaled.height;
        this.ctx.drawImage(this.img, 0, 0, scaled.width, scaled.height);
      });
    };
  }

  rotateImage(state) {
    this.degree = state === 'left' ? this.degree -= 90 : this.degree += 90;
    this.degree = this.degree < 0 ? 270 : this.degree;
    this.degree = this.degree > 270 ? 0 : this.degree;

    switch (this.degree) {
      case 0:
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.ctx.rotate(0);
        this.ctx.translate(0, 0);
      break;
      case 90:
        this.canvas.width = this.canvasHeight;
        this.canvas.height = this.canvasWidth;
        this.ctx.rotate(90 * Math.PI / 180);
        this.ctx.translate(0, -this.canvasHeight);
      break;
      case 180:
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.ctx.rotate(180 * Math.PI / 180);
        this.ctx.translate(-this.canvasWidth, -this.canvasHeight);
      break;
      case 270:
        this.canvas.width = this.canvasHeight;
        this.canvas.height = this.canvasWidth;
        this.ctx.rotate(270 * Math.PI / 180);
        this.ctx.translate(-this.canvasWidth, 0);
      break;
    }
    this.ctx.drawImage(this.img, 0, 0, this.canvasWidth, this.canvasHeight);
  }

  flipImage(state) {
    switch (state) {
      case 'horizontal':
        this.ctx.translate(this.canvas.width, 0);
        this.ctx.scale(-1, 1);
      break;
      case 'vertical':
        this.ctx.translate(0, this.canvas.height);
        this.ctx.scale(1, -1);
      break;
    }
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
  }

  saveImage() {
    this.image.src = this.canvas.toDataURL(this.image.type, 1.0);
    this.disableEditing(this.image);
    this.storage.UpdateItem(this.image);
  }
}
