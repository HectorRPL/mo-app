import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { TARGET } from '../../const/enviromets';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LinkInterface } from '../../interfaces/link-interface';

@Injectable()
export class LinkService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  postNewLink(link: LinkInterface): Observable<LinkInterface> {
    const url = `${TARGET}links`;
    return this.httpClient.post<LinkInterface>(url, link)
      .pipe(
        catchError(err => throwError(err)),
      );
  }

  getLinks(): Observable<LinkInterface[]> {
    const url = `${TARGET}links`;

    return of([
      {
        'id': '1',
        'createdAt': '2021-03-18T15:11:43.458Z',
        'url': 'https://daphne.com',
        'name': 'rodger.name',
      },
      {
        'id': '2',
        'createdAt': '2021-03-18T18:01:24.837Z',
        'url': 'http://ferne.biz',
        'name': 'german.name',
      },
    ]);

    return this.httpClient.get<any>(url)
      .pipe(
        tap(value => {
          console.log({value});

          const response: string = JSON.stringify(value);
          console.log({response});

          return value;
        }),
        catchError(err => throwError(err)),
      );
  }

  deleteLink(id: string): Observable<LinkInterface> {
    const url = `${TARGET}links/${id}`;
    return this.httpClient.delete<LinkInterface>(url)
      .pipe(
        catchError(err => throwError(err)),
      );
  }

}
