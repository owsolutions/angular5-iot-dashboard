import { Injectable } from '@angular/core';
import { IUser, IRole, IUserForm } from '@shared/core/definitions';
import { IActivity, ActivityTypes, IVPCInformation, ILocation, CloudDevice, CloudDeviceType } from '@shared/iot/definitions';
import { times } from 'lodash';
import { PermissionsService } from './permissions.service';
import { IResponse } from 'response-type';
import faker from 'faker';
import { IotSvgService } from '../../iot-svg/iot-svg.service';

@Injectable()
export class MocksService {

  constructor (
    private permissions: PermissionsService,
    private iotsvg: IotSvgService,
  ) { }

  public Activities ():  Array<IActivity> {
    return [
      {
        icon: 'assets/images/user.png',
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
        icon: 'assets/images/user.png',
        reason: 'Chromecast',
        type: ActivityTypes.DevicePinChange,
        description: 'Interstellar',
        time: '2 hour ago',
        iconType: 'image',
        meta: {},
        id: 3
      },
      {
        icon: 'assets/images/user.png',
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

  User(): IUser {
    return {
        email: 'alitorabi@seekasia.com',
        username: 'alitorabi',
        avatar: 'user.png',
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


  Devices (): Array<CloudDevice> {
    return [
      {
        id: 1,
        name: 'Hall temperature',
        type: CloudDeviceType.TemperatureSensor,
        datasource: 'device-1',
        value: 17.5,
        location: 1,
        preferences: {
          DisplayAverageLastWeekInSidebar: true,
          DisplayRealTimeTemperatureInSidebar: true
        }
      },
      // {
      //   id: 2,
      //   name: 'Room temperature',
      //   type: CloudDeviceType.TemperatureSensor,
      //   datasource: 'device-2',
      //   value: 32.8,
      //   location: 2,
      //   preferences: {
      //     DisplayRealTimeTemperatureInSidebar: true
      //   },

      // }
    ] as Array<CloudDevice>;
  }

  public Users ({offset}) {
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
  createUser (form: IUserForm): IResponse<any> {
    function hasUnvalidFields(vpc: IUserForm): Array<any> {
      const errors = [];
      if ( ! vpc.email ) {
        errors.push({
          location: 'email',
          message: 'Please provide the email'
        });
      }

      if ( ! vpc.password ) {
        errors.push({
          location: 'password',
          message: 'Please provide a strong password'
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
