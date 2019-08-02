(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api/product/product-delete/product-delete.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/product/product-delete/product-delete.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-delete works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/product/product-edit/product-edit.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/product/product-edit/product-edit.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"productDataAvailable()\">\n  <h2>Update Product</h2>\n  <br/>\n  <form [formGroup]=\"productForm\">\n    <div class=\"form-group\">\n      <label for=\"id\">Product Id</label>\n      <input class=\"form-control\" formControlName=\"id\" id=\"id\" name=\"id\"type=\"text\">\n      <small class=\"form-text text-muted\" id=\"emailHelp\"></small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input class=\"form-control\" formControlName=\"name\" id=\"name\" type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" required>\n      </textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"amount\">Price (In $)</label> <br/>\n      <input type=\"text\" formControlName=\"amount\" id=\"amount\"  required >\n    </div>\n\n    <div class=\"form-group\">\n      <label>Category:\n        <select [compareWith]=\"compareCategoryFn\"  class=\"form-control\" formControlName=\"categoryControl\" name=\"categoryControl\">\n          <option *ngFor=\"let category of categories\" [ngValue]=\"category\">\n            {{category.name}}\n          </option>\n        </select>\n      </label>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Manufacturer:\n        <select  [compareWith]=\"compareManufacturerFn\"  class=\"form-control\" formControlName=\"manufacturerControl\" name=\"manufacturerControl\">\n          <option *ngFor=\"let manufacturer of manufacturers\" [ngValue]=\"manufacturer\">\n            {{manufacturer.name}}\n          </option>\n        </select>\n      </label>\n    </div>\n\n    <button (click)=\"updateProduct()\" class=\"btn btn-primary\" type=\"submit\">Update</button>\n    <button (click)=\"goBack()\" class=\"btn btn-primary\" style=\"margin-left: 30px\" type=\"button\">Cancel</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/product/product-home/product-home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/product/product-home/product-home.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Products </h1>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"><a routerLink=\"list\" routerLinkActive=\"active\">All Products</a></li>\n  <li class=\"list-group-item\"><a routerLink=\"new\" routerLinkActive=\"active\">Create New Product</a></li>\n  <li class=\"list-group-item\"><a routerLink=\"update\" routerLinkActive=\"active\">Update Product</a></li>\n  <li class=\"list-group-item\"><a routerLink=\"delete\" routerLinkActive=\"active\">Delete Product</a></li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/product/product-list/product-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/product/product-list/product-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n<div class=\"container container-fluid\">\n  <h3 style=\"text-align: center\" > Products List</h3>\n  <div *ngIf=\"productsDataAvailable()\">\n    <table class=\"table table-bordered\">\n      <tr style=\"text-align: center\" >\n        <th> Product Id</th>\n        <th>Name</th>\n        <th>Category</th>\n        <th>Manufacturer</th>\n        <th>Price</th>\n        <th>Description</th>\n      </tr>\n\n      <tr *ngFor=\"let product of (products)\" style=\"text-align: center\">\n        <td>{{product.id}}</td>\n        <td><a [routerLink]=\"['/product', product.id]\">{{product.name}}</a></td>\n        <td>{{product.category.name}}</td>\n        <td>{{product.manufacturer.name}}</td>\n        <td>{{product.price.currency.symbol}}{{product.price.amount}}</td>\n        <td>{{product.description}}</td>\n      </tr>\n    </table>\n\n    <div style=\"text-align: center\">\n      <a [routerLink]=\"['/product']\" style=\"margin-right: 30px\">Back</a>\n      <a [routerLink]=\"['/product/new']\" style=\"margin-right: 30px\">Create New</a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/product/product-new/product-new.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/product/product-new/product-new.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<h2>Create New Product</h2>\n\n<br/>\n<form  [formGroup]=\"productForm\">\n  <div class=\"form-group\">\n    <label for=\"id\">Product Id</label>\n    <input type=\"text\" class=\"form-control\"  id=\"id\" formControlName=\"id\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">Automatically generated by system</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\"  id=\"name\" formControlName=\"name\" required placeholder=\"Enter Product Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <textarea class=\"form-control\"  id=\"description\" formControlName=\"description\" required placeholder=\"Enter Product Description\">\n    </textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"amount\">Price ($)</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"amount\" id=\"amount\" placeholder=\"Enter Product Price (in USD)\" required>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Category:\n      <select class=\"form-control\" name=\"categoryControl\" formControlName=\"categoryControl\">\n        <option  [ngValue]=\"category\" *ngFor=\"let category of categories\" [defaultSelected]=\"true\">\n          {{category.name}}\n        </option>\n      </select>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Manufacturer:\n      <select class=\"form-control\" formControlName=\"manufacturerControl\" name=\"manufacturerControl\">\n        <option   [ngValue]=\"manufacturer\" *ngFor=\"let manufacturer of manufacturers\"  [defaultSelected]=\"true\">\n          {{manufacturer.name}}\n        </option>\n      </select>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"createProduct()\">Submit</button>\n  <button type=\"button\" class=\"btn btn-primary\"  style=\"margin-left: 30px\" (click)=\"goBack()\">Cancel</button>\n\n</form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/product/product-view/product-view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/product/product-view/product-view.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n<div *ngIf=\"productDataAvailable()\">\n  <form [formGroup]=\"productForm\">\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"id\">Product Id</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control-plaintext\" formControlName=\"id\" id=\"id\" readonly type=\"text\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"name\">Name</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control-plaintext\" formControlName=\"name\" id=\"name\" readonly type=\"text\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"category\">Category</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control-plaintext\" formControlName=\"category\" id=\"category\" readonly type=\"text\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"manufacturer\">Manufacturer</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control-plaintext\" formControlName=\"manufacturer\" id=\"manufacturer\" readonly type=\"text\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"quantityAvailable\">Price</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control-plaintext\" id=\"quantityAvailable\" formControlName=\"price\"  readonly type=\"text\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"price\">Available Quantity</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control-plaintext\" id=\"price\" formControlName=\"quantityAvailable\"  readonly type=\"text\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"description\">Description</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control-plaintext\" formControlName=\"description\"  id=\"description\" readonly type=\"text\">\n      </div>\n    </div>\n  </form>\n\n\n<p>\n  <a [routerLink]=\"['/product/list']\" style=\"margin-right: 30px\">Back </a>\n  <a [routerLink]=\"['./edit']\" style=\"margin-right: 30px\">Edit </a>\n  <a [routerLink]=\"['./delete']\">Delete </a>\n  <br/>  <br/>\n  <input type=\"button\" class=\" btn btn-primary\" (click)=\"addProductToCart()\" value=\"Add to Cart\" [disabled]=\"isProductInventoryEmpty()\">\n\n</p>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/product/product.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/product/product.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/api/cart/model/cart-product.ts":
/*!************************************************!*\
  !*** ./src/app/api/cart/model/cart-product.ts ***!
  \************************************************/
/*! exports provided: CartProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProduct", function() { return CartProduct; });
class CartProduct {
}


/***/ }),

