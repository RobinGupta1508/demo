import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  public productList = [];

  public searchText;
  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    //search API
    //https://api.bestbuy.com/v1/products(longDescription=refrigerator*)?format=json&show=sku,name,salePrice,description,color,customerTopRated,images&pageSize=12&page=1&apiKey=1Jk5hFqcjBSsbdjAnAPpDA8B
    
    //get Product
    this.httpClient.get('https://api.bestbuy.com/v1/products(type=movie)?format=json&show=sku,name,salePrice,description,color,customerTopRated,images&pageSize=12&page=1&apiKey=1Jk5hFqcjBSsbdjAnAPpDA8B')
      .subscribe((data: any) => {
        console.log('product list', data);
        this.productList = data.products;
      });
  }

}
