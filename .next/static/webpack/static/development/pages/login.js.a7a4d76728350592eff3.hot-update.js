webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CustomHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomHooks */ "./components/CustomHooks.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/login.css */ "./css/login.css");
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_login_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Login = function Login(props) {
  var login = function login(message) {
    if (message.firstName == undefined) {
      alert(message);
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
        pathname: '/',
        query: {
          user: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(message)
        },
        asPath: '/hello'
      });
    }
  };

  var _useLogin = Object(_components_CustomHooks__WEBPACK_IMPORTED_MODULE_2__["useLogin"])(login),
      inputs = _useLogin.inputs,
      handleLogin = _useLogin.handleLogin,
      handleInputChange = _useLogin.handleInputChange;

  return __jsx("div", {
    className: "login"
  }, __jsx("h2", {
    className: "header"
  }, "Exploration"), __jsx("div", {
    className: "wrapper"
  }, __jsx("form", {
    onSubmit: handleLogin
  }, __jsx("label", null, "Username"), __jsx("input", {
    className: "text",
    type: "text",
    name: "username",
    onChange: handleInputChange,
    value: inputs.username,
    required: true
  }), __jsx("label", null, "Password"), __jsx("input", {
    className: "text",
    type: "password",
    name: "password",
    onChange: handleInputChange,
    value: inputs.password,
    required: true
  }), __jsx("input", {
    className: "button",
    type: "submit",
    value: "Login"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/signup"
  }, __jsx("a", {
    className: "button"
  }, "Sign Up")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.a7a4d76728350592eff3.hot-update.js.map