import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from "@angular/fire/firestore";

import {
  NbPasswordAuthStrategy,
  NbAuthModule
} from '@nebular/auth';
import {
  NbFirebaseAuthModule,
  NbFirebasePasswordStrategy
} from '@nebular/firebase-auth';

import { FirebaseRoutingModule } from './firebase-routing.module';
import { environment } from './../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NbFirebaseAuthModule,
    NbAuthModule.forRoot({
     strategies: [
       NbFirebasePasswordStrategy.setup({
         name: 'email',
       }),
     ],
      forms: {},
    }),
    HttpClientModule
  ]
})
export class FirebaseModule { }
