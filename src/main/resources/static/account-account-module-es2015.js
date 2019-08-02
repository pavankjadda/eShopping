(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/account/activate/activate.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/activate/activate.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  activate works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/password-reset/password-reset.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/password-reset/password-reset.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  password-reset works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/password/password.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/password/password.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  password works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/register/register.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/register/register.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Register</h2>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [ngClass]=\"{ 'is-invalid': submitted && formControls.username.errors }\" class=\"form-control\"\n             formControlName=\"username\" id=\"username\"\n             type=\"text\"/>\n      <div *ngIf=\"submitted\" class=\"invalid-feedback\">\n        <div *ngIf=\"formControls.username.errors.required\">Username is required</div>\n        <div *ngIf=\"formControls.username.errors.minLength\">Username minimum length should be 6 characters</div>\n        <div *ngIf=\"formControls.username.errors.maxlength\">Username maximum length should be 16 characters</div>\n        <div *ngIf=\"formControls.username.errors.usernameInvalidCharacters\">Invalid Username. No Special characters are allowed on Username</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [ngClass]=\"{ 'is-invalid': submitted && formControls.email.errors }\" class=\"form-control\"\n             formControlName=\"email\" id=\"email\"\n             type=\"text\"/>\n      <div *ngIf=\"submitted && formControls.username.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"formControls.email.errors.required\">Email is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [ngClass]=\"{ 'is-invalid': submitted && formControls.password.errors }\" class=\"form-control\" formControlName=\"password\" id=\"password\" type=\"password\"/>\n      <div *ngIf=\"submitted && formControls.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\n        <div *ngIf=\"formControls.password.errors.minLength\">Password minimum length should be 6 characters</div>\n        <div *ngIf=\"formControls.password.errors.maxlength\">Username maximum length should be 16 characters</div>\n        <div *ngIf=\"formControls.password.errors.nullValidator\">Password should not be null</div>\n        <div *ngIf=\"formControls.password.errors.passwordInvalidCharacters\"  class=\"cross-validation-error-message alert alert-danger\">Invalid special characters on Username. Valid characters are @, #, &, %, !,$ </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"confirmPassword\">Confirm Password</label>\n      <input [ngClass]=\"{ 'is-invalid': submitted && formControls.confirmPassword.errors }\" class=\"form-control\" formControlName=\"confirmPassword\" id=\"confirmPassword\" type=\"password\"/>\n      <div *ngIf=\"submitted && formControls.confirmPassword.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"formControls.confirmPassword.errors.required\">Confirmation Password is required</div>\n        <div *ngIf=\"formControls.confirmPassword.errors.minLength\">Confirmation Password minimum length should be 6 characters</div>\n        <div *ngIf=\"formControls.confirmPassword.errors.maxlength\">Confirmation Username maximum length should be 16 characters</div>\n        <div *ngIf=\"formControls.confirmPassword.errors.nullValidator\">Confirmation Password should not be null</div>\n        <div *ngIf=\"formControls.confirmPassword.errors.passwordConfirmInvalidCharacters\">Invalid special characters on Username. Valid characters are @, #, &, %, !,$ </div>\n        <div *ngIf=\"!formControls.confirmPassword.errors.passwordsMatched && formControls.confirmPassword.touched || formControls.confirmPassword.dirty \">Confirmation password should match original Password </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n      <!--[disabled]=\"!registerForm.valid\"-->\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/settings/settings.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/settings/settings.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n<div>\n  <h2>Edit Profile</h2>\n\n  <br/>\n  <form  [formGroup]=\"userProfileForm\">\n    <div class=\"form-row\">\n      <div class=\"col-auto\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" class=\"form-control\"  id=\"firstName\" formControlName=\"firstName\" required placeholder=\"First name\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col-auto\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" class=\"form-control\"  id=\"lastName\" formControlName=\"lastName\" required placeholder=\"Last Name\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col-auto\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\"  id=\"email\" formControlName=\"email\" required placeholder=\"Enter email\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col-auto\">\n        <label for=\"phone\">Phone</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"phone\" id=\"phone\" placeholder=\"Enter phone\" required>\n      </div>\n    </div>\n    <br/>\n  <div>\n    <h3>Addresses:</h3> <br/>\n    <div>\n      <button (click)=\"openModal(addressEditModal,null)\" class=\"btn btn-primary\" type=\"button\">Create New</button>\n      <br/> <br/>\n    </div>\n    <div *ngFor=\"let address of addresses\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <b>{{address.addressType.type}}:</b> <br/>\n          <label>{{address.streetName}} Apt {{address.apartment}}</label> <br>\n          <label>{{address.city.name}}, {{address.state.code}} - {{address.zipCode}}</label> <br>\n          <label>{{address.country.name}}</label>\n        </div>\n        <button (click)=\"openModal(addressEditModal,address)\" class=\"btn btn-primary\" type=\"button\">Edit</button>\n        <button (click)=\"deleteAddress(address)\" class=\"btn btn-danger\" type=\"button\" style=\"margin: 20px\">Delete</button>\n      </div>\n    </div> <br/>\n    </div>\n\n    <ng-template #addressEditModal>\n      <div (click)=\"modalRef.hide()\" class=\"modal-header\">\n        <h3 class=\"modal-title\">Edit Address</h3>\n        <button aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div formGroupName=\"address\">\n          <div class=\"form-group\">\n            <label>Address Type\n              <select [compareWith]=\"compareAddressTypeFn\" class=\"form-control\" formControlName=\"addressType\"\n                      name=\"addressType\">\n                <option *ngFor=\"let addressType of addressTypes\" [ngValue]=\"addressType\">\n                  {{addressType.type}}\n                </option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-row\">\n            <div class=\"col-6\">\n              <label for=\"streetName\">Street Name</label>\n              <input class=\"form-control\" formControlName=\"streetName\" id=\"streetName\" placeholder=\"Enter Street Name\"\n                     required type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-6\">\n              <label for=\"apartment\">Apartment</label>\n              <input class=\"form-control\" formControlName=\"apartment\" id=\"apartment\" placeholder=\"Enter Apartment Number\"\n                     required type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Country\n              <select (change)=\"loadStates()\" [compareWith]=\"compareCountryFn\" class=\"form-control\" formControlName=\"country\"\n                      name=\"country\">\n                <option *ngFor=\"let country of countries\" [ngValue]=\"country\">\n                  {{country.name}}\n                </option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>State\n              <select (change)=\"loadCities()\"  [compareWith]=\"compareStateFn\" class=\"form-control\" formControlName=\"state\"\n                      name=\"state\">\n                <option *ngFor=\"let state of states\" [ngValue]=\"state\">\n                  {{state.name}}\n                </option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>City\n              <select [compareWith]=\"compareCityFn\" class=\"form-control\" formControlName=\"city\" name=\"city\">\n                <option *ngFor=\"let city of cities\" [ngValue]=\"city\">\n                  {{city.name}}\n                </option>\n              </select>\n            </label>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-3\">\n              <label for=\"zipCode\">Zip Code</label>\n              <input class=\"form-control\" formControlName=\"zipCode\" id=\"zipCode\" placeholder=\"Enter Zip Code\"\n                     required type=\"text\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"updateUserAddress()\" class=\"btn btn-primary\" type=\"button\">Update</button>\n        <button (click)=\"modalRef.hide()\" class=\"btn btn-danger\" type=\"button\">Cancel</button>\n      </div>\n    </ng-template>\n    </div>\n    <br/> <br/> <br/>\n    <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"updateUserProfile()\">Update</button>\n    <button type=\"button\" class=\"btn btn-outline-primary\"  style=\"margin-left: 30px\" (click)=\"goBack()\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/user-profile/user-profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/user-profile/user-profile.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n<div *ngIf=\"userProfileDataAvailable()\">\n<h1>Profile</h1> <br>\n  <form [formGroup]=\"userProfileForm\">\n    <div class=\"form-row  align-items-center\">\n      <div class=\"col-auto mb-3\">\n        <label for=\"username\">Username</label>\n        <input class=\"form-control\" formControlName=\"username\" id=\"username\" name=\"username\" type=\"text\" readonly>\n        <small class=\"form-text text-muted\" id=\"emailHelp\"></small>\n      </div>\n      <div class=\"col-auto mb-3\">\n        <label for=\"firstName\">First Name</label>\n        <input class=\"form-control\" formControlName=\"firstName\" id=\"firstName\" type=\"text\" readonly>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col-auto\">\n        <label for=\"lastName\">Last Name</label>\n        <input  type=\"text\" class=\"form-control\" formControlName=\"lastName\" id=\"lastName\" readonly>\n      </div>\n      <div class=\"col-auto\">\n        <label for=\"email\">Email</label> <br/>\n        <input type=\"text\" class=\"form-control\"  formControlName=\"email\" id=\"email\" readonly>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"col-auto\">\n        <label for=\"phone\">Phone</label> <br/>\n        <input type=\"text\" class=\"form-control\"  formControlName=\"phone\" id=\"phone\"  readonly >\n      </div>\n  </div>\n    <br> <br>\n\n    <div >\n      <h3>Addresses:</h3>\n      <div  *ngFor=\"let address of addresses\">\n        <div   class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\">\n            <b>{{address.addressType.type}}:</b> <br/>\n            <label>{{address.streetName}} Apt {{address.apartment}}</label> <br>\n            <label>{{address.city.name}}, {{address.state.code}} - {{address.zipCode}}</label> <br>\n            <label>{{address.country.name}}</label>\n          </div>\n        </div>\n        <br>\n      </div>\n    </div>\n\n    <button (click)=\"editUserProfile()\" class=\"btn btn-primary\"  type=\"button\">Edit</button>\n    <button (click)=\"goHome()\" class=\"btn btn-primary\" style=\"margin-left: 30px\" type=\"submit\">Home</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: accountManagementRoutes, AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountManagementRoutes", function() { return accountManagementRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activate/activate.component */ "./src/app/account/activate/activate.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/account/password-reset/password-reset.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/account/user-profile/user-profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/account/settings/settings.component.ts");
/* harmony import */ var _user_profile_user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile-edit/user-profile-edit.component */ "./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.ts");









