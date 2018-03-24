import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '@app/services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private user: UserService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'x-token': this.user.GetToken()
      }
    });
    return next.handle(request);
  }
}
