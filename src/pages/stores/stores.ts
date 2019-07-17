import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorePage } from '../store/store';
import { ProductDetailsPage } from '../product-details/product-details';

@IonicPage()
@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {

  //the store array contains three best selling products of the store 
  //the visit store link bellow the card navigates the individual store
  store:Array<{name:string,logo:string,imgs:{img1:String,img2:String,img3:String}}>;
  categories:Array<{name:String,id:number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.store=[
      {name:"Melcome Ghana Ltd.",logo:"assets/productsimgs/microsoft_Surf.png",
        imgs:{img1:"assets/productsimgs/macbookpro.png",img2:"assets/productsimgs/microsoft_Surf.png",img3:"assets/productsimgs/microsoft_Surf.png"}
      },
      {name:"Fosmoul Ghana Ltd.",logo:"assets/productsimgs/svision.png",
        imgs:{img1:"assets/productsimgs/microsoft_Surf.png",img2:"assets/productsimgs/svision.png",img3:"assets/productsimgs/svision.png"}
      }

    ];

    this.categories=[
      { name:'All Categories',id:0},
      { name:'Electronics',id:1},
      { name:'For Men',id:2},
      { name:'For Ladies',id:3},
      { name:'Cosmetics',id:4},
      { name:'Phones and Accessories',id:5},
      { name:'Auto-Mobile and Accessories', id:6}
    ]
  }

  viewSingleStore(id){
    this.navCtrl.push(StorePage);
  }

  gotoProductDetails(id){
    this.navCtrl.push(ProductDetailsPage);
  }

  
}