const accountManagementRoutes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'activate', component: _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateComponent"] },
    { path: 'password_reset', component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_5__["PasswordResetComponent"] },
    { path: 'profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"] },
    { path: 'profile/edit', component: _user_profile_user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileEditComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(accountManagementRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activate/activate.component */ "./src/app/account/activate/activate.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password/password.component */ "./src/app/account/password/password.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/account/settings/settings.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/account/password-reset/password-reset.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/account/user-profile/user-profile.component.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_profile_user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/user-profile-edit/user-profile-edit.component */ "./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");















let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_10__["AccountRoutingModule"]
        ],
        declarations: [
            _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
            _password_password_component__WEBPACK_IMPORTED_MODULE_6__["PasswordComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"],
            _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordResetComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
            _user_profile_user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileEditComponent"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/account/activate/activate.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account/activate/activate.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/activate/activate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/activate/activate.component.ts ***!
  \********************************************************/
/*! exports provided: ActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateComponent", function() { return ActivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActivateComponent = class ActivateComponent {
    constructor() { }
    ngOnInit() {
    }
};
ActivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activate',
        template: __webpack_require__(/*! raw-loader!./activate.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/activate/activate.component.html"),
        styles: [__webpack_require__(/*! ./activate.component.css */ "./src/app/account/activate/activate.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActivateComponent);



/***/ }),

