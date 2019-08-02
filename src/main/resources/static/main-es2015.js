(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-home/admin-home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-home/admin-home.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Admin Home</h2>\n\n<ul  class=\"list-group\">\n  <li class=\"list-group-item\"><a routerLink=\"user\" routerLinkActive=\"active\">User Management</a></li>\n  <li class=\"list-group-item\"><a routerLink=\"health\" routerLinkActive=\"active\">Health Management</a></li>\n\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/health/health.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/health/health.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  health works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user-management-home/user-management-home.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/user-management/user-management-home/user-management-home.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-management-home works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user-management.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/user-management/user-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<router-outlet></router-outlet>-->\n<p>\n  User Management Works\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main>\n    <div style=\" text-align:center\">\n      <a routerLink=\"home\">\n      </a>\n  </div>\n  <router-outlet></router-outlet>\n  <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-beat\"></ngx-spinner>\n</app-main>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n  <h2>Login</h2>\n  <form [formGroup]=\"loginForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" class=\"form-control\"\n             formControlName=\"username\" id=\"username\"\n             type=\"text\"/>\n      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" class=\"form-control\"\n             formControlName=\"password\" id=\"password\"\n             type=\"password\"/>\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button (click)=\"login()\" class=\"btn btn-primary\">Login</button>\n      <a routerLink=\"/register\" style=\"margin: 20px\">Register</a>\n    </div>\n\n    <div class=\"form-group\">\n      <div *ngIf=\"loginFailed\" style=\"color:red; \">Failed to Login, Please try again</div>\n    </div>\n  </form>\n\n</div>\n\n\n<!--\n<p>{{message}}</p>\n<p>\n  <button (click)=\"login()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n  <button (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n</p>\n-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/logout/logout.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/logout/logout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/privilege/privilege.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/privilege/privilege.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  privilege works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/role/role.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/role/role.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  role works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/user/user.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/user/user.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/helpers/http403-error/http403-error.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helpers/http403-error/http403-error.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 style=\"color: red\">\n    Aw. You are not authorized to view this page :(\n  </h2>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Made by <a href=\"https://twitter.com/pavankjadda\">Pavan</a>\n  </div>\n    <a class=\"nav-item nav-link\" href=\"https://github.com/pavankjadda\" target=\"_blank\">\n      <i class=\"fa fa-github\"></i>\n    </a>\n    <a class=\"nav-item nav-link\" href=\"https://twitter.com/pavankjadda\" target=\"_blank\">\n      <i class=\"fa fa-twitter\"></i>\n    </a>\n    <a class=\"nav-item nav-link\" href=\"https://medium.com/@jpavanaryan\" target=\"_blank\">\n      <i class=\"fa fa-medium\"></i>\n    </a>\n\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/header/header.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/header/header.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Home</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div *ngIf=\"isLoggedIn()\" class=\"navbar-nav\">\n      <!--<a class=\"nav-item nav-link\" routerLink=\"/customer\">Customer</a>-->\n      <a class=\"nav-item nav-link\" routerLink=\"/order\">Orders</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/category\">Categories</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/product\">Products</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/manufacturer\">Manufacturers</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/cart\">Cart</a>\n    </div>\n  </div>\n\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div  *ngIf=\"isLoggedIn()\" class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" routerLink=\"/account/profile\">Profile</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/logout\">Logout</a>\n    </div>\n  </div>\n\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div  *ngIf=\"!isLoggedIn()\" class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" routerLink=\"/login\">Login</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Home </h1>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <a [routerLink]=\"['/category']\" >Categories</a>\n  </li>\n  <li class=\"list-group-item\">\n    <a [routerLink]=\"['/order']\" >Orders</a>\n  </li>\n  <li class=\"list-group-item\">\n    <a [routerLink]=\"['/product']\" >Products</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/main/main.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/main/main.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\" id=\"main_div\">\n  <ng-content></ng-content>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pagenotfound/pagenotfound.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pagenotfound/pagenotfound.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home-routing.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home-routing.ts ***!
  \********************************************************/
/*! exports provided: AdminHomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeRoutes", function() { return AdminHomeRoutes; });
/* harmony import */ var _admin_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");


const AdminHomeRoutes = [
    {
        path: 'admin',
        component: _admin_home_component__WEBPACK_IMPORTED_MODULE_0__["AdminHomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }
];


/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let AdminHomeComponent = class AdminHomeComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        //if(this.authService.currentUserValue.token === '' || !this.authService.isValidSession())
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn()) {
            this.authService.logout();
            this.router.navigate(['/login']);
        }
    }
};
AdminHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-home',
        template: __webpack_require__(/*! raw-loader!./admin-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-home/admin-home.component.html"),
        styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin/admin-home/admin-home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AdminHomeComponent);



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/admin/user-management/user-management.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health/health.component */ "./src/app/admin/health/health.component.ts");
/* harmony import */ var _user_management_user_management_home_user_management_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management/user-management-home/user-management-home.component */ "./src/app/admin/user-management/user-management-home/user-management-home.component.ts");
/* harmony import */ var _user_management_user_management_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management/user-management.route */ "./src/app/admin/user-management/user-management.route.ts");
/* harmony import */ var _health_health_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health/health-routing */ "./src/app/admin/health/health-routing.ts");
/* harmony import */ var _admin_home_admin_home_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-home/admin-home-routing */ "./src/app/admin/admin-home/admin-home-routing.ts");










