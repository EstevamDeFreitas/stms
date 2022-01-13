import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getUser() : Observable<any>{
    return this.http.get(`${environment.apiUrl}my/account`);
  }

  static getToken():string | null{
    return localStorage.getItem('token');
  }

  static setToken(token : string){
    localStorage.setItem('token', token);
  }
}