/***/ "./src/app/account/password-reset/password-reset.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/account/password-reset/password-reset.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/password-reset/password-reset.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/password-reset/password-reset.component.ts ***!
  \********************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordResetComponent = class PasswordResetComponent {
    constructor() { }
    ngOnInit() {
    }
};
PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: __webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/password-reset/password-reset.component.html"),
        styles: [__webpack_require__(/*! ./password-reset.component.css */ "./src/app/account/password-reset/password-reset.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PasswordResetComponent);



/***/ }),

/***/ "./src/app/account/password/password.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account/password/password.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/password/password.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/password/password.component.ts ***!
  \********************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordComponent = class PasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
PasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password',
        template: __webpack_require__(/*! raw-loader!./password.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/password/password.component.html"),
        styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/account/password/password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PasswordComponent);



/***/ }),

/***/ "./src/app/account/register/register-user.ts":
/*!***************************************************!*\
  !*** ./src/app/account/register/register-user.ts ***!
  \***************************************************/
/*! exports provided: RegisterUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUser", function() { return RegisterUser; });
class RegisterUser {
}


/***/ }),

/***/ "./src/app/account/register/register.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account/register/register.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _registerform_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registerform-validator */ "./src/app/account/register/registerform-validator.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.service */ "./src/app/account/register/register.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _register_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-user */ "./src/app/account/register/register-user.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");










