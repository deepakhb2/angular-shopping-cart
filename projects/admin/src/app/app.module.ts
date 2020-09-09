import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';

import { FirebaseModule } from 'cart-firebase';

import { environment } from './../environments/environment';
import { CartModule } from './cart/cart.module';
import { AuthGuardService } from 'cart-firebase';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  reducer,
  Effects,
} from 'cart-firebase';

@NgModule({
  declarations: [
    AppComponent,
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
    NbButtonModule,
    StoreModule.forRoot({ 'shopping': reducer }),
    StoreDevtoolsModule.instrument({
      name: 'shopping-cart',
      maxAge: 25,
    }),
    EffectsModule.forRoot([Effects]),
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

