(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/api/category/service/category.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/api/category/service/category.service.ts ***!
  \**********************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(httpClient) {
        this.httpClient = httpClient;
    }
    CategoryService.prototype.getCategories = function (url) {
        return this.httpClient.get(url);
    };
    CategoryService.prototype.createCategory = function (url, category) {
        return this.httpClient.post(url, category);
        //return this.httpClient.put(url,httpOptions,category);
    };
    CategoryService.prototype.getCategoryDetails = function (url) {
        return this.httpClient.get(url);
    };
    CategoryService.prototype.updateCategory = function (url, category) {
        return this.httpClient.put(url, category);
    };
    CategoryService.prototype.deleteCategory = function (url) {
        return this.httpClient.delete(url);
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/api/product/service/product.service.ts":
/*!********************************************************!*\
  !*** ./src/app/api/product/service/product.service.ts ***!
  \********************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService(httpClient) {
        this.httpClient = httpClient;
    }
    ProductService.prototype.getProducts = function (url) {
        return this.httpClient.get(url);
    };
    ProductService.prototype.createProduct = function (url, product) {
        return this.httpClient.post(url, product);
    };
    ProductService.prototype.getCurrencies = function (url) {
        return this.httpClient.get(url);
    };
    ProductService.prototype.getProductDetails = function (url) {
        return this.httpClient.get(url);
    };
    ProductService.prototype.getProductInventory = function (url) {
        return this.httpClient.get(url);
    };
    ProductService.prototype.getManufacturers = function (url) {
        return this.httpClient.get(url);
    };
    ProductService.prototype.updateProduct = function (url, product) {
        return this.httpClient.put(url, product);
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map