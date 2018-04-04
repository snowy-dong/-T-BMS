import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorage } from './common/session.storage';
/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  public Token:String = ''
  constructor(private sessionStorage:SessionStorage) {
  }
  public getAuthorizationToken():any {
    if(this.Token){
      console.log(this.Token)
      return this.Token;
    }else{
      return  this.sessionStorage.get('token');
    }

  }
  public setAuthorizationToken(token:string):void{
    this.sessionStorage.set('token', token);
    this.Token = token
  }
}
