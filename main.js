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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-color: #94a3b8;\n  --ship-bg: #475569;\n  --hover-color: #38bdf8;\n  --miss-color: #075985;\n  --hit-color: #dc2626;\n  --popup-bg: #365314;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100vw;\n  height: 100vh;\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bg-color);\n}\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  gap: 100px;\n  justify-content: center;\n  align-items: center;\n}\n.popup {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  height: 200px;\n  width: 350px;\n  border: 2px solid black;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-10%, -10%);\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.4s;\n  font-size: 2rem;\n  color: white;\n}\n.popup.active {\n  transform: translate(-50%, -50%);\n  opacity: 100;\n  visibility: visible;\n  transition: 0.4s;\n}\n.popup.active.won {\n  background-color: var(--popup-bg);\n}\n.popup.active.lost {\n  background-color: #7f1d1d;\n}\n.btn {\n  width: 120px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px;\n  border-radius: 20px;\n  color: white;\n  background: none;\n  border-color: 2px solid white;\n  transition: 0.4s;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.btn:hover {\n  width: 160px;\n  font-size: 1.2rem;\n  transition: 0.4s;\n}\n.gameboard {\n  height: fit-content;\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.square {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#player .square.ship {\n  background-color: var(--ship-bg);\n}\n#ai .square.ship {\n  background-color: var(--bg-color);\n}\n#ai .square:hover {\n  background-color: var(--hover-color);\n}\n.square.hit {\n  background-color: var(--miss-color);\n  pointer-events: none;\n}\n#ai .square.ship.hit,\n#player .square.ship.hit {\n  background-color: var(--hit-color);\n  pointer-events: none;\n}\n.gameboard.unclickable {\n  pointer-events: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AI: () => (/* binding */ AI)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\nfunction AI() {\n  let possibleMoves = [];\n  let educatedMoves = [];\n\n  for (let y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; y++) {\n    for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; x++) {\n      possibleMoves.push([x, y]);\n    }\n  }\n\n  function getPossibleMoves() {\n    return possibleMoves;\n  }\n\n  function setPossibleMoves(arr) {\n    possibleMoves = arr;\n  }\n\n  function resetPossibleMoves() {\n    possibleMoves = [];\n    educatedMoves = [];\n    for (let y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; y++) {\n      for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; x++) {\n        possibleMoves.push([x, y]);\n      }\n    }\n  }\n\n  function makeAttack() {\n    if (educatedMoves.length === 0) makeRandomAttack();\n    else makeEducatedAttack();\n    if (_constants__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.checkWinCondition()) (0,_ui__WEBPACK_IMPORTED_MODULE_1__.aiWon)();\n  }\n\n  function makeEducatedAttack() {\n    while (educatedMoves.length > 0) {\n      let move = educatedMoves.shift();\n      if (\n        possibleMoves.find((arr) => arr[0] === move[0] && arr[1] === move[1])\n      ) {\n        let attack = _constants__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.receiveAttack(move);\n\n        (0,_ui__WEBPACK_IMPORTED_MODULE_1__.updatePlayerGameboard)(move);\n\n        if (attack !== \"miss\") {\n          if (attack.isSunk()) {\n            (0,_ui__WEBPACK_IMPORTED_MODULE_1__.colorAdjacentSquares)(attack, false);\n            educatedMoves = [];\n          } else {\n            let correctPositions = attack.getGridPlacement();\n            educatedMoves = correctPositions;\n          }\n        }\n\n        possibleMoves.splice(\n          possibleMoves.findIndex(\n            (arr) => arr[0] === move[0] && arr[1] === move[1]\n          ),\n          1\n        );\n\n        break;\n      }\n\n      if (educatedMoves.length === 0) makeRandomAttack();\n    }\n  }\n\n  function makeRandomAttack() {\n    const moveIndex = Math.floor(Math.random() * possibleMoves.length);\n    let attack = _constants__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.receiveAttack(possibleMoves[moveIndex]);\n\n    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.updatePlayerGameboard)(possibleMoves[moveIndex]);\n\n    if (attack !== \"miss\") {\n      if (attack.isSunk()) (0,_ui__WEBPACK_IMPORTED_MODULE_1__.colorAdjacentSquares)(attack, false);\n      else {\n        fillEducatedMoves(possibleMoves[moveIndex]);\n      }\n    }\n\n    possibleMoves.splice(moveIndex, 1);\n  }\n\n  function fillEducatedMoves(pos) {\n    let xCord = pos[0];\n    let yCord = pos[1];\n\n    // possible cases:\n    // 4 corners (2 paths)\n    // x === 0 but not y, vice versa and same with gridSize - 1 (3 paths)\n    // normal case (4 paths)\n\n    if (xCord === 0) {\n      educatedMoves.push([xCord + 1, yCord]);\n      if (yCord === 0) {\n        educatedMoves.push([xCord, yCord + 1]);\n      } else if (yCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n        educatedMoves.push([xCord, yCord - 1]);\n      } else {\n        educatedMoves.push([xCord, yCord + 1]);\n        educatedMoves.push([xCord, yCord - 1]);\n      }\n    } else if (xCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n      educatedMoves.push([xCord - 1, yCord]);\n      if (yCord === 0) educatedMoves.push([xCord, yCord + 1]);\n      else if (yCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) educatedMoves.push([xCord, yCord - 1]);\n      else {\n        educatedMoves.push([xCord, yCord + 1]);\n        educatedMoves.push([xCord, yCord - 1]);\n      }\n    } else if (yCord === 0) {\n      educatedMoves.push([xCord, yCord + 1]);\n      educatedMoves.push([xCord - 1, yCord]);\n      educatedMoves.push([xCord + 1, yCord]);\n    } else if (yCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n      educatedMoves.push([xCord, yCord - 1]);\n      educatedMoves.push([xCord - 1, yCord]);\n      educatedMoves.push([xCord + 1, yCord]);\n    } else {\n      educatedMoves.push([xCord - 1, yCord]);\n      educatedMoves.push([xCord + 1, yCord]);\n      educatedMoves.push([xCord, yCord - 1]);\n      educatedMoves.push([xCord, yCord + 1]);\n    }\n  }\n\n  return { makeAttack, getPossibleMoves, setPossibleMoves, resetPossibleMoves };\n}\n\n\n//# sourceURL=webpack://battleship/./src/ai.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ai: () => (/* binding */ ai),\n/* harmony export */   aiGameboard: () => (/* binding */ aiGameboard),\n/* harmony export */   gridSize: () => (/* binding */ gridSize),\n/* harmony export */   playerGameboard: () => (/* binding */ playerGameboard)\n/* harmony export */ });\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ \"./src/ai.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nconst gridSize = 10;\nconst aiGameboard = (0,_game__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\nconst playerGameboard = (0,_game__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\nconst ai = (0,_ai__WEBPACK_IMPORTED_MODULE_0__.AI)();\n\n\n//# sourceURL=webpack://battleship/./src/constants.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nfunction Ship(length, hits = 0) {\n  if (length > 5 || length < 1) throw new Error(\"Invalid size\");\n\n  let gridPlacement;\n  let adjacentSquares;\n\n  function hit() {\n    hits += 1;\n  }\n\n  function getHits() {\n    return hits;\n  }\n\n  function isSunk() {\n    return length === hits;\n  }\n\n  function getGridPlacement() {\n    return gridPlacement;\n  }\n\n  function getAdjacentSquares() {\n    return adjacentSquares;\n  }\n\n  function setGridPlacement(arr) {\n    gridPlacement = arr;\n  }\n\n  function setAdjacentSquares(arr) {\n    adjacentSquares = arr;\n  }\n\n  return {\n    length,\n    getHits,\n    hit,\n    isSunk,\n    getGridPlacement,\n    setGridPlacement,\n    getAdjacentSquares,\n    setAdjacentSquares,\n  };\n}\n\nfunction Gameboard() {\n  let arr = [];\n  let drowned = 0;\n\n  for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; i++) {\n    arr[i] = [];\n    for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; j++) {\n      arr[i][j] = null;\n    }\n  }\n\n  function checkWinCondition() {\n    // there are 17 ship squares, if all of them are drowned then the game is over\n    return drowned === 17;\n  }\n\n  function cleanGameboard() {\n    arr = [];\n    drowned = 0;\n    for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; i++) {\n      arr[i] = [];\n      for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; j++) {\n        arr[i][j] = null;\n      }\n    }\n  }\n\n  function getGameboardArr() {\n    return arr;\n  }\n\n  function receiveAttack(pos) {\n    let xCord = pos[0];\n    let yCord = pos[1];\n\n    if (arr[yCord][xCord]) {\n      let ship = arr[yCord][xCord];\n      ship.hit();\n      drowned++;\n      return ship;\n    }\n    return \"miss\";\n  }\n\n  function placeShipsRandomly() {\n    let shipArr = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];\n\n    while (shipArr.length > 0) {\n      let pos = getRandomPosition();\n      let ship = shipArr.pop();\n      if (isHorizontal() === true) {\n        if (placeHorizontally(ship, pos) === false) shipArr.push(ship);\n      } else {\n        if (placeVertically(ship, pos) === false) shipArr.push(ship);\n      }\n    }\n  }\n\n  function getRandomPosition() {\n    let xCord = Math.round(Math.random() * 10);\n    let yCord = Math.round(Math.random() * 10);\n\n    return [xCord, yCord];\n  }\n\n  function isHorizontal() {\n    let num = Math.round(Math.random());\n\n    return num === 0;\n  }\n\n  // pos is array with x and y coordinate of the grid\n  // ship is placed from left to right\n  function placeHorizontally(ship, pos) {\n    if (checkHorizontally(ship, pos) === true) {\n      let xCord = pos[0];\n      let yCord = pos[1];\n      let gridPlacement = [];\n\n      for (let x = xCord; x < xCord + ship.length; x++) {\n        arr[yCord][x] = ship;\n        gridPlacement.push([x, yCord]);\n      }\n\n      ship.setGridPlacement(gridPlacement);\n      return true;\n    }\n    return false;\n  }\n\n  // ship is placed from up to down\n  function placeVertically(ship, pos) {\n    if (checkVertically(ship, pos) === true) {\n      let xCord = pos[0];\n      let yCord = pos[1];\n      let gridPlacement = [];\n\n      for (let y = yCord; y > yCord - ship.length; y--) {\n        arr[y][xCord] = ship;\n        gridPlacement.push([xCord, y]);\n      }\n\n      ship.setGridPlacement(gridPlacement);\n      return true;\n    }\n    return false;\n  }\n\n  function checkVertically(ship, pos) {\n    let xCord = pos[0];\n    let yCord = pos[1];\n\n    if (\n      xCord < 0 ||\n      xCord >= _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize ||\n      yCord < ship.length - 1 ||\n      yCord >= _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize\n    )\n      return false;\n\n    let adjacentSquares = [];\n\n    if (yCord !== _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n      if (arr[yCord + 1][xCord]) return false;\n      adjacentSquares.push([xCord, yCord + 1]);\n      if (xCord === 0) {\n        if (arr[yCord + 1][xCord + 1]) return false;\n        adjacentSquares.push([xCord + 1, yCord + 1]);\n      } else if (xCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n        if (arr[yCord + 1][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord + 1]);\n      } else {\n        if (arr[yCord + 1][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord + 1]);\n        if (arr[yCord + 1][xCord + 1]) return false;\n        adjacentSquares.push([xCord + 1, yCord + 1]);\n      }\n    }\n\n    for (let y = yCord; y > yCord - ship.length; y--) {\n      if (arr[y][xCord]) return false;\n\n      if (xCord === 0) {\n        if (arr[y][xCord + 1]) return false;\n        adjacentSquares.push([xCord + 1, y]);\n      } else if (xCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n        if (arr[y][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, y]);\n      } else {\n        if (arr[y][xCord + 1]) return false;\n        adjacentSquares.push([xCord + 1, y]);\n        if (arr[y][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, y]);\n      }\n    }\n\n    if (yCord - ship.length + 1 > 0) {\n      if (arr[yCord - ship.length][xCord]) return false;\n      adjacentSquares.push([xCord, yCord - ship.length]);\n      if (xCord === 0) {\n        if (arr[yCord - ship.length][xCord + 1]) return false;\n        adjacentSquares.push([xCord + 1, yCord - ship.length]);\n      } else if (xCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n        if (arr[yCord - ship.length][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord - ship.length]);\n      } else {\n        if (arr[yCord - ship.length][xCord + 1]) return false;\n        adjacentSquares.push([xCord + 1, yCord - ship.length]);\n        if (arr[yCord - ship.length][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord - ship.length]);\n      }\n    }\n\n    ship.setAdjacentSquares(adjacentSquares);\n    return true;\n  }\n\n  function checkHorizontally(ship, pos) {\n    let xCord = pos[0];\n    let yCord = pos[1];\n\n    if (\n      yCord < 0 ||\n      yCord >= _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize ||\n      xCord < 0 ||\n      xCord > _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - ship.length\n    )\n      return false;\n\n    let adjacentSquares = [];\n\n    if (xCord !== 0) {\n      if (arr[yCord][xCord - 1]) return false;\n      adjacentSquares.push([xCord - 1, yCord]);\n      if (yCord === 0) {\n        if (arr[yCord + 1][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord + 1]);\n      } else if (yCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n        if (arr[yCord - 1][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord - 1]);\n      } else {\n        if (arr[yCord + 1][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord + 1]);\n        if (arr[yCord - 1][xCord - 1]) return false;\n        adjacentSquares.push([xCord - 1, yCord - 1]);\n      }\n    }\n\n    for (let x = xCord; x < xCord + ship.length; x++) {\n      if (arr[yCord][x]) return false;\n\n      if (yCord === 0) {\n        if (arr[yCord + 1][x]) return false;\n        adjacentSquares.push([x, yCord + 1]);\n      } else if (yCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n        if (arr[yCord - 1][x]) return false;\n        adjacentSquares.push([x, yCord - 1]);\n      } else {\n        if (arr[yCord + 1][x]) return false;\n        adjacentSquares.push([x, yCord + 1]);\n        if (arr[yCord - 1][x]) return false;\n        adjacentSquares.push([x, yCord - 1]);\n      }\n    }\n\n    if (xCord + ship.length < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize) {\n      if (arr[yCord][xCord + ship.length]) return false;\n      adjacentSquares.push([xCord + ship.length, yCord]);\n      if (yCord === 0) {\n        if (arr[yCord + 1][xCord + ship.length]) return false;\n        adjacentSquares.push([xCord + ship.length, yCord + 1]);\n      } else if (yCord === _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1) {\n        if (arr[yCord - 1][xCord + ship.length]) return false;\n        adjacentSquares.push([xCord + ship.length, yCord - 1]);\n      } else {\n        if (arr[yCord + 1][xCord + ship.length]) return false;\n        adjacentSquares.push([xCord + ship.length, yCord + 1]);\n        if (arr[yCord - 1][xCord + ship.length]) return false;\n        adjacentSquares.push([xCord + ship.length, yCord - 1]);\n      }\n    }\n\n    ship.setAdjacentSquares(adjacentSquares);\n    return true;\n  }\n\n  return {\n    arr,\n    checkHorizontally,\n    placeHorizontally,\n    placeVertically,\n    checkVertically,\n    placeShipsRandomly,\n    receiveAttack,\n    checkWinCondition,\n    cleanGameboard,\n    getGameboardArr,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_setup__WEBPACK_IMPORTED_MODULE_0__.setupGame)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupGame: () => (/* binding */ setupGame)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\nfunction setupGame() {\n  const uiPlayerBoard = document.getElementById(\"player\");\n  const uiAiBoard = document.getElementById(\"ai\");\n\n  uiAiBoard.classList.remove(\"unclickable\");\n\n  while (uiPlayerBoard.firstChild)\n    uiPlayerBoard.removeChild(uiPlayerBoard.firstChild);\n  while (uiAiBoard.firstChild) uiAiBoard.removeChild(uiAiBoard.firstChild);\n\n  _constants__WEBPACK_IMPORTED_MODULE_0__.aiGameboard.cleanGameboard();\n  _constants__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.cleanGameboard();\n  _constants__WEBPACK_IMPORTED_MODULE_0__.ai.resetPossibleMoves();\n\n  _constants__WEBPACK_IMPORTED_MODULE_0__.aiGameboard.placeShipsRandomly();\n  _constants__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.placeShipsRandomly();\n\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createGameboards)();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.populateGameboard)(_constants__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getGameboardArr(), true);\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.populateGameboard)(_constants__WEBPACK_IMPORTED_MODULE_0__.aiGameboard.getGameboardArr(), false);\n}\n\n\n//# sourceURL=webpack://battleship/./src/setup.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aiWon: () => (/* binding */ aiWon),\n/* harmony export */   colorAdjacentSquares: () => (/* binding */ colorAdjacentSquares),\n/* harmony export */   createGameboards: () => (/* binding */ createGameboards),\n/* harmony export */   populateGameboard: () => (/* binding */ populateGameboard),\n/* harmony export */   updatePlayerGameboard: () => (/* binding */ updatePlayerGameboard)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\n\n\n\nfunction createGameboards() {\n  const aiGameboard = document.getElementById(\"ai\");\n  const playerGameboard = document.getElementById(\"player\");\n\n  for (let y = _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1; y >= 0; y--) {\n    for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; x++) {\n      const aiSquare = document.createElement(\"div\");\n      aiSquare.classList.add(\"square\");\n      aiSquare.id = `${x},${y}`;\n      addListener(aiSquare);\n\n      aiGameboard.appendChild(aiSquare);\n\n      const playerSquare = document.createElement(\"div\");\n      playerSquare.classList.add(\"square\");\n      playerSquare.id = `${x}${y}`;\n\n      playerGameboard.appendChild(playerSquare);\n    }\n  }\n}\n\nfunction populateGameboard(arr, player) {\n  for (let y = _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize - 1; y >= 0; y--) {\n    for (let x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_0__.gridSize; x++) {\n      if (arr[y][x]) {\n        let shipSquare;\n        if (player === true) shipSquare = document.getElementById(`${x}${y}`);\n        else shipSquare = document.getElementById(`${x},${y}`);\n        shipSquare.classList.add(\"ship\");\n      }\n    }\n  }\n}\n\nfunction addListener(square) {\n  square.addEventListener(\"click\", () => {\n    const id = square.id.split(\",\");\n    const pos = [Number(id[0]), Number(id[1])];\n\n    makeAttack(pos);\n    square.classList.add(\"hit\");\n\n    if (_constants__WEBPACK_IMPORTED_MODULE_0__.aiGameboard.checkWinCondition()) playerWon();\n\n    _constants__WEBPACK_IMPORTED_MODULE_0__.ai.makeAttack();\n  });\n}\n\nfunction makeAttack(pos) {\n  let attack = _constants__WEBPACK_IMPORTED_MODULE_0__.aiGameboard.receiveAttack(pos);\n  if (attack !== \"miss\" && attack.isSunk()) {\n    colorAdjacentSquares(attack, true);\n  }\n}\n\nfunction colorAdjacentSquares(ship, playersAttack) {\n  let adjacentSquares = ship.getAdjacentSquares();\n  let possibleMoves = _constants__WEBPACK_IMPORTED_MODULE_0__.ai.getPossibleMoves();\n\n  for (let i = 0; i < adjacentSquares.length; i++) {\n    let xCord = adjacentSquares[i][0];\n    let yCord = adjacentSquares[i][1];\n\n    if (playersAttack)\n      document.getElementById(`${xCord},${yCord}`).classList.add(\"hit\");\n    else {\n      document.getElementById(`${xCord}${yCord}`).classList.add(\"hit\");\n\n      let index = possibleMoves.findIndex(\n        (move) => move[0] === xCord && move[1] === yCord\n      );\n      if (index !== -1) possibleMoves.splice(index, 1);\n    }\n  }\n}\n\nfunction updatePlayerGameboard(pos) {\n  document.getElementById(`${pos[0]}${pos[1]}`).classList.add(\"hit\");\n}\n\nfunction playerWon() {\n  document.getElementById(\"ai\").classList.add(\"unclickable\");\n\n  const popup = document.querySelector(\".popup\");\n  popup.appendChild(document.createElement(\"p\")).textContent = \"YOU WON!\";\n  const button = document.createElement(\"button\");\n  button.textContent = \"Play again\";\n  button.classList.add(\"btn\");\n  popup.appendChild(button);\n\n  button.addEventListener(\"click\", () => {\n    popup.classList.remove(\"active\");\n    popup.classList.remove(\"won\");\n    while (popup.firstChild) popup.removeChild(popup.firstChild);\n    (0,_setup__WEBPACK_IMPORTED_MODULE_1__.setupGame)();\n  });\n\n  popup.classList.add(\"active\");\n  popup.classList.add(\"won\");\n}\n\nfunction aiWon() {\n  document.getElementById(\"ai\").classList.add(\"unclickable\");\n\n  const popup = document.querySelector(\".popup\");\n  popup.appendChild(document.createElement(\"p\")).textContent = \"YOU LOST!\";\n  const button = document.createElement(\"button\");\n  button.textContent = \"Play again\";\n  button.classList.add(\"btn\");\n  popup.appendChild(button);\n\n  button.addEventListener(\"click\", () => {\n    popup.classList.remove(\"active\");\n    popup.classList.remove(\"lost\");\n    while (popup.firstChild) popup.removeChild(popup.firstChild);\n    (0,_setup__WEBPACK_IMPORTED_MODULE_1__.setupGame)();\n  });\n\n  popup.classList.add(\"active\");\n  popup.classList.add(\"lost\");\n}\n\n\n//# sourceURL=webpack://battleship/./src/ui.js?");

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