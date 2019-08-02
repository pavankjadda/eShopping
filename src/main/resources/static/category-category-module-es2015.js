(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/api/category/category-delete/category-delete.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/category/category-delete/category-delete.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 30px\">\n  <h2>Delete Category</h2>\n  <br/>\n  <form [formGroup]=\"categoryForm\">\n    <div class=\"form-group\">\n      <label for=\"id\">Category Id</label>\n      <input class=\"form-control\" formControlName=\"id\" id=\"id\" required type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Category Name</label>\n      <input class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Enter Category Name\" required\n             type=\"text\">\n    </div>\n\n    <button (click)=\"deleteCategory()\" class=\"btn btn-primary\" type=\"submit\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/category/category-edit/category-edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/category/category-edit/category-edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 30px\">\n  <h2>Update Category</h2>\n  <br/>\n  <form [formGroup]=\"categoryForm\">\n    <div class=\"form-group\">\n      <label for=\"id\">Category Id</label>\n      <input class=\"form-control\" formControlName=\"id\" id=\"id\" required type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Category Name</label>\n      <input class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Enter New Category Name\" required\n             type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Category Description</label>\n      <textarea class=\"form-control\" formControlName=\"description\" id=\"description\"\n             placeholder=\"Enter New Category Description\" required>\n      </textarea>\n    </div>\n  </form>\n\n  <button (click)=\"goBack()\" class=\"btn btn-outline-danger\" style=\"margin-right: 30px\">Back</button>\n  <button (click)=\"updateCategory()\" class=\"btn btn-primary\" type=\"submit\">Update</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/category/category-home/category-home.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/category/category-home/category-home.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Category Home</h2>\n\n<ul  class=\"list-group\">\n  <li class=\"list-group-item\"><a routerLink=\"list\" routerLinkActive=\"active\">All Categories</a></li>\n  <li class=\"list-group-item\"><a routerLink=\"new\" routerLinkActive=\"active\">Create New Category</a></li>\n  <li class=\"list-group-item\"><a routerLink=\"update\" routerLinkActive=\"active\">Update Category</a></li>\n  <li class=\"list-group-item\"><a routerLink=\"delete\" routerLinkActive=\"active\">Delete Category</a></li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/category/category-list/category-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/category/category-list/category-list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" color=\"#fff\" size=\"large\" type=\"ball-elastic-dots\"></ngx-spinner>\n\n<div class=\"container container-fluid\">\n  <h3 style=\"text-align: center\" > Categories List</h3>\n  <div *ngIf=\"categoriesDataAvailable()\">\n    <table class=\"table table-bordered\">\n      <tr style=\"text-align: center\" >\n        <th> Category Id</th>\n        <th>Category Name</th>\n        <th>Category Description</th>\n      </tr>\n\n      <tr *ngFor=\"let category of (categories)\" style=\"text-align: center\">\n        <td><a [routerLink]=\"['/category', category.id]\">{{category.id}}</a></td>\n        <td><a [routerLink]=\"['/category', category.id]\">{{category.name}}</a></td>\n        <td>{{category.description}}</td>\n      </tr>\n    </table>\n\n    <div style=\"text-align: center\">\n      <a [routerLink]=\"['/category']\" style=\"margin-right: 30px\">Back</a>\n      <a [routerLink]=\"['/category/new']\" style=\"margin-right: 30px\">Create New</a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/category/category-new/category-new.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/category/category-new/category-new.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Create New Category</h2>\n\n<br/>\n<form  [formGroup]=\"categoryForm\">\n  <div class=\"form-group\">\n    <label for=\"id\">Category Id</label>\n    <input type=\"text\" class=\"form-control\"  id=\"id\" formControlName=\"id\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">Automatically generated by system</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"name\">Category Name</label>\n    <input type=\"text\" class=\"form-control\"  id=\"name\" formControlName=\"name\" required placeholder=\"Enter Category Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Category Description</label>\n    <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" placeholder=\"Enter Category Description\" required >\n    </textarea>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"createCategory()\">Submit</button>\n  <button type=\"button\" class=\"btn btn-primary\"  style=\"margin-left: 30px\" (click)=\"goBack()\">Cancel</button>\n\n</form>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/category/category-view/category-view.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/category/category-view/category-view.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"categoryDataAvailable()\">\n  <form [formGroup]=\"categoryForm\">\n\n    <div class=\"form-group\">\n      <label for=\"id\">Category Id</label>\n      <input class=\"form-control\" formControlName=\"id\" id=\"id\" required type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Category Name</label>\n      <input class=\"form-control\" formControlName=\"name\" id=\"name\" type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Category Description</label>\n      <textarea class=\"form-control\" formControlName=\"description\" id=\"description\">\n      </textarea>\n    </div>\n  </form>\n</div>\n\n<p>\n  <br/>\n  <a [routerLink]=\"['/category/list']\" style=\"margin-right: 30px\">Back </a>\n  <a [routerLink]=\"['./edit']\" style=\"margin-right: 30px\">Edit </a>\n  <a [routerLink]=\"['./delete']\">Delete </a>\n</p>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/api/category/category.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/api/category/category.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/api/category/category-delete/category-delete.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/api/category/category-delete/category-delete.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS1kZWxldGUvY2F0ZWdvcnktZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/api/category/category-delete/category-delete.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/api/category/category-delete/category-delete.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDeleteComponent", function() { return CategoryDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






let CategoryDeleteComponent = class CategoryDeleteComponent {
    constructor(categoryService, router, route) {
        this.categoryService = categoryService;
        this.router = router;
        this.route = route;
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
        });
    }
    ngOnInit() {
        const id = this.route.parent.snapshot.params.id;
        this.categoryForm.controls['id'].patchValue(id, { emitEvent: false });
    }
    deleteCategory() {
        const id = this.categoryForm.get('id').value;
        if (confirm('Do you want to delete this Category with Id:' + id + '?')) {
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + 'api/v1/category/delete/' + id;
            this.categoryService.deleteCategory(url).subscribe(value => { }, error1 => { }, () => {
                this.router.navigate(['/category/list']);
            });
        }
    }
};
CategoryDeleteComponent.ctorParameters = () => [
    { type: _service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CategoryDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-delete',
        template: __webpack_require__(/*! raw-loader!./category-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/category/category-delete/category-delete.component.html"),
        styles: [__webpack_require__(/*! ./category-delete.component.css */ "./src/app/api/category/category-delete/category-delete.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], CategoryDeleteComponent);



/***/ }),

/***/ "./src/app/api/category/category-edit/category-edit.component.css":
/*!************************************************************************!*\
  !*** ./src/app/api/category/category-edit/category-edit.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS1lZGl0L2NhdGVnb3J5LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/category/category-edit/category-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/api/category/category-edit/category-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/category */ "./src/app/api/category/model/category.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








let CategoryEditComponent = class CategoryEditComponent {
    constructor(categoryService, router, route) {
        this.categoryService = categoryService;
        this.router = router;
        this.route = route;
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_6__["CATEGORY_API_URL"] + id;
        this.categoryService.getCategoryDetails(url).subscribe(data => {
            this.categoryForm.patchValue({
                id: data.id,
                name: data.name,
                description: data.description
            });
        }, error => {
            console.log(error);
        }, () => {
            console.log('getCategoryDetails() success');
        });
    }
    updateCategory() {
        const category = new _model_category__WEBPACK_IMPORTED_MODULE_5__["Category"](this.categoryForm.get('id').value);
        category.name = this.categoryForm.get('name').value;
        category.description = this.categoryForm.get('description').value;
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_6__["CATEGORY_API_URL"] + 'update';
        this.categoryService.updateCategory(url, category).subscribe(value => { }, error1 => { }, () => {
            this.router.navigate(['/category/list']);
        });
    }
    goBack() {
        this.router.navigate(['/category/' + this.categoryForm.get('id').value]);
    }
};
CategoryEditComponent.ctorParameters = () => [
    { type: _service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CategoryEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-edit',
        template: __webpack_require__(/*! raw-loader!./category-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/category/category-edit/category-edit.component.html"),
        styles: [__webpack_require__(/*! ./category-edit.component.css */ "./src/app/api/category/category-edit/category-edit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], CategoryEditComponent);



/***/ }),

/***/ "./src/app/api/category/category-home/category-home.component.css":
/*!************************************************************************!*\
  !*** ./src/app/api/category/category-home/category-home.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS1ob21lL2NhdGVnb3J5LWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/category/category-home/category-home.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/api/category/category-home/category-home.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryHomeComponent", function() { return CategoryHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryHomeComponent = class CategoryHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-home',
        template: __webpack_require__(/*! raw-loader!./category-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/category/category-home/category-home.component.html"),
        styles: [__webpack_require__(/*! ./category-home.component.css */ "./src/app/api/category/category-home/category-home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoryHomeComponent);



/***/ }),

