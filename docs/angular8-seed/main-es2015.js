(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/dynamic-form/dynamic-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/dynamic-form/dynamic-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <form [formGroup]=\"orderForm\">\r\n            <div class=\"col\" formArrayName=\"items\" *ngFor=\"let item of orderForm.get('items').controls; let i: index\">\r\n                <div class=\"col-md-12\" [formGroupName]=\"i\">\r\n                    <input formControlName=\"name\" placeholder=\"Item name\">\r\n                    <input formControlName=\"description\" placeholder=\"Item description\">\r\n                    <input formControlName=\"price\" placeholder=\"Item price\">\r\n                    <span class=\"col-md-2\">\r\n                        <button class=\"btn btn-primary px-4 mx-2\" type=\"button\" (click)=\"addItem()\">Add</button>\r\n                        <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeItem(i)\">Remove</button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand col-11\" routerLink=\"/user/dashboard\">Dashboard</a>\r\n  <!-- <button type=\"button\" class=\"btn btn-primary col-1\" (click)=\"logout()\">Logout</button> -->\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found works!</p>\r\n<button type=\"submit\" (click)=\"gotoLogin()\">Back To Application</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>sidebar works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/components/dashboard/dashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/components/dashboard/dashboard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!-- <app-sidebar></app-sidebar> -->\r\n<!-- <app-footer></app-footer> -->\r\n<!-- <app-dynamic-form></app-dynamic-form> -->\r\n<form [formGroup]=\"orderForm\">\r\n    <div formArrayName=\"items\" *ngFor=\"let item of orderForm.get('items').controls; let i = index;\">\r\n        <div [formGroupName]=\"i\">\r\n            <input formControlName=\"name\" placeholder=\"Item name\">\r\n            <input formControlName=\"description\" placeholder=\"Item description\">\r\n            <input formControlName=\"price\" placeholder=\"Item price\">\r\n        </div>\r\n\r\n        Chosen name: {{ orderForm.controls.items.controls[i].controls.name.value }}\r\n\r\n        <button class=\"btn btn-primary\" (click)=\"addItem()\">Add</button>\r\n        <button class=\"btn btn-danger\" (click)=\"addItem(i)\">Remove</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/components/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/components/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\r\n<button type=\"submit\" (click)=\"login()\">Login</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/components/profile/profile.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/components/profile/profile.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>profile works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/components/upload-product/upload-product.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/components/upload-product/upload-product.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container mt-5\">\r\n    <!-- Product Upload Form -->\r\n    <div class=\"row mb-4 form-name\">\r\n        <label class=\"h3\">Product Upload Form</label>\r\n    </div>\r\n    <div class=\"row form-wrapper\">\r\n        <div>\r\n            <form [formGroup]=\"uploadProductForm\" (ngSubmit)=\"uploadProduct()\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-sm-5\">\r\n                            <label class=\"h5\">Name: </label>\r\n                        </div>\r\n                        <div class=\"col-7 col-sm-7\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter product name\"\r\n                                formControlName=\"name\" required>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\" col-5 col-sm-5\">\r\n                            <label class=\"h5\">Rate: </label>\r\n                        </div>\r\n                        <div class=\" col-7 col-sm-7\">\r\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Enter product rate\"\r\n                                formControlName=\"rate\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\" col-5 col-sm-5\">\r\n                            <label class=\"h5\">Description: </label>\r\n                        </div>\r\n                        <div class=\" col-7 col-sm-7\">\r\n                            <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter product description\"\r\n                                formControlName=\"description\" required></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\" col-5 col-sm-5\">\r\n                            <label class=\"h5\">Choose Image: </label>\r\n                        </div>\r\n                        <div class=\" col-7 col-sm-7\">\r\n                            <input id=\"file\" class=\"file-input cursor-pointer\" type=\"file\" accept=\"image/*\"\r\n                                formControlName=\"image\" (change)=\"uploadImage($event.target.files)\">\r\n                            <!-- {{fileName}} -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showPreview()\">Preview</button>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Upload</button>\r\n                <a class=\"float-right pr-2\" [routerLink]=\"['/user/view-product']\"><u>View Products</u></a>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <!-- Product Preview Section -->\r\n    <div class=\"row card card-width mt-4 mb-4\" *ngIf=\"isPreview\">\r\n        <i class=\"fa fa-window-close float-right cursor-pointer\" aria-hidden=\"true\" (click)=\"removePreview()\"></i>\r\n        <img [src]=\"imgURL\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title h6\">Name: {{uploadProductForm.controls.name.value}}</h5>\r\n            <h5 class=\"card-title h6\">Rate: &#8377; {{uploadProductForm.controls.rate.value}}</h5>\r\n            <p class=\"card-text h6\">Description: {{uploadProductForm.controls.description.value}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/components/view-product/view-product.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/components/view-product/view-product.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container mt-5\">\r\n    <div class=\"row mb-1 form-name\">\r\n        <a class=\"\" [routerLink]=\"['/user/upload-product']\"><u>Upload Product</u></a>\r\n    </div>\r\n    <!-- Product Upload Form -->\r\n    <div class=\"row mb-2 pt-4 form-name\">\r\n        <label class=\"h3\">Product List</label>\r\n    </div>\r\n    <div class=\"row row-sm\">\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/dp2.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/default-product-image.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/dp2.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/dp3.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-width mt-4 mb-4 mr2\">\r\n            <img src=\"{{../../../../../../assets/images/dp4.jpg\" class=\"card-img-top border-bottom-gray\" alt=\"Product image\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title h6\">Name: Lorem Ipsum</h5>\r\n                <h5 class=\"card-title h6\">Rate: &#8377;20</h5>\r\n                <p class=\"card-text h6\">Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>\r\n                <button class=\"btn btn-info btn-sm pull-right\">Buy Now</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/page-not-found/page-not-found.component */ "./src/app/shared/components/page-not-found/page-not-found.component.ts");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/user' },
    { path: '**', component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular8-seed';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/components/dynamic-form/dynamic-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form/dynamic-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/dynamic-form/dynamic-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-form/dynamic-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DynamicFormComponent = class DynamicFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            customerName: '',
            email: '',
            items: this.formBuilder.array([this.createItem()])
        });
    }
    createItem() {
        return this.formBuilder.group({
            name: '',
            description: '',
            price: ''
        });
    }
    addItem() {
        this.items = this.orderForm.get('items');
        this.items.push(this.createItem());
    }
    removeItem(index) {
        this.items.removeAt(index);
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
DynamicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-form',
        template: __webpack_require__(/*! raw-loader!./dynamic-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/dynamic-form/dynamic-form.component.html"),
        styles: [__webpack_require__(/*! ./dynamic-form.component.scss */ "./src/app/shared/components/dynamic-form/dynamic-form.component.scss")]
    })
], DynamicFormComponent);



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
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
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        sessionStorage.clear();
        this.router.navigate(['user/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotoLogin() {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            this.router.navigate(['user/dashboard']);
        }
        else {
            this.router.navigate(['user/login']);
        }
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/shared/components/page-not-found/page-not-found.component.scss")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")]
    })
], SidebarComponent);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/shared/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-form.component */ "./src/app/shared/components/dynamic-form/dynamic-form.component.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        exports: [
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/user/components/dashboard/dashboard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/user/components/dashboard/dashboard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout-btn {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2Rhc2hib2FyZC9TOlxcRnJlZWxhbmNpbmcgU3R1ZmZcXExhdHVyIENsaWVudFxcYW5ndWxhcjgtYm9pbGVyLXBsYXRlL3NyY1xcYXBwXFx1c2VyXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXQtYnRuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSIsIi5sb2dvdXQtYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/components/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DashboardComponent = class DashboardComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            customerName: '',
            email: '',
            items: this.formBuilder.array([this.createItem()])
        });
    }
    createItem() {
        return this.formBuilder.group({
            name: '',
            description: '',
            price: ''
        });
    }
    addItem() {
        this.items = this.orderForm.get('items');
        this.items.push(this.createItem());
    }
    removeItem(index) {
        this.items.removeAt(index);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/user/components/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/user/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        sessionStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['user/upload-product']);
        // this.router.navigateByUrl('user/dashboard/11');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/components/profile/profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/components/profile/profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/components/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/user/components/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/user/components/upload-product/upload-product.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/user/components/upload-product/upload-product.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput#file {\n  display: inline-block;\n  width: 20%;\n  padding: 40px 0 0 0;\n  height: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  background: url('image-upload.png') center center no-repeat;\n  border-radius: 10px;\n  background-size: 40px 40px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.card-width {\n  width: 25%;\n}\n\n.border-bottom-gray {\n  border-bottom: 1px solid lightgrey;\n}\n\n@media (max-width: 768px) {\n  .form-wrapper {\n    margin: 0;\n  }\n\n  .card-width {\n    width: 100%;\n    margin-left: initial;\n  }\n\n  .form-name {\n    margin-left: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3VwbG9hZC1wcm9kdWN0L1M6XFxGcmVlbGFuY2luZyBTdHVmZlxcTGF0dXIgQ2xpZW50XFxhbmd1bGFyOC1ib2lsZXItcGxhdGUvc3JjXFxhcHBcXHVzZXJcXGNvbXBvbmVudHNcXHVwbG9hZC1wcm9kdWN0XFx1cGxvYWQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3VwbG9hZC1wcm9kdWN0L3VwbG9hZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBR0Esc0JBQUE7RUFDQSwyREFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFNBQUE7RUNDRjs7RURFQTtJQUNFLFdBQUE7SUFDQSxvQkFBQTtFQ0NGOztFREVBO0lBQ0Usb0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb21wb25lbnRzL3VwbG9hZC1wcm9kdWN0L3VwbG9hZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmlucHV0I2ZpbGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAlO1xyXG4gIHBhZGRpbmc6IDQwcHggMCAwIDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtdXBsb2FkLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4O1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtd2lkdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWdyYXkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5mb3JtLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcbiIsImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuaW5wdXQjZmlsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogNDBweCAwIDAgMDtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS11cGxvYWQucG5nXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC13aWR0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5ib3JkZXItYm90dG9tLWdyYXkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0td3JhcHBlciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmNhcmQtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsO1xuICB9XG5cbiAgLmZvcm0tbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/components/upload-product/upload-product.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/components/upload-product/upload-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: UploadProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProductComponent", function() { return UploadProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let UploadProductComponent = class UploadProductComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.isPreview = false;
        this.uploadProductForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    uploadProduct() {
        // TODO Product Form Body
        console.log('uploadProduct this.uploadProductForm.value', this.uploadProductForm.value);
        console.log('product image ', this.imgURL);
        this.uploadProductForm.reset();
        this.removePreview();
    }
    showPreview() {
        this.isPreview = true;
    }
    removePreview() {
        this.isPreview = false;
    }
    uploadImage(files) {
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }
        const reader = new FileReader();
        this.imagePath = files;
        this.fileName = this.imagePath[0].name;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
    }
};
UploadProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
UploadProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-product',
        template: __webpack_require__(/*! raw-loader!./upload-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/components/upload-product/upload-product.component.html"),
        styles: [__webpack_require__(/*! ./upload-product.component.scss */ "./src/app/user/components/upload-product/upload-product.component.scss")]
    })
], UploadProductComponent);



