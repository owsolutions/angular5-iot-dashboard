import { Injectable } from '@angular/core';

@Injectable()
export class IotSvgService {

  public pathtub = require('./bathtub.svg');
  public bathroom = require('./bathroom.svg');
  public kitchen = require('./kitchen.svg');
  public masterBedroom = require('./master-bedroom.svg');
  constructor() { }

}
