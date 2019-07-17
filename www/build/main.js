webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LatestPage = (function () {
    function LatestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showtitle = true;
        this.enableSearch = false;
        this.pagetitle = "Latest Products";
        this.categories = [
            { name: 'Electronics', imgUrl: 'assets/images/eletronics.jpeg' },
            { name: 'For Men', imgUrl: 'assets/images/formen.jpg' },
            { name: 'For Ladies', imgUrl: 'assets/images/forladies1.jpg' },
            { name: 'Cosmetics', imgUrl: 'assets/images/cosmetics.jpg' },
            { name: 'Phones and Accessories', imgUrl: 'assets/images/phoneAccessories.png' },
            { name: 'Auto-Mobile and Accessories', imgUrl: 'assets/images/automobile.jpg' }
        ];
        this.products = [
            { name: 'samsung 3.0 External Hard drive', price: 500.00, imgUrl: 'assets/productsimgs/hd1.jpeg' },
            { name: 'HP Pavilion cc', price: 2500.00, imgUrl: 'assets/productsimgs/pavilioncc.png' },
            { name: 'Toshiba 2.0/3.0 External Hard Drive', price: 560.00, imgUrl: 'assets/productsimgs/hd2.jpeg' },
            { name: 'Microsoft Surf', price: 2800.00, imgUrl: 'assets/productsimgs/microsoft_Surf.png' },
            { name: 'MacBook Pro', price: 3000.00, imgUrl: 'assets/productsimgs/macbookpro.png' },
            { name: 'samsung vision', price: 2460.00, imgUrl: 'assets/productsimgs/svision.png' },
            { name: 'Lenovo high-tech', price: 3000.00, imgUrl: 'assets/productsimgs/high-tech.png' }
        ];
    }
    LatestPage.prototype.productsDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */]);
    };
    LatestPage.prototype.showSearch = function () {
        this.enableSearch = true;
        this.showtitle = false;
    };
    LatestPage.prototype.onInput = function (event) {
    };
    LatestPage.prototype.onCancel = function (event) {
    };
    LatestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-latest',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/latest/latest.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-item class="seachbar-wrapper">\n        <span clear item-start class="header-title" *ngIf="showtitle==true"><ion-title>{{pagetitle}}</ion-title></span>\n        <ion-searchbar *ngIf="enableSearch==true" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n        </ion-searchbar>\n        \n        <span clear item-end><a (click)="showSearch()" class="navbarSearch-btn"><ion-icon name="search"></ion-icon></a></span>\n    </ion-item>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid class="page-menu-slider">\n    <ion-row nowrap style="padding-left: 7px">\n        <ion-col col-5 class="top-columns" *ngFor="let g of categories">\n            <a >{{g.name}}</a>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n<ion-grid class="products-grid">\n  <ion-row class="">\n   <ion-col col-6 *ngFor="let p of products">\n     <ion-card class="latest-card">\n        <a style="text-decoration: none;color:black" (click)=" productsDetails(p.id)">\n            <ion-card-content class="latest-card-content">\n            <img src={{p.imgUrl}}>\n            </ion-card-content>\n            <span style="padding-left:10px;" class="price">GHS 10.00</span>\n        </a>\n     </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/latest/latest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LatestPage);
    return LatestPage;
}());

//# sourceMappingURL=latest.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailModalPage = (function () {
    function DetailModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.myParam = navParams.get('control-data');
    }
    DetailModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-modal',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/product-details/detail-modal/detail-modal.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-title>{{myParam}}</ion-title>\n      <ion-buttons end>\n        <button  style="color:white" ion-button icon-only (click)="dismiss()">\n          <ion-icon name=\'close\'></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <h1>Modal</h1>\n    <h3>This modal is pretty nice.</h3>\n    <p>EXAMPLES</p>\n    <ul>\n      <li> First thing to do\n      </li>\n      <li> Second thing to do\n      </li>\n      <li> Third thing to do\n      </li>\n    </ul>\n    <p>Selfies normcore four dollar toast four loko listicle artisan. Hoodie Marfa authentic, wayfarers church-key tofu Banksy\n      pop-up Kickstarter Brooklyn heirloom swag synth. Echo Park cray synth mixtape. Tofu gastropub squid readymade, trust\n      fund Wes Anderson DIY PBR 8-bit try-hard +1 Shoreditch lo-fi tote bag.</p>\n    <p>\n      <img src="https://unsplash.it/600/300" alt="" />\n    </p>\n    <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party\n      Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90\'s DIY chambray keffiyeh biodiesel Vice blog.\n      Cred meh yr tofu.</p>\n    <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party\n      Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90\'s DIY chambray keffiyeh biodiesel Vice blog.\n      Cred meh yr tofu.</p>\n  </ion-content>\n  '/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/product-details/detail-modal/detail-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailModalPage);
    return DetailModalPage;
}());

