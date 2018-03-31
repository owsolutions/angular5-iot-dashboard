import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SidebarControllerService {
  public ToggleSidebar: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