let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_home_admin_home_routing__WEBPACK_IMPORTED_MODULE_9__["AdminHomeRoutes"]),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_management_user_management_route__WEBPACK_IMPORTED_MODULE_7__["UserManagementRoutes"]),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_health_health_routing__WEBPACK_IMPORTED_MODULE_8__["HealthManagementRoutes"])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        declarations: [
            _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"],
            _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_4__["AdminHomeComponent"],
            _health_health_component__WEBPACK_IMPORTED_MODULE_5__["HealthComponent"],
            _user_management_user_management_home_user_management_home_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementHomeComponent"]
        ],
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");




let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/health/health-routing.ts":
/*!************************************************!*\
  !*** ./src/app/admin/health/health-routing.ts ***!
  \************************************************/
/*! exports provided: HealthManagementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthManagementRoutes", function() { return HealthManagementRoutes; });
/* harmony import */ var _health_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.component */ "./src/app/admin/health/health.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");


const HealthManagementRoutes = [
    {
        path: 'admin/health',
        component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            {
                path: 'list',
                component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"]
            },
            {
                path: 'new',
                component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"]
            },
            {
                path: ':id',
                component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"],
                children: [
                    {
                        path: 'edit',
                        component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"]
                    },
                    {
                        path: 'delete',
                        component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"]
                    }
                ]
            },
            {
                path: '',
                component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/admin/health/health.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/health/health.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/health/health.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/health/health.component.ts ***!
  \**************************************************/
/*! exports provided: HealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthComponent", function() { return HealthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HealthComponent = class HealthComponent {
    constructor() { }
    ngOnInit() {
    }
};
HealthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health',
        template: __webpack_require__(/*! raw-loader!./health.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/health/health.component.html"),
        styles: [__webpack_require__(/*! ./health.component.css */ "./src/app/admin/health/health.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HealthComponent);



/***/ }),

/***/ "./src/app/admin/user-management/user-management-home/user-management-home.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/user-management/user-management-home/user-management-home.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtaG9tZS91c2VyLW1hbmFnZW1lbnQtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/user-management/user-management-home/user-management-home.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/user-management/user-management-home/user-management-home.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UserManagementHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementHomeComponent", function() { return UserManagementHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserManagementHomeComponent = class UserManagementHomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
UserManagementHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management-home',
        template: __webpack_require__(/*! raw-loader!./user-management-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user-management-home/user-management-home.component.html"),
        styles: [__webpack_require__(/*! ./user-management-home.component.css */ "./src/app/admin/user-management/user-management-home/user-management-home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserManagementHomeComponent);



/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let UserManagementComponent = class UserManagementComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        //if(this.authService.currentUserValue.token === '' || !this.authService.isValidSession())
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn()) {
            this.authService.logout();
            this.router.navigate(['/login']);
        }
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user-management.component.html"),
        styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/admin/user-management/user-management.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], UserManagementComponent);



/***/ }),

/***/ "./src/app/admin/user-management/user-management.route.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.route.ts ***!
  \****************************************************************/
