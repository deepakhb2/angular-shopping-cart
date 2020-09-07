import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

import { FirestoreService } from 'cart-firebase'
import { Item } from 'cart-firebase';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(
    private authService: NbAuthService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.getCollection('items').subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Item;
      })
    });
  }

}
