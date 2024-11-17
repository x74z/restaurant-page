/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\nbody {\n  /* 3. Add accessible line-height */\n  line-height: 1.5;\n  /* 4. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbody {\n  --black: #0F0F0F;\n  --gray: #2f2f2f;\n  --blue: #4c91ff;\n  --red: #de3c4b;\n  --white: #F7F0F0;\n  --green: #18a999;\n  --vh-size: 95%;\n  background-color: #0f0f0f;\n  color: #18a999;\n  font-family: Roboto, system-ui;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  text-align: center;\n}\n\nnav {\n  width: var(--vh-size);\n  margin-top: 30px;\n  justify-self: center;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n\n  button {\n    font-size: 1.9rem;\n    border: 1px solid var(--white);\n    border-radius: 20px;\n    padding: 16px;\n    background-color: var(--black);\n    color: var(--white);\n    font-weight: 700;\n  }\n}\n\n#content {\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  margin: 0 30px;\n\n  img {\n    max-width: var(--vh-size);\n  }\n\n}\n\n/* home section start */\n.introduction {\n  background-color: var(--gray);\n  border-radius: 20px;\n  padding: 20px;\n  width: var(--vh-size);\n\n  h1 {\n    color: var(--blue);\n  }\n\n  p {\n    color: var(--red);\n    font-size: 1.6rem;\n  }\n}\n\n.reviews-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  background-color: var(--gray);\n  border-radius: 20px;\n  padding: 20px;\n  width: var(--vh-size);\n\n  h1 {\n    text-decoration: underline;\n    color: var(--blue);\n  }\n}\n\n.reviews {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.review {\n  background-color: var(--red);\n  border-radius: 10px;\n  color: var(--white);\n  max-width: 50vh;\n  padding: 20px 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    font-size: 2.2rem;\n    margin-bottom: 8px;\n    color: var(--white);\n  }\n\n  p {\n    font-style: italic;\n    font-size: 1.6rem;\n  }\n}\n\n/* home section end */\n\n/* menu section start */\n.menu {\n  display: flex;\n  border-radius: 20px;\n  padding: 20px;\n  flex-direction: column;\n  gap: 10px;\n  background-color: var(--gray);\n  border-radius: 20px;\n  width: var(--vh-size);\n\n  h1 {\n    font-size: 3.6rem;\n    color: var(--blue);\n  }\n}\n\n.menu>div {\n  background-color: var(--white);\n  border-radius: 20px;\n  padding: 20px;\n\n  h1 {\n    font-size: 2.7rem;\n    color: black;\n  }\n\n  p {\n    color: var(--red);\n    font-size: 1.8rem;\n  }\n\n  /* price tag */\n  h2 {\n    color: black;\n    font-size: 2.2rem;\n  }\n}\n\n/* menu section end */\n\n/* about section start */\n.about-container {\n  background-color: var(--gray);\n  border-radius: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  width: var(--vh-size);\n\n  h1 {\n    color: var(--blue);\n  }\n\n  p {\n    padding: 10px;\n    background-color: var(--white);\n    border: 1px solid black;\n    border-radius: 20px;\n    font-size: 2.3rem;\n    text-decoration: underline;\n    font-style: italic;\n    color: var(--black);\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _loadhome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadhome */ \"./src/loadhome.js\");\n/* harmony import */ var _loadmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadmenu */ \"./src/loadmenu.js\");\n/* harmony import */ var _loadabout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadabout */ \"./src/loadabout.js\");\n// import imageName from \"./path/to/image\";\n\n\n\n\n\n(0,_loadhome__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n\nfunction clearContent() {\n  document.querySelector(\"#content\").innerHTML = \"\";\n}\n// Add each button e.listener\ndocument.querySelector(\"#home\").addEventListener(\"pointerdown\", () => {\n  clearContent();\n  (0,_loadhome__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n});\ndocument.querySelector(\"#menu\").addEventListener(\"pointerdown\", () => {\n  clearContent();\n  (0,_loadmenu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n});\ndocument.querySelector(\"#about\").addEventListener(\"pointerdown\", () => {\n  clearContent();\n  (0,_loadabout__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadabout.js":
/*!**************************!*\
  !*** ./src/loadabout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n  const content = document.querySelector(\"div#content\");\n  // Every div that will appear\n  const phoneNumberContainer = document.createElement(\"div\");\n  phoneNumberContainer.className = \"phone-container about-container\";\n  const emailContainer = document.createElement(\"div\");\n  emailContainer.className = \"email-container about-container\";\n  const locationContainer1 = document.createElement(\"div\");\n  locationContainer1.className = \"location-container about-container\";\n  const locationContainer2 = document.createElement(\"div\");\n  locationContainer2.className = \"location-container about-container\";\n  content.append(\n    phoneNumberContainer,\n    emailContainer,\n    locationContainer1,\n    locationContainer2,\n  );\n  // Function to add the element title and text to its container\n  function addElement(elementContainer, elementTitle, elementContent) {\n    const title = document.createElement(\"h1\");\n    title.innerText = elementTitle;\n    const content = document.createElement(\"p\");\n    content.innerText = elementContent;\n    elementContainer.append(title, content);\n  }\n  addElement(phoneNumberContainer, \"Wanna call us for a delivery?\", \"999 99 99 69\")\n  addElement(emailContainer, \"Feeling too shy for a call?\\nEmail us, and we'll bring your food!\", \"thepigeonrestaurant.deliveries@pigeon.mail\")\n  addElement(locationContainer1, \"This is one of our locations\", \"Pidgey Street 21\")\n  addElement(locationContainer2, \"This is another one of our locations\", \"Foxy Street 21\")\n}\n\n\n//# sourceURL=webpack:///./src/loadabout.js?");

/***/ }),