let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, route, router, authService, registerService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.registerService = registerService;
        this.authService.logout();
    }
    // convenience getter for easy access to form fields
    get formControls() {
        return this.registerForm.controls;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator, Object(_registerform_validator__WEBPACK_IMPORTED_MODULE_5__["usernameValidator"])()]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator, Object(_registerform_validator__WEBPACK_IMPORTED_MODULE_5__["passwordValidator"])()]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator, Object(_registerform_validator__WEBPACK_IMPORTED_MODULE_5__["confirmPasswordValidator"])()]],
        }, { validator: this.checkIfMatchingPasswords('password', 'confirmPassword') });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    onSubmit() {
        //console.warn(this.registerForm.value);
        this.submitted = true;
        let registerUser = new _register_user__WEBPACK_IMPORTED_MODULE_8__["RegisterUser"]();
        registerUser.username = this.formControls.username.value;
        registerUser.email = this.formControls.email.value;
        registerUser.password = this.formControls.password.value;
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].SERVER_URL + 'register';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.registerService.registerUser(url, registerUser, httpOptions).subscribe(response => {
            console.log('User Registration Completed  ' + response);
            this.router.navigate(['/home']);
        }, error => console.log('error: ' + error), () => console.log('User Registration Completed '));
    }
    checkIfMatchingPasswords(password, confirmPassword) {
        return (group) => {
            let passwordInput = group.controls[password], passwordConfirmationInput = group.controls[confirmPassword];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ passwordsMatched: false });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/account/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/account/register/register.service.ts":
/*!******************************************************!*\
  !*** ./src/app/account/register/register.service.ts ***!
  \******************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegisterService = class RegisterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerUser(url, registerUser, httpOptions) {
        return this.httpClient.post(url, registerUser, httpOptions);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegisterService);



/***/ }),

/***/ "./src/app/account/register/registerform-validator.ts":
/*!************************************************************!*\
  !*** ./src/app/account/register/registerform-validator.ts ***!
  \************************************************************/
/*! exports provided: usernameValidator, passwordValidator, confirmPasswordValidator, matchPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameValidator", function() { return usernameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPasswordValidator", function() { return matchPasswordValidator; });
function usernameValidator() {
    return (control) => {
        let usernamePattern = /^[0-9a-zA-Z0-9]+$/;
        if (control.value !== undefined && (isNaN(control.value)) && !usernamePattern.test(control.value)) {
            return { usernameInvalidCharacters: true };
        }
        if (control.value !== undefined && (isNaN(control.value)) && control.value.length <= 6) {
            return { minLength: true };
        }
        return null;
    };
}
function passwordValidator() {
    return (control) => {
        let passwordPattern = /^[0-9@#$&%!a-zA-Z0-9]+$/;
        if (control.value !== undefined && (isNaN(control.value)) && !passwordPattern.test(control.value)) {
            return { passwordInvalidCharacters: true };
        }
        if (control.value !== undefined && (isNaN(control.value)) && control.value.length <= 6) {
            return { minLength: true };
        }
        return null;
    };
}
function confirmPasswordValidator() {
    return (control) => {
        let confirmPasswordPattern = /^[0-9@#$&%!a-zA-Z0-9]+$/;
        if (control.value !== undefined && (isNaN(control.value)) && !confirmPasswordPattern.test(control.value)) {
            return { passwordConfirmInvalidCharacters: true };
        }
        if (control.value !== undefined && (isNaN(control.value)) && control.value.length <= 6) {
            return { minLength: true };
        }
        return null;
    };
}
function matchPasswordValidator(formGroup) {
    return (control) => {
        if (control.value !== undefined && (isNaN(control.value)) && (formGroup.controls.username.value === control.value)) {
            return { passwordsMatched: true };
        }
        return null;
    };
}
/*
export const matchPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password && confirmPassword && password.value === confirmPassword.value ? { passwordsMatched: true } : null;
};
*/


