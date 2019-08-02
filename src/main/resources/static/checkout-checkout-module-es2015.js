(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api/checkout/checkout.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/checkout/checkout.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n<div class=\"container container-fluid\">\n  <h1 style=\"text-align: center\"> Checkout</h1>\n  <br/>\n\n  <div class=\"card border-info\">\n    <div class=\"card-header\"> <h4> Review Items </h4></div>\n    <div class=\"card-body\">\n      <div *ngIf=\"cartDataAvailable()\" class=\"table-responsive-sm table-responsive-xs table-responsive-md table-responsive-lg\">\n        <table class=\"table\">\n          <thead style=\"text-align: center\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Product</th>\n            <th scope=\"col\">Quantity</th>\n            <th scope=\"col\">Cost</th>\n            <th scope=\"col\"></th>\n          </tr>\n          </thead>\n          <tbody style=\"text-align: center\">\n          <tr *ngFor=\"let cartProduct of (cart.cartProducts); index as i\">\n            <th scope=\"row\">{{i + 1}}</th>\n            <td><a [routerLink]=\"['/product', cartProduct.product.id]\">{{cartProduct.product.name}}</a></td>\n            <td>{{cartProduct.quantity}}</td>\n            <td>{{cartProduct.product.price.currency.symbol}} {{cartProduct.quantity * cartProduct.product.price.amount}}</td>\n          </tr>\n          </tbody>\n          <tfoot style=\"text-align: center\">\n          <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <th>Tax = ${{taxAmount | number:'1.2-2'}}</th>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <th><h5>Total Cost = ${{totalCost.toPrecision(6)}}</h5></th>\n          </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n  <br/>\n\n  <!-- Shipping Address -->\n  <div class=\"card border-info\">\n    <div class=\"card-header\"> <h4> Shipping Address </h4> </div>\n    <div class=\"card-body\">\n      <div class=\"table-responsive-sm table-responsive-xs table-responsive-md table-responsive-lg\">\n        <div *ngIf=\"addressesAvailable()\">\n          <div *ngFor=\"let address of addresses\" class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-check\" style=\"margin: 10px\">\n                <label class=\"form-check-label\" style=\"font-weight: bold\">\n                  <input class=\"form-check-input\" name=\"shippingAddress\" type=\"radio\" value=\"{{address}}\" (change)=\"changeShippingAddress(address)\" >{{address.addressType.type}}\n                </label>\n              </div>\n              <address style=\"margin-left: 20px\">\n                {{address.streetName}}<br>\n                Apt {{address.apartment}}<br>\n                {{address.city.name}}, {{address.state.name}} - {{address.zipCode}}<br>\n              </address>\n              <br>\n            </div>\n            <div class=\"col-6\">\n              <button (click)=\"openModal(addressEditModal,address)\" class=\"btn btn-primary\" type=\"button\">Edit</button>\n              <input (click)=\"deleteAddress(address)\" class=\" btn btn-danger\" style=\"margin: 10px\" type=\"button\" value=\"Delete\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button (click)=\"openModal(addressEditModal,null)\" class=\"btn btn-primary\" type=\"button\">Create New</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br/>\n\n  <!-- Billing Address -->\n  <div class=\"card border-info\">\n    <div class=\"card-header\"> <h4> Billing Address </h4></div>\n    <div class=\"card-body\">\n    <div class=\"table-responsive-sm table-responsive-xs table-responsive-md table-responsive-lg\">\n      <div *ngIf=\"addressesAvailable()\">\n        <div *ngFor=\"let address of addresses\" class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-check\" style=\"margin: 10px\">\n              <label class=\"form-check-label\" style=\"font-weight: bold\">\n                <input class=\"form-check-input\" name=\"billingAddress\" type=\"radio\" value=\"{{address}}\" (change)=\"changeBillingAddress(address)\">{{address.addressType.type}}\n              </label>\n            </div>\n            <address style=\"margin: 10px\">\n                {{address.streetName}}<br>\n                Apt {{address.apartment}}<br>\n                {{address.city.name}}, {{address.state.name}} - {{address.zipCode}}<br>\n            </address>\n          </div>\n          <div class=\"col-6\">\n            <button (click)=\"openModal(addressEditModal,address)\" class=\"btn btn-primary\" type=\"button\">Edit</button>\n            <input (click)=\"deleteAddress(address)\" class=\" btn btn-danger\" style=\"margin: 10px\" type=\"button\" value=\"Delete\">\n          </div>\n          <br>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button (click)=\"openModal(addressEditModal,null)\" class=\"btn btn-primary\" type=\"button\">Create New</button>\n      </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Address Modal-->\n  <ng-template #addressEditModal>\n    <div (click)=\"modalRef.hide()\" class=\"modal-header\">\n      <h3 class=\"modal-title\">Edit Address</h3>\n      <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"addressForm\">\n        <div class=\"form-group\">\n          <label>Address Type\n            <select [compareWith]=\"compareAddressTypeFn\" class=\"form-control\" formControlName=\"addressType\"\n                    name=\"addressType\">\n              <option *ngFor=\"let addressType of addressTypes\" [ngValue]=\"addressType\">\n                {{addressType.type}}\n              </option>\n            </select>\n          </label>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"col-6\">\n            <label for=\"streetName\">Street Name</label>\n            <input class=\"form-control\" formControlName=\"streetName\" id=\"streetName\" placeholder=\"Enter Street Name\"\n                   required type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col-6\">\n            <label for=\"apartment\">Apartment</label>\n            <input class=\"form-control\" formControlName=\"apartment\" id=\"apartment\" placeholder=\"Enter Apartment Number\"\n                   required type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Country\n            <select (change)=\"loadStates()\" [compareWith]=\"compareCountryFn\" class=\"form-control\" formControlName=\"country\"\n                    name=\"country\">\n              <option *ngFor=\"let country of countries\" [ngValue]=\"country\">\n                {{country.name}}\n              </option>\n            </select>\n          </label>\n        </div>\n\n        <div class=\"form-group\">\n          <label>State\n            <select (change)=\"loadCities()\"  [compareWith]=\"compareStateFn\" class=\"form-control\" formControlName=\"state\"\n                    name=\"state\">\n              <option *ngFor=\"let state of states\" [ngValue]=\"state\">\n                {{state.name}}\n              </option>\n            </select>\n          </label>\n        </div>\n\n        <div class=\"form-group\">\n          <label>City\n            <select [compareWith]=\"compareCityFn\" class=\"form-control\" formControlName=\"city\" name=\"city\">\n              <option *ngFor=\"let city of cities\" [ngValue]=\"city\">\n                {{city.name}}\n              </option>\n            </select>\n          </label>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col-3\">\n            <label for=\"zipCode\">Zip Code</label>\n            <input class=\"form-control\" formControlName=\"zipCode\" id=\"zipCode\" placeholder=\"Enter Zip Code\"\n                   required type=\"text\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button (click)=\"updateUserAddress()\" class=\"btn btn-primary\" type=\"button\">Update</button>\n      <button (click)=\"modalRef.hide()\" class=\"btn btn-danger\" type=\"button\">Cancel</button>\n    </div>\n  </ng-template>\n\n  <br/>\n    <p style=\"text-align: center\">\n      <input (click)=\"backToCart()\" class=\" btn btn-secondary\" style=\"margin: 40px\" type=\"button\" value=\"Back to Cart\">\n      <input (click)=\"placeOrder()\" class=\" btn btn-primary\" style=\"margin: 20px\" type=\"button\" value=\"Placer Order\">\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/api/cart/model/cart-shipping-address.ts":
/*!*********************************************************!*\
  !*** ./src/app/api/cart/model/cart-shipping-address.ts ***!
  \*********************************************************/
/*! exports provided: CartShippingAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartShippingAddress", function() { return CartShippingAddress; });
class CartShippingAddress {
}


/***/ }),

