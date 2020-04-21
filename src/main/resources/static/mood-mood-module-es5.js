function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mood-mood-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/mood/mood.page.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/mood/mood.page.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsMoodMoodPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Stimmung</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card-header>\n        <ion-card-title>Deine Stimmung</ion-card-title>\n        <ion-card-subtitle>{{questionService.moodQuestions.length}} Fragen zu Deiner Stimmung</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card *ngFor=\"let q of questionService.moodQuestions\">\n        <ion-card-header>\n            <ion-card-subtitle style=\"text-align: center\">{{q.question}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n            <slider [emoji]=\"q.emoji\" [value]=\"q.value\" (valueChange)=\"questionService.setValue(q.id, $event)\"></slider>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card-header>\n        <ion-card-title>Deine Aktivität</ion-card-title>\n        <ion-card-subtitle>{{questionService.healthQuestions.length}} Fragen zu Deiner Aktivität</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card *ngFor=\"let q of questionService.healthQuestions\">\n        <ion-card-header>\n            <ion-card-subtitle style=\"text-align: center\">{{q.question}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n            <slider [emoji]=\"q.emoji\" [value]=\"q.value\" (valueChange)=\"questionService.setValue(q.id, $event)\" [max]=\"20\" [step]=\"0.25\">\n                <label *ngIf=\"q.value > 0\">{{q.value | timePipe}}&nbsp;h</label>\n                <label *ngIf=\"q.value <= 0\">-</label>\n            </slider>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tabs/mood/mood.module.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/mood/mood.module.ts ***!
    \******************************************/

  /*! exports provided: MoodPageModule */

  /***/
  function srcAppTabsMoodMoodModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoodPageModule", function () {
      return MoodPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _mood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mood.page */
    "./src/app/tabs/mood/mood.page.ts");
    /* harmony import */


    var _base_base_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../base/base.module */
    "./src/app/base/base.module.ts");

    var MoodPageModule = function MoodPageModule() {
      _classCallCheck(this, MoodPageModule);
    };

    MoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _base_base_module__WEBPACK_IMPORTED_MODULE_7__["BaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _mood_page__WEBPACK_IMPORTED_MODULE_6__["MoodPage"]
      }])],
      declarations: [_mood_page__WEBPACK_IMPORTED_MODULE_6__["MoodPage"]]
    })], MoodPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/mood/mood.page.scss":
  /*!******************************************!*\
    !*** ./src/app/tabs/mood/mood.page.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsMoodMoodPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  padding-bottom: 0.5rem;\n}\n\nion-card {\n  margin: 0.5rem 0;\n}\n\nion-card-header {\n  padding-bottom: 0;\n}\n\nion-card-content {\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL3RhYnMvbW9vZC9tb29kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9tb29kL21vb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvbW9vZC9tb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4iLCI6aG9zdCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/mood/mood.page.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/mood/mood.page.ts ***!
    \****************************************/

  /*! exports provided: MoodPage */

  /***/
  function srcAppTabsMoodMoodPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoodPage", function () {
      return MoodPage;
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


    var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");

    var MoodPage = function MoodPage(questionService) {
      _classCallCheck(this, MoodPage);

      this.questionService = questionService;
    };

    MoodPage.ctorParameters = function () {
      return [{
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
      }];
    };

    MoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mood.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/mood/mood.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mood.page.scss */
      "./src/app/tabs/mood/mood.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])], MoodPage);
    /***/
  }
}]);
//# sourceMappingURL=mood-mood-module-es5.js.map