/*! exports provided: UserManagementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutes", function() { return UserManagementRoutes; });
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management.component */ "./src/app/admin/user-management/user-management.component.ts");
/* harmony import */ var _user_management_home_user_management_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management-home/user-management-home.component */ "./src/app/admin/user-management/user-management-home/user-management-home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");



const UserManagementRoutes = [
    {
        path: 'admin/user',
        component: _user_management_home_user_management_home_component__WEBPACK_IMPORTED_MODULE_1__["UserManagementHomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: 'list',
                component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__["UserManagementComponent"]
            },
            {
                path: 'new',
                component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__["UserManagementComponent"]
            },
            {
                path: ':id',
                component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__["UserManagementComponent"],
                children: [
                    {
                        path: 'edit',
                        component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__["UserManagementComponent"]
                    },
                    {
                        path: 'delete',
                        component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__["UserManagementComponent"]
                    }
                ]
            },
            {
                path: '',
                component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__["UserManagementComponent"]
            }
        ]
    }
];
/*

export const userManagementRoute: Routes=[
  {
    path: 'user',
    component: AdminHomeComponent,
    children: [
      {
        path: 'list',
        component: UserManagementComponent
      },
      {
        path: 'new',
        component: UserManagementComponent
      },
      {
        path: ':id',
        component: UserManagementComponent,
        children: [
          {
            path: 'edit',
            component: UserManagementComponent
          },
          {
            path: 'delete',
            component: UserManagementComponent
          }
        ]
      },
      {
        path: '',
        component: UserManagementComponent
      }
    ]
  }];

*/


/***/ }),

/***/ "./src/app/api/api.module.ts":
/*!***********************************!*\
  !*** ./src/app/api/api.module.ts ***!
  \***********************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ApiModule = class ApiModule {
};
ApiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: 'category',
                    loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("common"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/api/category/category.module.ts")).then(m => m.CategoryModule)
                },
                {
                    path: 'manufacturer',
                    loadChildren: () => __webpack_require__.e(/*! import() | manufacturer-manufacturer-module */ "manufacturer-manufacturer-module").then(__webpack_require__.bind(null, /*! ./manufacturer/manufacturer.module */ "./src/app/api/manufacturer/manufacturer.module.ts")).then(m => m.ManufacturerModule)
                },
                {
                    path: 'product',
                    loadChildren: () => Promise.all(/*! import() | product-product-module */[__webpack_require__.e("common"), __webpack_require__.e("product-product-module")]).then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/app/api/product/product.module.ts")).then(m => m.ProductModule)
                },
                {
                    path: 'order',
                    loadChildren: () => Promise.all(/*! import() | order-order-module */[__webpack_require__.e("common"), __webpack_require__.e("order-order-module")]).then(__webpack_require__.bind(null, /*! ./order/order.module */ "./src/app/api/order/order.module.ts")).then(m => m.OrderModule)
                },
                {
                    path: 'cart',
                    loadChildren: () => Promise.all(/*! import() | cart-cart-module */[__webpack_require__.e("default~cart-cart-module~checkout-checkout-module"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null, /*! ./cart/cart.module */ "./src/app/api/cart/cart.module.ts")).then(m => m.CartModule)
                },
                {
                    path: 'checkout',
                    loadChildren: () => Promise.all(/*! import() | checkout-checkout-module */[__webpack_require__.e("default~cart-cart-module~checkout-checkout-module"), __webpack_require__.e("default~account-account-module~checkout-checkout-module"), __webpack_require__.e("checkout-checkout-module")]).then(__webpack_require__.bind(null, /*! ./checkout/checkout.module */ "./src/app/api/checkout/checkout.module.ts")).then(m => m.CheckoutModule)
                },
                {
                    path: 'address',
                    loadChildren: () => __webpack_require__.e(/*! import() | address-address-module */ "address-address-module").then(__webpack_require__.bind(null, /*! ./address/address.module */ "./src/app/api/address/address.module.ts")).then(m => m.AddressModule)
                },
                {
                    path: 'address_type',
                    loadChildren: () => __webpack_require__.e(/*! import() | address-type-address-type-module */ "address-type-address-type-module").then(__webpack_require__.bind(null, /*! ./address-type/address-type.module */ "./src/app/api/address-type/address-type.module.ts")).then(m => m.AddressTypeModule)
                },
                {
                    path: 'city',
                    loadChildren: () => __webpack_require__.e(/*! import() | city-city-module */ "city-city-module").then(__webpack_require__.bind(null, /*! ./city/city.module */ "./src/app/api/city/city.module.ts")).then(m => m.CityModule)
                },
                {
                    path: 'state',
                    loadChildren: () => __webpack_require__.e(/*! import() | state-state-module */ "state-state-module").then(__webpack_require__.bind(null, /*! ./state/state.module */ "./src/app/api/state/state.module.ts")).then(m => m.StateModule)
                },
                {
                    path: 'country',
                    loadChildren: () => __webpack_require__.e(/*! import() | country-country-module */ "country-country-module").then(__webpack_require__.bind(null, /*! ./country/country.module */ "./src/app/api/country/country.module.ts")).then(m => m.CountryModule)
                }
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [],
        entryComponents: [],
        providers: [],
    })
], ApiModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/home/home.component */ "./src/app/layouts/home/home.component.ts");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");





