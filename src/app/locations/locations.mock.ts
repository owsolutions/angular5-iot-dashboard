import { times, random } from 'lodash';
import { IDevice, ILocation } from '../shared/Definitions';

export function generateMock (): Array<ILocation> {

    function createLocations (id: Number = 3): Array<ILocation> {
        const locations = [
            {id: 1, name: 'Kitchen' , 'icon': 'kitchen.svg'},
            {id: 2, name: 'Bathroom' , 'icon': 'bathroom.svg'},
            {id: 3, name: 'Master bedrrom', 'icon': 'master-bedroom.svg'},
            {id: 4, name: 'Kitchen', 'icon': 'kitchen.svg'},
            {id: 5, name: 'Bathroom', 'icon': 'master-bedroom.svg'}
        ];
        return locations;
    }

    return createLocations() ;
}
