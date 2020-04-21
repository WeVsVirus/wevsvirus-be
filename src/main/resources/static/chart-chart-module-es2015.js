(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-chart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/chart/chart.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/chart/chart.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      </ion-buttons>\n      <ion-title>Auswertung</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n<ion-content>\n  <chart-card mode=\"mood\"></chart-card>\n  <chart-card mode=\"health\"></chart-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tabs/chart/chart-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tabs/chart/chart-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ChartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageRoutingModule", function() { return ChartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart.page */ "./src/app/tabs/chart/chart.page.ts");




const routes = [
    {
        path: '',
        component: _chart_page__WEBPACK_IMPORTED_MODULE_3__["ChartPage"]
    }
];
let ChartPageRoutingModule = class ChartPageRoutingModule {
};
ChartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChartPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/chart/chart.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/chart/chart.module.ts ***!
  \********************************************/
/*! exports provided: ChartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageModule", function() { return ChartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-routing.module */ "./src/app/tabs/chart/chart-routing.module.ts");
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart.page */ "./src/app/tabs/chart/chart.page.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base/base.module */ "./src/app/base/base.module.ts");









let ChartPageModule = class ChartPageModule {
};
ChartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_8__["BaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
            _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartPageRoutingModule"],
        ],
        declarations: [_chart_page__WEBPACK_IMPORTED_MODULE_6__["ChartPage"]],
    })
], ChartPageModule);



/***/ }),

/***/ "./src/app/tabs/chart/chart.page.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/chart/chart.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvY2hhcnQvY2hhcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tabs/chart/chart.page.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/chart/chart.page.ts ***!
  \******************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPage", function() { return ChartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartPage = class ChartPage {
    constructor() { }
    ngOnInit() {
    }
};
ChartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/chart/chart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart.page.scss */ "./src/app/tabs/chart/chart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChartPage);



/***/ })

}]);
//# sourceMappingURL=chart-chart-module-es2015.js.map