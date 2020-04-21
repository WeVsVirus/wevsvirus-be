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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n    <ion-menu side=\"start\" menuId=\"main\" contentId=\"contentMain\">\n        <ion-header>\n            <ion-toolbar class=\"menu-toolbar\">\n                <ion-title class=\"menu-title\">\n                    <img src=\"/assets/logo.svg\"/>\n                </ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ion-list *ngFor=\"let menuItem of menuItems\">\n                <ion-menu-toggle auto-hide=\"true\">\n                    <ion-item [routerLink]=\"menuItem.url\" routerLinkActive=\"ion-color ion-color-secondary\"\n                              routerDirection=\"forward\">\n                        <ion-icon [name]=\"menuItem.icon\" slot=\"start\"></ion-icon>\n                        {{menuItem.title}}\n                    </ion-item>\n                </ion-menu-toggle>\n            </ion-list>\n        </ion-content>\n        <ion-footer>\n            <a href=\"https://wirvsvirushackathon.org/\" target=\"_blank\">\n                <img src=\"assets/logo-hack.svg\"/>\n            </a>\n        </ion-footer>\n    </ion-menu>\n\n    <ion-router-outlet id=\"contentMain\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/base/chart-card/chart-card.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/base/chart-card/chart-card.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBaseChartCardChartCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\n    <ion-card-header>\n        <ion-card-title>{{title$ | async}}</ion-card-title>\n        <ion-card-subtitle>der letzten {{daysToShow}} Tage</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"chart$ | async as chart\">\n        <canvas baseChart width=\"100\"\n                [datasets]=\"chart.data\"\n                [labels]=\"chart.labels\"\n                [options]=\"chart.options\"\n                [colors]=\"chart.colors\"\n                [legend]=\"chart.legend\"\n                [chartType]=\"chart.type\">\n        </canvas>\n    </ion-card-content>\n\n    <div class=\"chart-legend\">\n        <ng-container *ngIf=\"hiddenQuestionIds$ | async as hiddenQuestionIds\">\n            <ng-container *ngFor=\"let q of (questions$ | async)\">\n                <div (click)=\"toggleQuestion(q)\" [ngClass]=\"{disabled: hiddenQuestionIds.has(q.id)}\"\n                     [ngStyle]=\"{borderBottomColor: q.color}\">\n                    <span>{{q.emoji}}</span></div>\n            </ng-container>\n        </ng-container>\n    </div>\n</ion-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/base/privacy/privacy.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/base/privacy/privacy.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBasePrivacyPrivacyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Datenschutzerklärung</h1>\n<p>\n  Wir haben diese Datenschutzerklärung (Fassung 14.04.2020-311169578) verfasst, um Ihnen gemäß der\n  Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche Informationen wir sammeln,\n  wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Benutzer dieser App haben.\n</p>\n<p>\n  Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei\n  der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.\n</p>\n\n<h1>Automatische Datenspeicherung</h1>\n<p>\n  Wenn Sie heutzutage Apps benutzen, werden gewisse Informationen automatisch erstellt und gespeichert,\n  so auch bei dieser App.\n</p>\n<p>\n  Wenn Sie unsere App benutzen, dann speichert unser Webserver (Computer auf dem die Eingegeben Daten\n  gespeichert werden) Daten wie\n</p>\n<ul>\n  <li>das verwendete Betriebssystem</li>\n  <li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>\n  <li>Datum und Uhrzeit</li>\n</ul>\n<p>\n  in Dateien (Webserver-Logfiles).\n</p>\n<p>\n  In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir\n  geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von\n  rechtswidrigem Verhalten eingesehen werden.\n</p>\n<h1>Speicherung persönlicher Daten</h1>\n<p>\n  Persönliche Daten, die Sie uns in dieser App elektronisch übermitteln, wie zum Beispiel Geschlecht,\n  Personen im Haushalt oder die Antworten auf unsere Stimmungs- und Gesundheitsfragen, werden von uns\n  gemeinsam mit dem Zeitpunkt gespeichert, zum jeweils angegebenen Zweck verwendet, sicher verwahrt und\n  nicht an Dritte weitergegeben.\n</p>\n<p>\n  Wir nutzen Ihre persönlichen Daten nur für Ihre persönliche Auswertung und um ein Stimmungsbild für\n  Deutschland zu berechnen. Hier ist es uns nicht möglich Rückschluss auf Ihre Person zu ziehen.\n  Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass\n  diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.\n</p>\n<p>\n  Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser App – können wir keine\n  sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten\n  niemals unverschlüsselt per E-Mail zu übermitteln.\n</p>\n<p>\n  Die Rechtsgrundlage besteht nach Artikel 6 Absatz 1 a DSGVO (Rechtmäßigkeit der Verarbeitung) darin,\n  dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können diesen\n  Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im\n  Impressum.\n</p>\n<h1>Rechte laut Datenschutzgrundverordnung</h1>\n<p>\n  Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:\n</p>\n<ul>\n  <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>\n  <li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>\n  <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>\n  <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung\n    personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)\n  </li>\n  <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>\n  <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>\n  <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling\n    — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)\n  </li>\n</ul>\n<p>\n  Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre\n  datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an\n  die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.\n</p>\n<h1>TLS-Verschlüsselung mit https</h1>\n<p>\n  Wir verwenden https, um Daten abhörsicher im Internet zu übertragen (Datenschutz durch\n  Technikgestaltung Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security),\n  einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz\n  vertraulicher Daten sicherstellen.\n</p>\n<h1>Google Fonts</h1>\n<p>\n  In unserer App nutzen wir Google Fonts der Firma Google Inc. Für den europäischen Raum ist das\n  Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) verantwortlich. Wir\n  haben die Google-Schriftarten lokal, d.h. mit der App ausgeliefert und nicht über die Server von Google\n  eingebunden. Dadurch gibt es keine Verbindung zu Google-Servern und somit auch keine Datenübertragung\n  oder Speicherung.\n</p>\n<h2>Was sind Google Fonts?</h2>\n<p>\n  Früher nannte man Google Fonts auch Google Web Fonts. Dabei handelt es sich um ein interaktives\n  Verzeichnis mit über 800 Schriftarten, die Google kostenlos bereitstellt. Mit Google Fonts könnte man\n  Schriften nutzen, ohne sie auf den eigenen Server hochzuladen. Doch um diesbezüglich jede\n  Informationsübertragung zu Google-Servern zu unterbinden, haben wir die Schriftarten in unsere App\n  eingebunden. Auf diese Weise handeln wir datenschutzkonform und senden keine Daten an Google Fonts\n  weiter.\n</p>\n<p>\n  Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle\n  Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für\n  unsere App rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie\n  auf <a href=\"https://developers.google.com/fonts/faq?tid=311169578\">https://developers.google.com/fonts/faq?tid=311169578</a>.\n</p>\n<p>\n  <small>Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in Kooperation mitbauenwir.de</small>\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/base/slider/slider.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/base/slider/slider.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBaseSliderSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"3\" class=\"label\">\n                <ng-content select=\"label\"></ng-content>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ul>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                </ul>\n            </ion-col>\n            <ion-col size=\"3\" class=\"emoji\">\n                <span>{{emoji}}</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-range color=\"primary\"\n               pin=\"false\"\n               [min]=\"min\"\n               [max]=\"max\"\n               [value]=\"value\"\n               [step]=\"step\"\n               (ionChange)=\"handleChange($event.detail.value)\">\n    </ion-range>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/privacy/privacy.modal.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/privacy/privacy.modal.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalPrivacyPrivacyModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"close()\">zurück</ion-button>\n      </ion-buttons>\n      <ion-title>Datenschutz</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div style=\"background: #3BDDCB; padding: 1rem; text-align: center;\">\n      <img src=\"/assets/logo.svg\"/>\n    </div>\n    <ion-card-content>\n      <privacy></privacy>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_unauth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/unauth.guard */
    "./src/app/guards/unauth.guard.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: '',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'signup',
      canActivate: [_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | signup-signup-module */
        "signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'imprint',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | imprint-imprint-module */
        "imprint-imprint-module").then(__webpack_require__.bind(null,
        /*! ./imprint/imprint.module */
        "./src/app/imprint/imprint.module.ts")).then(function (m) {
          return m.ImprintPageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-settings-module */
        "settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./settings/settings.module */
        "./src/app/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      }
    }, {
      path: 'privacy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | privacy-privacy-module */
        "privacy-privacy-module").then(__webpack_require__.bind(null,
        /*! ./privacy/privacy.module */
        "./src/app/privacy/privacy.module.ts")).then(function (m) {
          return m.PrivacyPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-title {\n  padding: 1rem;\n  text-align: center;\n  position: relative;\n  background: #3BDDCB;\n}\n.menu-title img {\n  height: 2.5rem;\n  width: auto;\n}\n.menu-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\nion-footer {\n  text-align: center;\n}\nion-footer img {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0FKO0FESUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtdGl0bGUge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjM0JERENCO1xuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuLm1lbnUtdG9vbGJhciB7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuIiwiLm1lbnUtdGl0bGUge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzNCRERDQjtcbn1cbi5tZW51LXRpdGxlIGltZyB7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogYXV0bztcbn1cblxuLm1lbnUtdG9vbGJhciB7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1mb290ZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menuItems = [{
          title: 'Stimmung',
          url: '/tabs/mood',
          icon: 'happy-outline'
        }, {
          title: 'Auswertung',
          url: '/tabs/chart',
          icon: 'bar-chart-outline'
        }, {
          title: 'Karte',
          url: '/tabs/map',
          icon: 'map-outline'
        }, {
          title: 'Einstellungen',
          url: '/settings',
          icon: 'cog-outline'
        }, {
          title: 'Impressum',
          url: '/imprint',
          icon: 'alert-circle-outline'
        }, {
          title: 'Datenschutzerklärung',
          url: '/privacy',
          icon: 'body-outline'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/settings.service */
    "./src/app/services/settings.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _modal_modal_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modal/modal.module */
    "./src/app/modal/modal.module.ts");

    var AppModule = function AppModule(platform, settingsService, notificationService) {
      var _this2 = this;

      _classCallCheck(this, AppModule);

      this.platform = platform;
      this.settingsService = settingsService;
      this.notificationService = notificationService;
      settingsService.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["skip"])(1), //
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (s) {
        return s.reminderPushNotification;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])(lodash__WEBPACK_IMPORTED_MODULE_14__["isEqual"])).subscribe(function (_ref) {
        var enabled = _ref.enabled,
            time = _ref.time;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.notificationService.cancelAll();

                case 2:
                  if (!enabled) {
                    _context.next = 11;
                    break;
                  }

                  _context.prev = 3;
                  _context.next = 6;
                  return this.notificationService.schedule([{
                    title: 'Bleib am Ball',
                    body: 'Hey, wie geht\'s dir heute denn eigentlich? Stimmung und Aktivität schon erfasst?',
                    id: 1,
                    schedule: {
                      every: 'day',
                      on: {
                        hour: time.hour,
                        minute: time.minute
                      }
                    }
                  }]);

                case 6:
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](3);
                  alert(_context.t0.message || _context.t0);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 8]]);
        }));
      });
    };

    AppModule.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]
      }];
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_15__["ModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_question_service__WEBPACK_IMPORTED_MODULE_9__["QuestionService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"]])], AppModule);
    /***/
  },

  /***/
  "./src/app/base/base.module.ts":
  /*!*************************************!*\
    !*** ./src/app/base/base.module.ts ***!
    \*************************************/

  /*! exports provided: BaseModule */

  /***/
  function srcAppBaseBaseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseModule", function () {
      return BaseModule;
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


    var _chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chart-card/chart-card.component */
    "./src/app/base/chart-card/chart-card.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/base/slider/slider.component.ts");
    /* harmony import */


    var _time_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./time-pipe.pipe */
    "./src/app/base/time-pipe.pipe.ts");
    /* harmony import */


    var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./privacy/privacy.component */
    "./src/app/base/privacy/privacy.component.ts");

    var BaseModule = function BaseModule() {
      _classCallCheck(this, BaseModule);
    };

    BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__["ChartCardComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"], _time_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["TimePipePipe"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"]],
      exports: [_chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__["ChartCardComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"], _time_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["TimePipePipe"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]]
    })], BaseModule);
    /***/
  },

  /***/
  "./src/app/base/chart-card/chart-card.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/base/chart-card/chart-card.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBaseChartCardChartCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-card {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  width: 100vw;\n}\n\nion-card ion-card-header,\nion-card ion-card-content {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chart-legend {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.chart-legend div {\n  border-top: 1px solid var(--ion-color-light-shade);\n  border-bottom: 5px solid var(--ion-color-light-shade);\n  border-left: 1px solid transparent;\n  border-right: 1px solid transparent;\n  text-align: center;\n  position: relative;\n  height: 40px;\n  width: 100%;\n}\n\n.chart-legend div.disabled {\n  -webkit-filter: grayscale(80);\n          filter: grayscale(80);\n}\n\n.chart-legend div + div {\n  border-left: 1px solid var(--ion-color-light-shade);\n}\n\n.chart-legend div span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL2Jhc2UvY2hhcnQtY2FyZC9jaGFydC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYXNlL2NoYXJ0LWNhcmQvY2hhcnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUU7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURHRTtFQUNFLGtEQUFBO0VBQ0EscURBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRko7O0FESUk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDRk47O0FES0k7RUFDRSxtREFBQTtBQ0hOOztBRE1JO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9iYXNlL2NoYXJ0LWNhcmQvY2hhcnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgaW9uLWNhcmQtaGVhZGVyLFxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxufVxuXG4uY2hhcnQtbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgZGl2IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDgwKTtcbiAgICB9XG5cbiAgICArIGRpdiB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlcixcbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGFydC1sZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGFydC1sZWdlbmQgZGl2IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhcnQtbGVnZW5kIGRpdi5kaXNhYmxlZCB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDgwKTtcbn1cbi5jaGFydC1sZWdlbmQgZGl2ICsgZGl2IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLmNoYXJ0LWxlZ2VuZCBkaXYgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/base/chart-card/chart-card.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/base/chart-card/chart-card.component.ts ***!
    \*********************************************************/

  /*! exports provided: ChartCardComponent */

  /***/
  function srcAppBaseChartCardChartCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartCardComponent", function () {
      return ChartCardComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var observable_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! observable-input */
    "./node_modules/observable-input/lib/index.js");
    /* harmony import */


    var observable_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(observable_input__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ChartCardComponent = /*#__PURE__*/function () {
      function ChartCardComponent(apiService, userService, questionService, toastController) {
        var _this3 = this;

        _classCallCheck(this, ChartCardComponent);

        this.apiService = apiService;
        this.userService = userService;
        this.questionService = questionService;
        this.toastController = toastController;
        this.daysToShow = 7;
        this.dates = Array.from(new Array(this.daysToShow - 1)).reduce(function (dates) {
          return [].concat(_toConsumableArray(dates), [dates[dates.length - 1].clone().subtract(1, 'day')]);
        }, [moment__WEBPACK_IMPORTED_MODULE_4__()]).reverse();
        this.title$ = this.mode.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (m) {
          return "Deine ".concat(m === 'mood' ? 'Stimmung' : 'Aktivität');
        }));
        this.questions$ = this.mode.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (mode) {
          return _this3.questionService["".concat(mode, "Questions")];
        }));
        this.hiddenQuestionIds$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](new Set());
        this.render$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](undefined);
        this.chart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.mode, this.render$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 1),
              mode = _ref3[0];

          return _this3.computeChart(mode);
        }));

        this.computeChart = function (mode) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadData(mode);

                  case 2:
                    _context2.t0 = _context2.sent;
                    _context2.t1 = [];
                    _context2.t2 = this.dates.map(function (m) {
                      return m.locale('de-DE').format('dd');
                    });
                    _context2.t3 = {
                      responsive: true,
                      maintainAspectRatio: true,
                      scales: {
                        yAxes: [{
                          ticks: {
                            display: true,
                            autoSkipPadding: 2,
                            min: 0
                          }
                        }]
                      },
                      tooltips: {
                        enabled: false
                      }
                    };
                    return _context2.abrupt("return", {
                      type: 'line',
                      data: _context2.t0,
                      colors: _context2.t1,
                      legend: false,
                      labels: _context2.t2,
                      options: _context2.t3
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };

        this.loadData = function (mode) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.apiService[mode === 'mood' ? 'getMood' : 'getHealth'](this.userService.user.id);

                  case 2:
                    data = _context3.sent;
                    return _context3.abrupt("return", this.questionService["".concat(mode, "Questions")].map(function (q) {
                      return {
                        id: q.id,
                        data: _this4.dates.map(function (date) {
                          if (data[q.id]) {
                            return data[q.id][date.format('YYYY-MM-DD')];
                          }
                        }),
                        label: q.question,
                        cubicInterpolationMode: 'monotone',
                        hidden: false,
                        pointRadius: 5,
                        hitRadius: 15,
                        borderColor: q.color,
                        pointBackgroundColor: q.color,
                        pointBorderColor: q.color,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: q.color,
                        pointHoverBorderColor: q.color,
                        fill: false
                      };
                    }));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        };

        this.questionService.onSave$.subscribe(function () {
          _this3.render$.next(new Date().toISOString());
        });
      }

      _createClass(ChartCardComponent, [{
        key: "toggleQuestion",
        value: function toggleQuestion(q) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var nextValue, _iterator, _step, dataSet, top;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    nextValue = new Set(this.hiddenQuestionIds$.value);
                    nextValue[nextValue.has(q.id) ? 'delete' : 'add'](q.id);
                    this.hiddenQuestionIds$.next(nextValue);
                    _iterator = _createForOfIteratorHelper(this.chart.chart.data.datasets);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        dataSet = _step.value;
                        dataSet.hidden = nextValue.has(dataSet.id);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    _context4.next = 7;
                    return this.toastController.getTop();

                  case 7:
                    top = _context4.sent;

                    if (top) {
                      top.dismiss();
                    }

                    _context4.next = 11;
                    return this.toastController.create({
                      header: nextValue.has(q.id) ? 'Ausgeblendet:' : 'Eingeblendet:',
                      message: q.question,
                      duration: 2500,
                      position: 'top',
                      color: 'primary'
                    });

                  case 11:
                    _context4.sent.present();

                    this.chart.chart.update();

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ChartCardComponent;
    }();

    ChartCardComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(observable_input__WEBPACK_IMPORTED_MODULE_8__["ObservableInput"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])], ChartCardComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"], null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"])], ChartCardComponent.prototype, "chart", void 0);
    ChartCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'chart-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chart-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/base/chart-card/chart-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chart-card.component.scss */
      "./src/app/base/chart-card/chart-card.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]])], ChartCardComponent);
    /***/
  },

  /***/
  "./src/app/base/privacy/privacy.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/base/privacy/privacy.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBasePrivacyPrivacyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p + h1 {\n  margin-top: 2rem;\n}\n\np {\n  margin: 1rem 0;\n  padding: 0;\n}\n\nul, p {\n  font-size: 0.8rem;\n}\n\nul {\n  margin: 0;\n  padding: 0 0 0 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL2Jhc2UvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYXNlL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYmFzZS9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwICsgaDEge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsLCBwIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAycmVtO1xufVxuIiwicCArIGgxIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG51bCwgcCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMnJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/base/privacy/privacy.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/base/privacy/privacy.component.ts ***!
    \***************************************************/

  /*! exports provided: PrivacyComponent */

  /***/
  function srcAppBasePrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return PrivacyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyComponent = /*#__PURE__*/function () {
      function PrivacyComponent() {
        _classCallCheck(this, PrivacyComponent);
      }

      _createClass(PrivacyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyComponent;
    }();

    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'privacy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/base/privacy/privacy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy.component.scss */
      "./src/app/base/privacy/privacy.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PrivacyComponent);
    /***/
  },

  /***/
  "./src/app/base/slider/slider.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/base/slider/slider.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBaseSliderSliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  height: 1.5rem;\n  width: 100%;\n  align-items: baseline;\n}\n\nul li {\n  background: var(--ion-color-primary);\n  width: 10%;\n  margin: 0 2px;\n  height: 100%;\n}\n\nul li:nth-child(1) {\n  height: 6.6666666667%;\n}\n\nul li:nth-child(2) {\n  height: 13.3333333333%;\n}\n\nul li:nth-child(3) {\n  height: 20%;\n}\n\nul li:nth-child(4) {\n  height: 26.6666666667%;\n}\n\nul li:nth-child(5) {\n  height: 33.3333333333%;\n}\n\nul li:nth-child(6) {\n  height: 40%;\n}\n\nul li:nth-child(7) {\n  height: 46.6666666667%;\n}\n\nul li:nth-child(8) {\n  height: 53.3333333333%;\n}\n\nul li:nth-child(9) {\n  height: 60%;\n}\n\nul li:nth-child(10) {\n  height: 66.6666666667%;\n}\n\nul li:nth-child(11) {\n  height: 73.3333333333%;\n}\n\nul li:nth-child(12) {\n  height: 80%;\n}\n\nul li:nth-child(13) {\n  height: 86.6666666667%;\n}\n\nul li:nth-child(14) {\n  height: 93.3333333333%;\n}\n\n.label,\n.emoji {\n  font-size: 1.5rem;\n  position: relative;\n}\n\n.label span,\n.emoji span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.label {\n  font-size: 1rem;\n}\n\nion-range {\n  margin: 0;\n  padding: 0 0.2rem;\n}\n\nion-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL2Jhc2Uvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFzZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURFRTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FER007RUFDRSxxQkFBQTtBQ0RSOztBREFNO0VBQ0Usc0JBQUE7QUNFUjs7QURITTtFQUNFLFdBQUE7QUNLUjs7QUROTTtFQUNFLHNCQUFBO0FDUVI7O0FEVE07RUFDRSxzQkFBQTtBQ1dSOztBRFpNO0VBQ0UsV0FBQTtBQ2NSOztBRGZNO0VBQ0Usc0JBQUE7QUNpQlI7O0FEbEJNO0VBQ0Usc0JBQUE7QUNvQlI7O0FEckJNO0VBQ0UsV0FBQTtBQ3VCUjs7QUR4Qk07RUFDRSxzQkFBQTtBQzBCUjs7QUQzQk07RUFDRSxzQkFBQTtBQzZCUjs7QUQ5Qk07RUFDRSxXQUFBO0FDZ0NSOztBRGpDTTtFQUNFLHNCQUFBO0FDbUNSOztBRHBDTTtFQUNFLHNCQUFBO0FDc0NSOztBRC9CQTs7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0FDa0NGOztBRGhDRTs7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNtQ0o7O0FEL0JBO0VBQ0UsZUFBQTtBQ2tDRjs7QUQvQkE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUNrQ0Y7O0FEL0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ2tDRiIsImZpbGUiOiJzcmMvYXBwL2Jhc2Uvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnVsIHtcbiAgLy8gbWFyZ2luOiAwIDAgLTE4cHggMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxuICBsaSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHdpZHRoOiAxMCU7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBAZm9yICRpIGZyb20gMSB0byAxNSB7XG4gICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICBoZWlnaHQ6ICRpICogKDEwMCAvIDE1KSAqIDElXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLmxhYmVsLFxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLXJhbmdlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAuMnJlbTtcbn1cblxuaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG51bCBsaSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luOiAwIDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxudWwgbGk6bnRoLWNoaWxkKDEpIHtcbiAgaGVpZ2h0OiA2LjY2NjY2NjY2NjclO1xufVxudWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgaGVpZ2h0OiAxMy4zMzMzMzMzMzMzJTtcbn1cbnVsIGxpOm50aC1jaGlsZCgzKSB7XG4gIGhlaWdodDogMjAlO1xufVxudWwgbGk6bnRoLWNoaWxkKDQpIHtcbiAgaGVpZ2h0OiAyNi42NjY2NjY2NjY3JTtcbn1cbnVsIGxpOm50aC1jaGlsZCg1KSB7XG4gIGhlaWdodDogMzMuMzMzMzMzMzMzMyU7XG59XG51bCBsaTpudGgtY2hpbGQoNikge1xuICBoZWlnaHQ6IDQwJTtcbn1cbnVsIGxpOm50aC1jaGlsZCg3KSB7XG4gIGhlaWdodDogNDYuNjY2NjY2NjY2NyU7XG59XG51bCBsaTpudGgtY2hpbGQoOCkge1xuICBoZWlnaHQ6IDUzLjMzMzMzMzMzMzMlO1xufVxudWwgbGk6bnRoLWNoaWxkKDkpIHtcbiAgaGVpZ2h0OiA2MCU7XG59XG51bCBsaTpudGgtY2hpbGQoMTApIHtcbiAgaGVpZ2h0OiA2Ni42NjY2NjY2NjY3JTtcbn1cbnVsIGxpOm50aC1jaGlsZCgxMSkge1xuICBoZWlnaHQ6IDczLjMzMzMzMzMzMzMlO1xufVxudWwgbGk6bnRoLWNoaWxkKDEyKSB7XG4gIGhlaWdodDogODAlO1xufVxudWwgbGk6bnRoLWNoaWxkKDEzKSB7XG4gIGhlaWdodDogODYuNjY2NjY2NjY2NyU7XG59XG51bCBsaTpudGgtY2hpbGQoMTQpIHtcbiAgaGVpZ2h0OiA5My4zMzMzMzMzMzMzJTtcbn1cblxuLmxhYmVsLFxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sYWJlbCBzcGFuLFxuLmVtb2ppIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1yYW5nZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwLjJyZW07XG59XG5cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/base/slider/slider.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/base/slider/slider.component.ts ***!
    \*************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppBaseSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);

        this.step = 1;
        this.value = 50;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SliderComponent, [{
        key: "handleChange",
        value: function handleChange(newValue) {
          this.valueChange.emit(newValue);
          this.value = newValue;
        }
      }]);

      return SliderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SliderComponent.prototype, "emoji", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], SliderComponent.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], SliderComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SliderComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SliderComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SliderComponent.prototype, "valueChange", void 0);
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/base/slider/slider.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slider.component.scss */
      "./src/app/base/slider/slider.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SliderComponent);
    /***/
  },

  /***/
  "./src/app/base/time-pipe.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/base/time-pipe.pipe.ts ***!
    \****************************************/

  /*! exports provided: TimePipePipe */

  /***/
  function srcAppBaseTimePipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimePipePipe", function () {
      return TimePipePipe;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

    var TimePipePipe = /*#__PURE__*/function () {
      function TimePipePipe() {
        _classCallCheck(this, TimePipePipe);
      }

      _createClass(TimePipePipe, [{
        key: "transform",
        value: function transform(value) {
          var d = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](value, 'hours');
          return [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["padStart"])(String(d.hours()), 2, '0'), Object(lodash__WEBPACK_IMPORTED_MODULE_3__["padStart"])(String(d.minutes()), 2, '0')].join(':');
        }
      }]);

      return TimePipePipe;
    }();

    TimePipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'timePipe'
    })], TimePipePipe);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(userService, router) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.userService.loadUser();

                  case 2:
                    if (_context5.sent) {
                      _context5.next = 6;
                      break;
                    }

                    _context5.next = 5;
                    return this.router.navigate(['signup']);

                  case 5:
                    return _context5.abrupt("return", false);

                  case 6:
                    return _context5.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/unauth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/guards/unauth.guard.ts ***!
    \****************************************/

  /*! exports provided: UnauthGuard */

  /***/
  function srcAppGuardsUnauthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnauthGuard", function () {
      return UnauthGuard;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var UnauthGuard = /*#__PURE__*/function () {
      function UnauthGuard(userService, router) {
        _classCallCheck(this, UnauthGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(UnauthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.userService.loadUser();

                  case 2:
                    if (!_context6.sent) {
                      _context6.next = 6;
                      break;
                    }

                    _context6.next = 5;
                    return this.router.navigate(['']);

                  case 5:
                    return _context6.abrupt("return", false);

                  case 6:
                    return _context6.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return UnauthGuard;
    }();

    UnauthGuard.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UnauthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UnauthGuard);
    /***/
  },

  /***/
  "./src/app/modal/modal.module.ts":
  /*!***************************************!*\
    !*** ./src/app/modal/modal.module.ts ***!
    \***************************************/

  /*! exports provided: ModalModule */

  /***/
  function srcAppModalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
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


    var _base_base_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../base/base.module */
    "./src/app/base/base.module.ts");
    /* harmony import */


    var _privacy_privacy_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy/privacy.modal */
    "./src/app/modal/privacy/privacy.modal.ts");

    var ModalModule = function ModalModule() {
      _classCallCheck(this, ModalModule);
    };

    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_base_base_module__WEBPACK_IMPORTED_MODULE_5__["BaseModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_privacy_privacy_modal__WEBPACK_IMPORTED_MODULE_6__["PrivacyModal"]],
      entryComponents: [_privacy_privacy_modal__WEBPACK_IMPORTED_MODULE_6__["PrivacyModal"]]
    })], ModalModule);
    /***/
  },

  /***/
  "./src/app/modal/privacy/privacy.modal.scss":
  /*!**************************************************!*\
    !*** ./src/app/modal/privacy/privacy.modal.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalPrivacyPrivacyModalScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL3ByaXZhY3kvcHJpdmFjeS5tb2RhbC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modal/privacy/privacy.modal.ts":
  /*!************************************************!*\
    !*** ./src/app/modal/privacy/privacy.modal.ts ***!
    \************************************************/

  /*! exports provided: PrivacyModal */

  /***/
  function srcAppModalPrivacyPrivacyModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyModal", function () {
      return PrivacyModal;
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

    var PrivacyModal = /*#__PURE__*/function () {
      function PrivacyModal(modalController) {
        _classCallCheck(this, PrivacyModal);

        this.modalController = modalController;
      }

      _createClass(PrivacyModal, [{
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalController.getTop();

                  case 2:
                    _context7.sent.dismiss();

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return PrivacyModal;
    }();

    PrivacyModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    PrivacyModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/privacy/privacy.modal.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy.modal.scss */
      "./src/app/modal/privacy/privacy.modal.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], PrivacyModal);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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

    var ApiService = function ApiService(http) {
      var _this5 = this;

      _classCallCheck(this, ApiService);

      /*this.new().then(() => {
          this.signUp({
              gender: 'MALE',
              yearOfBirth: 1989,
              plz: '75321',
              householdSize: 2,
              pet: true,
          })
      })*/
      this.http = http;
      this.baseUrl = 'https://www.wiegehts.app';

      this.register = function (user) {
        return _this5.http.post("".concat(_this5.baseUrl, "/register"), user).toPromise();
      };

      this.getMood = function (userId) {
        return _this5.http.get("".concat(_this5.baseUrl, "/mood?id=").concat(userId)).toPromise();
      };

      this.getHealth = function (userId) {
        return _this5.http.get("".concat(_this5.baseUrl, "/health?id=").concat(userId)).toPromise();
      };

      this.getHeat = function (date) {
        return _this5.http.get("".concat(_this5.baseUrl, "/heat?responseDate=").concat(date)).toPromise();
      };

      this.postQuestionnaire = function (questionnaire) {
        return _this5.http.post("".concat(_this5.baseUrl, "/questionnaire"), questionnaire).toPromise();
      };
    };

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/services/settings.service.ts");

    var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications;

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(api, alertController, settingsService) {
        _classCallCheck(this, NotificationService);

        this.api = api;
        this.alertController = alertController;
        this.settingsService = settingsService;

        this.getPending = function () {
          return LocalNotifications.getPending();
        };
      } // returns true if enabled
      // returns false if disabled
      // returns undefined if not supported


      _createClass(NotificationService, [{
        key: "enabled",
        value: function enabled() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return LocalNotifications.areEnabled();

                  case 3:
                    return _context8.abrupt("return", _context8.sent.value);

                  case 6:
                    _context8.prev = 6;
                    _context8.t0 = _context8["catch"](0);
                    return _context8.abrupt("return", undefined);

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, null, [[0, 6]]);
          }));
        }
      }, {
        key: "showInitialConfigAlert",
        value: function showInitialConfigAlert() {
          var _this6 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertController.create({
                        header: 'Jede Stimmung zählt!',
                        message: ['Daher möchten wir dich gerne 1x am Tag daran erinnern unsere Fragen zu beantworten.', 'Nur so erhalten wir ein aussagekräftiges Bild für ganz Deutschland.'].join(' '),
                        buttons: [{
                          text: 'Nein danke',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            return resolve(false);
                          }
                        }, {
                          text: 'Sehr gerne',
                          handler: function handler() {
                            return resolve(true);
                          }
                        }]
                      });

                    case 2:
                      _context9.sent.present();

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          });
        }
      }, {
        key: "schedule",
        value: function schedule(notifications) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var granted;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.requestPermission();

                  case 2:
                    granted = _context10.sent;

                    if (granted) {
                      _context10.next = 8;
                      break;
                    }

                    _context10.next = 6;
                    return this.alertController.create({
                      header: 'Ups ...',
                      message: ['Leider konnte die Erinnerung nicht aktiviert werden, da wir Dir keine Push-Benachrichtigungen senden dürfen.', 'Bitte erlaube dies in den Systemeinstellungen.'].join(' '),
                      buttons: [{
                        text: 'Okay'
                      }]
                    });

                  case 6:
                    _context10.sent.present();

                    return _context10.abrupt("return", false);

                  case 8:
                    _context10.prev = 8;
                    _context10.next = 11;
                    return LocalNotifications.schedule({
                      notifications: notifications
                    });

                  case 11:
                    _context10.next = 18;
                    break;

                  case 13:
                    _context10.prev = 13;
                    _context10.t0 = _context10["catch"](8);
                    _context10.next = 17;
                    return this.alertController.create({
                      header: 'Ups ...',
                      message: ['Leider konnte die Erinnerung nicht aktiviert werden. Fehler:', _context10.t0.message || _context10.t0].join(' '),
                      buttons: [{
                        text: 'Okay'
                      }]
                    });

                  case 17:
                    _context10.sent.present();

                  case 18:
                    return _context10.abrupt("return", true);

                  case 19:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[8, 13]]);
          }));
        }
      }, {
        key: "requestPermission",
        value: function requestPermission() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _yield$LocalNotificat, granted;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return LocalNotifications.requestPermission();

                  case 2:
                    _yield$LocalNotificat = _context11.sent;
                    granted = _yield$LocalNotificat.granted;

                    if (!granted) {
                      this.settingsService.set('reminderPushNotification.enabled', false);
                    }

                    return _context11.abrupt("return", granted);

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "cancelAll",
        value: function cancelAll() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _yield$this$getPendin, notifications;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.getPending();

                  case 2:
                    _yield$this$getPendin = _context12.sent;
                    notifications = _yield$this$getPendin.notifications;

                    if (!(notifications.length > 0)) {
                      _context12.next = 7;
                      break;
                    }

                    _context12.next = 7;
                    return LocalNotifications.cancel({
                      notifications: notifications
                    });

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])], NotificationService);
    /***/
  },

  /***/
  "./src/app/services/question.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/question.service.ts ***!
    \**********************************************/

  /*! exports provided: QuestionService */

  /***/
  function srcAppServicesQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
      return QuestionService;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var QuestionService = /*#__PURE__*/function () {
      function QuestionService(api, userService) {
        var _this7 = this;

        _classCallCheck(this, QuestionService);

        this.api = api;
        this.userService = userService;
        this.questions = {
          '72eciMp5RMiA2u5dfwgtAX': {
            question: 'Wie gut geht es Dir?',
            emoji: '🙂',
            value: 0,
            color: '#ff5e80'
          },
          'oDHa9ZEb5KNChgmJ65fBx2': {
            question: 'Wie ängstlich fühlst Du Dich?',
            emoji: '😳',
            value: 0,
            color: '#ffce56'
          },
          'rdjhVEbqnope4vL8MfAJ9Y': {
            question: 'Wie wütend bist Du?',
            emoji: '😡',
            value: 0,
            color: '#36a2eb'
          },
          'kcz8NZb2chFP1RiZdURTw2': {
            question: 'Wie einsam fühlst Du Dich?',
            emoji: '🚶‍',
            value: 0,
            color: '#4bc0c0'
          },
          'o4uyZ9so3oiuAzspbH3YPf': {
            question: 'Wie gestresst fühlst Du Dich?',
            emoji: '🤯',
            value: 0,
            color: '#97bbcd'
          },
          'ggonDssvB639H2Bzbd4ac2': {
            question: 'Wie zufrieden bist Du?',
            emoji: '😊',
            value: 0,
            color: '#d47ce9'
          },
          'bJyjEuGz6VF3kwVxz7RQ8c': {
            question: 'Wie lange hast du geschlafen?',
            emoji: '🌙',
            value: 0,
            color: '#ff5e80'
          },
          'rPjhtwjTyfAQ433jVDHSvU': {
            question: 'Wie lange hast Du Dich heute über Corona informiert (Nachrichten, Social Media, TV...)',
            emoji: '📺',
            value: 0,
            color: '#ffce56'
          },
          '84rfLqZxi9X9Y8y9hQrLKB': {
            question: 'Wie lange hattest Du heute Kontakt zu Anderen (Telefon, Skype, persönlich)?',
            emoji: '💬',
            value: 0,
            color: '#36a2eb'
          },
          'vSvCia11kNsj43DVqiMNF9': {
            question: 'Wie lange warst Du heute an der frischen Luft?',
            emoji: '🌤‍',
            value: 0,
            color: '#4bc0c0'
          },
          '73WakrfVbNJBaAmhQtEeDv': {
            question: 'Wie lange hast Du heute Sport gemacht?',
            emoji: '💪',
            value: 0,
            color: '#d47ce9'
          }
        };
        this.moodQuestions = ['72eciMp5RMiA2u5dfwgtAX', 'oDHa9ZEb5KNChgmJ65fBx2', 'rdjhVEbqnope4vL8MfAJ9Y', 'kcz8NZb2chFP1RiZdURTw2', 'o4uyZ9so3oiuAzspbH3YPf', 'ggonDssvB639H2Bzbd4ac2'].map(function (id) {
          return Object.assign(_this7.questions[id], {
            id: id,
            value: _this7.getStoredValue(id)
          });
        });
        this.healthQuestions = ['bJyjEuGz6VF3kwVxz7RQ8c', 'rPjhtwjTyfAQ433jVDHSvU', '84rfLqZxi9X9Y8y9hQrLKB', 'vSvCia11kNsj43DVqiMNF9', '73WakrfVbNJBaAmhQtEeDv'].map(function (id) {
          return Object.assign(_this7.questions[id], {
            id: id,
            value: _this7.getStoredValue(id)
          });
        });
        this.valueChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.onSave$ = this.valueChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.api.postQuestionnaire({
                      userId: this.userService.user.id,
                      responseDate: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                      healthResponses: this.healthQuestions.map(function (q) {
                        return {
                          questionId: q.id,
                          response: q.value
                        };
                      }),
                      moodResponses: this.moodQuestions.map(function (q) {
                        return {
                          questionId: q.id,
                          response: q.value
                        };
                      })
                    });

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }));
        this.onSave$.subscribe(function () {
          console.log('SAVED');
        });
      }

      _createClass(QuestionService, [{
        key: "getMoodById",
        value: function getMoodById(id) {
          return this.moodQuestions.find(function (m) {
            return m.id === id;
          });
        }
      }, {
        key: "setValue",
        value: function setValue(id, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    console.log('SET VALUE', id, value);
                    this.questions[id].value = value;
                    this.valueChanges$.next({
                      id: id,
                      value: value
                    });
                    _context14.next = 5;
                    return this.storeValue(id, value);

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "storeValue",
        value: function storeValue(id, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    if (window.localStorage) {
                      window.localStorage.setItem("question.".concat(id), JSON.stringify({
                        value: value,
                        date: this.getDate()
                      }));
                    }

                  case 1:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getStoredValue",
        value: function getStoredValue(id) {
          if (window.localStorage) {
            var item = window.localStorage.getItem("question.".concat(id));

            if (item) {
              try {
                var p = JSON.parse(item);

                if (p.date === this.getDate()) {
                  return p.value;
                }
              } catch (e) {}
            }
          }

          return 0;
        }
      }, {
        key: "getDate",
        value: function getDate() {
          return moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
        }
      }]);

      return QuestionService;
    }();

    QuestionService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], QuestionService);
    /***/
  },

  /***/
  "./src/app/services/settings.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/settings.service.ts ***!
    \**********************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppServicesSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SettingsService_1;

    var SettingsService = SettingsService_1 = /*#__PURE__*/function () {
      function SettingsService() {
        _classCallCheck(this, SettingsService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.settings$ = this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (v) {
          return !!v;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"]));
        this.settings$.subscribe(function (settings) {
          if (window.localStorage) {
            window.localStorage.setItem('settings', JSON.stringify(settings));
          }
        });

        if (window.localStorage) {
          var storedSettings = window.localStorage.getItem('settings');
          this.next(storedSettings ? JSON.parse(storedSettings) : SettingsService_1.defaultSettings);
        }
      }

      _createClass(SettingsService, [{
        key: "set",
        value: function set(path, value) {
          var settings = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.subject.value);
          Object(lodash__WEBPACK_IMPORTED_MODULE_3__["set"])(settings, path, value);
          this.next(settings);
        }
      }, {
        key: "next",
        value: function next(settings) {
          this.subject.next(settings);
        }
      }]);

      return SettingsService;
    }();

    SettingsService.defaultSettings = {
      reminderPushNotification: {
        enabled: false,
        time: {
          hour: 20,
          minute: 0
        }
      }
    };
    SettingsService = SettingsService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SettingsService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var short_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! short-uuid */
    "./node_modules/short-uuid/index.js");
    /* harmony import */


    var short_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(short_uuid__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/services/settings.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(api, notificationService, settingsService) {
        _classCallCheck(this, UserService);

        this.api = api;
        this.notificationService = notificationService;
        this.settingsService = settingsService;
      }

      _createClass(UserService, [{
        key: "signUp",
        value: function signUp(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var enabled;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.user = Object.assign({}, data, {
                      id: Object(short_uuid__WEBPACK_IMPORTED_MODULE_2__["generate"])()
                    });
                    _context16.next = 3;
                    return this.api.register(this.user);

                  case 3:
                    if (window.localStorage) {
                      window.localStorage.setItem('user', JSON.stringify(this.user));
                    }

                    _context16.next = 6;
                    return this.notificationService.showInitialConfigAlert();

                  case 6:
                    enabled = _context16.sent;
                    this.settingsService.set('reminderPushNotification.enabled', enabled);
                    return _context16.abrupt("return", this.user);

                  case 9:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "loadUser",
        value: function loadUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var userJson;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    userJson = window.localStorage.getItem('user');

                    if (userJson) {
                      _context17.next = 3;
                      break;
                    }

                    return _context17.abrupt("return");

                  case 3:
                    this.user = JSON.parse(userJson);
                    return _context17.abrupt("return", this.user);

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }, {
        type: _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kschecker/Projects/wirvsvirus/wiegehts/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map