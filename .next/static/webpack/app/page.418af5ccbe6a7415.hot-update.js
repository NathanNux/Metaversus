"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./components/CustomTexts.jsx":
/*!************************************!*\
  !*** ./components/CustomTexts.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TitleText\": function() { return /* binding */ TitleText; },\n/* harmony export */   \"TypingText\": function() { return /* binding */ TypingText; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n// This text has typing effect - nice touch\nconst TypingText = (param)=>/*#__PURE__*/ {\n    let { title , textStyles  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {\n        children: Array.from(title).map((letter, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_1__.textVariant2,\n                children: [\n                    letter === \" \" ? \"\\xa0\" : letter,\n                    \"  \"\n                ]\n            }, index, true, {\n                fileName: \"/Users/matejforejt/Desktop/Portfolio/Metaverse/components/CustomTexts.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/matejforejt/Desktop/Portfolio/Metaverse/components/CustomTexts.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TypingText;\nconst TitleText = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Title Text\"\n    }, void 0, false, {\n        fileName: \"/Users/matejforejt/Desktop/Portfolio/Metaverse/components/CustomTexts.jsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n_c1 = TitleText;\nvar _c, _c1;\n$RefreshReg$(_c, \"TypingText\");\n$RefreshReg$(_c1, \"TitleText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbVRleHRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRXVDO0FBQ3VCO0FBRTlELDJDQUEyQztBQUVwQyxNQUFNRyxhQUFhLHVCQUN0QjtRQUR1QixFQUFFQyxNQUFLLEVBQUVDLFdBQVUsRUFBRTtXQUM1Qyw4REFBQ0wsbURBQVE7a0JBQ05PLE1BQU1DLElBQUksQ0FBQ0osT0FBT0ssR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUM5Qiw4REFBQ1gsc0RBQVc7Z0JBQUNhLFVBQVVYLHVEQUFZQTs7b0JBQy9CUSxXQUFXLE1BQU0sU0FBV0EsTUFBTTtvQkFBQzs7ZUFER0M7Ozs7Ozs7Ozs7QUFJcEMsRUFDWjtLQVJXUjtBQVVOLE1BQU1XLFlBQVksa0JBQ3ZCLDhEQUFDQztrQkFBRzs7Ozs7a0JBQ0o7TUFGV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21UZXh0cy5qc3g/ZWNlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdGV4dENvbnRhaW5lciwgdGV4dFZhcmlhbnQyIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuLy8gVGhpcyB0ZXh0IGhhcyB0eXBpbmcgZWZmZWN0IC0gbmljZSB0b3VjaFxuXG5leHBvcnQgY29uc3QgVHlwaW5nVGV4dCA9ICh7IHRpdGxlLCB0ZXh0U3R5bGVzIH0pID0+IChcbiAgICA8bW90aW9uLnA+XG4gICAgICB7QXJyYXkuZnJvbSh0aXRsZSkubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgIDxtb3Rpb24uc3BhbiB2YXJpYW50cz17dGV4dFZhcmlhbnQyfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAge2xldHRlciA9PT0gJyAnID8gJ1xcdTAwQTAnIDogbGV0dGVyfSAgey8qLy8gbm9uLWJyZWFraW5nIHNwYWNlIHRvIHByZXZlbnQgam9pbmluZyB3b3JkcyAqL31cbiAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICkpfVxuICAgIDwvbW90aW9uLnA+XG4pO1xuXG5leHBvcnQgY29uc3QgVGl0bGVUZXh0ID0gKCkgPT4gKFxuICA8aDI+VGl0bGUgVGV4dDwvaDI+XG4pO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInRleHRDb250YWluZXIiLCJ0ZXh0VmFyaWFudDIiLCJUeXBpbmdUZXh0IiwidGl0bGUiLCJ0ZXh0U3R5bGVzIiwicCIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImxldHRlciIsImluZGV4Iiwic3BhbiIsInZhcmlhbnRzIiwiVGl0bGVUZXh0IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomTexts.jsx\n"));

/***/ })

});