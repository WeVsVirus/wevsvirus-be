(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questionnaire-questionnaire-module"],{

/***/ "./src/app/questionnaire/form/form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/questionnaire/form/form.component.ts ***!
  \******************************************************/
/*! exports provided: QuestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestFormComponent", function() { return QuestFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function QuestFormComponent_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-range", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function QuestFormComponent_ion_row_1_Template_ion_range_ionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const q_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onRangeChange(q_r13.id, $event.detail.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0\uFE0F\u20E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r13.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r13.emoji);
} }
class QuestFormComponent {
    constructor(questionService) {
        this.questionService = questionService;
        this.questions = [];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.questions = this.questionService.getAllMoodQuestions();
    }
    onRangeChange(id, value) {
        this.onChange.emit(this.questions.map(q => {
            if (q.id === id) {
                q.value = value;
            }
            return q;
        }));
    }
}
QuestFormComponent.ɵfac = function QuestFormComponent_Factory(t) { return new (t || QuestFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"])); };
QuestFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestFormComponent, selectors: [["quest-form"]], outputs: { onChange: "onChange" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["size", "12"], ["color", "danger", "pin", "true", 3, "ionChange"], ["slot", "start", 1, "emoji"], ["slot", "end", 1, "emoji"]], template: function QuestFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestFormComponent_ion_row_1_Template, 11, 2, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"]], styles: ["ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\nion-range[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.emoji[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uci9kZXYvd2V2c3ZpcnVzLWZlL3NyYy9hcHAvcXVlc3Rpb25uYWlyZS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHhcbn1cblxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuIiwiaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5lbW9qaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'quest-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
            }]
    }], function () { return [{ type: _services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"] }]; }, { onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/questionnaire/health/health.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/questionnaire/health/health.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestHealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestHealthComponent", function() { return QuestHealthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function QuestHealthComponent_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-range", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function QuestHealthComponent_ion_row_1_Template_ion_range_ionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const q_r17 = ctx.$implicit; const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onRangeChange(_r18, q_r17.id, $event.detail.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "0\uFE0F\u20E3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r17.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1200)("step", 15)("snaps", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r17.emoji);
} }
class QuestHealthComponent {
    constructor(questionService) {
        this.questionService = questionService;
        this.questions = [];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.questions = this.questionService.getAllHealthQuestions();
    }
    onRangeChange(slider, id, value) {
        const n = new Date(0, 0);
        n.setMinutes(slider.value);
        slider
            .el.shadowRoot
            .querySelector('.range-knob-handle .range-pin')
            .innerHTML = n.toTimeString().slice(0, 5);
        this.onChange.emit(this.questions.map(q => {
            if (q.id === id) {
                q.value = {
                    hours: value,
                    minutes: 0,
                };
            }
            return q;
        }));
    }
}
QuestHealthComponent.ɵfac = function QuestHealthComponent_Factory(t) { return new (t || QuestHealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"])); };
QuestHealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestHealthComponent, selectors: [["quest-health"]], outputs: { onChange: "onChange" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["size", "12"], ["color", "danger", "pin", "true", 3, "max", "step", "snaps", "ionChange"], ["slider", ""], ["slot", "start", 1, "emoji"], ["slot", "end", 1, "emoji"]], template: function QuestHealthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestHealthComponent_ion_row_1_Template, 12, 5, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"]], styles: ["ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\nion-range[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.emoji[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uci9kZXYvd2V2c3ZpcnVzLWZlL3NyYy9hcHAvcXVlc3Rpb25uYWlyZS9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbm5haXJlL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25uYWlyZS9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHhcbn1cblxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuIiwiaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5lbW9qaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestHealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'quest-health',
                templateUrl: './health.component.html',
                styleUrls: ['./health.component.scss'],
            }]
    }], function () { return [{ type: _services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"] }]; }, { onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/questionnaire/questionnaire-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: QuestionnairePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePageRoutingModule", function() { return QuestionnairePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _questionnaire_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire.page */ "./src/app/questionnaire/questionnaire.page.ts");





const routes = [
    {
        path: '',
        component: _questionnaire_page__WEBPACK_IMPORTED_MODULE_2__["QuestionnairePage"]
    }
];
class QuestionnairePageRoutingModule {
}
QuestionnairePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuestionnairePageRoutingModule });
QuestionnairePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QuestionnairePageRoutingModule_Factory(t) { return new (t || QuestionnairePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuestionnairePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionnairePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/questionnaire/questionnaire.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.module.ts ***!
  \*******************************************************/
/*! exports provided: QuestionnairePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePageModule", function() { return QuestionnairePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionnaire-routing.module */ "./src/app/questionnaire/questionnaire-routing.module.ts");
/* harmony import */ var _questionnaire_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questionnaire.page */ "./src/app/questionnaire/questionnaire.page.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/questionnaire/form/form.component.ts");
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health/health.component */ "./src/app/questionnaire/health/health.component.ts");









