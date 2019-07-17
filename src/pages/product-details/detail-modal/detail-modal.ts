import { Component } from '@angular/core';
import { IonicPage,ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-modal',
  templateUrl: 'detail-modal.html',
})
export class DetailModalPage {
  myParam: String;

  constructor(public viewCtrl: ViewController,public navParams: NavParams) {
    this.myParam = navParams.get('control-data');
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