/***/ "./src/app/api/category/category-list/category-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/api/category/category-list/category-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/category/category-list/category-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/api/category/category-list/category-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






let CategoryListComponent = class CategoryListComponent {
    constructor(categoryService, spinner) {
        this.categoryService = categoryService;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CATEGORY_API_URL"] + 'list';
        this.spinner.show();
        this.categoryService.getCategories(url).subscribe(data => {
            this.categories = data;
            this.spinner.hide();
        }, err => {
            this.spinner.hide();
            console.error(err);
        }, () => {
            this.spinner.hide();
        });
        return this.categories;
    }
    categoriesDataAvailable() {
        return this.categories !== undefined;
    }
};
CategoryListComponent.ctorParameters = () => [
    { type: _service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: __webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/category/category-list/category-list.component.html"),
        styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/api/category/category-list/category-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
], CategoryListComponent);



/***/ }),

/***/ "./src/app/api/category/category-new/category-new.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/api/category/category-new/category-new.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS1uZXcvY2F0ZWdvcnktbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/api/category/category-new/category-new.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/api/category/category-new/category-new.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryNewComponent", function() { return CategoryNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _model_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/category */ "./src/app/api/category/model/category.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








let CategoryNewComponent = class CategoryNewComponent {
    constructor(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    createCategory() {
        const category = new _model_category__WEBPACK_IMPORTED_MODULE_5__["Category"](this.categoryForm.get('id').value);
        category.name = this.categoryForm.get('name').value;
        category.description = this.categoryForm.get('description').value;
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CATEGORY_API_URL"] + 'create';
        this.categoryService.createCategory(url, category).subscribe(value => { }, error1 => { }, () => {
            this.router.navigate(['/category/list']);
        });
    }
    goBack() {
        this.router.navigate(['/category']);
    }
};
CategoryNewComponent.ctorParameters = () => [
    { type: _service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CategoryNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-new',
        template: __webpack_require__(/*! raw-loader!./category-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/category/category-new/category-new.component.html"),
        styles: [__webpack_require__(/*! ./category-new.component.css */ "./src/app/api/category/category-new/category-new.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], CategoryNewComponent);



/***/ }),

/***/ "./src/app/api/category/category-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/api/category/category-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: categoryManagementRoute, CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryManagementRoute", function() { return categoryManagementRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/api/category/category-list/category-list.component.ts");
/* harmony import */ var _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-view/category-view.component */ "./src/app/api/category/category-view/category-view.component.ts");
/* harmony import */ var _category_new_category_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-new/category-new.component */ "./src/app/api/category/category-new/category-new.component.ts");
/* harmony import */ var _category_home_category_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-home/category-home.component */ "./src/app/api/category/category-home/category-home.component.ts");
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-edit/category-edit.component */ "./src/app/api/category/category-edit/category-edit.component.ts");
/* harmony import */ var _category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-delete/category-delete.component */ "./src/app/api/category/category-delete/category-delete.component.ts");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");










