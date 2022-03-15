import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http : HttpClient) { }

  getSystemLocations(symbol : string) : Observable<any>{
    return this.http.get(`${environment.apiUrl}systems/${symbol}/locations`);
  }
}
