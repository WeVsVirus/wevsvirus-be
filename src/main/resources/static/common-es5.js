function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateC2e2e1f4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticC8f1473eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex3476b023Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3528f139.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex3528f139Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-80bde1aa.js */
    "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-1850e475-js */
      "ios-transition-1850e475-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-1850e475.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-1850e475.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-083fcf52-js */
      "md-transition-083fcf52-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-083fcf52.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-083fcf52.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(opts) {
        var animationBuilder, ani;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getAnimationBuilder(opts);

              case 2:
                animationBuilder = _context2.sent;
                ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                return _context2.abrupt("return", ani);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function runTransition(_x6) {
        return _ref2.apply(this, arguments);
      };
    }();

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(opts) {
        var getAnimation;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 2:
                if (!opts.animationBuilder) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", opts.animationBuilder);

              case 4:
                if (!(opts.mode === 'ios')) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return iosTransitionAnimation();

              case 7:
                _context3.t0 = _context3.sent.iosTransitionAnimation;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return mdTransitionAnimation();

              case 12:
                _context3.t0 = _context3.sent.mdTransitionAnimation;

              case 13:
                getAnimation = _context3.t0;
                return _context3.abrupt("return", getAnimation);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getAnimationBuilder(_x7) {
        return _ref3.apply(this, arguments);
      };
    }();

    var animation =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(animationBuilder, opts) {
        var trans, didComplete;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return waitForReady(opts, true);

              case 2:
                trans = animationBuilder(opts.baseEl, opts);
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                _context4.next = 6;
                return playTransition(trans, opts);

              case 6:
                didComplete = _context4.sent;

                if (opts.progressCallback) {
                  opts.progressCallback(undefined);
                }

                if (didComplete) {
                  fireDidEvents(opts.enteringEl, opts.leavingEl);
                }

                return _context4.abrupt("return", {
                  hasCompleted: didComplete,
                  animation: trans
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function animation(_x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }();

    var noAnimation =
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(opts) {
        var enteringEl, leavingEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                _context5.next = 4;
                return waitForReady(opts, false);

              case 4:
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return _context5.abrupt("return", {
                  hasCompleted: true
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function noAnimation(_x10) {
        return _ref5.apply(this, arguments);
      };
    }();

    var waitForReady =
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(opts, defaultDeep) {
        var deep, promises;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                _context6.next = 4;
                return Promise.all(promises);

              case 4:
                _context6.next = 6;
                return notifyViewReady(opts.viewIsReady, opts.enteringEl);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function waitForReady(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }();

    var notifyViewReady =
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(viewIsReady, enteringEl) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!viewIsReady) {
                  _context7.next = 3;
                  break;
                }

                _context7.next = 3;
                return viewIsReady(enteringEl);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function notifyViewReady(_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }();

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback;
      var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
          return resolve(currentStep === 1);
        });
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady =
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(el) {
        var element, stencilEl;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                element = el;

                if (!element) {
                  _context8.next = 10;
                  break;
                }

                if (!(element.componentOnReady != null)) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return element.componentOnReady();

              case 5:
                stencilEl = _context8.sent;

                if (!(stencilEl != null)) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return");

              case 8:
                _context8.next = 10;
                return Promise.all(Array.from(element.children).map(deepReady));

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deepReady(_x15) {
        return _ref8.apply(this, arguments);
      };
    }();

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    var getIonPageElement = function getIonPageElement(element) {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigs28520d80Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL =
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context9.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context9.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context9.abrupt("return", router.push(url, direction));

              case 5:
                return _context9.abrupt("return", false);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function openURL(_x16, _x17, _x18) {
        return _ref10.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/explore-container/explore-container.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExploreContainerComponent =
    /*#__PURE__*/
    function () {
      function ExploreContainerComponent() {
        _classCallCheck(this, ExploreContainerComponent);
      }

      _createClass(ExploreContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExploreContainerComponent;
    }();

    ExploreContainerComponent.ɵfac = function ExploreContainerComponent_Factory(t) {
      return new (t || ExploreContainerComponent)();
    };

    ExploreContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExploreContainerComponent,
      selectors: [["app-explore-container"]],
      inputs: {
        name: "name"
      },
      decls: 7,
      vars: 1,
      consts: [["id", "container"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://ionicframework.com/docs/components"]],
      template: function ExploreContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Explore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UI Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        }
      },
      styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93ZXZzdmlydXMtZmUvc3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-explore-container',
          templateUrl: './explore-container.component.html',
          styleUrls: ['./explore-container.component.scss']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/explore-container/explore-container.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/explore-container/explore-container.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
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


    var _explore_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./explore-container.component */
    "./src/app/explore-container/explore-container.component.ts");

    var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
      _classCallCheck(this, ExploreContainerComponentModule);
    };

    ExploreContainerComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExploreContainerComponentModule
    });
    ExploreContainerComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExploreContainerComponentModule_Factory(t) {
        return new (t || ExploreContainerComponentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExploreContainerComponentModule, {
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreContainerComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]],
          exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]]
        }]
      }], null, null);
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
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.http.get("http://".concat(window.location.hostname, ":8080/mood?id=").concat(userId)).toPromise();

                  case 2:
                    return _context10.abrupt("return", _context10.sent);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
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

  }
}]);
//# sourceMappingURL=common-es5.js.map