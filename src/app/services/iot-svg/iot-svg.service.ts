import { Injectable } from '@angular/core';
declare var require: any;

@Injectable()
export class IotSvgService {

  public static pathtub = require('./bathtub.svg');
  public static bathroom = require('./bathroom.svg');
  public static kitchen = require('./kitchen.svg');
  public static masterBedroom = require('./master-bedroom.svg');
  constructor() { }

}
