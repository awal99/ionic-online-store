import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ArraySortPipe } from "../../pipes/arraySort";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'cart.html',
})
export class CartPage {

  allItems:boolean;

  products: Array<any>;
  selectedItems:any[];
  subtotals:number;
  total:number;

  constructor(public navCtrl: NavController) {
    this.allItems=false;
    this.subtotals=0;
    this.selectedItems = [];    

    this.products=[
       
          {
            storename:"melcome",storeid:"0022",id:"001",
            details:[
              {id:"001",name:"ab",price:12.00,pid:"22w",disc:"samsung latest ssd 12GB Laptop with dual battery"},
              {id:"002",name:"abc",price:13.00,pid:"22kw",disc:"samsung latest ssd 12GB Laptop with dual battery"},
            ]
          },
        
        
          {
           storename:"fosmoul",storeid:"333",id:"002",
           details:[
            {name:"abcd",pid:"22olp"},
            {name:"abcgg",pid:"22kwyji"},
           ]
          }
        
      
    ];

  }

  onAllSelected(param:String,id:string){
      if(this.products[id].storeid==param && this.products[id].id == true){
      //if clicked and selected then all products from this store should be selected
      for(let d of this.products[id].details){
            console.log(d.pid);
            this.selectedItems.push(d.pid);
            d.id=true;
            this.subtotals =+ d.price;
      }
    }else{
      for(let d of this.products[id].details){
            console.log(d.pid);
            this.selectedItems.pop();
            d.id=false;
            this.subtotals =+ d.price;
        }
      }
  }


  onSelected(param:String){

  }

}
