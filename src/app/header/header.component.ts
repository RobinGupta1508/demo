import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText = '';
  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
  }

  searchItem() {
    this.getDataService.getSearchproduct(this.searchText);
  }

}
