import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorRequestService implements HttpInterceptor {

  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.getTokenFromLocalStorage();

    const headers = new HttpHeaders(
      {
        'Token': token ? token : '',
        'Content-Type': 'application/json'
      }
    );

    const REQ_INTERCEPT = req.clone({
      headers: headers
    });

    return next.handle(REQ_INTERCEPT).pipe();

  }

  getTokenFromLocalStorage(): string {
    return JSON.parse(<string>localStorage.getItem('moList'));
  }

}
