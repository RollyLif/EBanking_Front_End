import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  public getAccount(accountId : string, page : number, size: number){
    return this.http.get(environment.backendhost+"/accounts/"+accountId+"pageOperations?page="+page+"&size="+size);
  }
}
