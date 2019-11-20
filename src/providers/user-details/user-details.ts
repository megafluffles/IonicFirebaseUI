import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserDetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDetailsProvider {

  private user;

  constructor() {
    console.log('Hello UserDetailsProvider Provider');
    this.user = null;
  }

  public SetUser(user) {
    this.user = user;
  }

  public GetUser() {
    return this.user;
  }

}
