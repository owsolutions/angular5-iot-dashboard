import { Injectable } from '@angular/core';
import { IUser, IRole, IResponse } from '@app/core/definitions';
import { IActivity, ActivityTypes, IVPCInformation, IDevice, ILocation, IWidget, IPin } from '@app/iot/definitions';
import { times, random, sample } from 'lodash';
import { PermissionsService } from './permissions.service';
import faker from 'faker';

/**
 * All mocks data for application sits here. In general, data doesn't belong to components,
 * the data layer is completely independent from the componenets;
 * Components read data from store.
 * Hence, reducers, actions and mocks all are flat in the project directory.
 */

@Injectable()
export class MocksService {

  constructor (private permissions: PermissionsService) {

  }
  Activities ():  Array<IActivity> {

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
            icon: 'icon-play_arrow',
            reason: 'Sonos PLAY',
            type: ActivityTypes.DevicePinChange,
            description: 'Bakermat - teach me',
            time: '26 minutes ago',
            iconType: 'icon',
            meta: {},
            id: 1
        },
        {
            icon: 'icon-wifi2',
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

  Locations(): Array<ILocation> {
    return [
        {id: 1, name: 'Kitchen' , 'icon': 'kitchen.svg'},
        {id: 2, name: 'Bathroom' , 'icon': 'bathroom.svg'},
        {id: 3, name: 'Master bedrrom', 'icon': 'master-bedroom.svg'},
        {id: 4, name: 'Kitchen', 'icon': 'kitchen.svg'},
        {id: 5, name: 'Bathroom', 'icon': 'master-bedroom.svg'}
    ];
  }

  User(): IUser {
    return {
        email: 'alitorabi@seekasia.com',
        username: 'alitorabi',
        avatar: 'c81d6398-d086-42ba-a4a8-c6b65acaa1ce.jpg',
        firstname: 'Ali',
        lastname: 'Doe ',
        role: this.Roles()[0]
    };
  }
  Roles (): Array<IRole> {
    return [
        {
            permissions: [
                this.permissions.findByKey('DEVICES::VIEW'),
                this.permissions.findByKey('WIDGETS::VIEW'),
                this.permissions.findByKey('LOCATIONS::VIEW'),
                this.permissions.findByKey('ACTIVITIES::VIEW'),
                this.permissions.findByKey('ROLES::VIEW'),
                this.permissions.findByKey('USERS::VIEW')
            ],
            id: 1,
            title: 'Content Moderator'
        },
        {
            permissions: [],
            id: 2,
            title: 'Higher manager'
        },
        {
            permissions: [],
            id: 3,
            title: 'Installler'
        }
    ];
  }


  Devices (): Array<IDevice> {
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

  Widgets (): Array<IWidget> {
    const devices = this.Devices();
    const locations = this.Locations();
    return times(4, () => {
      const device = sample (devices);
      const location = sample(locations);
      return {
        device: device,
        location: location,
        name : sample(['Cloud', 'Lamp', 'Bridge']),
        pin: sample(device.pins)
      };
    });
  }

    Users ({limit, offset}) {
        return {
            table: {
                count: 3
            },
            data: times(3, (index) => {
                return {
                    'id' : index + +offset + 1,
                    'firstname': faker.name.findName().split(' ')[0],
                    'lastname': faker.name.findName().split(' ')[0],
                    'email': faker.internet.email()
                };
            })
        };
    }

    createVPC (form: IVPCInformation): IResponse {
        console.log('Creating vpc: ' , form);

        function hasUnvalidFields(vpc: IVPCInformation): Array<any> {
            const errors = [];
            if ( ! vpc.administrator ) {
                errors.push({
                    field: 'administrator',
                    message: 'You didn\'t provide the administrator email. VPC needs an administrator'
                });
            }
            if ( ! vpc.administratorPassword ) {
                errors.push({
                    field: 'administratorPassword',
                    message: 'Make sure you provide a password longer than 8 characters'
                });
            }

            if ( ! vpc.vpcname ) {
                errors.push({
                    field: 'vpcname',
                    message: 'Please provide the vpcname'
                });
            }

            if ( ! vpc.vpcregion ) {
                errors.push({
                    field: 'vpcregion',
                    message: 'Please select your geographical location.'
                });
            }
            return errors;
        }
        if (hasUnvalidFields(form).length) {
            return {
                error: {
                    code: 1,
                    message: 'Please fix the errors within the form',
                    errors: hasUnvalidFields(form)
                }
            };
        }
        return {
            data: {
                items: [
                    {
                        vpc: form
                    }
                ]
            }
        };
    }

}
