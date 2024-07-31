// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-viewproduct',
//   standalone: true,
//   imports: [],
//   templateUrl: './viewproduct.component.html',
//   styleUrl: './viewproduct.component.css'
// })
// export class ViewproductComponent {

// }

 
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { ButtonComponent } from "../../button/button.component";
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../../ui/cards/cards.component';
import { HomeComponent } from '../home/home.component';
import { NgIf } from '@angular/common';
 
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [ButtonComponent, CardsComponent, HomeComponent, NgIf],
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
 
export class ViewProductComponent{
 
  // @Input() text: string = ''
  @Input() item: Product = {} as Product
  @Output() btnClick = new EventEmitter<Product>();
  emitEvent(){
    this.btnClick.emit(this.item);
  }
  product: Product | undefined;
 
  constructor(private route: ActivatedRoute) { }
 
  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        this.item = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
 
}
