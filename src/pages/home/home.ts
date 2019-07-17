import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { FlashHomePage } from './flashdeals/flashhome';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { BrandsPage } from './brands/brands';
import { LatestPage } from './latest/latest';
import { StoresPage } from '../stores/stores';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //@ViewChild(Nav) navCtrl:Nav;

  //junk data for testing 
  images: Array<{name:string,url:any}>;
  products: Array<{id:number,name:string,price:number,imgUrl:any}>;
  categories: Array<{name:String,imgUrl:any}>;
  brands: Array<{name:String,imgUrl:any}>;

  pagetitle:String;

  constructor(public navCtrl:NavController,public globe:GlobalvarsProvider) {
     //populating junk data
     this.pagetitle="Home";
    

    this.images=[
      { name:'flashdeals',url:'/assets/images/flash.jpeg'},
      { name:'latestproducts',url:'/assets/images/latest.jpg'},
      { name:'umaylove',url:'/assets/images/umaylove.jpeg'}
    ];

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

    this.brands=[
      { name:'Brand1',imgUrl:'assets/images/brand1.jpg'},
      { name:'Brand2',imgUrl:'assets/images/brand2.jpg'},
      { name:'Brand3',imgUrl:'assets/images/brand3.png'}
    ];

   
  }

  flashMoreClick(){
    this.navCtrl.push(FlashHomePage);
  }
 
  brandsClick(){
    this.navCtrl.push(BrandsPage);
  }

  latestProductsClick(param1:String){
    this.navCtrl.push(LatestPage);
  }

  storesClick(){
    this.navCtrl.push(StoresPage);
  }
  productsDetails(id){
    this.navCtrl.push(ProductDetailsPage);
  }

  onInput(event) {

  }

  onCancel(event) {

  }

}
