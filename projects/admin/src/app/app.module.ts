import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';

import { FirebaseModule } from './firebase/firebase.module';
import { CartModule } from './cart/cart.module';
import { AuthGuardService } from './auth/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthStateComponent } from './components/auth-state/auth-state.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthStateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    CartModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

