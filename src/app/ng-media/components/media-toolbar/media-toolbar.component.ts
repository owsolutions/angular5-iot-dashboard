import { Component, OnInit, Input } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage, IInteractionType } from '../../interfaces/definitions';
import mocks from '../../mocks';
import { sample, times, random, sortBy, uniqBy } from 'lodash';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-media-toolbar',
  templateUrl: './media-toolbar.component.html',
  styleUrls: ['./media-toolbar.component.scss']
})
export class MediaToolbarComponent implements OnInit {

  @Input('enableUpload') public enableUpload: false;
  @Input('storage') public storage: Storage = null;
  @Input() public InteractionType: IInteractionType = IInteractionType.Edit;

  public active = false;
  public loadingActive = false;
  public loading = false;
  private _timer = null;
  public types = [];
  public dates = [];

  constructor(
    private uploader: UploaderService,
  ) {
    this.types = [
      {
        key: 'all',
        value: 'All'
      },
      {
        key: 'image',
        value: 'Images'
      },
      {
        key: 'audio',
        value: 'Audio'
      },
      {
        key: 'video',
        value: 'Video'
      },
      {
        key: 'others',
        value: 'Other types'
      }
    ];
    this.dates = [
      {
        key: '2018-08',
        value: 'Feb 2018'
      }
    ];
  }

  ngOnInit() {
    this.storage.GetSubsriber().subscribe((images: IImage []) => {
      this.dates = this.findDates(images);
    });
  }

  public UploaderToggle () {
    this.active = this.active ? false : true;
  }

  public upload () {

  }
  public IsEditing (): boolean {
    return this.InteractionType === IInteractionType.Edit;
  }

  private findDates (items: IImage[]): Array<{key: string, value: string}> {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dates = [];
    for (const item of items) {
      if ( ! item.createdAt) {
        continue;
      }
      if (typeof item.createdAt === 'string') {
        item.createdAt = new Date(item.createdAt);
      }
      const key = item.createdAt.getFullYear() + '-' + item.createdAt.getMonth();
      dates.push({
        key,
        value: item.createdAt.getFullYear() + ' ' + monthNames[item.createdAt.getMonth()],
      });
    }
    return sortBy(uniqBy(dates, 'key'), 'key');
  }


  public InputChange (value: string) {
    if (!value) {
      this.loading = false;
      clearTimeout(this._timer);
      return this.uploader.events.emit({
        type: 'SEARCH_CLEAR'
      });
    }
    this.uploader.events.emit({
      type: 'SEARCH_START'
    });
    this.loading = true;
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.actualFetch();
    }, 400);
  }
  public actualFetch () {
    this.loadingActive = true;
    setTimeout(() => {
      const items = times(random(1, 4), () => sample(mocks)).map(x => {
        return x;
      });
      this.storage.ResetSearch(items as Array<any>);
      this.loading = false;
      this.uploader.events.emit({
        type: 'SEARCH_END'
      });
    }, 200);
  }
}
