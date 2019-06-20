import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private httpClient: HttpClient, private getDataService: GetDataService) { }
  public productList = [];

  public searchText;
  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.getDataService.getMainProductList()
      .subscribe(products => this.productList = products);
  }

  addToCart(item) {
    this.getDataService.addToCart(item);
  }

}