class QuestionnairePageModule {
}
QuestionnairePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuestionnairePageModule });
QuestionnairePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QuestionnairePageModule_Factory(t) { return new (t || QuestionnairePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnairePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuestionnairePageModule, { declarations: [_questionnaire_page__WEBPACK_IMPORTED_MODULE_5__["QuestionnairePage"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["QuestFormComponent"], _health_health_component__WEBPACK_IMPORTED_MODULE_7__["QuestHealthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnairePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionnairePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnairePageRoutingModule"]
                ],
                declarations: [_questionnaire_page__WEBPACK_IMPORTED_MODULE_5__["QuestionnairePage"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["QuestFormComponent"], _health_health_component__WEBPACK_IMPORTED_MODULE_7__["QuestHealthComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/questionnaire/questionnaire.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.page.ts ***!
  \*****************************************************/
/*! exports provided: QuestionnairePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePage", function() { return QuestionnairePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/questionnaire.service */ "./src/app/services/questionnaire.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/questionnaire/form/form.component.ts");
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health/health.component */ "./src/app/questionnaire/health/health.component.ts");












function QuestionnairePage_quest_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "quest-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function QuestionnairePage_quest_form_12_Template_quest_form_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onMoodResponse($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuestionnairePage_quest_health_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "quest-health", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function QuestionnairePage_quest_health_13_Template_quest_health_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onHealthResponse($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class QuestionnairePage {
    constructor(userService, questService) {
        this.userService = userService;
        this.questService = questService;
        this.moode = true;
    }
    ngOnInit() {
        this.state = {
            userId: this.userService.user.id,
            responseDate: new Date().toISOString().substring(0, 10),
            moodResponses: [],
            healthResponses: [],
        };
    }
    onMoodResponse(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.state.moodResponses = event.map(({ id, value }) => ({
                questionId: id,
                response: value,
            }));
            yield this.questService.save(this.state);
        });
    }
    onHealthResponse(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.state.healthResponses = event.map(({ id, value }) => ({
                questionId: id,
                response: value,
            }));
            yield this.questService.save(this.state);
        });
    }
}
QuestionnairePage.ɵfac = function QuestionnairePage_Factory(t) { return new (t || QuestionnairePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireService"])); };
QuestionnairePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuestionnairePage, selectors: [["app-questionnaire"]], inputs: { moode: "moode" }, decls: 14, vars: 5, consts: [["size", "12"], ["color", "primary", 3, "ngModel", "value", "ngModelChange"], [3, "ngSwitch"], [3, "onChange", 4, "ngSwitchCase"], [3, "onChange", 4, "ngSwitchDefault"], [3, "onChange"]], template: function QuestionnairePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "questionnaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mood enabled:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QuestionnairePage_Template_ion_toggle_ngModelChange_10_listener($event) { return ctx.moode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, QuestionnairePage_quest_form_12_Template, 1, 0, "quest-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, QuestionnairePage_quest_health_13_Template, 1, 0, "quest-health", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.moode)("value", "mood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.moode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchDefault", false);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _form_form_component__WEBPACK_IMPORTED_MODULE_7__["QuestFormComponent"], _health_health_component__WEBPACK_IMPORTED_MODULE_8__["QuestHealthComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5wYWdlLnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuestionnairePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-questionnaire',
                templateUrl: './questionnaire.page.html',
                styleUrls: ['./questionnaire.page.scss'],
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireService"] }]; }, { moode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const moodQuestions = [{
        id: '72eciMp5RMiA2u5dfwgtAX',
        question: 'Wie gut geht es Dir?',
        emoji: '🙂',
        value: 0,
    }, {
        id: 'oDHa9ZEb5KNChgmJ65fBx2',
        question: 'Wie ängstlich fühlst Du Dich?',
        emoji: '😳',
        value: 0,
    }, {
        id: 'rdjhVEbqnope4vL8MfAJ9Y',
        question: 'Wie wütend bist Du?',
        emoji: '😡',
        value: 0,
    }, {
        id: 'kcz8NZb2chFP1RiZdURTw2',
        question: 'Wie einsam fühlst Du Dich?',
        emoji: '🚶‍',
        value: 0,
    }, {
        id: 'o4uyZ9so3oiuAzspbH3YPf',
        question: 'Wie gestresst fühlst Du Dich?',
        emoji: '🤯',
        value: 0,
    }, {
        id: 'ggonDssvB639H2Bzbd4ac2',
        question: 'Wie zufrieden bist Du?',
        emoji: '😊',
        value: 0,
    }];
const healthQuestions = [{
        id: 'bJyjEuGz6VF3kwVxz7RQ8c',
        question: 'Wie lange hast du geschlafen?',
        emoji: '🌙',
        value: {
            hours: 0,
            minutes: 0,
        },
    }, {
        id: 'rPjhtwjTyfAQ433jVDHSvU',
        question: 'Wie lange hast Du Dich heute über Corona informiert (Nachrichten, Social Media, TV..)',
        emoji: '📰',
        value: {
            hours: 0,
            minutes: 0,
        },
    }, {
        id: '84rfLqZxi9X9Y8y9hQrLKB',
        question: 'Wie lange hattest Du heute Kontakt zu Anderen (Telefon, Skype, persönlich)?',
        emoji: '💬',
        value: {
            hours: 0,
            minutes: 0,
        },
    }, {
        id: 'vSvCia11kNsj43DVqiMNF9',
        question: 'Wie lange warst Du heute an der frischen Luft?',
        emoji: '🌤‍',
        value: {
            hours: 0,
            minutes: 0,
        },
    }, {
        id: 'bJyjEuGz6VF3kwVxz7RQ8c',
        question: 'Wie lange hast Du heute Sport gemacht?',
        emoji: '💪',
        value: {
            hours: 0,
            minutes: 0,
        },
    }];
class QuestionService {
    constructor() {
        this.getAllMoodQuestions = () => moodQuestions;
        this.getAllHealthQuestions = () => healthQuestions;
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/questionnaire.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/questionnaire.service.ts ***!
  \***************************************************/
/*! exports provided: QuestionnaireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireService", function() { return QuestionnaireService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class QuestionnaireService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `http://${window.location.hostname}:8080`;
    }
    save(questionnaire) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.post(this.baseUrl + '/questionnaire', questionnaire).toPromise();
            return questionnaire;
        });
    }
}
QuestionnaireService.ɵfac = function QuestionnaireService_Factory(t) { return new (t || QuestionnaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuestionnaireService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuestionnaireService, factory: QuestionnaireService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuestionnaireService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=questionnaire-questionnaire-module-es2015.js.map