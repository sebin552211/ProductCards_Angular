// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Product } from '../../interface/product.interface';


// @Component({
//   selector: 'app-cards',
//   standalone: true,
//   imports: [],
//   templateUrl: './cards.component.html',
//   styleUrl: './cards.component.css'
// })
// export class CardsComponent {
//   @Input() product: Product = {
//     id: 0,
//     title: " ",
//     description: "",
//     thumbnail:"",
//     category: ""
//   };

//   @Output() myEvent = new EventEmitter()

//   alertEvent(){
//     this.myEvent.emit(this.product.title)
//   }
// }
 

import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { ButtonComponent } from "../../button/button.component";
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
 
  @Input() item:Product = {} as Product;
 
  @Output() btnClick = new EventEmitter<Product>();
  emitEvent(){
    this.btnClick.emit(this.item);
  }
 
  constructor(private router: Router){}
  goNextPage(){
    console.log(`Clicked on ${this.item.title}`);
    // this.router.navigate(['/product/id']);
    this.router.navigate([`/product/${this.item.id}`]);
  }
 
}
