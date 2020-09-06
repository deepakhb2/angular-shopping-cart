import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { AuthGuardService } from './../services/auth-guard.service';
import { CartListComponent } from './components/cart-list/cart-list.component';

const routes: Routes = [
  {
    path: '',
    component: CartListComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
