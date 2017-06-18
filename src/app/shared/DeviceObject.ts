import { IDevice } from './Definitions';

export class DeviceObject {

  constructor(private native: IDevice) {

  }
  get GetTitle () {
    return this.native.uniqueid;
  }
  get IO () {
    return this.native.pins;
  }

  get Inputs () {
    return this.native.pins.filter(pin => pin.type === 'input');
  }

  get Outputs () {
    return this.native.pins.filter(pin => pin.type === 'output');
  }

  DescribeInputs () {
      return this.Inputs.map(pin => pin.value).join(',');
  }
  DescribeOutputs () {
      return this.Outputs.map(pin => pin.value).join(',');
  }

}
