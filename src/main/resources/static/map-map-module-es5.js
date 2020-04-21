function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"questionId$ | async as questionId\">\n    <ion-fab horizontal=\"start\" vertical=\"top\" slot=\"fixed\">\n        <ion-fab-button color=\"primary\">{{questionService.getMoodById(questionId)?.emoji}}</ion-fab-button>\n        <ion-fab-list side=\"bottom\">\n            <ion-fab-button *ngFor=\"let q of questionService.moodQuestions\"\n                            color=\"light\"\n                            (click)=\"selectQuestion(q)\">{{q.emoji}}</ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n    <!--<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"secondary\" (click)=\"toggleZoom()\">\n            <ion-icon [name]=\"zoomed ? 'contract-outline' : 'expand-outline'\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>-->\n</ng-container>\n\n<ng-container *ngIf=\"slides$ | async as slides\">\n    <ion-slides #slider pager=\"true\"\n                [options]=\"{initialSlide: slides.length - 1}\"\n                (ionSlideDidChange)=\"onSlideDidChange(slider)\">\n        <ion-slide class=\"slide\" *ngFor=\"let slide of slides\">\n            <div class=\"svg-container\" [ngClass]=\"{zoomed: zoomed}\" [innerHTML]=\"slide.svg\"></div>\n        </ion-slide>\n    </ion-slides>\n</ng-container>\n\n<ul class=\"legend\">\n    <li *ngFor=\"let color of legend\" [ngStyle]=\"{backgroundColor: color.color}\">{{color.boundary}}</li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/modal/modal.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/modal/modal.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"vm$ | async as vm\">\n    <ion-header translucent>\n        <ion-toolbar>\n            <ion-title (click)=\"showPicker(vm.plz)\">Postleitzahl {{vm.plz}}XXX</ion-title>\n            <ion-buttons slot=\"start\">\n                <ion-button (click)=\"close()\">zurück</ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content fullscreen [scrollY]=\"true\" [scrollX]=\"false\" style=\"background: red\">\n\n        <ion-slides pager=\"true\" [options]=\"{initialSlide: initialSlide}\">\n            <ion-slide class=\"slide\" *ngFor=\"let answerSet of vm.answers\">\n\n                <ion-card>\n                    <ion-card-header>\n                        <ion-card-title>{{answerSet.date}}</ion-card-title>\n                    </ion-card-header>\n\n                    <ion-card-content>\n                        <ion-list *ngFor=\"let q of questionService.moodQuestions\" mode=\"md\">\n                            <ion-label>{{q.emoji}} {{q.question}}</ion-label>\n                            <ion-progress-bar *ngIf=\"answerSet.data[q.id] >= 0; else elseBlock\"\n                                              [value]=\"answerSet.data[q.id] / 100\"></ion-progress-bar>\n                            <ng-template #elseBlock>\n                                <ion-progress-bar color=\"medium\"></ion-progress-bar>\n                            </ng-template>\n                        </ion-list>\n                    </ion-card-content>\n                </ion-card>\n\n            </ion-slide>\n        </ion-slides>\n\n    </ion-content>\n</ng-container>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/map/map.page.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/map/map.page.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsMapMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-title>{{title}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content [scrollY]=\"false\" [scrollX]=\"false\">\n    <app-map (slideChange)=\"title = $event.label\"></app-map>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/map/map.component.scss":
  /*!****************************************!*\
    !*** ./src/app/map/map.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nion-slides {\n  height: 100%;\n  width: 100vw;\n}\n\nion-fab-button {\n  font-size: 1.8rem;\n}\n\n.slide {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.slide highcharts-chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.slide .svg-container {\n  display: block;\n  height: 100%;\n  width: 100%;\n  padding: 2rem 1rem;\n}\n\n.legend {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  z-index: 100;\n  list-style: none;\n  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);\n  margin: 0;\n  padding: 0;\n}\n\n.legend li {\n  color: var(--ion-color-light);\n  text-align: center;\n  padding: 5px;\n  font-size: 0.7rem;\n}\n\n.legend li:nth-child(-n+3) {\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREtBO0VBRUUsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNKRjs7QURNRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURNSTtFQUNFLDRCQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICBoaWdoY2hhcnRzLWNoYXJ0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3ZnLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxuXG59XG5cbi5sZWdlbmQge1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwLjVyZW07XG4gIHJpZ2h0OiAwLjVyZW07XG4gIHotaW5kZXg6IDEwMDtcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgbGkge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG5cbiAgICAmOm50aC1jaGlsZCgtbiszKSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zbGlkZSBoaWdoY2hhcnRzLWNoYXJ0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2xpZGUgLnN2Zy1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuXG4ubGVnZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAuNXJlbTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgei1pbmRleDogMTAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubGVnZW5kIGxpIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5sZWdlbmQgbGk6bnRoLWNoaWxkKC1uKzMpIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/map/modal/modal.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");

    var MapComponent_1;
    /**
     * https://mapshaper.org/
     */

    var MapComponent = MapComponent_1 = /*#__PURE__*/function () {
      function MapComponent(http, api, questionService, domSanitizer, modalController) {
        var _this = this;

        _classCallCheck(this, MapComponent);

        this.http = http;
        this.api = api;
        this.questionService = questionService;
        this.domSanitizer = domSanitizer;
        this.modalController = modalController;
        this.dates = Array.from(new Array(MapComponent_1.daysToShow - 1)).reduce(function (dates) {
          return [].concat(_toConsumableArray(dates), [dates[dates.length - 1].clone().subtract(1, 'day')]);
        }, [moment__WEBPACK_IMPORTED_MODULE_4__().subtract(1, 'day')]).reverse();
        this.svg$ = this.http.get('./assets/geo/germany.svg', {
          responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (svgText) {
          var parser = new DOMParser();
          return parser.parseFromString(svgText, 'text/xml');
        }));
        this.zoomed = false;
        this.legend = [{
          boundary: 1,
          color: '#BCFFF7'
        }, {
          boundary: 20,
          color: '#56FFEB'
        }, {
          boundary: 40,
          color: '#00EFD3'
        }, {
          boundary: 60,
          color: '#00BCA6'
        }, {
          boundary: 80,
          color: '#008979'
        }, {
          boundary: 100,
          color: '#195750'
        }];
        this.questionId$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('72eciMp5RMiA2u5dfwgtAX');
        this.data$ = this.fetchData();
        this.slideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slides$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.svg$, this.data$, this.questionId$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              svg = _ref2[0],
              dataSet = _ref2[1],
              questionId = _ref2[2];

          return dataSet.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                date = _ref4[0],
                data = _ref4[1];

            return {
              date: date,
              svg: _this.computeSVG(svg, data[questionId])
            };
          });
        }));

        this.getColorByValue = function (value) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"])(_this.legend, 'boundary').find(function (_ref5) {
            var boundary = _ref5.boundary;
            return value <= boundary;
          }).color;
        };
      }

      _createClass(MapComponent, [{
        key: "onClick",
        value: function onClick(tagName, dataSet) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(tagName !== 'path')) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    _context.t0 = this.modalController;
                    _context.t1 = _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["MapModalComponent"];
                    _context.t2 = Object;
                    _context.t3 = {};
                    _context.t4 = dataSet;
                    _context.next = 9;
                    return this.slider.getActiveIndex();

                  case 9:
                    _context.t5 = _context.sent;
                    _context.next = 12;
                    return this.data$.toPromise();

                  case 12:
                    _context.t6 = _context.sent;
                    _context.t7 = {
                      initialSlide: _context.t5,
                      data: _context.t6
                    };
                    _context.t8 = _context.t2.assign.call(_context.t2, _context.t3, _context.t4, _context.t7);
                    _context.t9 = {
                      component: _context.t1,
                      componentProps: _context.t8,
                      swipeToClose: true
                    };
                    _context.next = 18;
                    return _context.t0.create.call(_context.t0, _context.t9);

                  case 18:
                    modal = _context.sent;
                    _context.next = 21;
                    return modal.present();

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSlideDidChange",
        value: function onSlideDidChange(slider) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var label;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return slider.getActiveIndex();

                  case 2:
                    _context2.t0 = _context2.sent;
                    label = this.dates[_context2.t0].locale('de-DE').format('dd, DD.MM.YYYY');
                    this.slideChange.emit({
                      label: label
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "selectQuestion",
        value: function selectQuestion(q) {
          this.questionId$.next(q.id);
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          var _this2 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Promise.all(this.dates.map(function (mom) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var responseDate, responseData;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      responseDate = mom.format('YYYY-MM-DD');
                      _context3.next = 3;
                      return this.api.getHeat(responseDate);

                    case 3:
                      responseData = _context3.sent;
                      return _context3.abrupt("return", [responseDate, responseData]);

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          })));
        }
      }, {
        key: "computeSVG",
        value: function computeSVG(svg, data) {
          this.setStyle(svg.querySelectorAll('path'), {
            fill: '#f7f7f7',
            stroke: '#cccccc'
          });

          var _iterator = _createForOfIteratorHelper(data || []),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  plz = _step$value[0],
                  value = _step$value[1];

              if (value > 0) {
                var nodes = svg.querySelectorAll("[data-plz=\"".concat(plz, "\"]"));
                this.setStyle(nodes, {
                  fill: this.getColorByValue(value)
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var str = new XMLSerializer().serializeToString(svg);
          return this.domSanitizer.bypassSecurityTrustHtml(str);
        }
      }, {
        key: "setStyle",
        value: function setStyle(nodes, style) {
          for (var _i2 = 0, _Array$from = Array.from(nodes); _i2 < _Array$from.length; _i2++) {
            var node = _Array$from[_i2];
            Object.assign(node.style, style);
          }
        }
      }, {
        key: "toggleZoom",
        value: function toggleZoom() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.zoomed = !this.zoomed;
                    _context4.next = 3;
                    return this.slider.lockSwipes(this.zoomed);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }];
    };

    MapComponent.daysToShow = 6;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSlides"])], MapComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MapComponent.prototype, "slideChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.target.tagName', '$event.target.dataset', '$event.target']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)], MapComponent.prototype, "onClick", null);
    MapComponent = MapComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/map/map.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _services_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])], MapComponent);
    /***/
  },

  /***/
  "./src/app/map/map.module.ts":
  /*!***********************************!*\
    !*** ./src/app/map/map.module.ts ***!
    \***********************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
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


    var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/map/modal/modal.component.ts");

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["MapModalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      exports: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]],
      entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["MapModalComponent"]]
    })], MapModule);
    /***/
  },

  /***/
  "./src/app/map/modal/modal.component.scss":
  /*!************************************************!*\
    !*** ./src/app/map/modal/modal.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapModalModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n  background: transparent;\n}\nion-slides:after {\n  content: \" \";\n  background: url('germany.svg') center center no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.02;\n  z-index: -1;\n}\nion-list {\n  text-align: left;\n}\nion-list ion-progress-bar {\n  margin-top: 0.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL21hcC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxzREFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21hcC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9nZW8vZ2VybWFueS5zdmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwLjAyO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG5cbmlvbi1saXN0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxuICBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjFyZW1cbiAgfVxufVxuIiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tc2xpZGVzOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9nZW8vZ2VybWFueS5zdmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuMDI7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pb24tbGlzdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5pb24tbGlzdCBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/map/modal/modal.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/map/modal/modal.component.ts ***!
    \**********************************************/

  /*! exports provided: MapModalComponent */

  /***/
  function srcAppMapModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModalComponent", function () {
      return MapModalComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MapModalComponent = /*#__PURE__*/function () {
      function MapModalComponent(modalController, questionService, pickerController) {
        var _this3 = this;

        _classCallCheck(this, MapModalComponent);

        this.modalController = modalController;
        this.questionService = questionService;
        this.pickerController = pickerController;
        this.showSlider = false;
        this.plz$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.answers$ = this.plz$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (plz) {
          return _this3.data.map(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                date = _ref7[0],
                data = _ref7[1];

            var reducedDataSet = Object.entries(data).reduce(function (acc, _ref8) {
              var _ref9 = _slicedToArray(_ref8, 2),
                  qId = _ref9[0],
                  a = _ref9[1];

              var dp = a.find(function (_ref10) {
                var _ref11 = _slicedToArray(_ref10, 1),
                    p = _ref11[0];

                return p === plz;
              });
              return Object.assign({}, acc, _defineProperty({}, qId, dp ? dp[1] : undefined));
            }, {});
            return {
              date: moment__WEBPACK_IMPORTED_MODULE_5__(date).locale('de-DE').format('dd, DD.MM.YYYY'),
              data: reducedDataSet
            };
          });
        }));
        this.vm$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.plz$, this.answers$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
              plz = _ref13[0],
              answers = _ref13[1];

          return {
            plz: plz,
            answers: answers
          };
        }));
      }

      _createClass(MapModalComponent, [{
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.getTop();

                  case 2:
                    _context5.sent.dismiss();

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "showPicker",
        value: function showPicker(zip) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var zips;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    zips = _toConsumableArray(new Set(Array.from(document.querySelectorAll("path[data-plz]")).map(function (c) {
                      return c.dataset.plz;
                    }))).sort();
                    _context6.next = 3;
                    return this.pickerController.create({
                      columns: [{
                        name: 'plz',
                        selectedIndex: zips.indexOf(zip),
                        options: zips.map(function (plz) {
                          return {
                            text: plz + 'XXX',
                            value: plz
                          };
                        })
                      }],
                      buttons: [{
                        text: 'Abbrechen',
                        role: 'cancel'
                      }, {
                        text: 'Übernehmen',
                        handler: function handler(v) {
                          return _this4.plz$.next(v.plz.value);
                        }
                      }]
                    });

                  case 3:
                    _context6.sent.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          setTimeout(function () {
            _this5.plz$.next(_this5.plz);

            _this5.showSlider = true;
          }, 0);
        }
      }, {
        key: "getColumns",
        value: function getColumns(numColumns, numOptions, columnOptions) {
          var columns = [];

          for (var i = 0; i < numColumns; i++) {
            columns.push({
              name: "col-".concat(i),
              options: this.getColumnOptions(i, numOptions, columnOptions)
            });
          }

          return columns;
        }
      }, {
        key: "getColumnOptions",
        value: function getColumnOptions(columnIndex, numOptions, columnOptions) {
          var options = [];

          for (var i = 0; i < numOptions; i++) {
            options.push({
              text: columnOptions[columnIndex][i % numOptions],
              value: i
            });
          }

          return options;
        }
      }]);

      return MapModalComponent;
    }();

    MapModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MapModalComponent.prototype, "plz", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], MapModalComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], MapModalComponent.prototype, "initialSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MapModalComponent.prototype, "answers", void 0);
    MapModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/modal/modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.scss */
      "./src/app/map/modal/modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"]])], MapModalComponent);
    /***/
  },

  /***/
  "./src/app/tabs/map/map.module.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/map/map.module.ts ***!
    \****************************************/

  /*! exports provided: MapPageModule */

  /***/
  function srcAppTabsMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
      return MapPageModule;
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


    var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map.page */
    "./src/app/tabs/map/map.page.ts");
    /* harmony import */


    var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../map/map.module */
    "./src/app/map/map.module.ts");

    var MapPageModule = function MapPageModule() {
      _classCallCheck(this, MapPageModule);
    };

    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
      }])],
      declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })], MapPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/map/map.page.scss":
  /*!****************************************!*\
    !*** ./src/app/tabs/map/map.page.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsMapMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL3RhYnMvbWFwL21hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFicy9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tabs/map/map.page.ts":
  /*!**************************************!*\
    !*** ./src/app/tabs/map/map.page.ts ***!
    \**************************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppTabsMapMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MapPage = function MapPage() {
      _classCallCheck(this, MapPage);
    };

    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/map/map.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.page.scss */
      "./src/app/tabs/map/map.page.scss"))["default"]]
    })], MapPage);
    /***/
  }
}]);
//# sourceMappingURL=map-map-module-es5.js.map