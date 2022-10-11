import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountDetails } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  public getAccount(accountId : string, page : number, size: number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendhost+"/accounts/"+accountId+"/pageOperation?page="+page+"&size="+size);
  }
}
