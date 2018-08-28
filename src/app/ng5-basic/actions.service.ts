import { Injectable } from '@angular/core';
declare var SimpleBar: any;

@Injectable()
export class ActionsService {
  public scrollTop () {
    const el = new SimpleBar(document.getElementById('layout'));
    el.scrollContentEl.scrollTop = 0;
  }
}
