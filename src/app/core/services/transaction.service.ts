import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../models/account.model";
import {environment} from "../../../environments/environment";
import {Transaction} from "../models/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  addMoney(transaction: Transaction): Observable<any> {
    return this.http.post<Account>(`${environment.API_BASE_URL}/transaction/add`, transaction);
  }

  subtractMoney(transaction: Transaction): Observable<any> {
    return this.http.post<Account>(`${environment.API_BASE_URL}/transaction/subtract`, transaction);
  }
}
