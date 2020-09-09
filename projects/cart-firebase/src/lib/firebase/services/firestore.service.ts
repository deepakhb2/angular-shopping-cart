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
    public firestore: AngularFirestore
  ) { }

  getCollection(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  getDoc(collection: string, docID: string) {
    return this.firestore.doc(collection+'/'+docID).snapshotChanges();
  }

  createDoc(collection: string, doc: any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection(collection)
            .add(doc)
            .then(res => {}, err => reject(err));
    });
  }

  updateDoc(collection: string, doc: any) {
    return this.firestore
       .collection(collection)
       .doc(doc.id)
       .set(doc, { merge: true });
  }
}