/***/ "./src/app/api/checkout/checkout-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/api/checkout/checkout-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: checkManagementRoute, CheckoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkManagementRoute", function() { return checkManagementRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRoutingModule", function() { return CheckoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.component */ "./src/app/api/checkout/checkout.component.ts");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");





const checkManagementRoute = [
    {
        path: '',
        component: _checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["UserAuthGuard"]]
    }
];
let CheckoutRoutingModule = class CheckoutRoutingModule {
};
CheckoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(checkManagementRoute),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], CheckoutRoutingModule);



/***/ }),

/***/ "./src/app/api/checkout/checkout.component.css":
/*!*****************************************************!*\
  !*** ./src/app/api/checkout/checkout.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/api/checkout/checkout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/api/checkout/checkout.component.ts ***!
  \****************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/service/cart.service */ "./src/app/api/cart/service/cart.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_user_profile_service_user_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../account/user-profile/service/user-profile.service */ "./src/app/account/user-profile/service/user-profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _city_services_city_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../city/services/city.service */ "./src/app/api/city/services/city.service.ts");
/* harmony import */ var _state_services_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../state/services/state.service */ "./src/app/api/state/services/state.service.ts");
/* harmony import */ var _country_services_country_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../country/services/country.service */ "./src/app/api/country/services/country.service.ts");
/* harmony import */ var _address_type_service_address_type_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../address-type/service/address-type.service */ "./src/app/api/address-type/service/address-type.service.ts");
/* harmony import */ var _address_service_address_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../address/service/address.service */ "./src/app/api/address/service/address.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _cart_model_cart_shipping_address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cart/model/cart-shipping-address */ "./src/app/api/cart/model/cart-shipping-address.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

















