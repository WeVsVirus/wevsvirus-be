function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/form/sign-up-form.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/form/sign-up-form.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupFormSignUpFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-title>Wie Geht's?</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content>\n    <form (ngSubmit)=\"sendSignUp()\">\n\n        <ion-item-group>\n            <ion-item>\n                <ion-text class=\"form-header\">\n                    Um deine Stimmung auswerten zu können, benötigen\n                    wir ein paar wenige Angaben von dir.\n                </ion-text>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Geschlecht</ion-label>\n                <ion-select (ionChange)=\"signUpData.gender = $event.detail.value\" placeholder=\"Bitte wählen\"\n                            interface=\"popover\">^\n                    <ion-select-option value=\"FEMALE\">Weiblich</ion-select-option>\n                    <ion-select-option value=\"MALE\">Männlich</ion-select-option>\n                    <ion-select-option value=\"DIVERS\">‍Divers</ion-select-option>\n                    <ion-select-option value=\"NONE\">Keine Angabe</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Personen im Haushalt</ion-label>\n                <ion-select (ionChange)=\"signUpData.householdSize = $event.detail.value\" placeholder=\"Bitte wählen\"\n                            interface=\"popover\">\n                    <ion-select-option [value]=\"1\">Nur ich</ion-select-option>\n                    <ion-select-option [value]=\"2\">Ich + 1</ion-select-option>\n                    <ion-select-option [value]=\"3\">Ich + 2</ion-select-option>\n                    <ion-select-option [value]=\"4\">Ich + 3</ion-select-option>\n                    <ion-select-option [value]=\"5\">Ich + 4</ion-select-option>\n                    <ion-select-option [value]=\"6\">Ich + 5</ion-select-option>\n                    <ion-select-option [value]=\"7\">Ich + 6</ion-select-option>\n                    <ion-select-option [value]=\"8\">Ich + 7</ion-select-option>\n                    <ion-select-option [value]=\"9\">Ich + 8</ion-select-option>\n                    <ion-select-option [value]=\"10\">Ich + 9</ion-select-option>\n                    <ion-select-option [value]=\"11\">Ich + 10</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Hast du Haustiere?</ion-label>\n                <ion-select (ionChange)=\"signUpData.pet = $event.detail.value\" placeholder=\"Bitte wählen\"\n                            interface=\"popover\">\n                    <ion-select-option [value]=\"true\">Ja</ion-select-option>\n                    <ion-select-option [value]=\"false\">Nein</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"stacked\">\n                    In welchem Jahr bist du geboren?\n                </ion-label>\n\n                <ion-input\n                        type=\"string\"\n                        inputmode=\"numeric\"\n                        name=\"yearOfBirth\"\n                        placeholder=\"JJJJ\"\n                        [maxlength]=\"4\"\n                        [minlength]=\"4\"\n                        [(ngModel)]=\"signUpData.yearOfBirth\"\n                >\n                </ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\">\n                    Wie lauten die ersten 3 Ziffern deiner PLZ?<br/>\n                </ion-label>\n\n                <ion-input\n                        type=\"string\"\n                        name=\"plz\"\n                        inputmode=\"numeric\"\n                        placeholder=\"123\"\n                        [maxlength]=\"3\"\n                        [minlength]=\"3\"\n                        [(ngModel)]=\"signUpData.plz\"\n                >\n                </ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label style=\"white-space: normal; font-size: 0.8rem\">\n                    Ich habe die <a href=\"javascript:void(0)\" (click)=\"showPrivacyLayer()\">Datenschutzerklärung</a>\n                    gelesen und akzeptiere sie.\n                </ion-label>\n\n                <ion-checkbox #cb [checked]=\"false\"></ion-checkbox>\n            </ion-item>\n\n        </ion-item-group>\n\n        <ion-grid>\n            <ion-row class=\"button\">\n                <ion-col size=\"12\">\n                    <ion-button type=\"submit\" shape=\"round\" [disabled]=\"!cb.checked\">weiter</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-title>Wie Geht's?</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n    <ion-slides #slider pager=\"true\">\n\n        <ion-slide>\n            <div class=\"slide-image\"></div>\n            <div class=\"slide-content\">\n                <p>Schätze täglich Deine Stimmung ein und hilf damit Dir und anderen, ein aktuelles Stimmungsbild zu\n                    erstellen.</p>\n                <ion-button (click)=\"next($event)\" fill=\"clear\">Los gehts\n                    <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n                </ion-button>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"slide-image\"></div>\n            <div class=\"slide-content\">\n                <p>Hier sieht Du, wie sich die Stimmungslage im Land entwickelt - und wie es Deinen Mitmenschen auch in\n                    Deiner Region geht. Damit wir gemeinsam gegensteuern können. </p>\n                <ion-button (click)=\"next($event)\" fill=\"clear\">Cool ich bin dabei\n                    <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n                </ion-button>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"slide-image\"></div>\n            <div class=\"slide-content\">\n                <p>Alle Eingaben erfolgen anonymisiert und erlauben keine Rückschlüsse auf Deine Person. Sie dienen nur der\n                    Ermittlung der Stimmung in Deiner Region und wissenschaftlichen Analysen.</p>\n                <ion-button\n                        routerLink=\"form\"\n                        type=\"submit\"\n                        fill=\"clear\"\n                >\n                    Super\n                    <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n                </ion-button>\n            </div>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/signup/form/sign-up-form.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/signup/form/sign-up-form.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupFormSignUpFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input {\n  border: 1px solid #ccc;\n}\n\n.multiline ion-label {\n  white-space: normal;\n}\n\n.form-header {\n  padding-bottom: 1.5rem;\n}\n\nion-item {\n  margin-top: 1.2rem;\n  margin-bottom: 1.2rem;\n}\n\n.button {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL3NpZ251cC9mb3JtL3NpZ24tdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL2Zvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9mb3JtL3NpZ24tdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5tdWx0aWxpbmUgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5tdWx0aWxpbmUgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/signup/form/sign-up-form.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/signup/form/sign-up-form.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignUpFormComponent */

  /***/
  function srcAppSignupFormSignUpFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function () {
      return SignUpFormComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_privacy_privacy_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modal/privacy/privacy.modal */
    "./src/app/modal/privacy/privacy.modal.ts");

    var SignUpFormComponent = /*#__PURE__*/function () {
      function SignUpFormComponent(userService, alertController, modalController, router) {
        _classCallCheck(this, SignUpFormComponent);

        this.userService = userService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.router = router;
        this.signUpData = {
          yearOfBirth: null,
          gender: null,
          plz: '',
          householdSize: null,
          pet: null
        };
        this.privacyAccepted = false;
      }

      _createClass(SignUpFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "radioSelect",
        value: function radioSelect($event, attributeToChange) {
          this.signUpData[attributeToChange] = $event.detail.value;
        }
      }, {
        key: "showPrivacyLayer",
        value: function showPrivacyLayer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modal_privacy_privacy_modal__WEBPACK_IMPORTED_MODULE_5__["PrivacyModal"]
                    });

                  case 2:
                    _context.sent.present();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sendSignUp",
        value: function sendSignUp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.signUpData.yearOfBirth && this.signUpData.gender && this.signUpData.plz && this.signUpData.householdSize && this.signUpData.pet !== null) {
                      this.userService.signUp(this.signUpData).then(function () {
                        _this.router.navigate(['']);
                      })["catch"](function () {
                        _this.alertController.create({
                          header: 'Fehler',
                          message: 'Leider ist etwas schief gelaufen. Bitte versuchen Sie es später nochmal.',
                          buttons: ['OK']
                        }).then(function (alert) {
                          alert.present();
                        });
                      });
                    } else {
                      // invalid form
                      this.alertController.create({
                        header: 'Eingaben unvollständig',
                        message: 'Bitte beantworten Sie sämtliche Fragen.',
                        buttons: ['OK']
                      }).then(function (alert) {
                        alert.present();
                      });
                    }

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SignUpFormComponent;
    }();

    SignUpFormComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SignUpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-sign-up-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/form/sign-up-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up-form.component.scss */
      "./src/app/signup/form/sign-up-form.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], SignUpFormComponent);
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");
    /* harmony import */


    var _form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form/sign-up-form.component */
    "./src/app/signup/form/sign-up-form.component.ts");

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }, {
        path: 'form',
        component: _form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_4__["SignUpFormComponent"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");
    /* harmony import */


    var _form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./form/sign-up-form.component */
    "./src/app/signup/form/sign-up-form.component.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"], _form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_7__["SignUpFormComponent"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\nion-slides ion-slide {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nion-slides ion-slide .slide-image {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  flex-grow: 1;\n  width: 100%;\n}\nion-slides ion-slide .slide-content {\n  margin-bottom: 30px;\n  min-height: 30vh;\n}\nion-slides ion-slide:nth-child(1) .slide-image {\n  background-image: url('Onboarding_01.png');\n}\nion-slides ion-slide:nth-child(2) .slide-image {\n  background-image: url('Onboarding_02.png');\n}\nion-slides ion-slide:nth-child(3) .slide-image {\n  background-image: url('Onboarding_03.png');\n}\n.swiper-slide {\n  display: block;\n  height: 100%;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.swiper-slide img {\n  width: 100%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\nb {\n  font-weight: 500;\n}\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\np b {\n  color: var(--ion-text-color, #000000);\n}\n.user-id {\n  background: #e6e6e6;\n  padding: 0.3rem;\n  font-weight: normal;\n  font-size: 1.3rem;\n}\n.slide img {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.slide img + h2 {\n  margin-top: 0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93aWVnZWh0cy9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDRSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FOO0FER0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDRE47QURNRTtFQUNFLDBDQUFBO0FDSko7QURPRTtFQUNFLDBDQUFBO0FDTEo7QURRRTtFQUNFLDBDQUFBO0FDTko7QURVQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0FDUEY7QURVQTtFQUdFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDVEY7QURZQTtFQUNFLGdCQUFBO0FDVEY7QURZQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ1RGO0FEWUE7RUFDRSxxQ0FBQTtBQ1RGO0FEWUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDVEY7QURZQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNURjtBRFdFO0VBQ0UsNkJBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcblxuICBpb24tc2xpZGUge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5zbGlkZS1pbWFnZSB7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5zbGlkZS1jb250ZW50IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMHZoO1xuICAgIH1cblxuICB9XG5cbiAgaW9uLXNsaWRlOm50aC1jaGlsZCgxKSAuc2xpZGUtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9PbmJvYXJkaW5nXzAxLnBuZyk7XG4gIH1cblxuICBpb24tc2xpZGU6bnRoLWNoaWxkKDIpIC5zbGlkZS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL09uYm9hcmRpbmdfMDIucG5nKTtcbiAgfVxuXG4gIGlvbi1zbGlkZTpudGgtY2hpbGQoMykgLnNsaWRlLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvT25ib2FyZGluZ18wMy5wbmcpO1xuICB9XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIC8vIG1heC1oZWlnaHQ6IDUwJTtcbiAgLy8gbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA2MHB4IDAgNDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xufVxuXG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG4udXNlci1pZCB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5zbGlkZSBpbWcge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICArIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuIiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtaW4taGVpZ2h0OiAzMHZoO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGU6bnRoLWNoaWxkKDEpIC5zbGlkZS1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9PbmJvYXJkaW5nXzAxLnBuZyk7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZTpudGgtY2hpbGQoMikgLnNsaWRlLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL09uYm9hcmRpbmdfMDIucG5nKTtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlOm50aC1jaGlsZCgzKSAuc2xpZGUtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvT25ib2FyZGluZ18wMy5wbmcpO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA2MHB4IDAgNDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xufVxuXG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG4udXNlci1pZCB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5zbGlkZSBpbWcge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5zbGlkZSBpbWcgKyBoMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(userService) {
        _classCallCheck(this, SignupPage);

        this.userService = userService;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "next",
        value: function next(e) {
          // e.preventDefault();
          // e.stopPropagation();
          // this.slider.lockSwipes(true)
          this.slider.slideNext();
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], SignupPage.prototype, "slider", void 0);
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map