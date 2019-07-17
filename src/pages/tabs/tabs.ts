import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Tabs, Tab } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

@ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CartPage;

  constructor(public globe:GlobalvarsProvider) {
   
  }

  tabsChange(tab:Tab){
    console.log("hiiiiiiiiii");
    console.log("hello"+tab.index);
  }
 
}
