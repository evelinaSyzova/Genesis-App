import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../servises/authorization.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authorizationService: AuthorizationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('/auth')) {
      let token = localStorage.getItem('token');
      if (!token) {
        this.authorizationService.getToken().subscribe((tok) => {
          localStorage.setItem('token', tok);
        });
      }
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req);
  }
}
