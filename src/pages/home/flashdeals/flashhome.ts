import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { GlobalvarsProvider } from '../../../providers/globalvars/globalvars';
import { ProductDetailsPage } from '../../product-details/product-details';


@Component({
  selector: 'page-flashhome',
  templateUrl: 'flashhome.html'
})
export class FlashHomePage {
    
  //categories: Array<{name:string}>;
   categories: Array<{name:String,imgUrl:any}>;
   pagetitle:String;
   showtitle=true;
   enableSearch = false

    constructor(public nav:NavController, public globe:GlobalvarsProvider){
        
        this.pagetitle="Flash Deals";
        // globe.showtitle=true;
        // globe.enableSearch=false;
       // this.categories = navp.get('categories');

       this.categories=[
      { name:'Electronics',imgUrl:'assets/images/eletronics.jpeg'},
      { name:'For Men',imgUrl:'assets/images/formen.jpg'},
      { name:'For Ladies',imgUrl:'assets/images/forladies1.jpg'},
      { name:'Cosmetics',imgUrl:'assets/images/cosmetics.jpg'},
      { name:'Phones and Accessories',imgUrl:'assets/images/phoneAccessories.png'},
      { name:'Auto-Mobile and Accessories', imgUrl:'assets/images/automobile.jpg'}

    ];
    }


    loadCategory(value){

    }

    productsDetails(id){
      this.nav.push(ProductDetailsPage);
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

