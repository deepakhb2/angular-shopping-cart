import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { AuthGuardService } from 'cart-firebase';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/carts',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren:  () => import(`cart-firebase`).then(m => m.FirebaseModule), //'./firebase/firebase.module#FirebaseModule',
    data: {
      reuseRoute: true,
    },
  },
  {
    path: 'carts',
    loadChildren: './cart/cart.module#CartModule',
    data: {
      reuseRoute: true,
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
