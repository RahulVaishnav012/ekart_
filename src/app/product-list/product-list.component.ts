import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'product-list',
  standalone: true, 
  imports: [SearchComponent,CommonModule,ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  addToCart:number=0;
  name:string = "Iphone 15";
  price:number = 977;
  color:string = "Matte Black";
  //We can also create a object inside this.
  fullName = "Jhon Doe";
  product ={
    name1: 'Iphone X',
    price1: 999,
    color1: "Red",
    discount: 8.7,
    inStock :10,
    is_in_inventory:false
     
  }
  getDiscount(){
    return this.product.price1 - (this.product.price1 * this.product.discount / 100);
  }
  onNameChange(event:any){
    //this.fullName ="Dev";
    // console.log(event);
    //console.log(event.target.value);
    this.fullName = event.target.value;
    }

    decrementKart(){
      if(this.addToCart>0)
      this.addToCart--;
    }
    // Here we can also disable the buttons if the product is not in stock
    incrementKart(){
      if(this.addToCart < this.product.inStock)
      this.addToCart++;
    }

    //Using @input decorator
    currentItem = "television";
    myname ="rahul";

    //for @output decorator
    items=['item1','item2','item3','item4'];
    addItem(newItem:string){
      this.items.push(newItem);
    }
}
  