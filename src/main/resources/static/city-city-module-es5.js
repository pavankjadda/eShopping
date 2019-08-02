(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-city-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api/city/city.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/city/city.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid container\">\n  <h3> Cities List</h3>\n  <div  *ngIf=\"cityDataAvailable()\">\n    <table style=\"text-align: center\">\n      <tr>\n        <th>Id</th>\n        <th>name</th>\n        <th>State Name</th>\n      </tr>\n      <tr *ngFor=\"let city of cities\">\n        <td>{{city.id}}</td>\n        <td>{{city.name}}</td>\n        <td>{{city.state.name}}</td>\n      </tr>\n    </table>\n    <div  style=\"margin: 30px\">\n      <input type=\"button\" class=\" btn btn-primary\" style=\"margin: 30px\" (click)=\"getFirstPageCities()\" value=\"Home\" >\n      <input type=\"button\" class=\" btn btn-primary\" style=\"margin: 30px\" (click)=\"getPreviousCities()\" value=\"Back\" >\n      <input type=\"button\" class=\" btn btn-primary\" style=\"margin: 30px\" (click)=\"getNextCities()\" value=\"Next\" >\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/api/city/city-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/api/city/city-routing.module.ts ***!
  \*************************************************/
/*! exports provided: cityManagementRoute, CityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityManagementRoute", function() { return cityManagementRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityRoutingModule", function() { return CityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city.component */ "./src/app/api/city/city.component.ts");





var cityManagementRoute = [
    {
        path: '',
        component: _city_component__WEBPACK_IMPORTED_MODULE_4__["CityComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_2__["UserAuthGuard"]]
    }
];
var CityRoutingModule = /** @class */ (function () {
    function CityRoutingModule() {
    }
    CityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(cityManagementRoute),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], CityRoutingModule);
    return CityRoutingModule;
}());



/***/ }),

/***/ "./src/app/api/city/city.component.css":
/*!*********************************************!*\
  !*** ./src/app/api/city/city.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\nth, td {\n  padding: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpL2NpdHkvY2l0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBpL2NpdHkvY2l0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGgsIHRkIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/api/city/city.component.ts":
/*!********************************************!*\
  !*** ./src/app/api/city/city.component.ts ***!
  \********************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/city.service */ "./src/app/api/city/services/city.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var CityComponent = /** @class */ (function () {
    function CityComponent(cityService) {
        this.cityService = cityService;
    }
    CityComponent.prototype.ngOnInit = function () {
        this.pageNumber = 0;
        this.pageSize = 10;
        this.getCities();
    };
    CityComponent.prototype.getCities = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CITY_API_URL"] + 'list?pageNumber=' + this.pageNumber + '&pageSize=' + this.pageSize;
        this.cityService.getCities(url).subscribe(function (data) {
            // @ts-ignore
            _this.cities = data.content;
            // @ts-ignore
            _this.totalPages = data.totalPages;
        }, function (err) { return console.error(err); }, function () { return console.log('Cities retrieved from backend'); });
        return this.cities;
    };
    CityComponent.prototype.getNextCities = function () {
        if (this.pageNumber >= this.totalPages) {
            this.pageNumber = this.totalPages;
        }
        else {
            this.pageNumber++;
        }
        this.getCities();
    };
    CityComponent.prototype.getPreviousCities = function () {
        if (this.pageNumber <= 0) {
            this.pageNumber = 0;
        }
        else {
            this.pageNumber--;
        }
        this.getCities();
    };
    CityComponent.prototype.getFirstPageCities = function () {
        this.pageNumber = 0;
        this.getCities();
    };
    CityComponent.prototype.cityDataAvailable = function () {
        return this.cities !== undefined;
    };
    CityComponent.ctorParameters = function () { return [
        { type: _services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"] }
    ]; };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/api/city/city.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/api/city/city.module.ts":
/*!*****************************************!*\
  !*** ./src/app/api/city/city.module.ts ***!
  \*****************************************/
/*! exports provided: CityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityModule", function() { return CityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city.component */ "./src/app/api/city/city.component.ts");
/* harmony import */ var _city_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-routing.module */ "./src/app/api/city/city-routing.module.ts");






var CityModule = /** @class */ (function () {
    function CityModule() {
    }
    CityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _city_component__WEBPACK_IMPORTED_MODULE_4__["CityComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _city_routing_module__WEBPACK_IMPORTED_MODULE_5__["CityRoutingModule"]
            ]
        })
    ], CityModule);
    return CityModule;
}());



/***/ }),

/***/ "./src/app/api/city/services/city.service.ts":
/*!***************************************************!*\
  !*** ./src/app/api/city/services/city.service.ts ***!
  \***************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CityService = /** @class */ (function () {
    function CityService(httpClient) {
        this.httpClient = httpClient;
    }
    CityService.prototype.getCities = function (url) {
        return this.httpClient.get(url);
    };
    CityService.prototype.getCitiesByStateId = function (url) {
        return this.httpClient.get(url);
    };
    CityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ })

}]);
//# sourceMappingURL=city-city-module-es5.js.map