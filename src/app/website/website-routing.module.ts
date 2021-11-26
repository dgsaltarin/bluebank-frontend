import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {ConsultBalanceComponent} from "./consult-balance/consult-balance.component";
import {AddComponent} from "./add/add.component";
import {SubtractComponent} from "./subtract/subtract.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'consult-balance',
    component: ConsultBalanceComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'subtract',
    component: SubtractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
