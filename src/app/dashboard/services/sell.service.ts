import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SellOrder } from '../models/sellOrder';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private http : HttpClient) { }

  sellItem(sell : SellOrder) : Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}my/sell-orders`, { shipId : sell.shipId, good : sell.good, quantity : sell.quantity });
  }
}
