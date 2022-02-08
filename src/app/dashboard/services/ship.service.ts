import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ship } from '../models/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient) { }

  getMyShips() : Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}my/ships`);
  }

  getShip(id : string) : Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}my/ships/${id}`);
  }
}
