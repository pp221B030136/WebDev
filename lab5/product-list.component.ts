import { Component, DoCheck, IterableDiffers, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, DoCheck {
  products : Product[] = [];
  cat = null;
  iterableDiffer;
  constructor(private route: ActivatedRoute, private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create();
  }
  

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.cat = params['cat']; 
       this.products = this.cat ? products.filter(item => item.category === this.cat) : products
    });
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(products);
    if (changes) {
      this.products = this.cat ? products.filter(item => item.category === this.cat) : products
    }
}
}

