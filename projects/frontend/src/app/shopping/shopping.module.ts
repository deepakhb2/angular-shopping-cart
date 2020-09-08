import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module'
import { ItemListComponent } from './components/item-list/item-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    ItemListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