const routes = [
    {
        path: '',
        component: _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["UserAuthGuard"]]
    },
    {
        path: 'home',
        component: _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["UserAuthGuard"]]
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() | account-account-module */[__webpack_require__.e("default~account-account-module~checkout-checkout-module"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null, /*! ./account/account.module */ "./src/app/account/account.module.ts")).then(m => m.AccountModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");





let AppComponent = class AppComponent {
    constructor(router, spinner) {
        this.router = router;
        this.spinner = spinner;
        this.title = 'Home';
        console.log('Is production environment: ' + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].production); // Logs false for default environment
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                this.spinner.show();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"]) {
                this.spinner.hide();
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: PRODUCT_API_URL, INVENTORY_API_URL, CATEGORY_API_URL, CURRENCY_API_URL, MANUFACTURER_API_URL, MANUFACTURER_ADDRESS_API_URL, MANUFACTURER_ADDRESS_TYPE_API_URL, ORDER_API_URL, CART_API_URL, CART_PRODUCT_API_URL, CART_STATUS_API_URL, CART_ADDRESS_API_URL, TAX_RATE_API_URL, ADDRESS_TYPE_API_URL, ADDRESS_API_URL, CITY_API_URL, STATE_API_URL, COUNTRY_API_URL, USER_PROFILE_API_URL, LOGIN_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_API_URL", function() { return PRODUCT_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVENTORY_API_URL", function() { return INVENTORY_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_API_URL", function() { return CATEGORY_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_API_URL", function() { return CURRENCY_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANUFACTURER_API_URL", function() { return MANUFACTURER_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANUFACTURER_ADDRESS_API_URL", function() { return MANUFACTURER_ADDRESS_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANUFACTURER_ADDRESS_TYPE_API_URL", function() { return MANUFACTURER_ADDRESS_TYPE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_API_URL", function() { return ORDER_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_API_URL", function() { return CART_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_PRODUCT_API_URL", function() { return CART_PRODUCT_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_STATUS_API_URL", function() { return CART_STATUS_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_ADDRESS_API_URL", function() { return CART_ADDRESS_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAX_RATE_API_URL", function() { return TAX_RATE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_TYPE_API_URL", function() { return ADDRESS_TYPE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_API_URL", function() { return ADDRESS_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITY_API_URL", function() { return CITY_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_API_URL", function() { return STATE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY_API_URL", function() { return COUNTRY_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROFILE_API_URL", function() { return USER_PROFILE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_API_URL", function() { return LOGIN_API_URL; });
//API URLS
const PRODUCT_API_URL = 'api/v1/product/';
const INVENTORY_API_URL = 'api/v1/inventory/';
const CATEGORY_API_URL = 'api/v1/category/';
const CURRENCY_API_URL = 'api/v1/currency/';
const MANUFACTURER_API_URL = 'api/v1/manufacturer/';
const MANUFACTURER_ADDRESS_API_URL = 'api/v1/manufacturer_address/';
const MANUFACTURER_ADDRESS_TYPE_API_URL = 'api/v1/manufacturer_address_type/';
const ORDER_API_URL = 'api/v1/order/';
const CART_API_URL = 'api/v1/cart/';
const CART_PRODUCT_API_URL = 'api/v1/cart/';
const CART_STATUS_API_URL = 'api/v1/cart_status/';
const CART_ADDRESS_API_URL = 'api/v1/cart_address/';
const TAX_RATE_API_URL = 'api/v1/tax_rate/';
const ADDRESS_TYPE_API_URL = 'api/v1/address_type/';
const ADDRESS_API_URL = 'api/v1/address/';
const CITY_API_URL = 'api/v1/city/';
const STATE_API_URL = 'api/v1/state/';
const COUNTRY_API_URL = 'api/v1/country/';
const USER_PROFILE_API_URL = 'api/v1/user_profile/';
const LOGIN_API_URL = 'api/v1/login/';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/layout.module */ "./src/app/layouts/layout.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/home/home.component */ "./src/app/layouts/home/home.component.ts");
/* harmony import */ var _layouts_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/pagenotfound/pagenotfound.component */ "./src/app/layouts/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _core_intercepters_httpInterceptorProviders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/intercepters/httpInterceptorProviders */ "./src/app/core/intercepters/httpInterceptorProviders.ts");
/* harmony import */ var _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/helpers.module */ "./src/app/helpers/helpers.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./api/api.module */ "./src/app/api/api.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"],
            _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _api_api_module__WEBPACK_IMPORTED_MODULE_17__["ApiModule"],
            _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_15__["HelpersModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _layouts_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]
        ],
        providers: [_core_intercepters_httpInterceptorProviders__WEBPACK_IMPORTED_MODULE_14__["httpInterceptorProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");







let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    static isUserLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }
    // @ts-ignore
    login(username, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                authorization: 'Basic ' + btoa(username + ':' + password)
            })
        };
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_6__["LOGIN_API_URL"] + 'login', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a Spring Session token in the response
            if (user && user.token) {
                // store user details and Spring Session token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('isLoggedIn', 'true');
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        localStorage.setItem('isLoggedIn', 'false');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_management_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login-management.route */ "./src/app/core/login/login-management.route.ts");




let CoreRoutingModule = class CoreRoutingModule {
};
CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_login_login_management_route__WEBPACK_IMPORTED_MODULE_3__["LoginManagementRoutes"])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], CoreRoutingModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/core/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role/role.component */ "./src/app/core/role/role.component.ts");
/* harmony import */ var _privilege_privilege_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privilege/privilege.component */ "./src/app/core/privilege/privilege.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/core/logout/logout.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"]
        ],
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
            _role_role_component__WEBPACK_IMPORTED_MODULE_7__["RoleComponent"],
            _privilege_privilege_component__WEBPACK_IMPORTED_MODULE_8__["PrivilegeComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/intercepters/error-interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/intercepters/error-interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err.status === 401) {
                console.log('Inside ErrorInterceptor, Http Status: 401');
                this.authService.logout();
                this.router.navigate(['/login']);
            }
            if (err.status === 403) {
                console.log('Inside ErrorInterceptor, Http Status: 403');
                this.authService.logout();
                this.router.navigate(['/403']);
            }
            if (err.status === 404) {
                console.log('Inside ErrorInterceptor, Http Status: 404');
                //this.authService.logout();
                //this.router.navigate( ['/login'] );
            }
            if (err.status === 500) {
                console.log('Inside ErrorInterceptor, Http Status: 500');
            }
            if (err.status === 0 || err.statusText === 'Unknown Error') {
                console.log('Inside ErrorInterceptor, Http Status: Unknown Error');
                alert('Unknown Error occurred, failed to reach backend server, Please try again');
            }
            let error = err.error.message || err.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/intercepters/http-token-interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/intercepters/http-token-interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HttpTokenInterceptor = class HttpTokenInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(request, next) {
        let currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'X-Auth-Token': currentUser.token
                }
            });
        }
        return next.handle(request);
    }
};
HttpTokenInterceptor.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HttpTokenInterceptor);