//# sourceMappingURL=detail-modal.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectDetailsPage = (function () {
    function SelectDetailsPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.myParam = navParams.get("control-data");
        this.selectedQuantity = 0;
        this.subtotal = 24.00;
        this.shipping = 0;
        this.sizes = [
            { name: "size10", value: false },
            { name: "size12", value: false },
            { name: "size14", value: false }
        ];
        this.sizes[0].value = true;
        this.selectedS = this.sizes[0].name;
        this.colors = [
            { name: "red", img: "assets/productsimgs/high-tech.png" },
            { name: "gold", img: "assets/productsimgs/high-tech.png" },
            { name: "blue", img: "assets/productsimgs/high-tech.png" }
        ];
        this.SelectedC = this.colors[0].name;
    }
    SelectDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectDetailsPage.prototype.onSizeSelected = function (selected, index) {
        //check to see whether checkbox is selected or unselected
        //if selected unselect all other checkboxes
        for (var _i = 0, _a = this.sizes; _i < _a.length; _i++) {
            var size = _a[_i];
            if (size.name == selected && size.value == true) {
                //it means checkbox is selected
                //store selected checkbox in selectedS before checking for other selected.
                this.selectedS = selected;
                //unselect other checkboxes
                for (var _b = 0, _c = this.sizes; _b < _c.length; _b++) {
                    var size1 = _c[_b];
                    if (size1.value == true && size1.name != selected) {
                        size1.value = false;
                        console.log(size1.name + " " + "unselected");
                        this.selectedS = size.name;
                    }
                }
            }
        }
        console.log(this.selectedS + " " + "selected");
    };
    SelectDetailsPage.prototype.onIncrease = function () {
        this.selectedQuantity++;
    };
    SelectDetailsPage.prototype.onDecrease = function () {
        this.selectedQuantity--;
        if (this.selectedQuantity < 0) {
            this.selectedQuantity = 0;
        }
    };
    SelectDetailsPage.prototype.onColorClick = function (index) {
        var selectedColor;
        selectedColor = this.colors[index].name;
        this.SelectedC = selectedColor;
        console.log(selectedColor);
    };
    SelectDetailsPage.prototype.onContinue = function () {
        var data;
        data = [];
        data.push(this.selectedS, this.SelectedC, this.selectedQuantity);
        this.viewCtrl.dismiss(data);
    };
    SelectDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-details',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/product-details/select-details/select-details.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-title>Select Product Details</ion-title>\n      <ion-buttons end>\n        <button  style="color:white" ion-button icon-only (click)="dismiss()">\n          <ion-icon name=\'close\'></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content >\n    <ion-card class="sizeAndColor-card" padding>\n        <span>Select Product Details</span>\n      <div class="size">\n        <span>Size</span>\n        <ion-row>\n          <ion-col col-4 *ngFor="let size of sizes; let i = index" [attr.data-index]="i">\n              <ion-item>\n                  <ion-checkbox name={{size.name}} [(ngModel)]="size.value" (click)="onSizeSelected(size.name,i)"></ion-checkbox>\n                  <ion-label>{{size.name}}</ion-label>\n             </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class="color">\n          <span>Color</span>\n          <ion-row>\n            <ion-col col-4 *ngFor="let color of colors; let i = index" [attr.data-index]="i">\n              <a (click)="onColorClick(i)" class="color-link">\n                <ion-item>\n                   <img src={{color.img}}>\n               </ion-item>\n              </a>\n            </ion-col>\n           \n          </ion-row>\n      </div>\n\n      <div class="quantity-selector">\n        <ion-row>\n          <ion-col col-3 >\n              <span style="text-align: left; padding-top:10px; display: flex"> Quantity</span>\n          </ion-col>\n          <ion-col col-3 style="justify-content: center;padding-top:10px;width:17%;max-width: 17%;">\n              <button ion-button color="danger" round (click)="onDecrease()"><ion-icon name="subtract"></ion-icon></button>\n          </ion-col>\n          <ion-col col-3>\n              <ion-input class="quantity" [(ngModel)]="selectedQuantity" type="number"></ion-input>\n          </ion-col>\n          <ion-col col-3 style="justify-content: center;padding-top:10px">\n              <button ion-button color="primary" round (click)="onIncrease()"><ion-icon name="add"></ion-icon></button>\n          </ion-col>\n        </ion-row>\n     \n      </div>\n\n      <div style="margin-top:9px">\n        <span style="margin-top:5px;font-weight: bold">Selected Details</span><br/>\n        {{selectedS}}, {{SelectedC}}, {{selectedQuantity}}\n      </div>\n\n      <div style="margin-top:10px;">\n        <span class="discount1">Please make sure you select the right size and color you want in other to avoid issues later.</span>\n      </div>\n    </ion-card>\n\n    <ion-card class="optionalOffers-card" padding>\n        <span style="margin-top:5px;font-weight: bold">Buy in Bundle</span><br/>\n        <p>Buy selected product with any of the products below at a discounted price.</p>\n\n\n    </ion-card>\n\n    <ion-footer class="actions-card">\n     <ion-item>\n       <span style="text-align: center">Sub-Total: GHS {{subtotal+shipping}}</span>\n     </ion-item>\n      <div>\n        <button ion-button full color="primary" (click)="onContinue()">Continue<ion-icon name="arrow-right"></ion-icon></button>\n      </div>\n    </ion-footer>\n  </ion-content>\n  '/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/product-details/select-details/select-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SelectDetailsPage);
    return SelectDetailsPage;
}());

//# sourceMappingURL=select-details.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoresPage = (function () {
    function StoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = [
            { name: "Melcome Ghana Ltd.", logo: "assets/productsimgs/microsoft_Surf.png",
                imgs: { img1: "assets/productsimgs/macbookpro.png", img2: "assets/productsimgs/microsoft_Surf.png", img3: "assets/productsimgs/microsoft_Surf.png" }
            },
            { name: "Fosmoul Ghana Ltd.", logo: "assets/productsimgs/svision.png",
                imgs: { img1: "assets/productsimgs/microsoft_Surf.png", img2: "assets/productsimgs/svision.png", img3: "assets/productsimgs/svision.png" }
            }
        ];
        this.categories = [
            { name: 'All Categories', id: 0 },
            { name: 'Electronics', id: 1 },
            { name: 'For Men', id: 2 },
            { name: 'For Ladies', id: 3 },
            { name: 'Cosmetics', id: 4 },
            { name: 'Phones and Accessories', id: 5 },
            { name: 'Auto-Mobile and Accessories', id: 6 }
        ];
    }
    StoresPage.prototype.viewSingleStore = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* StorePage */]);
    };
    StoresPage.prototype.gotoProductDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */]);
    };
    StoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stores',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/stores/stores.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>stores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="stores-barnna">\n    <img src="assets/images/brand1.jpg">\n  </div>\n\n  <ion-card>\n    <ion-select [(ngModel)]="category">\n      <ion-option okText="Ok" cancelText="Dismiss" *ngFor="let catg of categories" value={{catg.id}}>{{catg.name}}</ion-option>\n    </ion-select>\n  </ion-card>\n\n  <ion-card *ngFor="let st of store">\n      <ion-row>\n        <ion-col col-2 style="height:20px"><img src={{st.logo}}></ion-col>\n        <ion-col col-10>{{st.name}}</ion-col>\n       \n        <ion-card-content style="background-color: lavender">\n        <ion-row>\n            <ion-col col-9 class="store-big-img"><a (click)="gotoProductDetails()"><img src={{st.imgs.img1}}></a></ion-col>\n            <ion-col col-3 class="store-small-img">\n              <div><a (click)="gotoProductDetails()"><img src={{st.imgs.img2}}></a></div>\n              <div><a (click)="gotoProductDetails()"><img src={{st.imgs.img3}}></a></div>\n            </ion-col>\n        </ion-row>\n        </ion-card-content>\n      \n      <a (click)="viewSingleStore(st.id)">\n        <ion-item center>Visit Store</ion-item>\n      </a>\n      </ion-row>\n    \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/stores/stores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StoresPage);
    return StoresPage;
}());

