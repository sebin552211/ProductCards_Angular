// import { Component, Input, input } from '@angular/core';
// import { CardsComponent } from "../cards/cards.component";
// import { Product } from '../../interface/product.interface';
// import { Category } from '../../interface/category.interface';


// @Component({
//   selector: 'app-card-list',
//   standalone: true,
//   imports: [CardsComponent],
//   templateUrl: './cardlist.component.html',
//   styleUrl: './cardlist.component.css'
// })
// export class CardListComponent {
//   categories: Category[] = [];


//   constructor() {
//     this.fetchData();
//   }

//   async fetchData() {
//     const url = 'https://dummyjson.com/products';
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       const data = await response.json();
//       const beautyProducts = data.products.filter((product: Product) => product.category === 'beauty');
//       const groceries = data.products.filter((product: Product) => product.category === 'groceries');
//       const electronics = data.products.filter((product: Product) => product.category === 'fragrances');
//       const furniture = data.products.filter((product: Product) => product.category === 'furniture');

//       this.categories = [
//         {
//           name: 'Beauty Products',
//           products: beautyProducts
//         },
//         {
//           name: 'Groceries',
//           products: groceries
//         },
//         {
//           name: 'Electronics',
//           products: electronics
//         },
//         {
//           name: 'Furniture',
//           products: furniture
//         }
//       ];
//     }
//     catch{
//       console.log("error")
//     }
//   }
//   handleEvent(event:string){
//     alert(event + " clicked")
//   }
//   }
