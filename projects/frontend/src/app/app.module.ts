import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  FirebaseModule,
} from 'cart-firebase';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping/shopping.module';
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
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    ShoppingModule,
    StoreModule.forRoot({ 'shopping': reducer }),
    StoreDevtoolsModule.instrument({
      name: 'shopping-cart',
      maxAge: 25,
    }),
    EffectsModule.forRoot([Effects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
