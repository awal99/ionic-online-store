import { Component } from '@angular/core';
import { IonicPage, NavController,  ModalController, NavParams } from 'ionic-angular';
import { DetailModalPage } from './detail-modal/detail-modal';
import { StorePage } from '../store/store';
import { SelectDetailsPage } from './select-details/select-details';
import { CheckoutPage } from '../checkout/checkout';


@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  products: Array<{id:number,name:string,price:number,imgUrl:any}>;
  bestSelling: Array<{name:String,price:number,imgUrl:any}>;
  selectedDetails:any[];

  selectedS:String;
  SelectedC:String;
  selectedQuantity:number;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
    this.selectedS="";
    this.SelectedC="Red";
    this.selectedQuantity=0;
   

    this.products=[
      { id:1,name:'samsung 3.0 External Hard drive',price:500.00,imgUrl:'assets/productsimgs/hd1.jpeg'},
      { id:2,name:'HP Pavilion cc',price:2500.00,imgUrl:'assets/productsimgs/pavilioncc.png'},
      { id:3,name:'Toshiba 2.0/3.0 External Hard Drive',price:560.00,imgUrl:'assets/productsimgs/hd2.jpeg'},
      { id:4,name:'Microsoft Surf',price:2800.00,imgUrl:'assets/productsimgs/microsoft_Surf.png'},
      { id:5,name:'MacBook Pro',price:3000.00,imgUrl:'assets/productsimgs/macbookpro.png'},
      { id:6,name:'samsung vision',price:2460.00,imgUrl:'assets/productsimgs/svision.png'},
      { id:7,name:'Lenovo high-tech',price:3000.00,imgUrl:'assets/productsimgs/high-tech.png'}
    ];

    this.bestSelling=[
      { name:'HP Pavilion cc',price:2500.00,imgUrl:'assets/productsimgs/pavilioncc.png'},
      { name:'Toshiba 2.0/3.0 External Hard Drive',price:560.00,imgUrl:'assets/productsimgs/hd2.jpeg'},
      { name:'Microsoft Surf',price:2800.00,imgUrl:'assets/productsimgs/microsoft_Surf.png'},
    ];
  }

  openHintModal() {
    this.openModal(DetailModalPage,"");
  }
  openContactModal() {
    this.openModal(DetailModalPage,"");
  }
  openSelectDetailsModal(){
   
    this.openModal(SelectDetailsPage,null);
  }
  openModal(pageName,data) {
    let chooseModal = this.modalCtrl.create(pageName, {'control-data':data}, { cssClass: 'inset-modal' });
      chooseModal.onDidDismiss(data =>{
        this.selectedDetails=[];
        this.selectedDetails = data;
      });
                  chooseModal.present();
                  

  }

  gotoStore(id){
    this.navCtrl.push(StorePage);
  }

  productsDetails(id){
    this.navCtrl.push(ProductDetailsPage);
  }

  openCheckout(){
    //navigates to the checkout
    this.navCtrl.push(CheckoutPage);
  }

  addToCart(){
    //displays an alert with options to continue or go to cart 
  }

}
