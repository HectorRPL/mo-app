import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TARGET } from '../../const/enviromets';
import { AuthInterface } from '../../interfaces/auth-interface';
import { UserInterface } from '../../interfaces/user-interface';

@Injectable()
export class AuthService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  registerUser(user: AuthInterface): Observable<string> {
    const url = `${TARGET}register`;
    return this.httpClient.post<string>(url, user)
      .pipe(
        catchError(err => throwError(err)),
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
        catchError(err => throwError(err)),
      );
  }

  getUser(id: string): Observable<UserInterface> {
    const url = `${TARGET}1`;
    return of({
      'id': '1',
      'createdAt': '2021-03-18T18:01:26.303Z',
      'name': 'First1 Last1',
      'email': 'first1.last1@mail.com',
      'avatar': 'https://randomuser.me/api/portraits/men/1.jpg',
    });
    return this.httpClient.get<UserInterface>(url)
      .pipe(
        catchError(err => throwError(err)),
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