/***/ "./src/app/api/cart/service/cart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/api/cart/service/cart.service.ts ***!
  \**************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






let CartService = class CartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        if (localStorage.getItem('currentCart') === 'undefined' || localStorage.getItem('currentCart') === null) {
            this.currentCartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
            this.currentCart = this.currentCartSubject.asObservable();
        }
        else {
            this.currentCartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentCart')));
            this.currentCart = this.currentCartSubject.asObservable();
        }
        this.getDraftCartStatusFromBackend();
    }
    static doesProductExistInCart(cart, newCartProduct) {
        if (cart.cartProducts === null || cart.cartProducts === undefined || cart.cartProducts.length === 0) {
            newCartProduct.quantity = 1;
        }
        for (let i = 0; i < cart.cartProducts.length; i++) {
            if (cart.cartProducts[i].product.id === newCartProduct.product.id) {
                newCartProduct.quantity = cart.cartProducts[i].quantity + 1;
                newCartProduct.id = cart.cartProducts[i].id;
                break;
            }
        }
        return newCartProduct;
    }
    initializeCart(initializeCartUrl, userProfile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.httpClient.post(initializeCartUrl, userProfile).toPromise();
            localStorage.setItem('currentCart', JSON.stringify(response));
            this.currentCartSubject.next(response);
        });
    }
    get getCurrentCart() {
        return this.currentCartSubject.value;
    }
    getMyCart(url) {
        return this.httpClient.get(url);
    }
    addProductToCart(url, cartProduct) {
        return this.httpClient.post(url, cartProduct);
    }
    getTaxRate(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.httpClient.get(url).toPromise();
        });
    }
    changeShippingAddress(url, cartShippingAddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.httpClient.post(url, cartShippingAddress).toPromise();
        });
    }
    changeBillingAddress(url, cartBillingAddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.httpClient.post(url, cartBillingAddress).toPromise();
        });
    }
    getDraftCartStatus() {
        let statusLength = this.cartStatuses.length;
        for (let i = 0; i < statusLength; i++) {
            if (this.cartStatuses[i].status === 'Draft') {
                return this.cartStatuses[i];
            }
        }
        return null;
    }
    getDraftCartStatusFromBackend() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["CART_STATUS_API_URL"] + 'list';
        this.httpClient.get(url).subscribe(data => {
            this.cartStatuses = data;
        }, error1 => {
            console.log('Failed to load Cart Status');
        });
    }
    deleteMyCart(cartUrl) {
        return this.httpClient.delete(cartUrl);
    }
    updateCartProduct(cartUrl, cartProduct) {
        return this.httpClient.post(cartUrl, cartProduct);
    }
    deleteCartProduct(cartUrl) {
        return this.httpClient.delete(cartUrl);
    }
    getProductInventory(inventoryUrl, productIdList) {
        return this.httpClient.post(inventoryUrl, productIdList);
    }
    createOrder(url, cartId) {
        return this.httpClient.post(url, cartId);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CartService);



