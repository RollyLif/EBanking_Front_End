import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountDetails } from '../model/account.model';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountFormGroup! : FormGroup;
  currentPage : number = 0;
  pageSize : number = 5;
  accountObservable! : Observable<AccountDetails>
  operationFormGroup! : FormGroup

  constructor(private fb : FormBuilder, private accountService : AccountsService) { }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId : this.fb.control(''),
    });

    this.operationFormGroup=this.fb.group({
      accountDestination : this.fb.control(null),
      operationType : this.fb.control(null),
      amount : this.fb.control(0),
      description : this.fb.control(null)
    })
  }

  handleSearchAccount() {
    let accountId : string = this.accountFormGroup.value.accountId;
    this.accountObservable=this.accountService.getAccount(accountId, this.currentPage, this.pageSize);
  }

  handleAccountOperation() {
    
  }

  gotoPage(page: number) {
    this.currentPage = page;
    this.handleSearchAccount()
  }

}