const categoryManagementRoute = [
    {
        path: '',
        component: _category_home_category_home_component__WEBPACK_IMPORTED_MODULE_5__["CategoryHomeComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_8__["UserAuthGuard"]],
    },
    {
        path: 'list',
        component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__["CategoryListComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_8__["UserAuthGuard"]]
    },
    {
        path: 'new',
        component: _category_new_category_new_component__WEBPACK_IMPORTED_MODULE_4__["CategoryNewComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_8__["UserAuthGuard"]]
    },
    {
        path: ':id',
        component: _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_3__["CategoryViewComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_8__["UserAuthGuard"]]
    },
    {
        path: ':id/edit',
        component: _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__["CategoryEditComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_8__["UserAuthGuard"]]
    },
    {
        path: ':id/delete',
        component: _category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_7__["CategoryDeleteComponent"],
        canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_8__["UserAuthGuard"]]
    }
];
let CategoryRoutingModule = class CategoryRoutingModule {
};
CategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(categoryManagementRoute)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], CategoryRoutingModule);



/***/ }),

/***/ "./src/app/api/category/category-view/category-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/api/category/category-view/category-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS12aWV3L2NhdGVnb3J5LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/api/category/category-view/category-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/api/category/category-view/category-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryViewComponent", function() { return CategoryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/category.service */ "./src/app/api/category/service/category.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







let CategoryViewComponent = class CategoryViewComponent {
    constructor(categoryService, route, router) {
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
        });
    }
    ngOnInit() {
        this.getCategory();
    }
    categoryDataAvailable() {
        return this.category !== undefined;
    }
    getCategory() {
        const id = this.route.snapshot.paramMap.get('id');
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + _app_constants__WEBPACK_IMPORTED_MODULE_3__["CATEGORY_API_URL"] + id;
        this.categoryService.getCategoryDetails(url).subscribe(data => {
            this.categoryForm.patchValue({
                id: data.id,
                name: data.name,
                description: data.description
            });
            this.category = data;
        }, error => {
            console.log(error);
        }, () => console.log('getCategoryDetails() success'));
    }
};
CategoryViewComponent.ctorParameters = () => [
    { type: _service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CategoryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-view',
        template: __webpack_require__(/*! raw-loader!./category-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/category/category-view/category-view.component.html"),
        styles: [__webpack_require__(/*! ./category-view.component.css */ "./src/app/api/category/category-view/category-view.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CategoryViewComponent);



/***/ }),

/***/ "./src/app/api/category/category.component.css":
/*!*****************************************************!*\
  !*** ./src/app/api/category/category.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/api/category/category.component.ts":
/*!****************************************************!*\
  !*** ./src/app/api/category/category.component.ts ***!
  \****************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




let CategoryComponent = class CategoryComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        if (!_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].isUserLoggedIn()) {
        }
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/api/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/api/category/category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CategoryComponent);



/***/ }),

