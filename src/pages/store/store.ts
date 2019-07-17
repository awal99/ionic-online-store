import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';

/**
 * 
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  imgUrl:string;
  discount:Array<{name:string,percentOff:number,imgUrl:string}>;
  store:Array<{name:string,logo:string}>;
  storeProducts:Array<{name:String,imgUrl:String,price:number}>;
  categories: Array<{name:String,imgUrl:any}>;
  products: Array<{id:number,name:string,price:number,imgUrl:any}>;

  //navParams would contain an id of the store to load.
  //in the constructor a query to the database would load information of the store using the store_id.
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.store=[
      {name:"Melcome Ghana Ltd.",logo:"assets/productsimgs/microsoft_Surf.png"},
      {name:"Fosmoul Ghana Ltd.",logo:"assets/productsimgs/svision.png"}

    ]; 

    this.discount=[
      {name:"Big X'Mas",percentOff:15,imgUrl:'assets/images/latest.jpg'}
    ]

    this.products=[
      { id:1,name:'samsung 3.0 External Hard drive',price:500.00,imgUrl:'assets/productsimgs/hd1.jpeg'},
      { id:2,name:'HP Pavilion cc',price:2500.00,imgUrl:'assets/productsimgs/pavilioncc.png'},
      { id:3,name:'Toshiba 2.0/3.0 External Hard Drive',price:560.00,imgUrl:'assets/productsimgs/hd2.jpeg'},
      { id:4,name:'Microsoft Surf',price:2800.00,imgUrl:'assets/productsimgs/microsoft_Surf.png'},
      { id:5,name:'MacBook Pro',price:3000.00,imgUrl:'assets/productsimgs/macbookpro.png'},
      { id:6,name:'samsung vision',price:2460.00,imgUrl:'assets/productsimgs/svision.png'},
      { id:7,name:'Lenovo high-tech',price:3000.00,imgUrl:'assets/productsimgs/high-tech.png'}
    ];
    
    this.categories=[
      { name:'Electronics',imgUrl:'assets/images/eletronics.jpeg'},
      { name:'For Men',imgUrl:'assets/images/formen.jpg'},
      { name:'For Ladies',imgUrl:'assets/images/forladies1.jpg'},
      { name:'Cosmetics',imgUrl:'assets/images/cosmetics.jpg'},
      { name:'Phones and Accessories',imgUrl:'assets/images/phoneAccessories.png'},
      { name:'Auto-Mobile and Accessories', imgUrl:'assets/images/automobile.jpg'}

    ];

    this.imgUrl="assets/images/brand1.jpg"
  }

  productsDetails(id){
    this.navCtrl.push(ProductDetailsPage);
  }
 
}