/***/ }),

/***/ "./src/app/user/components/view-product/view-product.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/components/view-product/view-product.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput#file {\n  display: inline-block;\n  width: 20%;\n  padding: 40px 0 0 0;\n  height: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  background: url('image-upload.png') center center no-repeat;\n  border-radius: 10px;\n  background-size: 40px 40px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.card-width {\n  width: 25%;\n}\n\n.border-bottom-gray {\n  border-bottom: 1px solid lightgrey;\n}\n\n@media (max-width: 768px) {\n  .form-wrapper {\n    margin: 0;\n  }\n\n  .card-width {\n    width: 100%;\n    margin-left: initial;\n  }\n\n  .form-name {\n    margin-left: initial;\n  }\n}\n\n@media (min-width: 768px) {\n  .mr2 {\n    margin-right: 10px;\n  }\n\n  .card-width {\n    width: 23%;\n  }\n}\n\n@media (max-width: 768px) {\n  .row-sm {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3ZpZXctcHJvZHVjdC9TOlxcRnJlZWxhbmNpbmcgU3R1ZmZcXExhdHVyIENsaWVudFxcYW5ndWxhcjgtYm9pbGVyLXBsYXRlL3NyY1xcYXBwXFx1c2VyXFxjb21wb25lbnRzXFx2aWV3LXByb2R1Y3RcXHZpZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy92aWV3LXByb2R1Y3QvUzpcXEZyZWVsYW5jaW5nIFN0dWZmXFxMYXR1ciBDbGllbnRcXGFuZ3VsYXI4LWJvaWxlci1wbGF0ZS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUdBLHNCQUFBO0VBQ0EsMkRBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxTQUFBO0VDQ0Y7O0VERUE7SUFDRSxXQUFBO0lBQ0Esb0JBQUE7RUNDRjs7RURFQTtJQUNFLG9CQUFBO0VDQ0Y7QUFDRjs7QUMvQ0E7RUFDRTtJQUNFLGtCQUFBO0VEaURGOztFQy9DQTtJQUNFLFVBQUE7RURrREY7QUFDRjs7QUMvQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VEaURGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvdmlldy1wcm9kdWN0L3ZpZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG5pbnB1dCNmaWxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xyXG4gIGhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ltYWdlLXVwbG9hZC5wbmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcclxufVxyXG5cclxuLmN1cnNvci1wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXdpZHRoIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1ncmF5IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZm9ybS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsO1xyXG4gIH1cclxufVxyXG4iLCJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbmlucHV0I2ZpbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDQwcHggMCAwIDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtdXBsb2FkLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtd2lkdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG4uYm9yZGVyLWJvdHRvbS1ncmF5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jYXJkLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcbiAgfVxuXG4gIC5mb3JtLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1yMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNhcmQtd2lkdGgge1xuICAgIHdpZHRoOiAyMyU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucm93LXNtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vdXBsb2FkLXByb2R1Y3QvdXBsb2FkLXByb2R1Y3QuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5tcjIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuY2FyZC13aWR0aCB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnJvdy1zbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/components/view-product/view-product.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/components/view-product/view-product.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewProductComponent = class ViewProductComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-product',
        template: __webpack_require__(/*! raw-loader!./view-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/components/view-product/view-product.component.html"),
        styles: [__webpack_require__(/*! ./view-product.component.scss */ "./src/app/user/components/view-product/view-product.component.scss")]
    })
], ViewProductComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/user/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/user/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/user/components/login/login.component.ts");
/* harmony import */ var _components_upload_product_upload_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/upload-product/upload-product.component */ "./src/app/user/components/upload-product/upload-product.component.ts");
/* harmony import */ var _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/view-product/view-product.component */ "./src/app/user/components/view-product/view-product.component.ts");









const routes = [
    {
        path: 'user',
        children: [
            { path: '', component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
            { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
            { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
            { path: 'upload-product', component: _components_upload_product_upload_product_component__WEBPACK_IMPORTED_MODULE_7__["UploadProductComponent"] },
            { path: 'view-product', component: _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_8__["ViewProductComponent"] },
        ]
    },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UserComponent = class UserComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.decideRoute();
    }
    decideRoute() {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            this.router.navigate(['user/upload-product']);
        }
        else {
            this.router.navigate(['user/login']);
        }
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: '<p>user works!</p>'
    })
], UserComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/user/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/user/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/user/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_upload_product_upload_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/upload-product/upload-product.component */ "./src/app/user/components/upload-product/upload-product.component.ts");
/* harmony import */ var _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-product/view-product.component */ "./src/app/user/components/view-product/view-product.component.ts");












let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_upload_product_upload_product_component__WEBPACK_IMPORTED_MODULE_10__["UploadProductComponent"],
            _components_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_11__["ViewProductComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"]
        ]
    })
], UserModule);



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
    production: false
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

module.exports = __webpack_require__(/*! S:\Freelancing Stuff\Latur Client\angular8-boiler-plate\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map