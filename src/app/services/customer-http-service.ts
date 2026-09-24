import { Injectable } from '@angular/core';
import { IPCustomerType } from '../classes/IPCustomerType';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
    private _url: string = '/assets/data/customers.json';
    constructor(private _http: HttpClient) { }

    getCustomers(): Observable<IPCustomerType[]> {
        return this._http.get<IPCustomerType[]>(this._url);
    }

    getCustomersHandleError(): Observable<IPCustomerType[]> {
        return this._http.get<IPCustomerType[]>(this._url)
        .pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    handleError(error: HttpErrorResponse) {
        return throwError(() => new Error(error.message));
    }
}