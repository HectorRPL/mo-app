import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorRequestService implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {
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

    console.log(headers);

    const REQ_INTERCEPT = req.clone({
      headers: headers
    });

    console.log({REQ_INTERCEPT});



    return next.handle(REQ_INTERCEPT).pipe(

    );

  }

  getTokenFromLocalStorage(): string {
    return JSON.parse(<string>localStorage.getItem('moList'));
  }

}