//# sourceMappingURL=stores.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		159
	],
	"../pages/checkout/checkout.module": [
		161
	],
	"../pages/home/brands/brands.module": [
		163
	],
	"../pages/home/latest/latest.module": [
		289,
		5
	],
	"../pages/product-details/detail-modal/detail-modal.module": [
		290,
		4
	],
	"../pages/product-details/product-details.module": [
		291,
		3
	],
	"../pages/product-details/select-details/select-details.module": [
		292,
		2
	],
	"../pages/store/store.module": [
		293,
		1
	],
	"../pages/stores/stores.module": [
		294,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = (function () {
    function CartPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.allItems = false;
        this.subtotals = 0;
        this.selectedItems = [];
        this.products = [
            {
                storename: "melcome", storeid: "0022", id: "001",
                details: [
                    { id: "001", name: "ab", price: 12.00, pid: "22w", disc: "samsung latest ssd 12GB Laptop with dual battery" },
                    { id: "002", name: "abc", price: 13.00, pid: "22kw", disc: "samsung latest ssd 12GB Laptop with dual battery" },
                ]
            },
            {
                storename: "fosmoul", storeid: "333", id: "002",
                details: [
                    { name: "abcd", pid: "22olp" },
                    { name: "abcgg", pid: "22kwyji" },
                ]
            }
        ];
    }
    CartPage.prototype.onAllSelected = function (param, id) {
        if (this.products[id].storeid == param && this.products[id].id == true) {
            //if clicked and selected then all products from this store should be selected
            for (var _i = 0, _a = this.products[id].details; _i < _a.length; _i++) {
                var d = _a[_i];
                console.log(d.pid);
                this.selectedItems.push(d.pid);
                d.id = true;
                this.subtotals = +d.price;
            }
        }
        else {
            for (var _b = 0, _c = this.products[id].details; _b < _c.length; _b++) {
                var d = _c[_b];
                console.log(d.pid);
                this.selectedItems.pop();
                d.id = false;
                this.subtotals = +d.price;
            }
        }
    };
    CartPage.prototype.onSelected = function (param) {
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Shopping Cart\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let product of products; let i=index" [attr.data-index]="i">\n      <ion-list >\n          <ion-list-header style="text-align: center;display: flex;box-shadow: 1px 0px 1px 2px gray;color:black">\n            <ion-checkbox (click)="onAllSelected(product.storeid,i)" [(ngModel)]="product.id"></ion-checkbox>\n            <ion-label>Items from {{product.storename}}</ion-label>\n          </ion-list-header>\n          \n            <ion-row *ngFor="let details of product.details; let j=index" [attr.data-index]="j" padding-left>\n              <ion-col col-2 style="display:flex;justify-content: center;padding-top:10px;width:17%;max-width: 17%;">\n                  <ion-checkbox [(ngModel)]="details.id" (click)="onSelected(details.pid)"></ion-checkbox>\n              </ion-col>\n              <ion-col col-4>\n                  <img src="assets/productsimgs/high-tech.png">\n              </ion-col>\n              <ion-col col-5>\n                <span class="discount">{{details.disc}}</span>\n              </ion-col>\n            </ion-row>\n          \n      </ion-list>\n  </ion-card>\n\n  <ion-footer class="actions-card">\n      <ion-item>\n        <span style="text-align: center">Sub-Total: GHS {{subtotal+shipping}}</span>\n      </ion-item>\n       <div>\n         <button ion-button full color="danger">Checkout<ion-icon name="cash"></ion-icon></button>\n       </div>\n     </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/checkout/checkout.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsPageModule", function() { return BrandsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brands__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrandsPageModule = (function () {
    function BrandsPageModule() {
    }
    BrandsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brands__["a" /* BrandsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brands__["a" /* BrandsPage */]),
            ],
        })
    ], BrandsPageModule);
    return BrandsPageModule;
}());

