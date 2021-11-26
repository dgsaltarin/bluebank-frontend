import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../core/services/transaction.service";
import {Transaction} from "../../core/models/transaction.model";

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent implements OnInit {

  transactionForm: FormGroup = this.formBuilder.group({
    accountNumber: ['', [Validators.required]],
    amount: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  get accountNumber(): AbstractControl { return this.transactionForm.controls['accountNumber']}
  get amount(): AbstractControl { return this.transactionForm.controls['amount']}

  subtractMoney(): void {
    let transaction: Transaction = {} as Transaction;
    transaction.accountNumber = this.accountNumber.value;
    transaction.amount = this.amount.value;
    transaction.operation = 'SUBTRACT';
    this.transactionService.subtractMoney(transaction).subscribe();
  }
}
