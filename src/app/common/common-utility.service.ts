import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilityService {

  constructor() { }

  cfn(value) {
    if (value != null && (value != "" || value !== "") && value != undefined) {
      return false;
    }
    return true;
  }
}