/***/ }),

/***/ "./src/app/core/intercepters/httpInterceptorProviders.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/intercepters/httpInterceptorProviders.ts ***!
  \***************************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/core/intercepters/error-interceptor.ts");
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-token-interceptor */ "./src/app/core/intercepters/http-token-interceptor.ts");



/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"],
        multi: true
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _http_token_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpTokenInterceptor"],
        multi: true
    }
];


/***/ }),

/***/ "./src/app/core/login/login-management.route.ts":
/*!******************************************************!*\
  !*** ./src/app/core/login/login-management.route.ts ***!
  \******************************************************/
/*! exports provided: LoginManagementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginManagementRoutes", function() { return LoginManagementRoutes; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/core/logout/logout.component.ts");


const LoginManagementRoutes = [
    {
        path: 'login',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__["LogoutComponent"]
    }
];


/***/ }),

/***/ "./src/app/core/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/core/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authService, spinner) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.submitted = false;
    }
    ngOnInit() {
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/home']);
        }
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //Logout user if already logged in
        this.logout();
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    login() {
        this.spinner.show();
        this.authService.login(this.f.username.value, this.f.password.value).subscribe(response => {
            if (response['token'] && _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].isUserLoggedIn()) {
                this.router.navigate(['/home']);
            }
            else {
                localStorage.removeItem('currentUser');
                this.router.navigate(['/login']);
            }
        }, error => {
            console.log(error);
            this.loginFailed = true;
            this.spinner.hide();
        }, () => {
            this.spinner.hide();
        });
    }
    logout() {
        this.authService.logout();
        this.setMessage();
    }
    isUserLoggedIn() {
    }
    setMessage() {
        this.message = 'Logged ' + (_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].isUserLoggedIn() ? 'in' : 'out');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/core/logout/logout.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/logout/logout.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let LogoutComponent = class LogoutComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/core/logout/logout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/core/privilege/privilege.component.css":