/***/ }),

/***/ "./src/app/api/product/model/currency.ts":
/*!***********************************************!*\
  !*** ./src/app/api/product/model/currency.ts ***!
  \***********************************************/
/*! exports provided: Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
class Currency {
    constructor(id) {
        this.id = id;
    }
}
Currency.ctorParameters = () => [
    { type: Number }
];


/***/ }),

/***/ "./src/app/api/product/model/price.ts":
/*!********************************************!*\
  !*** ./src/app/api/product/model/price.ts ***!
  \********************************************/
/*! exports provided: Price */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Price", function() { return Price; });
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency */ "./src/app/api/product/model/currency.ts");

class Price {
    constructor(currency, amount) {
        this.currency = currency;
        this.amount = amount;
    }
}
Price.ctorParameters = () => [
    { type: _currency__WEBPACK_IMPORTED_MODULE_0__["Currency"] },
    { type: Number }
];


/***/ }),

/***/ "./src/app/api/product/model/product.ts":
/*!**********************************************!*\
  !*** ./src/app/api/product/model/product.ts ***!
  \**********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "./src/app/api/product/product-delete/product-delete.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/api/product/product-delete/product-delete.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9wcm9kdWN0L3Byb2R1Y3QtZGVsZXRlL3Byb2R1Y3QtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/api/product/product-delete/product-delete.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/api/product/product-delete/product-delete.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteComponent", function() { return ProductDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductDeleteComponent = class ProductDeleteComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-delete',
        template: __webpack_require__(/*! raw-loader!./product-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-delete/product-delete.component.html"),
        styles: [__webpack_require__(/*! ./product-delete.component.css */ "./src/app/api/product/product-delete/product-delete.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductDeleteComponent);



/***/ }),

/***/ "./src/app/api/product/product-edit/product-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/api/product/product-edit/product-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9wcm9kdWN0L3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/product/product-edit/product-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/api/product/product-edit/product-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product */ "./src/app/api/product/model/product.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _category_service_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../category/service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");









