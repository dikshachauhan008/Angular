import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name="Diksha Chauhan";
  addToCart:number =0;
  product = {
   name:'iphoneXR',
   price:999,
   color: "Red",
   discount:7.5,
   inStock :0,
   pImage: "assets/images/iphone.jpeg"
  }

  getDiscountedPrice(){
   return this.product.price- (this.product.price * this.product.discount /100)
  }

  onNameChange(event: any){
    // console.log(event.target.value);
    // this.name=event.target.value;
   }

   decAddToCart(){
   this.addToCart --;
   console.log(this.addToCart);
   }
   incAddToCart(){
    this.addToCart ++;
    console.log(this.addToCart);
    }
}
