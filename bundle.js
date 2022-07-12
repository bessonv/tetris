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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    color: white;\\n    background-color: black;\\n    text-transform: uppercase;\\n}\\n\\n#minigame, .container_game_controls, .container_game_rules, h2 {\\n    text-align: center;\\n    margin-top: 20px;\\n    margin-bottom: 0;\\n}\\n\\n.container_game_controls {\\n    display: inline-block;\\n}\\n\\n.container_game_controls .game_button {\\n    margin: 0 10px;\\n    text-transform: uppercase;\\n    padding: 5px 15px;\\n    color: white;\\n    background-color: black;\\n    border: solid 1px white;\\n}\\n\\n.container_game_controls .game_button:hover {\\n    background-color: rgba(255, 255, 255, 0.5);\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tetris/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tetris/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tetris/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tetris/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tetris/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tetris/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tetris/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tetris/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tetris/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tetris/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BoardPixel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardPixel */ \"./src/BoardPixel.ts\");\n/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shape */ \"./src/Shape.ts\");\n\n\nvar Board = /** @class */ (function () {\n    function Board(ctx, height, width) {\n        this.columnNum = 10;\n        this.rowNum = 15;\n        this.pHeight = height / this.rowNum;\n        this.pWidth = width / this.columnNum;\n        this.pSize = (this.pHeight > this.pWidth) ? this.pWidth : this.pHeight;\n        this.pixels = [];\n        this.loseState = false;\n        this.currentShape;\n        this.ctx = ctx;\n    }\n    Board.prototype.init = function () {\n        for (var j = 0; j < this.rowNum; j++) {\n            var row = [];\n            for (var i = 0; i < this.columnNum; i++) {\n                var newpixel = new _BoardPixel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i, j, this.pSize);\n                row.splice(i, 0, newpixel);\n                newpixel.renderPixel(this.ctx);\n            }\n            this.pixels.splice(j, 0, row);\n        }\n        this.addShape();\n    };\n    Board.prototype.clearShape = function () {\n        var _this = this;\n        var locationArray = this.currentShape.getBlockLocation(this.currentShape.location);\n        locationArray.forEach(function (shapePixel) {\n            var pixel = _this.setPixelType(shapePixel, 0);\n            if (pixel) {\n                pixel.clearPixel(_this.ctx);\n            }\n        });\n    };\n    Board.prototype.drawShape = function () {\n        var _this = this;\n        var locationArray = this.currentShape.getBlockLocation(this.currentShape.location);\n        locationArray.forEach(function (shapePixel) {\n            var pixel = _this.setPixelType(shapePixel, 1);\n            if (pixel) {\n                pixel.fillPixel(_this.ctx, _this.currentShape.color);\n            }\n        });\n    };\n    Board.prototype.addShape = function () {\n        var randomShape = Math.floor(Math.random() * 5);\n        var randomColor = Math.floor(Math.random() * 5);\n        this.currentShape = new _Shape__WEBPACK_IMPORTED_MODULE_1__[\"default\"](randomShape, randomColor);\n        var offset = -1;\n        if (this.currentShape.frameDim() > 3) {\n            offset = -3;\n        }\n        this.currentShape.moveToLocation(offset, Math.floor(this.columnNum / 2) - 1);\n        var locationArray = this.currentShape.getBlockLocation(this.currentShape.location);\n        if (this.hasShapeCollision(locationArray)) {\n            this.loseState = true;\n        }\n    };\n    Board.prototype.moveShape = function (direction) {\n        var location = this.currentShape.getNewLocation(direction);\n        var locationArray = this.currentShape.getBlockLocation(location);\n        if (this.hasShapeCollision(locationArray)) {\n            this.currentShape.fixed = true;\n        }\n        else if (!this.hasWallCollision(locationArray)) {\n            this.currentShape.updateLocation();\n        }\n    };\n    Board.prototype.checkRows = function () {\n        var _this = this;\n        var rowsToClear = [];\n        for (var row = 0; row < this.pixels.length; row++) {\n            var filledLine = true;\n            for (var column = 0; column < this.pixels[row].length; column++) {\n                if (this.pixels[row][column].type == 0) {\n                    filledLine = false;\n                }\n            }\n            if (filledLine) {\n                rowsToClear.push(row);\n            }\n        }\n        rowsToClear.forEach(function (row) {\n            _this.redrawPixelArray(row);\n        });\n    };\n    Board.prototype.redrawPixelArray = function (borderrow) {\n        for (var row = this.pixels.length; row > 0; row--) {\n            if (row < borderrow) {\n                for (var col = 0; col < this.pixels[row].length; col++) {\n                    var pixel = this.pixels[row][col];\n                    this.pixels[row + 1][col].type = pixel.type;\n                    this.pixels[row + 1][col].color = pixel.color;\n                    this.pixels[row + 1][col].renderPixel(this.ctx);\n                }\n            }\n        }\n    };\n    Board.prototype.getPixelType = function (coords) {\n        if ((coords[0] >= 0 && coords[1] >= 0) &&\n            coords[0] in this.pixels &&\n            coords[1] in this.pixels[coords[0]]) {\n            var pixel = this.pixels[coords[0]][coords[1]];\n            return pixel.type;\n        }\n        return null;\n    };\n    Board.prototype.setPixelType = function (coords, type) {\n        if (coords[0] >= 0 && coords[1] >= 0) {\n            var pixel = this.pixels[coords[0]][coords[1]];\n            pixel.type = type;\n            return pixel;\n        }\n        else {\n            return null;\n        }\n    };\n    Board.prototype.hasWallCollision = function (location) {\n        var _this = this;\n        var collision = false;\n        location.forEach(function (shapePixel) {\n            if (shapePixel[1] < 0 || shapePixel[1] > _this.columnNum - 1) {\n                collision = true;\n            }\n        });\n        return collision;\n    };\n    Board.prototype.hasShapeCollision = function (location) {\n        var _this = this;\n        var collision = false;\n        location.forEach(function (shapePixel) {\n            if (shapePixel[0] > _this.rowNum - 1) {\n                collision = true;\n            }\n            else {\n                if (_this.getPixelType(shapePixel) == 1) {\n                    collision = true;\n                }\n            }\n        });\n        return collision;\n    };\n    Board.prototype.intersection = function (location, currentlocation) {\n        var intersection = false;\n        location.forEach(function (pixel) {\n            currentlocation.forEach(function (curpixel) {\n                if ((pixel[0] == curpixel[0]) && (pixel[1] == curpixel[1])) {\n                    intersection = true;\n                }\n            });\n        });\n        return intersection;\n    };\n    return Board;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://tetris/./src/Board.ts?");

