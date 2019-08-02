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
var CartProduct = /** @class */ (function () {
    function CartProduct() {
    }
    return CartProduct;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var CartService = /** @class */ (function () {
    function CartService(httpClient) {
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
    CartService.doesProductExistInCart = function (cart, newCartProduct) {
        if (cart.cartProducts === null || cart.cartProducts === undefined || cart.cartProducts.length === 0) {
            newCartProduct.quantity = 1;
        }
        for (var i = 0; i < cart.cartProducts.length; i++) {
            if (cart.cartProducts[i].product.id === newCartProduct.product.id) {
                newCartProduct.quantity = cart.cartProducts[i].quantity + 1;
                newCartProduct.id = cart.cartProducts[i].id;
                break;
            }
        }
        return newCartProduct;
    };
    CartService.prototype.initializeCart = function (initializeCartUrl, userProfile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(initializeCartUrl, userProfile).toPromise()];
                    case 1:
                        response = _a.sent();
                        localStorage.setItem('currentCart', JSON.stringify(response));
                        this.currentCartSubject.next(response);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CartService.prototype, "getCurrentCart", {
        get: function () {
            return this.currentCartSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.getMyCart = function (url) {
        return this.httpClient.get(url);
    };
    CartService.prototype.addProductToCart = function (url, cartProduct) {
        return this.httpClient.post(url, cartProduct);
    };
    CartService.prototype.getTaxRate = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(url).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.changeShippingAddress = function (url, cartShippingAddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(url, cartShippingAddress).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.changeBillingAddress = function (url, cartBillingAddress) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(url, cartBillingAddress).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.getDraftCartStatus = function () {
        var statusLength = this.cartStatuses.length;
        for (var i = 0; i < statusLength; i++) {
            if (this.cartStatuses[i].status === 'Draft') {
                return this.cartStatuses[i];
            }
        }
        return null;
    };
    CartService.prototype.getDraftCartStatusFromBackend = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["CART_STATUS_API_URL"] + 'list';
        this.httpClient.get(url).subscribe(function (data) {
            _this.cartStatuses = data;
        }, function (error1) {
            console.log('Failed to load Cart Status');
        });
    };
    CartService.prototype.deleteMyCart = function (cartUrl) {
        return this.httpClient.delete(cartUrl);
    };
    CartService.prototype.updateCartProduct = function (cartUrl, cartProduct) {
        return this.httpClient.post(cartUrl, cartProduct);
    };
    CartService.prototype.deleteCartProduct = function (cartUrl) {
        return this.httpClient.delete(cartUrl);
    };
    CartService.prototype.getProductInventory = function (inventoryUrl, productIdList) {
        return this.httpClient.post(inventoryUrl, productIdList);
    };
    CartService.prototype.createOrder = function (url, cartId) {
        return this.httpClient.post(url, cartId);
    };
    CartService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



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
var Currency = /** @class */ (function () {
    function Currency(id) {
        this.id = id;
    }
    Currency.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return Currency;
}());



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

var Price = /** @class */ (function () {
    function Price(currency, amount) {
        this.currency = currency;
        this.amount = amount;
    }
    Price.ctorParameters = function () { return [
        { type: _currency__WEBPACK_IMPORTED_MODULE_0__["Currency"] },
        { type: Number }
    ]; };
    return Price;
}());



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
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductDeleteComponent = /** @class */ (function () {
    function ProductDeleteComponent() {
    }
    ProductDeleteComponent.prototype.ngOnInit = function () {
    };
    ProductDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-delete',
            template: __webpack_require__(/*! raw-loader!./product-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-delete/product-delete.component.html"),
            styles: [__webpack_require__(/*! ./product-delete.component.css */ "./src/app/api/product/product-delete/product-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductDeleteComponent);
    return ProductDeleteComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product */ "./src/app/api/product/model/product.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _category_service_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../category/service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");









var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(productService, categoryService, route, router) {
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
    ProductEditComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        this.loadCurrencies();
        this.loadManufacturers();
        this.getProduct();
    };
    ProductEditComponent.prototype.getProduct = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["PRODUCT_API_URL"] + 'find/' + id;
        this.productService.getProductDetails(url).pipe()
            .subscribe(function (data) {
            _this.product = data;
            _this.productForm.patchValue({
                id: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
                amount: data.price.amount,
                currency: data.price.currency,
                categoryControl: data.category,
                manufacturerControl: data.manufacturer,
            });
        }, function (error) {
            console.log(error);
        }, function () { return console.log('getProduct() success'); });
    };
    ProductEditComponent.prototype.updateProduct = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["PRODUCT_API_URL"] + 'update';
        var product = new _model_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        product.id = Number(id);
        product.name = this.productForm.value.name;
        product.description = this.productForm.value.description;
        product.category = this.productForm.value.categoryControl;
        product.manufacturer = this.productForm.value.manufacturerControl;
        product.price = this.productForm.value.price;
        product.price.amount = this.productForm.value.amount;
        this.productService.updateProduct(url, product).subscribe(function (value) {
            console.log('Successfully updated product');
        }, function (error1) {
            console.log('Failed to update product');
        }, function () {
            _this.router.navigate(['/product/list']);
        });
    };
    ProductEditComponent.prototype.loadCategories = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORY_API_URL"] + 'list';
        this.categoryService.getCategories(url).subscribe(function (categories) {
            _this.categories = categories;
            console.log('Successfully loaded categories');
        }, function (error1) {
            console.log('Failed to load categories');
        }, function () {
        });
    };
    ProductEditComponent.prototype.loadCurrencies = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CURRENCY_API_URL"] + 'list';
        this.productService.getCurrencies(url).subscribe(function (currencies) {
            _this.currencies = currencies;
        }, function (error1) {
            console.log('Failed to load currencies');
        }, function () {
        });
    };
    ProductEditComponent.prototype.loadManufacturers = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["MANUFACTURER_API_URL"] + 'list';
        this.productService.getManufacturers(url).subscribe(function (manufacturers) {
            _this.manufacturers = manufacturers;
            console.log('Successfully loaded manufacturers');
        }, function (error1) {
            console.log('Failed to load manufacturers');
        }, function () {
        });
    };
    ProductEditComponent.prototype.productDataAvailable = function () {
        return this.product !== undefined;
    };
    ProductEditComponent.prototype.compareCategoryFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    ProductEditComponent.prototype.compareManufacturerFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    ProductEditComponent.prototype.goBack = function () {
        this.router.navigate(['/product/list']);
    };
    ProductEditComponent.ctorParameters = function () { return [
        { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _category_service_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
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
    return ProductEditComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ProductHomeComponent.prototype.ngOnInit = function () {
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn()) {
        }
    };
    ProductHomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
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
    return ProductHomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, spinner) {
        this.productService = productService;
        this.spinner = spinner;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductListComponent.prototype.productsDataAvailable = function () {
        return this.products !== undefined;
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_API_URL"] + 'list';
        this.spinner.show();
        this.productService.getProducts(url).subscribe(function (data) {
            _this.products = data;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            console.error(err);
        }, function () {
            _this.spinner.hide();
        });
        return this.products;
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/api/product/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/product */ "./src/app/api/product/model/product.ts");
/* harmony import */ var _model_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/price */ "./src/app/api/product/model/price.ts");
/* harmony import */ var _category_service_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../category/service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/currency */ "./src/app/api/product/model/currency.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");











var ProductNewComponent = /** @class */ (function () {
    function ProductNewComponent(productService, categoryService, router) {
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
    ProductNewComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        this.loadCurrencies();
        this.loadManufacturers();
    };
    ProductNewComponent.prototype.createProduct = function () {
        var _this = this;
        var product = new _model_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        product.name = this.productForm.value.name;
        product.description = this.productForm.value.description;
        product.price = new _model_price__WEBPACK_IMPORTED_MODULE_7__["Price"](this.getCurrency(), this.productForm.value.amount);
        product.category = this.productForm.value.categoryControl;
        product.manufacturer = this.productForm.value.manufacturerControl;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["PRODUCT_API_URL"] + 'create';
        this.productService.createProduct(url, product).subscribe(function (value) {
            console.log('Successfully created product');
        }, function (error1) {
            console.log('Failed to create product');
        }, function () {
            _this.router.navigate(['/product/list']);
        });
    };
    ProductNewComponent.prototype.getCurrency = function () {
        for (var _i = 0, _a = this.currencies; _i < _a.length; _i++) {
            var currency = _a[_i];
            if (currency.symbol === '$') {
                return new _model_currency__WEBPACK_IMPORTED_MODULE_9__["Currency"](currency.id);
            }
        }
        return undefined;
    };
    ProductNewComponent.prototype.loadCategories = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORY_API_URL"] + 'list';
        this.categoryService.getCategories(url).subscribe(function (categories) {
            _this.categories = categories;
        }, function (error1) {
        }, function () {
        });
    };
    ProductNewComponent.prototype.loadCurrencies = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["CURRENCY_API_URL"] + 'list';
        this.productService.getCurrencies(url).subscribe(function (currencies) {
            _this.currencies = currencies;
        }, function (error1) {
        }, function () {
        });
    };
    ProductNewComponent.prototype.loadManufacturers = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_5__["MANUFACTURER_API_URL"] + 'list';
        this.productService.getManufacturers(url).subscribe(function (manufacturers) {
            _this.manufacturers = manufacturers;
        }, function (error1) {
        }, function () {
        });
    };
    ProductNewComponent.prototype.manufacturersDataAvailable = function () {
        return this.manufacturers !== undefined;
    };
    ProductNewComponent.prototype.categoriesDataAvailable = function () {
        return this.categories !== undefined;
    };
    ProductNewComponent.prototype.currenciesDataAvailable = function () {
        return this.currencies !== undefined;
    };
    ProductNewComponent.prototype.goBack = function () {
        this.router.navigate(['/product']);
    };
    ProductNewComponent.ctorParameters = function () { return [
        { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _category_service_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-new',
            template: __webpack_require__(/*! raw-loader!./product-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product-new/product-new.component.html"),
            styles: [__webpack_require__(/*! ./product-new.component.css */ "./src/app/api/product/product-new/product-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _category_service_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductNewComponent);
    return ProductNewComponent;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/api/product/product-list/product-list.component.ts");
/* harmony import */ var _product_new_product_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-new/product-new.component */ "./src/app/api/product/product-new/product-new.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/api/product/product-edit/product-edit.component.ts");
/* harmony import */ var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-delete/product-delete.component */ "./src/app/api/product/product-delete/product-delete.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/api/product/product-view/product-view.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/api/product/product-home/product-home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");










var productManagementRoute = [
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
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
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
    return ProductRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ "./src/app/api/product/service/product.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cart/service/cart.service */ "./src/app/api/cart/service/cart.service.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _cart_model_cart_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cart/model/cart-product */ "./src/app/api/cart/model/cart-product.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");












var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(productService, route, cartService, authService, httpClient, spinner, router) {
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
    ProductViewComponent.prototype.ngOnInit = function () {
        this.getProduct();
        this.getProductQuantityFromInventory();
    };
    ProductViewComponent.prototype.productDataAvailable = function () {
        return this.product !== undefined;
    };
    ProductViewComponent.prototype.addProductToCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cart, initializeCartUrl, userProfile, addProductToCartUrl, newCartProduct;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.show();
                        cart = this.cartService.getCurrentCart;
                        if (!(cart === null)) return [3 /*break*/, 2];
                        initializeCartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["CART_API_URL"] + 'initialize';
                        userProfile = this.authService.currentUserSubject.value.userProfile;
                        return [4 /*yield*/, this.cartService.initializeCart(initializeCartUrl, userProfile)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        cart = this.cartService.getCurrentCart;
                        addProductToCartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["CART_API_URL"] + 'product/add';
                        newCartProduct = new _cart_model_cart_product__WEBPACK_IMPORTED_MODULE_8__["CartProduct"]();
                        newCartProduct.product = this.product;
                        newCartProduct.quantity = 1;
                        newCartProduct.cart = cart;
                        //newCartProduct.cart.id=cart.id;
                        newCartProduct = _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"].doesProductExistInCart(cart, newCartProduct);
                        this.cartService.addProductToCart(addProductToCartUrl, newCartProduct).subscribe(function (data) {
                            localStorage.setItem('currentCart', JSON.stringify(data));
                            _this.cartService.currentCartSubject.next(data);
                        }, function (error1) {
                            _this.spinner.hide();
                            console.log('Failed to update cart');
                        }, function () {
                            _this.router.navigate(['/cart']);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductViewComponent.prototype.getProduct = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_API_URL"] + 'find/' + id;
        this.productService.getProductDetails(url).pipe()
            .subscribe(function (data) {
            _this.product = data;
            _this.productForm.patchValue({
                id: data.id,
                name: data.name,
                description: data.description,
                price: data.price.currency.symbol + data.price.amount,
                amount: data.price.amount,
                currency: data.price.currency.symbol,
                category: data.category.name,
                manufacturer: data.manufacturer.name,
            });
        }, function (error) {
            console.log(error);
        });
    };
    ProductViewComponent.prototype.getProductQuantityFromInventory = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_4__["INVENTORY_API_URL"] + 'product/' + id;
        this.productService.getProductInventory(url).pipe()
            .subscribe(function (data) {
            _this.productInventory = data;
            _this.productForm.patchValue({
                quantityAvailable: data.quantity,
            });
        }, function (error) {
            console.log(error);
        });
    };
    ProductViewComponent.prototype.isProductInventoryEmpty = function () {
        return this.productInventory !== undefined && this.productInventory.quantity <= 0;
    };
    ProductViewComponent.ctorParameters = function () { return [
        { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
        { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
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
    return ProductViewComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");



var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].isUserLoggedIn()) {
        }
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/api/product/product.component.css")]
        })
    ], ProductComponent);
    return ProductComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/api/product/product.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/api/product/product-home/product-home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/api/product/product-list/product-list.component.ts");
/* harmony import */ var _product_new_product_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-new/product-new.component */ "./src/app/api/product/product-new/product-new.component.ts");
/* harmony import */ var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-delete/product-delete.component */ "./src/app/api/product/product-delete/product-delete.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/api/product/product-view/product-view.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/api/product/product-edit/product-edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/api/product/product-routing.module.ts");














var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
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
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module-es5.js.map