import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailsPage } from '../../product-details/product-details';

@IonicPage()
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage {

  brands: Array<{name:String,imgUrl:any}>;
  bestSelling: Array<{name:String,price:number,imgUrl:any}>;
  pagetitle:String;
  showtitle=true;
  enableSearch = false


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pagetitle = "Brands";

    this.brands=[
      { name:'Brand1',imgUrl:'assets/images/brand1.jpg'},
      { name:'Brand2',imgUrl:'assets/images/brand2.jpg'},
      { name:'Brand3',imgUrl:'assets/images/brand3.png'}
    ];

    this.bestSelling=[
      { name:'HP Pavilion cc',price:2500.00,imgUrl:'assets/productsimgs/pavilioncc.png'},
      { name:'Toshiba 2.0/3.0 External Hard Drive',price:560.00,imgUrl:'assets/productsimgs/hd2.jpeg'},
      { name:'Microsoft Surf',price:2800.00,imgUrl:'assets/productsimgs/microsoft_Surf.png'},
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
