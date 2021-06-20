import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppConstant } from '../common/global-constants';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api_url: string;
  appendPoint: string;
  deviceEndPoint: string;
  userApiEndPoint: string;
  constructor(private httpClient: HttpClient) {
    this.api_url = AppConstant.API_ENDPOINT;
    this.appendPoint = this.api_url;
    this.userApiEndPoint = this.appendPoint + '/users?page=';
  }
  getUser(page){
        return this.httpClient.get(this.userApiEndPoint + page).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(ex: HttpErrorResponse) {
    if (ex.error instanceof ErrorEvent) {
      console.log("client side error", ex.message);
    } else {
      console.log("server side error", ex.message);
    }
    return throwError('something went wrong');
  }
}

