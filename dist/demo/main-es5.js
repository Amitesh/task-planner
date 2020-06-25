function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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


    __webpack_exports__["default"] = "<div>\n  <task-planner></task-planner>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskPlannerDialogsConfirmDialogsConfirmDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Are you sure?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close(false)\">No</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"deleteClick()\">Yes</button>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskPlannerDialogsInputDialogsInputDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Name</p>\r\n    <input id=\"name-input\" [formControl]=\"input\" type=\"text\" (keydown.enter)=\"input.valid && create()\">\r\n    <p class=\"small\" [class.text-danger]=\"input.invalid && input.dirty\" *ngIf=\"input.invalid && input.dirty\">Input can't\r\n      be blank.</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" id=\"cancel-btn\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close()\">Cancel</button>\r\n    <button type=\"button\" id=\"ok-btn\" class=\"btn\" [class.btn-outline-dark]=\"input.invalid\" [class.btn-primary]=\"input.valid\"\r\n      [class.disabled]=\"input.invalid\" [disabled]=\"input.invalid\" (click)=\"create()\">Ok</button>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/task-list/task-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/task-list/task-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskPlannerTaskListTaskListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tasks\">\r\n  <div class=\"sortable\" [attr.data-id]=\"taskList._id\" [class.empty]=\"tasks.length === 0\" [sortablejs]=\"tasks\" [sortablejsOptions]=\"sortableOptions\">\r\n    <div class=\"card\" *ngFor=\"let task of tasks\" [attr.data-id]=\"task._id\" [attr.data-task]=\"taskStringfy(task)\">\r\n      <div tabindex=\"0\" [attr.aria-label]=\"task.name\" class=\"card-content\">\r\n        <span class=\"truncate\" title=\"{{ task.name }}\">{{ task.name }}</span>\r\n        <span class=\"clearfix\"><a href=\"#\" class=\"task-delete delete-icon\" (click)=\"onDelete(task)\"><i\r\n              class=\"fas fa-trash\"></i></a></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a href=\"#\" class=\"add-task-btn\" (click)=\"addTask()\">Add task</a>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/task-planner.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/task-planner.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskPlannerTaskPlannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"task-planner\">\r\n  <div class=\"header\">\r\n    <h3 class=\"title\"><i class=\"fas fa-tasks\"></i> Task Planner</h3>\r\n    <a href=\"#\" id=\"tasklist-add-button\" class=\"add-list\" (click)=\"addList()\">Add List</a>\r\n  </div>\r\n\r\n  <div class=\"task-board clearfix\">\r\n    <div class=\"lists\" [class.empty]=\"taskLists.length === 0\">\r\n      <div class=\"list\" *ngFor=\"let tasklist of taskLists\">\r\n        <div class=\"clearfix\">\r\n          <span tabindex=\"0\" [attr.aria-label]=\"tasklist.name\">\r\n            <h5 class=\"truncate\" title=\"{{ tasklist.name }}\">\r\n              {{ tasklist.name }}\r\n            </h5>\r\n          </span>\r\n          <a href=\"#\" class=\"delete-icon\" (click)=\"deleteTaskList(tasklist)\">\r\n            <i class=\"fas fa-trash danger\"></i>\r\n          </a>\r\n        </div>\r\n        <task-list [taskList]=\"tasklist\" (errorOnMove)=\"errorOnMove($event)\"></task-list>\r\n      </div>\r\n      <div class=\"empty-tasklist\">\r\n        <h4>Welcome to your task planner board! <i class=\"fas fa-rocket\"></i></h4>\r\n        To add new task list click 'Add list' link above.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"hints\" *ngIf=\"taskLists.length !== 0\">\r\n    <h6>Hints</h6>\r\n    <ul>\r\n      <li>Empty task list and task name is not allowed.</li>\r\n      <li>Duplicate task list and task name is allowed.</li>\r\n      <li>Task order is not maintained yet.</li>\r\n      <li>Drop the task in highlighted drop zone area between <br>Task list name and Add task link.</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
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


    __webpack_exports__["default"] = "p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn0iXX0= */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'my-app',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _interceptors_app_http_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./interceptors/app-http.interceptor */
    "./src/app/interceptors/app-http.interceptor.ts");
    /* harmony import */


    var _task_planner_sevices_task_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./task-planner/sevices/task-list.service */
    "./src/app/task-planner/sevices/task-list.service.ts");
    /* harmony import */


    var _task_planner_sevices_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./task-planner/sevices/task.service */
    "./src/app/task-planner/sevices/task.service.ts");
    /* harmony import */


    var _task_planner_task_planner_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./task-planner/task-planner.module */
    "./src/app/task-planner/task-planner.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _task_planner_task_planner_module__WEBPACK_IMPORTED_MODULE_9__["TaskPlannerModule"]],
      providers: [_task_planner_sevices_task_list_service__WEBPACK_IMPORTED_MODULE_7__["TaskListService"], _task_planner_sevices_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"], {
        multi: true,
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_app_http_interceptor__WEBPACK_IMPORTED_MODULE_6__["AppHttpInterceptor"]
      }]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/interceptors/app-http.interceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/interceptors/app-http.interceptor.ts ***!
    \******************************************************/

  /*! exports provided: AppHttpInterceptor */

  /***/
  function srcAppInterceptorsAppHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function () {
      return AppHttpInterceptor;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppHttpInterceptor = /*#__PURE__*/function () {
      function AppHttpInterceptor() {
        _classCallCheck(this, AppHttpInterceptor);
      }

      _createClass(AppHttpInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var authorizedRequest; // Add header key-values to each request

          authorizedRequest = request.clone({
            headers: request.headers.set('Authorization', 'Bearer token')
          });

          if (!authorizedRequest.headers.has('Content-Type')) {
            authorizedRequest = authorizedRequest.clone({
              headers: authorizedRequest.headers.set('Content-Type', 'application/json')
            });
          }

          authorizedRequest = authorizedRequest.clone({
            headers: authorizedRequest.headers.set('Accept', 'application/json')
          });
          /*
           * Handle the error status code and messages at common place.
           * Use dialog or toaster to show the messages .
           * Use status code to design the error logging for server or for user.
           */

          return next.handle(authorizedRequest).pipe( // Give a one more retry for slower devices
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var errorMessage = '';
            console.log(error);

            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = "Error: ".concat(error.error.message);
            } else if (error.error.status) {
              // server-side error
              errorMessage = "Error Code: ".concat(error.error.status, "\nMessage: ").concat(error.error.message);
            } else {
              // server-side error
              errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            window.alert(errorMessage); // Show error gracefully, instead of alert window

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
          }));
        }
      }]);

      return AppHttpInterceptor;
    }();

    AppHttpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppHttpInterceptor);
    /***/
  },

  /***/
  "./src/app/services/environment.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/environment.service.ts ***!
    \*************************************************/

  /*! exports provided: EnvironmentService */

  /***/
  function srcAppServicesEnvironmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvironmentService", function () {
      return EnvironmentService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var EnvironmentService = /*#__PURE__*/function () {
      function EnvironmentService() {
        _classCallCheck(this, EnvironmentService);
      }

      _createClass(EnvironmentService, [{
        key: "apiUrl",
        get: function get() {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }
      }, {
        key: "production",
        get: function get() {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production;
        }
      }]);

      return EnvironmentService;
    }();

    EnvironmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EnvironmentService);
    /***/
  },

  /***/
  "./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskPlannerDialogsConfirmDialogsConfirmDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stcGxhbm5lci9kaWFsb2dzL2NvbmZpcm0tZGlhbG9ncy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppTaskPlannerDialogsConfirmDialogsConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /**
     * Component to get the user confirmation before deteling a tasklist or task.
     */


    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(activeModal) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.activeModal = activeModal;
        this.isDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * Method to handle the click for `Yes` action
       */


      _createClass(ConfirmDialogComponent, [{
        key: "deleteClick",
        value: function deleteClick() {
          this.isDelete.emit(true);
          this.activeModal.close();
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ConfirmDialogComponent.prototype, "isDelete", void 0);
    ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      selector: 'confirm-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confirm-dialog.component.scss */
      "./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.scss"))["default"]]
    })], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskPlannerDialogsInputDialogsInputDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".red {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0ZXNoL2Fob21lL3Byb2plY3RzL3R0L3Rhc2stcGxhbm5lci9zcmMvYXBwL3Rhc2stcGxhbm5lci9kaWFsb2dzL2lucHV0LWRpYWxvZ3MvaW5wdXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrLXBsYW5uZXIvZGlhbG9ncy9pbnB1dC1kaWFsb2dzL2lucHV0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stcGxhbm5lci9kaWFsb2dzL2lucHV0LWRpYWxvZ3MvaW5wdXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufSIsIi5yZWQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: InputDialogComponent */

  /***/
  function srcAppTaskPlannerDialogsInputDialogsInputDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputDialogComponent", function () {
      return InputDialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /**
     * Component to get the user input for adding new tasklist or task
     */


    var InputDialogComponent = /*#__PURE__*/function () {
      function InputDialogComponent(activeModal) {
        _classCallCheck(this, InputDialogComponent);

        this.activeModal = activeModal;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.input = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/([\S]+[\s]*)*[\S]+/)]);
      }

      _createClass(InputDialogComponent, [{
        key: "create",

        /**
         * Method to create the taskList or task
         */
        value: function create() {
          this.submit.emit(this.input.value);
          this.activeModal.close();
        }
      }, {
        key: "initialValue",
        set: function set(value) {
          this.input.setValue(value);
        }
      }]);

      return InputDialogComponent;
    }();

    InputDialogComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], InputDialogComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InputDialogComponent.prototype, "submit", void 0);
    InputDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      selector: 'input-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./input-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./input-dialog.component.scss */
      "./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.scss"))["default"]]
    })], InputDialogComponent);
    /***/
  },

  /***/
  "./src/app/task-planner/sevices/task-list.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/task-planner/sevices/task-list.service.ts ***!
    \***********************************************************/

  /*! exports provided: TaskListService */

  /***/
  function srcAppTaskPlannerSevicesTaskListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskListService", function () {
      return TaskListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/environment.service */
    "./src/app/services/environment.service.ts");
    /**
     * Hearder option for http request to set the key-values into header
     */


    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    var TaskListService = /*#__PURE__*/function () {
      function TaskListService(http, environmentService) {
        _classCallCheck(this, TaskListService);

        this.http = http;
        this.environmentService = environmentService;
        this.taskListUrl = this.environmentService.apiUrl;
      }
      /**
       * API service method to get the all task list and it's tasks.
       */


      _createClass(TaskListService, [{
        key: "get",
        value: function get() {
          return this.http.get("".concat(this.taskListUrl));
        }
        /**
         * API service method to add new task
         * @param taskList : TaskList object
         */

      }, {
        key: "post",
        value: function post(taskList) {
          return this.http.post(this.taskListUrl, taskList, httpOptions);
        }
        /**
         * API service method to update the tasklist
         * @param taskList : TaskList object
         */

      }, {
        key: "put",
        value: function put(taskList) {
          return this.http.put(this.taskListUrl, taskList, httpOptions);
        }
        /**
         * API service method to delete a task list for given id
         * @param taskList : TaskList object
         */

      }, {
        key: "delete",
        value: function _delete(taskList) {
          return this.http["delete"]("".concat(this.taskListUrl, "/").concat(taskList._id), httpOptions);
        }
        /**
         * Method to move the dragged item to back to original list if there is any error.
         * @param taskLists: Object
         * @param event: Object
         */

      }, {
        key: "move",
        value: function move(taskLists, event) {
          var fromTaskList = (taskLists || []).find(function (taskList) {
            return taskList._id === event.fromTaskListId;
          });
          var toTaskList = (taskLists || []).find(function (taskList) {
            return taskList._id === event.toTaskListId;
          });
          var task = (toTaskList && toTaskList.tasks || []).find(function (item) {
            return item._id === event.taskId;
          });

          if (task) {
            // Revove the task from new list
            toTaskList.tasks.splice(event.newIndex, 1); // Add task to old list

            fromTaskList.tasks.splice(event.oldIndex, 0, task);
          }
        }
      }]);

      return TaskListService;
    }();

    TaskListService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]
      }];
    };

    TaskListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], TaskListService);
    /***/
  },

  /***/
  "./src/app/task-planner/sevices/task.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/task-planner/sevices/task.service.ts ***!
    \******************************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppTaskPlannerSevicesTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/environment.service */
    "./src/app/services/environment.service.ts");
    /**
     * Hearder option for http request to set the key-values into header
     */


    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    var TaskService = /*#__PURE__*/function () {
      function TaskService(http, environmentService) {
        _classCallCheck(this, TaskService);

        this.http = http;
        this.environmentService = environmentService;
        this.taskListUrl = this.environmentService.apiUrl;
      }
      /**
       * API service method to get the all tasks of given tasklist id
       * @param taskListId  : TaskList id
       */


      _createClass(TaskService, [{
        key: "get",
        value: function get(taskListId) {
          return this.http.get("".concat(this.taskListUrl, "/").concat(taskListId, "/tasks"));
        }
        /**
         * API service method to add a new task under the given task list id.
         * @param taskListId  : TaskList id
         * @param task  : ITask
         */

      }, {
        key: "post",
        value: function post(taskListId, task) {
          return this.http.post("".concat(this.taskListUrl, "/").concat(taskListId, "/tasks"), task, httpOptions);
        }
        /**
         * API service method to update the task details of given task id and it's task list id.
         * @param taskListId  : TaskList id
         * @param task  : ITask
         */

      }, {
        key: "put",
        value: function put(taskListId, task) {
          return this.http.put("".concat(this.taskListUrl, "/").concat(taskListId, "/tasks/").concat(task._id), task, httpOptions);
        }
        /**
         * API service method to delete a task from a task list.
         * @param taskListId  : TaskList id
         * @param task  : ITask
         */

      }, {
        key: "delete",
        value: function _delete(taskListId, task) {
          return this.http["delete"]("".concat(this.taskListUrl, "/").concat(taskListId, "/tasks/").concat(task._id), httpOptions);
        }
      }]);

      return TaskService;
    }();

    TaskService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]
      }];
    };

    TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], TaskService);
    /***/
  },

  /***/
  "./src/app/task-planner/task-list/task-list.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/task-planner/task-list/task-list.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskPlannerTaskListTaskListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".task {\n  border: 1px solid #fafafa;\n  margin: 2px;\n}\n\n.sortable {\n  background: #eee;\n  border-radius: 0.25rem;\n  min-height: 40px;\n}\n\n.sortable.empty::after {\n  content: \"Add or drop task here\";\n  text-align: center;\n  vertical-align: middle;\n  line-height: 30px;\n  color: #b7b7b7;\n}\n\n.sortable:hover {\n  background-color: #dedddd;\n}\n\n.card {\n  background-color: #ccdce6;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n  min-height: 33px;\n  position: relative;\n  overflow: hidden;\n}\n\n.card .card-content {\n  background-color: #fff;\n  padding: 6px 8px;\n  min-height: 33px;\n}\n\n.card .card-content .truncate {\n  max-width: 85%;\n  display: inline-block;\n}\n\n.card .delete-icon {\n  float: right;\n  color: #c3c3c3;\n  cursor: pointer;\n  text-decoration: none;\n  display: none;\n}\n\n.card .delete-icon:hover {\n  color: #3a80de;\n}\n\n.card:hover .delete-icon {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0ZXNoL2Fob21lL3Byb2plY3RzL3R0L3Rhc2stcGxhbm5lci9zcmMvYXBwL3Rhc2stcGxhbm5lci90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrLXBsYW5uZXIvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBVGM7RUFVZCxzQkFBQTtFQUNBLGdCQUFBO0FDUEY7O0FEVUU7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcEJVO0FDWWQ7O0FEVUU7RUFDRSx5QkFBQTtBQ1JKOztBRGFBO0VBQ0UseUJBaENpQjtFQWlDakIsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEWUU7RUFDRSxzQkExQ0k7RUEyQ0osZ0JBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRFlJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDVk47O0FEY0U7RUFDRSxZQUFBO0VBQ0EsY0FwRFc7RUFxRFgsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ1pKOztBRGNJO0VBQ0UsY0F6RGE7QUM2Q25COztBRGdCRTtFQUNFLGNBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stcGxhbm5lci90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmO1xyXG4kY29sb3JfYm90dGljZWxsaTogI2NjZGNlNjtcclxuJGNvbG9yX3NpbHZlcjogI2MzYzNjMztcclxuJGNvbG9yX3JveWFsX2JsdWU6ICMzYTgwZGU7XHJcbiRjb2xvcl9ub2JlbDogI2I3YjdiNztcclxuJGNvbG9yX2dhbGxlcnk6ICNlZWU7XHJcbiRhbGFiYXN0ZXI6ICNmYWZhZmE7XHJcblxyXG4udGFzayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFsYWJhc3RlcjtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnNvcnRhYmxlIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3JfZ2FsbGVyeTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgLy8gYm9yZGVyOiAycHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG5cclxuICAmLmVtcHR5OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIkFkZCBvciBkcm9wIHRhc2sgaGVyZVwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICRjb2xvcl9ub2JlbDtcclxuICB9XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRkZGQ7XHJcbiAgICAvLyBib3JkZXI6IDJweCBkYXNoZWQgI2ZmYmQ0NDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYm90dGljZWxsaTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMzcHg7XHJcblxyXG4gICAgLnRydW5jYXRlIHtcclxuICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZWxldGUtaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogJGNvbG9yX3NpbHZlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3Jfcm95YWxfYmx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIgLmRlbGV0ZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIudGFzayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYWZhZmE7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uc29ydGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuLnNvcnRhYmxlLmVtcHR5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQWRkIG9yIGRyb3AgdGFzayBoZXJlXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjYjdiN2I3O1xufVxuLnNvcnRhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGRkZDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkY2U2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDMzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkIC5jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBtaW4taGVpZ2h0OiAzM3B4O1xufVxuLmNhcmQgLmNhcmQtY29udGVudCAudHJ1bmNhdGUge1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhcmQgLmRlbGV0ZS1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2MzYzNjMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2FyZCAuZGVsZXRlLWljb246aG92ZXIge1xuICBjb2xvcjogIzNhODBkZTtcbn1cbi5jYXJkOmhvdmVyIC5kZWxldGUtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/task-planner/task-list/task-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/task-planner/task-list/task-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: TaskListComponent */

  /***/
  function srcAppTaskPlannerTaskListTaskListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
      return TaskListComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _dialogs_confirm_dialogs_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dialogs/confirm-dialogs/confirm-dialog.component */
    "./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.ts");
    /* harmony import */


    var _dialogs_input_dialogs_input_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dialogs/input-dialogs/input-dialog.component */
    "./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.ts");
    /* harmony import */


    var _sevices_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sevices/task.service */
    "./src/app/task-planner/sevices/task.service.ts");
    /**
     * Task component to render the individual task
     */


    var TaskListComponent = /*#__PURE__*/function () {
      function TaskListComponent(dialogService, taskService) {
        var _this = this;

        _classCallCheck(this, TaskListComponent);

        this.dialogService = dialogService;
        this.taskService = taskService;
        this.errorOnMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Set Sortablejs configuration for group name and callbacks
         */

        this.sortableOptions = {
          group: 'task-planner-group',
          onAdd: function onAdd(event) {
            _this.onAddTaskByDragAndDrop(event);
          },
          onRemove: function onRemove(event) {
            _this.onRemoveTaskByDragAndDrop(event);
          }
        };
      }

      _createClass(TaskListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tasks = this.taskList.tasks || [];
        }
        /**
         * Method to call on adding a task from one list to other list.
         * @param event : event object
         */

      }, {
        key: "onAddTaskByDragAndDrop",
        value: function onAddTaskByDragAndDrop(event) {
          var _this2 = this;

          var toTaskListId;
          var fromTaskListId;
          var task;

          try {
            toTaskListId = this.taskList._id;
            task = this.tasks[event.newIndex];
            fromTaskListId = event.from.getAttribute('data-id');
            this.taskService.post(toTaskListId, task).subscribe(function (taskList) {}, function (err) {
              _this2.errorOnMove.emit({
                fromTaskListId: fromTaskListId,
                newIndex: event.newIndex,
                oldIndex: event.oldIndex,
                taskId: task._id,
                toTaskListId: toTaskListId
              });
            });
          } catch (error) {
            console.error(error);
          }
        }
        /**
         * Method to call on removing a task from one list to other list.
         * @param event : event object
         */

      }, {
        key: "onRemoveTaskByDragAndDrop",
        value: function onRemoveTaskByDragAndDrop(event) {
          var _this3 = this;

          var fromTaskListId;
          var toTaskListId;
          var taskId;

          try {
            fromTaskListId = this.taskList._id;
            taskId = event.item.getAttribute('data-id');
            toTaskListId = event.to.getAttribute('data-id');
            this.taskService["delete"](fromTaskListId, {
              _id: taskId,
              name: null
            }).subscribe(function (taskList) {}, function (err) {
              // let task = <ITask>JSON.parse(event.item.getAttribute('data-task'));
              _this3.errorOnMove.emit({
                fromTaskListId: fromTaskListId,
                newIndex: event.newIndex,
                oldIndex: event.oldIndex,
                taskId: taskId,
                toTaskListId: toTaskListId
              });
            });
          } catch (error) {
            console.error(error);
          }
        }
      }, {
        key: "taskStringfy",
        value: function taskStringfy(task) {
          return JSON.stringify(task);
        }
        /**
         * Open a popup to add a new task to selected task list.
         */

      }, {
        key: "addTask",
        value: function addTask() {
          var _this4 = this;

          var dialogObj = this.dialogService.open(_dialogs_input_dialogs_input_dialog_component__WEBPACK_IMPORTED_MODULE_4__["InputDialogComponent"], {
            backdrop: 'static'
          });
          dialogObj.componentInstance.title = 'Add new task';
          dialogObj.componentInstance.submit.subscribe(function (taskName) {
            try {
              _this4.taskService.post(_this4.taskList._id, {
                name: taskName
              }).subscribe(function (taskList) {
                _this4.taskList = taskList;
                _this4.tasks = _this4.taskList.tasks;
              });
            } catch (error) {
              console.error(error);
            }
          });
        }
        /**
         * Open a confirmation popup to delete the selected task
         * @param taskToDelete : task object
         */

      }, {
        key: "onDelete",
        value: function onDelete(taskToDelete) {
          var _this5 = this;

          var dialogObj = this.dialogService.open(_dialogs_confirm_dialogs_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            backdrop: 'static'
          });
          dialogObj.componentInstance.title = 'Delete task';
          dialogObj.componentInstance.isDelete.subscribe(function (deleteTask) {
            try {
              if (deleteTask) {
                _this5.taskService["delete"](_this5.taskList._id, taskToDelete).subscribe(function (taskList) {
                  _this5.taskList = taskList;
                  _this5.tasks = _this5.taskList.tasks;
                });
              }
            } catch (error) {
              console.error(error);
            }
          });
        }
      }]);

      return TaskListComponent;
    }();

    TaskListComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _sevices_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskListComponent.prototype, "taskList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TaskListComponent.prototype, "errorOnMove", void 0);
    TaskListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'task-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/task-list/task-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-list.component.scss */
      "./src/app/task-planner/task-list/task-list.component.scss"))["default"]]
    })], TaskListComponent);
    /***/
  },

  /***/
  "./src/app/task-planner/task-planner.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/task-planner/task-planner.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskPlannerTaskPlannerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".task-planner {\n  margin: 10px 0 30px 0;\n  border-radius: 16px;\n  cursor: default;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 18px;\n  text-align: left;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.task-planner .header {\n  color: #222;\n  padding-bottom: 16px;\n}\n.task-planner .header h3.title {\n  display: inline-block;\n  font-size: 1.25rem;\n  letter-spacing: 1px;\n  margin: 0;\n  background: #0b568b;\n  border-radius: 6px;\n  color: #fff;\n  padding: 9px 15px;\n}\n.task-planner .task-board {\n  min-width: 100%;\n}\n.task-planner .task-board .lists {\n  margin: 0 10px 5px 0;\n  display: flex;\n  flex-direction: row;\n  overflow: auto;\n}\n.task-planner .task-board .lists .list {\n  background-color: #e5eff5;\n  border-radius: 6px;\n  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.29);\n  padding: 8px;\n  border: 1px solid #fff;\n  margin: 5px;\n  width: 25%;\n  min-width: 200px;\n  max-width: 300px;\n}\n.task-planner .task-board .lists .list:first-child {\n  margin-left: 0px;\n}\n.task-planner .task-board .lists .list h5 {\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  margin: 0 0 8px 3px;\n  display: inline-block;\n  text-transform: capitalize;\n  width: 90%;\n}\n.delete-icon {\n  float: right;\n  color: #c3c3c3;\n  cursor: pointer;\n  text-decoration: none;\n}\n.delete-icon:hover {\n  color: #f95454;\n}\na.add-list {\n  margin-top: 6px;\n  color: #fff;\n  margin-left: 32px;\n}\n.lists .empty-tasklist {\n  display: none;\n  margin: 20px 0px;\n}\n.lists.empty .empty-tasklist {\n  display: block;\n}\n.hints {\n  background-color: #0c0c0c3b;\n  padding: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  margin-top: 15%;\n}\n.hints h6, .hints li {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0ZXNoL2Fob21lL3Byb2plY3RzL3R0L3Rhc2stcGxhbm5lci9zcmMvYXBwL3Rhc2stcGxhbm5lci90YXNrLXBsYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stcGxhbm5lci90YXNrLXBsYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDUkY7QURVRTtFQUNFLFdBbkJlO0VBb0JmLG9CQUFBO0FDUko7QURVSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFyQnFCO0VBc0JyQixrQkFBQTtFQUNBLFdBNUJFO0VBNkJGLGlCQUFBO0FDUk47QURZRTtFQUNFLGVBQUE7QUNWSjtBRFlJO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDVk47QURZTTtFQUNFLHlCQXZDZTtFQXdDZixrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDVlI7QURZUTtFQUNFLGdCQUFBO0FDVlY7QURhUTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUNYVjtBRGtCQTtFQUNFLFlBQUE7RUFDQSxjQXRFYTtFQXVFYixlQUFBO0VBQ0EscUJBQUE7QUNmRjtBRGlCRTtFQUNFLGNBMUVrQjtBQzJEdEI7QURtQkE7RUFDRSxlQUFBO0VBQ0EsV0FuRk07RUFvRk4saUJBQUE7QUNoQkY7QURtQkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7QURtQkE7RUFDRSxjQUFBO0FDaEJGO0FEbUJBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNoQkY7QURpQkU7RUFDRSxpQkFBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvdGFzay1wbGFubmVyL3Rhc2stcGxhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JzXHJcbiRjb2xvcl9taW5lX3NoYWZ0OiAjMjIyO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFja18yOTogcmdiYSgwLCAwLCAwLCAwLjI5KTtcclxuJGNvbG9yX3NpbHZlcjogI2MzYzNjMztcclxuJGNvbG9yX3N1bnNldF9vcmFuZ2U6ICNmOTU0NTQ7XHJcbiRjb2xvcl9jYXRza2lsbF93aGl0ZTogI2U1ZWZmNTtcclxuJGNvbG9yX3ZlbmljZV9ibHVlX2FwcHJveDogIzBiNTY4YjtcclxuXHJcbi50YXNrLXBsYW5uZXIge1xyXG4gIG1hcmdpbjogMTBweCAwIDMwcHggMDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgY29sb3I6ICRjb2xvcl9taW5lX3NoYWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcblxyXG4gICAgaDMudGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfdmVuaWNlX2JsdWVfYXBwcm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhc2stYm9hcmQge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5saXN0cyB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDVweCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgIC5saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfY2F0c2tpbGxfd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IDBweCAkYmxhY2tfMjk7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDNweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZWxldGUtaWNvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAkY29sb3Jfc2lsdmVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRjb2xvcl9zdW5zZXRfb3JhbmdlO1xyXG4gIH1cclxufVxyXG5cclxuYS5hZGQtbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi5saXN0cyAuZW1wdHktdGFza2xpc3R7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcblxyXG4ubGlzdHMuZW1wdHkgLmVtcHR5LXRhc2tsaXN0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGludHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYzNiO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgaDYsIGxpe1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcbiIsIi50YXNrLXBsYW5uZXIge1xuICBtYXJnaW46IDEwcHggMCAzMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi50YXNrLXBsYW5uZXIgLmhlYWRlciB7XG4gIGNvbG9yOiAjMjIyO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbi50YXNrLXBsYW5uZXIgLmhlYWRlciBoMy50aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMwYjU2OGI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xufVxuLnRhc2stcGxhbm5lciAudGFzay1ib2FyZCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi50YXNrLXBsYW5uZXIgLnRhc2stYm9hcmQgLmxpc3RzIHtcbiAgbWFyZ2luOiAwIDEwcHggNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnRhc2stcGxhbm5lciAudGFzay1ib2FyZCAubGlzdHMgLmxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZmY1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjkpO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMjUlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuLnRhc2stcGxhbm5lciAudGFzay1ib2FyZCAubGlzdHMgLmxpc3Q6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnRhc2stcGxhbm5lciAudGFzay1ib2FyZCAubGlzdHMgLmxpc3QgaDUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luOiAwIDAgOHB4IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2MzYzNjMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZGVsZXRlLWljb246aG92ZXIge1xuICBjb2xvcjogI2Y5NTQ1NDtcbn1cblxuYS5hZGQtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4ubGlzdHMgLmVtcHR5LXRhc2tsaXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmxpc3RzLmVtcHR5IC5lbXB0eS10YXNrbGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGludHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwYzBjM2I7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG4uaGludHMgaDYsIC5oaW50cyBsaSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/task-planner/task-planner.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/task-planner/task-planner.component.ts ***!
    \********************************************************/

  /*! exports provided: TaskPlannerComponent */

  /***/
  function srcAppTaskPlannerTaskPlannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskPlannerComponent", function () {
      return TaskPlannerComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _dialogs_confirm_dialogs_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dialogs/confirm-dialogs/confirm-dialog.component */
    "./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.ts");
    /* harmony import */


    var _dialogs_input_dialogs_input_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialogs/input-dialogs/input-dialog.component */
    "./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.ts");
    /* harmony import */


    var _sevices_task_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sevices/task-list.service */
    "./src/app/task-planner/sevices/task-list.service.ts");
    /**
     * Task list component to render the each task list and it's task inside it.
     */


    var TaskPlannerComponent = /*#__PURE__*/function () {
      function TaskPlannerComponent(dialogService, taskListService) {
        _classCallCheck(this, TaskPlannerComponent);

        this.dialogService = dialogService;
        this.taskListService = taskListService; // Initialize the tasklist

        this.taskLists = [];
      }

      _createClass(TaskPlannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // fetch the all task lists from the server
          this.taskListService.get().subscribe(function (taskLists) {
            _this6.taskLists = taskLists;
          });
        }
        /**
         * Open a popup to add a new task list
         */

      }, {
        key: "addList",
        value: function addList() {
          var _this7 = this;

          var dialogObj = this.dialogService.open(_dialogs_input_dialogs_input_dialog_component__WEBPACK_IMPORTED_MODULE_4__["InputDialogComponent"], {
            backdrop: 'static'
          });
          dialogObj.componentInstance.title = 'Add new task list';
          dialogObj.componentInstance.submit.subscribe(function (listName) {
            _this7.taskListService.post({
              name: listName
            }).subscribe(function (taskLists) {
              _this7.taskLists = taskLists;
            });
          });
        }
        /**
         * Open the confirmation poup to delete a task list along with it's task
         * @param taskListToDelete : Task object
         */

      }, {
        key: "deleteTaskList",
        value: function deleteTaskList(taskListToDelete) {
          var _this8 = this;

          var dialogObj = this.dialogService.open(_dialogs_confirm_dialogs_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            backdrop: 'static'
          });
          dialogObj.componentInstance.title = 'Delete task list';
          dialogObj.componentInstance.isDelete.subscribe(function (deleteList) {
            if (deleteList) {
              _this8.taskListService["delete"](taskListToDelete).subscribe(function (taskLists) {
                _this8.taskLists = taskLists;
              });
            }
          });
        }
      }, {
        key: "errorOnMove",
        value: function errorOnMove(event) {
          this.taskListService.move(this.taskLists, event);
        }
      }]);

      return TaskPlannerComponent;
    }();

    TaskPlannerComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _sevices_task_list_service__WEBPACK_IMPORTED_MODULE_5__["TaskListService"]
      }];
    };

    TaskPlannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'task-planner',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-planner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-planner/task-planner.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-planner.component.scss */
      "./src/app/task-planner/task-planner.component.scss"))["default"]]
    })], TaskPlannerComponent);
    /***/
  },

  /***/
  "./src/app/task-planner/task-planner.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/task-planner/task-planner.module.ts ***!
    \*****************************************************/

  /*! exports provided: TaskPlannerModule */

  /***/
  function srcAppTaskPlannerTaskPlannerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskPlannerModule", function () {
      return TaskPlannerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-sortablejs */
    "./node_modules/ngx-sortablejs/__ivy_ngcc__/fesm2015/ngx-sortablejs.js");
    /* harmony import */


    var _dialogs_confirm_dialogs_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dialogs/confirm-dialogs/confirm-dialog.component */
    "./src/app/task-planner/dialogs/confirm-dialogs/confirm-dialog.component.ts");
    /* harmony import */


    var _dialogs_input_dialogs_input_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dialogs/input-dialogs/input-dialog.component */
    "./src/app/task-planner/dialogs/input-dialogs/input-dialog.component.ts");
    /* harmony import */


    var _sevices_task_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sevices/task-list.service */
    "./src/app/task-planner/sevices/task-list.service.ts");
    /* harmony import */


    var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./task-list/task-list.component */
    "./src/app/task-planner/task-list/task-list.component.ts");
    /* harmony import */


    var _task_planner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./task-planner.component */
    "./src/app/task-planner/task-planner.component.ts");

    var TaskPlannerModule = function TaskPlannerModule() {
      _classCallCheck(this, TaskPlannerModule);
    };

    TaskPlannerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_task_planner_component__WEBPACK_IMPORTED_MODULE_10__["TaskPlannerComponent"], _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_9__["TaskListComponent"], _dialogs_input_dialogs_input_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InputDialogComponent"], _dialogs_confirm_dialogs_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"]],
      exports: [_task_planner_component__WEBPACK_IMPORTED_MODULE_10__["TaskPlannerComponent"], _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_9__["TaskListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], ngx_sortablejs__WEBPACK_IMPORTED_MODULE_5__["SortablejsModule"]],
      providers: [_sevices_task_list_service__WEBPACK_IMPORTED_MODULE_8__["TaskListService"]]
    })], TaskPlannerModule);
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

    var apiUrl = '/tasks-list';
    var environment = {
      production: true,
      apiUrl: apiUrl
    };
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Users/amitesh/ahome/projects/tt/task-planner/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map