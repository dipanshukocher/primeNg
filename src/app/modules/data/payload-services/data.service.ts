import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  get(url: string): Observable<any> {
    return this._http.get(url).pipe(
      map(res => {
        return res;
      }), catchError(error => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }
  post(url: string, data: any): Observable<any> {
    return this._http.post(url, data).pipe(
      map(res => {
        return res;
      }), catchError(error => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  put(url: string, data: any): Observable<any> {
    return this._http.put(url, data).pipe(
      map(res => {
        return res;
      }), catchError(error => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  delete(url: string): Observable<any> {
    return this._http.delete(url).pipe(
      map(res => {
        return res;
      }), catchError(error => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  handleError(error: HttpErrorResponse | any) {
    console.log(error);
    if (error.status === 401 || error.status === 417 || error.status === 0) {
    } else if (error.status === 400) {
    } else if (error.status === 403) {
    } else if (error.status === 404) {
    }
    return error;
  }
}
