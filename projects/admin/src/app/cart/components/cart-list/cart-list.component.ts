import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../firebase/services/firestore.service'
import { Cart } from '../../../firebase/models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  carts: Cart[];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.getCollection('carts').subscribe(data => {
      this.carts = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cart;
      })
    });
  }

}
