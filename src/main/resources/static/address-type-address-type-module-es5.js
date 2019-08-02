(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-type-address-type-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api/address-type/address-type.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/address-type/address-type.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  address-type works!\n</p>\n"

/***/ }),

/***/ "./src/app/api/address-type/address-type-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/api/address-type/address-type-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: addressTypeManagementRoute, AddressTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressTypeManagementRoute", function() { return addressTypeManagementRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressTypeRoutingModule", function() { return AddressTypeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _address_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address-type.component */ "./src/app/api/address-type/address-type.component.ts");





var addressTypeManagementRoute = [
    {
        path: '',
        component: _address_type_component__WEBPACK_IMPORTED_MODULE_4__["AddressTypeComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]]
    }
];
var AddressTypeRoutingModule = /** @class */ (function () {
    function AddressTypeRoutingModule() {
    }
    AddressTypeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(addressTypeManagementRoute),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AddressTypeRoutingModule);
    return AddressTypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/api/address-type/address-type.component.css":
/*!*************************************************************!*\
  !*** ./src/app/api/address-type/address-type.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9hZGRyZXNzLXR5cGUvYWRkcmVzcy10eXBlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/api/address-type/address-type.component.ts":
/*!************************************************************!*\
  !*** ./src/app/api/address-type/address-type.component.ts ***!
  \************************************************************/
/*! exports provided: AddressTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressTypeComponent", function() { return AddressTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressTypeComponent = /** @class */ (function () {
    function AddressTypeComponent() {
    }
    AddressTypeComponent.prototype.ngOnInit = function () {
    };
    AddressTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-type',
            template: __webpack_require__(/*! raw-loader!./address-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/address-type/address-type.component.html"),
            styles: [__webpack_require__(/*! ./address-type.component.css */ "./src/app/api/address-type/address-type.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddressTypeComponent);
    return AddressTypeComponent;
}());



/***/ }),

/***/ "./src/app/api/address-type/address-type.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/api/address-type/address-type.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressTypeModule", function() { return AddressTypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _address_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address-type.component */ "./src/app/api/address-type/address-type.component.ts");
/* harmony import */ var _address_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-type-routing.module */ "./src/app/api/address-type/address-type-routing.module.ts");






var AddressTypeModule = /** @class */ (function () {
    function AddressTypeModule() {
    }
    AddressTypeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _address_type_component__WEBPACK_IMPORTED_MODULE_4__["AddressTypeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _address_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressTypeRoutingModule"]
            ]
        })
    ], AddressTypeModule);
    return AddressTypeModule;
}());



/***/ })

}]);
//# sourceMappingURL=address-type-address-type-module-es5.js.map