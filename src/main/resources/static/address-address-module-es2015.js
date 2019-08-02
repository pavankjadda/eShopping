(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api/address/address.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/address/address.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  address works!\n</p>\n"

/***/ }),

/***/ "./src/app/api/address/address-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/api/address/address-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: addressManagementRoute, AddressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressManagementRoute", function() { return addressManagementRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressRoutingModule", function() { return AddressRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.component */ "./src/app/api/address/address.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");





const addressManagementRoute = [
    {
        path: '',
        component: _address_component__WEBPACK_IMPORTED_MODULE_2__["AddressComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["UserAuthGuard"]]
    }
];
let AddressRoutingModule = class AddressRoutingModule {
};
AddressRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(addressManagementRoute),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], AddressRoutingModule);



/***/ }),

/***/ "./src/app/api/address/address.component.css":
/*!***************************************************!*\
  !*** ./src/app/api/address/address.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/address/address.component.ts":
/*!**************************************************!*\
  !*** ./src/app/api/address/address.component.ts ***!
  \**************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddressComponent = class AddressComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: __webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/address/address.component.html"),
        styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/api/address/address.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddressComponent);



/***/ }),

/***/ "./src/app/api/address/address.module.ts":
/*!***********************************************!*\
  !*** ./src/app/api/address/address.module.ts ***!
  \***********************************************/
/*! exports provided: AddressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.component */ "./src/app/api/address/address.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/api/address/address-routing.module.ts");






let AddressModule = class AddressModule {
};
AddressModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _address_component__WEBPACK_IMPORTED_MODULE_2__["AddressComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressRoutingModule"]
        ]
    })
], AddressModule);



/***/ })

}]);
//# sourceMappingURL=address-address-module-es2015.js.map