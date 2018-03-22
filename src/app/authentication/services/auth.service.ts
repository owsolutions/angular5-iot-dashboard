import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';
import { mockUsers } from './mock_user';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User) {
    if ( mockUsers.find(x => (x.email === user.email || x.username === user.username) && x.password === user.password) ) {
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    } else {
      return 'Incorrect username or password.';
    }
  }

  register(user: User) {
    mockUsers.push(user);
    return 'Tnx, Your Account has been created and now you can login with own username.';
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
