function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imprint-imprint-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imprint/imprint.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imprint/imprint.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImprintImprintPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-title>Impressum</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <div style=\"background: #3BDDCB; padding: 1rem; text-align: center;\">\n            <img src=\"/assets/logo.svg\"/>\n        </div>\n        <ion-card-header>\n            <ion-card-subtitle>Angaben gem&auml;&szlig; &sect; 5 TMG</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col><h1>Betreiber / Verantwortliche</h1></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-text color=\"primary\">\n                            <h2>App</h2>\n                        </ion-text>\n                        <address>\n                            <strong>Kay Schecker</strong><br/>\n                            Im Tiefentobel 5<br/>\n                            73061 Ebersbach<br/>\n                            <br/>\n                            <a href=\"mailto:app@wiegehts.app\">app@wiegehts.app</a>\n                        </address>\n                    </ion-col>\n                    <ion-col>\n                        <ion-text color=\"primary\">\n                            <h2>Server</h2>\n                        </ion-text>\n                        <address>\n                            <strong>Jan-Paul Nachtwey</strong><br/>\n                            Hafenalle 17<br/>\n                            63067 Offenbach<br/>\n                            <br/>\n                            <a href=\"mailto:server@wiegehts.app\">server@wiegehts.app</a>\n                        </address>\n                    </ion-col>\n                </ion-row>\n                <ion-row style=\"margin-top: 2rem\">\n                    <ion-col>\n                        <a href=\"https://wirvsvirushackathon.org/\" target=\"_blank\">\n                            <img src=\"assets/logo-hack.svg\"/>\n                        </a>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/imprint/imprint-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/imprint/imprint-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ImprintPageRoutingModule */

  /***/
  function srcAppImprintImprintRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImprintPageRoutingModule", function () {
      return ImprintPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _imprint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./imprint.page */
    "./src/app/imprint/imprint.page.ts");

    var routes = [{
      path: '',
      component: _imprint_page__WEBPACK_IMPORTED_MODULE_3__["ImprintPage"]
    }];

    var ImprintPageRoutingModule = function ImprintPageRoutingModule() {
      _classCallCheck(this, ImprintPageRoutingModule);
    };

    ImprintPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImprintPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/imprint/imprint.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/imprint/imprint.module.ts ***!
    \*******************************************/

  /*! exports provided: ImprintPageModule */

  /***/
  function srcAppImprintImprintModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImprintPageModule", function () {
      return ImprintPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _imprint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./imprint-routing.module */
    "./src/app/imprint/imprint-routing.module.ts");
    /* harmony import */


    var _imprint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./imprint.page */
    "./src/app/imprint/imprint.page.ts");

    var ImprintPageModule = function ImprintPageModule() {
      _classCallCheck(this, ImprintPageModule);
    };

    ImprintPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imprint_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImprintPageRoutingModule"]],
      declarations: [_imprint_page__WEBPACK_IMPORTED_MODULE_6__["ImprintPage"]]
    })], ImprintPageModule);
    /***/
  },

  /***/
  "./src/app/imprint/imprint.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/imprint/imprint.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppImprintImprintPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "address {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL2ltcHJpbnQvaW1wcmludC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ltcHJpbnQvaW1wcmludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaW1wcmludC9pbXByaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFkZHJlc3Mge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiIsImFkZHJlc3Mge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/imprint/imprint.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/imprint/imprint.page.ts ***!
    \*****************************************/

  /*! exports provided: ImprintPage */

  /***/
  function srcAppImprintImprintPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImprintPage", function () {
      return ImprintPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImprintPage = /*#__PURE__*/function () {
      function ImprintPage() {
        _classCallCheck(this, ImprintPage);
      }

      _createClass(ImprintPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImprintPage;
    }();

    ImprintPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-imprint',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imprint.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imprint/imprint.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imprint.page.scss */
      "./src/app/imprint/imprint.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ImprintPage);
    /***/
  }
}]);
//# sourceMappingURL=imprint-imprint-module-es5.js.map