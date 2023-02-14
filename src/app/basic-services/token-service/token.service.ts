import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token : String = "";
  hasToke():boolean{
    return this.token != ""
  }

  getToken(){
    return this.token
  }

  setToken(token: String){
    this.token=token
  }

  constructor() { }
}
