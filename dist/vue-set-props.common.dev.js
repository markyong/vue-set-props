module.exports =
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nlet hasProp = false\n\nfunction findPropInMixins(mixins, prop, propValue) {\n  if (mixins) {\n    for (let i = 0, len = mixins.length; i < len; i++) {\n      if (hasProp) break\n      setProp(mixins[i], prop, propValue)\n    }\n  }\n}\n\nfunction setProp(component, prop, propValue) {\n  const { props, mixins } = component\n  if (props && props[prop]) {\n    // find in props\n    props[prop].default = propValue\n    hasProp = true\n  } else {\n    // find in mixins\n    findPropInMixins(mixins, prop, propValue)\n  }\n}\n\nfunction vueSetProps(Vue, opts) {\n  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(opts)) {\n    const { components } = Vue.options\n    Object.keys(opts).forEach(name => {\n      const component = components[name]\n      if (component) {\n        const setProps = opts[name]\n        if ( true && !Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(setProps)) {\n          Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"warn\"])(`The ${name} component set props options expected an Object, ` +\n          `but got ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"toRawType\"])(setProps)}.`)\n          return\n        }\n\n        Object.keys(setProps).forEach(prop => {\n          setProp(component.options, prop, setProps[prop])\n          if ( true && !hasProp) {\n            Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"warn\"])(`Can not find prop \"${prop}\" in the ${name} component.`)\n          }\n          hasProp = false\n        })\n      } else if (true) {\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"warn\"])(`Can not find ${name} component in global components.`)\n      }\n    })\n  } else if (true) {\n    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"warn\"])(`The options expected an Object, but got ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"toRawType\"])(opts)}.`)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vueSetProps);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: isPlainObject, toRawType, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPlainObject\", function() { return isPlainObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRawType\", function() { return toRawType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warn\", function() { return warn; });\nconst _toString = Object.prototype.toString\n\nfunction isPlainObject(obj) {\n  return _toString.call(obj) === '[object Object]'\n}\n\nfunction toRawType(value) {\n  return _toString.call(value).slice(8, -1)\n}\n\nfunction warn(message) {\n  console.error(`[vue-set-props] ${message}`)\n}\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });