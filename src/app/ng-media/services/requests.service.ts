import { Injectable } from '@angular/core';
import { AppState, IImage } from '../interfaces/definitions';
import { StoreService } from '../services/store.service';

function randomDate(start, end): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

import media from '../mocks';
import { HttpRequest, HttpClient } from '@angular/common/http';
declare var require: any;
const uuid = require('uuid/v1');

@Injectable()
export class RequestsService {

  constructor(
    private store: StoreService,
    private http: HttpClient,
  ) { }

  /**
   * Gets the media object based on popularity, or based on user search
   */
  public GetInitialMedias () {

    // this.store.ResetItems(media.map((x: any) => {
    //   x.id = uuid();
    //   x.createdAt = randomDate(new Date(2018, 0, 1), new Date(2018, 12, 30));
    //   return x as any;
    // }));

  }

  public DeleteItem(id: string) {
    console.log('Requested to delete: ', id);
    this.http.delete('http://localhost:1337/ngmedia/delete/' + id).subscribe(
      (response) => {
        console.log(response);
      },
      (response) => {
        console.error(response);
      }
    );
  }
  public UpdateImage(image: IImage) {
    console.log('Requested to update: ', image);
  }

}
