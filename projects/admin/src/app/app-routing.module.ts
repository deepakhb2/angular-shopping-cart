import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: './firebase/firebase.module#FirebaseModule',
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
