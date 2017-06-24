import { times, sample } from 'lodash';
import { IActivity } from '../../shared/Definitions';

export function generateMock (count: Number = 10): Array<IActivity> {

    function mockDescription () {
        const descriptions = [
        'User 1 Changed Lamp 3 to ON',
        'Bathroom temperature changed to 55.3F'
        ];
        return sample(descriptions);
    }

    const activities = times(count, (index) => {
        return {
            id: index,
            description: mockDescription()
        };
    });
    return [];
    // return activities;
}
