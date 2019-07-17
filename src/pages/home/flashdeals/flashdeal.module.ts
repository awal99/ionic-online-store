
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashHomePage } from './flashhome';

@NgModule({
  declarations: [
    FlashHomePage,
  ],
  imports: [
    IonicPageModule.forChild(FlashHomePage),
  ],
  exports: [
    FlashHomePage,
  ]
})

export class FlashHomePageModule { }