import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { AppConstant } from '../common/global-constants';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // tslint:disable-next-line:variable-name
  api_url: string;
  appendPoint: string;
  deviceEndPoint: string;
  loginEndPoint: string;
  constructor(private httpClient: HttpClient) {
    this.api_url = AppConstant.API_ENDPOINT;
    this.appendPoint = this.api_url;
    this.loginEndPoint = this.appendPoint + '/login';
  }
  // tslint:disable-next-line:typedef


  login(credentials) {
    let postData = {
      email: credentials.userId,
      password: credentials.pw,
    };
    return this.httpClient
      .post(this.loginEndPoint, postData)
      .pipe(map((response: any) => {
        console.log(response);
          return response;
      })).pipe(catchError(this.handleError));
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
