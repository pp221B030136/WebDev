import { Component, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  share(link: any) {
    let whatsappLink = 'whatsapp://send?text=' + link;
    window.open(whatsappLink);
  }

  like() {
    this.product.likes++;
  }

  remove() {
   let p = products.find(item => item.id === this.product.id)
   let index = p ? products.indexOf(p) : -1
   products.splice(index, 1)
  }
}
