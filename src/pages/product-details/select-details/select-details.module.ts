import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDetailsPage } from './select-details';

@NgModule({
  declarations: [
    SelectDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectDetailsPage),
  ],
})
export class SelectDetailsPageModule {}
