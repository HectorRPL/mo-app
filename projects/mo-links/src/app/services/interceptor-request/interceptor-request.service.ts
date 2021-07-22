import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorRequestService {

  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = JSON.parse(<string>localStorage.getItem('moList'));

    const HEADERS = new HttpHeaders(
      {
        'Token': token,
        'Content-Type': 'application/json'
      }
    );

    const REQ_INTERCEPT = req.clone({
      headers: HEADERS
    });

    console.log({REQ_INTERCEPT});

    return next.handle(REQ_INTERCEPT).pipe(

    );

  }

}
