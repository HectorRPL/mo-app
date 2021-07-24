import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TARGET } from '../../const/enviromets';
import { AuthInterface } from '../../interfaces/auth-interface';

@Injectable()
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  registerUser(user: AuthInterface): Observable<string> {
    const url = `${TARGET}register`;
    return this.httpClient.post<string>(url, user)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  loginUser(user: AuthInterface): Observable<string> {
    const url = `${TARGET}login`;
    return this.httpClient.post<string>(url, user)
      .pipe(
        map((response: any) => {
          this.saveTokenInLocalStorage(response.token);
          return response;
        }),
        catchError(err => throwError(err))
      );
  }

  getUser(id: string): Observable<AuthInterface> {
    const url = `${TARGET}1`;
    return this.httpClient.get<AuthInterface>(url)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  // manage token //

  saveTokenInLocalStorage(token: string) {
    localStorage.setItem('moLinks', JSON.stringify(token));

  }

  getTokenFromLocalStorage(): string {
    return JSON.parse(<string>localStorage.getItem('moLinks'));
  }

}