/*!********************************************************!*\
  !*** ./src/app/core/privilege/privilege.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJpdmlsZWdlL3ByaXZpbGVnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/privilege/privilege.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/privilege/privilege.component.ts ***!
  \*******************************************************/
/*! exports provided: PrivilegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegeComponent", function() { return PrivilegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivilegeComponent = class PrivilegeComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivilegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privilege',
        template: __webpack_require__(/*! raw-loader!./privilege.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/privilege/privilege.component.html"),
        styles: [__webpack_require__(/*! ./privilege.component.css */ "./src/app/core/privilege/privilege.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PrivilegeComponent);



/***/ }),

/***/ "./src/app/core/role/role.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/role/role.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/role/role.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/role/role.component.ts ***!
  \*********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RoleComponent = class RoleComponent {
    constructor() { }
    ngOnInit() {
    }
};
RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role',
        template: __webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/role/role.component.html"),
        styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/core/role/role.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RoleComponent);



/***/ }),

/***/ "./src/app/core/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/user/user.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/core/user/user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const url = state.url;
        return this.checkLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    hasAdminRole() {
        let userRoles = JSON.parse(localStorage.getItem('currentUser')).roles;
        for (let role of userRoles) {
            if (role.name === 'ROLE_ADMIN') {
                return true;
            }
        }
        return false;
    }
    checkLogin(url) {
        if (_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn() && this.hasAdminRole()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/403']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/user-auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/user-auth.guard.ts ***!
  \*******************************************/
/*! exports provided: UserAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuard", function() { return UserAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let UserAuthGuard = class UserAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const url = state.url;
        return this.checkLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    hasUserRole() {
        let userRoles = JSON.parse(localStorage.getItem('currentUser')).roles;
        for (let role of userRoles) {
            if (role.name === 'ROLE_USER') {
                return true;
            }
        }
        return false;
    }
    checkLogin(url) {
        if (_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn() && this.hasUserRole()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
};
UserAuthGuard.ctorParameters = () => [
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserAuthGuard);



/***/ }),

/***/ "./src/app/helpers/helpers-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/helpers/helpers-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HelpersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpersRoutingModule", function() { return HelpersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http403_error_http403_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http403-error/http403-error.component */ "./src/app/helpers/http403-error/http403-error.component.ts");




const routes = [
    { path: '403', component: _http403_error_http403_error_component__WEBPACK_IMPORTED_MODULE_3__["Http403ErrorComponent"] }
];
let HelpersRoutingModule = class HelpersRoutingModule {
};
HelpersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HelpersRoutingModule);



/***/ }),

/***/ "./src/app/helpers/helpers.module.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/helpers.module.ts ***!
  \*******************************************/
