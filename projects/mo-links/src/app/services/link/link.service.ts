import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TARGET } from '../../const/enviromets';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LinkInterface } from '../../interfaces/link-interface';

@Injectable()
export class LinkService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  postNewLink(link: LinkInterface): Observable<LinkInterface> {
    const url = `${TARGET}links`;
    return this.httpClient.post<LinkInterface>(url, link)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  getLinks(): Observable<LinkInterface[]> {
    const url = `${TARGET}links`;
    return this.httpClient.get<LinkInterface[]>(url)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  deleteLink(id: string): Observable<LinkInterface> {
    const url = `${TARGET}links`;
    return this.httpClient.delete<LinkInterface>(url)
      .pipe(
        catchError(err => throwError(err))
      );
  }

}
