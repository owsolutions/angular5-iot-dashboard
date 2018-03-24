import { Injectable } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IResponse, IResponseErrorItem } from 'response-type';
import { matchPattern } from 'url-matcher';
import { environment } from '../../environments/environment';
import { PermissionsService } from '@services/permissions.service';
import { IUserForm, CloudDevice } from '@app/definitions';
import { CloudDeviceType } from '@app/definitions';
import { IotSvgService } from '@services/iot-svg/iot-svg.service';
import { random } from 'lodash';
import { ILocation } from '@app/definitions';


@Injectable()
export class MockService {
  public routes = {
    'POST /api/user/signin': 'signIn',
    'POST /api/user/signup': 'signUp',
    'GET /api/locations': 'getLocations',
    'GET /api/devices': 'getDevices',
    'POST /api/device': 'postDevice',
    'POST /api/location': 'postLocation'
  };

  constructor (
    private permissions: PermissionsService,
    private iotsvg: IotSvgService
  ) {}

  urlMatch( url: string, method: string = null ) {
    url = url.replace(environment.api, '');
    for ( const route of Object.keys( this.routes ) ) {
      const urlMethod = route.split( ' ' );
      let result = '';
      if ( urlMethod.length === 2 ) {
        if ( method === null ) {
          result = matchPattern( urlMethod[ 1 ], url );
        } else {
          if ( urlMethod[ 0 ].toUpperCase() === method.toUpperCase() ) {
            result = matchPattern( urlMethod[ 1 ], url );
          }
        }
      } else {
        result = matchPattern( route, url );
      }
      if ( result ) {
        return route;
      }
    }
    return '';
  }

  handleRoute( req: HttpRequest<any> ): Observable<HttpEvent<any>> {
    const url = this.urlMatch( req.url, req.method );
    const action = this.routes[ url ];
    const result = this[ action ].call( this, req );

    const mockResponse = new HttpResponse( {
      body: result,
      headers: new HttpHeaders(),
      status: (result.data) ? 200 : result.error.code,
      statusText: 'OK',
      url: req.url
    } );
    return Observable.of( mockResponse );
  }

  public mockUser () {
    return {
      email: 'alitorabi@seekasia.com',
      username: 'alitorabi',
      avatar: 'user.png',
      firstname: 'John',
      lastname: 'Doe ',
      role: {
        permissions: [
          this.permissions.findByKey('DEVICES::VIEW'),
          this.permissions.findByKey('WIDGETS::VIEW'),
          this.permissions.findByKey('LOCATIONS::VIEW'),
          this.permissions.findByKey('ACTIVITIES::VIEW'),
          this.permissions.findByKey('ROLES::VIEW'),
          this.permissions.findByKey('USERS::VIEW')
        ]
      },
    };
  }

  signIn( req: HttpRequest<any> ): IResponse<any> {
    if ( req.body.email === 'test@test.com' && req.body.password === '123321' ) {
      return {
        'data': {
          'items': [
            {
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyfSwiaWF0IjoxNTEwOTE4NTY5L' +
              'CJleHAiOjE1MTA5MjIxNjl9.qOPJVGiIFBye1dUY0BfX6bqcc0rig8PhZTLMYNg1FLU',
              user: this.mockUser()
            }
          ]
        }
      };
    } else {
      return {
        apiVersion: 'beta',
        error: {
          code: 401,
          message: 'Wrong mock user: Set username to test@test.com and password 123321',
          errors: []
        }
      };
    }
  }

  public signUp (req: HttpRequest<any>): IResponse<any> {
    const form = req.body;
    function hasUnvalidFields(user: IUserForm): Array<any> {
      const errors = [];
      if ( ! user.email ) {
        errors.push({
          location: 'email',
          message: 'Please provide the email'
        });
      }
      if ( ! user.password ) {
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
            user: this.mockUser(),
            token: 'fake-token3892379828932982789237982'
          }
        ]
      }
    };
  }

  public getDevices () {
    return {
      data: {
        items: [
          {
            id: 1,
            name: 'Hall temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-1',
            value: random(10, 30),
            location: 1,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
          {
            id: 2,
            name: 'Kitchen Temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-2',
            value: random(10, 30),
            location: 1,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
          {
            id: 3,
            name: 'Parking temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-4',
            value: random(10, 30),
            location: 1,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
          {
            id: 4,
            name: 'Lobby temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-5',
            value: random(10, 30),
            location: 2,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
          {
            id: 5,
            name: 'Wallroom temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-6',
            value: random(10, 30),
            location: 2,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
          {
            id: 6,
            name: 'Magnet temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-7',
            value: random(10, 30),
            location: 2,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
          {
            id: 7,
            name: 'Negative temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-8',
            value: random(10, 30),
            location: 3,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
          {
            id: 8,
            name: 'Thermal temperature',
            type: CloudDeviceType.TemperatureSensor,
            datasource: 'device-9',
            value: random(10, 30),
            location: 3,
            preferences: {
              DisplayAverageLastWeekInSidebar: true,
              DisplayRealTimeTemperatureInSidebar: true
            }
          },
        ]
      }
    };
  }

  public getLocations (): IResponse<any> {
    return {
      data: {
        items: [
          {
            id: 1,
            name: 'Kitchen',
            'icon': IotSvgService.kitchen,
            level: '2',
            temperatureDevice: 1
          },
          {
            id: 2,
            name: 'Bathroom',
            'icon': IotSvgService.pathtub,
            level: '3',
            temperatureDevice: 2
          },
          {
            id: 3,
            name: 'Master bedroom',
            'icon': IotSvgService.masterBedroom,
            level: '2',
            temperatureDevice: 1
          },
        ]
      }
    };
  }
  public postDevice( req: HttpRequest<any> ): IResponse<CloudDevice> {
    const device: CloudDevice = req.body;

    const validations = DeviceValidator(device);
    if (validations.length) {
      return {
        error: {
          message: 'Device cannot be created. Please current the issue fields',
          errors: validations,
          code: 34
        }
      };
    }
    return {
      data: {
        items: [
          device
        ]
      }
    };
  }
  public postLocation(req: HttpRequest<any>): IResponse<ILocation> {
    const location: ILocation = req.body;
    if ( ! location.id) {
      location.id = random(100, 9999);
    }
    return {
      data: {
        items: [
          {
            icon: location.icon,
            id: location.id,
            name: location.name,
            level: location.level,
            temperatureDevice: location.temperatureDevice
          }
        ]
      }
    };
  }
}
function DeviceValidator (device: CloudDevice) {
  const errors: Array<IResponseErrorItem> = [];

  if ( ! device.name) {
    errors.push({
      location: 'name',
      message: 'Device must have a name to be identified'
    });
  }
  return errors;
}
