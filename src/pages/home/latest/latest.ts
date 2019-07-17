import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailsPage } from '../../product-details/product-details';

@IonicPage()
@Component({
  selector: 'page-latest',
  templateUrl: 'latest.html',
})
export class LatestPage {


  categories: Array<{name:String,imgUrl:any}>;
  products: Array<{name:string,price:number,imgUrl:any}>;
  pagetitle:String;
  showtitle=true;
  enableSearch = false

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pagetitle="Latest Products";
  

   this.categories=[
  { name:'Electronics',imgUrl:'assets/images/eletronics.jpeg'},
  { name:'For Men',imgUrl:'assets/images/formen.jpg'},
  { name:'For Ladies',imgUrl:'assets/images/forladies1.jpg'},
  { name:'Cosmetics',imgUrl:'assets/images/cosmetics.jpg'},
  { name:'Phones and Accessories',imgUrl:'assets/images/phoneAccessories.png'},
  { name:'Auto-Mobile and Accessories', imgUrl:'assets/images/automobile.jpg'}

  ];

  this.products=[
    { name:'samsung 3.0 External Hard drive',price:500.00,imgUrl:'assets/productsimgs/hd1.jpeg'},
    { name:'HP Pavilion cc',price:2500.00,imgUrl:'assets/productsimgs/pavilioncc.png'},
    { name:'Toshiba 2.0/3.0 External Hard Drive',price:560.00,imgUrl:'assets/productsimgs/hd2.jpeg'},
    { name:'Microsoft Surf',price:2800.00,imgUrl:'assets/productsimgs/microsoft_Surf.png'},
    { name:'MacBook Pro',price:3000.00,imgUrl:'assets/productsimgs/macbookpro.png'},
    { name:'samsung vision',price:2460.00,imgUrl:'assets/productsimgs/svision.png'},
    { name:'Lenovo high-tech',price:3000.00,imgUrl:'assets/productsimgs/high-tech.png'}
  ];

  }



  productsDetails(id){
    this.navCtrl.push(ProductDetailsPage);
  }

  showSearch(){
    this.enableSearch = true;
    this.showtitle=false;
  }

onInput(event) {

}

onCancel(event) {

}
}
