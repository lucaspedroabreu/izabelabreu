"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Home_js",{

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n/* harmony import */ var _layout_SectionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/SectionContainer */ \"./src/layout/SectionContainer.js\");\n/* harmony import */ var _AnimationText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationText */ \"./src/components/AnimationText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { navChange  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_3__.CavaniContext);\n    const isotope = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const imagesLoaded = __webpack_require__(/*! imagesloaded */ \"./node_modules/imagesloaded/imagesloaded.js\");\n        var imgLoad = imagesLoaded(\".portfolio_list\");\n        imgLoad.on(\"done\", function(instance) {\n            isotope.current = new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(\".gallery_zoom\", {\n                itemSelector: \".item__\",\n                percentPosition: true,\n                masonry: {\n                    columnWidth: \".item__\"\n                },\n                animationOptions: {\n                    duration: 750,\n                    easing: \"linear\",\n                    queue: false\n                }\n            });\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_SectionContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        navName: \"home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cavani_tm_home relative w-full h-full flex items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content pl-[100px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"name text-[72px] font-bold uppercase mb-[30px]\",\n                        children: \"Izabel Abreu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"line inline-block w-[70px] h-[5px] bg-[#333] mb-[30px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimationText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cavani_tm_button transition_link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#contact\",\n                            onClick: ()=>navChange(\"contact\"),\n                            children: \"Conhe\\xe7a Izabel abreu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cavani_tm_button transition_link mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#contact\",\n                            onClick: ()=>navChange(\"contact\"),\n                            children: \"Entre em contato\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\workspace\\\\portifolio-website\\\\src\\\\components\\\\Home.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"nU5P4Zjk4GhjoXH4tWCJa684ekM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNpQjtBQUNYO0FBQ2U7QUFDWjtBQUU5QyxNQUFNTyxPQUFPLElBQU07O0lBQ2pCLE1BQU0sRUFBRUMsVUFBUyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRyxtREFBYUE7SUFDOUMsTUFBTUssVUFBVU4sNkNBQU1BO0lBQ3RCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsZUFBZUMsbUJBQU9BLENBQUMsaUVBQWM7UUFDM0MsSUFBSUMsVUFBVUYsYUFBYTtRQUMzQkUsUUFBUUMsRUFBRSxDQUFDLFFBQVEsU0FBVUMsUUFBUSxFQUFFO1lBQ3JDTCxRQUFRTSxPQUFPLEdBQUcsSUFBSWYsdURBQU9BLENBQUMsaUJBQWlCO2dCQUM3Q2dCLGNBQWM7Z0JBQ2RDLGlCQUFpQixJQUFJO2dCQUNyQkMsU0FBUztvQkFDUEMsYUFBYTtnQkFDZjtnQkFDQUMsa0JBQWtCO29CQUNoQkMsVUFBVTtvQkFDVkMsUUFBUTtvQkFDUkMsT0FBTyxLQUFLO2dCQUNkO1lBQ0Y7UUFDRjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNsQixnRUFBZ0JBO1FBQUNtQixTQUFRO2tCQUN4Qiw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBaUQ7Ozs7OztrQ0FHL0QsOERBQUNFO3dCQUFLRixXQUFVOzs7Ozs7a0NBQ2hCLDhEQUFDcEIsc0RBQWVBOzs7OztrQ0FDaEIsOERBQUNtQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQUVDLE1BQUs7NEJBQVdDLFNBQVMsSUFBTXZCLFVBQVU7c0NBQVk7Ozs7Ozs7Ozs7O2tDQUkxRCw4REFBQ2lCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFBRUMsTUFBSzs0QkFBV0MsU0FBUyxJQUFNdkIsVUFBVTtzQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBFO0dBNUNNRDtLQUFBQTtBQTZDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzP2VmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElzb3RvcGUgZnJvbSBcImlzb3RvcGUtbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhdmFuaUNvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgU2VjdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vbGF5b3V0L1NlY3Rpb25Db250YWluZXJcIjtcclxuaW1wb3J0IFR5cGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9BbmltYXRpb25UZXh0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbmF2Q2hhbmdlIH0gPSB1c2VDb250ZXh0KENhdmFuaUNvbnRleHQpO1xyXG4gIGNvbnN0IGlzb3RvcGUgPSB1c2VSZWYoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2VzTG9hZGVkID0gcmVxdWlyZShcImltYWdlc2xvYWRlZFwiKTtcclxuICAgIHZhciBpbWdMb2FkID0gaW1hZ2VzTG9hZGVkKFwiLnBvcnRmb2xpb19saXN0XCIpO1xyXG4gICAgaW1nTG9hZC5vbihcImRvbmVcIiwgZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgIGlzb3RvcGUuY3VycmVudCA9IG5ldyBJc290b3BlKFwiLmdhbGxlcnlfem9vbVwiLCB7XHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5pdGVtX19cIixcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWUsXHJcbiAgICAgICAgbWFzb25yeToge1xyXG4gICAgICAgICAgY29sdW1uV2lkdGg6IFwiLml0ZW1fX1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0aW9uT3B0aW9uczoge1xyXG4gICAgICAgICAgZHVyYXRpb246IDc1MCxcclxuICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbkNvbnRhaW5lciBuYXZOYW1lPVwiaG9tZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdmFuaV90bV9ob21lIHJlbGF0aXZlIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgcGwtWzEwMHB4XVwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWUgdGV4dC1bNzJweF0gZm9udC1ib2xkIHVwcGVyY2FzZSBtYi1bMzBweF1cIj5cclxuICAgICAgICAgICAgSXphYmVsIEFicmV1XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZSBpbmxpbmUtYmxvY2sgdy1bNzBweF0gaC1bNXB4XSBiZy1bIzMzM10gbWItWzMwcHhdXCIgLz5cclxuICAgICAgICAgIDxUeXBpbmdBbmltYXRpb24gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F2YW5pX3RtX2J1dHRvbiB0cmFuc2l0aW9uX2xpbmtcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCIgb25DbGljaz17KCkgPT4gbmF2Q2hhbmdlKFwiY29udGFjdFwiKX0+XHJcbiAgICAgICAgICAgICAgQ29uaGXDp2EgSXphYmVsIGFicmV1XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXZhbmlfdG1fYnV0dG9uIHRyYW5zaXRpb25fbGluayBtdC0yXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIG9uQ2xpY2s9eygpID0+IG5hdkNoYW5nZShcImNvbnRhY3RcIil9PlxyXG4gICAgICAgICAgICAgIEVudHJlIGVtIGNvbnRhdG9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TZWN0aW9uQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJJc290b3BlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhdmFuaUNvbnRleHQiLCJTZWN0aW9uQ29udGFpbmVyIiwiVHlwaW5nQW5pbWF0aW9uIiwiSG9tZSIsIm5hdkNoYW5nZSIsImlzb3RvcGUiLCJpbWFnZXNMb2FkZWQiLCJyZXF1aXJlIiwiaW1nTG9hZCIsIm9uIiwiaW5zdGFuY2UiLCJjdXJyZW50IiwiaXRlbVNlbGVjdG9yIiwicGVyY2VudFBvc2l0aW9uIiwibWFzb25yeSIsImNvbHVtbldpZHRoIiwiYW5pbWF0aW9uT3B0aW9ucyIsImR1cmF0aW9uIiwiZWFzaW5nIiwicXVldWUiLCJuYXZOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJzcGFuIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home.js\n"));

/***/ })

});