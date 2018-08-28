import { Injectable } from '@angular/core';
import { IImage } from '../interfaces/definitions';
import { StoreService } from '../services/store.service';

import { HttpClient } from '@angular/common/http';
declare var require: any;

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
  }

  public DeleteItem(id: string) {
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
