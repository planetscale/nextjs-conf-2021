"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stars";
exports.ids = ["pages/api/stars"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQVAsSUFBaUIsSUFBSUQsd0RBQUosRUFBaEM7QUFFQSxJQUFJLE1BQXdDRSxNQUFNLENBQUNELE1BQVAsR0FBZ0JBLE1BQWhCO0FBRTVDLGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rhci1hcHAvLi9saWIvcHJpc21hLmpzP2M1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/stars.js":
/*!****************************!*\
  !*** ./pages/api/stars.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ assetHandler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n\nasync function assetHandler(req, res) {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case \"GET\":\n      try {\n        const stars = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.star.findMany();\n        res.status(200).json(stars);\n      } catch (e) {\n        console.error(\"Request error\", e);\n        res.status(500).json({\n          error: \"Error fetching posts\"\n        });\n      }\n\n      break;\n\n    default:\n      res.setHeader(\"Allow\", [\"GET\"]);\n      res.status(405).end(`Method ${method} Not Allowed`);\n      break;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3RhcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLGVBQWVDLFlBQWYsQ0FBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNqRCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBYUYsR0FBbkI7O0FBRUEsVUFBUUUsTUFBUjtBQUNJLFNBQUssS0FBTDtBQUNJLFVBQUk7QUFDQSxjQUFNQyxLQUFLLEdBQUcsTUFBTUwsOERBQUEsRUFBcEI7QUFDQUcsUUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJKLEtBQXJCO0FBQ0gsT0FIRCxDQUdFLE9BQU1LLENBQU4sRUFBUztBQUNQQyxRQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxlQUFkLEVBQStCRixDQUEvQjtBQUNBUCxRQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRyxVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUFyQjtBQUNIOztBQUNEOztBQUNKO0FBQ0lULE1BQUFBLEdBQUcsQ0FBQ1UsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FWLE1BQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JNLEdBQWhCLENBQXFCLFVBQVNWLE1BQU8sY0FBckM7QUFDQTtBQWJSO0FBZUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFyLWFwcC8uL3BhZ2VzL2FwaS9zdGFycy5qcz84MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXNzZXRIYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnMgPSBhd2FpdCBwcmlzbWEuc3Rhci5maW5kTWFueSgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHN0YXJzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGVycm9yXCIsIGUpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgZmV0Y2hpbmcgcG9zdHNcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIkdFVFwiXSk7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsImFzc2V0SGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXJzIiwic3RhciIsImZpbmRNYW55Iiwic3RhdHVzIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/stars.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/stars.js"));
module.exports = __webpack_exports__;

})();