/***/ }),

/***/ "./src/app/account/settings/settings.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account/settings/settings.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/account/settings/settings.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "./src/app/account/user-profile/model/user-profile.ts":
/*!************************************************************!*\
  !*** ./src/app/account/user-profile/model/user-profile.ts ***!
  \************************************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
class UserProfile {
}


/***/ }),

/***/ "./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS1lZGl0L3VzZXItcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UserProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileEditComponent", function() { return UserProfileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-profile */ "./src/app/account/user-profile/model/user-profile.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _api_city_services_city_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../api/city/services/city.service */ "./src/app/api/city/services/city.service.ts");
/* harmony import */ var _api_state_services_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/state/services/state.service */ "./src/app/api/state/services/state.service.ts");
/* harmony import */ var _api_country_services_country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/country/services/country.service */ "./src/app/api/country/services/country.service.ts");
/* harmony import */ var _api_address_type_service_address_type_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/address-type/service/address-type.service */ "./src/app/api/address-type/service/address-type.service.ts");
/* harmony import */ var _api_address_service_address_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/address/service/address.service */ "./src/app/api/address/service/address.service.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/user-profile.service */ "./src/app/account/user-profile/service/user-profile.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
















let UserProfileEditComponent = class UserProfileEditComponent {
    constructor(authService, userProfileService, spinnerService, cityService, stateService, countryService, addressTypeService, addressService, router, modalService) {
        this.authService = authService;
        this.userProfileService = userProfileService;
        this.spinnerService = spinnerService;
        this.cityService = cityService;
        this.stateService = stateService;
        this.countryService = countryService;
        this.addressTypeService = addressTypeService;
        this.addressService = addressService;
        this.router = router;
        this.modalService = modalService;
        this.userProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                addressType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                streetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                apartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            }),
        });
    }
    ngOnInit() {
        this.getUserProfile();
        this.loadAddressTypes();
        this.loadCountries();
    }
    openModal(template, address) {
        this.modalRef = this.modalService.show(template);
        if (address != null) {
            this.userProfileForm.patchValue({
                address: address
            });
            this.loadStates();
            this.loadCities();
        }
        else {
        }
    }
    getUserProfile() {
        let userProfileId = this.authService.currentUserSubject.value.userProfile.id;
        let userProfileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_API_URL"] + userProfileId;
        this.userProfileService.getUserProfile(userProfileUrl).subscribe(data => {
            this.userProfile = data;
            this.userProfileForm.patchValue({
                id: data.id,
                username: data.user.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                user: data.user
            });
            this.addresses = data.addresses;
        }, error1 => {
            console.log('Failed to get User Profile information');
        });
    }
    updateUserProfile() {
        this.spinnerService.show();
        const userProfileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_API_URL"] + 'update';
        let userProfileId = this.authService.currentUserSubject.value.userProfile.id;
        let userProfile = new _model_user_profile__WEBPACK_IMPORTED_MODULE_2__["UserProfile"]();
        userProfile.id = userProfileId;
        userProfile.firstName = this.userProfileForm.value.firstName;
        userProfile.lastName = this.userProfileForm.value.lastName;
        userProfile.email = this.userProfileForm.value.email;
        userProfile.phone = this.userProfileForm.value.phone;
        //userProfile.addresses=[this.userProfileForm.value.address];
        this.userProfileService.updateUserProfile(userProfileUrl, userProfile).subscribe(data => {
            userProfile = data;
            console.log('UserProfile updated');
            this.router.navigate(['/profile']);
        }, error1 => {
            console.log('UserProfile update failed');
            this.spinnerService.hide();
        });
    }
    updateUserAddress() {
        const addressApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["ADDRESS_API_URL"] + 'update';
        this.addressService.updateAddress(addressApiUrl, this.userProfileForm.value.address).subscribe(data => {
            this.getUserProfile();
            this.modalRef.hide();
        }, error1 => {
            console.log('Failed to updated address. Error: ' + error1);
        });
    }
    deleteAddress(address) {
        const addressApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["ADDRESS_API_URL"] + 'delete/' + address.id;
        this.addressService.deleteAddress(addressApiUrl).subscribe(data => {
            this.getUserProfile();
        }, error1 => {
        });
    }
    loadAddressTypes() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["ADDRESS_TYPE_API_URL"] + 'list';
        this.addressTypeService.getAddressTypes(url).subscribe(addressTypes => {
            this.addressTypes = addressTypes;
            this.userProfileForm.patchValue({
                addressType: addressTypes
            });
            console.log('Successfully loaded address types');
        }, error1 => {
            console.log('Failed to load address types');
        });
    }
    loadCountries() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["COUNTRY_API_URL"] + 'list';
        this.countryService.getCountries(url).subscribe(countries => {
            this.countries = countries;
        }, error1 => {
        });
    }
    loadStates() {
        const country = this.userProfileForm.value.address.country;
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["STATE_API_URL"] + 'find/country/' + country.id;
        this.stateService.getStatesByCountryId(url).subscribe(data => {
            this.states = data;
        }, error1 => {
            console.log('Failed to load states');
        });
    }
    loadCities() {
        const state = this.userProfileForm.value.address.state;
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_7__["CITY_API_URL"] + 'find/state/' + state.id;
        this.cityService.getCitiesByStateId(url).subscribe(data => {
            this.cities = data;
        }, error1 => {
            console.log('Failed to load cities');
        });
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
    goBack() {
        this.router.navigate(['/account/profile']);
    }
};
UserProfileEditComponent.ctorParameters = () => [
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_14__["UserProfileService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: _api_city_services_city_service__WEBPACK_IMPORTED_MODULE_8__["CityService"] },
    { type: _api_state_services_state_service__WEBPACK_IMPORTED_MODULE_9__["StateService"] },
    { type: _api_country_services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"] },
    { type: _api_address_type_service_address_type_service__WEBPACK_IMPORTED_MODULE_11__["AddressTypeService"] },
    { type: _api_address_service_address_service__WEBPACK_IMPORTED_MODULE_12__["AddressService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
];
UserProfileEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile-edit',
        template: __webpack_require__(/*! raw-loader!./user-profile-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.html"),
        styles: [__webpack_require__(/*! ./user-profile-edit.component.css */ "./src/app/account/user-profile/user-profile-edit/user-profile-edit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
        _service_user_profile_service__WEBPACK_IMPORTED_MODULE_14__["UserProfileService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
        _api_city_services_city_service__WEBPACK_IMPORTED_MODULE_8__["CityService"],
        _api_state_services_state_service__WEBPACK_IMPORTED_MODULE_9__["StateService"],
        _api_country_services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"],
        _api_address_type_service_address_type_service__WEBPACK_IMPORTED_MODULE_11__["AddressTypeService"],
        _api_address_service_address_service__WEBPACK_IMPORTED_MODULE_12__["AddressService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
], UserProfileEditComponent);



/***/ }),

/***/ "./src/app/account/user-profile/user-profile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/account/user-profile/user-profile.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/user-profile/user-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/account/user-profile/user-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/user-profile.service */ "./src/app/account/user-profile/service/user-profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");









let UserProfileComponent = class UserProfileComponent {
    constructor(authService, userProfileService, spinner, router) {
        this.authService = authService;
        this.userProfileService = userProfileService;
        this.spinner = spinner;
        this.router = router;
        this.userProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            addresses: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.getUserProfile();
    }
    getUserProfile() {
        this.spinner.show();
        let userProfileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["USER_PROFILE_API_URL"] + 'my_profile';
        this.userProfileService.getUserProfile(userProfileUrl).subscribe(data => {
            this.userProfile = data;
            this.userProfileForm.patchValue({
                id: data.id,
                username: data.user.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                user: data.user,
                addresses: data.addresses
            });
            this.addresses = data.addresses;
            this.spinner.hide();
        }, error1 => {
            console.log('Failed to get User Profile information. Error: ' + error1);
            this.spinner.hide();
        });
    }
    userProfileDataAvailable() {
        return this.userProfile !== undefined && this.userProfile !== null;
    }
    goHome() {
        this.router.navigate(['/']);
    }
    editUserProfile() {
        this.router.navigate(['/account/profile/edit']);
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/account/user-profile/user-profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _service_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], UserProfileComponent);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map