//# sourceMappingURL=brands.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(globe) {
        this.globe = globe;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */];
    }
    TabsPage.prototype.tabsChange = function (tab) {
        console.log("hiiiiiiiiii");
        console.log("hello" + tab.index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/tabs/tabs.html"*/'<ion-tabs  (onChange)="tabsChange($event)">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cart" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="My Account" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="More" tabIcon="more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, globe) {
        this.navCtrl = navCtrl;
        this.globe = globe;
        this.globe.setActivePageName('About Daabia');
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flashdeals_flashhome__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brands_brands__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__latest_latest__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_stores__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_details_product_details__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, globe) {
        this.navCtrl = navCtrl;
        this.globe = globe;
        //populating junk data
        this.pagetitle = "Home";
        this.images = [
            { name: 'flashdeals', url: '/assets/images/flash.jpeg' },
            { name: 'latestproducts', url: '/assets/images/latest.jpg' },
            { name: 'umaylove', url: '/assets/images/umaylove.jpeg' }
        ];
        this.products = [
            { id: 1, name: 'samsung 3.0 External Hard drive', price: 500.00, imgUrl: 'assets/productsimgs/hd1.jpeg' },
            { id: 2, name: 'HP Pavilion cc', price: 2500.00, imgUrl: 'assets/productsimgs/pavilioncc.png' },
            { id: 3, name: 'Toshiba 2.0/3.0 External Hard Drive', price: 560.00, imgUrl: 'assets/productsimgs/hd2.jpeg' },
            { id: 4, name: 'Microsoft Surf', price: 2800.00, imgUrl: 'assets/productsimgs/microsoft_Surf.png' },
            { id: 5, name: 'MacBook Pro', price: 3000.00, imgUrl: 'assets/productsimgs/macbookpro.png' },
            { id: 6, name: 'samsung vision', price: 2460.00, imgUrl: 'assets/productsimgs/svision.png' },
            { id: 7, name: 'Lenovo high-tech', price: 3000.00, imgUrl: 'assets/productsimgs/high-tech.png' }
        ];
        this.categories = [
            { name: 'Electronics', imgUrl: 'assets/images/eletronics.jpeg' },
            { name: 'For Men', imgUrl: 'assets/images/formen.jpg' },
            { name: 'For Ladies', imgUrl: 'assets/images/forladies1.jpg' },
            { name: 'Cosmetics', imgUrl: 'assets/images/cosmetics.jpg' },
            { name: 'Phones and Accessories', imgUrl: 'assets/images/phoneAccessories.png' },
            { name: 'Auto-Mobile and Accessories', imgUrl: 'assets/images/automobile.jpg' }
        ];
        this.brands = [
            { name: 'Brand1', imgUrl: 'assets/images/brand1.jpg' },
            { name: 'Brand2', imgUrl: 'assets/images/brand2.jpg' },
            { name: 'Brand3', imgUrl: 'assets/images/brand3.png' }
        ];
    }
    HomePage.prototype.flashMoreClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__flashdeals_flashhome__["a" /* FlashHomePage */]);
    };
    HomePage.prototype.brandsClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__brands_brands__["a" /* BrandsPage */]);
    };
    HomePage.prototype.latestProductsClick = function (param1) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__latest_latest__["a" /* LatestPage */]);
    };
    HomePage.prototype.storesClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__stores_stores__["a" /* StoresPage */]);
    };
    HomePage.prototype.productsDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__product_details_product_details__["a" /* ProductDetailsPage */]);
    };
    HomePage.prototype.onInput = function (event) {
    };
    HomePage.prototype.onCancel = function (event) {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n    <ion-item class="seachbar-wrapper">\n      <ion-row>\n        <ion-col col-1 class="menu-col">\n          <span><button clear item-start class="navbarSearch-btn"><ion-icon name="menu"></ion-icon></button></span>\n        </ion-col>\n        <ion-col col-10 class="searchbar-col">\n          <ion-searchbar [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n        </ion-searchbar>\n      </ion-col>\n      </ion-row> \n    </ion-item>\n   </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="home-slide">\n    <ion-slides autoplay="5000" loop="true" speed="500" pager="true">\n      <ion-slide>\n        <img class="radius"  src="../assets/imgs/slide_1.webp">\n      </ion-slide>\n\n      <ion-slide>\n        <img class="radius"  src="../assets/imgs/slide_2.webp">\n      </ion-slide>\n\n      <ion-slide>\n        <img class="radius"  src="../assets/imgs/slide_3.webp">\n      </ion-slide>\n\n      <ion-slide>\n        <img class="radius"  src="../assets/imgs/slide_4.webp">\n      </ion-slide>\n\n      <ion-slide>\n        <img class="radius"  src="../assets/imgs/slide_5.webp">\n      </ion-slide>\n\n      <ion-slide>\n        <img class="radius" src="../assets/imgs/slide_6.webp">\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <ion-grid class="quicklinks">\n    <ion-row justify-content-between>\n      <ion-col class="text-center">\n        <div>\n          <a href="#">\n          <img src="../assets/imgs/home_btn_1.png"/>\n          <span>All Categories</span>\n          </a>\n        </div>\n      </ion-col>\n      <ion-col class="text-center">\n        <div>\n          <a href="#">\n          <img src="../assets/imgs/home_btn_2.png"/>\n          <span>Best Selling</span>\n          </a> \n        </div>\n      </ion-col>\n      <ion-col class="text-center">\n        <div>\n          <a href="#">\n          <img src="../assets/imgs/home_btn_3.png"/>\n          <span>Promotions</span>\n          </a>\n        </div>\n      </ion-col>\n    \n    </ion-row>\n  </ion-grid>\n\n  <ion-card class="flashdeals">\n    <ion-item>\n        <span clear item-start>Flash Deals</span>\n        <span clear item-end><a (click)=\'flashMoreClick()\'>More</a></span>\n    </ion-item>\n    \n      <ion-card-content>\n        <img src="../assets/images/flash.jpeg" />\n     \n      <ion-grid class="products-grid">\n        <ion-row nowrap class="products-row">\n          <ion-col col-5 class="products-card-col" *ngFor="let p of products">\n              <ion-card class="products-card">\n                  <ion-card-content>\n                      <ion-item class="products-card-content">\n                          <a (click)="flashMoreClick()">\n                            <img src={{p.imgUrl}}/>\n                          </a>\n                        <span class="price">GHS {{p.price}}</span><br/>\n                        <span class="old-price">GHS 15.00</span> | <span class="discount">50% off</span>\n                      </ion-item>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="featuredbrands">\n    <ion-item>\n        <span clear item-start>Featured Brands</span>\n        <span clear item-end><a (click)="brandsClick()">More</a></span>\n    </ion-item>\n    \n      <ion-card-content>\n      <ion-grid class="products-grid">\n        <ion-row nowrap class="products-row">\n          <ion-col col-9 class="brands-col" *ngFor="let b of brands">\n              <ion-card class="brands-card">\n                  <ion-card-content>\n                      <ion-item class="brands-card-content">\n                          <a (click)="brandsClick()">\n                            <img src={{b.imgUrl}}/>\n                          </a>\n                      </ion-item>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-item>\n          <span clear item-start>Latest Products</span>\n          <span clear item-end><a (click)="latestProductsClick()">More</a></span>\n      </ion-item>\n   \n    <ion-card-content>\n        <img src="../assets/images/latest.jpg" />\n\n        <ion-grid class="products-grid">\n            <ion-row class="">\n             <ion-col col-6 *ngFor="let catg of categories">\n               <ion-card class="products-card">\n                 <a (click)="latestProductsClick(catg.name)">\n                 <!-- <ion-card-title padding> -->\n                   <span padding>{{catg.name}}</span>\n                 <!-- </ion-card-title> -->\n                 <ion-card-content class="products-card-content">\n                    <img src={{catg.imgUrl}}>\n                 </ion-card-content>\n                 </a>\n               </ion-card>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="stores">\n    <ion-item>\n        <span clear item-start>Store Explorer</span>\n        <span clear item-end><a (click)="storesClick()">More</a></span>\n    </ion-item>\n    \n      <ion-card-content>\n      <ion-grid class="stores-grid">\n        <ion-row nowrap class="stores-row">\n          <ion-col col-9 class="stores-col" *ngFor="let b of brands">\n              <ion-card class="stores-card">\n                  <ion-card-content>\n                      <ion-item class="stores-card-content">\n                          {{b.name}}\n                          <a (click)="storesClick()">\n                           \n                            <img src={{b.imgUrl}}/>\n                          </a>\n                      </ion-item>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-item>\n          <span clear item-start>Things You May Love</span>\n          <span clear item-end><a (click)="productsDetails()">More</a></span>\n      </ion-item>\n\n    <ion-card-content>\n        <img src="../assets/images/umaylove.jpeg" />\n\n        <ion-grid class="products-grid">\n          <ion-row class="">\n           <ion-col col-6 *ngFor="let p of products">\n             <ion-card class="umaylove-card">\n                <a style="text-decoration: none;color:black" (click)="productsDetails(p.id)" >\n                    <ion-card-content class="umaylove-card-content">\n                    <img src={{p.imgUrl}}>\n                    <ion-row class="product-name"><span>{{p.name}}</span></ion-row>\n                    <span style="padding-left:10px;" class="price">GHS 10.00</span>\n                    </ion-card-content>\n                   \n                </a>\n             </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlashHomePage = (function () {
    function FlashHomePage(nav, globe) {
        this.nav = nav;
        this.globe = globe;
        this.showtitle = true;
        this.enableSearch = false;
        this.pagetitle = "Flash Deals";
        // globe.showtitle=true;
        // globe.enableSearch=false;
        // this.categories = navp.get('categories');
        this.categories = [
            { name: 'Electronics', imgUrl: 'assets/images/eletronics.jpeg' },
            { name: 'For Men', imgUrl: 'assets/images/formen.jpg' },
            { name: 'For Ladies', imgUrl: 'assets/images/forladies1.jpg' },
            { name: 'Cosmetics', imgUrl: 'assets/images/cosmetics.jpg' },
            { name: 'Phones and Accessories', imgUrl: 'assets/images/phoneAccessories.png' },
            { name: 'Auto-Mobile and Accessories', imgUrl: 'assets/images/automobile.jpg' }
        ];
    }
    FlashHomePage.prototype.loadCategory = function (value) {
    };
    FlashHomePage.prototype.productsDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */]);
    };
    FlashHomePage.prototype.showSearch = function () {
        this.enableSearch = true;
        this.showtitle = false;
    };
    FlashHomePage.prototype.onInput = function (event) {
    };
    FlashHomePage.prototype.onCancel = function (event) {
    };
    FlashHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flashhome',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/flashdeals/flashhome.html"*/'<ion-header>\n    <ion-navbar>\n            <ion-item class="seachbar-wrapper">\n                <span clear item-start class="header-title" *ngIf="showtitle==true"><ion-title>{{pagetitle}}</ion-title></span>\n                <ion-searchbar *ngIf="enableSearch==true" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n                </ion-searchbar>\n                \n                <span clear item-end><a (click)="showSearch()" class="navbarSearch-btn"><ion-icon name="search"></ion-icon></a></span>\n            </ion-item>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n   <ion-grid class="page-menu-slider">\n        <ion-row nowrap style="padding-left: 7px">\n            <ion-col col-5 class="top-columns" *ngFor="let g of categories">\n                <a (click)="loadCategory(g.name)" >{{g.name}}</a>\n            </ion-col>\n        </ion-row>\n   </ion-grid>\n\n<ion-grid class="flash-deals-grid">\n        <ion-row class="">\n            <ion-col col-6 *ngFor="let catg of categories">\n            <ion-card class="flash-products-card">\n                <a style="text-decoration: none;color:black" (click)="productsDetails(catg.id)">\n                <ion-card-content class="flash-products-card-content">\n                <img src={{catg.imgUrl}}>\n                </ion-card-content>\n                <span class="price">GHS 10.00</span><br/>\n                <span class="new-price">GHS 15.00</span> | <span class="discount">50% off</span>\n                </a>\n            </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/flashdeals/flashhome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
    ], FlashHomePage);
    return FlashHomePage;
}());

