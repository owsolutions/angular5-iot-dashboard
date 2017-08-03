import { Injectable } from '@angular/core';
import { CommunicateService } from './communicate.service';
import { Store } from '@ngrx/store';
import { AppState } from './shared/Definitions';
import faker from 'faker';
import { times } from 'lodash';

interface IPaginate {
  offset: any;
  limit: any;
}

function makeMockPaginationForUsers ({limit, offset}) {
  return {
    table: {
      count: 50 + +limit
    },
    data: times(limit, (index) => {
      return {
        'id' : index + +offset + 1,
        'firstname': faker.name.findName().split(' ')[0],
        'lastname': faker.name.findName().split(' ')[0],
        'email': faker.internet.email()
      };
    })
  };
}
@Injectable()
export class PaginationRequestService {

  private cache: any = {};

  constructor (private communicate: CommunicateService, private store: Store<AppState>) {

  }

  async Paginate (aoData: any, url: string = ''): Promise<any> {
    const head = {
      'offset': +aoData.start.toString(),
      'limit': +aoData.length.toString()
    };

    return makeMockPaginationForUsers(head);
  }
}
