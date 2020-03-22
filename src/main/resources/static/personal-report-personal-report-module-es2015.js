(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-report-personal-report-module"],{

/***/ "./src/app/personal-report/personal-report-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/personal-report/personal-report-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PersonalReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalReportPageRoutingModule", function() { return PersonalReportPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _personal_report_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-report.page */ "./src/app/personal-report/personal-report.page.ts");





const routes = [
    {
        path: '',
        component: _personal_report_page__WEBPACK_IMPORTED_MODULE_2__["PersonalReportPage"]
    }
];
class PersonalReportPageRoutingModule {
}
PersonalReportPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalReportPageRoutingModule });
PersonalReportPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonalReportPageRoutingModule_Factory(t) { return new (t || PersonalReportPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalReportPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalReportPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/personal-report/personal-report.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/personal-report/personal-report.module.ts ***!
  \***********************************************************/
/*! exports provided: PersonalReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalReportPageModule", function() { return PersonalReportPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _personal_report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-report-routing.module */ "./src/app/personal-report/personal-report-routing.module.ts");
/* harmony import */ var _personal_report_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-report.page */ "./src/app/personal-report/personal-report.page.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");








class PersonalReportPageModule {
}
PersonalReportPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalReportPageModule });
PersonalReportPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonalReportPageModule_Factory(t) { return new (t || PersonalReportPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _personal_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["PersonalReportPageRoutingModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalReportPageModule, { declarations: [_personal_report_page__WEBPACK_IMPORTED_MODULE_5__["PersonalReportPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _personal_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["PersonalReportPageRoutingModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalReportPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _personal_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["PersonalReportPageRoutingModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"],
                ],
                declarations: [_personal_report_page__WEBPACK_IMPORTED_MODULE_5__["PersonalReportPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/personal-report/personal-report.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/personal-report/personal-report.page.ts ***!
  \*********************************************************/
/*! exports provided: PersonalReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalReportPage", function() { return PersonalReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");









function PersonalReportPage_highcharts_chart_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "highcharts-chart", 3);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Highcharts", ctx_r21.Highcharts)("options", ctx_r21.chartOptions);
} }
class PersonalReportPage {
    constructor(questionService) {
        this.questionService = questionService;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.moodQuestions = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = JSON.parse(window.localStorage.getItem('user'));
            this.moodQuestions = yield this.questionService.loadUserMoodQuestions(user.id);
            this.labels = this.questionService.getAllMoodQuestions().reduce((acc, q) => {
                return Object.assign(Object.assign({}, acc), { [q.id]: q.question });
            }, {});
            this.showChart();
        });
    }
    showChart() {
        this.chartOptions = {
            chart: {
                zoomType: 'x',
            },
            title: {
                text: '',
            },
            xAxis: {
                type: 'datetime',
            },
            yAxis: {
                title: {
                    text: 'Stimmung',
                },
            },
            legend: {
                enabled: true,
            },
            plotOptions: {
                area: {
                    marker: {
                        radius: 2,
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1,
                        },
                    },
                    threshold: null,
                },
            },
            series: Object.entries(this.moodQuestions).map(([id, plot]) => {
                return {
                    type: 'line',
                    name: this.labels[id],
                    data: (plot || []).map((d) => {
                        try {
                            return [Date.parse(d[0]), d[1]];
                        }
                        catch (e) {
                            return [];
                        }
                    }).sort((a, b) => {
                        return a[0] < b[0] ? 1 : -1;
                    }).slice(0, 7),
                };
            }),
        };
    }
}
PersonalReportPage.ɵfac = function PersonalReportPage_Factory(t) { return new (t || PersonalReportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"])); };
PersonalReportPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonalReportPage, selectors: [["app-personal-report"]], decls: 9, vars: 1, consts: [["slot", "start"], [2, "display", "flex", "justify-content", "center"], ["style", "width: 100%; height: 400px; display: block;", 3, "Highcharts", "options", 4, "ngIf"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"]], template: function PersonalReportPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Deine Auswertung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PersonalReportPage_highcharts_chart_8_Template, 1, 2, "highcharts-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartOptions);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsLXJlcG9ydC9wZXJzb25hbC1yZXBvcnQucGFnZS5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PersonalReportPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-personal-report',
                templateUrl: './personal-report.page.html',
                styleUrls: ['./personal-report.page.scss'],
            }]
    }], function () { return [{ type: _services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=personal-report-personal-report-module-es2015.js.map