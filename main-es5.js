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


    __webpack_exports__["default"] = "<div class=\"all\">\n  <cp111></cp111>\n\n  <cd></cd>\n \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/corona-component/corona-component.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona-component/corona-component.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoronaComponentCoronaComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"country\"><select (change)=\"sendMessage()\" [(ngModel)]=\"country\" >\n    <option value=\"all\">All</option>\n    <option value=\"Afghanistan\">Afghanistan</option>\n    <option value=\"Albania\">Albania</option>\n    <option value=\"Algeria\">Algeria</option>\n    <option value=\"American Samoa\">American Samoa</option>\n    <option value=\"Andorra\">Andorra</option>\n    <option value=\"Angola\">Angola</option>\n    <option value=\"Anguilla\">Anguilla</option>\n    <option value=\"Argentina\">Argentina</option>\n    <option value=\"Armenia\">Armenia</option>\n    <option value=\"Aruba\">Aruba</option>\n    <option value=\"Australia\">Australia</option>\n    <option value=\"Austria\">Austria</option>\n    <option value=\"Azerbaijan\">Azerbaijan</option>\n    <option value=\"Bahamas\">Bahamas</option>\n    <option value=\"Bahrain\">Bahrain</option>\n    <option value=\"Bangladesh\">Bangladesh</option>\n    <option value=\"Barbados\">Barbados</option>\n    <option value=\"Belarus\">Belarus</option>\n    <option value=\"Belgium\">Belgium</option>\n    <option value=\"Belize\">Belize</option>\n    <option value=\"Benin\">Benin</option>\n    <option value=\"Bermuda\">Bermuda</option>\n    <option value=\"Bhutan\">Bhutan</option>\n    <option value=\"Bolivia\">Bolivia</option>\n    <option value=\"Bonaire\">Bonaire</option>\n    <option value=\"Bosnia & Herzegovina\">Bosnia & Herzegovina</option>\n    <option value=\"Botswana\">Botswana</option>\n    <option value=\"Brazil\">Brazil</option>\n    <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\n    <option value=\"Brunei\">Brunei</option>\n    <option value=\"Bulgaria\">Bulgaria</option>\n    <option value=\"Burkina Faso\">Burkina Faso</option>\n    <option value=\"Burundi\">Burundi</option>\n    <option value=\"Cambodia\">Cambodia</option>\n    <option value=\"Cameroon\">Cameroon</option>\n    <option value=\"Canada\">Canada</option>\n    <option value=\"Canary Islands\">Canary Islands</option>\n    <option value=\"Cape Verde\">Cape Verde</option>\n    <option value=\"Cayman Islands\">Cayman Islands</option>\n    <option value=\"Central African Republic\">Central African Republic</option>\n    <option value=\"Chad\">Chad</option>\n    <option value=\"Channel Islands\">Channel Islands</option>\n    <option value=\"Chile\">Chile</option>\n    <option value=\"China\">China</option>\n    <option value=\"Christmas Island\">Christmas Island</option>\n    <option value=\"Cocos Island\">Cocos Island</option>\n    <option value=\"Colombia\">Colombia</option>\n    <option value=\"Comoros\">Comoros</option>\n    <option value=\"Congo\">Congo</option>\n    <option value=\"Cook Islands\">Cook Islands</option>\n    <option value=\"Costa Rica\">Costa Rica</option>\n    <option value=\"Cote DIvoire\">Cote DIvoire</option>\n    <option value=\"Croatia\">Croatia</option>\n    <option value=\"Cuba\">Cuba</option>\n    <option value=\"Curaco\">Curacao</option>\n    <option value=\"Cyprus\">Cyprus</option>\n    <option value=\"Czech Republic\">Czech Republic</option>\n    <option value=\"Denmark\">Denmark</option>\n    <option value=\"Djibouti\">Djibouti</option>\n    <option value=\"Dominica\">Dominica</option>\n    <option value=\"Dominican Republic\">Dominican Republic</option>\n    <option value=\"East Timor\">East Timor</option>\n    <option value=\"Ecuador\">Ecuador</option>\n    <option value=\"Egypt\">Egypt</option>\n    <option value=\"El Salvador\">El Salvador</option>\n    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n    <option value=\"Eritrea\">Eritrea</option>\n    <option value=\"Estonia\">Estonia</option>\n    <option value=\"Ethiopia\">Ethiopia</option>\n    <option value=\"Falkland Islands\">Falkland Islands</option>\n    <option value=\"Faroe Islands\">Faroe Islands</option>\n    <option value=\"Fiji\">Fiji</option>\n    <option value=\"Finland\">Finland</option>\n    <option value=\"France\">France</option>\n    <option value=\"Faeroe Islands\">Faeroe Islands</option>\n    <option value=\"French Guiana\">French Guiana</option>\n    <option value=\"French Polynesia\">French Polynesia</option>\n    <option value=\"French Southern Ter\">French Southern Ter</option>\n    <option value=\"Gabon\">Gabon</option>\n    <option value=\"Gambia\">Gambia</option>\n    <option value=\"Georgia\">Georgia</option>\n    <option value=\"Germany\">Germany</option>\n    <option value=\"Ghana\">Ghana</option>\n    <option value=\"Gibraltar\">Gibraltar</option>\n    <option value=\"Great Britain\">Great Britain</option>\n    <option value=\"Greece\">Greece</option>\n    <option value=\"Greenland\">Greenland</option>\n    <option value=\"Grenada\">Grenada</option>\n    <option value=\"Guadeloupe\">Guadeloupe</option>\n    <option value=\"Guam\">Guam</option>\n    <option value=\"Guatemala\">Guatemala</option>\n    <option value=\"Guinea\">Guinea</option>\n    <option value=\"Guyana\">Guyana</option>\n    <option value=\"Haiti\">Haiti</option>\n    <option value=\"Hawaii\">Hawaii</option>\n    <option value=\"Honduras\">Honduras</option>\n    <option value=\"Hong Kong\">Hong Kong</option>\n    <option value=\"Hungary\">Hungary</option>\n    <option value=\"Iceland\">Iceland</option>\n    <option value=\"Indonesia\">Indonesia</option>\n    <option value=\"India\">India</option>\n    <option value=\"Iran\">Iran</option>\n    <option value=\"Iraq\">Iraq</option>\n    <option value=\"Ireland\">Ireland</option>\n    <option value=\"Isle of Man\">Isle of Man</option>\n    <option value=\"Israel\">Israel</option>\n    <option value=\"Italy\">Italy</option>\n    <option value=\"Jamaica\">Jamaica</option>\n    <option value=\"Japan\">Japan</option>\n    <option value=\"Jordan\">Jordan</option>\n    <option value=\"Kazakhstan\">Kazakhstan</option>\n    <option value=\"Kenya\">Kenya</option>\n    <option value=\"Kiribati\">Kiribati</option>\n    <option value=\"N. Korea \">Korea North</option>\n    <option value=\"S. Korea\">Korea South</option>\n    <option value=\"Kuwait\">Kuwait</option>\n    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n    <option value=\"Laos\">Laos</option>\n    <option value=\"Latvia\">Latvia</option>\n    <option value=\"Lebanon\">Lebanon</option>\n    <option value=\"Lesotho\">Lesotho</option>\n    <option value=\"Liberia\">Liberia</option>\n    <option value=\"Libya\">Libya</option>\n    <option value=\"Liechtenstein\">Liechtenstein</option>\n    <option value=\"Lithuania\">Lithuania</option>\n    <option value=\"Luxembourg\">Luxembourg</option>\n    <option value=\"Macau\">Macau</option>\n    <option value=\"Macedonia\">Macedonia</option>\n    <option value=\"Madagascar\">Madagascar</option>\n    <option value=\"Malaysia\">Malaysia</option>\n    <option value=\"Malawi\">Malawi</option>\n    <option value=\"Maldives\">Maldives</option>\n    <option value=\"Mali\">Mali</option>\n    <option value=\"Malta\">Malta</option>\n    <option value=\"Marshall Islands\">Marshall Islands</option>\n    <option value=\"Martinique\">Martinique</option>\n    <option value=\"Mauritania\">Mauritania</option>\n    <option value=\"Mauritius\">Mauritius</option>\n    <option value=\"Mayotte\">Mayotte</option>\n    <option value=\"Mexico\">Mexico</option>\n    <option value=\"Midway Islands\">Midway Islands</option>\n    <option value=\"Moldova\">Moldova</option>\n    <option value=\"Monaco\">Monaco</option>\n    <option value=\"Mongolia\">Mongolia</option>\n    <option value=\"Montserrat\">Montserrat</option>\n    <option value=\"Morocco\">Morocco</option>\n    <option value=\"Mozambique\">Mozambique</option>\n    <option value=\"Myanmar\">Myanmar</option>\n    <option value=\"Nambia\">Nambia</option>\n    <option value=\"Nauru\">Nauru</option>\n    <option value=\"Nepal\">Nepal</option>\n    <option value=\"Netherland Antilles\">Netherland Antilles</option>\n    <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\n    <option value=\"Nevis\">Nevis</option>\n    <option value=\"New Caledonia\">New Caledonia</option>\n    <option value=\"New Zealand\">New Zealand</option>\n    <option value=\"Nicaragua\">Nicaragua</option>\n    <option value=\"Niger\">Niger</option>\n    <option value=\"Nigeria\">Nigeria</option>\n    <option value=\"Niue\">Niue</option>\n    <option value=\"Norfolk Island\">Norfolk Island</option>\n    <option value=\"Norway\">Norway</option>\n    <option value=\"Oman\">Oman</option>\n    <option value=\"Pakistan\">Pakistan</option>\n    <option value=\"Palau Island\">Palau Island</option>\n    <option value=\"Palestine\">Palestine</option>\n    <option value=\"Panama\">Panama</option>\n    <option value=\"Papua New Guinea\">Papua New Guinea</option>\n    <option value=\"Paraguay\">Paraguay</option>\n    <option value=\"Peru\">Peru</option>\n    <option value=\"Phillipines\">Philippines</option>\n    <option value=\"Pitcairn Island\">Pitcairn Island</option>\n    <option value=\"Poland\">Poland</option>\n    <option value=\"Portugal\">Portugal</option>\n    <option value=\"Puerto Rico\">Puerto Rico</option>\n    <option value=\"Qatar\">Qatar</option>\n    <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\n    <option value=\"Republic of Serbia\">Republic of Serbia</option>\n    <option value=\"Reunion\">Reunion</option>\n    <option value=\"Romania\">Romania</option>\n    <option value=\"Russia\">Russia</option>\n    <option value=\"Rwanda\">Rwanda</option>\n    <option value=\"Samoa\">Samoa</option>\n    <option value=\"Samoa American\">Samoa American</option>\n    <option value=\"San Marino\">San Marino</option>\n    <option value=\"Sao Tome & Principe\">Sao Tome & Principe</option>\n    <option value=\"Saudi Arabia\">Saudi Arabia</option>\n    <option value=\"Senegal\">Senegal</option>\n    <option value=\"Seychelles\">Seychelles</option>\n    <option value=\"Sierra Leone\">Sierra Leone</option>\n    <option value=\"Singapore\">Singapore</option>\n    <option value=\"Slovakia\">Slovakia</option>\n    <option value=\"Slovenia\">Slovenia</option>\n    <option value=\"Solomon Islands\">Solomon Islands</option>\n    <option value=\"Somalia\">Somalia</option>\n    <option value=\"South Africa\">South Africa</option>\n    <option value=\"Spain\">Spain</option>\n    <option value=\"Saint Pierre Miquelon\">Saint Pierre Miquelon</option>\n    <option value=\"Sri Lanka\">Sri Lanka</option>\n    <option value=\"Sudan\">Sudan</option>\n    <option value=\"Suriname\">Suriname</option>\n    <option value=\"Swaziland\">Swaziland</option>\n    <option value=\"Sweden\">Sweden</option>\n    <option value=\"Switzerland\">Switzerland</option>\n    <option value=\"Syria\">Syria</option>\n    <option value=\"Tahiti\">Tahiti</option>\n    <option value=\"Taiwan\">Taiwan</option>\n    <option value=\"Tajikistan\">Tajikistan</option>\n    <option value=\"Tanzania\">Tanzania</option>\n    <option value=\"Thailand\">Thailand</option>\n    <option value=\"Togo\">Togo</option>\n    <option value=\"Tokelau\">Tokelau</option>\n    <option value=\"Tonga\">Tonga</option>\n    <option value=\"Trinidad & Tobago\">Trinidad & Tobago</option>\n    <option value=\"Tunisia\">Tunisia</option>\n    <option value=\"Turkey\">Turkey</option>\n    <option value=\"Turkmenistan\">Turkmenistan</option>\n    <option value=\"Turks & Caicos Is\">Turks & Caicos Is</option>\n    <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n    <option value=\"Tuvalu\">Tuvalu</option>\n    <option value=\"Uganda\">Uganda</option>\n    <option value=\"UK\">United Kingdom</option>\n    <option value=\"Ukraine\">Ukraine</option>\n    <option value=\"UAE\">United Arab Emirates</option>\n    <option value=\"USA\">United States of America</option>\n    <option value=\"Uraguay\">Uruguay</option>\n    <option value=\"Uzbekistan\">Uzbekistan</option>\n    <option value=\"Vanuatu\">Vanuatu</option>\n    <option value=\"Vatican City State\">Vatican City State</option>\n    <option value=\"Venezuela\">Venezuela</option>\n    <option value=\"Vietnam\">Vietnam</option>\n    <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\n    <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\n    <option value=\"Wake Island\">Wake Island</option>\n    <option value=\"Wallis & Futana Is\">Wallis & Futana Is</option>\n    <option value=\"Yemen\">Yemen</option>\n    <option value=\"Zaire\">Zaire</option>\n    <option value=\"Zambia\">Zambia</option>\n    <option value=\"Zimbabwe\">Zimbabwe</option>\n</select> <br>\n<h3><p class=\"coronaText\">Corona Virus Tracker!<i class=\"fas fa-globe-americas fa-5x\" aria-hidden=\"true\"></i></p></h3>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/corona-data/corona-data.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corona-data/corona-data.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoronaDataCoronaDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  class=\"flex-container\">\n  \n    <div  class=\"flex-item1\">\n        <i class='fas fa-virus fa-3x' style='font-size:36px'></i>\n        <p>Confirmed Cases</p>\n        <p>{{Corona.cases}}</p>\n    </div>\n\n\n    <div class=\"flex-item2\">\n        <i class=\"fa fa-heartbeat fa-3x\" aria-hidden=\"true\" style=\"color: red;\"></i>\n            <p>Recovered Cases</p>\n            <p>{{Corona.recovered}}</p>\n            \n    </div>\n\n\n    <div class=\"flex-item3\">\n        <i class=\"fas fa-skull-crossbones fa-3x\" style=\"color: white;\"></i>\n            <p>Total Deaths</p>\n            <p>{{Corona.deaths}}</p> \n    </div>\n    \n</div>\n<div><p class=\"footer\">Developed by Othman Moussawel ©</p></div>\n";
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

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".all{\r\n    width: 100%;\r\n    padding: 1em;\r\n    text-align: center;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn0iXX0= */";
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Corona';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _corona_data_corona_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./corona-data/corona-data.component */
    "./src/app/corona-data/corona-data.component.ts");
    /* harmony import */


    var _corona_component_corona_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./corona-component/corona-component.component */
    "./src/app/corona-component/corona-component.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _corona_data_corona_data_component__WEBPACK_IMPORTED_MODULE_5__["CoronaDataComponent"], _corona_component_corona_component_component__WEBPACK_IMPORTED_MODULE_6__["CoronaComponentComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/corona-component/corona-component.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/corona-component/corona-component.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoronaComponentCoronaComponentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".coronaText{\r\n    color: #fff;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yb25hLWNvbXBvbmVudC9jb3JvbmEtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Nvcm9uYS1jb21wb25lbnQvY29yb25hLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvcm9uYVRleHR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/corona-component/corona-component.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/corona-component/corona-component.component.ts ***!
    \****************************************************************/

  /*! exports provided: CoronaComponentComponent */

  /***/
  function srcAppCoronaComponentCoronaComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoronaComponentComponent", function () {
      return CoronaComponentComponent;
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


    var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/message.service.ts");

    var CoronaComponentComponent = /*#__PURE__*/function () {
      function CoronaComponentComponent(messageService) {
        _classCallCheck(this, CoronaComponentComponent);

        this.messageService = messageService;
        this.country = 'all';
      }

      _createClass(CoronaComponentComponent, [{
        key: "sendMessage",
        value: function sendMessage() {
          this.messageService.sendMessage(this.country);
          this.messageService.clearMessages();
        }
      }, {
        key: "clearMessages",
        value: function clearMessages() {
          this.messageService.clearMessages();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoronaComponentComponent;
    }();

    CoronaComponentComponent.ctorParameters = function () {
      return [{
        type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    CoronaComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'cp111',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./corona-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/corona-component/corona-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./corona-component.component.css */
      "./src/app/corona-component/corona-component.component.css"))["default"]]
    })], CoronaComponentComponent);
    /***/
  },

  /***/
  "./src/app/corona-data/corona-data.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/corona-data/corona-data.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoronaDataCoronaDataComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n}\r\n.flex-container{\r\n    min-height: 66vh;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.flex-item1 {\r\n    color: honeydew;\r\n    display: inline-block;\r\n    text-align: center;\r\n    border: 2px solid rgb(225, 255, 0);\r\n\r\n    margin: 1em;\r\n    padding: .5em;\r\n    width: 100%;\r\n  \r\n    font-size: 1.1em;\r\n\r\n    @media screen and (min-width: 900px)\r\n    \r\n        margin: 1em;\r\n        max-width: 400px;\r\n\r\n\r\n}\r\n.flex-item2 {\r\n    color: honeydew;\r\n    display: inline-block;\r\n    text-align: center;\r\n    border: 2px solid rgb(0, 255, 0);\r\n\r\n    margin: 1em;\r\n    padding: .5em;\r\n    width: 100%;\r\n  \r\n    font-size: 1.1em;\r\n\r\n    @media screen and (min-width: 900px)\r\n    \r\n        margin: 1em;\r\n        max-width: 400px;\r\n\r\n\r\n}\r\n.flex-item3 {\r\n    color: honeydew;\r\n    display: inline-block;\r\n    text-align: center;\r\n    border: 2px solid red;\r\n\r\n\r\n    margin: 1em;\r\n    padding: .5em;\r\n    width: 100%;\r\n  \r\n    font-size: 1.1em;\r\n    @media screen and (min-width: 900px)\r\n    \r\n    margin: 1em;\r\n    max-width: 400px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yb25hLWRhdGEvY29yb25hLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0NBQWtDOztJQUVsQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7O0lBRVgsZ0JBQWdCOztJQUVoQjs7bUJBRWU7UUFDWCxnQkFBZ0I7OztBQUd4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDOztJQUVoQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7O0lBRVgsZ0JBQWdCOztJQUVoQjs7bUJBRWU7UUFDWCxnQkFBZ0I7OztBQUd4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCOzs7SUFHckIsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXOztJQUVYLGdCQUFnQjtJQUNoQjs7ZUFFVztJQUNYLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb3JvbmEtZGF0YS9jb3JvbmEtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZsZXgtY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogNjZ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZmxleC1pdGVtMSB7XHJcbiAgICBjb2xvcjogaG9uZXlkZXc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjI1LCAyNTUsIDApO1xyXG5cclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweClcclxuICAgIFxyXG4gICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcblxyXG5cclxufVxyXG4uZmxleC1pdGVtMiB7XHJcbiAgICBjb2xvcjogaG9uZXlkZXc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAwKTtcclxuXHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpXHJcbiAgICBcclxuICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuXHJcbn1cclxuLmZsZXgtaXRlbTMge1xyXG4gICAgY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG5cclxuXHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweClcclxuICAgIFxyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/corona-data/corona-data.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/corona-data/corona-data.component.ts ***!
    \******************************************************/

  /*! exports provided: CoronaDataComponent */

  /***/
  function srcAppCoronaDataCoronaDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoronaDataComponent", function () {
      return CoronaDataComponent;
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


    var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/message.service.ts");

    var CoronaDataComponent = /*#__PURE__*/function () {
      function CoronaDataComponent(api, messageService) {
        var _this = this;

        _classCallCheck(this, CoronaDataComponent);

        this.api = api;
        this.messageService = messageService;
        this.Corona = [];
        this.messages = [];
        this.subscription = this.messageService.getMessage().subscribe(function (message) {
          if (message) {
            _this.messages.push(message);

            _this.country = _this.messages.toString();

            if (_this.country == 'all') {
              _this.api.get('https://coronavirus-19-api.herokuapp.com/all').subscribe(function (x) {
                _this.Corona = x;
              });

              _this.messages = [];
            } else {
              _this.api.get('https://coronavirus-19-api.herokuapp.com/countries/' + _this.country + '').subscribe(function (x) {
                _this.Corona = x;
              });

              _this.messages = [];
            }
          }
        });
      }

      _createClass(CoronaDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.api.get('https://coronavirus-19-api.herokuapp.com/all').subscribe(function (x) {
            _this2.Corona = x;
          });
          this.messages = [];
        }
      }]);

      return CoronaDataComponent;
    }();

    CoronaDataComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    CoronaDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'cd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./corona-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/corona-data/corona-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./corona-data.component.css */
      "./src/app/corona-data/corona-data.component.css"))["default"]]
    })], CoronaDataComponent); //https://coronavirus-19-api.herokuapp.com/all
    //https://coronavirus-19-api.herokuapp.com/countries/Lebanon

    /*   this.api.get('https://coronavirus-19-api.herokuapp.com/countries/Lebanon')
        .subscribe(
         x => { this.Corona =x; }
        ) */

    /*
     this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.country = this.messages.toString();
        this.api.get('https://coronavirus-19-api.herokuapp.com/countries/Lebanon')
          .subscribe(
            x => { this.Corona = x; }
          )
      }
    
    });
    
    */

    /***/
  },

  /***/
  "./src/app/message.service.ts":
  /*!************************************!*\
    !*** ./src/app/message.service.ts ***!
    \************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
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

    var MessageService = /*#__PURE__*/function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MessageService, [{
        key: "sendMessage",
        value: function sendMessage(message) {
          this.subject.next(message);
        }
      }, {
        key: "clearMessages",
        value: function clearMessages() {
          this.subject.next();
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.subject.asObservable();
        }
      }]);

      return MessageService;
    }();

    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessageService);
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
      return console.error(err);
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
    /*! D:\myWork\workshop\Web1\Angular\Coronaapp\Corona\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map