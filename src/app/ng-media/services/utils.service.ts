import { Injectable } from '@angular/core';
import { IRectangle, ImageScale } from '../interfaces/definitions';

/**
 * Keeps a value between two numbers, based on min and max
 */
function keepBetween(value: number, min: number = 0, max: number = 1): number {
  if (value > max) {
    return max;
  }
  if ( value < min) {
    return min;
  }
  return value;
}

@Injectable()
export class UtilsService {

  public drawImageProp (ctx, img, size: IRectangle , defaultOffsetX = 0.5, defaultOffsetY = 0.5) {

    const [ offsetX, offsetY ] = [keepBetween(defaultOffsetX), keepBetween(defaultOffsetY)];
    const iw = img.width, ih = img.height, r = Math.min(size.w / iw, size.h / ih);
    let nw = iw * r, nh = ih * r, cx, cy, cw, ch, ar = 1;

    // decide which gap to fill
    if (nw < size.w) {
      ar = size.w / nw;
    }
    if (Math.abs(ar - 1) < 1e-14 && nh < size.h) { ar = size.h / nh; }  // updated
    nw *= ar;
    nh *= ar;

    cw = iw / (nw / size.w);
    ch = ih / (nh / size.h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    if (cx < 0) { cx = 0; }
    if (cy < 0) { cy = 0; }
    if (cw > iw) { cw = iw; }
    if (ch > ih) { ch = ih; }

    ctx.drawImage(img, cx, cy, cw, ch, size.x, size.y, size.w, size.h);
  }

  getScale(width, height, percentage) {
    return new Promise<ImageScale> ((resolve, reject) => {
      const min = Math.min(width, height);
      const result = Math.max(min * (percentage / 100), 350);
      const scaled = {
        width: (result / min) * width,
        height: (result / min) * height
      };
      resolve(scaled);
    });
  }

  public createEscapeClose (target: any) {
    function globalEscapeListener ($e) {
      const e = $e || window.event;
      if (e.keyCode !== 27) {
        return null;
      }
      document.removeEventListener('keyup', globalEscapeListener);
      if (this._ref) {
        this._ref.destroy();
      }
    }
    document.addEventListener('keyup', globalEscapeListener.bind(target));
  }
}
