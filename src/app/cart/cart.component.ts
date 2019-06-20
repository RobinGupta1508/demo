import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData = [];
  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getCartData();
  }

  getCartData() {
    this.cartData = this.getDataService.getCartData();
  }

}