/***/ "./src/loadhome.js":
/*!*************************!*\
  !*** ./src/loadhome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_pigeon_eating_bread_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pigeon-eating-bread.jpg */ \"./assets/pigeon-eating-bread.jpg\");\n\n\nfunction loadHome() {\n  const createReview = (reviewAuthor, reviewText) => {\n    const review = document.createElement(\"div\");\n    review.className = \"review\";\n    const reviewsAuthor = document.createElement(\"h1\");\n    reviewsAuthor.innerText = reviewAuthor;\n    const reviewContent = document.createElement(\"p\");\n    reviewContent.innerText = reviewText;\n\n    // Everything gets inside a div(review) and then gets added to reviewContainer. This way i have a div inside\n    // the reviews-container, so sizing with flexbox remains consistent\n    // reviewAuthor && reviewContent   =>  .review  =>  .reviews  => .reviews-container\n    const mainContainer = document.querySelector(\".reviews-container\");\n    const reviewContainer = document.querySelector(\".reviews\");\n    review.append(reviewsAuthor, reviewContent);\n    reviewContainer.appendChild(review);\n    mainContainer.appendChild(reviewsContainer);\n  };\n  const content = document.querySelector(\"div#content\");\n  const introduction = document.createElement(\"div\");\n  introduction.className = \"introduction\";\n  const reviewsContentAndTitleContainer = document.createElement(\"div\");\n  reviewsContentAndTitleContainer.className = \"reviews-container\";\n\n  content.append(introduction, reviewsContentAndTitleContainer);\n\n  // Add the inside of introduction\n\n  const title = document.createElement(\"h1\");\n  title.innerText = \"The restaurant for PIGEONS\";\n\n  introduction.appendChild(title);\n\n  const introText = document.createElement(\"p\");\n  introText.innerText =\n    \"Ever wanted to eat great food WITHOUT relying on humans? we got you covered! \\nEnjoy a great meal with all of your fluffy friends!\";\n  introduction.appendChild(introText);\n  // Add the title of reviews\n  const reviewTitle = document.createElement(\"h1\");\n  reviewTitle.innerText = \"Don't believe us? Read the reviews...\";\n  reviewsContentAndTitleContainer.appendChild(reviewTitle);\n  // Add the div where every review will be\n\n  const reviewsContainer = document.createElement(\"div\");\n  reviewsContainer.className = \"reviews\";\n  reviewsContentAndTitleContainer.appendChild(reviewsContainer);\n  // Add every review\n  createReview(\"Donut\", '\"The food was marvelous!!\"');\n  createReview(\"Pam\", '\"The lentils were delicious!!\"');\n  createReview(\"Boepie\", '\"Loved every single thing!\"');\n  createReview(\"Everest\", '\"I am the chef, everyone loves my dishes\"');\n\n  // Add the image\n\n  const image = document.createElement(\"img\");\n  image.src = _assets_pigeon_eating_bread_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  content.appendChild(image);\n}\n\n\n//# sourceURL=webpack:///./src/loadhome.js?");

/***/ }),

