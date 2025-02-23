import { Component, OnInit } from '@angular/core';
import { ItemlistsService } from 'src/app/services/itemlists.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  productdetails!:any[];
constructor(private itemslist:ItemlistsService){}
  ngOnInit(): void {
    
  }
}
