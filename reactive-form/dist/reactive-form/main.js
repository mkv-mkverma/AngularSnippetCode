(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-name-editor></app-name-editor>\n<app-profile-editor></app-profile-editor>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'reactive-form';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _name_editor_name_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name-editor/name-editor.component */ "./src/app/name-editor/name-editor.component.ts");
/* harmony import */ var _profile_editor_profile_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-editor/profile-editor.component */ "./src/app/profile-editor/profile-editor.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _name_editor_name_editor_component__WEBPACK_IMPORTED_MODULE_6__["NameEditorComponent"],
                _profile_editor_profile_editor_component__WEBPACK_IMPORTED_MODULE_7__["ProfileEditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/name-editor/name-editor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/name-editor/name-editor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hbWUtZWRpdG9yL25hbWUtZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/name-editor/name-editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/name-editor/name-editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\n  Name:\n  <input type=\"text\" [formControl]=\"name\">\n</label>\n<p>\n  <button (click)=\"updateName()\">Update Name</button>\n</p>\n<p>\n  Value: {{ name.value }}\n</p>"

/***/ }),

/***/ "./src/app/name-editor/name-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/name-editor/name-editor.component.ts ***!
  \******************************************************/
/*! exports provided: NameEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameEditorComponent", function() { return NameEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NameEditorComponent = /** @class */ (function () {
    function NameEditorComponent() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    NameEditorComponent.prototype.ngOnInit = function () {
    };
    NameEditorComponent.prototype.updateName = function () {
        this.name.setValue('Nancy');
    };
    NameEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name-editor',
            template: __webpack_require__(/*! ./name-editor.component.html */ "./src/app/name-editor/name-editor.component.html"),
            styles: [__webpack_require__(/*! ./name-editor.component.css */ "./src/app/name-editor/name-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameEditorComponent);
    return NameEditorComponent;
}());



/***/ }),

/***/ "./src/app/profile-editor/profile-editor.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profile-editor/profile-editor.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZWRpdG9yL3Byb2ZpbGUtZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/profile-editor/profile-editor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile-editor/profile-editor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n  <label>\n    First Name:\n    <input type=\"text\" formControlName=\"firstName\" required>\n  </label>\n\n  <label>\n    Last Name:\n    <input type=\"text\" formControlName=\"lastName\">\n  </label>\n  <div formGroupName=\"address\">\n    <h3>Address</h3>\n  \n    <label>\n      Street:\n      <input type=\"text\" formControlName=\"street\">\n    </label>\n  \n    <label>\n      City:\n      <input type=\"text\" formControlName=\"city\">\n    </label>\n    \n    <label>\n      State:\n      <input type=\"text\" formControlName=\"state\">\n    </label>\n  \n    <label>\n      Zip Code:\n      <input type=\"text\" formControlName=\"zip\">\n    </label>\n  </div>\n  <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n  <p>\n    <button (click)=\"updateProfile()\">Update Profile</button>\n  </p>\n\n  <div formArrayName=\"aliases\">\n    <h3>Aliases</h3> <button (click)=\"addAlias()\">Add Alias</button>\n  \n    <div *ngFor=\"let address of aliases.controls; let i=index\">\n      <!-- The repeated alias template -->\n      <label>\n        Alias:\n        <input type=\"text\" [formControlName]=\"i\">\n      </label>\n    </div>\n  </div>\n</form>\n<p>\n  Form Status: {{ profileForm.value | json }}\n</p>\n<p>\n  Form Status: {{ profileForm.status }}\n</p>\n\n"

/***/ }),

/***/ "./src/app/profile-editor/profile-editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile-editor/profile-editor.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditorComponent", function() { return ProfileEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * forms
 * Template Driven Forms Features
 * Easy to use
 * Suitable for simple scenarios and fails for complex scenarios
 * Similar to AngularJS
 * Two way data binding(using [(NgModel)] syntax)
 * Minimal component
 * Automatic track of the form and its data(handled by Angular)
 * Unit testing is another challenge
 * Reactive Forms Features
 * More flexible, but needs a lot of practice
 * Handles any complex scenarios
 * No data binding is done (immutable data model preferred by most developers)
 * More component code and less HTML markup
 * Reactive transformations can be made possible such as
 * Handling a event based on a debounce time
 * Handling events when the components are distinct until changed
 * Adding elements dynamically
 * Easier unit testing
 * With the template driven approach you basically apply directives, such as ngModel,
 * in your template. Based on these directives Angular will create formcontrol objects.
 * This approach is good for building simple forms with basic validation (required, minlength, maxlength,...).
 * With the reactive approach you basically need to create new instances of the formcontrols and formcontrolgroups in your component.
 * Reactive forms are also the best choice for building more complex forms and are better in case you
 * have the intention to implement unit testing for your forms.
 */



var ProfileEditorComponent = /** @class */ (function () {
    function ProfileEditorComponent(fb) {
        this.fb = fb;
        // profileForm = new FormGroup({
        //   firstName: new FormControl(''),
        //   lastName: new FormControl(''),
        //   address: new FormGroup({
        //     street: new FormControl(''),
        //     city: new FormControl(''),
        //     state: new FormControl(''),
        //     zip: new FormControl('')
        //   })
        // });
        this.profileForm = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [""],
            address: this.fb.group({
                street: [""],
                city: [""],
                state: [""],
                zip: [""]
            }),
            aliases: this.fb.array([this.fb.control("")])
        });
    }
    ProfileEditorComponent.prototype.ngOnInit = function () { };
    ProfileEditorComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    };
    ProfileEditorComponent.prototype.updateProfile = function () {
        this.profileForm.patchValue({
            firstName: "Nancy",
            address: {
                street: "123 Drew Street"
            }
        });
    };
    Object.defineProperty(ProfileEditorComponent.prototype, "aliases", {
        get: function () {
            return this.profileForm.get("aliases");
        },
        enumerable: true,
        configurable: true
    });
    ProfileEditorComponent.prototype.addAlias = function () {
        this.aliases.push(this.fb.control(""));
    };
    ProfileEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile-editor",
            template: __webpack_require__(/*! ./profile-editor.component.html */ "./src/app/profile-editor/profile-editor.component.html"),
            styles: [__webpack_require__(/*! ./profile-editor.component.css */ "./src/app/profile-editor/profile-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProfileEditorComponent);
    return ProfileEditorComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Anthem\Udemy\Angular\self learning\reactive-form\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map