let CheckoutComponent = class CheckoutComponent {
    constructor(cartService, ngxSpinnerService, authService, userProfileService, cityService, stateService, countryService, addressTypeService, addressService, router, modalService) {
        this.cartService = cartService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.authService = authService;
        this.userProfileService = userProfileService;
        this.cityService = cityService;
        this.stateService = stateService;
        this.countryService = countryService;
        this.addressTypeService = addressTypeService;
        this.addressService = addressService;
        this.router = router;
        this.modalService = modalService;
        this.taxRate = 0;
        this.taxAmount = 0;
        this.displayAddressDialog = false;
        this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            addressType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            streetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            apartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.getMyCart();
        this.loadAddressTypes();
        this.loadCountries();
    }
    openModal(template, address) {
        this.modalRef = this.modalService.show(template);
        if (address != null) {
            this.addressForm.patchValue({
                addressType: address.addressType,
                id: address.id,
                streetName: address.streetName,
                apartment: address.apartment,
                city: address.city,
                state: address.state,
                country: address.country,
                zipCode: address.zipCode,
            });
            this.loadStates();
            this.loadCities();
        }
        else {
            this.addressForm.reset();
        }
    }
    getMyCart() {
        this.ngxSpinnerService.show();
        const cartUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["CART_API_URL"] + 'find/user/' + this.authService.currentUserValue.id;
        this.cartService.getMyCart(cartUrl).subscribe(data => {
            localStorage.setItem('currentCart', JSON.stringify(data));
            this.cartService.currentCartSubject.next(data);
            this.cart = data;
            if (data.cartProducts !== null) {
                this.cartProducts = data.cartProducts;
            }
            this.calculateTotalCost(this.cartProducts);
            //this.checkAndHoldInventory();
            this.getAddresses();
            this.ngxSpinnerService.hide();
        });
    }
    createOrder() {
    }
    calculateTotalCost(cartProducts) {
        let totalCost = 0;
        cartProducts.forEach(function (cartproduct) {
            totalCost += cartproduct.quantity * cartproduct.product.price.amount;
        });
        if (this.taxRate !== 0) {
            this.taxAmount = totalCost * this.taxRate;
        }
        this.totalCost = totalCost + this.taxAmount;
    }
    checkAndHoldInventory() {
    }
    getAddresses() {
        let userProfileId = this.authService.currentUserSubject.value.userProfile.id;
        let userProfileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["USER_PROFILE_API_URL"] + userProfileId;
        this.userProfileService.getUserProfile(userProfileUrl).subscribe(data => {
            this.addresses = data.addresses;
        }, error1 => {
            console.log('Failed to get User Profile information. Error: ' + error1);
        });
    }
    changeShippingAddress(address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ngxSpinnerService.show();
            this.selectedShippingAddress = address;
            let cartShippingAddressUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["CART_ADDRESS_API_URL"] + 'add/shipping_address';
            let cartShippingAddress = new _cart_model_cart_shipping_address__WEBPACK_IMPORTED_MODULE_15__["CartShippingAddress"]();
            cartShippingAddress.addressType = address.addressType;
            cartShippingAddress.streetName = address.streetName;
            cartShippingAddress.apartment = address.apartment;
            cartShippingAddress.city = address.city;
            cartShippingAddress.state = address.state;
            cartShippingAddress.country = address.country;
            cartShippingAddress.zipCode = address.zipCode;
            yield this.cartService.changeShippingAddress(cartShippingAddressUrl, cartShippingAddress);
            yield this.getTaxRate(address.state.id);
            this.calculateTotalCost(this.cartProducts);
            this.ngxSpinnerService.hide();
        });
    }
    getTaxRate(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let taxRateUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["TAX_RATE_API_URL"] + 'find/state/' + id;
            let taxRateObject = yield this.cartService.getTaxRate(taxRateUrl);
            this.taxRate = taxRateObject.rate;
        });
    }
    changeBillingAddress(address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ngxSpinnerService.show();
            this.selectedBillingAddress = address;
            let cartBillingAddressUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["CART_ADDRESS_API_URL"] + 'add/billing_address';
            let cartBillingAddress = new _cart_model_cart_shipping_address__WEBPACK_IMPORTED_MODULE_15__["CartShippingAddress"]();
            cartBillingAddress.addressType = address.addressType;
            cartBillingAddress.streetName = address.streetName;
            cartBillingAddress.apartment = address.apartment;
            cartBillingAddress.city = address.city;
            cartBillingAddress.state = address.state;
            cartBillingAddress.country = address.country;
            cartBillingAddress.zipCode = address.zipCode;
            yield this.cartService.changeBillingAddress(cartBillingAddressUrl, cartBillingAddress);
            this.ngxSpinnerService.hide();
        });
    }
    hideNewAddressDialog() {
        this.displayAddressDialog = false;
    }
    updateUserAddress() {
        const addressApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["ADDRESS_API_URL"] + 'update';
        this.addressService.updateAddress(addressApiUrl, this.addressForm.value).subscribe(data => {
            this.getAddresses();
            this.modalRef.hide();
        }, error1 => {
            console.log('Failed to updated address. Error: ' + error1);
        });
    }
    deleteAddress(address) {
        if (confirm('Are you sure you want to delete the Address?')) {
            let addressUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["ADDRESS_API_URL"] + 'delete/' + address.id;
            this.addressService.deleteAddress(addressUrl).subscribe(data => {
                this.getAddresses();
                this.hideNewAddressDialog();
            }, error1 => {
                console.log('Error occurred: ' + error1);
            });
        }
    }
    placeOrder() {
        this.ngxSpinnerService.show();
        let createOrderUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["ORDER_API_URL"] + 'create';
        this.cartService.createOrder(createOrderUrl, this.cart.id).subscribe(data => {
            this.router.navigate(['/order']);
        }, error1 => {
            console.log('Failed to create order');
        });
    }
    loadAddressTypes() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["ADDRESS_TYPE_API_URL"] + 'list';
        this.addressTypeService.getAddressTypes(url).subscribe(addressTypes => {
            this.addressTypes = addressTypes;
            this.addressForm.patchValue({
                addressTypes: addressTypes
            });
            console.log('Successfully loaded Address types');
        }, error1 => {
            console.log('Failed to load mAddress types');
        });
    }
    loadCountries() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["COUNTRY_API_URL"] + 'list';
        this.countryService.getCountries(url).subscribe(countries => {
            this.countries = countries;
        }, error1 => {
        });
    }
    loadStates() {
        const country = this.addressForm.value.country;
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_API_URL"] + 'find/country/' + country.id;
        this.stateService.getStatesByCountryId(url).subscribe(data => {
            this.states = data;
        }, error1 => {
            console.log('Failed to load states');
        });
    }
    loadCities() {
        const state = this.addressForm.value.state;
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_2__["CITY_API_URL"] + 'find/state/' + state.id;
        this.cityService.getCitiesByStateId(url).subscribe(data => {
            this.cities = data;
        }, error1 => {
            console.log('Failed to load cities');
        });
    }
    cartDataAvailable() {
        return this.cart !== undefined && this.cart !== null && this.cartProducts.length >= 0;
    }
    addressesAvailable() {
        return this.addresses !== undefined && this.addresses !== null && this.addresses.length >= 0;
    }
    compareAddressTypeFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    compareCountryFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    compareStateFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    compareCityFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _account_user_profile_service_user_profile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"] },
    { type: _city_services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"] },
    { type: _state_services_state_service__WEBPACK_IMPORTED_MODULE_10__["StateService"] },
    { type: _country_services_country_service__WEBPACK_IMPORTED_MODULE_11__["CountryService"] },
    { type: _address_type_service_address_type_service__WEBPACK_IMPORTED_MODULE_12__["AddressTypeService"] },
    { type: _address_service_address_service__WEBPACK_IMPORTED_MODULE_13__["AddressService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsModalService"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/api/checkout/checkout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
        _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _account_user_profile_service_user_profile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"],
        _city_services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"],
        _state_services_state_service__WEBPACK_IMPORTED_MODULE_10__["StateService"],
        _country_services_country_service__WEBPACK_IMPORTED_MODULE_11__["CountryService"],
        _address_type_service_address_type_service__WEBPACK_IMPORTED_MODULE_12__["AddressTypeService"],
        _address_service_address_service__WEBPACK_IMPORTED_MODULE_13__["AddressService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsModalService"]])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/api/checkout/checkout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/api/checkout/checkout.module.ts ***!
  \*************************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component */ "./src/app/api/checkout/checkout.component.ts");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/api/checkout/checkout-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");










let CheckoutModule = class CheckoutModule {
};
CheckoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_3__["CheckoutRoutingModule"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot()
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], CheckoutModule);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map