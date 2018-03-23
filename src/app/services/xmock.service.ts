import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IResponse } from 'response-type';
import { matchPattern } from 'url-matcher';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';
import { PermissionsService } from '@app/shared/core/services/permissions.service';

@Injectable()
export class XMockService {
  routes = {
    // 'GET /user/:id': 'fetchUser',
    // 'DELETE /user/:id': 'destroyUser',
    // 'PUT /user/:id': 'updateUser',
    // 'GET /user': 'fetchUsers',
    'POST /api/user/signin': 'signIn'
  };

  constructor (
    private permissions: PermissionsService
  ) {}

  urlMatch( url: string, method: string = null ) {
    url = url.replace(environment.api, '');
    console.log(url, method);
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

    // if ( result.data ) {
    //   const mockResponse = new HttpResponse( {
    //     body: result,
    //     headers: new HttpHeaders(),
    //     status: (result.data) ? 200 : result.error.code,
    //     statusText: 'OK',
    //     url: req.url
    //   } );
    //   return Observable.of( mockResponse );
    // } else {
    //   throw new HttpErrorResponse( {
    //     error: JSON.stringify( result ),
    //     headers: new HttpHeaders(),
    //     status: result.error.code,
    //     statusText: 'Bad Request',
    //     url: req.url
    //   } );
    // }
  }

  // fetchUsers( req: HttpRequest<any> ): IResponse<any> {
  //   return {
  //     'apiVersion': 'beta',
  //     'data': {
  //       'items': this.db.getData().users
  //     }
  //   };
  // }

  // fetchUser( req: HttpRequest<any> ): IResponse<any> {
  //   const users = this.db.getData().users;
  //   const params = matchPattern( '/user/:id', req.url );
  //   const userId = params.paramValues[ 0 ];
  //   const user = _.find( users, { id: +userId } );
  //   if ( user ) {
  //     return {
  //       'apiVersion': 'beta',
  //       'data': {
  //         'items': [ user ]
  //       }
  //     };
  //   } else {
  //     return {
  //       apiVersion: 'beta',
  //       error: {
  //         code: 404,
  //         message: 'User not found!',
  //         errors: []
  //       }
  //     }
  //   }
  // }

  // updateUser( req: HttpRequest<any> ): IResponse<any> {
  //   const data = this.db.getData();
  //   const users = data.users;
  //   const params = matchPattern( '/user/:id', req.url );
  //   const userId = params.paramValues[ 0 ];
  //   const user = _.findIndex( users, { id: +userId } );
  //   if ( user !== -1 ) {
  //     users[ user ].first_name = req.body.first_name;
  //     users[ user ].last_name = req.body.last_name;
  //     this.db.setData( {
  //       ...data,
  //       'users': [ ...users ]
  //     } );
  //     return {
  //       'apiVersion': 'beta',
  //       'data': {
  //         'items': [ users[ user ] ]
  //       }
  //     };
  //   } else {
  //     return {
  //       apiVersion: 'beta',
  //       error: {
  //         code: 404,
  //         message: 'User not found!',
  //         errors: []
  //       }
  //     }
  //   }
  // }

  // destroyUser( req: HttpRequest<any> ): IResponse<any> {
  //   const data = this.db.getData();
  //   const users = data.users;
  //   const params = matchPattern( '/user/:id', req.url );
  //   const userId = params.paramValues[ 0 ];
  //   const user = _.findIndex( users, { id: +userId } );
  //   if ( user !== -1 ) {
  //     users.splice( user, 1 );
  //     this.db.setData( {
  //       ...data,
  //       'users': [ ...users ]
  //     } );
  //     return {
  //       'apiVersion': 'beta',
  //       'data': {
  //         'items': [ 'User deleted successfully' ]
  //       }
  //     };
  //   } else {
  //     return {
  //       apiVersion: 'beta',
  //       error: {
  //         code: 404,
  //         message: 'User not found!',
  //         errors: []
  //       }
  //     }
  //   }
  // }

  signIn( req: HttpRequest<any> ): IResponse<any> {
    if ( req.body.email === 'test@test.com' && req.body.password === '123321' ) {
      return {
        'data': {
          'items': [
            {
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyfSwiaWF0IjoxNTEwOTE4NTY5L' +
              'CJleHAiOjE1MTA5MjIxNjl9.qOPJVGiIFBye1dUY0BfX6bqcc0rig8PhZTLMYNg1FLU',
              user: {
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
              }
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
}
