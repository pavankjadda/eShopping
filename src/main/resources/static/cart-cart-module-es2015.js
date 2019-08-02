(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api/cart/cart.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/cart/cart.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n\n<h1> My Cart</h1>\n\n<div *ngIf=\"cartDataAvailable()\"\n     class=\"table-responsive-sm table-responsive-xs table-responsive-md table-responsive-lg\">\n  <table class=\"table\">\n    <thead style=\"text-align: center\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Product</th>\n      <th scope=\"col\">Quantity</th>\n      <th scope=\"col\">Cost</th>\n      <th scope=\"col\"></th>\n    </tr>\n    </thead>\n    <tbody style=\"text-align: center\">\n    <tr *ngFor=\"let cartProduct of (cart.cartProducts); index as i\">\n      <th scope=\"row\">{{i + 1}}</th>\n      <td><a [routerLink]=\"['/product', cartProduct.product.id]\">{{cartProduct.product.name}}</a></td>\n      <td>\n        <p-spinner (onChange)=\"updateCartProductQuantity(cartProduct)\" [(ngModel)]=\"cartProduct.quantity\"  [step]=\"1\"  [max]=\"getInventory(cartProduct)\">\n          cartProduct.quantity\n        </p-spinner>\n      </td>\n      <td>{{cartProduct.product.price.currency.symbol}} {{cartProduct.quantity * cartProduct.product.price.amount}}</td>\n      <td>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"deleteProductFromCart(cartProduct)\">Delete</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n  <input (click)=\"deleteCart()\" class=\" btn btn-danger btn-sm\" type=\"button\" value=\"Delete Cart\">\n  <p style=\"text-align: center\">\n    <input (click)=\"goToProducts()\" class=\" btn btn-primary\" type=\"button\" value=\"All Products\" style=\"margin: 20px\">\n    <input (click)=\"checkout()\" class=\" btn btn-primary\" type=\"button\" value=\"Checkout\" style=\"margin: 20px\">\n\n  </p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/api/cart/cart-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/api/cart/cart-routing.module.ts ***!
  \*************************************************/
/*! exports provided: cartManagementRoute, CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartManagementRoute", function() { return cartManagementRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/api/cart/cart.component.ts");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





const cartManagementRoute = [
    {
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["UserAuthGuard"]]
    }
];
let CartRoutingModule = class CartRoutingModule {
};
CartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(cartManagementRoute),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], CartRoutingModule);



/***/ }),

/***/ "./src/app/api/cart/cart.component.css":
/*!*********************************************!*\
  !*** ./src/app/api/cart/cart.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/cart/cart.component.ts":
/*!********************************************!*\
  !*** ./src/app/api/cart/cart.component.ts ***!
  \********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/cart.service */ "./src/app/api/cart/service/cart.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








let CartComponent = class CartComponent {
    constructor(cartService, ngxSpinnerService, authService, router) {
        this.cartService = cartService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.totalCost = 0;
        this.getMyCart();
    }
    //Takes care update and delete if quantity is zero
    updateCartProductQuantity(cartProduct) {
        this.ngxSpinnerService.show();
        const cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'product/update';
        this.cartService.updateCartProduct(cartUrl, cartProduct).subscribe(data => {
            this.getMyCart();
            this.ngxSpinnerService.hide();
        }, error1 => {
            this.ngxSpinnerService.hide();
        });
    }
    deleteProductFromCart(cartProduct) {
        if (confirm('Are you sure you want to delete ' + cartProduct.product.name + ' from Cart?')) {
            this.ngxSpinnerService.show();
            const cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'product/delete/' + cartProduct.id;
            this.cartService.deleteCartProduct(cartUrl).subscribe(data => {
                this.getMyCart();
                this.ngxSpinnerService.hide();
            }, error1 => {
                this.ngxSpinnerService.hide();
            });
        }
    }
    cartDataAvailable() {
        return this.cart !== undefined && this.cart !== null && this.cartProducts.length >= 0;
    }
    deleteCart() {
        if (confirm('Are you sure you wanna delete the cart?')) {
            this.ngxSpinnerService.show();
            const cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'delete/' + this.cartService.getCurrentCart.id;
            this.cartService.deleteMyCart(cartUrl).subscribe(data => {
                this.getMyCart();
                this.ngxSpinnerService.hide();
            }, error1 => {
                this.ngxSpinnerService.hide();
            });
        }
    }
    getMyCart() {
        this.ngxSpinnerService.show();
        const cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'find/user/' + this.authService.currentUserValue.id;
        this.cartService.getMyCart(cartUrl).subscribe(data => {
            localStorage.setItem('currentCart', JSON.stringify(data));
            this.cartService.currentCartSubject.next(data);
            this.cart = data;
            if (data === null) {
                this.ngxSpinnerService.hide();
                return;
            }
            if (data.cartProducts !== null) {
                this.cartProducts = data.cartProducts;
            }
            this.getProductInventory();
            this.ngxSpinnerService.hide();
        });
    }
    getProductInventory() {
        let productIdList = [];
        this.cart.cartProducts.forEach(function (cartProduct) {
            productIdList.push(cartProduct.product.id);
        });
        const inventoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["INVENTORY_API_URL"] + 'product/ids';
        this.cartService.getProductInventory(inventoryUrl, productIdList).pipe()
            .subscribe(data => {
            this.productInventory = data;
        }, error => {
            console.log(error);
        });
    }
    getInventory(cartProduct) {
        if (this.productInventory !== undefined) {
            for (let i = 0; i < this.productInventory.length; i++) {
                if (cartProduct.product.id === this.productInventory[i].product.id && cartProduct.quantity <= this.productInventory[i].quantity) {
                    return this.productInventory[i].quantity;
                }
            }
        }
        return 1;
    }
    goToProducts() {
        this.router.navigate(['/product/list']);
    }
    checkout() {
        this.router.navigate(['/checkout']);
    }
};
CartComponent.ctorParameters = () => [
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/api/cart/cart.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
        _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], CartComponent);



/***/ }),

/***/ "./src/app/api/cart/cart.module.ts":
/*!*****************************************!*\
  !*** ./src/app/api/cart/cart.module.ts ***!
  \*****************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/api/cart/cart-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.component */ "./src/app/api/cart/cart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);









let CartModule = class CartModule {
};
CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CartRoutingModule"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["SpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], CartModule);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map