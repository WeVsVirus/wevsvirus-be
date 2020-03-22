function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-sign-up-page-user-sign-up-page-module"], {
  /***/
  "./src/app/user-sign-up-page/user-sign-up-form/user-sign-up-form.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/user-sign-up-page/user-sign-up-form/user-sign-up-form.component.ts ***!
    \************************************************************************************/

  /*! exports provided: UserSignUpFormComponent */

  /***/
  function srcAppUserSignUpPageUserSignUpFormUserSignUpFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSignUpFormComponent", function () {
      return UserSignUpFormComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserSignUpFormComponent =
    /*#__PURE__*/
    function () {
      function UserSignUpFormComponent(userService, alertController, router) {
        _classCallCheck(this, UserSignUpFormComponent);

        this.userService = userService;
        this.alertController = alertController;
        this.router = router;
        this.signUpData = {
          yearOfBirth: null,
          gender: null,
          plz: '',
          householdSize: null,
          pet: null
        };
      }

      _createClass(UserSignUpFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "radioSelect",
        value: function radioSelect($event, attributeToChange) {
          this.signUpData[attributeToChange] = $event.detail.value;
        }
      }, {
        key: "sendSignUp",
        value: function sendSignUp() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.signUpData.yearOfBirth && this.signUpData.gender && this.signUpData.plz && this.signUpData.householdSize && this.signUpData.pet !== null) {
                      this.userService.signUp(this.signUpData).then(function () {
                        _this.router.navigate(['']);
                      }).catch(function () {
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
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return UserSignUpFormComponent;
    }();

    UserSignUpFormComponent.ɵfac = function UserSignUpFormComponent_Factory(t) {
      return new (t || UserSignUpFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    UserSignUpFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserSignUpFormComponent,
      selectors: [["app-user-sign-up-form"]],
      decls: 65,
      vars: 19,
      consts: [[3, "ngSubmit"], [2, "margin-top", "1rem"], [1, "form-header"], ["placeholder", "Bitte w\xE4hlen", "interface", "popover", 3, "ionChange"], ["value", "FEMALE"], ["value", "MALE"], ["value", "DIVERS"], ["value", "NONE"], [3, "value"], ["position", "stacked"], ["type", "string", "inputmode", "numeric", "name", "yearOfBirth", "placeholder", "YYYY", 3, "maxlength", "minlength", "ngModel", "ngModelChange"], ["position", "floating"], ["type", "string", "name", "plz", "inputmode", "numeric", "placeholder", "123", 3, "maxlength", "minlength", "ngModel", "ngModelChange"], [1, "button"], ["size", "12"], ["type", "submit", "color", "success", "shape", "round"]],
      template: function UserSignUpFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserSignUpFormComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.sendSignUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-group", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-text", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Um deine Stimmung auswerten zu k\xF6nnen, ben\xF6tigen wir ein paar wenige Angaben von dir. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Geschlecht");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function UserSignUpFormComponent_Template_ion_select_ionChange_8_listener($event) {
            return ctx.signUpData.gender = $event.detail.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-select-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Weiblich");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-select-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "M\xE4nnlich");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-select-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u200DDivers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-select-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Keine Angabe");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Personen im Haushalt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function UserSignUpFormComponent_Template_ion_select_ionChange_20_listener($event) {
            return ctx.signUpData.householdSize = $event.detail.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Nur ich");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Ich + 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ich + 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Ich + 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Ich + 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Ich + 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Ich + 6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Ich + 7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Ich + 8");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Ich + 9");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Ich + 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Hast du Haustiere?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function UserSignUpFormComponent_Template_ion_select_ionChange_46_listener($event) {
            return ctx.signUpData.pet = $event.detail.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Ja");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Nein");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " In welchem Jahr bist du geboren? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserSignUpFormComponent_Template_ion_input_ngModelChange_54_listener($event) {
            return ctx.signUpData.yearOfBirth = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Wie lauten die ersten 3 Ziffern deiner PLZ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserSignUpFormComponent_Template_ion_input_ngModelChange_59_listener($event) {
            return ctx.signUpData.plz = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-col", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " weiter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxlength", 4)("minlength", 4)("ngModel", ctx.signUpData.yearOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxlength", 3)("minlength", 3)("ngModel", ctx.signUpData.plz);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]],
      styles: [".input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\n.multiline[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93ZXZzdmlydXMtZmUvc3JjL2FwcC91c2VyLXNpZ24tdXAtcGFnZS91c2VyLXNpZ24tdXAtZm9ybS91c2VyLXNpZ24tdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1zaWduLXVwLXBhZ2UvdXNlci1zaWduLXVwLWZvcm0vdXNlci1zaWduLXVwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyLXNpZ24tdXAtcGFnZS91c2VyLXNpZ24tdXAtZm9ybS91c2VyLXNpZ24tdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5tdWx0aWxpbmUgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5tdWx0aWxpbmUgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserSignUpFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-user-sign-up-form',
          templateUrl: './user-sign-up-form.component.html',
          styleUrls: ['./user-sign-up-form.component.scss']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-sign-up-page/user-sign-up-page-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/user-sign-up-page/user-sign-up-page-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: UserSignUpPagePageRoutingModule */

  /***/
  function srcAppUserSignUpPageUserSignUpPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSignUpPagePageRoutingModule", function () {
      return UserSignUpPagePageRoutingModule;
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


    var _user_sign_up_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-sign-up-page.page */
    "./src/app/user-sign-up-page/user-sign-up-page.page.ts");

    var routes = [{
      path: '',
      component: _user_sign_up_page_page__WEBPACK_IMPORTED_MODULE_2__["UserSignUpPagePage"]
    }];

    var UserSignUpPagePageRoutingModule = function UserSignUpPagePageRoutingModule() {
      _classCallCheck(this, UserSignUpPagePageRoutingModule);
    };

    UserSignUpPagePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserSignUpPagePageRoutingModule
    });
    UserSignUpPagePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserSignUpPagePageRoutingModule_Factory(t) {
        return new (t || UserSignUpPagePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSignUpPagePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignUpPagePageRoutingModule, [{
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
  "./src/app/user-sign-up-page/user-sign-up-page.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user-sign-up-page/user-sign-up-page.module.ts ***!
    \***************************************************************/

  /*! exports provided: UserSignUpPagePageModule */

  /***/
  function srcAppUserSignUpPageUserSignUpPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSignUpPagePageModule", function () {
      return UserSignUpPagePageModule;
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


    var _user_sign_up_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-sign-up-page-routing.module */
    "./src/app/user-sign-up-page/user-sign-up-page-routing.module.ts");
    /* harmony import */


    var _user_sign_up_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-sign-up-page.page */
    "./src/app/user-sign-up-page/user-sign-up-page.page.ts");
    /* harmony import */


    var _user_sign_up_form_user_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-sign-up-form/user-sign-up-form.component */
    "./src/app/user-sign-up-page/user-sign-up-form/user-sign-up-form.component.ts");

    var UserSignUpPagePageModule = function UserSignUpPagePageModule() {
      _classCallCheck(this, UserSignUpPagePageModule);
    };

    UserSignUpPagePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserSignUpPagePageModule
    });
    UserSignUpPagePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserSignUpPagePageModule_Factory(t) {
        return new (t || UserSignUpPagePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _user_sign_up_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserSignUpPagePageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSignUpPagePageModule, {
        declarations: [_user_sign_up_page_page__WEBPACK_IMPORTED_MODULE_5__["UserSignUpPagePage"], _user_sign_up_form_user_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__["UserSignUpFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _user_sign_up_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserSignUpPagePageRoutingModule"]],
        exports: [_user_sign_up_form_user_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__["UserSignUpFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignUpPagePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _user_sign_up_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserSignUpPagePageRoutingModule"]],
          declarations: [_user_sign_up_page_page__WEBPACK_IMPORTED_MODULE_5__["UserSignUpPagePage"], _user_sign_up_form_user_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__["UserSignUpFormComponent"]],
          exports: [_user_sign_up_form_user_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__["UserSignUpFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-sign-up-page/user-sign-up-page.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user-sign-up-page/user-sign-up-page.page.ts ***!
    \*************************************************************/

  /*! exports provided: UserSignUpPagePage */

  /***/
  function srcAppUserSignUpPageUserSignUpPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSignUpPagePage", function () {
      return UserSignUpPagePage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _user_sign_up_form_user_sign_up_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-sign-up-form/user-sign-up-form.component */
    "./src/app/user-sign-up-page/user-sign-up-form/user-sign-up-form.component.ts");

    var UserSignUpPagePage =
    /*#__PURE__*/
    function () {
      function UserSignUpPagePage() {
        _classCallCheck(this, UserSignUpPagePage);
      }

      _createClass(UserSignUpPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserSignUpPagePage;
    }();

    UserSignUpPagePage.ɵfac = function UserSignUpPagePage_Factory(t) {
      return new (t || UserSignUpPagePage)();
    };

    UserSignUpPagePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserSignUpPagePage,
      selectors: [["app-user-sign-up-page"]],
      decls: 2,
      vars: 0,
      template: function UserSignUpPagePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-sign-up-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _user_sign_up_form_user_sign_up_form_component__WEBPACK_IMPORTED_MODULE_2__["UserSignUpFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2lnbi11cC1wYWdlL3VzZXItc2lnbi11cC1wYWdlLnBhZ2Uuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignUpPagePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-sign-up-page',
          templateUrl: './user-sign-up-page.page.html',
          styleUrls: ['./user-sign-up-page.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=user-sign-up-page-user-sign-up-page-module-es5.js.map