import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { NgMediaService } from '../../services/public.service';
import { IInteractionType, IImage,  } from '../../interfaces/definitions';
import { StoreService } from '../../services/store.service';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-ng-media',
  templateUrl: './ng-media.component.html',
  styleUrls: ['./ng-media.component.scss']
})
export class NgMediaComponent implements OnInit {

  @Input('type') public type: 'single' | 'multiple' | 'editor' = 'editor';
  @Input('enableUpload') public enableUpload = true;
  @Output('selectionChange') public selectionChange: EventEmitter<Array<IImage>> = new EventEmitter();

  public storage: Storage = null;

  constructor (
    private _pub: NgMediaService,
    private store: StoreService,
  ) {
    this.storage = this.store.CreateStorage();
  }

  public updateSelection (items: Array<IImage> = []) {
    this.selectionChange.emit(items);
  }
  ngOnInit () {
  }
  /**
   * @description It will reset all images inside this gallery. If you provide an array of items,
   * they will be replaced.
   */
  public ResetItems (items: Array<IImage> = []) {
    this.storage.ResetItems(items);
  }

  public GetStorage (): Storage {
    return this.storage;
  }

  public GetInteractionType (type: 'single' | 'multiple' | 'editor'): IInteractionType {
    if (type === 'editor') {
      return IInteractionType.Edit;
    }
    if (type === 'multiple') {
      return IInteractionType.MultipleSelect;
    }
    if (type === 'single') {
      return IInteractionType.SingleSelect;
    }
    return null;
  }
}
