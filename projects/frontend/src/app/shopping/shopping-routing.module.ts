import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {}
