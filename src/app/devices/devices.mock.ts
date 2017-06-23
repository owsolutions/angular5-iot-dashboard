import { times, random } from 'lodash';
import { IDevice, IPin } from '../shared/Definitions';
import { DeviceObject } from '../shared/DeviceObject';

export function generateMock (): Array<IDevice> {

    function value () {
        switch (random(0, 1)) {
            case 0:
                return random(0, 1) ? 'ON' : 'OFF';
            case 1:
                return random(1000, 9000) * 0.001;
        }
    }
    function createPins (id: Number = 2): Array<IPin> {

        return times(8 , (index) => {
            return {
                id: index,
                type: random (0, 1) === 1 ? 'input' : 'output',
                value: value()
            };
        });
    }
    function createDevices (id: Number = 3): Array<IDevice> {
        return times(id , () => {
            return {
                uniqueid: 'dev-' + random(1111, 9999),
                pins: createPins (2)
            };
        });
    }

    return createDevices() ;
}