//# sourceMappingURL=flashhome.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_flashdeals_flashhome__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_globalvars_globalvars__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_brands_brands__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_brands_brands_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_latest_latest__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_stores_stores__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_product_details_product_details__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_product_details_detail_modal_detail_modal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_store_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_details_select_details_select_details__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cart_cart_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_checkout_checkout_module__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_flashdeals_flashhome__["a" /* FlashHomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_brands_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_latest_latest__["a" /* LatestPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_stores_stores__["a" /* StoresPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_product_details_detail_modal_detail_modal__["a" /* DetailModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_product_details_select_details_select_details__["a" /* SelectDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_store_store__["a" /* StorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/latest/latest.module#LatestPageModule', name: 'LatestPage', segment: 'latest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/detail-modal/detail-modal.module#DetailModalPageModule', name: 'DetailModalPage', segment: 'detail-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/select-details/select-details.module#SelectDetailsPageModule', name: 'SelectDetailsPage', segment: 'select-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store/store.module#StorePageModule', name: 'StorePage', segment: 'store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stores/stores.module#StoresPageModule', name: 'StoresPage', segment: 'stores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/brands/brands.module#BrandsPageModule', name: 'BrandsPage', segment: 'brands', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_12__pages_home_brands_brands_module__["BrandsPageModule"]),
                __WEBPACK_IMPORTED_MODULE_20__pages_checkout_checkout_module__["CheckoutPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_cart_cart_module__["CartPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_flashdeals_flashhome__["a" /* FlashHomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_brands_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_latest_latest__["a" /* LatestPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_stores_stores__["a" /* StoresPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_product_details_detail_modal_detail_modal__["a" /* DetailModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_product_details_select_details_select_details__["a" /* SelectDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_store_store__["a" /* StorePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_modal_detail_modal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_details_select_details__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_checkout__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.selectedS = "";
        this.SelectedC = "Red";
        this.selectedQuantity = 0;
        this.products = [
            { id: 1, name: 'samsung 3.0 External Hard drive', price: 500.00, imgUrl: 'assets/productsimgs/hd1.jpeg' },
            { id: 2, name: 'HP Pavilion cc', price: 2500.00, imgUrl: 'assets/productsimgs/pavilioncc.png' },
            { id: 3, name: 'Toshiba 2.0/3.0 External Hard Drive', price: 560.00, imgUrl: 'assets/productsimgs/hd2.jpeg' },
            { id: 4, name: 'Microsoft Surf', price: 2800.00, imgUrl: 'assets/productsimgs/microsoft_Surf.png' },
            { id: 5, name: 'MacBook Pro', price: 3000.00, imgUrl: 'assets/productsimgs/macbookpro.png' },
            { id: 6, name: 'samsung vision', price: 2460.00, imgUrl: 'assets/productsimgs/svision.png' },
            { id: 7, name: 'Lenovo high-tech', price: 3000.00, imgUrl: 'assets/productsimgs/high-tech.png' }
        ];
        this.bestSelling = [
            { name: 'HP Pavilion cc', price: 2500.00, imgUrl: 'assets/productsimgs/pavilioncc.png' },
            { name: 'Toshiba 2.0/3.0 External Hard Drive', price: 560.00, imgUrl: 'assets/productsimgs/hd2.jpeg' },
            { name: 'Microsoft Surf', price: 2800.00, imgUrl: 'assets/productsimgs/microsoft_Surf.png' },
        ];
    }
    ProductDetailsPage_1 = ProductDetailsPage;
    ProductDetailsPage.prototype.openHintModal = function () {
        this.openModal(__WEBPACK_IMPORTED_MODULE_2__detail_modal_detail_modal__["a" /* DetailModalPage */], "");
    };
    ProductDetailsPage.prototype.openContactModal = function () {
        this.openModal(__WEBPACK_IMPORTED_MODULE_2__detail_modal_detail_modal__["a" /* DetailModalPage */], "");
    };
    ProductDetailsPage.prototype.openSelectDetailsModal = function () {
        this.openModal(__WEBPACK_IMPORTED_MODULE_4__select_details_select_details__["a" /* SelectDetailsPage */], null);
    };
    ProductDetailsPage.prototype.openModal = function (pageName, data) {
        var _this = this;
        var chooseModal = this.modalCtrl.create(pageName, { 'control-data': data }, { cssClass: 'inset-modal' });
        chooseModal.onDidDismiss(function (data) {
            _this.selectedDetails = [];
            _this.selectedDetails = data;
        });
        chooseModal.present();
    };
    ProductDetailsPage.prototype.gotoStore = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* StorePage */]);
    };
    ProductDetailsPage.prototype.productsDetails = function (id) {
        this.navCtrl.push(ProductDetailsPage_1);
    };
    ProductDetailsPage.prototype.openCheckout = function () {
        //navigates to the checkout
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__checkout_checkout__["a" /* CheckoutPage */]);
    };
    ProductDetailsPage.prototype.addToCart = function () {
        //displays an alert with options to continue or go to cart 
    };
    ProductDetailsPage = ProductDetailsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/product-details/product-details.html"*/'\n<ion-content class="pContent">\n    <ion-navbar class="pnavbar">\n        <ion-title>productDetails</ion-title>\n    </ion-navbar>\n\n    <div class="product-slide">\n        <ion-slides loop="true" speed="500" pager="true">\n          <ion-slide>\n            <img class="radius"  src="../assets/imgs/slide_1.webp">\n          </ion-slide>\n    \n          <ion-slide>\n            <img class="radius"  src="../assets/imgs/slide_2.webp">\n          </ion-slide>\n    \n          <ion-slide>\n            <img class="radius"  src="../assets/imgs/slide_3.webp">\n          </ion-slide>\n    \n          <ion-slide>\n            <img class="radius"  src="../assets/imgs/slide_4.webp">\n          </ion-slide>\n    \n          <ion-slide>\n            <img class="radius"  src="../assets/imgs/slide_5.webp">\n          </ion-slide>\n    \n          <ion-slide>\n            <img class="radius" src="../assets/imgs/slide_6.webp">\n          </ion-slide>\n        </ion-slides>\n      </div>\n      \n      <ion-card class="item-description">\n        <div class="item-text">\n          Hellow this is the item i have been talking about, by the way this is junk text.\n        </div>\n        <hr/>\n        <div class="price">\n            Ghs 70\n        </div>\n        <div class="old-price">\n          Ghs 80\n        </div>\n        <div class="discount">\n          -50%\n        </div>\n        <hr/>\n        <div class="rating-orders">\n          <ion-row style="text-align: center">\n            <ion-col col-4 center>\n              <span class="text-medium">1</span><br/>\n              <span>starts</span>\n            </ion-col>\n            <ion-col col-4>\n                <span class="text-medium">2</span><br/>\n                <span>orders</span>\n            </ion-col>\n            <ion-col col-4>\n                <span class="text-medium">3</span><br/>\n                <span>wishlist</span>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <hr/>\n\n      </ion-card>\n\n      <ion-card style="padding:10px">\n        <a href="#" style="text-decoration: none; color:black">\n          <div>\n            Shipping : Ghs 3.00<br/>\n            <span style="font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-size: 10px;color:gray">To Area Name Via Daabia Delivery</span>\n          </div>\n        </a>\n      </ion-card>\n\n      <ion-card>\n        <div class="">\n          <ion-item>\n              <div item-start *ngIf="selectedDetails == null">{{selectedS}}, {{SelectedC}}, {{selectedQuantity}}</div>\n              <div item-start *ngIf="selectedDetails != null">{{selectedDetails[0]}}, {{selectedDetails[1]}}, {{selectedDetails[2]}}</div>\n              <button ion-button color="primary" (click)="openSelectDetailsModal()" item-end>select</button>\n          </ion-item>\n          \n          <ion-item>\n            <button ion-button color="primary" item-start (click)="addToCart()">Add to Cart<ion-icon name="cart"></ion-icon></button>\n            <button ion-button color="danger" item-end (click)="openCheckout()"><ion-icon name="money">Buy</ion-icon></button>\n          </ion-item>\n        </div>\n      </ion-card>\n\n      <ion-card class="product-details-card">\n          <ion-item>\n            Product Details\n          </ion-item>\n          <ion-card-content>\n            <span class="title">Name: </span>\n            <span class="details">wwwwwwwwwwwwwwwwwwwww\n              wwwwwwwwwwwwwww\n              wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\n              wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\n              wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\n            </span><br/>\n            <span class="title">Description: </span>\n            <span class="details">\n              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n              ddddddddddddddddddddddddddddddddddddddddddddddd\n              dddddddddddddddddddddddddddddddddddddddddddddddddddddd\n              dddddddddddddddddddddddddddddddddddddddddddddddddd\n            </span><br/>\n            <span class="title">Type: </span>\n            <span class="details"> hhshhsggsggggggggggggs</span>\n            <br/>\n            <span class="title">Manufacturer :</span>\n            <span class="details">jyunkuhkunnnnnnnnnnnnnnnnuhnhhjubhnibbiuhbjhgbbbyhhhhhhhhhhhhhhhhbjbbbmubbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n            </span>\n          </ion-card-content>\n\n          <ion-row class="cardfooter">\n            <ion-col>\n                  <p><button ion-button block color="primary" (click)="openHintModal()">View More</button> </p>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n\n        <ion-card class="visit-store">\n          <ion-item>\n            Seller Store\n          </ion-item>\n        \n          <ion-card-content>\n            <div class="rating-orders">\n              <ion-row>\n                <ion-col col-4 *ngFor="let bs of bestSelling" class="bestselling-small">\n                    <a><img src={{bs.imgUrl}}></a>\n                    <span class="price1">GHS {{bs.price}}</span>\n                </ion-col>\n              </ion-row>\n               \n\n              <ion-row style="text-align: center">\n                <ion-col col-4>\n                  <span class="text-medium">1</span><br/>\n                  <span>starts</span>\n                </ion-col>\n                <ion-col col-4>\n                    <span class="text-medium">2</span><br/>\n                    <span>orders</span>\n                </ion-col>\n                <ion-col col-4>\n                    <span class="text-medium">3</span><br/>\n                    <span>wishlist</span>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-card-content>\n          <hr/>\n          <ion-row class="cardfooter">\n            <ion-col col-6>\n              <button ion-button (click)="openContactModal()">Contact Seller</button>\n            </ion-col>\n            <ion-col col-6>\n              <button ion-button (click)="gotoStore()">Visit Store</button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n\n        <ion-card >\n          <ion-item>\n            Similar Products\n          </ion-item>\n            <ion-card-content>\n              \n              <ion-grid class="products-grid">\n                <ion-row class="">\n                  <ion-col col-4 *ngFor="let p of products">\n                    <ion-card class="similar-products-card" style="padding-left:10px">\n                      <a style="text-decoration: none;color:black" (click)="productsDetails(p.id)" >\n                          <ion-card-content class="similar-products-card-content">\n                          <img src={{p.imgUrl}}>\n                          </ion-card-content>\n                          <span style="padding-left:10px;" class="price" style="font-size:10px">GHS 10.00</span> <br/>\n                          <span class="old-price">GHS 15.00</span>\n\n                      </a>\n                    </ion-card>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n    \n</ion-content>\n\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
    var ProductDetailsPage_1;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arraySort__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__arraySort__["a" /* ArraySortPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__arraySort__["a" /* ArraySortPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.substring(0, 1);
    };
    ArraySortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'arraySort',
        })
    ], ArraySortPipe);
    return ArraySortPipe;
}());

//# sourceMappingURL=arraySort.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.shouldShowCancel = true;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/app/app.html"*/'\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalvarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalvarsProvider = (function () {
    function GlobalvarsProvider() {
        this.enableSearch = false;
        this.showtitle = true;
    }
    GlobalvarsProvider.prototype.setActivePageName = function (value) {
        this.pagetitle = value;
    };
    GlobalvarsProvider.prototype.getActivePageName = function () {
        return this.pagetitle;
    };
    GlobalvarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalvarsProvider);
    return GlobalvarsProvider;
}());

