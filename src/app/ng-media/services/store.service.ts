import { Injectable } from '@angular/core';
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
