import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirestoreService } from '../../../firebase/services/firestore.service'
import { Item } from '../../../firebase/models/item.model';

@Component({
  selector: 'app-cart-show',
  templateUrl: './cart-show.component.html',
  styleUrls: ['./cart-show.component.scss']
})
export class CartShowComponent implements OnInit {
  items: Item[];

  constructor(
    private actRoute: ActivatedRoute,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    let cartId = this.actRoute.snapshot.params.id;
    this.firestoreService.getDoc('carts', cartId).subscribe(data => {
      this.items = data.payload.data().items
    });
  }

}
