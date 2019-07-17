import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CartPage } from '../pages/cart/cart';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlashHomePage } from '../pages/home/flashdeals/flashhome';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';
import { FlashHomePageModule } from '../pages/home/flashdeals/flashdeal.module';
import { BrandsPage } from '../pages/home/brands/brands';
import { BrandsPageModule } from '../pages/home/brands/brands.module';
import { LatestPage } from '../pages/home/latest/latest';
import { StoresPage } from '../pages/stores/stores';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { DetailModalPage } from '../pages/product-details/detail-modal/detail-modal';
import { StorePage } from '../pages/store/store';
import { SelectDetailsPage } from '../pages/product-details/select-details/select-details';
import { CartPageModule } from '../pages/cart/cart.module';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CheckoutPageModule } from '../pages/checkout/checkout.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    
    HomePage,
    TabsPage,
    FlashHomePage,
    BrandsPage,
    LatestPage,
    StoresPage,
    ProductDetailsPage,
    DetailModalPage,
    SelectDetailsPage,
    StorePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(BrandsPageModule),
    CheckoutPageModule,
    CartPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    
    HomePage,
    TabsPage,
    FlashHomePage,
    BrandsPage,
    LatestPage,
    StoresPage,
    ProductDetailsPage,
    DetailModalPage,
    SelectDetailsPage,
    StorePage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalvarsProvider
  ]
})
export class AppModule {}