/***/ }),

/***/ "./src/BoardPixel.ts":
/*!***************************!*\
  !*** ./src/BoardPixel.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar BoardPixel = /** @class */ (function () {\n    function BoardPixel(xPosition, yPosition, pSize) {\n        this.x = xPosition * pSize;\n        this.y = yPosition * pSize;\n        this.pSize = pSize;\n        this.type = 0;\n        this.color = 'black';\n    }\n    BoardPixel.prototype.clearPixel = function (ctx) {\n        this.color = 'black';\n        this.renderPixel(ctx);\n    };\n    BoardPixel.prototype.renderPixel = function (ctx) {\n        ctx.fillStyle = this.color;\n        ctx.fillRect(this.x, this.y, this.pSize, this.pSize);\n        ctx.strokeStyle = 'white';\n        ctx.strokeRect(this.x, this.y, this.pSize, this.pSize);\n    };\n    BoardPixel.prototype.fillPixel = function (ctx, color) {\n        this.color = color;\n        this.renderPixel(ctx);\n    };\n    return BoardPixel;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardPixel);\n\n\n//# sourceURL=webpack://tetris/./src/BoardPixel.ts?");

/***/ }),

/***/ "./src/GameLogic.ts":
/*!**************************!*\
  !*** ./src/GameLogic.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\n\nvar GameLogic = /** @class */ (function () {\n    function GameLogic(ctx, canvas) {\n        this.gameStatus;\n        this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas.height, canvas.width);\n        this.board.init();\n        this.gameloop;\n        this.ctx = ctx;\n    }\n    GameLogic.prototype.input = function (direction) {\n        this.board.clearShape();\n        this.board.moveShape(direction);\n        this.board.drawShape();\n    };\n    GameLogic.prototype.run = function () {\n        var _this = this;\n        this.board.addShape();\n        this.board.drawShape();\n        this.gameStatus = 'running';\n        var mainLoop = setInterval(function () {\n            if (_this.gameStatus == 'running') {\n                _this.input(\"down\");\n                if (_this.board.currentShape.fixed) {\n                    _this.board.checkRows();\n                    _this.board.addShape();\n                    if (_this.board.loseState) {\n                        _this.stop();\n                    }\n                    _this.board.drawShape();\n                }\n                console.log(_this.board);\n            }\n            if (_this.gameStatus == 'stop') {\n                _this.board.clearShape();\n                _this.board.init();\n                return clearInterval(mainLoop);\n            }\n            if (_this.gameStatus == 'pause') {\n                console.log(_this.board, _this.gameStatus);\n            }\n        }, 700);\n    };\n    GameLogic.prototype.stop = function () {\n        this.gameStatus = 'stop';\n    };\n    GameLogic.prototype.pause = function () {\n        this.gameStatus = 'pause';\n    };\n    GameLogic.prototype.resume = function () {\n        this.gameStatus = 'running';\n    };\n    return GameLogic;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLogic);\n\n\n//# sourceURL=webpack://tetris/./src/GameLogic.ts?");

/***/ }),

/***/ "./src/Shape.ts":
/*!**********************!*\
  !*** ./src/Shape.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Shape = /** @class */ (function () {\n    function Shape(shapeType, shapeColor) {\n        var shapes = [\n            [[1, 0], [0, 1], [1, 1], [2, 1]],\n            [[1, 0], [1, 1], [1, 2], [1, 3]],\n            [[1, 1], [1, 2], [2, 1], [2, 2]],\n            [[2, 0], [0, 1], [1, 1], [2, 1]],\n            [[0, 0], [0, 1], [1, 1], [1, 2]] // tetris shape 3x3\n        ];\n        var colors = [\n            'green',\n            'red',\n            'blue',\n            'orange',\n            'purple'\n        ];\n        this.shapeType = shapeType;\n        this.shape = shapes[shapeType];\n        this.location = [0, 0]; // horizontal, vertical\n        this.newlocation = [0, 0];\n        this.color = colors[shapeColor];\n        this.fixed = false;\n    }\n    Shape.prototype.moveLeft = function () {\n        this.newlocation[0]--;\n    };\n    Shape.prototype.moveRight = function () {\n        this.newlocation[0]++;\n    };\n    Shape.prototype.moveDown = function () {\n        this.newlocation[1]++;\n    };\n    Shape.prototype.moveToLocation = function (row, col) {\n        this.location = [col, row];\n    };\n    Shape.prototype.updateLocation = function () {\n        this.location = this.newlocation.slice();\n    };\n    Shape.prototype.frameDim = function () {\n        var num = 3;\n        if (this.shapeType == 1 || this.shapeType == 2) {\n            num = 4;\n        }\n        return num;\n    };\n    Shape.prototype.getNewLocation = function (direction) {\n        this.newlocation = this.location.slice();\n        if (direction == \"down\") {\n            this.moveDown();\n        }\n        else if (direction == \"left\") {\n            this.moveLeft();\n        }\n        else if (direction == \"right\") {\n            this.moveRight();\n        }\n        else if (direction == \"up\") {\n            this.rotate();\n        }\n        return this.newlocation;\n    };\n    Shape.prototype.getBlockLocation = function (loc) {\n        var blockLocation = [];\n        for (var i = 0; i < this.shape.length; i++) {\n            var x = this.shape[i][0] + loc[0];\n            var y = this.shape[i][1] + loc[1];\n            blockLocation.push([y, x]);\n        }\n        return blockLocation;\n    };\n    Shape.prototype.rotate = function () {\n        var transposed = [];\n        this.shape.forEach(function (pixel) {\n            transposed.push([pixel[1], pixel[0]]);\n        });\n        var reversed = [];\n        var num = this.frameDim();\n        var _loop_1 = function (i) {\n            var _loop_2 = function (j) {\n                transposed.forEach(function (pixel) {\n                    if (pixel[0] == i && pixel[1] == j) {\n                        reversed.push([i, num - 1 - j]);\n                    }\n                });\n            };\n            for (var j = 0; j < num; j++) {\n                _loop_2(j);\n            }\n        };\n        for (var i = 0; i < num; i++) {\n            _loop_1(i);\n        }\n        this.shape = reversed.slice();\n    };\n    Shape.prototype.turnRight = function () {\n        this.rotate();\n    };\n    Shape.prototype.turnLeft = function () {\n        this.rotate();\n    };\n    return Shape;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shape);\n\n\n//# sourceURL=webpack://tetris/./src/Shape.ts?");

/***/ }),

/***/ "./src/Tetris.ts":
/*!***********************!*\
  !*** ./src/Tetris.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameLogic */ \"./src/GameLogic.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MiniGame = /** @class */ (function () {\n    function MiniGame() {\n        var _this = this;\n        this.again = function () {\n            _this.initDom();\n        };\n        this.cancel = function () {\n            var container = document.getElementById(\"minigame\");\n            container.classList.toggle('container_game_start');\n            container.innerHTML = \"\";\n        };\n        this.next_round = false;\n    }\n    MiniGame.prototype.initDom = function () {\n        var game = document.getElementById(\"minigame\");\n        if (!game.classList.contains(\"container_game_start\")) {\n            game.classList.toggle(\"container_game_start\");\n        }\n    };\n    MiniGame.prototype.createCanvas = function () {\n        var canvas = document.createElement(\"canvas\");\n        canvas.width = 300;\n        canvas.height = 450;\n        canvas.id = \"canvas\";\n        canvas.style.cssText = \"width: 300px; height: 450px;\";\n        return canvas;\n    };\n    MiniGame.prototype.createButton = function (name, event) {\n        var button = document.createElement(\"input\");\n        button.type = \"button\";\n        button.value = name;\n        button.classList.add(\"game_button\");\n        button.addEventListener(\"click\", event);\n        return button;\n    };\n    return MiniGame;\n}());\nvar Tetris = /** @class */ (function (_super) {\n    __extends(Tetris, _super);\n    function Tetris() {\n        var _this = _super.call(this) || this;\n        _this.pause = function (e) {\n            var button = e.target;\n            if (_this.isPaused) {\n                _this.game.resume();\n                _this.isPaused = false;\n                button.value = \"Pause\";\n            }\n            else {\n                _this.game.pause();\n                _this.isPaused = true;\n                button.value = \"Resume\";\n            }\n        };\n        _this.start = function () {\n            _this.game.run();\n        };\n        _this.stop = function () {\n            _this.game.stop();\n        };\n        _this.restart = function () {\n            _this.again;\n            _this.game.run();\n        };\n        _this.checkKey = function (e) {\n            e.preventDefault();\n            // e = e || window.event;\n            var direction = '';\n            if (e.code == 'ArrowDown') {\n                direction = \"down\";\n            }\n            else if (e.code == \"ArrowLeft\") {\n                direction = \"left\";\n            }\n            else if (e.code == \"ArrowRight\") {\n                direction = \"right\";\n            }\n            else if (e.code == \"ArrowUp\") {\n                direction = \"up\";\n            }\n            else {\n                return;\n            }\n            _this.game.input(direction);\n        };\n        _this.initDom();\n        _this.next_round = false;\n        _this.isPaused = false;\n        return _this;\n    }\n    Tetris.prototype.initDom = function () {\n        _super.prototype.initDom.call(this);\n        var canvas = this.createCanvas();\n        var rules = this.createRules();\n        var container = document.getElementById(\"minigame\");\n        var buttons = this.createButtons();\n        if (container) {\n            container.innerHTML = \"\";\n            var ctx = canvas.getContext(\"2d\");\n            ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, canvas.width, canvas.height);\n            container.appendChild(canvas);\n            container.appendChild(rules);\n            container.appendChild(buttons);\n            canvas.focus();\n            this.game = new _GameLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n            document.onkeydown = this.checkKey;\n        }\n    };\n    Tetris.prototype.createRules = function () {\n        var rules = document.createElement('div');\n        rules.innerHTML =\n            \"<div>Controls:  &#8594; right,  &#8592; left,  &#8593; rotate</div>\";\n        rules.classList.add('container_game_rules');\n        return rules;\n    };\n    Tetris.prototype.createButtons = function () {\n        var buttonContainer = document.createElement('div');\n        buttonContainer.classList.add('container_game_controls');\n        buttonContainer.appendChild(this.createButton(\"Start\", this.start));\n        buttonContainer.appendChild(this.createButton(\"Pause\", this.pause));\n        buttonContainer.appendChild(this.createButton(\"Stop\", this.stop));\n        buttonContainer.appendChild(this.createButton(\"Restart\", this.again));\n        return buttonContainer;\n    };\n    return Tetris;\n}(MiniGame));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tetris);\n\n\n//# sourceURL=webpack://tetris/./src/Tetris.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tetris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tetris */ \"./src/Tetris.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    console.log('loaded');\n    new _Tetris__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});\n\n\n//# sourceURL=webpack://tetris/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;