import { times, sample } from 'lodash';
import { IActivity, ActivityTypes } from '../../shared/Definitions';

export function generateMock (count: Number = 10): Array<IActivity> {
    return [
        {
            icon: 'assets/images/avatar-2.jpg',
            reason: 'Katy',
            type: ActivityTypes.DevicePinChange,
            description: 'Security Alaram',
            time: '10 minutes ago',
            iconType: 'image',
            meta: {},
            id: 0
        },
        {
            icon: 'icon-play',
            reason: 'Sonos PLAY',
            type: ActivityTypes.DevicePinChange,
            description: 'Bakermat - teach me',
            time: '26 minutes ago',
            iconType: 'icon',
            meta: {},
            id: 1
        },
        {
            icon: 'icon-wifi',
            reason: 'Macbook',
            type: ActivityTypes.DevicePinChange,
            description: 'Wifi network',
            time: '29 minutes ago',
            iconType: 'icon',
            meta: {},
            id: 2
        },
        {
            icon: 'assets/images/avatar-3.jpg',
            reason: 'Chromecast',
            type: ActivityTypes.DevicePinChange,
            description: 'Interstellar',
            time: '2 hour ago',
            iconType: 'image',
            meta: {},
            id: 3
        },
        {
            icon: 'assets/images/avatar-1.jpg',
            reason: 'Incomming call',
            type: ActivityTypes.DevicePinChange,
            description: 'Micheal Darrah',
            time: '3 hour ago',
            iconType: 'image',
            meta: {},
            id: 4
        }
    ];
}
