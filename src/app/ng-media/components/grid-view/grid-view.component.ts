import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, IEvent, IInteractionType } from '../../interfaces/definitions';
import { RequestsService } from '../../services/requests.service';
import { DetailPanelService } from './../../services/detail-panel.service';
import { Storage } from '../../services/storage';

declare var require: any;

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public images: Array<IImage> = [];
  public searchMode = false;
  public filteredImages: Array<IImage> = [];
  @Output() public selectionChange: EventEmitter<Array<IImage>> = new EventEmitter();
  @Input() public InteractionType: IInteractionType = IInteractionType.Edit;
  @Input('storage') public storage: Storage = null;

  constructor(
    private uploader: UploaderService,
    private requests: RequestsService,
    private panel: DetailPanelService,
  ) {
    try {
      this.images = [];
    } catch (error) {
      //
    }
  }
  ngOnInit() {
    this.uploader.events.subscribe((event: IEvent) => {
      if (event.type === 'SEARCH_START') {
        this.searchMode = true;
      }
      if (event.type === 'SEARCH_CLEAR') {
        this.searchMode = false;
      }
    });
    this.storage.GetSubsriber().subscribe((items: IImage[]) => {
      this.images = items;
    });
    this.storage.GetSearcher().subscribe((items: IImage[]) => {
      this.filteredImages = items;
    });
    this.storage.forceRefresh();
  }

  public GetSearchImages () {
    return this.filteredImages;
  }
  public GetImages () {
    return this.images;
  }

  public ImageSelect (image: IImage) {
    if (this.InteractionType === IInteractionType.MultipleSelect) {
      this.images = this.uploader.multipleSelectImage(image, this.images);
    }
    if (this.InteractionType === IInteractionType.SingleSelect) {
      this.images = this.uploader.selectImage(image, this.images);
    }
    if (this.InteractionType === IInteractionType.Edit) {
      this.images = this.uploader.selectImage(image, this.images);
      this.uploader.photoSelector.emit(image);
      this.panel.showDetaile(image, this.storage);
    }
    this.selectionChange.emit(this.images);
  }
}
