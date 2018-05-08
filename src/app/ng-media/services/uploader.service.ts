import { Injectable, EventEmitter } from '@angular/core';
import { IEvent, IImage } from '../interfaces/definitions';
@Injectable()
export class UploaderService {
  public photoSelector: EventEmitter<any> = new EventEmitter();
  public events: EventEmitter<IEvent> = new EventEmitter();

  public selectImage (image: IImage, images: IImage[]): IImage[] {
    return images.map((x: IImage) => {
      if ( ! x.$meta) {
        x.$meta = {
          selected: false
        };
      }
      if (x.id === image.id) {
        x.$meta.selected = true;
      } else {
        x.$meta.selected = false;
      }
      return x;
    });
  }
  public multipleSelectImage (image: IImage, images: IImage[]): IImage[] {
    return images.map((x: IImage) => {
      if ( ! x.$meta) {
        x.$meta = {
          selected: false
        };
      }
      if (x.id === image.id && x.$meta.selected) {
        x.$meta.selected = false;
      } else if (x.id === image.id) {
        x.$meta.selected = true;
      }
      return x;
    });
  }

}
