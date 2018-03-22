import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserForm } from './shared';

@Injectable()
export class CoreService {

  constructor(
    private http: HttpClient
  ) { }


}
