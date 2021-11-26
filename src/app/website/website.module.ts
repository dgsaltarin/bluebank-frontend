import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ConsultBalanceComponent } from './consult-balance/consult-balance.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    HomeComponent,
    CreateAccountComponent,
    ConsultBalanceComponent,
    AddComponent,
    SubtractComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class WebsiteModule { }
