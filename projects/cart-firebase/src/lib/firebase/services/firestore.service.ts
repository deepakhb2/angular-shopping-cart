import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import {
  Observable
} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  getCollection(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  getDoc(collection: string, docID: string) {
    return this.firestore.doc(collection+'/'+docID).snapshotChanges();
  }
}