//# sourceMappingURL=globalvars.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 *
 */
var StorePage = (function () {
    //navParams would contain an id of the store to load.
    //in the constructor a query to the database would load information of the store using the store_id.
    function StorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = [
            { name: "Melcome Ghana Ltd.", logo: "assets/productsimgs/microsoft_Surf.png" },
            { name: "Fosmoul Ghana Ltd.", logo: "assets/productsimgs/svision.png" }
        ];
        this.discount = [
            { name: "Big X'Mas", percentOff: 15, imgUrl: 'assets/images/latest.jpg' }
        ];
        this.products = [
            { id: 1, name: 'samsung 3.0 External Hard drive', price: 500.00, imgUrl: 'assets/productsimgs/hd1.jpeg' },
            { id: 2, name: 'HP Pavilion cc', price: 2500.00, imgUrl: 'assets/productsimgs/pavilioncc.png' },
            { id: 3, name: 'Toshiba 2.0/3.0 External Hard Drive', price: 560.00, imgUrl: 'assets/productsimgs/hd2.jpeg' },
            { id: 4, name: 'Microsoft Surf', price: 2800.00, imgUrl: 'assets/productsimgs/microsoft_Surf.png' },
            { id: 5, name: 'MacBook Pro', price: 3000.00, imgUrl: 'assets/productsimgs/macbookpro.png' },
            { id: 6, name: 'samsung vision', price: 2460.00, imgUrl: 'assets/productsimgs/svision.png' },
            { id: 7, name: 'Lenovo high-tech', price: 3000.00, imgUrl: 'assets/productsimgs/high-tech.png' }
        ];
        this.categories = [
            { name: 'Electronics', imgUrl: 'assets/images/eletronics.jpeg' },
            { name: 'For Men', imgUrl: 'assets/images/formen.jpg' },
            { name: 'For Ladies', imgUrl: 'assets/images/forladies1.jpg' },
            { name: 'Cosmetics', imgUrl: 'assets/images/cosmetics.jpg' },
            { name: 'Phones and Accessories', imgUrl: 'assets/images/phoneAccessories.png' },
            { name: 'Auto-Mobile and Accessories', imgUrl: 'assets/images/automobile.jpg' }
        ];
        this.imgUrl = "assets/images/brand1.jpg";
    }
    StorePage.prototype.productsDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */]);
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/store/store.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{store[0].name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="store-barnna">\n      <img src={{imgUrl}}>\n  </div>\n  <div class="store-name">\n    <span><img src={{store[0].logo}}></span>\n    <p><span>{{store[0].name}}</span></p>\n  </div>\n\n  <div style="margin-top:20px" >\n    <ion-row style="text-align: center">\n        <ion-col col-4>\n          <span class="text-medium">1</span><br/>\n          <span>starts</span>\n        </ion-col>\n        <ion-col col-4>\n            <span class="text-medium">2</span><br/>\n            <span>orders</span>\n        </ion-col>\n        <ion-col col-4>\n            <span class="text-medium">3</span><br/>\n            <span>wishlist</span>\n        </ion-col>\n      </ion-row>\n      <hr/>\n  </div>\n\n  <ion-card *ngIf="discount != null">\n    <div class="discount-img">\n      <img src={{discount[0].imgUrl}}>\n    </div>\n   \n  </ion-card>\n  <div class="store-stats">\n      <span>{{discount[0].name}}</span>\n      <span>{{discount[0].percentOff}}% off</span>\n    </div>\n\n  <ion-card *ngIf="categories != null"class="category-select">\n    <ion-select [(ngModel)]="category" >\n      <ion-option okText="Ok" cancelText="Dismiss" *ngFor="let cat of categories" value={{cat.name}}>{{cat.name}}</ion-option>\n    </ion-select>\n  </ion-card>\n\n\n\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 *ngFor="let p of products">\n        <a (click)="productsDetails(p.id)">\n          <div class="store-products">\n              <img src={{p.imgUrl}}>\n              <span>{{p.name}}</span><br/>\n              <span class="price">Ghs {{p.price}}</span><br/>\n              <span class="old-price">Ghs 1500</span>\n          </div>\n        </a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/store/store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandsPage = (function () {
    function BrandsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showtitle = true;
        this.enableSearch = false;
        this.pagetitle = "Brands";
        this.brands = [
            { name: 'Brand1', imgUrl: 'assets/images/brand1.jpg' },
            { name: 'Brand2', imgUrl: 'assets/images/brand2.jpg' },
            { name: 'Brand3', imgUrl: 'assets/images/brand3.png' }
        ];
        this.bestSelling = [
            { name: 'HP Pavilion cc', price: 2500.00, imgUrl: 'assets/productsimgs/pavilioncc.png' },
            { name: 'Toshiba 2.0/3.0 External Hard Drive', price: 560.00, imgUrl: 'assets/productsimgs/hd2.jpeg' },
            { name: 'Microsoft Surf', price: 2800.00, imgUrl: 'assets/productsimgs/microsoft_Surf.png' },
        ];
    }
    BrandsPage.prototype.productsDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */]);
    };
    BrandsPage.prototype.showSearch = function () {
        this.enableSearch = true;
        this.showtitle = false;
    };
    BrandsPage.prototype.onInput = function (event) {
    };
    BrandsPage.prototype.onCancel = function (event) {
    };
    BrandsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brands',template:/*ion-inline-start:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/brands/brands.html"*/'\n<ion-header>\n    <ion-navbar>\n            <ion-item class="seachbar-wrapper">\n                <span clear item-start class="header-title" *ngIf="showtitle==true"><ion-title>{{pagetitle}}</ion-title></span>\n                <ion-searchbar *ngIf="enableSearch==true" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n                </ion-searchbar>\n                \n                <span clear item-end><a (click)="showSearch()" class="navbarSearch-btn"><ion-icon name="search"></ion-icon></a></span>\n            </ion-item>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="home-slide">\n        <ion-slides autoplay="5000" loop="true" speed="500" pager="true">\n          <ion-slide>\n            <img class="radius"  src={{brands[0].imgUrl}}>\n          </ion-slide>\n    \n          <ion-slide>\n            <img class="radius"  src={{brands[1].imgUrl}}>\n          </ion-slide>\n    \n          <ion-slide>\n            <img class="radius"  src={{brands[2].imgUrl}}>\n          </ion-slide>\n    \n        </ion-slides>\n      </div>\n\n    <div style="padding-bottom: 50px;">\n      <ion-card *ngFor="let b of brands" class="brands-card">\n          <ion-card-content>\n            <ion-item class="brand-img">\n              <a><img src={{b.imgUrl}}></a>\n            </ion-item>\n            <div class="brand-name">\n              {{b.name}}\n            </div>\n            <ion-row>\n              <ion-col col-4 *ngFor="let bs of bestSelling">\n                <a (click)="productsDetails(bs.id)">\n                  <img src={{bs.imgUrl}}></a>\n                <span class="price">GHS {{bs.price}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n      </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/shadow001/ionicprojects/onlineshop/src/pages/home/brands/brands.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BrandsPage);
    return BrandsPage;
}());

//# sourceMappingURL=brands.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map