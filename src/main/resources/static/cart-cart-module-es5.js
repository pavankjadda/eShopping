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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/api/cart/cart.component.ts");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var cartManagementRoute = [
    {
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["UserAuthGuard"]]
    }
];
var CartRoutingModule = /** @class */ (function () {
    function CartRoutingModule() {
    }
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
    return CartRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/cart.service */ "./src/app/api/cart/service/cart.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, ngxSpinnerService, authService, router) {
        this.cartService = cartService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.authService = authService;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.totalCost = 0;
        this.getMyCart();
    };
    //Takes care update and delete if quantity is zero
    CartComponent.prototype.updateCartProductQuantity = function (cartProduct) {
        var _this = this;
        this.ngxSpinnerService.show();
        var cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'product/update';
        this.cartService.updateCartProduct(cartUrl, cartProduct).subscribe(function (data) {
            _this.getMyCart();
            _this.ngxSpinnerService.hide();
        }, function (error1) {
            _this.ngxSpinnerService.hide();
        });
    };
    CartComponent.prototype.deleteProductFromCart = function (cartProduct) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + cartProduct.product.name + ' from Cart?')) {
            this.ngxSpinnerService.show();
            var cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'product/delete/' + cartProduct.id;
            this.cartService.deleteCartProduct(cartUrl).subscribe(function (data) {
                _this.getMyCart();
                _this.ngxSpinnerService.hide();
            }, function (error1) {
                _this.ngxSpinnerService.hide();
            });
        }
    };
    CartComponent.prototype.cartDataAvailable = function () {
        return this.cart !== undefined && this.cart !== null && this.cartProducts.length >= 0;
    };
    CartComponent.prototype.deleteCart = function () {
        var _this = this;
        if (confirm('Are you sure you wanna delete the cart?')) {
            this.ngxSpinnerService.show();
            var cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'delete/' + this.cartService.getCurrentCart.id;
            this.cartService.deleteMyCart(cartUrl).subscribe(function (data) {
                _this.getMyCart();
                _this.ngxSpinnerService.hide();
            }, function (error1) {
                _this.ngxSpinnerService.hide();
            });
        }
    };
    CartComponent.prototype.getMyCart = function () {
        var _this = this;
        this.ngxSpinnerService.show();
        var cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CART_API_URL"] + 'find/user/' + this.authService.currentUserValue.id;
        this.cartService.getMyCart(cartUrl).subscribe(function (data) {
            localStorage.setItem('currentCart', JSON.stringify(data));
            _this.cartService.currentCartSubject.next(data);
            _this.cart = data;
            if (data === null) {
                _this.ngxSpinnerService.hide();
                return;
            }
            if (data.cartProducts !== null) {
                _this.cartProducts = data.cartProducts;
            }
            _this.getProductInventory();
            _this.ngxSpinnerService.hide();
        });
    };
    CartComponent.prototype.getProductInventory = function () {
        var _this = this;
        var productIdList = [];
        this.cart.cartProducts.forEach(function (cartProduct) {
            productIdList.push(cartProduct.product.id);
        });
        var inventoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["INVENTORY_API_URL"] + 'product/ids';
        this.cartService.getProductInventory(inventoryUrl, productIdList).pipe()
            .subscribe(function (data) {
            _this.productInventory = data;
        }, function (error) {
            console.log(error);
        });
    };
    CartComponent.prototype.getInventory = function (cartProduct) {
        if (this.productInventory !== undefined) {
            for (var i = 0; i < this.productInventory.length; i++) {
                if (cartProduct.product.id === this.productInventory[i].product.id && cartProduct.quantity <= this.productInventory[i].quantity) {
                    return this.productInventory[i].quantity;
                }
            }
        }
        return 1;
    };
    CartComponent.prototype.goToProducts = function () {
        this.router.navigate(['/product/list']);
    };
    CartComponent.prototype.checkout = function () {
        this.router.navigate(['/checkout']);
    };
    CartComponent.ctorParameters = function () { return [
        { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
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
    return CartComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/api/cart/cart-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.component */ "./src/app/api/cart/cart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);









var CartModule = /** @class */ (function () {
    function CartModule() {
    }
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
    return CartModule;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es5.js.map