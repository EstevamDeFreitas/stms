import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  getMyLoans(): Observable<any>{
    return this.http.get(`${environment.apiUrl}my/loans`)
  }

  getAvailableLoans(): Observable<any>{
    return this.http.get(`${environment.apiUrl}types/loans`)
  }

  takeALoan(type : string) : Observable<any>{
    return this.http.post<null>(`${environment.apiUrl}my/loans?type=${type}`,null);
  }
}