/***/ "./src/loadmenu.js":
/*!*************************!*\
  !*** ./src/loadmenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n// Menu iife\nconst menu = (() => {\n  let mainDishes = [];\n  let sideDishes = [];\n  let drinks = [];\n\n  const addToDOM = (type, menuItem) => {\n    // Select all of the containers, to add the children later\n    const mainDishesContainer = document.querySelector(\".main-dishes\");\n    const sideDishesContainer = document.querySelector(\".side-dishes\");\n    const drinksContainer = document.querySelector(\".drinks\");\n    // The things that will be added\n    const itemContainer = document.createElement(\"div\");\n    itemContainer.className = \"menu-item\";\n    const name = document.createElement(\"h1\");\n    name.innerText = menuItem.name;\n    const description = document.createElement(\"p\");\n    description.innerText = menuItem.description;\n    const price = document.createElement(\"h2\");\n    price.innerText = menuItem.price;\n    // Function to add each thing to its container\n    function addEachNode(menuContainer) {\n      itemContainer.append(name, description, price);\n      // Add the div to its parent\n      menuContainer.appendChild(itemContainer);\n    }\n    // add the children to the corresponding container\n    switch (type) {\n      case \"main\":\n        addEachNode(mainDishesContainer);\n        break;\n      case \"side\":\n        addEachNode(sideDishesContainer);\n        break;\n      case \"drinks\":\n        addEachNode(drinksContainer);\n        break;\n\n      default:\n        console.error(\"Not a valid type\");\n        break;\n    }\n  };\n  const addMenuObject = (name, description, price, type) => {\n    const menuItem = { name: name, description: description, price: price };\n    function addItem(menuArray) {\n      menuArray.push(menuItem);\n      addToDOM(type, menuItem);\n    }\n    switch (type) {\n      case \"main\":\n        addItem(mainDishes);\n        break;\n      case \"side\":\n        addItem(sideDishes);\n        break;\n      case \"drinks\":\n      case \"drink\":\n        addItem(drinks);\n        break;\n\n      default:\n        console.error(\"Not a valid type\");\n        break;\n    }\n  };\n  const addMainDish = (name, description, price) => {\n    addMenuObject(name, description, price, \"main\");\n  };\n  const addSideDish = (name, description, price) => {\n    addMenuObject(name, description, price, \"side\");\n  };\n  const addDrink = (name, description, price) => {\n    addMenuObject(name, description, price, \"drinks\");\n  };\n\n  return { addMainDish, addSideDish, addDrink, mainDishes, sideDishes, drinks };\n})();\nfunction loadMenu() {\n  const content = document.querySelector(\"div#content\");\n\n  const mainDishesContainer = document.createElement(\"div\");\n  mainDishesContainer.className = \"main-dishes menu\";\n  const sideDishesContainer = document.createElement(\"div\");\n  sideDishesContainer.className = \"side-dishes menu\";\n  const drinksContainer = document.createElement(\"div\");\n  drinksContainer.className = \"drinks menu\";\n  // Add the title of each div\n  const mainDishesTitle = document.createElement(\"h1\");\n  mainDishesTitle.innerText = \"Main Dishes\";\n  mainDishesContainer.appendChild(mainDishesTitle);\n  const sideDishesTitle = document.createElement(\"h1\");\n  sideDishesTitle.innerText = \"Side Dishes\";\n  sideDishesContainer.appendChild(sideDishesTitle);\n  const drinksTitle = document.createElement(\"h1\");\n  drinksTitle.innerText = \"Drinks\";\n  drinksContainer.appendChild(drinksTitle);\n\n  content.append(mainDishesContainer, sideDishesContainer, drinksContainer);\n\n  // add the contents of the menu\n  menu.addMainDish(\"Bowl of seeds\", \"Very yummy\", \"5€\");\n  menu.addMainDish(\"Bread\", \"Cut with expertise by our chef\", \"8€\");\n  menu.addMainDish(\"Wormy Surprise (Vegan!)\", \"A heaping bowl of premium corn kernels, hand-picked for maximum crunch.\", \"6€\")\n  menu.addMainDish(\"Deluxe Birdfeeder Platter\", \"An assortment of seeds, nuts, and dried fruits. Perfect for sharing!\", \"12€\")\n\n  menu.addSideDish(\"Lentis\", \"Our chef's favorite dish, enjoy freshly picked up lentils.\", \"2€\");\n  menu.addSideDish(\"Featherweight French Fries\", \"Crispy and light french fries.\", \"3€\")\n  menu.addSideDish(\"Popcorn\", \"Miniature popped grains, lightly salted. for that crunch.\", \"2€\")\n\n  menu.addDrink(\"Sky Juice (a.k.a. Rainwater)\", \"Pure and refreshing, harvested straight from the clouds.\", \"0,7€\");\n  menu.addDrink(\"Beak Bubble Tea\", \"Tiny bubbles in a seed-flavored infusion, served in a shallow bowl.\", \"2.2€\");\n  menu.addDrink(\"Nest Milkshake\", \"A creamy blend of oats and almond milk, garnished with a hint of honey.\", \"3€\");\n\n}\n\n\n//# sourceURL=webpack:///./src/loadmenu.js?");

/***/ }),

/***/ "./assets/pigeon-eating-bread.jpg":
/*!****************************************!*\
  !*** ./assets/pigeon-eating-bread.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b14070a2ad5da3f5657a.jpg\";\n\n//# sourceURL=webpack:///./assets/pigeon-eating-bread.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;