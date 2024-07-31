// import { DatePipe, registerLocaleData } from '@angular/common';
// import { Component, LOCALE_ID } from '@angular/core';
// import localeEn from '@angular/common/locales/en'; // Correct import

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [DatePipe],
//   providers: [{ provide: LOCALE_ID, useValue: 'en-US' }], // Set the locale to American English
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   datetime = Date.now();

//   constructor() {
//     registerLocaleData(localeEn); // Register the locale data for English
//   }
// }

import { DatePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { Product } from '../../interface/product.interface';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, CardsComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  text = Date.now();
  // @Input() item: Product = {} as Product;
 
  categorizedProducts: { [key: string]: Product[]} = {};
 
  async ngOnInit() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      this.categorizeProducts(data.products);
      console.log(this.categorizedProducts);
    } catch (error) {
      console.log(error);
    }
  }
 
  categorizeProducts(products: Product[]) {
    this.categorizedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as { [key: string]: Product[] });
  }
  getCategories(): string[] {
    return Object.keys(this.categorizedProducts);
  }
 
  getProductsByCategory(category: string): Product[] {
    return this.categorizedProducts[category];
  }
 
  productSelected(product: Product){
    alert(`Product ${product.title} selected`);
  }
}

