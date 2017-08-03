import { Injectable } from '@angular/core';

/**
 * Controlls and defines the current user of the dashboard;
 * Besides, interfaces will declare how the users must be implemented.
 */
interface IUser {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
}

@Injectable()
export class UserService {

  constructor () {

  }


  get User (): IUser {
    return {
      email: 'alitorabi@seekasia.com',
      username: 'alitorabi',
      firstname: 'John',
      lastname: 'Doe'
    };
  }


  get Users (): Array<IUser> {
    return [];
  }



}
