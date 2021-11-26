import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Account} from "../models/account.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  createAccount(account: Account): Observable<any> {
    console.log('enviando ')
    return this.http.post(`${environment.API_BASE_URL}/account`, account);
  }

  consultBalance(accountNumber: number): Observable<any> {
    return this.http.get<Account>(`${environment.API_BASE_URL}/account/${accountNumber}`);
  }
}