let ProductEditComponent = class ProductEditComponent {
    constructor(productService, categoryService, route, router) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            categoryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            manufacturerControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
    }
    ngOnInit() {
        this.loadCategories();
        this.loadCurrencies();
        this.loadManufacturers();
        this.getProduct();
    }
    getProduct() {
        const id = this.route.snapshot.paramMap.get('id');
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["PRODUCT_API_URL"] + 'find/' + id;
        this.productService.getProductDetails(url).pipe()
            .subscribe(data => {
            this.product = data;
            this.productForm.patchValue({
                id: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
                amount: data.price.amount,
                currency: data.price.currency,
                categoryControl: data.category,
                manufacturerControl: data.manufacturer,
            });
        }, error => {
            console.log(error);
        }, () => console.log('getProduct() success'));
    }
    updateProduct() {
        const id = this.route.snapshot.paramMap.get('id');
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["PRODUCT_API_URL"] + 'update';
        const product = new _model_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        product.id = Number(id);
        product.name = this.productForm.value.name;
        product.description = this.productForm.value.description;
        product.category = this.productForm.value.categoryControl;
        product.manufacturer = this.productForm.value.manufacturerControl;
        product.price = this.productForm.value.price;
        product.price.amount = this.productForm.value.amount;
        this.productService.updateProduct(url, product).subscribe(value => {
            console.log('Successfully updated product');
        }, error1 => {
            console.log('Failed to update product');
        }, () => {
            this.router.navigate(['/product/list']);
        });
    }
    loadCategories() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORY_API_URL"] + 'list';
        this.categoryService.getCategories(url).subscribe(categories => {
            this.categories = categories;
            console.log('Successfully loaded categories');
        }, error1 => {
            console.log('Failed to load categories');
        }, () => {
        });
    }
    loadCurrencies() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CURRENCY_API_URL"] + 'list';
        this.productService.getCurrencies(url).subscribe(currencies => {
            this.currencies = currencies;
        }, error1 => {
            console.log('Failed to load currencies');
        }, () => {
        });
    }
    loadManufacturers() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["MANUFACTURER_API_URL"] + 'list';
        this.productService.getManufacturers(url).subscribe(manufacturers => {
            this.manufacturers = manufacturers;
            console.log('Successfully loaded manufacturers');
        }, error1 => {
            console.log('Failed to load manufacturers');
        }, () => {
        });
    }
    productDataAvailable() {
        return this.product !== undefined;
    }
    compareCategoryFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    compareManufacturerFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    goBack() {
        this.router.navigate(['/product/list']);
    }
};
ProductEditComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _category_service_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-edit',
        template: __webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-edit/product-edit.component.html"),
        styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/api/product/product-edit/product-edit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _category_service_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ProductEditComponent);



/***/ }),

/***/ "./src/app/api/product/product-home/product-home.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/api/product/product-home/product-home.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9wcm9kdWN0L3Byb2R1Y3QtaG9tZS9wcm9kdWN0LWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/product/product-home/product-home.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/api/product/product-home/product-home.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHomeComponent", function() { return ProductHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let ProductHomeComponent = class ProductHomeComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn()) {
        }
    }
};
ProductHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ProductHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-home',
        template: __webpack_require__(/*! raw-loader!./product-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-home/product-home.component.html"),
        styles: [__webpack_require__(/*! ./product-home.component.css */ "./src/app/api/product/product-home/product-home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], ProductHomeComponent);



/***/ }),

/***/ "./src/app/api/product/product-list/product-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/api/product/product-list/product-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/product/product-list/product-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/api/product/product-list/product-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






let ProductListComponent = class ProductListComponent {
    constructor(productService, spinner) {
        this.productService = productService;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.getProducts();
    }
    productsDataAvailable() {
        return this.products !== undefined;
    }
    getProducts() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_API_URL"] + 'list';
        this.spinner.show();
        this.productService.getProducts(url).subscribe(data => {
            this.products = data;
            this.spinner.hide();
        }, err => {
            this.spinner.hide();
            console.error(err);
        }, () => {
            this.spinner.hide();
        });
        return this.products;
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/api/product/product-list/product-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
], ProductListComponent);



/***/ }),

/***/ "./src/app/api/product/product-new/product-new.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/api/product/product-new/product-new.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9wcm9kdWN0L3Byb2R1Y3QtbmV3L3Byb2R1Y3QtbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/api/product/product-new/product-new.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/api/product/product-new/product-new.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductNewComponent", function() { return ProductNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/product */ "./src/app/api/product/model/product.ts");
/* harmony import */ var _model_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/price */ "./src/app/api/product/model/price.ts");
/* harmony import */ var _category_service_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../category/service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/currency */ "./src/app/api/product/model/currency.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");











