import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormGroup! : FormGroup;
  constructor(private fb: FormBuilder, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.newCustomerFormGroup=this.fb.group({
      name : this.fb.control("",[Validators.required, Validators.minLength(3)]),
      email : this.fb.control("", [Validators.required, Validators.email])
    });
  }

  handleSaveCustomer(){
    let customer:Customer=this.newCustomerFormGroup.value;
    this.customerService.saveCustomers(customer).subscribe({
      next: data =>{
        alert("Customer has been successfully saved!")
      },
      error : err => {
        console.log(err);
      }
    })

  }

}
