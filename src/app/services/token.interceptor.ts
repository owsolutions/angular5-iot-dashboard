import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '@app/services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private user: UserService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = Object.assign({
      'x-token': this.user.GetToken()
    } , HeadersToObject(request.headers));
    request = request.clone({ setHeaders: headers });
    return next.handle(request);
  }
}

function HeadersToObject(headers: HttpHeaders): any {
  const heads = {};
  headers.keys().forEach((key) => {
    heads[key] = headers.get(key);
  });
  return heads;
}
