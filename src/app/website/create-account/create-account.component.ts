import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../core/services/account.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }

  formCreateAccount: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    initialBalance: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  get userName(): AbstractControl {
    return this.formCreateAccount.controls['userName']
  }

  get initialBalance(): AbstractControl {
    return this.formCreateAccount.controls['initialBalance']
  }

  public createAccount(): void {
    this.accountService.createAccount(this.formCreateAccount.value);
  }

}
