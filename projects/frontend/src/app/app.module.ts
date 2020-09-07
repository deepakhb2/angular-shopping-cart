import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule
} from '@nebular/theme';

import {
  FirebaseModule,
} from 'cart-firebase';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping/shopping.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
