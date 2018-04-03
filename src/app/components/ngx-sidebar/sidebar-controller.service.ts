import { Injectable, EventEmitter } from '@angular/core';
import { PagePointerPosition } from '../../definitions';

@Injectable()
export class SidebarControllerService {
  public sidebarIsActive = false;
  public eventIsActive = false;
  public eventMoveChange: PagePointerPosition = {x: undefined, y: undefined};
  public evetStartPoint: PagePointerPosition = {x: undefined, y: undefined};

  public ToggleSidebar: EventEmitter<any> = new EventEmitter();
  constructor() {
    window.addEventListener('resize', (event: any) => {
      if (event.target.innerWidth < 992) {
        this.ToggleSidebar.emit('hidden');
      } else {
        this.ToggleSidebar.emit('show');
      }
    });
    this.addListenerMulti(window, 'touchstart touchend touchmove mousedown mouseup mousemove', (e: any) => {
      this.sidebarStatus(e.path).then(status => {
        if (!status) {
          if (e.type === 'touchstart' || e.type === 'mousedown') {
            this.eventIsActive = true;
          }
          if (e.type === 'touchend' || e.type === 'mouseup') {
            if (window.innerWidth < 992) {
              if (!(Math.abs((this.evetStartPoint.y - this.eventMoveChange.y)) > 50 )) {
                if (this.evetStartPoint.x > (this.eventMoveChange.x + 15)) {
                  this.ToggleSidebar.emit('hidden');
                } else if (this.evetStartPoint.x < (this.eventMoveChange.x - 15)) {
                  this.ToggleSidebar.emit('show');
                }
              }
            }
            this.eventIsActive = false;
            this.evetStartPoint = {x: undefined, y: undefined};
          }
          if (this.eventIsActive && (e.type === 'mousemove' || e.type === 'touchmove')) {
            if (this.evetStartPoint.x === undefined && this.evetStartPoint.y === undefined) {
              this.evetStartPoint = this.getClientPostion(e);
            }
            this.eventMoveChange = this.getClientPostion(e);
          }
        }
      });
    });
   }

  addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
  }

  getClientPostion(e): PagePointerPosition {
    switch (e.type) {
      case 'mousemove':
        return {
          x: e.clientX,
          y: e.clientY,
        };
      case 'touchmove':
        return {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY,
        };
    }
  }

  closeSidebar() {
    if (window.innerWidth < 992) {
      this.ToggleSidebar.emit('hidden');
    }
  }

  sidebarStatus(el) {
    return new Promise ((res, rej) => {
      for (const e of el) {
        if (e.tagName !== undefined) {
          if (e.hasAttribute('ngx-sidebar-off')) {
            res(true);
            return;
          }
        }
      }
      res(false);
    });
  }
}
