function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questionnaire-questionnaire-module"], {
  /***/
  "./node_modules/lodash/_Symbol.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/_Symbol.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_SymbolJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /** Built-in value references. */


    var Symbol = root.Symbol;
    module.exports = Symbol;
    /***/
  },

  /***/
  "./node_modules/lodash/_baseGetTag.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_baseGetTag.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_baseGetTagJs(module, exports, __webpack_require__) {
    var Symbol = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js"),
        getRawTag = __webpack_require__(
    /*! ./_getRawTag */
    "./node_modules/lodash/_getRawTag.js"),
        objectToString = __webpack_require__(
    /*! ./_objectToString */
    "./node_modules/lodash/_objectToString.js");
    /** `Object#toString` result references. */


    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';
    /** Built-in value references. */

    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }

      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }

    module.exports = baseGetTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_freeGlobal.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_freeGlobal.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_freeGlobalJs(module, exports) {
    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    module.exports = freeGlobal;
    /***/
  },

  /***/
  "./node_modules/lodash/_getRawTag.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_getRawTag.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_getRawTagJs(module, exports, __webpack_require__) {
    var Symbol = __webpack_require__(
    /*! ./_Symbol */
    "./node_modules/lodash/_Symbol.js");
    /** Used for built-in method references. */


    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString = objectProto.toString;
    /** Built-in value references. */

    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */

    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);

      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }

      return result;
    }

    module.exports = getRawTag;
    /***/
  },

  /***/
  "./node_modules/lodash/_objectToString.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_objectToString.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_objectToStringJs(module, exports) {
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var nativeObjectToString = objectProto.toString;
    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */

    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    module.exports = objectToString;
    /***/
  },

  /***/
  "./node_modules/lodash/_root.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/_root.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodash_rootJs(module, exports, __webpack_require__) {
    var freeGlobal = __webpack_require__(
    /*! ./_freeGlobal */
    "./node_modules/lodash/_freeGlobal.js");
    /** Detect free variable `self`. */


    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();
    module.exports = root;
    /***/
  },

  /***/
  "./node_modules/lodash/debounce.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/debounce.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashDebounceJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js"),
        now = __webpack_require__(
    /*! ./now */
    "./node_modules/lodash/now.js"),
        toNumber = __webpack_require__(
    /*! ./toNumber */
    "./node_modules/lodash/toNumber.js");
    /** Error message constants. */


    var FUNC_ERROR_TEXT = 'Expected a function';
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeMax = Math.max,
        nativeMin = Math.min;
    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */

    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      wait = toNumber(wait) || 0;

      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time; // Start the timer for the trailing edge.

        timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.

        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }

      function timerExpired() {
        var time = now();

        if (shouldInvoke(time)) {
          return trailingEdge(time);
        } // Restart the timer.


        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.

        if (trailing && lastArgs) {
          return invokeFunc(time);
        }

        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }

        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }

          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }

        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }

        return result;
      }

      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    module.exports = debounce;
    /***/
  },

  /***/
  "./node_modules/lodash/isObject.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isObject.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsObjectJs(module, exports) {
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    module.exports = isObject;
    /***/
  },

  /***/
  "./node_modules/lodash/isObjectLike.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/isObjectLike.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsObjectLikeJs(module, exports) {
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    module.exports = isObjectLike;
    /***/
  },

  /***/
  "./node_modules/lodash/isSymbol.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isSymbol.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashIsSymbolJs(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(
    /*! ./_baseGetTag */
    "./node_modules/lodash/_baseGetTag.js"),
        isObjectLike = __webpack_require__(
    /*! ./isObjectLike */
    "./node_modules/lodash/isObjectLike.js");
    /** `Object#toString` result references. */


    var symbolTag = '[object Symbol]';
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */

    function isSymbol(value) {
      return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }

    module.exports = isSymbol;
    /***/
  },

  /***/
  "./node_modules/lodash/now.js":
  /*!************************************!*\
    !*** ./node_modules/lodash/now.js ***!
    \************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashNowJs(module, exports, __webpack_require__) {
    var root = __webpack_require__(
    /*! ./_root */
    "./node_modules/lodash/_root.js");
    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */


    var now = function now() {
      return root.Date.now();
    };

    module.exports = now;
    /***/
  },

  /***/
  "./node_modules/lodash/toNumber.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/toNumber.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesLodashToNumberJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./isObject */
    "./node_modules/lodash/isObject.js"),
        isSymbol = __webpack_require__(
    /*! ./isSymbol */
    "./node_modules/lodash/isSymbol.js");
    /** Used as references for various `Number` constants. */


    var NAN = 0 / 0;
    /** Used to match leading and trailing whitespace. */

    var reTrim = /^\s+|\s+$/g;
    /** Used to detect bad signed hexadecimal string values. */

    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */

    var reIsBinary = /^0b[01]+$/i;
    /** Used to detect octal string values. */

    var reIsOctal = /^0o[0-7]+$/i;
    /** Built-in method references without a dependency on `root`. */

    var freeParseInt = parseInt;
    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */

    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol(value)) {
        return NAN;
      }

      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
      }

      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }

      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }

    module.exports = toNumber;
    /***/
  },

  /***/
  "./src/app/questionnaire/form/form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/questionnaire/form/form.component.ts ***!
    \******************************************************/

  /*! exports provided: QuestFormComponent */

  /***/
  function srcAppQuestionnaireFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestFormComponent", function () {
      return QuestFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function QuestFormComponent_ion_row_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-range", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function QuestFormComponent_ion_row_1_Template_ion_range_ionChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var q_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onRangeChange(q_r13.id, $event.detail.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var q_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r13.question, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r13.emoji);
      }
    }

    var QuestFormComponent =
    /*#__PURE__*/
    function () {
      function QuestFormComponent(questionService) {
        _classCallCheck(this, QuestFormComponent);

        this.questionService = questionService;
        this.questions = [];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(QuestFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.questions = this.questionService.getAllMoodQuestions();
        }
      }, {
        key: "onRangeChange",
        value: function onRangeChange(id, value) {
          this.onChange.emit(this.questions.map(function (q) {
            if (q.id === id) {
              q.value = value;
            }

            return q;
          }));
        }
      }]);

      return QuestFormComponent;
    }();

    QuestFormComponent.ɵfac = function QuestFormComponent_Factory(t) {
      return new (t || QuestFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]));
    };

    QuestFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestFormComponent,
      selectors: [["quest-form"]],
      outputs: {
        onChange: "onChange"
      },
      decls: 9,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["size", "12"], ["expand", "full", "routerLink", "personal-report"], ["expand", "full", "routerLink", "schland"], ["color", "secondary", "pin", "true", 3, "ionChange"], ["slot", "end", 1, "emoji"]],
      template: function QuestFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestFormComponent_ion_row_1_Template, 9, 2, "ion-row", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zur eigenen Auswertung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zur Heatmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"]],
      styles: ["ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\nion-range[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.emoji[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93ZXZzdmlydXMtZmUvc3JjL2FwcC9xdWVzdGlvbm5haXJlL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3Rpb25uYWlyZS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25uYWlyZS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCBpb24tcm93IHtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwYWRkaW5nLXRvcDogMTBweFxufVxuXG4uZW1vamkge1xuICBmb250LXNpemU6IDJyZW07XG59XG4iLCJpb24tZ3JpZCBpb24tcm93IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAycmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'quest-form',
          templateUrl: './form.component.html',
          styleUrls: ['./form.component.scss']
        }]
      }], function () {
        return [{
          type: _services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]
        }];
      }, {
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/questionnaire/health/health.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/questionnaire/health/health.component.ts ***!
    \**********************************************************/

  /*! exports provided: QuestHealthComponent */

  /***/
  function srcAppQuestionnaireHealthHealthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestHealthComponent", function () {
      return QuestHealthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function QuestHealthComponent_ion_row_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-range", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function QuestHealthComponent_ion_row_1_Template_ion_range_ionChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var q_r17 = ctx.$implicit;

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onRangeChange(_r18, q_r17.id, $event.detail.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var q_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r17.question, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1200)("step", 15)("snaps", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r17.emoji);
      }
    }

    var QuestHealthComponent =
    /*#__PURE__*/
    function () {
      function QuestHealthComponent(questionService) {
        _classCallCheck(this, QuestHealthComponent);

        this.questionService = questionService;
        this.questions = [];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(QuestHealthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.questions = this.questionService.getAllHealthQuestions();
        }
      }, {
        key: "onRangeChange",
        value: function onRangeChange(slider, id, value) {
          var n = new Date(0, 0);
          n.setMinutes(slider.value);
          slider.el.shadowRoot.querySelector('.range-knob-handle .range-pin').innerHTML = n.toTimeString().slice(0, 5);
          this.onChange.emit(this.questions.map(function (q) {
            if (q.id === id) {
              q.value = value;
            }

            return q;
          }));
        }
      }]);

      return QuestHealthComponent;
    }();

    QuestHealthComponent.ɵfac = function QuestHealthComponent_Factory(t) {
      return new (t || QuestHealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]));
    };

    QuestHealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestHealthComponent,
      selectors: [["quest-health"]],
      outputs: {
        onChange: "onChange"
      },
      decls: 9,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["size", "12"], ["expand", "full", "routerLink", "personal-report"], ["expand", "full", "routerLink", "schland"], ["color", "secondary", "pin", "true", 3, "max", "step", "snaps", "ionChange"], ["slider", ""], ["slot", "end", 1, "emoji"]],
      template: function QuestHealthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestHealthComponent_ion_row_1_Template, 10, 5, "ion-row", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zur eigenen Auswertung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zur Heatmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"]],
      styles: ["ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\nion-range[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.emoji[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93ZXZzdmlydXMtZmUvc3JjL2FwcC9xdWVzdGlvbm5haXJlL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbm5haXJlL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCBpb24tcm93IHtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwYWRkaW5nLXRvcDogMTBweFxufVxuXG4uZW1vamkge1xuICBmb250LXNpemU6IDJyZW07XG59XG4iLCJpb24tZ3JpZCBpb24tcm93IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmVtb2ppIHtcbiAgZm9udC1zaXplOiAycmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestHealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'quest-health',
          templateUrl: './health.component.html',
          styleUrls: ['./health.component.scss']
        }]
      }], function () {
        return [{
          type: _services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]
        }];
      }, {
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/questionnaire/questionnaire-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/questionnaire/questionnaire-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: QuestionnairePageRoutingModule */

  /***/
  function srcAppQuestionnaireQuestionnaireRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnairePageRoutingModule", function () {
      return QuestionnairePageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _questionnaire_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./questionnaire.page */
    "./src/app/questionnaire/questionnaire.page.ts");

    var routes = [{
      path: '',
      component: _questionnaire_page__WEBPACK_IMPORTED_MODULE_2__["QuestionnairePage"]
    }];

    var QuestionnairePageRoutingModule = function QuestionnairePageRoutingModule() {
      _classCallCheck(this, QuestionnairePageRoutingModule);
    };

    QuestionnairePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: QuestionnairePageRoutingModule
    });
    QuestionnairePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function QuestionnairePageRoutingModule_Factory(t) {
        return new (t || QuestionnairePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuestionnairePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionnairePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/questionnaire/questionnaire.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/questionnaire/questionnaire.module.ts ***!
    \*******************************************************/

  /*! exports provided: QuestionnairePageModule */

  /***/
  function srcAppQuestionnaireQuestionnaireModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnairePageModule", function () {
      return QuestionnairePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./questionnaire-routing.module */
    "./src/app/questionnaire/questionnaire-routing.module.ts");
    /* harmony import */


    var _questionnaire_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./questionnaire.page */
    "./src/app/questionnaire/questionnaire.page.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/questionnaire/form/form.component.ts");
    /* harmony import */


    var _health_health_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./health/health.component */
    "./src/app/questionnaire/health/health.component.ts");

    var QuestionnairePageModule = function QuestionnairePageModule() {
      _classCallCheck(this, QuestionnairePageModule);
    };

    QuestionnairePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: QuestionnairePageModule
    });
    QuestionnairePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function QuestionnairePageModule_Factory(t) {
        return new (t || QuestionnairePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnairePageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuestionnairePageModule, {
        declarations: [_questionnaire_page__WEBPACK_IMPORTED_MODULE_5__["QuestionnairePage"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["QuestFormComponent"], _health_health_component__WEBPACK_IMPORTED_MODULE_7__["QuestHealthComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnairePageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionnairePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionnairePageRoutingModule"]],
          declarations: [_questionnaire_page__WEBPACK_IMPORTED_MODULE_5__["QuestionnairePage"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["QuestFormComponent"], _health_health_component__WEBPACK_IMPORTED_MODULE_7__["QuestHealthComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/questionnaire/questionnaire.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/questionnaire/questionnaire.page.ts ***!
    \*****************************************************/

  /*! exports provided: QuestionnairePage */

  /***/
  function srcAppQuestionnaireQuestionnairePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnairePage", function () {
      return QuestionnairePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash/debounce */
    "./node_modules/lodash/debounce.js");
    /* harmony import */


    var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/questionnaire.service */
    "./src/app/services/questionnaire.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/questionnaire/form/form.component.ts");
    /* harmony import */


    var _health_health_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./health/health.component */
    "./src/app/questionnaire/health/health.component.ts");

    function QuestionnairePage_quest_form_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "quest-form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function QuestionnairePage_quest_form_9_Template_quest_form_onChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r8.onMoodResponse($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function QuestionnairePage_quest_health_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "quest-health", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function QuestionnairePage_quest_health_10_Template_quest_health_onChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r10.onHealthResponse($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    var QuestionnairePage =
    /*#__PURE__*/
    function () {
      function QuestionnairePage(userService, questService) {
        _classCallCheck(this, QuestionnairePage);

        this.userService = userService;
        this.questService = questService;
        this.mode = 'moode';
      }

      _createClass(QuestionnairePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.state = {
            userId: this.userService.user.id,
            responseDate: new Date().toISOString().substring(0, 10),
            moodResponses: [],
            healthResponses: []
          };

          var fn = function fn() {
            _this.questService.save(_this.state);
          };

          this.debouncedSave = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(fn, 200);
        }
      }, {
        key: "onMoodResponse",
        value: function onMoodResponse(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.state.moodResponses = event.map(function (_ref) {
                      var id = _ref.id,
                          value = _ref.value;
                      return {
                        questionId: id,
                        response: value
                      };
                    });
                    this.debouncedSave(); // await this.questService.save(this.state);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onHealthResponse",
        value: function onHealthResponse(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.state.healthResponses = event.map(function (_ref2) {
                      var id = _ref2.id,
                          value = _ref2.value;
                      return {
                        questionId: id,
                        response: value
                      };
                    });
                    this.debouncedSave(); // await this.questService.save(this.state);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return QuestionnairePage;
    }();

    QuestionnairePage.ɵfac = function QuestionnairePage_Factory(t) {
      return new (t || QuestionnairePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireService"]));
    };

    QuestionnairePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: QuestionnairePage,
      selectors: [["app-questionnaire"]],
      inputs: {
        mode: "mode"
      },
      decls: 11,
      vars: 3,
      consts: [[3, "value", "ionChange"], ["value", "moode"], ["value", "health"], [3, "ngSwitch"], [3, "onChange", 4, "ngSwitchCase"], [3, "onChange", 4, "ngSwitchDefault"], [3, "onChange"]],
      template: function QuestionnairePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-segment", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function QuestionnairePage_Template_ion_segment_ionChange_1_listener($event) {
            return ctx.mode = $event.detail.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-segment-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Stimmung");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-segment-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Aktivit\xE4t");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, QuestionnairePage_quest_form_9_Template, 1, 0, "quest-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, QuestionnairePage_quest_health_10_Template, 1, 0, "quest-health", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "moode");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _form_form_component__WEBPACK_IMPORTED_MODULE_7__["QuestFormComponent"], _health_health_component__WEBPACK_IMPORTED_MODULE_8__["QuestHealthComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5wYWdlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuestionnairePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-questionnaire',
          templateUrl: './questionnaire.page.html',
          styleUrls: ['./questionnaire.page.scss']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _services_questionnaire_service__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireService"]
        }];
      }, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var moodQuestions = [{
      id: '72eciMp5RMiA2u5dfwgtAX',
      question: 'Wie gut geht es Dir?',
      emoji: '🙂',
      value: 0
    }, {
      id: 'oDHa9ZEb5KNChgmJ65fBx2',
      question: 'Wie ängstlich fühlst Du Dich?',
      emoji: '😳',
      value: 0
    }, {
      id: 'rdjhVEbqnope4vL8MfAJ9Y',
      question: 'Wie wütend bist Du?',
      emoji: '😡',
      value: 0
    }, {
      id: 'kcz8NZb2chFP1RiZdURTw2',
      question: 'Wie einsam fühlst Du Dich?',
      emoji: '🚶‍',
      value: 0
    }, {
      id: 'o4uyZ9so3oiuAzspbH3YPf',
      question: 'Wie gestresst fühlst Du Dich?',
      emoji: '🤯',
      value: 0
    }, {
      id: 'ggonDssvB639H2Bzbd4ac2',
      question: 'Wie zufrieden bist Du?',
      emoji: '😊',
      value: 0
    }];
    var healthQuestions = [{
      id: 'bJyjEuGz6VF3kwVxz7RQ8c',
      question: 'Wie lange hast du geschlafen?',
      emoji: '🌙',
      value: 0
    }, {
      id: 'rPjhtwjTyfAQ433jVDHSvU',
      question: 'Wie lange hast Du Dich heute über Corona informiert (Nachrichten, Social Media, TV..)',
      emoji: '📰',
      value: 0
    }, {
      id: '84rfLqZxi9X9Y8y9hQrLKB',
      question: 'Wie lange hattest Du heute Kontakt zu Anderen (Telefon, Skype, persönlich)?',
      emoji: '💬',
      value: 0
    }, {
      id: 'vSvCia11kNsj43DVqiMNF9',
      question: 'Wie lange warst Du heute an der frischen Luft?',
      emoji: '🌤‍',
      value: 0
    }, {
      id: 'bJyjEuGz6VF3kwVxz7RQ8c',
      question: 'Wie lange hast Du heute Sport gemacht?',
      emoji: '💪',
      value: 0
    }];

    var QuestionService =
    /*#__PURE__*/
    function () {
      function QuestionService(http) {
        _classCallCheck(this, QuestionService);

        this.http = http;

        this.getAllMoodQuestions = function () {
          return moodQuestions;
        };

        this.getAllHealthQuestions = function () {
          return healthQuestions;
        };
      }

      _createClass(QuestionService, [{
        key: "loadUserMoodQuestions",
        value: function loadUserMoodQuestions(userId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.http.get("http://".concat(window.location.hostname, ":8080/mood?id=").concat(userId)).toPromise();

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return QuestionService;
    }();

    QuestionService.ɵfac = function QuestionService_Factory(t) {
      return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: QuestionService,
      factory: QuestionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/questionnaire.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/questionnaire.service.ts ***!
    \***************************************************/

  /*! exports provided: QuestionnaireService */

  /***/
  function srcAppServicesQuestionnaireServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireService", function () {
      return QuestionnaireService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var QuestionnaireService =
    /*#__PURE__*/
    function () {
      function QuestionnaireService(http) {
        _classCallCheck(this, QuestionnaireService);

        this.http = http;
        this.baseUrl = "http://".concat(window.location.hostname, ":8080");
      }

      _createClass(QuestionnaireService, [{
        key: "save",
        value: function save(questionnaire) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.http.post(this.baseUrl + '/questionnaire', questionnaire).toPromise();

                  case 2:
                    return _context4.abrupt("return", questionnaire);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return QuestionnaireService;
    }();

    QuestionnaireService.ɵfac = function QuestionnaireService_Factory(t) {
      return new (t || QuestionnaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    QuestionnaireService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: QuestionnaireService,
      factory: QuestionnaireService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuestionnaireService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=questionnaire-questionnaire-module-es5.js.map