/*! exports provided: HelpersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpersModule", function() { return HelpersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _http403_error_http403_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http403-error/http403-error.component */ "./src/app/helpers/http403-error/http403-error.component.ts");
/* harmony import */ var _helpers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-routing.module */ "./src/app/helpers/helpers-routing.module.ts");
/* harmony import */ var _pipes_file_existing_value_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/file-existing-value.pipe */ "./src/app/helpers/pipes/file-existing-value.pipe.ts");






let HelpersModule = class HelpersModule {
};
HelpersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_http403_error_http403_error_component__WEBPACK_IMPORTED_MODULE_3__["Http403ErrorComponent"], _pipes_file_existing_value_pipe__WEBPACK_IMPORTED_MODULE_5__["FileExistingValuePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _helpers_routing_module__WEBPACK_IMPORTED_MODULE_4__["HelpersRoutingModule"]
        ]
    })
], HelpersModule);



/***/ }),

/***/ "./src/app/helpers/http403-error/http403-error.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/helpers/http403-error/http403-error.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlcnMvaHR0cDQwMy1lcnJvci9odHRwNDAzLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/helpers/http403-error/http403-error.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/helpers/http403-error/http403-error.component.ts ***!
  \******************************************************************/
/*! exports provided: Http403ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http403ErrorComponent", function() { return Http403ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Http403ErrorComponent = class Http403ErrorComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
Http403ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-http403-error',
        template: __webpack_require__(/*! raw-loader!./http403-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/helpers/http403-error/http403-error.component.html"),
        styles: [__webpack_require__(/*! ./http403-error.component.css */ "./src/app/helpers/http403-error/http403-error.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Http403ErrorComponent);



/***/ }),

/***/ "./src/app/helpers/pipes/file-existing-value.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/helpers/pipes/file-existing-value.pipe.ts ***!
  \***********************************************************/
/*! exports provided: FileExistingValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExistingValuePipe", function() { return FileExistingValuePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileExistingValuePipe = class FileExistingValuePipe {
    transform(value, args) {
        return null;
    }
};
FileExistingValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fileExistingValue'
    })
], FileExistingValuePipe);



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\n  color: hotpink;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtaGVhcnQge1xuICBjb2xvcjogaG90cGluaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layouts/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/layouts/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/layouts/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
    isLoggedIn() {
        return _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].isUserLoggedIn();
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layouts/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/layouts/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/layouts/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let HomeComponent = class HomeComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn()) {
            this.authService.logout();
            this.router.navigate(['/login']);
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layouts/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/layouts/layout.module.ts":
/*!******************************************!*\
  !*** ./src/app/layouts/layout.module.ts ***!
  \******************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layouts/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/layouts/main/main.component.ts");







let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
        exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layouts/main/main.component.css":
/*!*************************************************!*\
  !*** ./src/app/layouts/main/main.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-height: 480px) {\n  #main_div {\n    min-height: 480px;\n  }\n\n}\n\n@media (min-height: 768px) {\n  #main_div {\n    min-height: 768px;\n  }\n}\n\n@media (min-height: 992px) {\n  #main_div {\n    min-height: 992px;\n  }\n}\n\n@media (min-height: 1200px) {\n  #main_div {\n    min-height: 1200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLWhlaWdodDogNDgwcHgpIHtcbiAgI21haW5fZGl2IHtcbiAgICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogNzY4cHgpIHtcbiAgI21haW5fZGl2IHtcbiAgICBtaW4taGVpZ2h0OiA3NjhweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDk5MnB4KSB7XG4gICNtYWluX2RpdiB7XG4gICAgbWluLWhlaWdodDogOTkycHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjAwcHgpIHtcbiAgI21haW5fZGl2IHtcbiAgICBtaW4taGVpZ2h0OiAxMjAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/layouts/main/main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/layouts/pagenotfound/pagenotfound.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/pagenotfound/pagenotfound.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/pagenotfound/pagenotfound.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/pagenotfound/pagenotfound.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagenotfound',
        template: __webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pagenotfound/pagenotfound.component.html"),
        styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/layouts/pagenotfound/pagenotfound.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    SERVER_URL: 'http://ec2-54-152-16-196.compute-1.amazonaws.com/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    SERVER_URL: 'http://localhost:8080/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pjadda/WebstormProjects/SpringSecurity-SpringData-UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map