/***/ "./src/app/api/category/category.module.ts":
/*!*************************************************!*\
  !*** ./src/app/api/category/category.module.ts ***!
  \*************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/api/category/category-routing.module.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/api/category/category-list/category-list.component.ts");
/* harmony import */ var _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-view/category-view.component */ "./src/app/api/category/category-view/category-view.component.ts");
/* harmony import */ var _category_new_category_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-new/category-new.component */ "./src/app/api/category/category-new/category-new.component.ts");
/* harmony import */ var _category_home_category_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-home/category-home.component */ "./src/app/api/category/category-home/category-home.component.ts");
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category-edit/category-edit.component */ "./src/app/api/category/category-edit/category-edit.component.ts");
/* harmony import */ var _category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category-delete/category-delete.component */ "./src/app/api/category/category-delete/category-delete.component.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category.component */ "./src/app/api/category/category.component.ts");














let CategoryModule = class CategoryModule {
};
CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"],
            _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListComponent"],
            _category_view_category_view_component__WEBPACK_IMPORTED_MODULE_8__["CategoryViewComponent"],
            _category_new_category_new_component__WEBPACK_IMPORTED_MODULE_9__["CategoryNewComponent"],
            _category_home_category_home_component__WEBPACK_IMPORTED_MODULE_10__["CategoryHomeComponent"],
            _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__["CategoryEditComponent"],
            _category_delete_category_delete_component__WEBPACK_IMPORTED_MODULE_12__["CategoryDeleteComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoryRoutingModule"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], CategoryModule);



/***/ }),

/***/ "./src/app/api/category/model/category.ts":
/*!************************************************!*\
  !*** ./src/app/api/category/model/category.ts ***!
  \************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(id) {
        this.id = id;
    }
}
Category.ctorParameters = () => [
    { type: Number }
];


/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map