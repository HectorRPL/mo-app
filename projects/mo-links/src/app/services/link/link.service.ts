import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TARGET } from '../../const/enviromets';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ListInterface } from '../../interfaces/list-interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  postNewLink(link: ListInterface): Observable<ListInterface> {
    const url = `${TARGET}links`;
    return this.httpClient.post<ListInterface>(url, link)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  getLinks(): Observable<ListInterface[]> {
    const url = `${TARGET}links`;
    return this.httpClient.get<ListInterface[]>(url)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  deleteLink(id: string): Observable<ListInterface> {
    const url = `${TARGET}links`;
    return this.httpClient.delete<ListInterface>(url)
      .pipe(
        catchError(err => throwError(err))
      );
  }

}
