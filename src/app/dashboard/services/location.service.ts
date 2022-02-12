import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiRoute = environment.apiUrl + 'locations';

  constructor(private http : HttpClient) { }

  getMarketPlaceInfo(location : string):Observable<any>{
    return this.http.get<any>(`${this.apiRoute}/${location}/marketplace`)
  }

  getInfo(){
    
  }
}
