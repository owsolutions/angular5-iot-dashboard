import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoreService {

  constructor(
    private http: HttpClient
  ) { }


}
