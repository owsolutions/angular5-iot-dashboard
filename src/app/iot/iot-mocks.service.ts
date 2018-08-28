import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { IResponse } from 'response-type';
import { IUser, IRole } from '@app/definitions';
import { random } from '@lodash';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/delay';
import { handleRoute, urlMatch } from '@app/common';

let $Users: Array<IUser> = [
  {
    id: 1,
    firstname: 'Ali',
    lastname: 'Torabi',
    email: 'connexion.founder@outlook.com',
    phone: '+48783538796',
    username: 'ali.torabi',
    preferences: {},
    role: null,
    avatar: ''
  },
];

@Injectable()
export class IotMockService {

  public handleRoute = handleRoute.bind(this);
  public urlMatch = urlMatch.bind(this);
  public routes = {

  };

  constructor (
    private translate: TranslateService,
  ) {}

}

