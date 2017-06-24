import { times, random } from 'lodash';
import { IDevice, ILocation } from '../shared/Definitions';

export function generateMock (): Array<ILocation> {

    function createLocations (id: Number = 3): Array<ILocation> {
        const locations = [
            {id: 1, name: 'Kitchen' , 'icon': 'four-cooking-accessories-set-for-kitchen.svg'},
            {id: 2, name: 'Bathroom' , 'icon': 'bathtub.svg'},
            {id: 3, name: 'Master bedrrom', 'icon': 'fireplace.svg'},
            {id: 4, name: 'Living room', 'icon': 'living-room.svg'},
            {id: 5, name: 'Conference room', 'icon': 'conference.svg'}
        ];
        return locations;
    }

    return createLocations() ;
}
