import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { empty } from 'rxjs/Observer';



@IonicPage()
@Component({
  selector: 'page-select-details',
  templateUrl: 'select-details.html',
})
export class SelectDetailsPage {

  myParam:any;
  jon:true;
  sizes:Array<{name:String,value:boolean}>;
  colors: Array<{name:String,img:String}>;

  selectedS:String;
  SelectedC:String;
  selectedDetails:String;
  selectedQuantity:number;
  subtotal:number;
  shipping:number;
  

  constructor(public navCtrl: NavController,public viewCtrl:ViewController, public navParams: NavParams) {
   this.myParam=navParams.get("control-data");
   this.selectedQuantity=0;
   this.subtotal= 24.00;
   this.shipping= 0;

   this.sizes=[
     {name:"size10",value:false},
     {name:"size12",value:false},
     {name:"size14",value:false}
   ]
   this.sizes[0].value=true;
   this.selectedS = this.sizes[0].name;

   this.colors=[
     {name:"red",img:"assets/productsimgs/high-tech.png"},
     {name:"gold",img:"assets/productsimgs/high-tech.png"},
     {name:"blue",img:"assets/productsimgs/high-tech.png"}
   ]
   this.SelectedC = this.colors[0].name;

  }



  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSizeSelected(selected:String,index:number){
    
    //check to see whether checkbox is selected or unselected
    //if selected unselect all other checkboxes
    for(let size of this.sizes){
      if(size.name==selected && size.value==true){
        //it means checkbox is selected
        //store selected checkbox in selectedS before checking for other selected.
        this.selectedS=selected;
        //unselect other checkboxes
       for(let size1 of this.sizes){
         if(size1.value==true && size1.name != selected){
           size1.value=false;
           console.log(size1.name+" "+"unselected");
           this.selectedS=size.name;
         }

       }
       
      }
    }
   
    console.log(this.selectedS+" "+"selected");
  }

  onIncrease(){
    this.selectedQuantity++;
  }
  onDecrease(){
    this.selectedQuantity--;
    if(this.selectedQuantity<0){
      this.selectedQuantity=0;
    }
  }
 
  onColorClick(index:number){
    let selectedColor:String;
    selectedColor = this.colors[index].name;

    this.SelectedC = selectedColor;
    console.log(selectedColor);
  }

  onContinue(){
    let data: any[];
    data=[];
    data.push(this.selectedS,this.SelectedC,this.selectedQuantity);
    this.viewCtrl.dismiss(data);
  }
}
