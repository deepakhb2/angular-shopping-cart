import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module'
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartShowComponent } from './components/cart-show/cart-show.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartShowComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
