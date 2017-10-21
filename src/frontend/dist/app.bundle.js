/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
            /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
            /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function (value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
                /******/
});
            /******/
}
        /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
        /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", { value: true });
            var LoginController = /** @class */ (function () {
                function LoginController($scope) {
                    this.$scope = $scope;
                    this.username = "";
                }
                LoginController.prototype.submit = function () {
                    this.$scope.$emit("loggedIn", this.username);
                };
                return LoginController;
            }());
            exports.LoginController = LoginController;
            exports.LoginTemplate = "\n<div>\n    <div>\n        <label for=\"username-field\">User name</label>\n        <input type=\"text\" ng-model=\"$ctrl.username\" id=\"username-field\">\n        <button ng-click=\"$ctrl.submit()\">Submit to your master</button>\n    </div>\n</div>\n";


            /***/
}),
/* 1 */
/***/ (function (module, exports) {

            module.exports = angular;

            /***/
}),
/* 2 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", { value: true });
            var angular = __webpack_require__(1);
            var login_component_1 = __webpack_require__(0);
            alert("just do it");
            angular.module("app", ["ui.router"])
                .config(function ($stateProvider) {
                    $stateProvider.state("login", {
                        url: "",
                        controller: login_component_1.LoginController,
                        template: login_component_1.LoginTemplate
                    });
                })
                .run(["$rootscope", function ($rootscope) {
                    console.log($rootscope);
                    // $rootscope.$on("loggedIn", function($event){
                    //     alert($event);
                    // });
                }]);
            //.value("USER", "Hello")
            // .component("LoginComponent", LoginComponent) 


            /***/
})
/******/]);
//# sourceMappingURL=app.bundle.js.map