let ProductNewComponent = class ProductNewComponent {
    constructor(productService, categoryService, router) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.router = router;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            categoryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            manufacturerControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    ngOnInit() {
        this.loadCategories();
        this.loadCurrencies();
        this.loadManufacturers();
    }
    createProduct() {
        const product = new _model_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        product.name = this.productForm.value.name;
        product.description = this.productForm.value.description;
        product.price = new _model_price__WEBPACK_IMPORTED_MODULE_7__["Price"](this.getCurrency(), this.productForm.value.amount);
        product.category = this.productForm.value.categoryControl;
        product.manufacturer = this.productForm.value.manufacturerControl;
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["PRODUCT_API_URL"] + 'create';
        this.productService.createProduct(url, product).subscribe(value => {
            console.log('Successfully created product');
        }, error1 => {
            console.log('Failed to create product');
        }, () => {
            this.router.navigate(['/product/list']);
        });
    }
    getCurrency() {
        for (let currency of this.currencies) {
            if (currency.symbol === '$') {
                return new _model_currency__WEBPACK_IMPORTED_MODULE_9__["Currency"](currency.id);
            }
        }
        return undefined;
    }
    loadCategories() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORY_API_URL"] + 'list';
        this.categoryService.getCategories(url).subscribe(categories => {
            this.categories = categories;
        }, error1 => {
        }, () => {
        });
    }
    loadCurrencies() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CURRENCY_API_URL"] + 'list';
        this.productService.getCurrencies(url).subscribe(currencies => {
            this.currencies = currencies;
        }, error1 => {
        }, () => {
        });
    }
    loadManufacturers() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["MANUFACTURER_API_URL"] + 'list';
        this.productService.getManufacturers(url).subscribe(manufacturers => {
            this.manufacturers = manufacturers;
        }, error1 => {
        }, () => {
        });
    }
    manufacturersDataAvailable() {
        return this.manufacturers !== undefined;
    }
    categoriesDataAvailable() {
        return this.categories !== undefined;
    }
    currenciesDataAvailable() {
        return this.currencies !== undefined;
    }
    goBack() {
        this.router.navigate(['/product']);
    }
};
ProductNewComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _category_service_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-new',
        template: __webpack_require__(/*! raw-loader!./product-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-new/product-new.component.html"),
        styles: [__webpack_require__(/*! ./product-new.component.css */ "./src/app/api/product/product-new/product-new.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _category_service_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductNewComponent);



/***/ }),

/***/ "./src/app/api/product/product-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/api/product/product-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: productManagementRoute, ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productManagementRoute", function() { return productManagementRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/api/product/product-list/product-list.component.ts");
/* harmony import */ var _product_new_product_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-new/product-new.component */ "./src/app/api/product/product-new/product-new.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/api/product/product-edit/product-edit.component.ts");
/* harmony import */ var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-delete/product-delete.component */ "./src/app/api/product/product-delete/product-delete.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/api/product/product-view/product-view.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/api/product/product-home/product-home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");










