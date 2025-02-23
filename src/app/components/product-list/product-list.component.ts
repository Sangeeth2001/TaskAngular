import { Component, OnInit } from '@angular/core';
import { ItemlistsService } from 'src/app/services/itemlists.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  categories!:any[];
  productlist!:any[];
  constructor(private itemslist:ItemlistsService){}
  ngOnInit(){
    this.category();
    this.products();
  }

  category(){
    this.itemslist.getitems().subscribe((list: any[]) => {
      this.categories = list;
      console.log(this.category);
    });
  }

  products(){
    this.itemslist.getproductlist().subscribe((prod:any[]) => {
      this.productlist = prod;
      console.log(this.productlist);
    });
  }
}
