import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {map, catchError } from "rxjs/operators";
import { AppConstant } from '../common/global-constants';
import { throwError } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  api_url: string;
  appendPoint: string;
  deviceEndPoint: string;
  CreateUsersEndPoint: string;
  patchUsersEndPoint:string;
  updateUserEndPoint:string;
  deleteUserEndPoint:string;
  constructor(private httpClient: HttpClient) {
    this.api_url = AppConstant.API_ENDPOINT;
    this.appendPoint = this.api_url;
    this.CreateUsersEndPoint = this.appendPoint + '/users';
    this.patchUsersEndPoint = this.appendPoint + '/users/2';
    this.updateUserEndPoint = this.appendPoint + '/users/2';
    this.deleteUserEndPoint = this.appendPoint + '/users/2';
  }
createUsers(userDetails){
  let postData = {
    name: userDetails.userName,
    job: userDetails.job,
  };
  return this.httpClient
    .post(this.CreateUsersEndPoint, postData)
    .pipe(map((response: any) => {
        return response;
    })).pipe(catchError(this.handleError));
}
onPatchofusers(userDetails:Users){

  return this.httpClient
    .patch(this.patchUsersEndPoint, userDetails)
    .pipe(map((response: any) => {
        return response;
    })).pipe(catchError(this.handleError));
}
onUpdateOfUsers(userDetails:Users){
  let postData = {
    name:userDetails.name,
    job:userDetails.job
  }
  return this.httpClient
  .put(this.updateUserEndPoint, postData)
  .pipe(map((response: any) => {
      return response;
  })).pipe(catchError(this.handleError));
}

onDeleteOfusers(){
  return this.httpClient
  .delete(this.deleteUserEndPoint)
  .pipe(map((response: any) => {
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

