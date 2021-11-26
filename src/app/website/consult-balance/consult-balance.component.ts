import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../core/services/account.service";

@Component({
  selector: 'app-consult-balance',
  templateUrl: './consult-balance.component.html',
  styleUrls: ['./consult-balance.component.css']
})
export class ConsultBalanceComponent implements OnInit {

  formBalance: FormGroup = this.formBuilder.group({
    accountNumber: ['', [Validators.required]],
    balance: ['', []]
  })

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  get accountNumber(): AbstractControl { return this.formBalance.controls['accountNumber']}
  get balance(): AbstractControl { return this.formBalance.controls['balance']}

  consultBalance(): void {
    this.accountService.consultBalance(this.accountNumber.value).subscribe(balance => this.balance.setValue(balance));
  }
}