const productManagementRoute = [
    {
        path: '',
        component: _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_8__["ProductHomeComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]],
    },
    {
        path: 'list',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]],
    },
    {
        path: 'new',
        component: _product_new_product_new_component__WEBPACK_IMPORTED_MODULE_4__["ProductNewComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]],
    },
    {
        path: ':id',
        component: _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_7__["ProductViewComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]],
    },
    {
        path: ':id/edit',
        component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]],
    },
    {
        path: ':id/delete',
        component: _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_6__["ProductDeleteComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]],
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productManagementRoute),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/api/product/product-view/product-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/api/product/product-view/product-view.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9wcm9kdWN0L3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/product/product-view/product-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/api/product/product-view/product-view.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/service/cart.service */ "./src/app/api/cart/service/cart.service.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _cart_model_cart_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cart/model/cart-product */ "./src/app/api/cart/model/cart-product.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");












let ProductViewComponent = class ProductViewComponent {
    constructor(productService, route, cartService, authService, httpClient, spinner, router) {
        this.productService = productService;
        this.route = route;
        this.cartService = cartService;
        this.authService = authService;
        this.httpClient = httpClient;
        this.spinner = spinner;
        this.router = router;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            manufacturer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            quantityAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.getProduct();
        this.getProductQuantityFromInventory();
    }
    productDataAvailable() {
        return this.product !== undefined;
    }
    addProductToCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            let cart = this.cartService.getCurrentCart;
            if (cart === null) {
                const initializeCartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["CART_API_URL"] + 'initialize';
                let userProfile = this.authService.currentUserSubject.value.userProfile;
                yield this.cartService.initializeCart(initializeCartUrl, userProfile);
            }
            cart = this.cartService.getCurrentCart;
            const addProductToCartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["CART_API_URL"] + 'product/add';
            let newCartProduct = new _cart_model_cart_product__WEBPACK_IMPORTED_MODULE_8__["CartProduct"]();
            newCartProduct.product = this.product;
            newCartProduct.quantity = 1;
            newCartProduct.cart = cart;
            //newCartProduct.cart.id=cart.id;
            newCartProduct = _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"].doesProductExistInCart(cart, newCartProduct);
            this.cartService.addProductToCart(addProductToCartUrl, newCartProduct).subscribe(data => {
                localStorage.setItem('currentCart', JSON.stringify(data));
                this.cartService.currentCartSubject.next(data);
            }, error1 => {
                this.spinner.hide();
                console.log('Failed to update cart');
            }, () => {
                this.router.navigate(['/cart']);
            });
        });
    }
    getProduct() {
        const id = this.route.snapshot.paramMap.get('id');
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_API_URL"] + 'find/' + id;
        this.productService.getProductDetails(url).pipe()
            .subscribe(data => {
            this.product = data;
            this.productForm.patchValue({
                id: data.id,
                name: data.name,
                description: data.description,
                price: data.price.currency.symbol + data.price.amount,
                amount: data.price.amount,
                currency: data.price.currency.symbol,
                category: data.category.name,
                manufacturer: data.manufacturer.name,
            });
        }, error => {
            console.log(error);
        });
    }
    getProductQuantityFromInventory() {
        const id = this.route.snapshot.paramMap.get('id');
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["INVENTORY_API_URL"] + 'product/' + id;
        this.productService.getProductInventory(url).pipe()
            .subscribe(data => {
            this.productInventory = data;
            this.productForm.patchValue({
                quantityAvailable: data.quantity,
            });
        }, error => {
            console.log(error);
        });
    }
    isProductInventoryEmpty() {
        return this.productInventory !== undefined && this.productInventory.quantity <= 0;
    }
};
ProductViewComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-view',
        template: __webpack_require__(/*! raw-loader!./product-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-view/product-view.component.html"),
        styles: [__webpack_require__(/*! ./product-view.component.css */ "./src/app/api/product/product-view/product-view.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductViewComponent);



/***/ }),

/***/ "./src/app/api/product/product.component.css":
/*!***************************************************!*\
  !*** ./src/app/api/product/product.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/product/product.component.ts":
/*!**************************************************!*\
  !*** ./src/app/api/product/product.component.ts ***!
  \**************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");



let ProductComponent = class ProductComponent {
    ngOnInit() {
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].isUserLoggedIn()) {
        }
    }
};
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/api/product/product.component.css")]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/api/product/product.module.ts":
/*!***********************************************!*\
  !*** ./src/app/api/product/product.module.ts ***!
  \***********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/api/product/product.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/api/product/product-home/product-home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/api/product/product-list/product-list.component.ts");
/* harmony import */ var _product_new_product_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-new/product-new.component */ "./src/app/api/product/product-new/product-new.component.ts");
/* harmony import */ var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-delete/product-delete.component */ "./src/app/api/product/product-delete/product-delete.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/api/product/product-view/product-view.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/api/product/product-edit/product-edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/api/product/product-routing.module.ts");














let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
            _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_3__["ProductHomeComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
            _product_new_product_new_component__WEBPACK_IMPORTED_MODULE_5__["ProductNewComponent"],
            _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_6__["ProductDeleteComponent"],
            _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_7__["ProductViewComponent"],
            _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductEditComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_13__["ProductRoutingModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]
        ]
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map