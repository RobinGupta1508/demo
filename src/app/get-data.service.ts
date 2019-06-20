import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  observer: Observer<any>;
  productList = [];
  mainProductList = [];

  cartData = [];

  constructor(private http: HttpClient) { }

  getMainProductList() {
    if (this.mainProductList && this.mainProductList.length > 0) {
      const myObservable = Observable.create((observer: Observer<any>) => {
        this.observer = observer;
        this.observer.next(this.mainProductList);
      });
      return myObservable;
    } else {
      let url = 'https://api.bestbuy.com/v1/products(type=movie)?format=json&show=sku,name,salePrice,description,manufacturer,weight,customerReviewCount,customerReviewAverage,images&pageSize=12&page=1&apiKey=1Jk5hFqcjBSsbdjAnAPpDA8B';
      const myObservable = Observable.create((observer: Observer<any>) => {
        this.observer = observer;
        this.http.get(url)
          .subscribe((data: any) => {
            this.productList = data.products;
            this.mainProductList = data.products;
            this.observer.next(data.products);
          });
      });
      return myObservable;
    }

  }


  getSearchproduct(searchText) {
    let url = `https://api.bestbuy.com/v1/products(name=${searchText}*)?format=json&show=sku,name,salePrice,longDescription,color,customerTopRated,images&pageSize=12&page=1&apiKey=1Jk5hFqcjBSsbdjAnAPpDA8B`;
    this.http.get(url)
      .subscribe((data: any) => {
        this.productList = data.products;
        this.observer.next(data.products);
      });
  }

  getProductById(id) {
    return this.productList.filter(product => product.sku == id)[0];
  }

  addToCart(item) {
    const existingItemIndex = this.productList.findIndex(product => product.sku == item.sku);
    if (this.productList[existingItemIndex].cartQuantity) {
      this.productList[existingItemIndex].cartQuantity = this.productList[existingItemIndex].cartQuantity + 1;
    } else {
      this.productList[existingItemIndex].cartQuantity = 1;
    }
    this.observer.next(this.productList);
    console.log('cart data', this.cartData);
  }

  getCartData() {
    return this.productList.filter(item => item.cartQuantity > 0)
  }
}
