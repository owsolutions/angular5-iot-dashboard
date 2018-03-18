import { Injectable } from '@angular/core';
declare var require: any;

@Injectable()
export class IotSvgService {

  public pathtub = require('./bathtub.svg');
  public bathroom = require('./bathroom.svg');
  public kitchen = require('./kitchen.svg');
  public masterBedroom = require('./master-bedroom.svg');
  constructor() { }

}
