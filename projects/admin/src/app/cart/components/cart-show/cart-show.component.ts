import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirestoreService } from 'cart-firebase'
import { Item } from 'cart-firebase';

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
      // @ts-ignore
      this.items = data.payload.data().items
    });
  }

}
