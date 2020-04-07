/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\r\n   ========================================================================== */\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\r\n   ========================================================================== */\n/**\r\n * Remove the margin in all browsers.\r\n */\nbody {\n  margin: 0; }\n\n/**\r\n * Render the `main` element consistently in IE.\r\n */\nmain {\n  display: block; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\nimg {\n  border-style: none; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Correct the padding in Firefox.\r\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\r\n   ========================================================================== */\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\ndetails {\n  display: block; }\n\n/*\r\n * Add the correct display in all browsers.\r\n */\nsummary {\n  display: list-item; }\n\n/* Misc\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 10+.\r\n */\ntemplate {\n  display: none; }\n\n/**\r\n * Add the correct display in IE 10.\r\n */\n[hidden] {\n  display: none; }\n\n.textarea {\n  display: block;\n  width: 770px;\n  height: 250px;\n  margin: 0 auto 10px;\n  padding: 10px;\n  font-size: 18px;\n  color: #444;\n  border-radius: 3px;\n  border-color: #f2f2f4;\n  resize: none; }\n\n.keyboard {\n  width: 790px;\n  padding: 10px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.keyboard__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.key {\n  width: 40px;\n  height: 40px;\n  margin: 6px;\n  font-weight: 500;\n  line-height: 40px;\n  text-align: center;\n  color: #101010;\n  background-color: #ffffff;\n  border-radius: 3px;\n  cursor: pointer;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition: border-radius .2s, background-color .2s;\n  -o-transition: border-radius .2s, background-color .2s;\n  transition: border-radius .2s, background-color .2s; }\n\n.key.Enter {\n  width: 100px; }\n\n.key.Backspace {\n  width: 100px; }\n\n.key.ShiftLeft,\n.key.ShiftRight {\n  width: 100px; }\n\n.key.ContolLeft,\n.key.ContolRight {\n  width: 42px; }\n\n.key.Tab {\n  width: 50px; }\n\n.key.CapsLock {\n  width: 100px; }\n\n.key.Space {\n  -webkit-box-flex: 2;\n  -ms-flex-positive: 2;\n  flex-grow: 2; }\n\n.key.Tab,\n.key.Enter,\n.key.ShiftLeft,\n.key.ShiftRight,\n.key.Backquote,\n.key.CapsLock,\n.key.Space,\n.key.Backspace,\n.key.Delete,\n.key.MetaLeft,\n.key.ControlLeft,\n.key.ControlRight,\n.key.AltLeft,\n.key.AltRight,\n.key.ArrowUp,\n.key.ArrowLeft,\n.key.ArrowRight,\n.key.ArrowDown {\n  background-color: #484aa1;\n  color: #ffffff; }\n\n.down,\n.up {\n  width: 100%;\n  height: 100%;\n  display: inline-block; }\n\n.off {\n  display: none; }\n\n.key:hover,\n.key:focus,\n.key:active {\n  background-color: #5571ee; }\n\n.key--active {\n  background-color: #5571ee;\n  border-radius: 25%;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24); }\n\n.key.Tab.key--active,\n.key.Backquote.key--active,\n.key.Delete.key--active,\n.key.MetaLeft.key--active,\n.key.ControlLeft.key--active,\n.key.ControlRight.key--active,\n.key.AltLeft.key--active,\n.key.AltRight.key--active,\n.key.ArrowUp.key--active,\n.key.ArrowLeft.key--active,\n.key.ArrowRight.key--active,\n.key.ArrowDown.key--active {\n  background-color: #5571ee;\n  border-radius: 25%; }\n\n.key.ShiftLeft.key--active,\n.key.ShiftRight.key--active,\n.key.Enter.key--active,\n.key.CapsLock.key--active,\n.key.Backspace.key--active,\n.key.Space.key--active {\n  background-color: #5571ee;\n  border-radius: 15px; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 400;\n  background: #b4bbce; }\n\n.wrapper {\n  width: 810px;\n  padding: 10px;\n  margin: 0 auto;\n  background: #d5d8df;\n  border-bottom-right-radius: 5%;\n  border-bottom-left-radius: 5%;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");




const app = new _js_app__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.start();


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/row */ "./src/js/components/row.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/component */ "./src/js/components/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");






class App extends _components_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super();
    this.state = {
      en: true,
      uppercase: false,
      result: '',
      pressed: new Set(),
      arr: []
    };
    this.template = `<div class="wrapper">
                      <textarea id="result" class="textarea" rows="5" cols="60"></textarea>
                      <div class="keyboard"></div>
                    </div>`;
  }

  getTemplate() {
    return this.template;
  }

  createApp() {
    const app = this.createElement(this.getTemplate());
    const appTemplate = document.createDocumentFragment();
    appTemplate.appendChild(app);
    const keyboard = appTemplate.querySelector('.keyboard');

    _data__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((el) => {
      const row = new _components_row__WEBPACK_IMPORTED_MODULE_1__["default"](el);
      keyboard.appendChild(row.createRow());
    });

    document.body.appendChild(appTemplate);
  }

  onClick({ target }) {
    const capsLockButton = document.querySelector('.CapsLock');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');

    const textarea = document.getElementById('result');

    const currentValue = textarea.value;
    const startCursorValue = textarea.selectionStart;
    const endCursorValue = textarea.selectionEnd;

    if (target.classList.contains('CapsLock')) {
      if (this.state.uppercase) { // switch capsLock state
        this.state.uppercase = false;
      } else this.state.uppercase = true;

      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase, upKeys, downKeys);

      if (capsLockButton.classList.contains('key--active')) {
        capsLockButton.classList.remove('key--active');
      } else {
        capsLockButton.classList.add('key--active');
      }
    }

    if (target.classList.contains('down') || target.classList.contains('up')) {
      const char = target.innerText;
      let className = target.classList[0];
      textarea.focus();

      if (_constants__WEBPACK_IMPORTED_MODULE_4__["default"].NOT_FOR_PRINT_BUTTONS.includes(className)) {
        return;
      }

      switch (className) {
        case 'Space':
          textarea.value = `${currentValue} `;
          this.state.result = textarea.value;
          break;
        case 'Backspace':
          if (startCursorValue !== this.state.result.length) {
            const subStr = currentValue.substr(startCursorValue - 1, 1);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue - 1, startCursorValue - 1);
          }
          if (startCursorValue === this.state.result.length) {
            textarea.value = currentValue.replace(/.$/, '');
            this.state.result = textarea.value;
          }
          if (startCursorValue !== endCursorValue) {
            const subStr = currentValue.slice(startCursorValue, endCursorValue);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue, startCursorValue);
          }
          break;
        case 'Enter':
          textarea.value = `${currentValue}\r\n`;
          this.state.result = textarea.value;
          break;
        case 'Tab':
          textarea.value = `${currentValue}  `;
          this.state.result = textarea.value;
          break;
        case 'Delete':
          if (startCursorValue === endCursorValue) {
            const subStr = currentValue.substr(startCursorValue, 1);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue, startCursorValue);
          } else {
            const subStr = currentValue.slice(startCursorValue, endCursorValue);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue, startCursorValue);
          }
          break;
        case 'ArrowLeft':
          if (startCursorValue === 1) {
            textarea.setSelectionRange(0, 0);
          }
          if (startCursorValue > 1) {
            textarea.setSelectionRange(startCursorValue - 1, startCursorValue - 1);
          }
          break;
        case 'ArrowRight':
          if (startCursorValue === this.state.result.length) {
            textarea.value = `${currentValue} `;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
          }
          textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
          break;
        case 'notForPrint':
          textarea.value = `${currentValue}`;
          this.state.result = textarea.value;
          break;

        default:
          // ability to insert a character in the middle of a line
          if (this.state.result.length !== startCursorValue) {
            const subStrStart = currentValue.slice(0, startCursorValue);
            const subStrEnd = currentValue.slice(startCursorValue);
            textarea.value = `${subStrStart}${char}${subStrEnd}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
          } else {
            textarea.value = currentValue + char;
            this.state.result = textarea.value;
          }
      }
    }
  }

  onMouseDown({ target }) {
    const element = document.querySelector(`.${target.classList[0]}`);
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');
    const capsLockButton = document.querySelector('.CapsLock');

    if (!element) { // if null
      return;
    }

    if (element.classList.contains('ShiftLeft') || element.classList.contains('ShiftRight')) {
      if (capsLockButton.classList.contains('key--active')) {
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase = false, upKeys, downKeys);
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase = true, upKeys, downKeys);
      }
    }

    if (element.classList.contains('key') && !element.classList.contains('CapsLock')) {
      element.classList.add('key--active');
    }
  }

  onMouseUp({ target }) {
    const element = document.querySelector(`.${target.classList[0]}`);
    const capsLockButton = document.querySelector('.CapsLock');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');

    if (!element) {
      return;
    }

    if (element.classList.contains('ShiftLeft') || element.classList.contains('ShiftRight')) {
      if (capsLockButton.classList.contains('key--active')) {
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase = true, upKeys, downKeys);
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase = false, upKeys, downKeys);
      }
    }

    if (element.classList.contains('key') && !element.classList.contains('CapsLock') && element.classList.contains('key--active')) {
      element.classList.remove('key--active');
    }
  }

  onKeyDown(event) {
    const key = event.code;
    const { keyCode } = event;
    const textarea = document.getElementById('result');
    const currentValue = textarea.value;
    const startCursorValue = textarea.selectionStart;
    const ctrlButton = document.querySelector('.ControlLeft');
    const keyboard = document.querySelector('.keyboard');
    const capsLockButton = document.querySelector('.CapsLock');
    const enKeys = document.querySelectorAll('.en');
    const ruKeys = document.querySelectorAll('.ru');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');

    if (!_constants__WEBPACK_IMPORTED_MODULE_4__["default"].NOT_FOR_PRESS_BUTTONS.includes(key)) {
      this.state.pressed.add(key);
    } else {
      return;
    }

    if (event.key === 'AltGraph') {
      ctrlButton.classList.remove('key--active');
    }

    const element = keyboard.querySelector(`.${key}`);
    textarea.focus();

    if (!element.classList.contains('CapsLock')) {
      if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.ALT && !this.state.pressed.has('ControlLeft')) {
        event.preventDefault();
        element.classList.add('key--active');
      } else {
        element.classList.add('key--active');
      }
    }

    // switch state
    if (this.state.pressed.has('ShiftLeft') && this.state.pressed.has('AltLeft')) {
      if (this.state.en) { // switch lang state
        this.state.en = false;
      } else {
        this.state.en = true;
      }

      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].saveState(this.state.en);
      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.en, enKeys, ruKeys);
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.SHIFT && this.state.pressed.size === 1) {
      if (this.state.uppercase) {
        this.state.uppercase = false; // switch shift state
      } else {
        this.state.uppercase = true;
      }

      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase, upKeys, downKeys);
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.CAPS_LOCK) {
      if (this.state.uppercase) { // switch capsLock state
        this.state.uppercase = false;
      } else {
        this.state.uppercase = true;
      }

      _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase, upKeys, downKeys);

      if (capsLockButton.classList.contains('key--active')) {
        capsLockButton.classList.remove('key--active');
      } else {
        capsLockButton.classList.add('key--active');
      }
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.TAB) {
      event.preventDefault();
      textarea.value = `${currentValue}  `;
      this.state.result = textarea.value;
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.ARROW_LEFT) {
      if (startCursorValue === 1) {
        textarea.setSelectionRange(0, 0);
      }
      if (startCursorValue > 1) {
        textarea.setSelectionRange(startCursorValue - 1, startCursorValue - 1);
      }
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.ARROW_RIGHT) {
      if (startCursorValue === this.state.result.length) {
        textarea.value = `${currentValue} `;
        this.state.result = textarea.value;
        textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
      }
      textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.ARROW_UP) {
      event.preventDefault();
      textarea.value = `${currentValue}▲`;
      this.state.result = textarea.value;
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.ARROW_DOWN) {
      textarea.value = `${currentValue}▼`;
      this.state.result = textarea.value;
    }

    this.state.result = textarea.value;
  }

  onKeyUp(event) {
    const key = event.code;
    const { keyCode } = event;
    const element = document.querySelector(`.${key}`);
    const capsLockButton = document.querySelector('.CapsLock');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');
    const textarea = document.getElementById('result');

    if (this.state.pressed.size === 0) {
      return;
    }

    if (!element) { // if null
      return;
    }

    if (element.classList.contains('key--active') && !element.classList.contains('CapsLock')) {
      element.classList.remove('key--active');
    }

    if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].KEY_CODES.SHIFT) { // switch shift state
      if (capsLockButton.classList.contains('key--active')) {
        this.state.uppercase = true;
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase, upKeys, downKeys);
      } else {
        this.state.uppercase = false;
        _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.uppercase, upKeys, downKeys);
      }
    }

    this.state.result = textarea.value;
    this.state.pressed.delete(event.code);
    textarea.focus();
  }

  static onMouseLeave() {
    const onMouseLeaveHandler = (event) => {
      const { target } = event;
      if (!target.classList.contains('key')) return;

      if (!target.classList.contains('CapsLock') && target.classList.contains('key--active')) {
        target.classList.remove('key--active');
      }
    };

    const keyButton = document.querySelectorAll('.key');
    keyButton.forEach((button) => {
      button.addEventListener('mouseleave', onMouseLeaveHandler);
    });
  }

  localStorageInit() {
    const saveLangValue = localStorage.getItem('lang-en');
    const enKeys = document.querySelectorAll('.en');
    const ruKeys = document.querySelectorAll('.ru');

    if (saveLangValue === 'true') { // switch lang state
      this.state.en = true;
    } else this.state.en = false;

    _utils__WEBPACK_IMPORTED_MODULE_3__["default"].switcher(this.state.en, enKeys, ruKeys);
  }


  start() {
    this.createApp();

    document.addEventListener('click', this.onClick.bind(this));
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
    App.onMouseLeave();

    // init localStorage data
    window.addEventListener('load', this.localStorageInit.bind(this), false);
  }
}


/***/ }),

/***/ "./src/js/components/component.js":
/*!****************************************!*\
  !*** ./src/js/components/component.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
class Component {
  constructor() {
    this.template = '';
  }

  getTemplate() {
    return this.template;
  }

  createElement() {
    const template = this.getTemplate();
    const newElement = document.createElement('template');
    newElement.innerHTML = template;
    return newElement.content.children[0];
  }
}


/***/ }),

/***/ "./src/js/components/key.js":
/*!**********************************!*\
  !*** ./src/js/components/key.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Key; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");


class Key extends _component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this.name = data.name;
    this.value = data.value;
  }

  getTemplate() {
    return `
      <div class="key ${this.name}">
        <span class="key-${this.name} en">
          <span class="${this.name} down">${this.value[0][0]}</span>
          <span class="${this.name} up off">${this.value[0][1]}</span>
        </span>
        <span class="key-${this.name} ru off">
          <span class="${this.name} down">${this.value[1][0]}</span>
          <span class="${this.name} up off">${this.value[1][1]}</span>
        </span>
      </div>`;
  }
}


/***/ }),

/***/ "./src/js/components/row.js":
/*!**********************************!*\
  !*** ./src/js/components/row.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key */ "./src/js/components/key.js");



class Row extends _component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(data) {
    super();
    this.data = data;
    this.template = '<div class="keyboard__row"></div>';
  }

  getRow() {
    const rowContainer = document.createDocumentFragment();

    this.data.forEach((item) => {
      const key = new _key__WEBPACK_IMPORTED_MODULE_1__["default"](item);
      const keyElement = key.createElement(item);

      rowContainer.appendChild(keyElement);
    });

    return rowContainer;
  }

  createRow() {
    const rowElement = this.createElement();
    const rowData = this.getRow();
    rowElement.appendChild(rowData);
    return rowElement;
  }
}


/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CONSTANTS = {
  NOT_FOR_PRINT_BUTTONS: [
    'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'MetaLeft', 'ControlLeft', 'ControlRight'
  ],
  NOT_FOR_PRESS_BUTTONS: [
    'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Pause', 'Insert',
    'Home', 'PageUp', 'PageDown', 'End', 'NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 'Numpad7',
    'Numpad8', 'Numpad9', 'NumpadAdd', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad0',
    'NumpadDecimal', 'NumpadEnter', 'ContextMenu'
  ],
  KEY_CODES: {
    SHIFT: 16,
    CAPS_LOCK: 20,
    TAB: 9,
    ALT: 18,
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39,
    ARROW_UP: 38,
    ARROW_DOWN: 40
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CONSTANTS);


/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DATA = [
  [
    { name: 'Backquote', value: [['`', '~'], ['ё', 'Ё']] },
    { name: 'Digit1', value: [['1', '!'], ['1', '!']] },
    { name: 'Digit2', value: [['2', '!'], ['2', '@']] },
    { name: 'Digit3', value: [['3', '#'], ['3', '№']] },
    { name: 'Digit4', value: [['4', '$'], ['4', ';']] },
    { name: 'Digit5', value: [['5', '%'], ['5', '%']] },
    { name: 'Digit6', value: [['6', '^'], ['6', ':']] },
    { name: 'Digit7', value: [['7', '&'], ['7', '?']] },
    { name: 'Digit8', value: [['8', '*'], ['8', '*']] },
    { name: 'Digit9', value: [['9', '('], ['9', '(']] },
    { name: 'Digit0', value: [['0', ')'], ['0', ')']] },
    { name: 'Minus', value: [['-', '_'], ['-', '_']] },
    { name: 'Equal', value: [['=', '+'], ['=', '+']] },
    { name: 'Backspace', value: [['Backspace', 'Backspace'], ['Backspace', 'Backspace']] }
  ],
  [
    { name: 'Tab', value: [['Tab', 'Tab'], ['Tab', 'Tab']] },
    { name: 'KeyQ', value: [['q', 'Q'], ['й', 'Й']] },
    { name: 'KeyW', value: [['w', 'W'], ['ц', 'Ц']] },
    { name: 'KeyE', value: [['e', 'E'], ['у', 'У']] },
    { name: 'KeyR', value: [['r', 'R'], ['к', 'К']] },
    { name: 'KeyT', value: [['t', 'T'], ['е', 'Е']] },
    { name: 'KeyY', value: [['y', 'Y'], ['н', 'Н']] },
    { name: 'KeyU', value: [['u', 'U'], ['г', 'Г']] },
    { name: 'KeyI', value: [['i', 'I'], ['ш', 'Ш']] },
    { name: 'KeyO', value: [['o', 'O'], ['щ', 'Щ']] },
    { name: 'KeyP', value: [['p', 'P'], ['з', 'З']] },
    { name: 'BracketLeft', value: [['[', '{ '], ['х', 'Х']] },
    { name: 'BracketRight', value: [[']', '}'], ['ъ', 'Ъ']] },
    { name: 'Backslash', value: [['\\', '|'], ['\\', '/']] },
    { name: 'Delete', value: [['Del', 'Del'], ['Del', 'Del']] }
  ],
  [
    { name: 'CapsLock', value: [['Caps Lock', 'Caps Lock'], ['Caps Lock', 'Caps Lock']] },
    { name: 'KeyA', value: [['a', 'A'], ['ф', 'Ф']] },
    { name: 'KeyS', value: [['s', 'S'], ['ы', 'Ы']] },
    { name: 'KeyD', value: [['d', 'D'], ['в', 'В']] },
    { name: 'KeyF', value: [['f', 'F'], ['а', 'А']] },
    { name: 'KeyG', value: [['g', 'G'], ['п', 'П']] },
    { name: 'KeyH', value: [['h', 'H'], ['р', 'Р']] },
    { name: 'KeyJ', value: [['j', 'J'], ['о', 'О']] },
    { name: 'KeyK', value: [['k', 'K'], ['л', 'Л']] },
    { name: 'KeyL', value: [['l', 'L'], ['д', 'Д']] },
    { name: 'Semicolon', value: [[';', ':'], ['ж', 'Ж']] },
    { name: 'Quote', value: [['\'', '"'], ['э', 'Э']] },
    { name: 'Enter', value: [['Enter', 'Enter'], ['Enter', 'Enter']] }
  ],
  [
    { name: 'ShiftLeft', value: [['Shift', 'Shift'], ['Shift', 'Shift']] },
    { name: 'KeyZ', value: [['z', 'Z'], ['я', 'Я']] },
    { name: 'KeyX', value: [['x', 'X'], ['ч', 'Ч']] },
    { name: 'KeyC', value: [['c', 'C'], ['с', 'С']] },
    { name: 'KeyV', value: [['v', 'V'], ['м', 'М']] },
    { name: 'KeyB', value: [['b', 'B'], ['и', 'И']] },
    { name: 'KeyN', value: [['n', 'N'], ['т', 'Т']] },
    { name: 'KeyM', value: [['m', 'M'], ['ь', 'Ь']] },
    { name: 'Comma', value: [[',', '<'], ['б', 'Б']] },
    { name: 'Period', value: [['.', '>'], ['ю', 'Ю']] },
    { name: 'Slash', value: [['/', '?'], ['.', ',']] },
    { name: 'ArrowUp', value: [['▲', '▲'], ['▲', '▲']] },
    { name: 'ShiftRight', value: [['Shift', 'Shift'], ['Shift', 'Shift']] }
  ],
  [
    { name: 'ControlLeft', value: [['Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl']] },
    { name: 'MetaLeft', value: [['Win', 'Win'], ['Win', 'Win']] },
    { name: 'AltLeft', value: [['Alt', 'Alt'], ['Alt', 'Alt']] },
    { name: 'Space', value: [['', ''], ['', '']] },
    { name: 'AltRight', value: [['Alt', 'Alt'], ['Alt', 'Alt']] },
    { name: 'ArrowLeft', value: [['◄', '◄'], ['◄', '◄']] },
    { name: 'ArrowDown', value: [['▼', '▼'], ['▼', '▼']] },
    { name: 'ArrowRight', value: [['►', '►'], ['►', '►']] },
    { name: 'ControlRight', value: [['Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl']] }
  ]
];

/* harmony default export */ __webpack_exports__["default"] = (DATA);


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const switcher = (state, keysA, keysB) => {
  if (state) {
    keysA.forEach((key) => {
      if (key.classList.contains('off')) {
        key.classList.remove('off');
      }
    });
    keysB.forEach((key) => {
      if (!key.classList.contains('off')) {
        key.classList.add('off');
      }
    });
  } else {
    keysA.forEach((key) => {
      if (!key.classList.contains('off')) {
        key.classList.add('off');
      }
    });
    keysB.forEach((key) => {
      if (key.classList.contains('off')) {
        key.classList.remove('off');
      }
    });
  }
};

const saveState = (state) => {
  if (Object.keys(localStorage).includes('lang-en')) {
    localStorage.clear();
    localStorage.setItem('lang-en', state);
  }
  localStorage.setItem('lang-en', state);
};

const UTILS = {
  switcher,
  saveState
};

/* harmony default export */ __webpack_exports__["default"] = (UTILS);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map