import { times, random } from 'lodash';
import { IDevice, IPin } from '../shared/Definitions';
import { DeviceObject } from '../shared/DeviceObject';

export function generateMock (): Array<IDevice> {

    function createPins (id: Number = 2): Array<IPin> {
        return times(8 , (index) => {
            return {
                id: index,
                type: random (0, 1) === 1 ? 'input' : 'output',
                value: random(0, 1)
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
