import { Injectable } from '@angular/core';
import { IImage } from '../interfaces/definitions';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { merge } from 'lodash';
import { Storage } from './storage';
@Injectable()
export class StoreService {

  private storages: Array<{hash: string, storage: Storage}> = [];
  public hash: string = null;
  constructor () {

  }

  public CreateStorage (): Storage {
    const hash = Math.random().toString(36).substring(7);
    const storage = new Storage(hash);
    this.storages.push({storage, hash});
    return storage;
  }
}
