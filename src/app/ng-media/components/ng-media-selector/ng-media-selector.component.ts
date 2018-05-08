import { Component, OnInit } from '@angular/core';
import { IInteractionType, IImage, IDialogConfiguration } from '../../interfaces/definitions';
import { UtilsService } from '../../services/utils.service';
import { Storage } from '../../services/storage';

@Component({
  templateUrl: './ng-media-selector.component.html',
  styleUrls: ['./ng-media-selector.component.scss']
})
export class NgMediaSelectorComponent implements OnInit {

  public storage: Storage = null;
  public _ref: any;
  public config: IDialogConfiguration = null;
  public subject: any = null;
  public selectedItems: Array<IImage> = [];
  constructor(
    private utils: UtilsService,
  ) { }

  public updateSelection (items: Array<IImage> = []) {
    this.selectedItems = items.filter(x => {
      return x.$meta.selected;
    });
  }
  public GetInteractionType () {
    return this.config.interactionType || IInteractionType.SingleSelect;
  }
  ngOnInit() {
    if (!this.config) {
      this.config = {};
    }
    this.utils.createEscapeClose(this);
  }
  close(e) {
    if (e.target === e.currentTarget) {
      this._ref.destroy();
    }
  }
  public CloseDialog () {
    this.subject.next(this.selectedItems);
    this._ref.destroy();
  }

}
