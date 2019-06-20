import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  selectedProduct;
  constructor(private router: ActivatedRoute, private getDataService: GetDataService) {
    this.router.params.subscribe(params => {
      console.log('Params id', params.id);
      this.selectedProduct = this.getDataService.getProductById(params.id);
    });
   }

  ngOnInit() {

  }

  addToCart(item) {
    this.getDataService.addToCart(item);
  }

}
