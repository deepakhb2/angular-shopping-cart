import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';

import { environment } from './../environments/environment';

import { FirebaseModule } from 'cart-firebase';
import { CartModule } from './cart/cart.module';
import { AuthGuardService } from './services/auth-guard.service';
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
    AngularFireModule.initializeApp(environment.fireBase),
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

