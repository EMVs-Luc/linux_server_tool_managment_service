import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private url :String = "http://192.168.42.129:8080/"

  getUrl() : String {
    return this.url
  }

  constructor() { }
}
