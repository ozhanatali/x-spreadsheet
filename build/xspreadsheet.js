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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// font.js

/**
 * @typedef {number} fontsizePX px for fontSize
 */

/**
 * @typedef {number} fontsizePT pt for fontSize
 */

/**
 * @typedef {object} BaseFont
 * @property {string} key inner key
 * @property {string} title title for display
 */

/**
 * @typedef {object} FontSize
 * @property {fontsizePT} pt
 * @property {fontsizePX} px
 */
// alphabet.js

/**
 * @typedef {string} tagA1 A1 tag for XY-tag (0, 0)
 * @example "A1"
 */

/**
 * @typedef {[number, number]} tagXY
 * @example [0, 0]
 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/component/element.js
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global document */

/* global window */
var Element =
/*#__PURE__*/
function () {
  function Element(tag) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Element);

    if (typeof tag === 'string') {
      this.el = document.createElement(tag);
      this.el.className = className;
    } else {
      this.el = tag;
    }

    this.data = {};
  }

  _createClass(Element, [{
    key: "data",
    value: function data(key, value) {
      if (value !== undefined) {
        this.data[key] = value;
        return this;
      }

      return this.data[key];
    }
  }, {
    key: "on",
    value: function on(eventNames, handler) {
      var _eventNames$split = eventNames.split('.'),
          _eventNames$split2 = _toArray(_eventNames$split),
          fen = _eventNames$split2[0],
          oen = _eventNames$split2.slice(1);

      var eventName = fen;

      if (eventName === 'mousewheel' && /Firefox/i.test(window.navigator.userAgent)) {
        eventName = 'DOMMouseScroll';
      }

      this.el.addEventListener(eventName, function (evt) {
        handler(evt);

        for (var i = 0; i < oen.length; i += 1) {
          var k = oen[i];

          if (k === 'left' && evt.button !== 0) {
            return;
          }

          if (k === 'right' && evt.button !== 2) {
            return;
          }

          if (k === 'stop') {
            evt.stopPropagation();
          }
        }
      });
      return this;
    }
  }, {
    key: "offset",
    value: function offset(value) {
      var _this = this;

      if (value !== undefined) {
        Object.keys(value).forEach(function (k) {
          _this.css(k, "".concat(value[k], "px"));
        });
        return this;
      }

      var _this$el = this.el,
          offsetTop = _this$el.offsetTop,
          offsetLeft = _this$el.offsetLeft,
          offsetHeight = _this$el.offsetHeight,
          offsetWidth = _this$el.offsetWidth;
      return {
        top: offsetTop,
        left: offsetLeft,
        height: offsetHeight,
        width: offsetWidth
      };
    }
  }, {
    key: "scroll",
    value: function scroll(v) {
      var el = this.el;

      if (v !== undefined) {
        if (v.left !== undefined) {
          el.scrollLeft = v.left;
        }

        if (v.top !== undefined) {
          el.scrollTop = v.top;
        }
      }

      return {
        left: el.scrollLeft,
        top: el.scrollTop
      };
    }
  }, {
    key: "box",
    value: function box() {
      return this.el.getBoundingClientRect();
    }
  }, {
    key: "parent",
    value: function parent() {
      return new Element(this.el.parentNode);
    }
  }, {
    key: "children",
    value: function children() {
      var _this2 = this;

      for (var _len = arguments.length, eles = new Array(_len), _key = 0; _key < _len; _key++) {
        eles[_key] = arguments[_key];
      }

      if (arguments.length === 0) {
        return this.el.childNodes;
      }

      eles.forEach(function (ele) {
        return _this2.child(ele);
      });
      return this;
    }
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      this.el.removeChild(el);
    }
    /*
    first() {
      return this.el.firstChild;
    }
      last() {
      return this.el.lastChild;
    }
      remove(ele) {
      return this.el.removeChild(ele);
    }
      prepend(ele) {
      const { el } = this;
      if (el.children.length > 0) {
        el.insertBefore(ele, el.firstChild);
      } else {
        el.appendChild(ele);
      }
      return this;
    }
      prev() {
      return this.el.previousSibling;
    }
      next() {
      return this.el.nextSibling;
    }
    */

  }, {
    key: "child",
    value: function child(arg) {
      var ele = arg;

      if (typeof arg === 'string') {
        ele = document.createTextNode(arg);
      } else if (arg instanceof Element) {
        ele = arg.el;
      }

      this.el.appendChild(ele);
      return this;
    }
  }, {
    key: "contains",
    value: function contains(ele) {
      return this.el.contains(ele);
    }
  }, {
    key: "className",
    value: function className(v) {
      if (v !== undefined) {
        this.el.className = v;
        return this;
      }

      return this.el.className;
    }
  }, {
    key: "addClass",
    value: function addClass(name) {
      this.el.classList.add(name);
      return this;
    }
  }, {
    key: "hasClass",
    value: function hasClass(name) {
      return this.el.classList.contains(name);
    }
  }, {
    key: "removeClass",
    value: function removeClass(name) {
      this.el.classList.remove(name);
      return this;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var cls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'active';
      return this.toggleClass(cls);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(name) {
      return this.el.classList.toggle(name);
    }
  }, {
    key: "active",
    value: function active() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'active';
      if (flag) this.addClass(cls);else this.removeClass(cls);
      return this;
    }
  }, {
    key: "checked",
    value: function checked() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.active(flag, 'checked');
      return this;
    }
  }, {
    key: "disabled",
    value: function disabled() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (flag) this.addClass('disabled');else this.removeClass('disabled');
      return this;
    } // key, value
    // key
    // {k, v}...

  }, {
    key: "attr",
    value: function attr(key, value) {
      var _this3 = this;

      if (value !== undefined) {
        this.el.setAttribute(key, value);
      } else {
        if (typeof key === 'string') {
          return this.el.getAttribute(key);
        }

        Object.keys(key).forEach(function (k) {
          _this3.el.setAttribute(k, key[k]);
        });
      }

      return this;
    }
  }, {
    key: "removeAttr",
    value: function removeAttr(key) {
      this.el.removeAttribute(key);
      return this;
    }
  }, {
    key: "html",
    value: function html(content) {
      if (content !== undefined) {
        this.el.innerHTML = content;
        return this;
      }

      return this.el.innerHTML;
    }
  }, {
    key: "val",
    value: function val(v) {
      if (v !== undefined) {
        this.el.value = v;
        return this;
      }

      return this.el.value;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.el.focus();
    }
  }, {
    key: "cssRemoveKeys",
    value: function cssRemoveKeys() {
      var _this4 = this;

      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      keys.forEach(function (k) {
        return _this4.el.style.removeProperty(k);
      });
      return this;
    } // css( propertyName )
    // css( propertyName, value )
    // css( properties )

  }, {
    key: "css",
    value: function css(name, value) {
      var _this5 = this;

      if (value === undefined && typeof name !== 'string') {
        Object.keys(name).forEach(function (k) {
          _this5.el.style[k] = name[k];
        });
        return this;
      }

      if (value !== undefined) {
        this.el.style[name] = value;
        return this;
      }

      return this.el.style[name];
    }
  }, {
    key: "computedStyle",
    value: function computedStyle() {
      return window.getComputedStyle(this.el, null);
    }
  }, {
    key: "show",
    value: function show() {
      this.css('display', 'block');
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.css('display', 'none');
      return this;
    }
  }]);

  return Element;
}();

var element_h = function h(tag) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new Element(tag, className);
};


// EXTERNAL MODULE: ./src/core/_.prototypes.js
var _prototypes = __webpack_require__(0);

// CONCATENATED MODULE: ./src/core/alphabet.js
function _slicedToArray(arr, i) { return alphabet_arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || alphabet_nonIterableRest(); }

function alphabet_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function alphabet_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
/** index number 2 letters
 * @example stringAt(26) ==> 'AA'
 * @date 2019-10-10
 * @export
 * @param {number} index
 * @returns {string}
 */

function stringAt(index) {
  var str = '';
  var cindex = index;

  while (cindex >= alphabets.length) {
    cindex /= alphabets.length;
    cindex -= 1;
    str += alphabets[parseInt(cindex, 10) % alphabets.length];
  }

  var last = index % alphabets.length;
  str += alphabets[last];
  return str;
}
/** translate letter in A1-tag to number
 * @date 2019-10-10
 * @export
 * @param {string} str "AA" in A1-tag "AA1"
 * @returns {number}
 */

function indexAt(str) {
  var ret = 0;

  for (var i = 0; i !== str.length; ++i) {
    ret = 26 * ret + str.charCodeAt(i) - 64;
  }

  return ret - 1;
} // B10 => x,y

/** translate A1-tag to XY-tag
 * @date 2019-10-10
 * @export
 * @param {tagA1} src
 * @returns {tagXY}
 */

function expr2xy(src) {
  var x = '';
  var y = '';

  for (var i = 0; i < src.length; i += 1) {
    if (src.charAt(i) >= '0' && src.charAt(i) <= '9') {
      y += src.charAt(i);
    } else {
      x += src.charAt(i);
    }
  }

  return [indexAt(x), parseInt(y, 10) - 1];
}
/** translate XY-tag to A1-tag
 * @example x,y => B10
 * @date 2019-10-10
 * @export
 * @param {number} x
 * @param {number} y
 * @returns {tagA1}
 */

function xy2expr(x, y) {
  return "".concat(stringAt(x)).concat(y + 1);
}
/** translate A1-tag src by (xn, yn)
 * @date 2019-10-10
 * @export
 * @param {tagA1} src
 * @param {number} xn
 * @param {number} yn
 * @returns {tagA1}
 */

function expr2expr(src, xn, yn) {
  var condition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };
  if (xn === 0 && yn === 0) return src;

  var _expr2xy = expr2xy(src),
      _expr2xy2 = _slicedToArray(_expr2xy, 2),
      x = _expr2xy2[0],
      y = _expr2xy2[1];

  if (!condition(x, y)) return src;
  return xy2expr(x + xn, y + yn);
}
/* harmony default export */ var alphabet = ({
  stringAt: stringAt,
  indexAt: indexAt,
  expr2xy: expr2xy,
  xy2expr: xy2expr,
  expr2expr: expr2expr
});
// CONCATENATED MODULE: ./src/core/cell_range.js
function cell_range_slicedToArray(arr, i) { return cell_range_arrayWithHoles(arr) || cell_range_iterableToArrayLimit(arr, i) || cell_range_nonIterableRest(); }

function cell_range_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function cell_range_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function cell_range_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function cell_range_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cell_range_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cell_range_createClass(Constructor, protoProps, staticProps) { if (protoProps) cell_range_defineProperties(Constructor.prototype, protoProps); if (staticProps) cell_range_defineProperties(Constructor, staticProps); return Constructor; }



var cell_range_CellRange =
/*#__PURE__*/
function () {
  function CellRange(sri, sci, eri, eci) {
    var w = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    cell_range_classCallCheck(this, CellRange);

    this.sri = sri;
    this.sci = sci;
    this.eri = eri;
    this.eci = eci;
    this.w = w;
    this.h = h;
  }

  cell_range_createClass(CellRange, [{
    key: "set",
    value: function set(sri, sci, eri, eci) {
      this.sri = sri;
      this.sci = sci;
      this.eri = eri;
      this.eci = eci;
    }
  }, {
    key: "multiple",
    value: function multiple() {
      return this.eri - this.sri > 0 || this.eci - this.sci > 0;
    } // cell-index: ri, ci
    // cell-ref: A10

  }, {
    key: "includes",
    value: function includes() {
      var ri = 0,
          ci = 0;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1) {
        var _expr2xy = expr2xy(args[0]);

        var _expr2xy2 = cell_range_slicedToArray(_expr2xy, 2);

        ci = _expr2xy2[0];
        ri = _expr2xy2[1];
      } else if (args.length === 2) {
        ri = args[0];
        ci = args[1];
      }

      var sri = this.sri,
          sci = this.sci,
          eri = this.eri,
          eci = this.eci;
      return sri <= ri && ri <= eri && sci <= ci && ci <= eci;
    }
  }, {
    key: "each",
    value: function each(cb) {
      var rowFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return true;
      };
      var sri = this.sri,
          sci = this.sci,
          eri = this.eri,
          eci = this.eci;

      for (var i = sri; i <= eri; i += 1) {
        if (rowFilter(i)) {
          for (var j = sci; j <= eci; j += 1) {
            cb(i, j);
          }
        }
      }
    }
  }, {
    key: "contains",
    value: function contains(other) {
      return this.sri <= other.sri && this.sci <= other.sci && this.eri >= other.eri && this.eci >= other.eci;
    } // within

  }, {
    key: "within",
    value: function within(other) {
      return this.sri >= other.sri && this.sci >= other.sci && this.eri <= other.eri && this.eci <= other.eci;
    } // disjoint

  }, {
    key: "disjoint",
    value: function disjoint(other) {
      return this.sri > other.eri || this.sci > other.eci || other.sri > this.eri || other.sci > this.eci;
    } // intersects

  }, {
    key: "intersects",
    value: function intersects(other) {
      return this.sri <= other.eri && this.sci <= other.eci && other.sri <= this.eri && other.sci <= this.eci;
    } // union

  }, {
    key: "union",
    value: function union(other) {
      var sri = this.sri,
          sci = this.sci,
          eri = this.eri,
          eci = this.eci;
      return new CellRange(other.sri < sri ? other.sri : sri, other.sci < sci ? other.sci : sci, other.eri > eri ? other.eri : eri, other.eci > eci ? other.eci : eci);
    } // intersection
    // intersection(other) {}
    // Returns Array<CellRange> that represents that part of this that does not intersect with other
    // difference

  }, {
    key: "difference",
    value: function difference(other) {
      var ret = [];

      var addRet = function addRet(sri, sci, eri, eci) {
        ret.push(new CellRange(sri, sci, eri, eci));
      };

      var sri = this.sri,
          sci = this.sci,
          eri = this.eri,
          eci = this.eci;
      var dsr = other.sri - sri;
      var dsc = other.sci - sci;
      var der = eri - other.eri;
      var dec = eci - other.eci;

      if (dsr > 0) {
        addRet(sri, sci, other.sri - 1, eci);

        if (der > 0) {
          addRet(other.eri + 1, sci, eri, eci);

          if (dsc > 0) {
            addRet(other.sri, sci, other.eri, other.sci - 1);
          }

          if (dec > 0) {
            addRet(other.sri, other.eci + 1, other.eri, eci);
          }
        } else {
          if (dsc > 0) {
            addRet(other.sri, sci, eri, other.sci - 1);
          }

          if (dec > 0) {
            addRet(other.sri, other.eci + 1, eri, eci);
          }
        }
      } else if (der > 0) {
        addRet(other.eri + 1, sci, eri, eci);

        if (dsc > 0) {
          addRet(sri, sci, other.eri, other.sci - 1);
        }

        if (dec > 0) {
          addRet(sri, other.eci + 1, other.eri, eci);
        }
      }

      if (dsc > 0) {
        addRet(sri, sci, eri, other.sci - 1);

        if (dec > 0) {
          addRet(sri, other.eri + 1, eri, eci);

          if (dsr > 0) {
            addRet(sri, other.sci, other.sri - 1, other.eci);
          }

          if (der > 0) {
            addRet(other.sri + 1, other.sci, eri, other.eci);
          }
        } else {
          if (dsr > 0) {
            addRet(sri, other.sci, other.sri - 1, eci);
          }

          if (der > 0) {
            addRet(other.sri + 1, other.sci, eri, eci);
          }
        }
      } else if (dec > 0) {
        addRet(eri, other.eci + 1, eri, eci);

        if (dsr > 0) {
          addRet(sri, sci, other.sri - 1, other.eci);
        }

        if (der > 0) {
          addRet(other.eri + 1, sci, eri, other.eci);
        }
      }

      return ret;
    }
  }, {
    key: "size",
    value: function size() {
      return [this.eri - this.sri + 1, this.eci - this.sci + 1];
    }
  }, {
    key: "toString",
    value: function toString() {
      var sri = this.sri,
          sci = this.sci,
          eri = this.eri,
          eci = this.eci;
      var ref = xy2expr(sci, sri);

      if (this.multiple()) {
        ref = "".concat(ref, ":").concat(xy2expr(eci, eri));
      }

      return ref;
    }
  }, {
    key: "clone",
    value: function clone() {
      var sri = this.sri,
          sci = this.sci,
          eri = this.eri,
          eci = this.eci,
          w = this.w,
          h = this.h;
      return new CellRange(sri, sci, eri, eci, w, h);
    }
    /*
    toJSON() {
      return this.toString();
    }
    */

  }, {
    key: "equals",
    value: function equals(other) {
      return this.eri === other.eri && this.eci === other.eci && this.sri === other.sri && this.sci === other.sci;
    }
  }], [{
    key: "valueOf",
    value: function valueOf(ref) {
      // B1:B8, B1 => 1 x 1 cell range
      var refs = ref.split(':');

      var _expr2xy3 = expr2xy(refs[0]),
          _expr2xy4 = cell_range_slicedToArray(_expr2xy3, 2),
          sci = _expr2xy4[0],
          sri = _expr2xy4[1];

      var eri = sri,
          eci = sci;

      if (refs.length > 1) {
        var _expr2xy5 = expr2xy(refs[1]);

        var _expr2xy6 = cell_range_slicedToArray(_expr2xy5, 2);

        eci = _expr2xy6[0];
        eri = _expr2xy6[1];
      }

      return new CellRange(sri, sci, eri, eci);
    }
  }]);

  return CellRange;
}();

/* harmony default export */ var cell_range = (cell_range_CellRange);

// CONCATENATED MODULE: ./src/core/selector.js
function selector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function selector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function selector_createClass(Constructor, protoProps, staticProps) { if (protoProps) selector_defineProperties(Constructor.prototype, protoProps); if (staticProps) selector_defineProperties(Constructor, staticProps); return Constructor; }



var selector_Selector =
/*#__PURE__*/
function () {
  function Selector() {
    selector_classCallCheck(this, Selector);

    this.range = new cell_range_CellRange(0, 0, 0, 0);
    this.ri = 0;
    this.ci = 0;
  }

  selector_createClass(Selector, [{
    key: "multiple",
    value: function multiple() {
      return this.range.multiple();
    }
  }, {
    key: "setIndexes",
    value: function setIndexes(ri, ci) {
      this.ri = ri;
      this.ci = ci;
    }
  }, {
    key: "size",
    value: function size() {
      return this.range.size();
    }
  }]);

  return Selector;
}();


// CONCATENATED MODULE: ./src/core/scroll.js
function scroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroll = function Scroll() {
  scroll_classCallCheck(this, Scroll);

  this.x = 0; // left

  this.y = 0; // top

  this.ri = 0; // cell row-index

  this.ci = 0; // cell col-index
};


// CONCATENATED MODULE: ./src/core/history.js
function history_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function history_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function history_createClass(Constructor, protoProps, staticProps) { if (protoProps) history_defineProperties(Constructor.prototype, protoProps); if (staticProps) history_defineProperties(Constructor, staticProps); return Constructor; }

// import helper from '../helper';
var History =
/*#__PURE__*/
function () {
  function History() {
    history_classCallCheck(this, History);

    this.undoItems = [];
    this.redoItems = [];
  }

  history_createClass(History, [{
    key: "add",
    value: function add(data) {
      this.undoItems.push(JSON.stringify(data));
      this.redoItems = [];
    }
  }, {
    key: "canUndo",
    value: function canUndo() {
      return this.undoItems.length > 0;
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      return this.redoItems.length > 0;
    }
  }, {
    key: "undo",
    value: function undo(currentd, cb) {
      var undoItems = this.undoItems,
          redoItems = this.redoItems;

      if (this.canUndo()) {
        redoItems.push(JSON.stringify(currentd));
        cb(JSON.parse(undoItems.pop()));
      }
    }
  }, {
    key: "redo",
    value: function redo(currentd, cb) {
      var undoItems = this.undoItems,
          redoItems = this.redoItems;

      if (this.canRedo()) {
        undoItems.push(JSON.stringify(currentd));
        cb(JSON.parse(redoItems.pop()));
      }
    }
  }]);

  return History;
}();


// CONCATENATED MODULE: ./src/core/clipboard.js
function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) clipboard_defineProperties(Constructor, staticProps); return Constructor; }

var Clipboard =
/*#__PURE__*/
function () {
  function Clipboard() {
    clipboard_classCallCheck(this, Clipboard);

    this.range = null; // CellRange

    this.state = 'clear';
  }

  clipboard_createClass(Clipboard, [{
    key: "copy",
    value: function copy(cellRange) {
      this.range = cellRange;
      this.state = 'copy';
      return this;
    }
  }, {
    key: "cut",
    value: function cut(cellRange) {
      this.range = cellRange;
      this.state = 'cut';
      return this;
    }
  }, {
    key: "isCopy",
    value: function isCopy() {
      return this.state === 'copy';
    }
  }, {
    key: "isCut",
    value: function isCut() {
      return this.state === 'cut';
    }
  }, {
    key: "isClear",
    value: function isClear() {
      return this.state === 'clear';
    }
  }, {
    key: "clear",
    value: function clear() {
      this.range = null;
      this.state = 'clear';
    }
  }]);

  return Clipboard;
}();


// CONCATENATED MODULE: ./src/core/auto_filter.js
function auto_filter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function auto_filter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function auto_filter_createClass(Constructor, protoProps, staticProps) { if (protoProps) auto_filter_defineProperties(Constructor.prototype, protoProps); if (staticProps) auto_filter_defineProperties(Constructor, staticProps); return Constructor; }

 // operator: all|eq|neq|gt|gte|lt|lte|in|be
// value:
//   in => []
//   be => [min, max]

var Filter =
/*#__PURE__*/
function () {
  function Filter(ci, operator, value) {
    auto_filter_classCallCheck(this, Filter);

    this.ci = ci;
    this.operator = operator;
    this.value = value;
  }

  auto_filter_createClass(Filter, [{
    key: "set",
    value: function set(operator, value) {
      this.operator = operator;
      this.value = value;
    }
  }, {
    key: "includes",
    value: function includes(v) {
      var operator = this.operator,
          value = this.value;

      if (operator === 'all') {
        return true;
      }

      if (operator === 'in') {
        return value.includes(v);
      }

      return false;
    }
  }, {
    key: "vlength",
    value: function vlength() {
      var operator = this.operator,
          value = this.value;

      if (operator === 'in') {
        return value.length;
      }

      return 0;
    }
  }, {
    key: "getData",
    value: function getData() {
      var ci = this.ci,
          operator = this.operator,
          value = this.value;
      return {
        ci: ci,
        operator: operator,
        value: value
      };
    }
  }]);

  return Filter;
}();

var Sort =
/*#__PURE__*/
function () {
  function Sort(ci, order) {
    auto_filter_classCallCheck(this, Sort);

    this.ci = ci;
    this.order = order;
  }

  auto_filter_createClass(Sort, [{
    key: "asc",
    value: function asc() {
      return this.order === 'asc';
    }
  }, {
    key: "desc",
    value: function desc() {
      return this.order === 'desc';
    }
  }]);

  return Sort;
}();

var auto_filter_AutoFilter =
/*#__PURE__*/
function () {
  function AutoFilter() {
    auto_filter_classCallCheck(this, AutoFilter);

    this.ref = null;
    this.filters = [];
    this.sort = null;
  }

  auto_filter_createClass(AutoFilter, [{
    key: "setData",
    value: function setData(_ref) {
      var ref = _ref.ref,
          filters = _ref.filters,
          sort = _ref.sort;

      if (ref != null) {
        this.ref = ref;
        this.filters = filters.map(function (it) {
          return new Filter(it.ci, it.operator, it.value);
        });

        if (sort) {
          this.sort = new Sort(sort.ci, sort.order);
        }
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      if (this.active()) {
        var ref = this.ref,
            filters = this.filters,
            sort = this.sort;
        return {
          ref: ref,
          filters: filters.map(function (it) {
            return it.getData();
          }),
          sort: sort
        };
      }

      return {};
    }
  }, {
    key: "addFilter",
    value: function addFilter(ci, operator, value) {
      var filter = this.getFilter(ci);

      if (filter == null) {
        this.filters.push(new Filter(ci, operator, value));
      } else {
        filter.set(operator, value);
      }
    }
  }, {
    key: "setSort",
    value: function setSort(ci, order) {
      this.sort = order ? new Sort(ci, order) : null;
    }
  }, {
    key: "includes",
    value: function includes(ri, ci) {
      if (this.active()) {
        return this.hrange().includes(ri, ci);
      }

      return false;
    }
  }, {
    key: "getSort",
    value: function getSort(ci) {
      var sort = this.sort;

      if (sort && sort.ci === ci) {
        return sort;
      }

      return null;
    }
  }, {
    key: "getFilter",
    value: function getFilter(ci) {
      var filters = this.filters;

      for (var i = 0; i < filters.length; i += 1) {
        if (filters[i].ci === ci) {
          return filters[i];
        }
      }

      return null;
    }
  }, {
    key: "filteredRows",
    value: function filteredRows(getCell) {
      // const ary = [];
      // let lastri = 0;
      var rset = new Set();
      var fset = new Set();

      if (this.active()) {
        var _this$range = this.range(),
            sri = _this$range.sri,
            eri = _this$range.eri;

        var filters = this.filters;

        for (var ri = sri + 1; ri <= eri; ri += 1) {
          for (var i = 0; i < filters.length; i += 1) {
            var filter = filters[i];
            var cell = getCell(ri, filter.ci);
            var ctext = cell ? cell.text : '';

            if (!filter.includes(ctext)) {
              rset.add(ri);
              break;
            } else {
              fset.add(ri);
            }
          }
        }
      }

      return {
        rset: rset,
        fset: fset
      };
    }
  }, {
    key: "items",
    value: function items(ci, getCell) {
      var m = {};

      if (this.active()) {
        var _this$range2 = this.range(),
            sri = _this$range2.sri,
            eri = _this$range2.eri;

        for (var ri = sri + 1; ri <= eri; ri += 1) {
          var cell = getCell(ri, ci);

          if (cell !== null && !/^\s*$/.test(cell.text)) {
            var key = cell.text;
            var cnt = (m[key] || 0) + 1;
            m[key] = cnt;
          } else {
            m[''] = (m[''] || 0) + 1;
          }
        }
      }

      return m;
    }
  }, {
    key: "range",
    value: function range() {
      return cell_range_CellRange.valueOf(this.ref);
    }
  }, {
    key: "hrange",
    value: function hrange() {
      var r = this.range();
      r.eri = r.sri;
      return r;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ref = null;
      this.filters = [];
      this.sort = null;
    }
  }, {
    key: "active",
    value: function active() {
      return this.ref !== null;
    }
  }]);

  return AutoFilter;
}();


// CONCATENATED MODULE: ./src/core/merge.js
function merge_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function merge_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function merge_createClass(Constructor, protoProps, staticProps) { if (protoProps) merge_defineProperties(Constructor.prototype, protoProps); if (staticProps) merge_defineProperties(Constructor, staticProps); return Constructor; }



var merge_Merges =
/*#__PURE__*/
function () {
  function Merges() {
    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    merge_classCallCheck(this, Merges);

    this._ = d;
  }

  merge_createClass(Merges, [{
    key: "forEach",
    value: function forEach(cb) {
      this._.forEach(cb);
    }
  }, {
    key: "deleteWithin",
    value: function deleteWithin(cr) {
      this._ = this._.filter(function (it) {
        return !it.within(cr);
      });
    }
  }, {
    key: "getFirstIncludes",
    value: function getFirstIncludes(ri, ci) {
      for (var i = 0; i < this._.length; i += 1) {
        var it = this._[i];

        if (it.includes(ri, ci)) {
          return it;
        }
      }

      return null;
    }
  }, {
    key: "filterIntersects",
    value: function filterIntersects(cellRange) {
      return new Merges(this._.filter(function (it) {
        return it.intersects(cellRange);
      }));
    }
  }, {
    key: "intersects",
    value: function intersects(cellRange) {
      for (var i = 0; i < this._.length; i += 1) {
        var it = this._[i];

        if (it.intersects(cellRange)) {
          // console.log('intersects');
          return true;
        }
      }

      return false;
    }
  }, {
    key: "union",
    value: function union(cellRange) {
      var cr = cellRange;

      this._.forEach(function (it) {
        if (it.intersects(cr)) {
          cr = it.union(cr);
        }
      });

      return cr;
    }
  }, {
    key: "add",
    value: function add(cr) {
      this.deleteWithin(cr);

      this._.push(cr);
    } // type: row | column

  }, {
    key: "shift",
    value: function shift(type, index, n, cbWithin) {
      this._.forEach(function (cellRange) {
        var sri = cellRange.sri,
            sci = cellRange.sci,
            eri = cellRange.eri,
            eci = cellRange.eci;
        var range = cellRange;

        if (type === 'row') {
          if (sri >= index) {
            range.sri += n;
            range.eri += n;
          } else if (sri < index && index <= eri) {
            range.eri += n;
            cbWithin(sri, sci, n, 0);
          }
        } else if (type === 'column') {
          if (sci >= index) {
            range.sci += n;
            range.eci += n;
          } else if (sci < index && index <= eci) {
            range.eci += n;
            cbWithin(sri, sci, 0, n);
          }
        }
      });
    }
  }, {
    key: "move",
    value: function move(cellRange, rn, cn) {
      this._.forEach(function (it1) {
        var it = it1;

        if (it.within(cellRange)) {
          it.eri += rn;
          it.sri += rn;
          it.sci += cn;
          it.eci += cn;
        }
      });
    }
  }, {
    key: "setData",
    value: function setData(merges) {
      this._ = merges.map(function (merge) {
        return cell_range_CellRange.valueOf(merge);
      });
      return this;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this._.map(function (merge) {
        return merge.toString();
      });
    }
  }]);

  return Merges;
}();

/* harmony default export */ var core_merge = ({});

// CONCATENATED MODULE: ./src/core/helper.js
/* eslint-disable no-param-reassign */
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

var mergeDeep = function mergeDeep() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (source) {
    Object.keys(source).forEach(function (key) {
      var v = source[key]; // console.log('k:', key, ', v:', source[key], typeof v, v instanceof Object);

      if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
        object[key] = v;
      } else if (typeof v !== 'function' && !Array.isArray(v) && v instanceof Object) {
        object[key] = object[key] || {};
        mergeDeep(object[key], v);
      } else {
        object[key] = v;
      }
    });
  }); // console.log('::', object);

  return object;
};

function helper_equals(obj1, obj2) {
  var keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) return false;

  for (var i = 0; i < keys.length; i += 1) {
    var k = keys[i];
    var v1 = obj1[k];
    var v2 = obj2[k];
    if (v2 === undefined) return false;

    if (typeof v1 === 'string' || typeof v1 === 'number' || typeof v1 === 'boolean') {
      if (v1 !== v2) return false;
    } else if (Array.isArray(v1)) {
      if (v1.length !== v2.length) return false;

      for (var ai = 0; ai < v1.length; ai += 1) {
        if (!helper_equals(v1[ai], v2[ai])) return false;
      }
    } else if (typeof v1 !== 'function' && !Array.isArray(v1) && v1 instanceof Object) {
      if (!helper_equals(v1, v2)) return false;
    }
  }

  return true;
}
/*
  objOrAry: obejct or Array
  cb: (value, index | key) => { return value }
*/


var sum = function sum(objOrAry) {
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };
  var total = 0;
  var size = 0;
  Object.keys(objOrAry).forEach(function (key) {
    total += cb(objOrAry[key], key);
    size += 1;
  });
  return [total, size];
};

function deleteProperty(obj, property) {
  var oldv = obj["".concat(property)];
  delete obj["".concat(property)];
  return oldv;
}

function rangeReduceIf(min, max, inits, initv, ifv, getv) {
  var s = inits;
  var v = initv;
  var i = min;

  for (; i < max; i += 1) {
    if (s > ifv) break;
    v = getv(i);
    s += v;
  }

  return [i, s - v, v];
}

function rangeSum(min, max, getv) {
  var s = 0;

  for (var i = min; i < max; i += 1) {
    s += getv(i);
  }

  return s;
}

function rangeEach(min, max, cb) {
  for (var i = min; i < max; i += 1) {
    cb(i);
  }
}

function arrayEquals(a1, a2) {
  if (a1.length === a2.length) {
    for (var i = 0; i < a1.length; i += 1) {
      if (a1[i] !== a2[i]) return false;
    }
  } else return false;

  return true;
}

function digits(a) {
  var v = "".concat(a);
  var ret = 0;
  var flag = false;

  for (var i = 0; i < v.length; i += 1) {
    if (flag === true) ret += 1;
    if (v.charAt(i) === '.') flag = true;
  }

  return ret;
}

function numberCalc(type, a1, a2) {
  if (Number.isNaN(a1) || Number.isNaN(a2)) {
    return a1 + type + a2;
  }

  var al1 = digits(a1);
  var al2 = digits(a2);
  var num1 = Number(a1);
  var num2 = Number(a2);
  var ret = 0;

  if (type === '-') {
    ret = num1 - num2;
  } else if (type === '+') {
    ret = num1 + num2;
  } else if (type === '*') {
    ret = num1 * num2;
  } else if (type === '/') {
    ret = num1 / num2;
    if (digits(ret) > 5) return ret.toFixed(2);
    return ret;
  }

  return ret.toFixed(Math.max(al1, al2));
}
/* harmony default export */ var helper = ({
  cloneDeep: cloneDeep,
  merge: function merge() {
    for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      sources[_key2] = arguments[_key2];
    }

    return mergeDeep.apply(void 0, [{}].concat(sources));
  },
  equals: helper_equals,
  arrayEquals: arrayEquals,
  sum: sum,
  rangeEach: rangeEach,
  rangeSum: rangeSum,
  rangeReduceIf: rangeReduceIf,
  deleteProperty: deleteProperty,
  numberCalc: numberCalc
});
// CONCATENATED MODULE: ./src/core/row.js
function row_slicedToArray(arr, i) { return row_arrayWithHoles(arr) || row_iterableToArrayLimit(arr, i) || row_nonIterableRest(); }

function row_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function row_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function row_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function row_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function row_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function row_createClass(Constructor, protoProps, staticProps) { if (protoProps) row_defineProperties(Constructor.prototype, protoProps); if (staticProps) row_defineProperties(Constructor, staticProps); return Constructor; }




var row_Rows =
/*#__PURE__*/
function () {
  function Rows(_ref) {
    var len = _ref.len,
        height = _ref.height;

    row_classCallCheck(this, Rows);

    this._ = {};
    this.len = len; // default row height

    this.height = height;
  }

  row_createClass(Rows, [{
    key: "getHeight",
    value: function getHeight(ri) {
      if (this.isHide(ri)) return 0;
      var row = this.get(ri);

      if (row && row.height) {
        return row.height;
      }

      return this.height;
    }
  }, {
    key: "setHeight",
    value: function setHeight(ri, v) {
      var row = this.getOrNew(ri);
      row.height = v;
    }
  }, {
    key: "unhide",
    value: function unhide(idx) {
      var index = idx;

      while (index > 0) {
        index -= 1;

        if (this.isHide(index)) {
          this.setHide(index, false);
        } else break;
      }
    }
  }, {
    key: "isHide",
    value: function isHide(ri) {
      var row = this.get(ri);
      return row && row.hide;
    }
  }, {
    key: "setHide",
    value: function setHide(ri, v) {
      var row = this.getOrNew(ri);
      if (v === true) row.hide = true;else delete row.hide;
    }
  }, {
    key: "setStyle",
    value: function setStyle(ri, style) {
      var row = this.getOrNew(ri);
      row.style = style;
    }
  }, {
    key: "sumHeight",
    value: function sumHeight(min, max, exceptSet) {
      var _this = this;

      return helper.rangeSum(min, max, function (i) {
        if (exceptSet && exceptSet.has(i)) return 0;
        return _this.getHeight(i);
      });
    }
  }, {
    key: "totalHeight",
    value: function totalHeight() {
      return this.sumHeight(0, this.len);
    }
  }, {
    key: "get",
    value: function get(ri) {
      return this._[ri];
    }
  }, {
    key: "getOrNew",
    value: function getOrNew(ri) {
      this._[ri] = this._[ri] || {
        cells: {}
      };
      return this._[ri];
    }
  }, {
    key: "getCell",
    value: function getCell(ri, ci) {
      var row = this.get(ri);

      if (row !== undefined && row.cells !== undefined && row.cells[ci] !== undefined) {
        return row.cells[ci];
      }

      return null;
    }
  }, {
    key: "getCellMerge",
    value: function getCellMerge(ri, ci) {
      var cell = this.getCell(ri, ci);
      if (cell && cell.merge) return cell.merge;
      return [0, 0];
    }
  }, {
    key: "getCellOrNew",
    value: function getCellOrNew(ri, ci) {
      var row = this.getOrNew(ri);
      row.cells[ci] = row.cells[ci] || {};
      return row.cells[ci];
    } // what: all | text | format

  }, {
    key: "setCell",
    value: function setCell(ri, ci, cell) {
      var what = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
      var row = this.getOrNew(ri);

      if (what === 'all') {
        row.cells[ci] = cell;
      } else if (what === 'text') {
        row.cells[ci] = row.cells[ci] || {};
        row.cells[ci].text = cell.text;
      } else if (what === 'format') {
        row.cells[ci] = row.cells[ci] || {};
        row.cells[ci].style = cell.style;
        if (cell.merge) row.cells[ci].merge = cell.merge;
      }
    }
  }, {
    key: "setCellText",
    value: function setCellText(ri, ci, text) {
      var cell = this.getCellOrNew(ri, ci);
      if (cell.editable !== false) cell.text = text;
    } // what: all | format | text

  }, {
    key: "copyPaste",
    value: function copyPaste(srcCellRange, dstCellRange, what) {
      var autofill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
      var sri = srcCellRange.sri,
          sci = srcCellRange.sci,
          eri = srcCellRange.eri,
          eci = srcCellRange.eci;
      var dsri = dstCellRange.sri;
      var dsci = dstCellRange.sci;
      var deri = dstCellRange.eri;
      var deci = dstCellRange.eci;

      var _srcCellRange$size = srcCellRange.size(),
          _srcCellRange$size2 = row_slicedToArray(_srcCellRange$size, 2),
          rn = _srcCellRange$size2[0],
          cn = _srcCellRange$size2[1];

      var _dstCellRange$size = dstCellRange.size(),
          _dstCellRange$size2 = row_slicedToArray(_dstCellRange$size, 2),
          drn = _dstCellRange$size2[0],
          dcn = _dstCellRange$size2[1]; // console.log(srcIndexes, dstIndexes);


      var isAdd = true;
      var dn = 0;

      if (deri < sri || deci < sci) {
        isAdd = false;
        if (deri < sri) dn = drn;else dn = dcn;
      }

      for (var i = sri; i <= eri; i += 1) {
        if (this._[i]) {
          for (var j = sci; j <= eci; j += 1) {
            if (this._[i].cells && this._[i].cells[j]) {
              for (var ii = dsri; ii <= deri; ii += rn) {
                for (var jj = dsci; jj <= deci; jj += cn) {
                  var nri = ii + (i - sri);
                  var nci = jj + (j - sci);
                  var ncell = helper.cloneDeep(this._[i].cells[j]); // ncell.text

                  if (autofill && ncell && ncell.text && ncell.text.length > 0) {
                    (function () {
                      var text = ncell.text;
                      var n = jj - dsci + (ii - dsri) + 2;

                      if (!isAdd) {
                        n -= dn + 1;
                      }

                      if (text[0] === '=') {
                        ncell.text = text.replace(/[a-zA-Z]{1,3}\d+/g, function (word) {
                          var xn = 0,
                              yn = 0;

                          if (sri === dsri) {
                            xn = n - 1; // if (isAdd) xn -= 1;
                          } else {
                            yn = n - 1;
                          }

                          if (/^\d+$/.test(word)) return word;
                          return expr2expr(word, xn, yn);
                        });
                      } else if (rn <= 1 && cn > 1 && (dsri > eri || deri < sri) || cn <= 1 && rn > 1 && (dsci > eci || deci < sci) || rn <= 1 && cn <= 1) {
                        var result = /[\\.\d]+$/.exec(text); // console.log('result:', result);

                        if (result !== null) {
                          var index = Number(result[0]) + n - 1;
                          ncell.text = text.substring(0, result.index) + index;
                        }
                      }
                    })();
                  }

                  this.setCell(nri, nci, ncell, what);
                  cb(nri, nci, ncell);
                }
              }
            }
          }
        }
      }
    }
  }, {
    key: "cutPaste",
    value: function cutPaste(srcCellRange, dstCellRange) {
      var _this2 = this;

      var ncellmm = {};
      this.each(function (ri) {
        _this2.eachCells(ri, function (ci) {
          var nri = parseInt(ri, 10);
          var nci = parseInt(ci, 10);

          if (srcCellRange.includes(ri, ci)) {
            nri = dstCellRange.sri + (nri - srcCellRange.sri);
            nci = dstCellRange.sci + (nci - srcCellRange.sci);
          }

          ncellmm[nri] = ncellmm[nri] || {
            cells: {}
          };
          ncellmm[nri].cells[nci] = _this2._[ri].cells[ci];
        });
      });
      this._ = ncellmm;
    } // src: Array<Array<String>>

  }, {
    key: "paste",
    value: function paste(src, dstCellRange) {
      var _this3 = this;

      if (src.length <= 0) return;
      var sri = dstCellRange.sri,
          sci = dstCellRange.sci;
      src.forEach(function (row, i) {
        var ri = sri + i;
        row.forEach(function (cell, j) {
          var ci = sci + j;

          _this3.setCellText(ri, ci, cell);
        });
      });
    }
  }, {
    key: "insert",
    value: function insert(sri) {
      var _this4 = this;

      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var ndata = {};
      this.each(function (ri, row) {
        var nri = parseInt(ri, 10);

        if (nri >= sri) {
          nri += n;

          _this4.eachCells(ri, function (ci, cell) {
            if (cell.text && cell.text[0] === '=') {
              cell.text = cell.text.replace(/[a-zA-Z]{1,3}\d+/g, function (word) {
                return expr2expr(word, 0, n, function (x, y) {
                  return y >= sri;
                });
              });
            }
          });
        }

        ndata[nri] = row;
      });
      this._ = ndata;
      this.len += n;
    }
  }, {
    key: "delete",
    value: function _delete(sri, eri) {
      var _this5 = this;

      var n = eri - sri + 1;
      var ndata = {};
      this.each(function (ri, row) {
        var nri = parseInt(ri, 10);

        if (nri < sri) {
          ndata[nri] = row;
        } else if (ri > eri) {
          ndata[nri - n] = row;

          _this5.eachCells(ri, function (ci, cell) {
            if (cell.text && cell.text[0] === '=') {
              cell.text = cell.text.replace(/[a-zA-Z]{1,3}\d+/g, function (word) {
                return expr2expr(word, 0, -n, function (x, y) {
                  return y > eri;
                });
              });
            }
          });
        }
      });
      this._ = ndata;
      this.len -= n;
    }
  }, {
    key: "insertColumn",
    value: function insertColumn(sci) {
      var _this6 = this;

      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.each(function (ri, row) {
        var rndata = {};

        _this6.eachCells(ri, function (ci, cell) {
          var nci = parseInt(ci, 10);

          if (nci >= sci) {
            nci += n;

            if (cell.text && cell.text[0] === '=') {
              cell.text = cell.text.replace(/[a-zA-Z]{1,3}\d+/g, function (word) {
                return expr2expr(word, n, 0, function (x) {
                  return x >= sci;
                });
              });
            }
          }

          rndata[nci] = cell;
        });

        row.cells = rndata;
      });
    }
  }, {
    key: "deleteColumn",
    value: function deleteColumn(sci, eci) {
      var _this7 = this;

      var n = eci - sci + 1;
      this.each(function (ri, row) {
        var rndata = {};

        _this7.eachCells(ri, function (ci, cell) {
          var nci = parseInt(ci, 10);

          if (nci < sci) {
            rndata[nci] = cell;
          } else if (nci > eci) {
            rndata[nci - n] = cell;

            if (cell.text && cell.text[0] === '=') {
              cell.text = cell.text.replace(/[a-zA-Z]{1,3}\d+/g, function (word) {
                return expr2expr(word, -n, 0, function (x) {
                  return x > eci;
                });
              });
            }
          }
        });

        row.cells = rndata;
      });
    } // what: all | text | format | merge

  }, {
    key: "deleteCells",
    value: function deleteCells(cellRange) {
      var _this8 = this;

      var what = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
      cellRange.each(function (i, j) {
        _this8.deleteCell(i, j, what);
      });
    } // what: all | text | format | merge

  }, {
    key: "deleteCell",
    value: function deleteCell(ri, ci) {
      var what = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'all';
      var row = this.get(ri);

      if (row !== null) {
        var cell = this.getCell(ri, ci);

        if (cell !== null && cell.editable !== false) {
          if (what === 'all') {
            delete row.cells[ci];
          } else if (what === 'text') {
            if (cell.text) delete cell.text;
            if (cell.value) delete cell.value;
          } else if (what === 'format') {
            if (cell.style !== undefined) delete cell.style;
            if (cell.merge) delete cell.merge;
          } else if (what === 'merge') {
            if (cell.merge) delete cell.merge;
          }
        }
      }
    }
  }, {
    key: "maxCell",
    value: function maxCell() {
      var keys = Object.keys(this._);
      var ri = keys[keys.length - 1];
      var col = this._[ri];

      if (col) {
        var cells = col.cells;
        var ks = Object.keys(cells);
        var ci = ks[ks.length - 1];
        return [parseInt(ri, 10), parseInt(ci, 10)];
      }

      return [0, 0];
    }
  }, {
    key: "each",
    value: function each(cb) {
      Object.entries(this._).forEach(function (_ref2) {
        var _ref3 = row_slicedToArray(_ref2, 2),
            ri = _ref3[0],
            row = _ref3[1];

        cb(ri, row);
      });
    }
  }, {
    key: "eachCells",
    value: function eachCells(ri, cb) {
      if (this._[ri] && this._[ri].cells) {
        Object.entries(this._[ri].cells).forEach(function (_ref4) {
          var _ref5 = row_slicedToArray(_ref4, 2),
              ci = _ref5[0],
              cell = _ref5[1];

          cb(ci, cell);
        });
      }
    }
  }, {
    key: "setData",
    value: function setData(d) {
      if (d.len) {
        this.len = d.len;
        delete d.len;
      }

      this._ = d;
    }
  }, {
    key: "getData",
    value: function getData() {
      var len = this.len;
      return Object.assign({
        len: len
      }, this._);
    }
  }]);

  return Rows;
}();

/* harmony default export */ var core_row = ({});

// CONCATENATED MODULE: ./src/core/col.js
function col_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function col_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function col_createClass(Constructor, protoProps, staticProps) { if (protoProps) col_defineProperties(Constructor.prototype, protoProps); if (staticProps) col_defineProperties(Constructor, staticProps); return Constructor; }



var col_Cols =
/*#__PURE__*/
function () {
  function Cols(_ref) {
    var len = _ref.len,
        width = _ref.width,
        indexWidth = _ref.indexWidth,
        minWidth = _ref.minWidth;

    col_classCallCheck(this, Cols);

    this._ = {};
    this.len = len;
    this.width = width;
    this.indexWidth = indexWidth;
    this.minWidth = minWidth;
  }

  col_createClass(Cols, [{
    key: "setData",
    value: function setData(d) {
      if (d.len) {
        this.len = d.len;
        delete d.len;
      }

      this._ = d;
    }
  }, {
    key: "getData",
    value: function getData() {
      var len = this.len;
      return Object.assign({
        len: len
      }, this._);
    }
  }, {
    key: "getWidth",
    value: function getWidth(i) {
      if (this.isHide(i)) return 0;
      var col = this._[i];

      if (col && col.width) {
        return col.width;
      }

      return this.width;
    }
  }, {
    key: "getOrNew",
    value: function getOrNew(ci) {
      this._[ci] = this._[ci] || {};
      return this._[ci];
    }
  }, {
    key: "setWidth",
    value: function setWidth(ci, width) {
      var col = this.getOrNew(ci);
      col.width = width;
    }
  }, {
    key: "unhide",
    value: function unhide(idx) {
      var index = idx;

      while (index > 0) {
        index -= 1;

        if (this.isHide(index)) {
          this.setHide(index, false);
        } else break;
      }
    }
  }, {
    key: "isHide",
    value: function isHide(ci) {
      var col = this._[ci];
      return col && col.hide;
    }
  }, {
    key: "setHide",
    value: function setHide(ci, v) {
      var col = this.getOrNew(ci);
      if (v === true) col.hide = true;else delete col.hide;
    }
  }, {
    key: "setStyle",
    value: function setStyle(ci, style) {
      var col = this.getOrNew(ci);
      col.style = style;
    }
  }, {
    key: "sumWidth",
    value: function sumWidth(min, max) {
      var _this = this;

      return helper.rangeSum(min, max, function (i) {
        return _this.getWidth(i);
      });
    }
  }, {
    key: "totalWidth",
    value: function totalWidth() {
      return this.sumWidth(0, this.len);
    }
  }]);

  return Cols;
}();

/* harmony default export */ var col = ({});

// CONCATENATED MODULE: ./src/locale/en.js
/* harmony default export */ var en = ({
  toolbar: {
    undo: 'Undo',
    redo: 'Redo',
    print: 'Print',
    paintformat: 'Paint format',
    clearformat: 'Clear format',
    format: 'Format',
    fontName: 'Font',
    fontSize: 'Font size',
    fontBold: 'Font bold',
    fontItalic: 'Font italic',
    underline: 'Underline',
    strike: 'Strike',
    color: 'Text color',
    bgcolor: 'Fill color',
    border: 'Borders',
    merge: 'Merge cells',
    align: 'Horizontal align',
    valign: 'Vertical align',
    textwrap: 'Text wrapping',
    freeze: 'Freeze cell',
    autofilter: 'Filter',
    formula: 'Functions',
    more: 'More'
  },
  contextmenu: {
    copy: 'Copy',
    cut: 'Cut',
    paste: 'Paste',
    pasteValue: 'Paste values only',
    pasteFormat: 'Paste format only',
    hide: 'Hide',
    insertRow: 'Insert row',
    insertColumn: 'Insert column',
    deleteSheet: 'Delete',
    deleteRow: 'Delete row',
    deleteColumn: 'Delete column',
    deleteCell: 'Delete cell',
    deleteCellText: 'Delete cell text',
    validation: 'Data validations',
    cellprintable: 'Enable export',
    cellnonprintable: 'Disable export',
    celleditable: 'Enable editing',
    cellnoneditable: 'Disable editing'
  },
  print: {
    size: 'Paper size',
    orientation: 'Page orientation',
    orientations: ['Landscape', 'Portrait']
  },
  format: {
    normal: 'Normal',
    text: 'Plain Text',
    number: 'Number',
    percent: 'Percent',
    rmb: 'RMB',
    usd: 'USD',
    eur: 'EUR',
    date: 'Date',
    time: 'Time',
    datetime: 'Date time',
    duration: 'Duration'
  },
  formula: {
    sum: 'Sum',
    average: 'Average',
    max: 'Max',
    min: 'Min',
    _if: 'IF',
    and: 'AND',
    or: 'OR',
    concat: 'Concat'
  },
  validation: {
    required: 'it must be required',
    notMatch: 'it not match its validation rule',
    between: 'it is between {} and {}',
    notBetween: 'it is not between {} and {}',
    notIn: 'it is not in list',
    equal: 'it equal to {}',
    notEqual: 'it not equal to {}',
    lessThan: 'it less than {}',
    lessThanEqual: 'it less than or equal to {}',
    greaterThan: 'it greater than {}',
    greaterThanEqual: 'it greater than or equal to {}'
  },
  error: {
    pasteForMergedCell: 'Unable to do this for merged cells'
  },
  calendar: {
    weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  button: {
    next: 'Next',
    cancel: 'Cancel',
    remove: 'Remove',
    save: 'Save',
    ok: 'OK'
  },
  sort: {
    desc: 'Sort Z -> A',
    asc: 'Sort A -> Z'
  },
  filter: {
    empty: 'empty'
  },
  dataValidation: {
    mode: 'Mode',
    range: 'Cell Range',
    criteria: 'Criteria',
    modeType: {
      cell: 'Cell',
      column: 'Colun',
      row: 'Row'
    },
    type: {
      list: 'List',
      number: 'Number',
      date: 'Date',
      phone: 'Phone',
      email: 'Email'
    },
    operator: {
      be: 'between',
      nbe: 'not betwwen',
      lt: 'less than',
      lte: 'less than or equal to',
      gt: 'greater than',
      gte: 'greater than or equal to',
      eq: 'equal to',
      neq: 'not equal to'
    }
  }
});
// CONCATENATED MODULE: ./src/locale/locale.js
/* global window */
 // Defines the fallback language as English

var $languages = ['en'];
var $messages = {
  en: en
};

function translate(key, messages) {
  if (messages) {
    // Return the translation from the first language in the languages array
    // that has a value for the provided key.
    for (var _i = 0, _$languages = $languages; _i < _$languages.length; _i++) {
      var lang = _$languages[_i];
      if (!messages[lang]) break;
      var message = messages[lang]; // Splits the key at '.' except where escaped as '\.'

      var keys = key.match(/(?:\\.|[^.])+/g);

      for (var i = 0; i < keys.length; i += 1) {
        var property = keys[i];
        var value = message[property]; // If value doesn't exist, try next language

        if (!value) break;
        if (i === keys.length - 1) return value; // Move down to the next level of the messages object

        message = value;
      }
    }
  }

  return undefined;
}

function locale_t(key) {
  var v = translate(key, $messages);

  if (!v && window && window.x_spreadsheet && window.x_spreadsheet.$messages) {
    v = translate(key, window.x_spreadsheet.$messages);
  }

  return v || '';
}

function tf(key) {
  return function () {
    return locale_t(key);
  };
} // If clearLangList is set to false, lang will be added to the front of the
// languages array. The languages in the language array are searched in order
// to find a translation. This allows the use of other languages as a fallback
// if lang is missing some keys. The language array is preloaded with English.
// To set the languages array to only include lang, set clearLangList to true.


function locale_locale(lang, message) {
  var clearLangList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (clearLangList) {
    $languages = [lang];
  } else {
    // Append to front of array.
    // Translation method will use the first language in the list that has a
    // matching key.
    $languages.unshift(lang);
  }

  if (message) {
    $messages[lang] = message;
  }
}

/* harmony default export */ var src_locale_locale = ({
  t: locale_t
});

// CONCATENATED MODULE: ./src/core/validator.js
function validator_slicedToArray(arr, i) { return validator_arrayWithHoles(arr) || validator_iterableToArrayLimit(arr, i) || validator_nonIterableRest(); }

function validator_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function validator_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function validator_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function validator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function validator_createClass(Constructor, protoProps, staticProps) { if (protoProps) validator_defineProperties(Constructor.prototype, protoProps); if (staticProps) validator_defineProperties(Constructor, staticProps); return Constructor; }



var rules = {
  phone: /^[1-9]\d{10}$/,
  email: /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/
};

function returnMessage(flag, key) {
  var message = '';

  if (!flag) {
    for (var _len = arguments.length, arg = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      arg[_key - 2] = arguments[_key];
    }

    message = locale_t.apply(void 0, ["validation.".concat(key)].concat(arg));
  }

  return [flag, message];
}

var validator_Validator =
/*#__PURE__*/
function () {
  // operator: b|nb|eq|neq|lt|lte|gt|gte
  // type: date|number|list|phone|email
  function Validator(type, required, value, operator) {
    validator_classCallCheck(this, Validator);

    this.required = required;
    this.value = value;
    this.type = type;
    this.operator = operator;
    this.message = '';
  }

  validator_createClass(Validator, [{
    key: "parseValue",
    value: function parseValue(v) {
      var type = this.type;

      if (type === 'date') {
        return new Date(v);
      }

      if (type === 'number') {
        return Number(v);
      }

      return v;
    }
  }, {
    key: "equals",
    value: function equals(other) {
      var flag = this.type === other.type && this.required === other.required && this.operator === other.operator;

      if (flag) {
        if (Array.isArray(this.value)) {
          flag = helper.arrayEquals(this.value, other.value);
        } else {
          flag = this.value === other.value;
        }
      }

      return flag;
    }
  }, {
    key: "values",
    value: function values() {
      return this.value.split(',');
    }
  }, {
    key: "validate",
    value: function validate(v) {
      var required = this.required,
          operator = this.operator,
          value = this.value,
          type = this.type;

      if (required && /^\s*$/.test(v)) {
        return returnMessage(false, 'required');
      }

      if (/^\s*$/.test(v)) return [true];

      if (rules[type] && !rules[type].test(v)) {
        return returnMessage(false, 'notMatch');
      }

      if (type === 'list') {
        return returnMessage(this.values().includes(v), 'notIn');
      }

      if (operator) {
        var v1 = this.parseValue(v);

        if (operator === 'be') {
          var _value = validator_slicedToArray(value, 2),
              min = _value[0],
              max = _value[1];

          return returnMessage(v1 >= this.parseValue(min) && v1 <= this.parseValue(max), 'between', min, max);
        }

        if (operator === 'nbe') {
          var _value2 = validator_slicedToArray(value, 2),
              _min = _value2[0],
              _max = _value2[1];

          return returnMessage(v1 < this.parseValue(_min) || v1 > this.parseValue(_max), 'notBetween', _min, _max);
        }

        if (operator === 'eq') {
          return returnMessage(v1 === this.parseValue(value), 'equal', value);
        }

        if (operator === 'neq') {
          return returnMessage(v1 !== this.parseValue(value), 'notEqual', value);
        }

        if (operator === 'lt') {
          return returnMessage(v1 < this.parseValue(value), 'lessThan', value);
        }

        if (operator === 'lte') {
          return returnMessage(v1 <= this.parseValue(value), 'lessThanEqual', value);
        }

        if (operator === 'gt') {
          return returnMessage(v1 > this.parseValue(value), 'greaterThan', value);
        }

        if (operator === 'gte') {
          return returnMessage(v1 >= this.parseValue(value), 'greaterThanEqual', value);
        }
      }

      return [true];
    }
  }]);

  return Validator;
}();


// CONCATENATED MODULE: ./src/core/validation.js
function validation_slicedToArray(arr, i) { return validation_arrayWithHoles(arr) || validation_iterableToArrayLimit(arr, i) || validation_nonIterableRest(); }

function validation_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function validation_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function validation_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function validation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function validation_createClass(Constructor, protoProps, staticProps) { if (protoProps) validation_defineProperties(Constructor.prototype, protoProps); if (staticProps) validation_defineProperties(Constructor, staticProps); return Constructor; }




var validation_Validation =
/*#__PURE__*/
function () {
  function Validation(mode, refs, validator) {
    validation_classCallCheck(this, Validation);

    this.refs = refs;
    this.mode = mode; // cell

    this.validator = validator;
  }

  validation_createClass(Validation, [{
    key: "includes",
    value: function includes(ri, ci) {
      var refs = this.refs;

      for (var i = 0; i < refs.length; i += 1) {
        var cr = cell_range_CellRange.valueOf(refs[i]);
        if (cr.includes(ri, ci)) return true;
      }

      return false;
    }
  }, {
    key: "addRef",
    value: function addRef(ref) {
      this.remove(cell_range_CellRange.valueOf(ref));
      this.refs.push(ref);
    }
  }, {
    key: "remove",
    value: function remove(cellRange) {
      var nrefs = [];
      this.refs.forEach(function (it) {
        var cr = cell_range_CellRange.valueOf(it);

        if (cr.intersects(cellRange)) {
          var crs = cr.difference(cellRange);
          crs.forEach(function (it1) {
            return nrefs.push(it1.toString());
          });
        } else {
          nrefs.push(it);
        }
      });
      this.refs = nrefs;
    }
  }, {
    key: "getData",
    value: function getData() {
      var refs = this.refs,
          mode = this.mode,
          validator = this.validator;
      var type = validator.type,
          required = validator.required,
          operator = validator.operator,
          value = validator.value;
      return {
        refs: refs,
        mode: mode,
        type: type,
        required: required,
        operator: operator,
        value: value
      };
    }
  }], [{
    key: "valueOf",
    value: function valueOf(_ref) {
      var refs = _ref.refs,
          mode = _ref.mode,
          type = _ref.type,
          required = _ref.required,
          operator = _ref.operator,
          value = _ref.value;
      return new Validation(mode, refs, new validator_Validator(type, required, value, operator));
    }
  }]);

  return Validation;
}();

var validation_Validations =
/*#__PURE__*/
function () {
  function Validations() {
    validation_classCallCheck(this, Validations);

    this._ = []; // ri_ci: errMessage

    this.errors = new Map();
  }

  validation_createClass(Validations, [{
    key: "getError",
    value: function getError(ri, ci) {
      return this.errors.get("".concat(ri, "_").concat(ci));
    }
  }, {
    key: "validate",
    value: function validate(ri, ci, text) {
      var v = this.get(ri, ci);
      var key = "".concat(ri, "_").concat(ci);
      var errors = this.errors;

      if (v !== null) {
        var _v$validator$validate = v.validator.validate(text),
            _v$validator$validate2 = validation_slicedToArray(_v$validator$validate, 2),
            flag = _v$validator$validate2[0],
            message = _v$validator$validate2[1];

        if (!flag) {
          errors.set(key, message);
        } else {
          errors["delete"](key);
        }
      } else {
        errors["delete"](key);
      }

      return true;
    } // type: date|number|phone|email|list
    // validator: { required, value, operator }

  }, {
    key: "add",
    value: function add(mode, ref, _ref2) {
      var type = _ref2.type,
          required = _ref2.required,
          value = _ref2.value,
          operator = _ref2.operator;
      var validator = new validator_Validator(type, required, value, operator);
      var v = this.getByValidator(validator);

      if (v !== null) {
        v.addRef(ref);
      } else {
        this._.push(new validation_Validation(mode, [ref], validator));
      }
    }
  }, {
    key: "getByValidator",
    value: function getByValidator(validator) {
      for (var i = 0; i < this._.length; i += 1) {
        var v = this._[i];

        if (v.validator.equals(validator)) {
          return v;
        }
      }

      return null;
    }
  }, {
    key: "get",
    value: function get(ri, ci) {
      for (var i = 0; i < this._.length; i += 1) {
        var v = this._[i];
        if (v.includes(ri, ci)) return v;
      }

      return null;
    }
  }, {
    key: "remove",
    value: function remove(cellRange) {
      this.each(function (it) {
        it.remove(cellRange);
      });
    }
  }, {
    key: "each",
    value: function each(cb) {
      this._.forEach(function (it) {
        return cb(it);
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return this._.filter(function (it) {
        return it.refs.length > 0;
      }).map(function (it) {
        return it.getData();
      });
    }
  }, {
    key: "setData",
    value: function setData(d) {
      this._ = d.map(function (it) {
        return validation_Validation.valueOf(it);
      });
    }
  }]);

  return Validations;
}();

/* harmony default export */ var validation = ({});

// CONCATENATED MODULE: ./src/core/data_proxy.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || data_proxy_iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function data_proxy_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function data_proxy_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function data_proxy_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function data_proxy_createClass(Constructor, protoProps, staticProps) { if (protoProps) data_proxy_defineProperties(Constructor.prototype, protoProps); if (staticProps) data_proxy_defineProperties(Constructor, staticProps); return Constructor; }

function data_proxy_slicedToArray(arr, i) { return data_proxy_arrayWithHoles(arr) || data_proxy_iterableToArrayLimit(arr, i) || data_proxy_nonIterableRest(); }

function data_proxy_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function data_proxy_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function data_proxy_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global document */












 // private methods

/*
 * {
 *  name: ''
 *  freeze: [0, 0],
 *  formats: [],
 *  styles: [
 *    {
 *      bgcolor: '',
 *      align: '',
 *      valign: '',
 *      textwrap: false,
 *      strike: false,
 *      underline: false,
 *      color: '',
 *      format: 1,
 *      border: {
 *        left: [style, color],
 *        right: [style, color],
 *        top: [style, color],
 *        bottom: [style, color],
 *      },
 *      font: {
 *        name: 'Helvetica',
 *        size: 10,
 *        bold: false,
 *        italic: false,
 *      }
 *    }
 *  ],
 *  merges: [
 *    'A1:F11',
 *    ...
 *  ],
 *  rows: {
 *    1: {
 *      height: 50,
 *      style: 1,
 *      cells: {
 *        1: {
 *          style: 2,
 *          type: 'string',
 *          text: '',
 *          value: '', // cal result
 *        }
 *      }
 *    },
 *    ...
 *  },
 *  cols: {
 *    2: { width: 100, style: 1 }
 *  }
 * }
 */

var defaultSettings = {
  mode: 'edit',
  // edit | read
  view: {
    height: function height() {
      return document.documentElement.clientHeight;
    },
    width: function width() {
      return document.documentElement.clientWidth;
    }
  },
  showGrid: true,
  showToolbar: true,
  showContextmenu: true,
  showBottomBar: true,
  row: {
    len: 100,
    height: 25
  },
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60
  },
  style: {
    bgcolor: '#ffffff',
    align: 'left',
    valign: 'middle',
    textwrap: false,
    strike: false,
    underline: false,
    color: '#0a0a0a',
    font: {
      name: 'Arial',
      size: 10,
      bold: false,
      italic: false
    },
    format: 'normal'
  }
};
var toolbarHeight = 41;
var bottombarHeight = 41; // src: cellRange
// dst: cellRange

function canPaste(src, dst) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  var merges = this.merges;
  var cellRange = dst.clone();

  var _src$size = src.size(),
      _src$size2 = data_proxy_slicedToArray(_src$size, 2),
      srn = _src$size2[0],
      scn = _src$size2[1];

  var _dst$size = dst.size(),
      _dst$size2 = data_proxy_slicedToArray(_dst$size, 2),
      drn = _dst$size2[0],
      dcn = _dst$size2[1];

  if (srn > drn) {
    cellRange.eri = dst.sri + srn - 1;
  }

  if (scn > dcn) {
    cellRange.eci = dst.sci + scn - 1;
  }

  if (merges.intersects(cellRange)) {
    error(locale_t('error.pasteForMergedCell'));
    return false;
  }

  return true;
}

function data_proxy_copyPaste(srcCellRange, dstCellRange, what) {
  var autofill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var rows = this.rows,
      merges = this.merges; // delete dest merge

  if (what === 'all' || what === 'format') {
    rows.deleteCells(dstCellRange, what);
    merges.deleteWithin(dstCellRange);
  }

  rows.copyPaste(srcCellRange, dstCellRange, what, autofill, function (ri, ci, cell) {
    if (cell && cell.merge) {
      // console.log('cell:', ri, ci, cell);
      var _cell$merge = data_proxy_slicedToArray(cell.merge, 2),
          rn = _cell$merge[0],
          cn = _cell$merge[1];

      if (rn <= 0 && cn <= 0) return;
      merges.add(new cell_range_CellRange(ri, ci, ri + rn, ci + cn));
    }
  });
}

function cutPaste(srcCellRange, dstCellRange) {
  var clipboard = this.clipboard,
      rows = this.rows,
      merges = this.merges;
  rows.cutPaste(srcCellRange, dstCellRange);
  merges.move(srcCellRange, dstCellRange.sri - srcCellRange.sri, dstCellRange.sci - srcCellRange.sci);
  clipboard.clear();
} // bss: { top, bottom, left, right }


function setStyleBorder(ri, ci, bss) {
  var styles = this.styles,
      rows = this.rows;
  var cell = rows.getCellOrNew(ri, ci);
  var cstyle = {};

  if (cell.style !== undefined) {
    cstyle = helper.cloneDeep(styles[cell.style]);
  }

  cstyle = helper.merge(cstyle, {
    border: bss
  });
  cell.style = this.addStyle(cstyle);
}

function setStyleBorders(_ref) {
  var _this = this;

  var mode = _ref.mode,
      style = _ref.style,
      color = _ref.color;
  var styles = this.styles,
      selector = this.selector,
      rows = this.rows;
  var _selector$range = selector.range,
      sri = _selector$range.sri,
      sci = _selector$range.sci,
      eri = _selector$range.eri,
      eci = _selector$range.eci;
  var multiple = !this.isSingleSelected();

  if (!multiple) {
    if (mode === 'inside' || mode === 'horizontal' || mode === 'vertical') {
      return;
    }
  }

  if (mode === 'outside' && !multiple) {
    setStyleBorder.call(this, sri, sci, {
      top: [style, color],
      bottom: [style, color],
      left: [style, color],
      right: [style, color]
    });
  } else if (mode === 'none') {
    selector.range.each(function (ri, ci) {
      var cell = rows.getCell(ri, ci);

      if (cell && cell.style !== undefined) {
        var ns = helper.cloneDeep(styles[cell.style]);
        delete ns.border; // ['bottom', 'top', 'left', 'right'].forEach((prop) => {
        //   if (ns[prop]) delete ns[prop];
        // });

        cell.style = _this.addStyle(ns);
      }
    });
  } else if (mode === 'all' || mode === 'inside' || mode === 'outside' || mode === 'horizontal' || mode === 'vertical') {
    (function () {
      var merges = [];

      for (var ri = sri; ri <= eri; ri += 1) {
        for (var ci = sci; ci <= eci; ci += 1) {
          // jump merges -- start
          var mergeIndexes = [];

          for (var ii = 0; ii < merges.length; ii += 1) {
            var _merges$ii = data_proxy_slicedToArray(merges[ii], 4),
                mri = _merges$ii[0],
                mci = _merges$ii[1],
                _rn = _merges$ii[2],
                _cn = _merges$ii[3];

            if (ri === mri + _rn + 1) mergeIndexes.push(ii);

            if (mri <= ri && ri <= mri + _rn) {
              if (ci === mci) {
                ci += _cn + 1;
                break;
              }
            }
          }

          mergeIndexes.forEach(function (it) {
            return merges.splice(it, 1);
          });
          if (ci > eci) break; // jump merges -- end

          var cell = rows.getCell(ri, ci);
          var rn = 0,
              cn = 0;

          if (cell && cell.merge) {
            var _cell$merge2 = data_proxy_slicedToArray(cell.merge, 2);

            rn = _cell$merge2[0];
            cn = _cell$merge2[1];
            merges.push([ri, ci, rn, cn]);
          }

          var mrl = rn > 0 && ri + rn === eri;
          var mcl = cn > 0 && ci + cn === eci;
          var bss = {};

          if (mode === 'all') {
            bss = {
              bottom: [style, color],
              top: [style, color],
              left: [style, color],
              right: [style, color]
            };
          } else if (mode === 'inside') {
            if (!mcl && ci < eci) bss.right = [style, color];
            if (!mrl && ri < eri) bss.bottom = [style, color];
          } else if (mode === 'horizontal') {
            if (!mrl && ri < eri) bss.bottom = [style, color];
          } else if (mode === 'vertical') {
            if (!mcl && ci < eci) bss.right = [style, color];
          } else if (mode === 'outside' && multiple) {
            if (sri === ri) bss.top = [style, color];
            if (mrl || eri === ri) bss.bottom = [style, color];
            if (sci === ci) bss.left = [style, color];
            if (mcl || eci === ci) bss.right = [style, color];
          }

          if (Object.keys(bss).length > 0) {
            setStyleBorder.call(_this, ri, ci, bss);
          }

          ci += cn;
        }
      }
    })();
  } else if (mode === 'top' || mode === 'bottom') {
    for (var ci = sci; ci <= eci; ci += 1) {
      if (mode === 'top') {
        setStyleBorder.call(this, sri, ci, {
          top: [style, color]
        });
        ci += rows.getCellMerge(sri, ci)[1];
      }

      if (mode === 'bottom') {
        setStyleBorder.call(this, eri, ci, {
          bottom: [style, color]
        });
        ci += rows.getCellMerge(eri, ci)[1];
      }
    }
  } else if (mode === 'left' || mode === 'right') {
    for (var ri = sri; ri <= eri; ri += 1) {
      if (mode === 'left') {
        setStyleBorder.call(this, ri, sci, {
          left: [style, color]
        });
        ri += rows.getCellMerge(ri, sci)[0];
      }

      if (mode === 'right') {
        setStyleBorder.call(this, ri, eci, {
          right: [style, color]
        });
        ri += rows.getCellMerge(ri, eci)[0];
      }
    }
  }
}

function getCellRowByY(y, scrollOffsety) {
  var rows = this.rows;
  var fsh = this.freezeTotalHeight(); // console.log('y:', y, ', fsh:', fsh);

  var inits = rows.height;
  if (fsh + rows.height < y) inits -= scrollOffsety; // handle ri in autofilter

  var frset = this.exceptRowSet;
  var ri = 0;
  var top = inits;
  var height = rows.height;

  for (; ri < rows.len; ri += 1) {
    if (top > y) break;

    if (!frset.has(ri)) {
      height = rows.getHeight(ri);
      top += height;
    }
  }

  top -= height; // console.log('ri:', ri, ', top:', top, ', height:', height);

  if (top <= 0) {
    return {
      ri: -1,
      top: 0,
      height: height
    };
  }

  return {
    ri: ri - 1,
    top: top,
    height: height
  };
}

function getCellColByX(x, scrollOffsetx) {
  var cols = this.cols;
  var fsw = this.freezeTotalWidth();
  var inits = cols.indexWidth;
  if (fsw + cols.indexWidth < x) inits -= scrollOffsetx;

  var _helper$rangeReduceIf = helper.rangeReduceIf(0, cols.len, inits, cols.indexWidth, x, function (i) {
    return cols.getWidth(i);
  }),
      _helper$rangeReduceIf2 = data_proxy_slicedToArray(_helper$rangeReduceIf, 3),
      ci = _helper$rangeReduceIf2[0],
      left = _helper$rangeReduceIf2[1],
      width = _helper$rangeReduceIf2[2];

  if (left <= 0) {
    return {
      ci: -1,
      left: 0,
      width: cols.indexWidth
    };
  }

  return {
    ci: ci - 1,
    left: left,
    width: width
  };
}

var data_proxy_DataProxy =
/*#__PURE__*/
function () {
  function DataProxy(name, settings) {
    data_proxy_classCallCheck(this, DataProxy);

    this.settings = helper.merge(defaultSettings, settings || {}); // save data begin

    this.name = name || 'sheet';
    this.freeze = [0, 0];
    this.styles = []; // Array<Style>

    this.merges = new merge_Merges(); // [CellRange, ...]

    this.rows = new row_Rows(this.settings.row);
    this.cols = new col_Cols(this.settings.col);
    this.validations = new validation_Validations();
    this.hyperlinks = {};
    this.comments = {}; // save data end
    // don't save object

    this.selector = new selector_Selector();
    this.scroll = new Scroll();
    this.history = new History();
    this.clipboard = new Clipboard();
    this.autoFilter = new auto_filter_AutoFilter();

    this.change = function () {};

    this.exceptRowSet = new Set();
    this.sortedRowMap = new Map();
    this.unsortedRowMap = new Map();
  }

  data_proxy_createClass(DataProxy, [{
    key: "addValidation",
    value: function addValidation(mode, ref, validator) {
      var _this2 = this;

      // console.log('mode:', mode, ', ref:', ref, ', validator:', validator);
      this.changeData(function () {
        _this2.validations.add(mode, ref, validator);
      });
    }
  }, {
    key: "removeValidation",
    value: function removeValidation() {
      var _this3 = this;

      var range = this.selector.range;
      this.changeData(function () {
        _this3.validations.remove(range);
      });
    }
  }, {
    key: "getSelectedValidator",
    value: function getSelectedValidator() {
      var _this$selector = this.selector,
          ri = _this$selector.ri,
          ci = _this$selector.ci;
      var v = this.validations.get(ri, ci);
      return v ? v.validator : null;
    }
  }, {
    key: "getSelectedValidation",
    value: function getSelectedValidation() {
      var _this$selector2 = this.selector,
          ri = _this$selector2.ri,
          ci = _this$selector2.ci,
          range = _this$selector2.range;
      var v = this.validations.get(ri, ci);
      var ret = {
        ref: range.toString()
      };

      if (v !== null) {
        ret.mode = v.mode;
        ret.validator = v.validator;
      }

      return ret;
    }
  }, {
    key: "canUndo",
    value: function canUndo() {
      return this.history.canUndo();
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      return this.history.canRedo();
    }
  }, {
    key: "undo",
    value: function undo() {
      var _this4 = this;

      this.history.undo(this.getData(), function (d) {
        _this4.setData(d);
      });
    }
  }, {
    key: "redo",
    value: function redo() {
      var _this5 = this;

      this.history.redo(this.getData(), function (d) {
        _this5.setData(d);
      });
    }
  }, {
    key: "copy",
    value: function copy() {
      this.clipboard.copy(this.selector.range);
    }
  }, {
    key: "copyToSystemClipboard",
    value: function copyToSystemClipboard(evt) {
      var copyText = [];
      var _this$selector$range = this.selector.range,
          sri = _this$selector$range.sri,
          eri = _this$selector$range.eri,
          sci = _this$selector$range.sci,
          eci = _this$selector$range.eci;

      for (var ri = sri; ri <= eri; ri += 1) {
        var row = [];

        for (var ci = sci; ci <= eci; ci += 1) {
          var cell = this.getCell(ri, ci);
          row.push(cell && cell.text || '');
        }

        copyText.push(row);
      } // Adding \n and why not adding \r\n is to support online office and client MS office and WPS


      copyText = copyText.map(function (row) {
        return row.join('\t');
      }).join('\n'); // why used this
      // cuz http protocol will be blocked request clipboard by browser

      if (evt) {
        evt.clipboardData.clearData();
        evt.clipboardData.setData('text/plain', copyText);
        evt.preventDefault();
      } // this need https protocol

      /* global navigator */


      if (navigator.clipboard) {
        navigator.clipboard.writeText(copyText).then(function () {}, function (err) {
          console.log('text copy to the system clipboard error  ', copyText, err);
        });
      }
    }
  }, {
    key: "cut",
    value: function cut() {
      this.clipboard.cut(this.selector.range);
    } // what: all | text | format

  }, {
    key: "paste",
    value: function paste() {
      var _this6 = this;

      var what = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      // console.log('sIndexes:', sIndexes);
      var clipboard = this.clipboard,
          selector = this.selector;
      if (clipboard.isClear()) return false;
      if (!canPaste.call(this, clipboard.range, selector.range, error)) return false;
      this.changeData(function () {
        if (clipboard.isCopy()) {
          data_proxy_copyPaste.call(_this6, clipboard.range, selector.range, what);
        } else if (clipboard.isCut()) {
          cutPaste.call(_this6, clipboard.range, selector.range);
        }
      });
      return true;
    }
  }, {
    key: "pasteFromSystemClipboard",
    value: function pasteFromSystemClipboard(resetSheet, eventTrigger) {
      var _this7 = this;

      var selector = this.selector;
      navigator.clipboard.readText().then(function (content) {
        var contentToPaste = _this7.parseClipboardContent(content);

        var startRow = selector.ri;
        contentToPaste.forEach(function (row) {
          var startColumn = selector.ci;
          row.forEach(function (cellContent) {
            _this7.setCellText(startRow, startColumn, cellContent, 'input');

            startColumn += 1;
          });
          startRow += 1;
        });
        resetSheet();
        eventTrigger(_this7.rows.getData());
      });
    }
  }, {
    key: "parseClipboardContent",
    value: function parseClipboardContent(clipboardContent) {
      var parsedData = []; // first we need to figure out how many rows we need to paste

      var rows = clipboardContent.split('\n'); // for each row parse cell data

      var i = 0;
      rows.forEach(function (row) {
        parsedData[i] = row.split('\t');
        i += 1;
      });
      return parsedData;
    }
  }, {
    key: "pasteFromText",
    value: function pasteFromText(txt) {
      var lines = [];
      if (/\r\n/.test(txt)) lines = txt.split('\r\n').map(function (it) {
        return it.replace(/"/g, '').split('\t');
      });else lines = txt.split('\n').map(function (it) {
        return it.replace(/"/g, '').split('\t');
      });

      if (lines.length) {
        var rows = this.rows,
            selector = this.selector;
        this.changeData(function () {
          rows.paste(lines, selector.range);
        });
      }
    }
  }, {
    key: "autofill",
    value: function autofill(cellRange, what) {
      var _this8 = this;

      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var srcRange = this.selector.range;
      if (!canPaste.call(this, srcRange, cellRange, error)) return false;
      this.changeData(function () {
        data_proxy_copyPaste.call(_this8, srcRange, cellRange, what, true);
      });
      return true;
    }
  }, {
    key: "clearClipboard",
    value: function clearClipboard() {
      this.clipboard.clear();
    }
  }, {
    key: "calSelectedRangeByEnd",
    value: function calSelectedRangeByEnd(ri, ci) {
      var selector = this.selector,
          rows = this.rows,
          cols = this.cols,
          merges = this.merges;
      var _selector$range2 = selector.range,
          sri = _selector$range2.sri,
          sci = _selector$range2.sci,
          eri = _selector$range2.eri,
          eci = _selector$range2.eci;
      var cri = selector.ri;
      var cci = selector.ci;
      var nri = ri,
          nci = ci;
      if (ri < 0) nri = rows.len - 1;
      if (ci < 0) nci = cols.len - 1;

      if (nri > cri) {
        sri = cri;
        eri = nri;
      } else {
        sri = nri;
        eri = cri;
      }

      if (nci > cci) {
        sci = cci;
        eci = nci;
      } else {
        sci = nci;
        eci = cci;
      }

      selector.range = merges.union(new cell_range_CellRange(sri, sci, eri, eci));
      selector.range = merges.union(selector.range); // console.log('selector.range:', selector.range);

      return selector.range;
    }
  }, {
    key: "calSelectedRangeByStart",
    value: function calSelectedRangeByStart(ri, ci) {
      var selector = this.selector,
          rows = this.rows,
          cols = this.cols,
          merges = this.merges;
      var cellRange = merges.getFirstIncludes(ri, ci); // console.log('cellRange:', cellRange, ri, ci, merges);

      if (cellRange === null) {
        cellRange = new cell_range_CellRange(ri, ci, ri, ci);

        if (ri === -1) {
          cellRange.sri = 0;
          cellRange.eri = rows.len - 1;
        }

        if (ci === -1) {
          cellRange.sci = 0;
          cellRange.eci = cols.len - 1;
        }
      }

      selector.range = cellRange;
      return cellRange;
    }
  }, {
    key: "setSelectedCellAttr",
    value: function setSelectedCellAttr(property, value) {
      var _this9 = this;

      this.changeData(function () {
        var selector = _this9.selector,
            styles = _this9.styles,
            rows = _this9.rows;

        if (property === 'merge') {
          if (value) _this9.merge();else _this9.unmerge();
        } else if (property === 'border') {
          setStyleBorders.call(_this9, value);
        } else if (property === 'formula') {
          // console.log('>>>', selector.multiple());
          var ri = selector.ri,
              ci = selector.ci,
              range = selector.range;

          if (selector.multiple()) {
            var _selector$size = selector.size(),
                _selector$size2 = data_proxy_slicedToArray(_selector$size, 2),
                rn = _selector$size2[0],
                cn = _selector$size2[1];

            var sri = range.sri,
                sci = range.sci,
                eri = range.eri,
                eci = range.eci;

            if (rn > 1) {
              for (var i = sci; i <= eci; i += 1) {
                var cell = rows.getCellOrNew(eri + 1, i);
                cell.text = "=".concat(value, "(").concat(xy2expr(i, sri), ":").concat(xy2expr(i, eri), ")");
              }
            } else if (cn > 1) {
              var _cell = rows.getCellOrNew(ri, eci + 1);

              _cell.text = "=".concat(value, "(").concat(xy2expr(sci, ri), ":").concat(xy2expr(eci, ri), ")");
            }
          } else {
            var _cell2 = rows.getCellOrNew(ri, ci);

            _cell2.text = "=".concat(value, "()");
          }
        } else {
          selector.range.each(function (ri, ci) {
            var cell = rows.getCellOrNew(ri, ci);
            var cstyle = {};

            if (cell.style !== undefined) {
              cstyle = helper.cloneDeep(styles[cell.style]);
            }

            if (property === 'format') {
              cstyle.format = value;
              cell.style = _this9.addStyle(cstyle);
            } else if (property === 'font-bold' || property === 'font-italic' || property === 'font-name' || property === 'font-size') {
              var nfont = {};
              nfont[property.split('-')[1]] = value;
              cstyle.font = Object.assign(cstyle.font || {}, nfont);
              cell.style = _this9.addStyle(cstyle);
            } else if (property === 'strike' || property === 'textwrap' || property === 'underline' || property === 'align' || property === 'valign' || property === 'color' || property === 'bgcolor') {
              cstyle[property] = value;
              cell.style = _this9.addStyle(cstyle);
            } else {
              cell[property] = value;
            }
          });
        }
      });
    } // state: input | finished

  }, {
    key: "setSelectedCellText",
    value: function setSelectedCellText(text) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input';
      var autoFilter = this.autoFilter,
          selector = this.selector,
          rows = this.rows;
      var ri = selector.ri,
          ci = selector.ci;
      var nri = ri;

      if (this.unsortedRowMap.has(ri)) {
        nri = this.unsortedRowMap.get(ri);
      }

      var oldCell = rows.getCell(nri, ci);
      var oldText = oldCell ? oldCell.text : '';
      this.setCellText(nri, ci, text, state); // replace filter.value

      if (autoFilter.active()) {
        var filter = autoFilter.getFilter(ci);

        if (filter) {
          var vIndex = filter.value.findIndex(function (v) {
            return v === oldText;
          });

          if (vIndex >= 0) {
            filter.value.splice(vIndex, 1, text);
          } // console.log('filter:', filter, oldCell);

        }
      } // this.resetAutoFilter();

    }
  }, {
    key: "getSelectedCell",
    value: function getSelectedCell() {
      var _this$selector3 = this.selector,
          ri = _this$selector3.ri,
          ci = _this$selector3.ci;
      var nri = ri;

      if (this.unsortedRowMap.has(ri)) {
        nri = this.unsortedRowMap.get(ri);
      }

      return this.rows.getCell(nri, ci);
    }
  }, {
    key: "xyInSelectedRect",
    value: function xyInSelectedRect(x, y) {
      var _this$getSelectedRect = this.getSelectedRect(),
          left = _this$getSelectedRect.left,
          top = _this$getSelectedRect.top,
          width = _this$getSelectedRect.width,
          height = _this$getSelectedRect.height;

      var x1 = x - this.cols.indexWidth;
      var y1 = y - this.rows.height; // console.log('x:', x, ',y:', y, 'left:', left, 'top:', top);

      return x1 > left && x1 < left + width && y1 > top && y1 < top + height;
    }
  }, {
    key: "getSelectedRect",
    value: function getSelectedRect() {
      return this.getRect(this.selector.range);
    }
  }, {
    key: "getClipboardRect",
    value: function getClipboardRect() {
      var clipboard = this.clipboard;

      if (!clipboard.isClear()) {
        return this.getRect(clipboard.range);
      }

      return {
        left: -100,
        top: -100
      };
    }
  }, {
    key: "getRect",
    value: function getRect(cellRange) {
      var scroll = this.scroll,
          rows = this.rows,
          cols = this.cols,
          exceptRowSet = this.exceptRowSet;
      var sri = cellRange.sri,
          sci = cellRange.sci,
          eri = cellRange.eri,
          eci = cellRange.eci; // console.log('sri:', sri, ',sci:', sci, ', eri:', eri, ', eci:', eci);
      // no selector

      if (sri < 0 && sci < 0) {
        return {
          left: 0,
          l: 0,
          top: 0,
          t: 0,
          scroll: scroll
        };
      }

      var left = cols.sumWidth(0, sci);
      var top = rows.sumHeight(0, sri, exceptRowSet);
      var height = rows.sumHeight(sri, eri + 1, exceptRowSet);
      var width = cols.sumWidth(sci, eci + 1); // console.log('sri:', sri, ', sci:', sci, ', eri:', eri, ', eci:', eci);

      var left0 = left - scroll.x;
      var top0 = top - scroll.y;
      var fsh = this.freezeTotalHeight();
      var fsw = this.freezeTotalWidth();

      if (fsw > 0 && fsw > left) {
        left0 = left;
      }

      if (fsh > 0 && fsh > top) {
        top0 = top;
      }

      return {
        l: left,
        t: top,
        left: left0,
        top: top0,
        height: height,
        width: width,
        scroll: scroll
      };
    }
  }, {
    key: "getCellRectByXY",
    value: function getCellRectByXY(x, y) {
      var scroll = this.scroll,
          merges = this.merges,
          rows = this.rows,
          cols = this.cols;

      var _getCellRowByY$call = getCellRowByY.call(this, y, scroll.y),
          ri = _getCellRowByY$call.ri,
          top = _getCellRowByY$call.top,
          height = _getCellRowByY$call.height;

      var _getCellColByX$call = getCellColByX.call(this, x, scroll.x),
          ci = _getCellColByX$call.ci,
          left = _getCellColByX$call.left,
          width = _getCellColByX$call.width;

      if (ci === -1) {
        width = cols.totalWidth();
      }

      if (ri === -1) {
        height = rows.totalHeight();
      }

      if (ri >= 0 || ci >= 0) {
        var merge = merges.getFirstIncludes(ri, ci);

        if (merge) {
          ri = merge.sri;
          ci = merge.sci;

          var _this$cellRect = this.cellRect(ri, ci);

          left = _this$cellRect.left;
          top = _this$cellRect.top;
          width = _this$cellRect.width;
          height = _this$cellRect.height;
        }
      }

      return {
        ri: ri,
        ci: ci,
        left: left,
        top: top,
        width: width,
        height: height
      };
    }
  }, {
    key: "isSingleSelected",
    value: function isSingleSelected() {
      var _this$selector$range2 = this.selector.range,
          sri = _this$selector$range2.sri,
          sci = _this$selector$range2.sci,
          eri = _this$selector$range2.eri,
          eci = _this$selector$range2.eci;
      var cell = this.getCell(sri, sci);

      if (cell && cell.merge) {
        var _cell$merge3 = data_proxy_slicedToArray(cell.merge, 2),
            rn = _cell$merge3[0],
            cn = _cell$merge3[1];

        if (sri + rn === eri && sci + cn === eci) return true;
      }

      return !this.selector.multiple();
    }
  }, {
    key: "canUnmerge",
    value: function canUnmerge() {
      var _this$selector$range3 = this.selector.range,
          sri = _this$selector$range3.sri,
          sci = _this$selector$range3.sci,
          eri = _this$selector$range3.eri,
          eci = _this$selector$range3.eci;
      var cell = this.getCell(sri, sci);

      if (cell && cell.merge) {
        var _cell$merge4 = data_proxy_slicedToArray(cell.merge, 2),
            rn = _cell$merge4[0],
            cn = _cell$merge4[1];

        if (sri + rn === eri && sci + cn === eci) return true;
      }

      return false;
    }
  }, {
    key: "merge",
    value: function merge() {
      var _this10 = this;

      var selector = this.selector,
          rows = this.rows;
      if (this.isSingleSelected()) return;

      var _selector$size3 = selector.size(),
          _selector$size4 = data_proxy_slicedToArray(_selector$size3, 2),
          rn = _selector$size4[0],
          cn = _selector$size4[1]; // console.log('merge:', rn, cn);


      if (rn > 1 || cn > 1) {
        var _selector$range3 = selector.range,
            sri = _selector$range3.sri,
            sci = _selector$range3.sci;
        this.changeData(function () {
          var cell = rows.getCellOrNew(sri, sci);
          cell.merge = [rn - 1, cn - 1];

          _this10.merges.add(selector.range); // delete merge cells


          _this10.rows.deleteCells(selector.range); // console.log('cell:', cell, this.d);


          _this10.rows.setCell(sri, sci, cell);
        });
      }
    }
  }, {
    key: "unmerge",
    value: function unmerge() {
      var _this11 = this;

      var selector = this.selector;
      if (!this.isSingleSelected()) return;
      var _selector$range4 = selector.range,
          sri = _selector$range4.sri,
          sci = _selector$range4.sci;
      this.changeData(function () {
        _this11.rows.deleteCell(sri, sci, 'merge');

        _this11.merges.deleteWithin(selector.range);
      });
    }
  }, {
    key: "canAutofilter",
    value: function canAutofilter() {
      return !this.autoFilter.active();
    }
  }, {
    key: "autofilter",
    value: function autofilter() {
      var _this12 = this;

      var autoFilter = this.autoFilter,
          selector = this.selector;
      this.changeData(function () {
        if (autoFilter.active()) {
          autoFilter.clear();
          _this12.exceptRowSet = new Set();
          _this12.sortedRowMap = new Map();
          _this12.unsortedRowMap = new Map();
        } else {
          autoFilter.ref = selector.range.toString();
        }
      });
    }
  }, {
    key: "setAutoFilter",
    value: function setAutoFilter(ci, order, operator, value) {
      var autoFilter = this.autoFilter;
      autoFilter.addFilter(ci, operator, value);
      autoFilter.setSort(ci, order);
      this.resetAutoFilter();
    }
  }, {
    key: "resetAutoFilter",
    value: function resetAutoFilter() {
      var _this13 = this;

      var autoFilter = this.autoFilter,
          rows = this.rows;
      if (!autoFilter.active()) return;
      var sort = autoFilter.sort;

      var _autoFilter$filteredR = autoFilter.filteredRows(function (r, c) {
        return rows.getCell(r, c);
      }),
          rset = _autoFilter$filteredR.rset,
          fset = _autoFilter$filteredR.fset;

      var fary = Array.from(fset);
      var oldAry = Array.from(fset);

      if (sort) {
        fary.sort(function (a, b) {
          if (sort.order === 'asc') return a - b;
          if (sort.order === 'desc') return b - a;
          return 0;
        });
      }

      this.exceptRowSet = rset;
      this.sortedRowMap = new Map();
      this.unsortedRowMap = new Map();
      fary.forEach(function (it, index) {
        _this13.sortedRowMap.set(oldAry[index], it);

        _this13.unsortedRowMap.set(it, oldAry[index]);
      });
    }
  }, {
    key: "deleteCell",
    value: function deleteCell() {
      var _this14 = this;

      var what = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var selector = this.selector;
      this.changeData(function () {
        _this14.rows.deleteCells(selector.range, what);

        if (what === 'all' || what === 'format') {
          _this14.merges.deleteWithin(selector.range);
        }
      });
    } // type: row | column

  }, {
    key: "insert",
    value: function insert(type) {
      var _this15 = this;

      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.changeData(function () {
        var _this15$selector$rang = _this15.selector.range,
            sri = _this15$selector$rang.sri,
            sci = _this15$selector$rang.sci;
        var rows = _this15.rows,
            merges = _this15.merges,
            cols = _this15.cols;
        var si = sri;

        if (type === 'row') {
          rows.insert(sri, n);
        } else if (type === 'column') {
          rows.insertColumn(sci, n);
          si = sci;
          cols.len += 1;
        }

        merges.shift(type, si, n, function (ri, ci, rn, cn) {
          var cell = rows.getCell(ri, ci);
          cell.merge[0] += rn;
          cell.merge[1] += cn;
        });
      });
    } // type: row | column

  }, {
    key: "delete",
    value: function _delete(type) {
      var _this16 = this;

      this.changeData(function () {
        var rows = _this16.rows,
            merges = _this16.merges,
            selector = _this16.selector,
            cols = _this16.cols;
        var range = selector.range;
        var _selector$range5 = selector.range,
            sri = _selector$range5.sri,
            sci = _selector$range5.sci,
            eri = _selector$range5.eri,
            eci = _selector$range5.eci;

        var _selector$range$size = selector.range.size(),
            _selector$range$size2 = data_proxy_slicedToArray(_selector$range$size, 2),
            rsize = _selector$range$size2[0],
            csize = _selector$range$size2[1];

        var si = sri;
        var size = rsize;

        if (type === 'row') {
          rows["delete"](sri, eri);
        } else if (type === 'column') {
          rows.deleteColumn(sci, eci);
          si = range.sci;
          size = csize;
          cols.len -= eci - sci + 1;
        } // console.log('type:', type, ', si:', si, ', size:', size);


        merges.shift(type, si, -size, function (ri, ci, rn, cn) {
          // console.log('ri:', ri, ', ci:', ci, ', rn:', rn, ', cn:', cn);
          var cell = rows.getCell(ri, ci);
          cell.merge[0] += rn;
          cell.merge[1] += cn;

          if (cell.merge[0] === 0 && cell.merge[1] === 0) {
            delete cell.merge;
          }
        });
      });
    }
  }, {
    key: "scrollx",
    value: function scrollx(x, cb) {
      var scroll = this.scroll,
          freeze = this.freeze,
          cols = this.cols;

      var _freeze = data_proxy_slicedToArray(freeze, 2),
          fci = _freeze[1];

      var _helper$rangeReduceIf3 = helper.rangeReduceIf(fci, cols.len, 0, 0, x, function (i) {
        return cols.getWidth(i);
      }),
          _helper$rangeReduceIf4 = data_proxy_slicedToArray(_helper$rangeReduceIf3, 3),
          ci = _helper$rangeReduceIf4[0],
          left = _helper$rangeReduceIf4[1],
          width = _helper$rangeReduceIf4[2]; // console.log('fci:', fci, ', ci:', ci);


      var x1 = left;
      if (x > 0) x1 += width;

      if (scroll.x !== x1) {
        scroll.ci = x > 0 ? ci : 0;
        scroll.x = x1;
        cb();
      }
    }
  }, {
    key: "scrolly",
    value: function scrolly(y, cb) {
      var scroll = this.scroll,
          freeze = this.freeze,
          rows = this.rows;

      var _freeze2 = data_proxy_slicedToArray(freeze, 1),
          fri = _freeze2[0];

      var _helper$rangeReduceIf5 = helper.rangeReduceIf(fri, rows.len, 0, 0, y, function (i) {
        return rows.getHeight(i);
      }),
          _helper$rangeReduceIf6 = data_proxy_slicedToArray(_helper$rangeReduceIf5, 3),
          ri = _helper$rangeReduceIf6[0],
          top = _helper$rangeReduceIf6[1],
          height = _helper$rangeReduceIf6[2];

      var y1 = top;
      if (y > 0) y1 += height; // console.log('ri:', ri, ' ,y:', y1);

      if (scroll.y !== y1) {
        scroll.ri = y > 0 ? ri : 0;
        scroll.y = y1;
        cb();
      }
    }
  }, {
    key: "cellRect",
    value: function cellRect(ri, ci) {
      var rows = this.rows,
          cols = this.cols;
      var left = cols.sumWidth(0, ci);
      var top = rows.sumHeight(0, ri);
      var cell = rows.getCell(ri, ci);
      var width = cols.getWidth(ci);
      var height = rows.getHeight(ri);

      if (cell !== null) {
        if (cell.merge) {
          var _cell$merge5 = data_proxy_slicedToArray(cell.merge, 2),
              rn = _cell$merge5[0],
              cn = _cell$merge5[1]; // console.log('cell.merge:', cell.merge);


          if (rn > 0) {
            for (var i = 1; i <= rn; i += 1) {
              height += rows.getHeight(ri + i);
            }
          }

          if (cn > 0) {
            for (var _i2 = 1; _i2 <= cn; _i2 += 1) {
              width += cols.getWidth(ci + _i2);
            }
          }
        }
      } // console.log('data:', this.d);


      return {
        left: left,
        top: top,
        width: width,
        height: height,
        cell: cell
      };
    }
  }, {
    key: "getCell",
    value: function getCell(ri, ci) {
      return this.rows.getCell(ri, ci);
    }
  }, {
    key: "getCellTextOrDefault",
    value: function getCellTextOrDefault(ri, ci) {
      var cell = this.getCell(ri, ci);
      return cell && cell.text ? cell.text : '';
    }
  }, {
    key: "getCellStyle",
    value: function getCellStyle(ri, ci) {
      var cell = this.getCell(ri, ci);

      if (cell && cell.style !== undefined) {
        return this.styles[cell.style];
      }

      return null;
    }
  }, {
    key: "getCellStyleOrDefault",
    value: function getCellStyleOrDefault(ri, ci) {
      var styles = this.styles,
          rows = this.rows;
      var cell = rows.getCell(ri, ci);
      var cellStyle = cell && cell.style !== undefined ? styles[cell.style] : {};
      return helper.merge(this.defaultStyle(), cellStyle);
    }
  }, {
    key: "getSelectedCellStyle",
    value: function getSelectedCellStyle() {
      var _this$selector4 = this.selector,
          ri = _this$selector4.ri,
          ci = _this$selector4.ci;
      return this.getCellStyleOrDefault(ri, ci);
    } // state: input | finished

  }, {
    key: "setCellText",
    value: function setCellText(ri, ci, text, state) {
      var rows = this.rows,
          history = this.history,
          validations = this.validations;

      if (state === 'finished') {
        rows.setCellText(ri, ci, '');
        history.add(this.getData());
        rows.setCellText(ri, ci, text);
      } else {
        rows.setCellText(ri, ci, text);
        this.change(this.getData());
      } // validator


      validations.validate(ri, ci, text);
    }
  }, {
    key: "freezeIsActive",
    value: function freezeIsActive() {
      var _this$freeze = data_proxy_slicedToArray(this.freeze, 2),
          ri = _this$freeze[0],
          ci = _this$freeze[1];

      return ri > 0 || ci > 0;
    }
  }, {
    key: "setFreeze",
    value: function setFreeze(ri, ci) {
      var _this17 = this;

      this.changeData(function () {
        _this17.freeze = [ri, ci];
      });
    }
  }, {
    key: "freezeTotalWidth",
    value: function freezeTotalWidth() {
      return this.cols.sumWidth(0, this.freeze[1]);
    }
  }, {
    key: "freezeTotalHeight",
    value: function freezeTotalHeight() {
      return this.rows.sumHeight(0, this.freeze[0]);
    }
  }, {
    key: "setRowHeight",
    value: function setRowHeight(ri, height) {
      var _this18 = this;

      this.changeData(function () {
        _this18.rows.setHeight(ri, height);
      });
    }
  }, {
    key: "setColWidth",
    value: function setColWidth(ci, width) {
      var _this19 = this;

      this.changeData(function () {
        _this19.cols.setWidth(ci, width);
      });
    }
  }, {
    key: "viewHeight",
    value: function viewHeight() {
      var _this$settings = this.settings,
          view = _this$settings.view,
          showToolbar = _this$settings.showToolbar,
          showBottomBar = _this$settings.showBottomBar;
      var h = view.height();

      if (showBottomBar) {
        h -= bottombarHeight;
      }

      if (showToolbar) {
        h -= toolbarHeight;
      }

      return h;
    }
  }, {
    key: "viewWidth",
    value: function viewWidth() {
      return this.settings.view.width();
    }
  }, {
    key: "freezeViewRange",
    value: function freezeViewRange() {
      var _this$freeze2 = data_proxy_slicedToArray(this.freeze, 2),
          ri = _this$freeze2[0],
          ci = _this$freeze2[1];

      return new cell_range_CellRange(0, 0, ri - 1, ci - 1, this.freezeTotalWidth(), this.freezeTotalHeight());
    }
  }, {
    key: "contentRange",
    value: function contentRange() {
      var rows = this.rows,
          cols = this.cols;

      var _rows$maxCell = rows.maxCell(),
          _rows$maxCell2 = data_proxy_slicedToArray(_rows$maxCell, 2),
          ri = _rows$maxCell2[0],
          ci = _rows$maxCell2[1];

      var h = rows.sumHeight(0, ri + 1);
      var w = cols.sumWidth(0, ci + 1);
      return new cell_range_CellRange(0, 0, ri, ci, w, h);
    }
  }, {
    key: "exceptRowTotalHeight",
    value: function exceptRowTotalHeight(sri, eri) {
      var exceptRowSet = this.exceptRowSet,
          rows = this.rows;
      var exceptRows = Array.from(exceptRowSet);
      var exceptRowTH = 0;
      exceptRows.forEach(function (ri) {
        if (ri < sri || ri > eri) {
          var height = rows.getHeight(ri);
          exceptRowTH += height;
        }
      });
      return exceptRowTH;
    }
  }, {
    key: "viewRange",
    value: function viewRange() {
      var scroll = this.scroll,
          rows = this.rows,
          cols = this.cols,
          freeze = this.freeze,
          exceptRowSet = this.exceptRowSet; // console.log('scroll:', scroll, ', freeze:', freeze)

      var ri = scroll.ri,
          ci = scroll.ci;

      if (ri <= 0) {
        var _freeze3 = data_proxy_slicedToArray(freeze, 1);

        ri = _freeze3[0];
      }

      if (ci <= 0) {
        var _freeze4 = data_proxy_slicedToArray(freeze, 2);

        ci = _freeze4[1];
      }

      var x = 0,
          y = 0;
      var _ref2 = [rows.len, cols.len],
          eri = _ref2[0],
          eci = _ref2[1];

      for (var i = ri; i < rows.len; i += 1) {
        if (!exceptRowSet.has(i)) {
          y += rows.getHeight(i);
          eri = i;
        }

        if (y > this.viewHeight()) break;
      }

      for (var j = ci; j < cols.len; j += 1) {
        x += cols.getWidth(j);
        eci = j;
        if (x > this.viewWidth()) break;
      } // console.log(ri, ci, eri, eci, x, y);


      return new cell_range_CellRange(ri, ci, eri, eci, x, y);
    }
  }, {
    key: "eachMergesInView",
    value: function eachMergesInView(viewRange, cb) {
      this.merges.filterIntersects(viewRange).forEach(function (it) {
        return cb(it);
      });
    }
  }, {
    key: "hideRowsOrCols",
    value: function hideRowsOrCols() {
      var rows = this.rows,
          cols = this.cols,
          selector = this.selector;

      var _selector$size5 = selector.size(),
          _selector$size6 = data_proxy_slicedToArray(_selector$size5, 2),
          rlen = _selector$size6[0],
          clen = _selector$size6[1];

      var _selector$range6 = selector.range,
          sri = _selector$range6.sri,
          sci = _selector$range6.sci,
          eri = _selector$range6.eri,
          eci = _selector$range6.eci;

      if (rlen === rows.len) {
        for (var ci = sci; ci <= eci; ci += 1) {
          cols.setHide(ci, true);
        }
      } else if (clen === cols.len) {
        for (var ri = sri; ri <= eri; ri += 1) {
          rows.setHide(ri, true);
        }
      }
    } // type: row | col
    // index row-index | col-index

  }, {
    key: "unhideRowsOrCols",
    value: function unhideRowsOrCols(type, index) {
      this["".concat(type, "s")].unhide(index);
    }
  }, {
    key: "rowEach",
    value: function rowEach(min, max, cb) {
      var y = 0;
      var rows = this.rows;
      var frset = this.exceptRowSet;

      var frary = _toConsumableArray(frset);

      var offset = 0;

      for (var i = 0; i < frary.length; i += 1) {
        if (frary[i] < min) {
          offset += 1;
        }
      } // console.log('min:', min, ', max:', max, ', scroll:', scroll);


      for (var _i3 = min + offset; _i3 <= max + offset; _i3 += 1) {
        if (frset.has(_i3)) {
          offset += 1;
        } else {
          var rowHeight = rows.getHeight(_i3);

          if (rowHeight > 0) {
            cb(_i3, y, rowHeight);
            y += rowHeight;
            if (y > this.viewHeight()) break;
          }
        }
      }
    }
  }, {
    key: "colEach",
    value: function colEach(min, max, cb) {
      var x = 0;
      var cols = this.cols;

      for (var i = min; i <= max; i += 1) {
        var colWidth = cols.getWidth(i);

        if (colWidth > 0) {
          cb(i, x, colWidth);
          x += colWidth;
          if (x > this.viewWidth()) break;
        }
      }
    }
  }, {
    key: "defaultStyle",
    value: function defaultStyle() {
      return this.settings.style;
    }
  }, {
    key: "addStyle",
    value: function addStyle(nstyle) {
      var styles = this.styles; // console.log('old.styles:', styles, nstyle);

      for (var i = 0; i < styles.length; i += 1) {
        var style = styles[i];
        if (helper.equals(style, nstyle)) return i;
      }

      styles.push(nstyle);
      return styles.length - 1;
    }
  }, {
    key: "changeData",
    value: function changeData(cb) {
      this.history.add(this.getData());
      cb();
      this.change(this.getData());
    }
  }, {
    key: "setData",
    value: function setData(d) {
      var _this20 = this;

      Object.keys(d).forEach(function (property) {
        if (property === 'merges' || property === 'rows' || property === 'cols' || property === 'validations') {
          _this20[property].setData(d[property]);
        } else if (property === 'freeze') {
          var _expr2xy = expr2xy(d[property]),
              _expr2xy2 = data_proxy_slicedToArray(_expr2xy, 2),
              x = _expr2xy2[0],
              y = _expr2xy2[1];

          _this20.freeze = [y, x];
        } else if (property === 'autofilter') {
          _this20.autoFilter.setData(d[property]);
        } else if (d[property] !== undefined) {
          _this20[property] = d[property];
        }
      });
      return this;
    }
  }, {
    key: "getData",
    value: function getData() {
      var name = this.name,
          freeze = this.freeze,
          styles = this.styles,
          merges = this.merges,
          rows = this.rows,
          cols = this.cols,
          validations = this.validations,
          autoFilter = this.autoFilter;
      return {
        name: name,
        freeze: xy2expr(freeze[1], freeze[0]),
        styles: styles,
        merges: merges.getData(),
        rows: rows.getData(),
        cols: cols.getData(),
        validations: validations.getData(),
        autofilter: autoFilter.getData()
      };
    }
  }]);

  return DataProxy;
}();


// CONCATENATED MODULE: ./src/component/event.js
function event_toConsumableArray(arr) { return event_arrayWithoutHoles(arr) || event_iterableToArray(arr) || event_nonIterableSpread(); }

function event_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function event_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function event_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* global window */
function bind(target, name, fn) {
  target.addEventListener(name, fn);
}
function unbind(target, name, fn) {
  target.removeEventListener(name, fn);
}
function unbindClickoutside(el) {
  if (el.xclickoutside) {
    unbind(window.document.body, 'click', el.xclickoutside);
    delete el.xclickoutside;
  }
} // the left mouse button: mousedown → mouseup → click
// the right mouse button: mousedown → contenxtmenu → mouseup
// the right mouse button in firefox(>65.0): mousedown → contenxtmenu → mouseup → click on window

function bindClickoutside(el, cb) {
  el.xclickoutside = function (evt) {
    // ignore double click
    // console.log('evt:', evt);
    if (evt.detail === 2 || el.contains(evt.target)) return;
    if (cb) cb(el);else {
      el.hide();
      unbindClickoutside(el);
    }
  };

  bind(window.document.body, 'click', el.xclickoutside);
}
function mouseMoveUp(target, movefunc, upfunc) {
  bind(target, 'mousemove', movefunc);
  var t = target;

  t.xEvtUp = function (evt) {
    // console.log('mouseup>>>');
    unbind(target, 'mousemove', movefunc);
    unbind(target, 'mouseup', target.xEvtUp);
    upfunc(evt);
  };

  bind(target, 'mouseup', target.xEvtUp);
}

function calTouchDirection(spanx, spany, evt, cb) {
  var direction = ''; // console.log('spanx:', spanx, ', spany:', spany);

  if (Math.abs(spanx) > Math.abs(spany)) {
    // horizontal
    direction = spanx > 0 ? 'right' : 'left';
    cb(direction, spanx, evt);
  } else {
    // vertical
    direction = spany > 0 ? 'down' : 'up';
    cb(direction, spany, evt);
  }
} // cb = (direction, distance) => {}


function bindTouch(target, _ref) {
  var move = _ref.move,
      end = _ref.end;
  var startx = 0;
  var starty = 0;
  bind(target, 'touchstart', function (evt) {
    var _evt$touches$ = evt.touches[0],
        pageX = _evt$touches$.pageX,
        pageY = _evt$touches$.pageY;
    startx = pageX;
    starty = pageY;
  });
  bind(target, 'touchmove', function (evt) {
    if (!move) return;
    var _evt$changedTouches$ = evt.changedTouches[0],
        pageX = _evt$changedTouches$.pageX,
        pageY = _evt$changedTouches$.pageY;
    var spanx = pageX - startx;
    var spany = pageY - starty;

    if (Math.abs(spanx) > 10 || Math.abs(spany) > 10) {
      // console.log('spanx:', spanx, ', spany:', spany);
      calTouchDirection(spanx, spany, evt, move);
      startx = pageX;
      starty = pageY;
    }

    evt.preventDefault();
  });
  bind(target, 'touchend', function (evt) {
    if (!end) return;
    var _evt$changedTouches$2 = evt.changedTouches[0],
        pageX = _evt$changedTouches$2.pageX,
        pageY = _evt$changedTouches$2.pageY;
    var spanx = pageX - startx;
    var spany = pageY - starty;
    calTouchDirection(spanx, spany, evt, end);
  });
} // eventemiter

function createEventEmitter() {
  var listeners = new Map();

  function on(eventName, callback) {
    var push = function push() {
      var currentListener = listeners.get(eventName);
      return Array.isArray(currentListener) && currentListener.push(callback) || false;
    };

    var create = function create() {
      return listeners.set(eventName, [].concat(callback));
    };

    return listeners.has(eventName) && push() || create();
  }

  function fire(eventName, args) {
    var exec = function exec() {
      var currentListener = listeners.get(eventName);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = currentListener[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var callback = _step.value;
          callback.call.apply(callback, [null].concat(event_toConsumableArray(args)));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    return listeners.has(eventName) && exec();
  }

  function removeListener(eventName, callback) {
    var remove = function remove() {
      var currentListener = listeners.get(eventName);
      var idx = currentListener.indexOf(callback);
      return idx >= 0 && currentListener.splice(idx, 1) && listeners.get(eventName).length === 0 && listeners["delete"](eventName);
    };

    return listeners.has(eventName) && remove();
  }

  function once(eventName, callback) {
    var execCalllback = function execCalllback() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      callback.call.apply(callback, [null].concat(args));
      removeListener(eventName, execCalllback);
    };

    return on(eventName, execCalllback);
  }

  function removeAllListeners() {
    listeners.clear();
  }

  return {
    get current() {
      return listeners;
    },

    on: on,
    once: once,
    fire: fire,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners
  };
}
// CONCATENATED MODULE: ./src/config.js
/* global window */
var cssPrefix = 'x-spreadsheet';
var dpr = window.devicePixelRatio || 1;
/* harmony default export */ var config = ({
  cssPrefix: cssPrefix,
  dpr: dpr
});
// CONCATENATED MODULE: ./src/component/resizer.js
function resizer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function resizer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function resizer_createClass(Constructor, protoProps, staticProps) { if (protoProps) resizer_defineProperties(Constructor.prototype, protoProps); if (staticProps) resizer_defineProperties(Constructor, staticProps); return Constructor; }

/* global window */




var resizer_Resizer =
/*#__PURE__*/
function () {
  function Resizer() {
    var _this = this;

    var vertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var minDistance = arguments.length > 1 ? arguments[1] : undefined;

    resizer_classCallCheck(this, Resizer);

    this.moving = false;
    this.vertical = vertical;
    this.el = element_h('div', "".concat(cssPrefix, "-resizer ").concat(vertical ? 'vertical' : 'horizontal')).children(this.unhideHoverEl = element_h('div', "".concat(cssPrefix, "-resizer-hover")).on('dblclick.stop', function (evt) {
      return _this.mousedblclickHandler(evt);
    }).css('position', 'absolute').hide(), this.hoverEl = element_h('div', "".concat(cssPrefix, "-resizer-hover")).on('mousedown.stop', function (evt) {
      return _this.mousedownHandler(evt);
    }), this.lineEl = element_h('div', "".concat(cssPrefix, "-resizer-line")).hide()).hide(); // cell rect

    this.cRect = null;
    this.finishedFn = null;
    this.minDistance = minDistance;

    this.unhideFn = function () {};
  }

  resizer_createClass(Resizer, [{
    key: "showUnhide",
    value: function showUnhide(index) {
      this.unhideIndex = index;
      this.unhideHoverEl.show();
    }
  }, {
    key: "hideUnhide",
    value: function hideUnhide() {
      this.unhideHoverEl.hide();
    } // rect : {top, left, width, height}
    // line : {width, height}

  }, {
    key: "show",
    value: function show(rect, line) {
      var moving = this.moving,
          vertical = this.vertical,
          hoverEl = this.hoverEl,
          lineEl = this.lineEl,
          el = this.el,
          unhideHoverEl = this.unhideHoverEl;
      if (moving) return;
      this.cRect = rect;
      var left = rect.left,
          top = rect.top,
          width = rect.width,
          height = rect.height;
      el.offset({
        left: vertical ? left + width - 5 : left,
        top: vertical ? top : top + height - 5
      }).show();
      hoverEl.offset({
        width: vertical ? 5 : width,
        height: vertical ? height : 5
      });
      lineEl.offset({
        width: vertical ? 0 : line.width,
        height: vertical ? line.height : 0
      });
      unhideHoverEl.offset({
        left: vertical ? 5 - width : left,
        top: vertical ? top : 5 - height,
        width: vertical ? 5 : width,
        height: vertical ? height : 5
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.offset({
        left: 0,
        top: 0
      }).hide();
      this.hideUnhide();
    }
  }, {
    key: "mousedblclickHandler",
    value: function mousedblclickHandler() {
      if (this.unhideIndex) this.unhideFn(this.unhideIndex);
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler(evt) {
      var _this2 = this;

      var startEvt = evt;
      var el = this.el,
          lineEl = this.lineEl,
          cRect = this.cRect,
          vertical = this.vertical,
          minDistance = this.minDistance;
      var distance = vertical ? cRect.width : cRect.height; // console.log('distance:', distance);

      lineEl.show();
      mouseMoveUp(window, function (e) {
        _this2.moving = true;

        if (startEvt !== null && e.buttons === 1) {
          // console.log('top:', top, ', left:', top, ', cRect:', cRect);
          if (vertical) {
            distance += e.movementX;

            if (distance > minDistance) {
              el.css('left', "".concat(cRect.left + distance, "px"));
            }
          } else {
            distance += e.movementY;

            if (distance > minDistance) {
              el.css('top', "".concat(cRect.top + distance, "px"));
            }
          }

          startEvt = e;
        }
      }, function () {
        startEvt = null;
        lineEl.hide();
        _this2.moving = false;

        _this2.hide();

        if (_this2.finishedFn) {
          if (distance < minDistance) distance = minDistance;

          _this2.finishedFn(cRect, distance);
        }
      });
    }
  }]);

  return Resizer;
}();


// CONCATENATED MODULE: ./src/component/scrollbar.js
function scrollbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function scrollbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function scrollbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) scrollbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) scrollbar_defineProperties(Constructor, staticProps); return Constructor; }




var scrollbar_Scrollbar =
/*#__PURE__*/
function () {
  function Scrollbar(vertical) {
    var _this = this;

    scrollbar_classCallCheck(this, Scrollbar);

    this.vertical = vertical;
    this.moveFn = null;
    this.el = element_h('div', "".concat(cssPrefix, "-scrollbar ").concat(vertical ? 'vertical' : 'horizontal')).child(this.contentEl = element_h('div', '')).on('mousemove.stop', function () {}).on('scroll.stop', function (evt) {
      var _evt$target = evt.target,
          scrollTop = _evt$target.scrollTop,
          scrollLeft = _evt$target.scrollLeft; // console.log('scrollTop:', scrollTop);

      if (_this.moveFn) {
        _this.moveFn(_this.vertical ? scrollTop : scrollLeft, evt);
      } // console.log('evt:::', evt);

    });
  }

  scrollbar_createClass(Scrollbar, [{
    key: "move",
    value: function move(v) {
      this.el.scroll(v);
      return this;
    }
  }, {
    key: "scroll",
    value: function scroll() {
      return this.el.scroll();
    }
  }, {
    key: "set",
    value: function set(distance, contentDistance) {
      var d = distance - 1; // console.log('distance:', distance, ', contentDistance:', contentDistance);

      if (contentDistance > d) {
        var cssKey = this.vertical ? 'height' : 'width'; // console.log('d:', d);

        this.el.css(cssKey, "".concat(d - 15, "px")).show();
        this.contentEl.css(this.vertical ? 'width' : 'height', '1px').css(cssKey, "".concat(contentDistance, "px"));
      } else {
        this.el.hide();
      }

      return this;
    }
  }]);

  return Scrollbar;
}();


// CONCATENATED MODULE: ./src/component/selector.js
function component_selector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function component_selector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function component_selector_createClass(Constructor, protoProps, staticProps) { if (protoProps) component_selector_defineProperties(Constructor.prototype, protoProps); if (staticProps) component_selector_defineProperties(Constructor, staticProps); return Constructor; }




var selectorHeightBorderWidth = 2 * 2 - 1;
var startZIndex = 10;

var selector_SelectorElement =
/*#__PURE__*/
function () {
  function SelectorElement() {
    var _this = this;

    var useHideInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var autoFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    component_selector_classCallCheck(this, SelectorElement);

    this.useHideInput = useHideInput;
    this.autoFocus = autoFocus;

    this.inputChange = function () {};

    this.cornerEl = element_h('div', "".concat(cssPrefix, "-selector-corner"));
    this.areaEl = element_h('div', "".concat(cssPrefix, "-selector-area")).child(this.cornerEl).hide();
    this.clipboardEl = element_h('div', "".concat(cssPrefix, "-selector-clipboard")).hide();
    this.autofillEl = element_h('div', "".concat(cssPrefix, "-selector-autofill")).hide();
    this.el = element_h('div', "".concat(cssPrefix, "-selector")).css('z-index', "".concat(startZIndex)).children(this.areaEl, this.clipboardEl, this.autofillEl).hide();

    if (useHideInput) {
      this.hideInput = element_h('input', '').on('compositionend', function (evt) {
        _this.inputChange(evt.target.value);
      });
      this.el.child(this.hideInputDiv = element_h('div', 'hide-input').child(this.hideInput));
      this.el.child(this.hideInputDiv = element_h('div', 'hide-input').child(this.hideInput));
    }

    startZIndex += 1;
  }

  component_selector_createClass(SelectorElement, [{
    key: "setOffset",
    value: function setOffset(v) {
      this.el.offset(v).show();
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.hide();
      return this;
    }
  }, {
    key: "setAreaOffset",
    value: function setAreaOffset(v) {
      var left = v.left,
          top = v.top,
          width = v.width,
          height = v.height;
      var of = {
        width: width - selectorHeightBorderWidth + 0.8,
        height: height - selectorHeightBorderWidth + 0.8,
        left: left - 0.8,
        top: top - 0.8
      };
      this.areaEl.offset(of).show();

      if (this.useHideInput) {
        this.hideInputDiv.offset(of);

        if (this.autoFocus) {
          this.hideInput.val('').focus();
        } else {
          this.hideInput.val('');
        }
      }
    }
  }, {
    key: "setClipboardOffset",
    value: function setClipboardOffset(v) {
      var left = v.left,
          top = v.top,
          width = v.width,
          height = v.height;
      this.clipboardEl.offset({
        left: left,
        top: top,
        width: width - 5,
        height: height - 5
      });
    }
  }, {
    key: "showAutofill",
    value: function showAutofill(v) {
      var left = v.left,
          top = v.top,
          width = v.width,
          height = v.height;
      this.autofillEl.offset({
        width: width - selectorHeightBorderWidth,
        height: height - selectorHeightBorderWidth,
        left: left,
        top: top
      }).show();
    }
  }, {
    key: "hideAutofill",
    value: function hideAutofill() {
      this.autofillEl.hide();
    }
  }, {
    key: "showClipboard",
    value: function showClipboard() {
      this.clipboardEl.show();
    }
  }, {
    key: "hideClipboard",
    value: function hideClipboard() {
      this.clipboardEl.hide();
    }
  }]);

  return SelectorElement;
}();

function calBRAreaOffset(offset) {
  var data = this.data;
  var left = offset.left,
      top = offset.top,
      width = offset.width,
      height = offset.height,
      scroll = offset.scroll,
      l = offset.l,
      t = offset.t;
  var ftwidth = data.freezeTotalWidth();
  var ftheight = data.freezeTotalHeight();
  var left0 = left - ftwidth;
  if (ftwidth > l) left0 -= scroll.x;
  var top0 = top - ftheight;
  if (ftheight > t) top0 -= scroll.y;
  return {
    left: left0,
    top: top0,
    width: width,
    height: height
  };
}

function calTAreaOffset(offset) {
  var data = this.data;
  var left = offset.left,
      width = offset.width,
      height = offset.height,
      l = offset.l,
      t = offset.t,
      scroll = offset.scroll;
  var ftwidth = data.freezeTotalWidth();
  var left0 = left - ftwidth;
  if (ftwidth > l) left0 -= scroll.x;
  return {
    left: left0,
    top: t,
    width: width,
    height: height
  };
}

function calLAreaOffset(offset) {
  var data = this.data;
  var top = offset.top,
      width = offset.width,
      height = offset.height,
      l = offset.l,
      t = offset.t,
      scroll = offset.scroll;
  var ftheight = data.freezeTotalHeight();
  var top0 = top - ftheight; // console.log('ftheight:', ftheight, ', t:', t);

  if (ftheight > t) top0 -= scroll.y;
  return {
    left: l,
    top: top0,
    width: width,
    height: height
  };
}

function setBRAreaOffset(offset) {
  var br = this.br;
  br.setAreaOffset(calBRAreaOffset.call(this, offset));
}

function setTLAreaOffset(offset) {
  var tl = this.tl;
  tl.setAreaOffset(offset);
}

function setTAreaOffset(offset) {
  var t = this.t;
  t.setAreaOffset(calTAreaOffset.call(this, offset));
}

function setLAreaOffset(offset) {
  var l = this.l;
  l.setAreaOffset(calLAreaOffset.call(this, offset));
}

function setLClipboardOffset(offset) {
  var l = this.l;
  l.setClipboardOffset(calLAreaOffset.call(this, offset));
}

function setBRClipboardOffset(offset) {
  var br = this.br;
  br.setClipboardOffset(calBRAreaOffset.call(this, offset));
}

function setTLClipboardOffset(offset) {
  var tl = this.tl;
  tl.setClipboardOffset(offset);
}

function setTClipboardOffset(offset) {
  var t = this.t;
  t.setClipboardOffset(calTAreaOffset.call(this, offset));
}

function setAllAreaOffset(offset) {
  setBRAreaOffset.call(this, offset);
  setTLAreaOffset.call(this, offset);
  setTAreaOffset.call(this, offset);
  setLAreaOffset.call(this, offset);
}

function setAllClipboardOffset(offset) {
  setBRClipboardOffset.call(this, offset);
  setTLClipboardOffset.call(this, offset);
  setTClipboardOffset.call(this, offset);
  setLClipboardOffset.call(this, offset);
}

var component_selector_Selector =
/*#__PURE__*/
function () {
  function Selector(data) {
    var _this2 = this;

    component_selector_classCallCheck(this, Selector);

    var autoFocus = data.settings.autoFocus;

    this.inputChange = function () {};

    this.data = data;
    this.br = new selector_SelectorElement(true, autoFocus);
    this.t = new selector_SelectorElement();
    this.l = new selector_SelectorElement();
    this.tl = new selector_SelectorElement();

    this.br.inputChange = function (v) {
      _this2.inputChange(v);
    };

    this.br.el.show();
    this.offset = null;
    this.areaOffset = null;
    this.indexes = null;
    this.range = null;
    this.arange = null;
    this.el = element_h('div', "".concat(cssPrefix, "-selectors")).children(this.tl.el, this.t.el, this.l.el, this.br.el).hide(); // for performance

    this.lastri = -1;
    this.lastci = -1;
    startZIndex += 1;
  }

  component_selector_createClass(Selector, [{
    key: "resetData",
    value: function resetData(data) {
      this.data = data;
      this.range = data.selector.range;
      this.resetAreaOffset();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.hide();
    }
  }, {
    key: "resetOffset",
    value: function resetOffset() {
      var data = this.data,
          tl = this.tl,
          t = this.t,
          l = this.l,
          br = this.br;
      var freezeHeight = data.freezeTotalHeight();
      var freezeWidth = data.freezeTotalWidth();

      if (freezeHeight > 0 || freezeWidth > 0) {
        tl.setOffset({
          width: freezeWidth,
          height: freezeHeight
        });
        t.setOffset({
          left: freezeWidth,
          height: freezeHeight
        });
        l.setOffset({
          top: freezeHeight,
          width: freezeWidth
        });
        br.setOffset({
          left: freezeWidth,
          top: freezeHeight
        });
      } else {
        tl.hide();
        t.hide();
        l.hide();
        br.setOffset({
          left: 0,
          top: 0
        });
      }
    }
  }, {
    key: "resetAreaOffset",
    value: function resetAreaOffset() {
      // console.log('offset:', offset);
      var offset = this.data.getSelectedRect();
      var coffset = this.data.getClipboardRect();
      setAllAreaOffset.call(this, offset);
      setAllClipboardOffset.call(this, coffset);
      this.resetOffset();
    }
  }, {
    key: "resetBRTAreaOffset",
    value: function resetBRTAreaOffset() {
      var offset = this.data.getSelectedRect();
      var coffset = this.data.getClipboardRect();
      setBRAreaOffset.call(this, offset);
      setTAreaOffset.call(this, offset);
      setBRClipboardOffset.call(this, coffset);
      setTClipboardOffset.call(this, coffset);
      this.resetOffset();
    }
  }, {
    key: "resetBRLAreaOffset",
    value: function resetBRLAreaOffset() {
      var offset = this.data.getSelectedRect();
      var coffset = this.data.getClipboardRect();
      setBRAreaOffset.call(this, offset);
      setLAreaOffset.call(this, offset);
      setBRClipboardOffset.call(this, coffset);
      setLClipboardOffset.call(this, coffset);
      this.resetOffset();
    }
  }, {
    key: "set",
    value: function set(ri, ci) {
      var indexesUpdated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var data = this.data;
      var cellRange = data.calSelectedRangeByStart(ri, ci);
      var sri = cellRange.sri,
          sci = cellRange.sci;

      if (indexesUpdated) {
        var cri = ri,
            cci = ci;
        if (ri < 0) cri = 0;
        if (ci < 0) cci = 0;
        data.selector.setIndexes(cri, cci);
        this.indexes = [cri, cci];
      }

      this.moveIndexes = [sri, sci]; // this.sIndexes = sIndexes;
      // this.eIndexes = eIndexes;

      this.range = cellRange;
      this.resetAreaOffset();
      this.el.show();
    }
  }, {
    key: "setEnd",
    value: function setEnd(ri, ci) {
      var moving = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var data = this.data,
          lastri = this.lastri,
          lastci = this.lastci;

      if (moving) {
        if (ri === lastri && ci === lastci) return;
        this.lastri = ri;
        this.lastci = ci;
      }

      this.range = data.calSelectedRangeByEnd(ri, ci);
      setAllAreaOffset.call(this, this.data.getSelectedRect());
    }
  }, {
    key: "reset",
    value: function reset() {
      // console.log('::::', this.data);
      var _this$data$selector$r = this.data.selector.range,
          eri = _this$data$selector$r.eri,
          eci = _this$data$selector$r.eci;
      this.setEnd(eri, eci);
    }
  }, {
    key: "showAutofill",
    value: function showAutofill(ri, ci) {
      if (ri === -1 && ci === -1) return; // console.log('ri:', ri, ', ci:', ci);
      // const [sri, sci] = this.sIndexes;
      // const [eri, eci] = this.eIndexes;

      var _this$range = this.range,
          sri = _this$range.sri,
          sci = _this$range.sci,
          eri = _this$range.eri,
          eci = _this$range.eci;
      var nri = ri,
          nci = ci; // const rn = eri - sri;
      // const cn = eci - sci;

      var srn = sri - ri;
      var scn = sci - ci;
      var ern = eri - ri;
      var ecn = eci - ci;

      if (scn > 0) {
        // left
        // console.log('left');
        this.arange = new cell_range_CellRange(sri, nci, eri, sci - 1); // this.saIndexes = [sri, nci];
        // this.eaIndexes = [eri, sci - 1];
        // data.calRangeIndexes2(
      } else if (srn > 0) {
        // top
        // console.log('top');
        // nri = sri;
        this.arange = new cell_range_CellRange(nri, sci, sri - 1, eci); // this.saIndexes = [nri, sci];
        // this.eaIndexes = [sri - 1, eci];
      } else if (ecn < 0) {
        // right
        // console.log('right');
        // nci = eci;
        this.arange = new cell_range_CellRange(sri, eci + 1, eri, nci); // this.saIndexes = [sri, eci + 1];
        // this.eaIndexes = [eri, nci];
      } else if (ern < 0) {
        // bottom
        // console.log('bottom');
        // nri = eri;
        this.arange = new cell_range_CellRange(eri + 1, sci, nri, eci); // this.saIndexes = [eri + 1, sci];
        // this.eaIndexes = [nri, eci];
      } else {
        // console.log('else:');
        this.arange = null; // this.saIndexes = null;
        // this.eaIndexes = null;

        return;
      }

      if (this.arange !== null) {
        // console.log(this.saIndexes, ':', this.eaIndexes);
        var offset = this.data.getRect(this.arange);
        offset.width += 2;
        offset.height += 2;
        var br = this.br,
            l = this.l,
            t = this.t,
            tl = this.tl;
        br.showAutofill(calBRAreaOffset.call(this, offset));
        l.showAutofill(calLAreaOffset.call(this, offset));
        t.showAutofill(calTAreaOffset.call(this, offset));
        tl.showAutofill(offset);
      }
    }
  }, {
    key: "hideAutofill",
    value: function hideAutofill() {
      var _this3 = this;

      ['br', 'l', 't', 'tl'].forEach(function (property) {
        _this3[property].hideAutofill();
      });
    }
  }, {
    key: "showClipboard",
    value: function showClipboard() {
      var _this4 = this;

      var coffset = this.data.getClipboardRect();
      setAllClipboardOffset.call(this, coffset);
      ['br', 'l', 't', 'tl'].forEach(function (property) {
        _this4[property].showClipboard();
      });
    }
  }, {
    key: "hideClipboard",
    value: function hideClipboard() {
      var _this5 = this;

      ['br', 'l', 't', 'tl'].forEach(function (property) {
        _this5[property].hideClipboard();
      });
    }
  }]);

  return Selector;
}();


// CONCATENATED MODULE: ./src/component/suggest.js
function suggest_toConsumableArray(arr) { return suggest_arrayWithoutHoles(arr) || suggest_iterableToArray(arr) || suggest_nonIterableSpread(); }

function suggest_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function suggest_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function suggest_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function suggest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function suggest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function suggest_createClass(Constructor, protoProps, staticProps) { if (protoProps) suggest_defineProperties(Constructor.prototype, protoProps); if (staticProps) suggest_defineProperties(Constructor, staticProps); return Constructor; }





function inputMovePrev(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  var filterItems = this.filterItems;
  if (filterItems.length <= 0) return;
  if (this.itemIndex >= 0) filterItems[this.itemIndex].toggle();
  this.itemIndex -= 1;

  if (this.itemIndex < 0) {
    this.itemIndex = filterItems.length - 1;
  }

  filterItems[this.itemIndex].toggle();
}

function inputMoveNext(evt) {
  evt.stopPropagation();
  var filterItems = this.filterItems;
  if (filterItems.length <= 0) return;
  if (this.itemIndex >= 0) filterItems[this.itemIndex].toggle();
  this.itemIndex += 1;

  if (this.itemIndex > filterItems.length - 1) {
    this.itemIndex = 0;
  }

  filterItems[this.itemIndex].toggle();
}

function inputEnter(evt) {
  evt.preventDefault();
  var filterItems = this.filterItems;
  if (filterItems.length <= 0) return;
  evt.stopPropagation();
  if (this.itemIndex < 0) this.itemIndex = 0;
  filterItems[this.itemIndex].el.click();
  this.hide();
}

function inputKeydownHandler(evt) {
  var keyCode = evt.keyCode;

  if (evt.ctrlKey) {
    evt.stopPropagation();
  }

  switch (keyCode) {
    case 37:
      // left
      evt.stopPropagation();
      break;

    case 38:
      // up
      inputMovePrev.call(this, evt);
      break;

    case 39:
      // right
      evt.stopPropagation();
      break;

    case 40:
      // down
      inputMoveNext.call(this, evt);
      break;

    case 13:
      // enter
      inputEnter.call(this, evt);
      break;

    case 9:
      inputEnter.call(this, evt);
      break;

    default:
      evt.stopPropagation();
      break;
  }
}

var suggest_Suggest =
/*#__PURE__*/
function () {
  function Suggest(items, itemClick) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '200px';

    suggest_classCallCheck(this, Suggest);

    this.filterItems = [];
    this.items = items;
    this.el = element_h('div', "".concat(cssPrefix, "-suggest")).css('width', width).hide();
    this.itemClick = itemClick;
    this.itemIndex = -1;
  }

  suggest_createClass(Suggest, [{
    key: "setOffset",
    value: function setOffset(v) {
      this.el.cssRemoveKeys('top', 'bottom').offset(v);
    }
  }, {
    key: "hide",
    value: function hide() {
      var el = this.el;
      this.filterItems = [];
      this.itemIndex = -1;
      el.hide();
      unbindClickoutside(this.el.parent());
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      this.items = items; // this.search('');
    }
  }, {
    key: "search",
    value: function search(word) {
      var _this = this,
          _el$html;

      var items = this.items;

      if (!/^\s*$/.test(word)) {
        items = items.filter(function (it) {
          return (it.key || it).startsWith(word.toUpperCase());
        });
      }

      items = items.map(function (it) {
        var title = it.title;

        if (title) {
          if (typeof title === 'function') {
            title = title();
          }
        } else {
          title = it;
        }

        var item = element_h('div', "".concat(cssPrefix, "-item")).child(title).on('click.stop', function () {
          _this.itemClick(it);

          _this.hide();
        });

        if (it.label) {
          item.child(element_h('div', 'label').html(it.label));
        }

        return item;
      });
      this.filterItems = items;

      if (items.length <= 0) {
        return;
      }

      var el = this.el; // items[0].toggle();

      (_el$html = el.html('')).children.apply(_el$html, suggest_toConsumableArray(items)).show();

      bindClickoutside(el.parent(), function () {
        _this.hide();
      });
    }
  }, {
    key: "bindInputEvents",
    value: function bindInputEvents(input) {
      var _this2 = this;

      input.on('keydown', function (evt) {
        return inputKeydownHandler.call(_this2, evt);
      });
    }
  }]);

  return Suggest;
}();


// CONCATENATED MODULE: ./src/component/icon.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function icon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function icon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function icon_createClass(Constructor, protoProps, staticProps) { if (protoProps) icon_defineProperties(Constructor.prototype, protoProps); if (staticProps) icon_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var icon_Icon =
/*#__PURE__*/
function (_Element) {
  _inherits(Icon, _Element);

  function Icon(name) {
    var _this;

    icon_classCallCheck(this, Icon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icon).call(this, 'div', "".concat(cssPrefix, "-icon")));
    _this.iconNameEl = element_h('div', "".concat(cssPrefix, "-icon-img ").concat(name));

    _this.child(_this.iconNameEl);

    return _this;
  }

  icon_createClass(Icon, [{
    key: "setName",
    value: function setName(name) {
      this.iconNameEl.className("".concat(cssPrefix, "-icon-img ").concat(name));
    }
  }]);

  return Icon;
}(Element);


// CONCATENATED MODULE: ./src/component/calendar.js
function calendar_toConsumableArray(arr) { return calendar_arrayWithoutHoles(arr) || calendar_iterableToArray(arr) || calendar_nonIterableSpread(); }

function calendar_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function calendar_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function calendar_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function calendar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function calendar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function calendar_createClass(Constructor, protoProps, staticProps) { if (protoProps) calendar_defineProperties(Constructor.prototype, protoProps); if (staticProps) calendar_defineProperties(Constructor, staticProps); return Constructor; }





function addMonth(date, step) {
  date.setMonth(date.getMonth() + step);
}

function weekday(date, index) {
  var d = new Date(date);
  d.setDate(index - date.getDay() + 1);
  return d;
}

function monthDays(year, month, cdate) {
  // the first day of month
  var startDate = new Date(year, month, 1, 23, 59, 59);
  var datess = [[], [], [], [], [], []];

  for (var i = 0; i < 6; i += 1) {
    for (var j = 0; j < 7; j += 1) {
      var index = i * 7 + j;
      var d = weekday(startDate, index);
      var disabled = d.getMonth() !== month; // console.log('d:', d, ', cdate:', cdate);

      var active = d.getMonth() === cdate.getMonth() && d.getDate() === cdate.getDate();
      datess[i][j] = {
        d: d,
        disabled: disabled,
        active: active
      };
    }
  }

  return datess;
}

var calendar_Calendar =
/*#__PURE__*/
function () {
  function Calendar(value) {
    var _this = this,
        _h;

    calendar_classCallCheck(this, Calendar);

    this.value = value;
    this.cvalue = new Date(value);
    this.headerLeftEl = element_h('div', 'calendar-header-left');
    this.bodyEl = element_h('tbody', '');
    this.buildAll();
    this.el = element_h('div', 'x-spreadsheet-calendar').children(element_h('div', 'calendar-header').children(this.headerLeftEl, element_h('div', 'calendar-header-right').children(element_h('a', 'calendar-prev').on('click.stop', function () {
      return _this.prev();
    }).child(new icon_Icon('chevron-left')), element_h('a', 'calendar-next').on('click.stop', function () {
      return _this.next();
    }).child(new icon_Icon('chevron-right')))), element_h('table', 'calendar-body').children(element_h('thead', '').child((_h = element_h('tr', '')).children.apply(_h, calendar_toConsumableArray(locale_t('calendar.weeks').map(function (week) {
      return element_h('th', 'cell').child(week);
    })))), this.bodyEl));

    this.selectChange = function () {};
  }

  calendar_createClass(Calendar, [{
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      this.cvalue = new Date(value);
      this.buildAll();
    }
  }, {
    key: "prev",
    value: function prev() {
      var value = this.value;
      addMonth(value, -1);
      this.buildAll();
    }
  }, {
    key: "next",
    value: function next() {
      var value = this.value;
      addMonth(value, 1);
      this.buildAll();
    }
  }, {
    key: "buildAll",
    value: function buildAll() {
      this.buildHeaderLeft();
      this.buildBody();
    }
  }, {
    key: "buildHeaderLeft",
    value: function buildHeaderLeft() {
      var value = this.value;
      this.headerLeftEl.html("".concat(locale_t('calendar.months')[value.getMonth()], " ").concat(value.getFullYear()));
    }
  }, {
    key: "buildBody",
    value: function buildBody() {
      var _this2 = this,
          _bodyEl$html;

      var value = this.value,
          cvalue = this.cvalue,
          bodyEl = this.bodyEl;
      var mDays = monthDays(value.getFullYear(), value.getMonth(), cvalue);
      var trs = mDays.map(function (it) {
        var _h2;

        var tds = it.map(function (it1) {
          var cls = 'cell';
          if (it1.disabled) cls += ' disabled';
          if (it1.active) cls += ' active';
          return element_h('td', '').child(element_h('div', cls).on('click.stop', function () {
            _this2.selectChange(it1.d);
          }).child(it1.d.getDate().toString()));
        });
        return (_h2 = element_h('tr', '')).children.apply(_h2, calendar_toConsumableArray(tds));
      });

      (_bodyEl$html = bodyEl.html('')).children.apply(_bodyEl$html, calendar_toConsumableArray(trs));
    }
  }]);

  return Calendar;
}();


// CONCATENATED MODULE: ./src/component/datepicker.js
function datepicker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function datepicker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function datepicker_createClass(Constructor, protoProps, staticProps) { if (protoProps) datepicker_defineProperties(Constructor.prototype, protoProps); if (staticProps) datepicker_defineProperties(Constructor, staticProps); return Constructor; }





var datepicker_Datepicker =
/*#__PURE__*/
function () {
  function Datepicker() {
    datepicker_classCallCheck(this, Datepicker);

    this.calendar = new calendar_Calendar(new Date());
    this.el = element_h('div', "".concat(cssPrefix, "-datepicker")).child(this.calendar.el).hide();
  }

  datepicker_createClass(Datepicker, [{
    key: "setValue",
    value: function setValue(date) {
      // console.log(':::::::', date, typeof date, date instanceof string);
      var calendar = this.calendar;

      if (typeof date === 'string') {
        // console.log(/^\d{4}-\d{1,2}-\d{1,2}$/.test(date));
        if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(date)) {
          calendar.setValue(new Date(date.replace(new RegExp('-', 'g'), '/')));
        }
      } else if (date instanceof Date) {
        calendar.setValue(date);
      }

      return this;
    }
  }, {
    key: "change",
    value: function change(cb) {
      var _this = this;

      this.calendar.selectChange = function (d) {
        cb(d);

        _this.hide();
      };
    }
  }, {
    key: "show",
    value: function show() {
      this.el.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.hide();
    }
  }]);

  return Datepicker;
}();


// CONCATENATED MODULE: ./src/component/editor.js
function editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) editor_defineProperties(Constructor, staticProps); return Constructor; }

function editor_toConsumableArray(arr) { return editor_arrayWithoutHoles(arr) || editor_iterableToArray(arr) || editor_nonIterableSpread(); }

function editor_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function editor_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function editor_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//* global window */



 // import { mouseMoveUp } from '../event';

function resetTextareaSize() {
  var inputText = this.inputText;

  if (!/^\s*$/.test(inputText)) {
    var textlineEl = this.textlineEl,
        textEl = this.textEl,
        areaOffset = this.areaOffset;
    var txts = inputText.split('\n');
    var maxTxtSize = Math.max.apply(Math, editor_toConsumableArray(txts.map(function (it) {
      return it.length;
    })));
    var tlOffset = textlineEl.offset();
    var fontWidth = tlOffset.width / inputText.length;
    var tlineWidth = (maxTxtSize + 1) * fontWidth + 5;
    var maxWidth = this.viewFn().width - areaOffset.left - fontWidth;
    var h1 = txts.length;

    if (tlineWidth > areaOffset.width) {
      var twidth = tlineWidth;

      if (tlineWidth > maxWidth) {
        twidth = maxWidth;
        h1 += parseInt(tlineWidth / maxWidth, 10);
        h1 += tlineWidth % maxWidth > 0 ? 1 : 0;
      }

      textEl.css('width', "".concat(twidth, "px"));
    }

    h1 *= this.rowHeight;

    if (h1 > areaOffset.height) {
      textEl.css('height', "".concat(h1, "px"));
    }
  }
}

function insertText(_ref, itxt) {
  var target = _ref.target;
  var value = target.value,
      selectionEnd = target.selectionEnd;
  var ntxt = "".concat(value.slice(0, selectionEnd)).concat(itxt).concat(value.slice(selectionEnd));
  target.value = ntxt;
  target.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
  this.inputText = ntxt;
  this.textlineEl.html(ntxt);
  resetTextareaSize.call(this);
}

function keydownEventHandler(evt) {
  var keyCode = evt.keyCode,
      altKey = evt.altKey;
  if (keyCode !== 13 && keyCode !== 9) evt.stopPropagation();

  if (keyCode === 13 && altKey) {
    insertText.call(this, evt, '\n');
    evt.stopPropagation();
  }

  if (keyCode === 13 && !altKey) evt.preventDefault();
}

function inputEventHandler(evt) {
  var v = evt.target.value; // console.log(evt, 'v:', v);

  var suggest = this.suggest,
      textlineEl = this.textlineEl,
      validator = this.validator;
  var cell = this.cell;

  if (cell !== null) {
    if ('editable' in cell && cell.editable === true || cell.editable === undefined) {
      this.inputText = v;

      if (validator) {
        if (validator.type === 'list') {
          suggest.search(v);
        } else {
          suggest.hide();
        }
      } else {
        var start = v.lastIndexOf('=');

        if (start !== -1) {
          suggest.search(v.substring(start + 1));
        } else {
          suggest.hide();
        }
      }

      textlineEl.html(v);
      resetTextareaSize.call(this);
      this.change('input', v);
    } else {
      evt.target.value = cell.text || '';
    }
  } else {
    this.inputText = v;

    if (validator) {
      if (validator.type === 'list') {
        suggest.search(v);
      } else {
        suggest.hide();
      }
    } else {
      var _start = v.lastIndexOf('=');

      if (_start !== -1) {
        suggest.search(v.substring(_start + 1));
      } else {
        suggest.hide();
      }
    }

    textlineEl.html(v);
    resetTextareaSize.call(this);
    this.change('input', v);
  }
}

function setTextareaRange(position) {
  var el = this.textEl.el;
  setTimeout(function () {
    el.focus();
    el.setSelectionRange(position, position);
  }, 0);
}

function _setText(text, position) {
  var textEl = this.textEl,
      textlineEl = this.textlineEl; // firefox bug

  textEl.el.blur();
  textEl.val(text);
  textlineEl.html(text);
  setTextareaRange.call(this, position);
}

function suggestItemClick(it) {
  var inputText = this.inputText,
      validator = this.validator;
  var position = 0;

  if (validator && validator.type === 'list') {
    this.inputText = it;
    position = this.inputText.length;
  } else {
    var start = inputText.lastIndexOf('=');
    var sit = inputText.substring(0, start + 1);
    var eit = inputText.substring(start + 1);

    if (eit.indexOf(')') !== -1) {
      eit = eit.substring(eit.indexOf(')'));
    } else {
      eit = '';
    }

    this.inputText = "".concat(sit + it.key, "("); // console.log('inputText:', this.inputText);

    position = this.inputText.length;
    this.inputText += ")".concat(eit);
  }

  _setText.call(this, this.inputText, position);
}

function resetSuggestItems() {
  this.suggest.setItems(this.formulas);
}

function dateFormat(d) {
  var month = d.getMonth() + 1;
  var date = d.getDate();
  if (month < 10) month = "0".concat(month);
  if (date < 10) date = "0".concat(date);
  return "".concat(d.getFullYear(), "-").concat(month, "-").concat(date);
}

var editor_Editor =
/*#__PURE__*/
function () {
  function Editor(formulas, viewFn, rowHeight) {
    var _this = this;

    editor_classCallCheck(this, Editor);

    this.viewFn = viewFn;
    this.rowHeight = rowHeight;
    this.formulas = formulas;
    this.suggest = new suggest_Suggest(formulas, function (it) {
      suggestItemClick.call(_this, it);
    });
    this.datepicker = new datepicker_Datepicker();
    this.datepicker.change(function (d) {
      // console.log('d:', d);
      _this.setText(dateFormat(d));

      _this.clear();
    });
    this.areaEl = element_h('div', "".concat(cssPrefix, "-editor-area")).children(this.textEl = element_h('textarea', '').on('input', function (evt) {
      return inputEventHandler.call(_this, evt);
    }).on('paste.stop', function () {}).on('keydown', function (evt) {
      return keydownEventHandler.call(_this, evt);
    }), this.textlineEl = element_h('div', 'textline'), this.suggest.el, this.datepicker.el).on('mousemove.stop', function () {}).on('mousedown.stop', function () {});
    this.el = element_h('div', "".concat(cssPrefix, "-editor")).child(this.areaEl).hide();
    this.suggest.bindInputEvents(this.textEl);
    this.areaOffset = null;
    this.freeze = {
      w: 0,
      h: 0
    };
    this.cell = null;
    this.inputText = '';

    this.change = function () {};
  }

  editor_createClass(Editor, [{
    key: "setFreezeLengths",
    value: function setFreezeLengths(width, height) {
      this.freeze.w = width;
      this.freeze.h = height;
    }
  }, {
    key: "clear",
    value: function clear() {
      // const { cell } = this;
      // const cellText = (cell && cell.text) || '';
      if (this.inputText !== '') {
        this.change('finished', this.inputText);
      }

      this.cell = null;
      this.areaOffset = null;
      this.inputText = '';
      this.el.hide();
      this.textEl.val('');
      this.textlineEl.html('');
      resetSuggestItems.call(this);
      this.datepicker.hide();
    }
  }, {
    key: "setOffset",
    value: function setOffset(offset) {
      var suggestPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
      var textEl = this.textEl,
          areaEl = this.areaEl,
          suggest = this.suggest,
          freeze = this.freeze,
          el = this.el;

      if (offset) {
        this.areaOffset = offset;
        var left = offset.left,
            top = offset.top,
            width = offset.width,
            height = offset.height,
            l = offset.l,
            t = offset.t; // console.log('left:', left, ',top:', top, ', freeze:', freeze);

        var elOffset = {
          left: 0,
          top: 0
        }; // top left

        if (freeze.w > l && freeze.h > t) {//
        } else if (freeze.w < l && freeze.h < t) {
          elOffset.left = freeze.w;
          elOffset.top = freeze.h;
        } else if (freeze.w > l) {
          elOffset.top = freeze.h;
        } else if (freeze.h > t) {
          elOffset.left = freeze.w;
        }

        el.offset(elOffset);
        areaEl.offset({
          left: left - elOffset.left - 0.8,
          top: top - elOffset.top - 0.8
        });
        textEl.offset({
          width: width - 9 + 0.8,
          height: height - 3 + 0.8
        });
        var sOffset = {
          left: 0
        };
        sOffset[suggestPosition] = height;
        suggest.setOffset(sOffset);
        suggest.hide();
      }
    }
  }, {
    key: "setCell",
    value: function setCell(cell, validator) {
      if (cell && cell.editable === false) return; // console.log('::', validator);

      var el = this.el,
          datepicker = this.datepicker,
          suggest = this.suggest;
      el.show();
      this.cell = cell;
      var text = cell && cell.text || '';
      this.setText(text);
      this.validator = validator;

      if (validator) {
        var type = validator.type;

        if (type === 'date') {
          datepicker.show();

          if (!/^\s*$/.test(text)) {
            datepicker.setValue(text);
          }
        }

        if (type === 'list') {
          suggest.setItems(validator.values());
          suggest.search('');
        }
      }
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.inputText = text; // console.log('text>>:', text);

      _setText.call(this, text, text.length);

      resetTextareaSize.call(this);
    }
  }]);

  return Editor;
}();


// CONCATENATED MODULE: ./src/component/button.js
function button_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { button_typeof = function _typeof(obj) { return typeof obj; }; } else { button_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return button_typeof(obj); }

function button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function button_possibleConstructorReturn(self, call) { if (call && (button_typeof(call) === "object" || typeof call === "function")) { return call; } return button_assertThisInitialized(self); }

function button_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function button_getPrototypeOf(o) { button_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return button_getPrototypeOf(o); }

function button_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) button_setPrototypeOf(subClass, superClass); }

function button_setPrototypeOf(o, p) { button_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return button_setPrototypeOf(o, p); }





var button_Button =
/*#__PURE__*/
function (_Element) {
  button_inherits(Button, _Element);

  // type: primary
  function Button(title) {
    var _this;

    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    button_classCallCheck(this, Button);

    _this = button_possibleConstructorReturn(this, button_getPrototypeOf(Button).call(this, 'div', "".concat(cssPrefix, "-button ").concat(type)));

    _this.child(locale_t("button.".concat(title)));

    return _this;
  }

  return Button;
}(Element);


// CONCATENATED MODULE: ./src/canvas/draw.js
function draw_toConsumableArray(arr) { return draw_arrayWithoutHoles(arr) || draw_iterableToArray(arr) || draw_nonIterableSpread(); }

function draw_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function draw_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function draw_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function draw_slicedToArray(arr, i) { return draw_arrayWithHoles(arr) || draw_iterableToArrayLimit(arr, i) || draw_nonIterableRest(); }

function draw_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function draw_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function draw_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function draw_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function draw_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function draw_createClass(Constructor, protoProps, staticProps) { if (protoProps) draw_defineProperties(Constructor.prototype, protoProps); if (staticProps) draw_defineProperties(Constructor, staticProps); return Constructor; }

/* global window */
function draw_dpr() {
  return window.devicePixelRatio || 1;
}

function thinLineWidth() {
  return draw_dpr() - 0.5;
}

function npx(px) {
  return parseInt(px * draw_dpr(), 10);
}

function npxLine(px) {
  var n = npx(px);
  return n > 0 ? n - 0.5 : 0.5;
}

var DrawBox =
/*#__PURE__*/
function () {
  function DrawBox(x, y, w, h) {
    var padding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    draw_classCallCheck(this, DrawBox);

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.padding = padding;
    this.bgcolor = '#ffffff'; // border: [width, style, color]

    this.borderTop = null;
    this.borderRight = null;
    this.borderBottom = null;
    this.borderLeft = null;
  }

  draw_createClass(DrawBox, [{
    key: "setBorders",
    value: function setBorders(_ref) {
      var top = _ref.top,
          bottom = _ref.bottom,
          left = _ref.left,
          right = _ref.right;
      if (top) this.borderTop = top;
      if (right) this.borderRight = right;
      if (bottom) this.borderBottom = bottom;
      if (left) this.borderLeft = left;
    }
  }, {
    key: "innerWidth",
    value: function innerWidth() {
      return this.width - this.padding * 2 - 2;
    }
  }, {
    key: "innerHeight",
    value: function innerHeight() {
      return this.height - this.padding * 2 - 2;
    }
  }, {
    key: "textx",
    value: function textx(align) {
      var width = this.width,
          padding = this.padding;
      var x = this.x;

      if (align === 'left') {
        x += padding;
      } else if (align === 'center') {
        x += width / 2;
      } else if (align === 'right') {
        x += width - padding;
      }

      return x;
    }
  }, {
    key: "texty",
    value: function texty(align, h) {
      var height = this.height,
          padding = this.padding;
      var y = this.y;

      if (align === 'top') {
        y += padding;
      } else if (align === 'middle') {
        y += height / 2 - h / 2;
      } else if (align === 'bottom') {
        y += height - padding - h;
      }

      return y;
    }
  }, {
    key: "topxys",
    value: function topxys() {
      var x = this.x,
          y = this.y,
          width = this.width;
      return [[x, y], [x + width, y]];
    }
  }, {
    key: "rightxys",
    value: function rightxys() {
      var x = this.x,
          y = this.y,
          width = this.width,
          height = this.height;
      return [[x + width, y], [x + width, y + height]];
    }
  }, {
    key: "bottomxys",
    value: function bottomxys() {
      var x = this.x,
          y = this.y,
          width = this.width,
          height = this.height;
      return [[x, y + height], [x + width, y + height]];
    }
  }, {
    key: "leftxys",
    value: function leftxys() {
      var x = this.x,
          y = this.y,
          height = this.height;
      return [[x, y], [x, y + height]];
    }
  }]);

  return DrawBox;
}();

function drawFontLine(type, tx, ty, align, valign, blheight, blwidth) {
  var floffset = {
    x: 0,
    y: 0
  };

  if (type === 'underline') {
    if (valign === 'bottom') {
      floffset.y = 0;
    } else if (valign === 'top') {
      floffset.y = -(blheight + 2);
    } else {
      floffset.y = -blheight / 2;
    }
  } else if (type === 'strike') {
    if (valign === 'bottom') {
      floffset.y = blheight / 2;
    } else if (valign === 'top') {
      floffset.y = -(blheight / 2 + 2);
    }
  }

  if (align === 'center') {
    floffset.x = blwidth / 2;
  } else if (align === 'right') {
    floffset.x = blwidth;
  }

  this.line([tx - floffset.x, ty - floffset.y], [tx - floffset.x + blwidth, ty - floffset.y]);
}

var Draw =
/*#__PURE__*/
function () {
  function Draw(el, width, height) {
    draw_classCallCheck(this, Draw);

    this.el = el;
    this.ctx = el.getContext('2d');
    this.resize(width, height);
    this.ctx.scale(draw_dpr(), draw_dpr());
  }

  draw_createClass(Draw, [{
    key: "resize",
    value: function resize(width, height) {
      // console.log('dpr:', dpr);
      this.el.style.width = "".concat(width, "px");
      this.el.style.height = "".concat(height, "px");
      this.el.width = npx(width);
      this.el.height = npx(height);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this$el = this.el,
          width = _this$el.width,
          height = _this$el.height;
      this.ctx.clearRect(0, 0, width, height);
      return this;
    }
  }, {
    key: "attr",
    value: function attr(options) {
      Object.assign(this.ctx, options);
      return this;
    }
  }, {
    key: "save",
    value: function save() {
      this.ctx.save();
      this.ctx.beginPath();
      return this;
    }
  }, {
    key: "restore",
    value: function restore() {
      this.ctx.restore();
      return this;
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      this.ctx.beginPath();
      return this;
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      this.ctx.translate(npx(x), npx(y));
      return this;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      this.ctx.scale(x, y);
      return this;
    }
  }, {
    key: "clearRect",
    value: function clearRect(x, y, w, h) {
      this.ctx.clearRect(x, y, w, h);
      return this;
    }
  }, {
    key: "fillRect",
    value: function fillRect(x, y, w, h) {
      this.ctx.fillRect(npx(x) - 0.5, npx(y) - 0.5, npx(w), npx(h));
      return this;
    }
  }, {
    key: "fillText",
    value: function fillText(text, x, y) {
      this.ctx.fillText(text, npx(x), npx(y));
      return this;
    }
    /*
      txt: render text
      box: DrawBox
      attr: {
        align: left | center | right
        valign: top | middle | bottom
        color: '#333333',
        strike: false,
        font: {
          name: 'Arial',
          size: 14,
          bold: false,
          italic: false,
        }
      }
      textWrap: text wrapping
    */

  }, {
    key: "text",
    value: function text(mtxt, box) {
      var _this = this;

      var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var textWrap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var ctx = this.ctx;
      var align = attr.align,
          valign = attr.valign,
          font = attr.font,
          color = attr.color,
          strike = attr.strike,
          underline = attr.underline;
      var tx = box.textx(align);
      ctx.save();
      ctx.beginPath();
      this.attr({
        textAlign: align,
        textBaseline: valign,
        font: "".concat(font.italic ? 'italic' : '', " ").concat(font.bold ? 'bold' : '', " ").concat(npx(font.size), "px ").concat(font.name),
        fillStyle: color,
        strokeStyle: color
      });
      var txts = "".concat(mtxt).split('\n');
      var biw = box.innerWidth();
      var ntxts = [];
      txts.forEach(function (it) {
        var txtWidth = ctx.measureText(it).width;

        if (textWrap && txtWidth > npx(biw)) {
          var textLine = {
            w: 0,
            len: 0,
            start: 0
          };

          for (var i = 0; i < it.length; i += 1) {
            if (textLine.w >= npx(biw)) {
              ntxts.push(it.substr(textLine.start, textLine.len));
              textLine = {
                w: 0,
                len: 0,
                start: i
              };
            }

            textLine.len += 1;
            textLine.w += ctx.measureText(it[i]).width + 1;
          }

          if (textLine.len > 0) {
            ntxts.push(it.substr(textLine.start, textLine.len));
          }
        } else {
          ntxts.push(it);
        }
      });
      var txtHeight = (ntxts.length - 1) * (font.size + 2);
      var ty = box.texty(valign, txtHeight);
      ntxts.forEach(function (txt) {
        var txtWidth = ctx.measureText(txt).width;

        _this.fillText(txt, tx, ty);

        if (strike) {
          drawFontLine.call(_this, 'strike', tx, ty, align, valign, font.size, txtWidth);
        }

        if (underline) {
          drawFontLine.call(_this, 'underline', tx, ty, align, valign, font.size, txtWidth);
        }

        ty += font.size + 2;
      });
      ctx.restore();
      return this;
    }
  }, {
    key: "border",
    value: function border(style, color) {
      var ctx = this.ctx;
      ctx.lineWidth = thinLineWidth;
      ctx.strokeStyle = color; // console.log('style:', style);

      if (style === 'medium') {
        ctx.lineWidth = npx(2) - 0.5;
      } else if (style === 'thick') {
        ctx.lineWidth = npx(3);
      } else if (style === 'dashed') {
        ctx.setLineDash([npx(3), npx(2)]);
      } else if (style === 'dotted') {
        ctx.setLineDash([npx(1), npx(1)]);
      } else if (style === 'double') {
        ctx.setLineDash([npx(2), 0]);
      }

      return this;
    }
  }, {
    key: "line",
    value: function line() {
      var ctx = this.ctx;

      if (arguments.length > 1) {
        ctx.beginPath();

        var _ref2 = arguments.length <= 0 ? undefined : arguments[0],
            _ref3 = draw_slicedToArray(_ref2, 2),
            x = _ref3[0],
            y = _ref3[1];

        ctx.moveTo(npxLine(x), npxLine(y));

        for (var i = 1; i < arguments.length; i += 1) {
          var _ref4 = i < 0 || arguments.length <= i ? undefined : arguments[i],
              _ref5 = draw_slicedToArray(_ref4, 2),
              x1 = _ref5[0],
              y1 = _ref5[1];

          ctx.lineTo(npxLine(x1), npxLine(y1));
        }

        ctx.stroke();
      }

      return this;
    }
  }, {
    key: "strokeBorders",
    value: function strokeBorders(box) {
      var ctx = this.ctx;
      ctx.save(); // border

      var borderTop = box.borderTop,
          borderRight = box.borderRight,
          borderBottom = box.borderBottom,
          borderLeft = box.borderLeft;

      if (borderTop) {
        this.border.apply(this, draw_toConsumableArray(borderTop)); // console.log('box.topxys:', box.topxys());

        this.line.apply(this, draw_toConsumableArray(box.topxys()));
      }

      if (borderRight) {
        this.border.apply(this, draw_toConsumableArray(borderRight));
        this.line.apply(this, draw_toConsumableArray(box.rightxys()));
      }

      if (borderBottom) {
        this.border.apply(this, draw_toConsumableArray(borderBottom));
        this.line.apply(this, draw_toConsumableArray(box.bottomxys()));
      }

      if (borderLeft) {
        this.border.apply(this, draw_toConsumableArray(borderLeft));
        this.line.apply(this, draw_toConsumableArray(box.leftxys()));
      }

      ctx.restore();
    }
  }, {
    key: "dropdown",
    value: function dropdown(box) {
      var ctx = this.ctx;
      var x = box.x,
          y = box.y,
          width = box.width,
          height = box.height;
      var sx = x + width - 15;
      var sy = y + height - 15;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(npx(sx), npx(sy));
      ctx.lineTo(npx(sx + 8), npx(sy));
      ctx.lineTo(npx(sx + 4), npx(sy + 6));
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 0, 0, .45)';
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "error",
    value: function error(box) {
      var ctx = this.ctx;
      var x = box.x,
          y = box.y,
          width = box.width;
      var sx = x + width - 1;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(npx(sx - 8), npx(y - 1));
      ctx.lineTo(npx(sx), npx(y - 1));
      ctx.lineTo(npx(sx), npx(y + 8));
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 0, 0, .65)';
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "frozen",
    value: function frozen(box) {
      var ctx = this.ctx;
      var x = box.x,
          y = box.y,
          width = box.width;
      var sx = x + width - 1;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(npx(sx - 8), npx(y - 1));
      ctx.lineTo(npx(sx), npx(y - 1));
      ctx.lineTo(npx(sx), npx(y + 8));
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 255, 0, .85)';
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "rect",
    value: function rect(box, dtextcb) {
      var ctx = this.ctx;
      var x = box.x,
          y = box.y,
          width = box.width,
          height = box.height,
          bgcolor = box.bgcolor;
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = bgcolor || '#fff';
      ctx.rect(npxLine(x + 1), npxLine(y + 1), npx(width - 2), npx(height - 2));
      ctx.clip();
      ctx.fill();
      dtextcb();
      ctx.restore();
    }
  }]);

  return Draw;
}();

/* harmony default export */ var canvas_draw = ({});

// CONCATENATED MODULE: ./src/core/font.js
// docs

/** default font list
 * @type {BaseFont[]}
 */

var baseFonts = [{
  key: 'Arial',
  title: 'Arial'
}, {
  key: 'Helvetica',
  title: 'Helvetica'
}, {
  key: 'Source Sans Pro',
  title: 'Source Sans Pro'
}, {
  key: 'Comic Sans MS',
  title: 'Comic Sans MS'
}, {
  key: 'Courier New',
  title: 'Courier New'
}, {
  key: 'Verdana',
  title: 'Verdana'
}, {
  key: 'Lato',
  title: 'Lato'
}];
/** default fontSize list
 * @type {FontSize[]}
 */

var fontSizes = [{
  pt: 7.5,
  px: 10
}, {
  pt: 8,
  px: 11
}, {
  pt: 9,
  px: 12
}, {
  pt: 10,
  px: 13
}, {
  pt: 10.5,
  px: 14
}, {
  pt: 11,
  px: 15
}, {
  pt: 12,
  px: 16
}, {
  pt: 14,
  px: 18.7
}, {
  pt: 15,
  px: 20
}, {
  pt: 16,
  px: 21.3
}, {
  pt: 18,
  px: 24
}, {
  pt: 22,
  px: 29.3
}, {
  pt: 24,
  px: 32
}, {
  pt: 26,
  px: 34.7
}, {
  pt: 36,
  px: 48
}, {
  pt: 42,
  px: 56
}];
/** map pt to px
 * @date 2019-10-10
 * @param {fontsizePT} pt
 * @returns {fontsizePX}
 */

function getFontSizePxByPt(pt) {
  for (var i = 0; i < fontSizes.length; i += 1) {
    var fontSize = fontSizes[i];

    if (fontSize.pt === pt) {
      return fontSize.px;
    }
  }

  return pt;
}
/** transform baseFonts to map
 * @date 2019-10-10
 * @param {BaseFont[]} [ary=[]]
 * @returns {object}
 */


function fonts() {
  var ary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var map = {};
  baseFonts.concat(ary).forEach(function (f) {
    map[f.key] = f;
  });
  return map;
}

/* harmony default export */ var core_font = ({});

// CONCATENATED MODULE: ./src/core/cell.js
function cell_slicedToArray(arr, i) { return cell_arrayWithHoles(arr) || cell_iterableToArrayLimit(arr, i) || cell_nonIterableRest(); }

function cell_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function cell_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function cell_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Converting infix expression to a suffix expression
// src: AVERAGE(SUM(A1,A2), B1) + 50 + B20
// return: [A1, A2], SUM[, B1],AVERAGE,50,+,B20,+

var cell_infixExprToSuffixExpr = function infixExprToSuffixExpr(src) {
  var operatorStack = [];
  var stack = [];
  var subStrs = []; // SUM, A1, B2, 50 ...

  var fnArgType = 0; // 1 => , 2 => :

  var fnArgOperator = '';
  var fnArgsLen = 1; // A1,A2,A3...

  var oldc = '';

  for (var i = 0; i < src.length; i += 1) {
    var c = src.charAt(i);

    if (c !== ' ') {
      if (c >= 'a' && c <= 'z') {
        subStrs.push(c.toUpperCase());
      } else if (c >= '0' && c <= '9' || c >= 'A' && c <= 'Z' || c === '.') {
        subStrs.push(c);
      } else if (c === '"') {
        i += 1;

        while (src.charAt(i) !== '"') {
          subStrs.push(src.charAt(i));
          i += 1;
        }

        stack.push("\"".concat(subStrs.join('')));
        subStrs = [];
      } else if (c === '-' && /[+\-*/,(]/.test(oldc)) {
        subStrs.push(c);
      } else {
        // console.log('subStrs:', subStrs.join(''), stack);
        if (c !== '(' && subStrs.length > 0) {
          stack.push(subStrs.join(''));
        }

        if (c === ')') {
          var c1 = operatorStack.pop();

          if (fnArgType === 2) {
            // fn argument range => A1:B5
            try {
              var _expr2xy = expr2xy(stack.pop()),
                  _expr2xy2 = cell_slicedToArray(_expr2xy, 2),
                  ex = _expr2xy2[0],
                  ey = _expr2xy2[1];

              var _expr2xy3 = expr2xy(stack.pop()),
                  _expr2xy4 = cell_slicedToArray(_expr2xy3, 2),
                  sx = _expr2xy4[0],
                  sy = _expr2xy4[1]; // console.log('::', sx, sy, ex, ey);


              var rangelen = 0;

              for (var x = sx; x <= ex; x += 1) {
                for (var y = sy; y <= ey; y += 1) {
                  stack.push(xy2expr(x, y));
                  rangelen += 1;
                }
              }

              stack.push([c1, rangelen]);
            } catch (e) {// console.log(e);
            }
          } else if (fnArgType === 1 || fnArgType === 3) {
            if (fnArgType === 3) stack.push(fnArgOperator); // fn argument => A1,A2,B5

            stack.push([c1, fnArgsLen]);
            fnArgsLen = 1;
          } else {
            // console.log('c1:', c1, fnArgType, stack, operatorStack);
            while (c1 !== '(') {
              stack.push(c1);
              if (operatorStack.length <= 0) break;
              c1 = operatorStack.pop();
            }
          }

          fnArgType = 0;
        } else if (c === '=' || c === '>' || c === '<') {
          var nc = src.charAt(i + 1);
          fnArgOperator = c;

          if (nc === '=' || nc === '-') {
            fnArgOperator += nc;
            i += 1;
          }

          fnArgType = 3;
        } else if (c === ':') {
          fnArgType = 2;
        } else if (c === ',') {
          if (fnArgType === 3) {
            stack.push(fnArgOperator);
          }

          fnArgType = 1;
          fnArgsLen += 1;
        } else if (c === '(' && subStrs.length > 0) {
          // function
          operatorStack.push(subStrs.join(''));
        } else {
          // priority: */ > +-
          // console.log('xxxx:', operatorStack, c, stack);
          if (operatorStack.length > 0 && (c === '+' || c === '-')) {
            var top = operatorStack[operatorStack.length - 1];
            if (top !== '(') stack.push(operatorStack.pop());

            if (top === '*' || top === '/') {
              while (operatorStack.length > 0) {
                top = operatorStack[operatorStack.length - 1];
                if (top !== '(') stack.push(operatorStack.pop());else break;
              }
            }
          } else if (operatorStack.length > 0) {
            var _top = operatorStack[operatorStack.length - 1];
            if (_top === '*' || _top === '/') stack.push(operatorStack.pop());
          }

          operatorStack.push(c);
        }

        subStrs = [];
      }

      oldc = c;
    }
  }

  if (subStrs.length > 0) {
    stack.push(subStrs.join(''));
  }

  while (operatorStack.length > 0) {
    stack.push(operatorStack.pop());
  }

  return stack;
};

var cell_evalSubExpr = function evalSubExpr(subExpr, cellRender) {
  var _subExpr = cell_slicedToArray(subExpr, 1),
      fl = _subExpr[0];

  var expr = subExpr;

  if (fl === '"') {
    return subExpr.substring(1);
  }

  var ret = 1;

  if (fl === '-') {
    expr = subExpr.substring(1);
    ret = -1;
  }

  if (expr[0] >= '0' && expr[0] <= '9') {
    return ret * Number(expr);
  }

  var _expr2xy5 = expr2xy(expr),
      _expr2xy6 = cell_slicedToArray(_expr2xy5, 2),
      x = _expr2xy6[0],
      y = _expr2xy6[1];

  return ret * cellRender(x, y);
}; // evaluate the suffix expression
// srcStack: <= infixExprToSufixExpr
// formulaMap: {'SUM': {}, ...}
// cellRender: (x, y) => {}


var cell_evalSuffixExpr = function evalSuffixExpr(srcStack, formulaMap, cellRender, cellList) {
  var stack = []; // console.log(':::::formulaMap:', formulaMap);

  for (var i = 0; i < srcStack.length; i += 1) {
    // console.log(':::>>>', srcStack[i]);
    var expr = srcStack[i];
    var fc = expr[0];

    if (expr === '+') {
      var top = stack.pop();
      stack.push(numberCalc('+', stack.pop(), top));
    } else if (expr === '-') {
      if (stack.length === 1) {
        var _top2 = stack.pop();

        stack.push(numberCalc('*', _top2, -1));
      } else {
        var _top3 = stack.pop();

        stack.push(numberCalc('-', stack.pop(), _top3));
      }
    } else if (expr === '*') {
      stack.push(numberCalc('*', stack.pop(), stack.pop()));
    } else if (expr === '/') {
      var _top4 = stack.pop();

      stack.push(numberCalc('/', stack.pop(), _top4));
    } else if (fc === '=' || fc === '>' || fc === '<') {
      var _top5 = stack.pop();

      if (!Number.isNaN(_top5)) _top5 = Number(_top5);
      var left = stack.pop();
      if (!Number.isNaN(left)) left = Number(left);
      var ret = false;

      if (fc === '=') {
        ret = left === _top5;
      } else if (expr === '>') {
        ret = left > _top5;
      } else if (expr === '>=') {
        ret = left >= _top5;
      } else if (expr === '<') {
        ret = left < _top5;
      } else if (expr === '<=') {
        ret = left <= _top5;
      }

      stack.push(ret);
    } else if (Array.isArray(expr)) {
      var _expr = cell_slicedToArray(expr, 2),
          formula = _expr[0],
          len = _expr[1];

      var params = [];

      for (var j = 0; j < len; j += 1) {
        params.push(stack.pop());
      }

      stack.push(formulaMap[formula].render(params.reverse()));
    } else {
      if (cellList.includes(expr)) {
        return 0;
      }

      if (fc >= 'a' && fc <= 'z' || fc >= 'A' && fc <= 'Z') {
        cellList.push(expr);
      }

      stack.push(cell_evalSubExpr(expr, cellRender));
      cellList.pop();
    } // console.log('stack:', stack);

  }

  return stack[0];
};

var cell_cellRender = function cellRender(src, formulaMap, getCellText) {
  var cellList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (src[0] === '=') {
    var stack = cell_infixExprToSuffixExpr(src.substring(1));
    if (stack.length <= 0) return src;
    return cell_evalSuffixExpr(stack, formulaMap, function (x, y) {
      return cellRender(getCellText(x, y), formulaMap, getCellText, cellList);
    }, cellList);
  }

  return src;
};

/* harmony default export */ var core_cell = ({
  render: cell_cellRender
});

// CONCATENATED MODULE: ./src/core/formula.js
function formula_slicedToArray(arr, i) { return formula_arrayWithHoles(arr) || formula_iterableToArrayLimit(arr, i) || formula_nonIterableRest(); }

function formula_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function formula_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function formula_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function formula_toConsumableArray(arr) { return formula_arrayWithoutHoles(arr) || formula_iterableToArray(arr) || formula_nonIterableSpread(); }

function formula_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function formula_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function formula_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
  formula:
    key
    title
    render
*/

/**
 * @typedef {object} Formula
 * @property {string} key
 * @property {function} title
 * @property {function} render
 */


/** @type {Formula[]} */

var baseFormulas = [{
  key: 'SUM',
  title: tf('formula.sum'),
  render: function render(ary) {
    return ary.reduce(function (a, b) {
      return numberCalc('+', a, b);
    }, 0);
  }
}, {
  key: 'AVERAGE',
  title: tf('formula.average'),
  render: function render(ary) {
    return ary.reduce(function (a, b) {
      return Number(a) + Number(b);
    }, 0) / ary.length;
  }
}, {
  key: 'MAX',
  title: tf('formula.max'),
  render: function render(ary) {
    return Math.max.apply(Math, formula_toConsumableArray(ary.map(function (v) {
      return Number(v);
    })));
  }
}, {
  key: 'MIN',
  title: tf('formula.min'),
  render: function render(ary) {
    return Math.min.apply(Math, formula_toConsumableArray(ary.map(function (v) {
      return Number(v);
    })));
  }
}, {
  key: 'IF',
  title: tf('formula._if'),
  render: function render(_ref) {
    var _ref2 = formula_slicedToArray(_ref, 3),
        b = _ref2[0],
        t = _ref2[1],
        f = _ref2[2];

    return b ? t : f;
  }
}, {
  key: 'AND',
  title: tf('formula.and'),
  render: function render(ary) {
    return ary.every(function (it) {
      return it;
    });
  }
}, {
  key: 'OR',
  title: tf('formula.or'),
  render: function render(ary) {
    return ary.some(function (it) {
      return it;
    });
  }
}, {
  key: 'CONCAT',
  title: tf('formula.concat'),
  render: function render(ary) {
    return ary.join('');
  }
}];
var formula_formulas = baseFormulas; // const formulas = (formulaAry = []) => {
//   const formulaMap = {};
//   baseFormulas.concat(formulaAry).forEach((f) => {
//     formulaMap[f.key] = f;
//   });
//   return formulaMap;
// };

var formulam = {};
baseFormulas.forEach(function (f) {
  formulam[f.key] = f;
});
/* harmony default export */ var core_formula = ({});

// CONCATENATED MODULE: ./src/core/format.js
function format_toConsumableArray(arr) { return format_arrayWithoutHoles(arr) || format_iterableToArray(arr) || format_nonIterableSpread(); }

function format_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function format_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function format_toArray(arr) { return format_arrayWithHoles(arr) || format_iterableToArray(arr) || format_nonIterableRest(); }

function format_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function format_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function format_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var formatStringRender = function formatStringRender(v) {
  return v;
};

var formatNumberRender = function formatNumberRender(v) {
  // match "-12.1" or "12" or "12.1"
  if (/^(-?\d*.?\d*)$/.test(v)) {
    var v1 = Number(v).toFixed(2).toString();

    var _v1$split = v1.split('\\.'),
        _v1$split2 = format_toArray(_v1$split),
        first = _v1$split2[0],
        parts = _v1$split2.slice(1);

    return [first.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')].concat(format_toConsumableArray(parts));
  }

  return v;
};

var baseFormats = [{
  key: 'normal',
  title: tf('format.normal'),
  type: 'string',
  render: formatStringRender
}, {
  key: 'text',
  title: tf('format.text'),
  type: 'string',
  render: formatStringRender
}, {
  key: 'number',
  title: tf('format.number'),
  type: 'number',
  label: '1,000.12',
  render: formatNumberRender
}, {
  key: 'percent',
  title: tf('format.percent'),
  type: 'number',
  label: '10.12%',
  render: function render(v) {
    return "".concat(v, "%");
  }
}, {
  key: 'rmb',
  title: tf('format.rmb'),
  type: 'number',
  label: '￥10.00',
  render: function render(v) {
    return "\uFFE5".concat(formatNumberRender(v));
  }
}, {
  key: 'usd',
  title: tf('format.usd'),
  type: 'number',
  label: '$10.00',
  render: function render(v) {
    return "$".concat(formatNumberRender(v));
  }
}, {
  key: 'eur',
  title: tf('format.eur'),
  type: 'number',
  label: '€10.00',
  render: function render(v) {
    return "\u20AC".concat(formatNumberRender(v));
  }
}, {
  key: 'date',
  title: tf('format.date'),
  type: 'date',
  label: '26/09/2008',
  render: formatStringRender
}, {
  key: 'time',
  title: tf('format.time'),
  type: 'date',
  label: '15:59:00',
  render: formatStringRender
}, {
  key: 'datetime',
  title: tf('format.datetime'),
  type: 'date',
  label: '26/09/2008 15:59:00',
  render: formatStringRender
}, {
  key: 'duration',
  title: tf('format.duration'),
  type: 'date',
  label: '24:01:00',
  render: formatStringRender
}]; // const formats = (ary = []) => {
//   const map = {};
//   baseFormats.concat(ary).forEach((f) => {
//     map[f.key] = f;
//   });
//   return map;
// };

var formatm = {};
baseFormats.forEach(function (f) {
  formatm[f.key] = f;
});
/* harmony default export */ var format = ({});

// CONCATENATED MODULE: ./src/component/table.js
function table_slicedToArray(arr, i) { return table_arrayWithHoles(arr) || table_iterableToArrayLimit(arr, i) || table_nonIterableRest(); }

function table_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function table_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function table_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function table_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function table_createClass(Constructor, protoProps, staticProps) { if (protoProps) table_defineProperties(Constructor.prototype, protoProps); if (staticProps) table_defineProperties(Constructor, staticProps); return Constructor; }






 // gobal var

var cellPaddingWidth = 5;
var tableFixedHeaderCleanStyle = {
  fillStyle: '#f4f5f8'
};
var tableGridStyle = {
  fillStyle: '#fff',
  lineWidth: thinLineWidth,
  strokeStyle: '#e6e6e6'
};

function tableFixedHeaderStyle() {
  return {
    textAlign: 'center',
    textBaseline: 'middle',
    font: "500 ".concat(npx(12), "px Source Sans Pro"),
    fillStyle: '#585757',
    lineWidth: thinLineWidth(),
    strokeStyle: '#e6e6e6'
  };
}

function getDrawBox(data, rindex, cindex) {
  var yoffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var _data$cellRect = data.cellRect(rindex, cindex),
      left = _data$cellRect.left,
      top = _data$cellRect.top,
      width = _data$cellRect.width,
      height = _data$cellRect.height;

  return new DrawBox(left, top + yoffset, width, height, cellPaddingWidth);
}
/*
function renderCellBorders(bboxes, translateFunc) {
  const { draw } = this;
  if (bboxes) {
    const rset = new Set();
    // console.log('bboxes:', bboxes);
    bboxes.forEach(({ ri, ci, box }) => {
      if (!rset.has(ri)) {
        rset.add(ri);
        translateFunc(ri);
      }
      draw.strokeBorders(box);
    });
  }
}
*/


function renderCell(draw, data, rindex, cindex) {
  var yoffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var sortedRowMap = data.sortedRowMap,
      rows = data.rows,
      cols = data.cols;
  if (rows.isHide(rindex) || cols.isHide(cindex)) return;
  var nrindex = rindex;

  if (sortedRowMap.has(rindex)) {
    nrindex = sortedRowMap.get(rindex);
  }

  var cell = data.getCell(nrindex, cindex);
  if (cell === null) return;
  var frozen = false;

  if ('editable' in cell && cell.editable === false) {
    frozen = true;
  }

  var style = data.getCellStyleOrDefault(nrindex, cindex);
  var dbox = getDrawBox(data, rindex, cindex, yoffset);
  dbox.bgcolor = style.bgcolor;

  if (style.border !== undefined) {
    dbox.setBorders(style.border); // bboxes.push({ ri: rindex, ci: cindex, box: dbox });

    draw.strokeBorders(dbox);
  }

  draw.rect(dbox, function () {
    // render text
    var cellText = '';

    if (!data.settings.evalPaused) {
      cellText = core_cell.render(cell.text || '', formulam, function (y, x) {
        return data.getCellTextOrDefault(x, y);
      });
    } else {
      cellText = cell.text || '';
    }

    if (style.format) {
      // console.log(data.formatm, '>>', cell.format);
      cellText = formatm[style.format].render(cellText);
    }

    var font = Object.assign({}, style.font);
    font.size = getFontSizePxByPt(font.size); // console.log('style:', style);

    draw.text(cellText, dbox, {
      align: style.align,
      valign: style.valign,
      font: font,
      color: style.color,
      strike: style.strike,
      underline: style.underline
    }, style.textwrap); // error

    var error = data.validations.getError(rindex, cindex);

    if (error) {
      // console.log('error:', rindex, cindex, error);
      draw.error(dbox);
    }

    if (frozen) {
      draw.frozen(dbox);
    }
  });
}

function renderAutofilter(viewRange) {
  var data = this.data,
      draw = this.draw;

  if (viewRange) {
    var autoFilter = data.autoFilter;
    if (!autoFilter.active()) return;
    var afRange = autoFilter.hrange();

    if (viewRange.intersects(afRange)) {
      afRange.each(function (ri, ci) {
        var dbox = getDrawBox(data, ri, ci);
        draw.dropdown(dbox);
      });
    }
  }
}

function renderContent(viewRange, fw, fh, tx, ty) {
  var draw = this.draw,
      data = this.data;
  draw.save();
  draw.translate(fw, fh).translate(tx, ty);
  var exceptRowSet = data.exceptRowSet; // const exceptRows = Array.from(exceptRowSet);

  var filteredTranslateFunc = function filteredTranslateFunc(ri) {
    var ret = exceptRowSet.has(ri);

    if (ret) {
      var height = data.rows.getHeight(ri);
      draw.translate(0, -height);
    }

    return !ret;
  };

  var exceptRowTotalHeight = data.exceptRowTotalHeight(viewRange.sri, viewRange.eri); // 1 render cell

  draw.save();
  draw.translate(0, -exceptRowTotalHeight);
  viewRange.each(function (ri, ci) {
    renderCell(draw, data, ri, ci);
  }, function (ri) {
    return filteredTranslateFunc(ri);
  });
  draw.restore(); // 2 render mergeCell

  var rset = new Set();
  draw.save();
  draw.translate(0, -exceptRowTotalHeight);
  data.eachMergesInView(viewRange, function (_ref) {
    var sri = _ref.sri,
        sci = _ref.sci,
        eri = _ref.eri;

    if (!exceptRowSet.has(sri)) {
      renderCell(draw, data, sri, sci);
    } else if (!rset.has(sri)) {
      rset.add(sri);
      var height = data.rows.sumHeight(sri, eri + 1);
      draw.translate(0, -height);
    }
  });
  draw.restore(); // 3 render autofilter

  renderAutofilter.call(this, viewRange);
  draw.restore();
}

function renderSelectedHeaderCell(x, y, w, h) {
  var draw = this.draw;
  draw.save();
  draw.attr({
    fillStyle: 'rgba(75, 137, 255, 0.08)'
  }).fillRect(x, y, w, h);
  draw.restore();
} // viewRange
// type: all | left | top
// w: the fixed width of header
// h: the fixed height of header
// tx: moving distance on x-axis
// ty: moving distance on y-axis


function renderFixedHeaders(type, viewRange, w, h, tx, ty) {
  var _this = this;

  var draw = this.draw,
      data = this.data;
  var sumHeight = viewRange.h; // rows.sumHeight(viewRange.sri, viewRange.eri + 1);

  var sumWidth = viewRange.w; // cols.sumWidth(viewRange.sci, viewRange.eci + 1);

  var nty = ty + h;
  var ntx = tx + w;
  draw.save(); // draw rect background

  draw.attr(tableFixedHeaderCleanStyle);
  if (type === 'all' || type === 'left') draw.fillRect(0, nty, w, sumHeight);
  if (type === 'all' || type === 'top') draw.fillRect(ntx, 0, sumWidth, h);
  var _data$selector$range = data.selector.range,
      sri = _data$selector$range.sri,
      sci = _data$selector$range.sci,
      eri = _data$selector$range.eri,
      eci = _data$selector$range.eci; // console.log(data.selectIndexes);
  // draw text
  // text font, align...

  draw.attr(tableFixedHeaderStyle()); // y-header-text

  if (type === 'all' || type === 'left') {
    data.rowEach(viewRange.sri, viewRange.eri, function (i, y1, rowHeight) {
      var y = nty + y1;
      var ii = i;
      draw.line([0, y], [w, y]);

      if (sri <= ii && ii < eri + 1) {
        renderSelectedHeaderCell.call(_this, 0, y, w, rowHeight);
      }

      draw.fillText(ii + 1, w / 2, y + rowHeight / 2);

      if (i > 0 && data.rows.isHide(i - 1)) {
        draw.save();
        draw.attr({
          strokeStyle: '#c6c6c6'
        });
        draw.line([5, y + 5], [w - 5, y + 5]);
        draw.restore();
      }
    });
    draw.line([0, sumHeight + nty], [w, sumHeight + nty]);
    draw.line([w, nty], [w, sumHeight + nty]);
  } // x-header-text


  if (type === 'all' || type === 'top') {
    data.colEach(viewRange.sci, viewRange.eci, function (i, x1, colWidth) {
      var x = ntx + x1;
      var ii = i;
      draw.line([x, 0], [x, h]);

      if (sci <= ii && ii < eci + 1) {
        renderSelectedHeaderCell.call(_this, x, 0, colWidth, h);
      }

      draw.fillText(stringAt(ii), x + colWidth / 2, h / 2);

      if (i > 0 && data.cols.isHide(i - 1)) {
        draw.save();
        draw.attr({
          strokeStyle: '#c6c6c6'
        });
        draw.line([x + 5, 5], [x + 5, h - 5]);
        draw.restore();
      }
    });
    draw.line([sumWidth + ntx, 0], [sumWidth + ntx, h]);
    draw.line([0, h], [sumWidth + ntx, h]);
  }

  draw.restore();
}

function renderFixedLeftTopCell(fw, fh) {
  var draw = this.draw;
  draw.save(); // left-top-cell

  draw.attr({
    fillStyle: '#f4f5f8'
  }).fillRect(0, 0, fw, fh);
  draw.restore();
}

function renderContentGrid(_ref2, fw, fh, tx, ty) {
  var sri = _ref2.sri,
      sci = _ref2.sci,
      eri = _ref2.eri,
      eci = _ref2.eci,
      w = _ref2.w,
      h = _ref2.h;
  var draw = this.draw,
      data = this.data;
  var settings = data.settings;
  draw.save();
  draw.attr(tableGridStyle).translate(fw + tx, fh + ty); // const sumWidth = cols.sumWidth(sci, eci + 1);
  // const sumHeight = rows.sumHeight(sri, eri + 1);
  // console.log('sumWidth:', sumWidth);
  // draw.clearRect(0, 0, w, h);

  if (!settings.showGrid) {
    draw.restore();
    return;
  } // console.log('rowStart:', rowStart, ', rowLen:', rowLen);


  data.rowEach(sri, eri, function (i, y, ch) {
    // console.log('y:', y);
    if (i !== sri) draw.line([0, y], [w, y]);
    if (i === eri) draw.line([0, y + ch], [w, y + ch]);
  });
  data.colEach(sci, eci, function (i, x, cw) {
    if (i !== sci) draw.line([x, 0], [x, h]);
    if (i === eci) draw.line([x + cw, 0], [x + cw, h]);
  });
  draw.restore();
}

function renderFreezeHighlightLine(fw, fh, ftw, fth) {
  var draw = this.draw,
      data = this.data;
  var twidth = data.viewWidth() - fw;
  var theight = data.viewHeight() - fh;
  draw.save().translate(fw, fh).attr({
    strokeStyle: 'rgba(75, 137, 255, .6)'
  });
  draw.line([0, fth], [twidth, fth]);
  draw.line([ftw, 0], [ftw, theight]);
  draw.restore();
}
/** end */


var table_Table =
/*#__PURE__*/
function () {
  function Table(el, data) {
    table_classCallCheck(this, Table);

    this.el = el;
    this.draw = new Draw(el, data.viewWidth(), data.viewHeight());
    this.data = data;
  }

  table_createClass(Table, [{
    key: "resetData",
    value: function resetData(data) {
      this.data = data;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      // resize canvas
      var data = this.data;
      var rows = data.rows,
          cols = data.cols; // fixed width of header

      var fw = cols.indexWidth; // fixed height of header

      var fh = rows.height;
      this.draw.resize(data.viewWidth(), data.viewHeight());
      this.clear();
      var viewRange = data.viewRange(); // renderAll.call(this, viewRange, data.scroll);

      var tx = data.freezeTotalWidth();
      var ty = data.freezeTotalHeight();
      var _data$scroll = data.scroll,
          x = _data$scroll.x,
          y = _data$scroll.y; // 1

      renderContentGrid.call(this, viewRange, fw, fh, tx, ty);
      renderContent.call(this, viewRange, fw, fh, -x, -y);
      renderFixedHeaders.call(this, 'all', viewRange, fw, fh, tx, ty);
      renderFixedLeftTopCell.call(this, fw, fh);

      var _data$freeze = table_slicedToArray(data.freeze, 2),
          fri = _data$freeze[0],
          fci = _data$freeze[1];

      if (fri > 0 || fci > 0) {
        // 2
        if (fri > 0) {
          var vr = viewRange.clone();
          vr.sri = 0;
          vr.eri = fri - 1;
          vr.h = ty;
          renderContentGrid.call(this, vr, fw, fh, tx, 0);
          renderContent.call(this, vr, fw, fh, -x, 0);
          renderFixedHeaders.call(this, 'top', vr, fw, fh, tx, 0);
        } // 3


        if (fci > 0) {
          var _vr = viewRange.clone();

          _vr.sci = 0;
          _vr.eci = fci - 1;
          _vr.w = tx;
          renderContentGrid.call(this, _vr, fw, fh, 0, ty);
          renderFixedHeaders.call(this, 'left', _vr, fw, fh, 0, ty);
          renderContent.call(this, _vr, fw, fh, 0, -y);
        } // 4


        var freezeViewRange = data.freezeViewRange();
        renderContentGrid.call(this, freezeViewRange, fw, fh, 0, 0);
        renderFixedHeaders.call(this, 'all', freezeViewRange, fw, fh, 0, 0);
        renderContent.call(this, freezeViewRange, fw, fh, 0, 0); // 5

        renderFreezeHighlightLine.call(this, fw, fh, tx, ty);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.draw.clear();
    }
  }]);

  return Table;
}();

/* harmony default export */ var component_table = (table_Table);
// CONCATENATED MODULE: ./src/component/print.js
function print_toConsumableArray(arr) { return print_arrayWithoutHoles(arr) || print_iterableToArray(arr) || print_nonIterableSpread(); }

function print_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function print_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function print_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function print_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function print_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function print_createClass(Constructor, protoProps, staticProps) { if (protoProps) print_defineProperties(Constructor.prototype, protoProps); if (staticProps) print_defineProperties(Constructor, staticProps); return Constructor; }

/* global window document */





 // resolution: 72 => 595 x 842
// 150 => 1240 x 1754
// 200 => 1654 x 2339
// 300 => 2479 x 3508
// 96 * cm / 2.54 , 96 * cm / 2.54

var PAGER_SIZES = [['A3', 11.69, 16.54], ['A4', 8.27, 11.69], ['A5', 5.83, 8.27], ['B4', 9.84, 13.90], ['B5', 6.93, 9.84]];
var PAGER_ORIENTATIONS = ['landscape', 'portrait'];

function inches2px(inc) {
  return parseInt(96 * inc, 10);
}

function btnClick(type) {
  if (type === 'cancel') {
    this.el.hide();
  } else {
    this.toPrint();
  }
}

function pagerSizeChange(evt) {
  var paper = this.paper;
  var value = evt.target.value;
  var ps = PAGER_SIZES[value];
  paper.w = inches2px(ps[1]);
  paper.h = inches2px(ps[2]); // console.log('paper:', ps, paper);

  this.preview();
}

function pagerOrientationChange(evt) {
  var paper = this.paper;
  var value = evt.target.value;
  var v = PAGER_ORIENTATIONS[value];
  paper.orientation = v;
  this.preview();
}

var print_Print =
/*#__PURE__*/
function () {
  function Print(data) {
    var _h, _h2;

    print_classCallCheck(this, Print);

    this.paper = {
      w: inches2px(PAGER_SIZES[0][1]),
      h: inches2px(PAGER_SIZES[0][2]),
      padding: 50,
      orientation: PAGER_ORIENTATIONS[0],

      get width() {
        return this.orientation === 'landscape' ? this.h : this.w;
      },

      get height() {
        return this.orientation === 'landscape' ? this.w : this.h;
      }

    };
    this.data = data;
    this.el = element_h('div', "".concat(cssPrefix, "-print")).children(element_h('div', "".concat(cssPrefix, "-print-bar")).children(element_h('div', '-title').child('Print settings'), element_h('div', '-right').children(element_h('div', "".concat(cssPrefix, "-buttons")).children(new button_Button('cancel').on('click', btnClick.bind(this, 'cancel')), new button_Button('next', 'primary').on('click', btnClick.bind(this, 'next'))))), element_h('div', "".concat(cssPrefix, "-print-content")).children(this.contentEl = element_h('div', '-content'), element_h('div', '-sider').child(element_h('form', '').children(element_h('fieldset', '').children(element_h('label', '').child("".concat(locale_t('print.size'))), (_h = element_h('select', '')).children.apply(_h, print_toConsumableArray(PAGER_SIZES.map(function (it, index) {
      return element_h('option', '').attr('value', index).child("".concat(it[0], " ( ").concat(it[1], "''x").concat(it[2], "'' )"));
    }))).on('change', pagerSizeChange.bind(this))), element_h('fieldset', '').children(element_h('label', '').child("".concat(locale_t('print.orientation'))), (_h2 = element_h('select', '')).children.apply(_h2, print_toConsumableArray(PAGER_ORIENTATIONS.map(function (it, index) {
      return element_h('option', '').attr('value', index).child("".concat(locale_t('print.orientations')[index]));
    }))).on('change', pagerOrientationChange.bind(this))))))).hide();
  }

  print_createClass(Print, [{
    key: "resetData",
    value: function resetData(data) {
      this.data = data;
    }
  }, {
    key: "preview",
    value: function preview() {
      var _this = this;

      var data = this.data,
          paper = this.paper;
      var width = paper.width,
          height = paper.height,
          padding = paper.padding;
      var iwidth = width - padding * 2;
      var iheight = height - padding * 2;
      var cr = data.contentRange();
      var pages = parseInt(cr.h / iheight, 10) + 1;
      var scale = iwidth / cr.w;
      var left = padding;
      var top = padding;

      if (scale > 1) {
        left += (iwidth - cr.w) / 2;
      }

      var ri = 0;
      var yoffset = 0;
      this.contentEl.html('');
      this.canvases = [];
      var mViewRange = {
        sri: 0,
        sci: 0,
        eri: 0,
        eci: 0
      };

      var _loop = function _loop(i) {
        var th = 0;
        var yo = 0;
        var wrap = element_h('div', "".concat(cssPrefix, "-canvas-card"));
        var canvas = element_h('canvas', "".concat(cssPrefix, "-canvas"));

        _this.canvases.push(canvas.el);

        var draw = new Draw(canvas.el, width, height); // cell-content

        draw.save();
        draw.translate(left, top);
        if (scale < 1) draw.scale(scale, scale); // console.log('ri:', ri, cr.eri, yoffset);

        for (; ri <= cr.eri; ri += 1) {
          var rh = data.rows.getHeight(ri);
          th += rh;

          if (th < iheight) {
            for (var ci = 0; ci <= cr.eci; ci += 1) {
              renderCell(draw, data, ri, ci, yoffset);
              mViewRange.eci = ci;
            }
          } else {
            yo = -(th - rh);
            break;
          }
        }

        mViewRange.eri = ri;
        draw.restore(); // merge-cell

        draw.save();
        draw.translate(left, top);
        if (scale < 1) draw.scale(scale, scale);
        var yof = yoffset;
        data.eachMergesInView(mViewRange, function (_ref) {
          var sri = _ref.sri,
              sci = _ref.sci;
          renderCell(draw, data, sri, sci, yof);
        });
        draw.restore();
        mViewRange.sri = mViewRange.eri;
        mViewRange.sci = mViewRange.eci;
        yoffset += yo;

        _this.contentEl.child(element_h('div', "".concat(cssPrefix, "-canvas-card-wraper")).child(wrap.child(canvas)));
      };

      for (var i = 0; i < pages; i += 1) {
        _loop(i);
      }

      this.el.show();
    }
  }, {
    key: "toPrint",
    value: function toPrint() {
      this.el.hide();
      var paper = this.paper;
      var iframe = element_h('iframe', '').hide();
      var el = iframe.el;
      window.document.body.appendChild(el);
      var contentWindow = el.contentWindow;
      var idoc = contentWindow.document;
      var style = document.createElement('style');
      style.innerHTML = "\n      @page { size: ".concat(paper.width, "px ").concat(paper.height, "px; };\n      canvas {\n        page-break-before: auto;        \n        page-break-after: always;\n        image-rendering: pixelated;\n      };\n    ");
      idoc.head.appendChild(style);
      this.canvases.forEach(function (it) {
        var cn = it.cloneNode(false);
        var ctx = cn.getContext('2d'); // ctx.imageSmoothingEnabled = true;

        ctx.drawImage(it, 0, 0);
        idoc.body.appendChild(cn);
      });
      contentWindow.print();
    }
  }]);

  return Print;
}();


// CONCATENATED MODULE: ./src/component/contextmenu.js
function contextmenu_toConsumableArray(arr) { return contextmenu_arrayWithoutHoles(arr) || contextmenu_iterableToArray(arr) || contextmenu_nonIterableSpread(); }

function contextmenu_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function contextmenu_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function contextmenu_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function contextmenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contextmenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contextmenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) contextmenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) contextmenu_defineProperties(Constructor, staticProps); return Constructor; }





var menuItems = [{
  key: 'copy',
  title: tf('contextmenu.copy'),
  label: 'Ctrl+C'
}, {
  key: 'cut',
  title: tf('contextmenu.cut'),
  label: 'Ctrl+X'
}, {
  key: 'paste',
  title: tf('contextmenu.paste'),
  label: 'Ctrl+V'
}, {
  key: 'paste-value',
  title: tf('contextmenu.pasteValue'),
  label: 'Ctrl+Shift+V'
}, {
  key: 'paste-format',
  title: tf('contextmenu.pasteFormat'),
  label: 'Ctrl+Alt+V'
}, {
  key: 'divider'
}, {
  key: 'insert-row',
  title: tf('contextmenu.insertRow')
}, {
  key: 'insert-column',
  title: tf('contextmenu.insertColumn')
}, {
  key: 'divider'
}, {
  key: 'delete-row',
  title: tf('contextmenu.deleteRow')
}, {
  key: 'delete-column',
  title: tf('contextmenu.deleteColumn')
}, {
  key: 'delete-cell-text',
  title: tf('contextmenu.deleteCellText')
}, {
  key: 'hide',
  title: tf('contextmenu.hide')
}, {
  key: 'divider'
}, {
  key: 'validation',
  title: tf('contextmenu.validation')
}, {
  key: 'divider'
}, {
  key: 'cell-printable',
  title: tf('contextmenu.cellprintable')
}, {
  key: 'cell-non-printable',
  title: tf('contextmenu.cellnonprintable')
}, {
  key: 'divider'
}, {
  key: 'cell-editable',
  title: tf('contextmenu.celleditable')
}, {
  key: 'cell-non-editable',
  title: tf('contextmenu.cellnoneditable')
}];

function buildMenuItem(item) {
  var _this = this;

  if (item.key === 'divider') {
    return element_h('div', "".concat(cssPrefix, "-item divider"));
  }

  return element_h('div', "".concat(cssPrefix, "-item")).on('click', function () {
    _this.itemClick(item.key);

    _this.hide();
  }).children(item.title(), element_h('div', 'label').child(item.label || ''));
}

function buildMenu() {
  var _this2 = this;

  return menuItems.map(function (it) {
    return buildMenuItem.call(_this2, it);
  });
}

var contextmenu_ContextMenu =
/*#__PURE__*/
function () {
  function ContextMenu(viewFn) {
    var _h;

    var isHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    contextmenu_classCallCheck(this, ContextMenu);

    this.menuItems = buildMenu.call(this);
    this.el = (_h = element_h('div', "".concat(cssPrefix, "-contextmenu"))).children.apply(_h, contextmenu_toConsumableArray(this.menuItems)).hide();
    this.viewFn = viewFn;

    this.itemClick = function () {};

    this.isHide = isHide;
    this.setMode('range');
  } // row-col: the whole rows or the whole cols
  // range: select range


  contextmenu_createClass(ContextMenu, [{
    key: "setMode",
    value: function setMode(mode) {
      var hideEl = this.menuItems[12];

      if (mode === 'row-col') {
        hideEl.show();
      } else {
        hideEl.hide();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var el = this.el;
      el.hide();
      unbindClickoutside(el);
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      if (this.isHide) return;
      var el = this.el;

      var _el$show$offset = el.show().offset(),
          width = _el$show$offset.width;

      var view = this.viewFn();
      var vhf = view.height / 2;
      var left = x;

      if (view.width - x <= width) {
        left -= width;
      }

      el.css('left', "".concat(left, "px"));

      if (y > vhf) {
        el.css('bottom', "".concat(view.height - y, "px")).css('max-height', "".concat(y, "px")).css('top', 'auto');
      } else {
        el.css('top', "".concat(y, "px")).css('max-height', "".concat(view.height - y, "px")).css('bottom', 'auto');
      }

      bindClickoutside(el);
    }
  }]);

  return ContextMenu;
}();


// CONCATENATED MODULE: ./src/component/tooltip.js
/* global document */



function tooltip(html, target) {
  if (target.classList.contains('active')) {
    return;
  }

  var _target$getBoundingCl = target.getBoundingClientRect(),
      left = _target$getBoundingCl.left,
      top = _target$getBoundingCl.top,
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;

  var el = element_h('div', "".concat(cssPrefix, "-tooltip")).html(html).show();
  document.body.appendChild(el.el);
  var elBox = el.box(); // console.log('elBox:', elBox);

  el.css('left', "".concat(left + width / 2 - elBox.width / 2, "px")).css('top', "".concat(top + height + 2, "px"));
  bind(target, 'mouseleave', function () {
    if (document.body.contains(el.el)) {
      document.body.removeChild(el.el);
    }
  });
  bind(target, 'click', function () {
    if (document.body.contains(el.el)) {
      document.body.removeChild(el.el);
    }
  });
}
// CONCATENATED MODULE: ./src/component/toolbar/item.js
function item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function item_createClass(Constructor, protoProps, staticProps) { if (protoProps) item_defineProperties(Constructor.prototype, protoProps); if (staticProps) item_defineProperties(Constructor, staticProps); return Constructor; }






var item_Item =
/*#__PURE__*/
function () {
  // tooltip
  // tag: the subclass type
  // shortcut: shortcut key
  function Item(tag, shortcut, value) {
    item_classCallCheck(this, Item);

    this.tip = '';
    if (tag) this.tip = locale_t("toolbar.".concat(tag.replace(/-[a-z]/g, function (c) {
      return c[1].toUpperCase();
    })));
    if (shortcut) this.tip += " (".concat(shortcut, ")");
    this.tag = tag;
    this.shortcut = shortcut;
    this.value = value;
    this.el = this.element();

    this.change = function () {};
  }

  item_createClass(Item, [{
    key: "element",
    value: function element() {
      var _this = this;

      var tip = this.tip;
      return element_h('div', "".concat(cssPrefix, "-toolbar-btn")).on('mouseenter', function (evt) {
        if (_this.tip) tooltip(_this.tip, evt.target);
      }).attr('data-tooltip', tip);
    }
  }, {
    key: "setState",
    value: function setState() {}
  }]);

  return Item;
}();


// CONCATENATED MODULE: ./src/component/toolbar/dropdown_item.js
function dropdown_item_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_item_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_item_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_item_typeof(obj); }

function dropdown_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_item_defineProperties(Constructor, staticProps); return Constructor; }

function dropdown_item_possibleConstructorReturn(self, call) { if (call && (dropdown_item_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_item_assertThisInitialized(self); }

function dropdown_item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = dropdown_item_getPrototypeOf(object); if (object === null) break; } return object; }

function dropdown_item_getPrototypeOf(o) { dropdown_item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_item_getPrototypeOf(o); }

function dropdown_item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_item_setPrototypeOf(subClass, superClass); }

function dropdown_item_setPrototypeOf(o, p) { dropdown_item_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_item_setPrototypeOf(o, p); }



var DropdownItem =
/*#__PURE__*/
function (_Item) {
  dropdown_item_inherits(DropdownItem, _Item);

  function DropdownItem() {
    dropdown_item_classCallCheck(this, DropdownItem);

    return dropdown_item_possibleConstructorReturn(this, dropdown_item_getPrototypeOf(DropdownItem).apply(this, arguments));
  }

  dropdown_item_createClass(DropdownItem, [{
    key: "dropdown",
    value: function dropdown() {}
  }, {
    key: "getValue",
    value: function getValue(v) {
      return v;
    }
  }, {
    key: "element",
    value: function element() {
      var _this = this;

      var tag = this.tag;
      this.dd = this.dropdown();

      this.dd.change = function (it) {
        return _this.change(tag, _this.getValue(it));
      };

      return _get(dropdown_item_getPrototypeOf(DropdownItem.prototype), "element", this).call(this).child(this.dd);
    }
  }, {
    key: "setState",
    value: function setState(v) {
      if (v) {
        this.value = v;
        this.dd.setTitle(v);
      }
    }
  }]);

  return DropdownItem;
}(item_Item);


// CONCATENATED MODULE: ./src/component/dropdown.js
function dropdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_typeof(obj); }

function dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_defineProperties(Constructor, staticProps); return Constructor; }

function dropdown_possibleConstructorReturn(self, call) { if (call && (dropdown_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_assertThisInitialized(self); }

function dropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_getPrototypeOf(o) { dropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_getPrototypeOf(o); }

function dropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_setPrototypeOf(subClass, superClass); }

function dropdown_setPrototypeOf(o, p) { dropdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_setPrototypeOf(o, p); }





var dropdown_Dropdown =
/*#__PURE__*/
function (_Element) {
  dropdown_inherits(Dropdown, _Element);

  function Dropdown(title, width, showArrow, placement) {
    var _this2;

    var _this;

    dropdown_classCallCheck(this, Dropdown);

    _this = dropdown_possibleConstructorReturn(this, dropdown_getPrototypeOf(Dropdown).call(this, 'div', "".concat(cssPrefix, "-dropdown ").concat(placement)));
    _this.title = title;

    _this.change = function () {};

    _this.headerClick = function () {};

    if (typeof title === 'string') {
      _this.title = element_h('div', "".concat(cssPrefix, "-dropdown-title")).child(title);
    } else if (showArrow) {
      _this.title.addClass('arrow-left');
    }

    _this.contentEl = element_h('div', "".concat(cssPrefix, "-dropdown-content")).css('width', width).hide();

    for (var _len = arguments.length, children = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      children[_key - 4] = arguments[_key];
    }

    (_this2 = _this).setContentChildren.apply(_this2, children);

    _this.headerEl = element_h('div', "".concat(cssPrefix, "-dropdown-header"));

    _this.headerEl.on('click', function () {
      if (_this.contentEl.css('display') !== 'block') {
        _this.show();
      } else {
        _this.hide();
      }
    }).children(_this.title, showArrow ? element_h('div', "".concat(cssPrefix, "-icon arrow-right")).child(element_h('div', "".concat(cssPrefix, "-icon-img arrow-down"))) : '');

    _this.children(_this.headerEl, _this.contentEl);

    return _this;
  }

  dropdown_createClass(Dropdown, [{
    key: "setContentChildren",
    value: function setContentChildren() {
      this.contentEl.html('');

      if (arguments.length > 0) {
        var _this$contentEl;

        (_this$contentEl = this.contentEl).children.apply(_this$contentEl, arguments);
      }
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.title.html(title);
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      var contentEl = this.contentEl;
      contentEl.show();
      this.parent().active();
      bindClickoutside(this.parent(), function () {
        _this3.hide();
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.parent().active(false);
      this.contentEl.hide();
      unbindClickoutside(this.parent());
    }
  }]);

  return Dropdown;
}(Element);


// CONCATENATED MODULE: ./src/component/dropdown_align.js
function dropdown_align_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_align_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_align_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_align_typeof(obj); }

function dropdown_align_toConsumableArray(arr) { return dropdown_align_arrayWithoutHoles(arr) || dropdown_align_iterableToArray(arr) || dropdown_align_nonIterableSpread(); }

function dropdown_align_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function dropdown_align_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function dropdown_align_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function dropdown_align_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_align_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_align_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_align_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_align_defineProperties(Constructor, staticProps); return Constructor; }

function dropdown_align_possibleConstructorReturn(self, call) { if (call && (dropdown_align_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_align_assertThisInitialized(self); }

function dropdown_align_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_align_getPrototypeOf(o) { dropdown_align_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_align_getPrototypeOf(o); }

function dropdown_align_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_align_setPrototypeOf(subClass, superClass); }

function dropdown_align_setPrototypeOf(o, p) { dropdown_align_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_align_setPrototypeOf(o, p); }






function buildItemWithIcon(iconName) {
  return element_h('div', "".concat(cssPrefix, "-item")).child(new icon_Icon(iconName));
}

var dropdown_align_DropdownAlign =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_align_inherits(DropdownAlign, _Dropdown);

  function DropdownAlign(aligns, align) {
    var _getPrototypeOf2;

    var _this;

    dropdown_align_classCallCheck(this, DropdownAlign);

    var icon = new icon_Icon("align-".concat(align));
    var naligns = aligns.map(function (it) {
      return buildItemWithIcon("align-".concat(it)).on('click', function () {
        _this.setTitle(it);

        _this.change(it);
      });
    });
    return _this = dropdown_align_possibleConstructorReturn(this, (_getPrototypeOf2 = dropdown_align_getPrototypeOf(DropdownAlign)).call.apply(_getPrototypeOf2, [this, icon, 'auto', true, 'bottom-left'].concat(dropdown_align_toConsumableArray(naligns))));
  }

  dropdown_align_createClass(DropdownAlign, [{
    key: "setTitle",
    value: function setTitle(align) {
      this.title.setName("align-".concat(align));
      this.hide();
    }
  }]);

  return DropdownAlign;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/toolbar/align.js
function align_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { align_typeof = function _typeof(obj) { return typeof obj; }; } else { align_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return align_typeof(obj); }

function align_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function align_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function align_createClass(Constructor, protoProps, staticProps) { if (protoProps) align_defineProperties(Constructor.prototype, protoProps); if (staticProps) align_defineProperties(Constructor, staticProps); return Constructor; }

function align_possibleConstructorReturn(self, call) { if (call && (align_typeof(call) === "object" || typeof call === "function")) { return call; } return align_assertThisInitialized(self); }

function align_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function align_getPrototypeOf(o) { align_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return align_getPrototypeOf(o); }

function align_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) align_setPrototypeOf(subClass, superClass); }

function align_setPrototypeOf(o, p) { align_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return align_setPrototypeOf(o, p); }




var align_Align =
/*#__PURE__*/
function (_DropdownItem) {
  align_inherits(Align, _DropdownItem);

  function Align(value) {
    align_classCallCheck(this, Align);

    return align_possibleConstructorReturn(this, align_getPrototypeOf(Align).call(this, 'align', '', value));
  }

  align_createClass(Align, [{
    key: "dropdown",
    value: function dropdown() {
      var value = this.value;
      return new dropdown_align_DropdownAlign(['left', 'center', 'right'], value);
    }
  }]);

  return Align;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/toolbar/valign.js
function valign_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { valign_typeof = function _typeof(obj) { return typeof obj; }; } else { valign_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return valign_typeof(obj); }

function valign_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function valign_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function valign_createClass(Constructor, protoProps, staticProps) { if (protoProps) valign_defineProperties(Constructor.prototype, protoProps); if (staticProps) valign_defineProperties(Constructor, staticProps); return Constructor; }

function valign_possibleConstructorReturn(self, call) { if (call && (valign_typeof(call) === "object" || typeof call === "function")) { return call; } return valign_assertThisInitialized(self); }

function valign_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function valign_getPrototypeOf(o) { valign_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return valign_getPrototypeOf(o); }

function valign_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) valign_setPrototypeOf(subClass, superClass); }

function valign_setPrototypeOf(o, p) { valign_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return valign_setPrototypeOf(o, p); }




var valign_Valign =
/*#__PURE__*/
function (_DropdownItem) {
  valign_inherits(Valign, _DropdownItem);

  function Valign(value) {
    valign_classCallCheck(this, Valign);

    return valign_possibleConstructorReturn(this, valign_getPrototypeOf(Valign).call(this, 'valign', '', value));
  }

  valign_createClass(Valign, [{
    key: "dropdown",
    value: function dropdown() {
      var value = this.value;
      return new dropdown_align_DropdownAlign(['top', 'middle', 'bottom'], value);
    }
  }]);

  return Valign;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/toolbar/toggle_item.js
function toggle_item_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { toggle_item_typeof = function _typeof(obj) { return typeof obj; }; } else { toggle_item_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return toggle_item_typeof(obj); }

function toggle_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toggle_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function toggle_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) toggle_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) toggle_item_defineProperties(Constructor, staticProps); return Constructor; }

function toggle_item_possibleConstructorReturn(self, call) { if (call && (toggle_item_typeof(call) === "object" || typeof call === "function")) { return call; } return toggle_item_assertThisInitialized(self); }

function toggle_item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function toggle_item_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { toggle_item_get = Reflect.get; } else { toggle_item_get = function _get(target, property, receiver) { var base = toggle_item_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return toggle_item_get(target, property, receiver || target); }

function toggle_item_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = toggle_item_getPrototypeOf(object); if (object === null) break; } return object; }

function toggle_item_getPrototypeOf(o) { toggle_item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return toggle_item_getPrototypeOf(o); }

function toggle_item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) toggle_item_setPrototypeOf(subClass, superClass); }

function toggle_item_setPrototypeOf(o, p) { toggle_item_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return toggle_item_setPrototypeOf(o, p); }




var toggle_item_ToggleItem =
/*#__PURE__*/
function (_Item) {
  toggle_item_inherits(ToggleItem, _Item);

  function ToggleItem() {
    toggle_item_classCallCheck(this, ToggleItem);

    return toggle_item_possibleConstructorReturn(this, toggle_item_getPrototypeOf(ToggleItem).apply(this, arguments));
  }

  toggle_item_createClass(ToggleItem, [{
    key: "element",
    value: function element() {
      var _this = this;

      var tag = this.tag;
      return toggle_item_get(toggle_item_getPrototypeOf(ToggleItem.prototype), "element", this).call(this).child(new icon_Icon(tag)).on('click', function () {
        return _this.click();
      });
    }
  }, {
    key: "click",
    value: function click() {
      this.change(this.tag, this.toggle());
    }
  }, {
    key: "setState",
    value: function setState(active) {
      this.el.active(active);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      return this.el.toggle();
    }
  }, {
    key: "active",
    value: function active() {
      return this.el.hasClass('active');
    }
  }]);

  return ToggleItem;
}(item_Item);


// CONCATENATED MODULE: ./src/component/toolbar/autofilter.js
function autofilter_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { autofilter_typeof = function _typeof(obj) { return typeof obj; }; } else { autofilter_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return autofilter_typeof(obj); }

function autofilter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function autofilter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function autofilter_createClass(Constructor, protoProps, staticProps) { if (protoProps) autofilter_defineProperties(Constructor.prototype, protoProps); if (staticProps) autofilter_defineProperties(Constructor, staticProps); return Constructor; }

function autofilter_possibleConstructorReturn(self, call) { if (call && (autofilter_typeof(call) === "object" || typeof call === "function")) { return call; } return autofilter_assertThisInitialized(self); }

function autofilter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function autofilter_getPrototypeOf(o) { autofilter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return autofilter_getPrototypeOf(o); }

function autofilter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) autofilter_setPrototypeOf(subClass, superClass); }

function autofilter_setPrototypeOf(o, p) { autofilter_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return autofilter_setPrototypeOf(o, p); }



var Autofilter =
/*#__PURE__*/
function (_ToggleItem) {
  autofilter_inherits(Autofilter, _ToggleItem);

  function Autofilter() {
    autofilter_classCallCheck(this, Autofilter);

    return autofilter_possibleConstructorReturn(this, autofilter_getPrototypeOf(Autofilter).call(this, 'autofilter'));
  }

  autofilter_createClass(Autofilter, [{
    key: "setState",
    value: function setState() {}
  }]);

  return Autofilter;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/bold.js
function bold_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bold_typeof = function _typeof(obj) { return typeof obj; }; } else { bold_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bold_typeof(obj); }

function bold_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bold_possibleConstructorReturn(self, call) { if (call && (bold_typeof(call) === "object" || typeof call === "function")) { return call; } return bold_assertThisInitialized(self); }

function bold_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bold_getPrototypeOf(o) { bold_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bold_getPrototypeOf(o); }

function bold_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) bold_setPrototypeOf(subClass, superClass); }

function bold_setPrototypeOf(o, p) { bold_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bold_setPrototypeOf(o, p); }



var Bold =
/*#__PURE__*/
function (_ToggleItem) {
  bold_inherits(Bold, _ToggleItem);

  function Bold() {
    bold_classCallCheck(this, Bold);

    return bold_possibleConstructorReturn(this, bold_getPrototypeOf(Bold).call(this, 'font-bold', 'Ctrl+B'));
  }

  return Bold;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/italic.js
function italic_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { italic_typeof = function _typeof(obj) { return typeof obj; }; } else { italic_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return italic_typeof(obj); }

function italic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function italic_possibleConstructorReturn(self, call) { if (call && (italic_typeof(call) === "object" || typeof call === "function")) { return call; } return italic_assertThisInitialized(self); }

function italic_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function italic_getPrototypeOf(o) { italic_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return italic_getPrototypeOf(o); }

function italic_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) italic_setPrototypeOf(subClass, superClass); }

function italic_setPrototypeOf(o, p) { italic_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return italic_setPrototypeOf(o, p); }



var Italic =
/*#__PURE__*/
function (_ToggleItem) {
  italic_inherits(Italic, _ToggleItem);

  function Italic() {
    italic_classCallCheck(this, Italic);

    return italic_possibleConstructorReturn(this, italic_getPrototypeOf(Italic).call(this, 'font-italic', 'Ctrl+I'));
  }

  return Italic;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/strike.js
function strike_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { strike_typeof = function _typeof(obj) { return typeof obj; }; } else { strike_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return strike_typeof(obj); }

function strike_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function strike_possibleConstructorReturn(self, call) { if (call && (strike_typeof(call) === "object" || typeof call === "function")) { return call; } return strike_assertThisInitialized(self); }

function strike_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function strike_getPrototypeOf(o) { strike_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return strike_getPrototypeOf(o); }

function strike_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) strike_setPrototypeOf(subClass, superClass); }

function strike_setPrototypeOf(o, p) { strike_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return strike_setPrototypeOf(o, p); }



var Strike =
/*#__PURE__*/
function (_ToggleItem) {
  strike_inherits(Strike, _ToggleItem);

  function Strike() {
    strike_classCallCheck(this, Strike);

    return strike_possibleConstructorReturn(this, strike_getPrototypeOf(Strike).call(this, 'strike', 'Ctrl+U'));
  }

  return Strike;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/underline.js
function underline_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { underline_typeof = function _typeof(obj) { return typeof obj; }; } else { underline_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return underline_typeof(obj); }

function underline_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function underline_possibleConstructorReturn(self, call) { if (call && (underline_typeof(call) === "object" || typeof call === "function")) { return call; } return underline_assertThisInitialized(self); }

function underline_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function underline_getPrototypeOf(o) { underline_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return underline_getPrototypeOf(o); }

function underline_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) underline_setPrototypeOf(subClass, superClass); }

function underline_setPrototypeOf(o, p) { underline_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return underline_setPrototypeOf(o, p); }



var Underline =
/*#__PURE__*/
function (_ToggleItem) {
  underline_inherits(Underline, _ToggleItem);

  function Underline() {
    underline_classCallCheck(this, Underline);

    return underline_possibleConstructorReturn(this, underline_getPrototypeOf(Underline).call(this, 'underline', 'Ctrl+U'));
  }

  return Underline;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/color_palette.js
function color_palette_toConsumableArray(arr) { return color_palette_arrayWithoutHoles(arr) || color_palette_iterableToArray(arr) || color_palette_nonIterableSpread(); }

function color_palette_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function color_palette_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function color_palette_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function color_palette_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var themeColorPlaceHolders = ['#ffffff', '#000100', '#e7e5e6', '#445569', '#5b9cd6', '#ed7d31', '#a5a5a5', '#ffc001', '#4371c6', '#71ae47'];
var themeColors = [['#f2f2f2', '#7f7f7f', '#d0cecf', '#d5dce4', '#deeaf6', '#fce5d5', '#ededed', '#fff2cd', '#d9e2f3', '#e3efd9'], ['#d8d8d8', '#595959', '#afabac', '#adb8ca', '#bdd7ee', '#f7ccac', '#dbdbdb', '#ffe59a', '#b3c6e7', '#c5e0b3'], ['#bfbfbf', '#3f3f3f', '#756f6f', '#8596b0', '#9cc2e6', '#f4b184', '#c9c9c9', '#fed964', '#8eaada', '#a7d08c'], ['#a5a5a5', '#262626', '#3a3839', '#333f4f', '#2e75b5', '#c45a10', '#7b7b7b', '#bf8e01', '#2f5596', '#538136'], ['#7f7f7f', '#0c0c0c', '#171516', '#222a35', '#1f4e7a', '#843c0a', '#525252', '#7e6000', '#203864', '#365624']];
var standardColors = ['#c00000', '#fe0000', '#fdc101', '#ffff01', '#93d051', '#00b04e', '#01b0f1', '#0170c1', '#012060', '#7030a0'];

function buildTd(bgcolor) {
  var _this = this;

  return element_h('td', '').child(element_h('div', "".concat(cssPrefix, "-color-palette-cell")).on('click.stop', function () {
    return _this.change(bgcolor);
  }).css('background-color', bgcolor));
}

var color_palette_ColorPalette = function ColorPalette() {
  var _h,
      _h2,
      _this2 = this,
      _h4;

  color_palette_classCallCheck(this, ColorPalette);

  this.el = element_h('div', "".concat(cssPrefix, "-color-palette"));

  this.change = function () {};

  var table = element_h('table', '').children((_h = element_h('tbody', '')).children.apply(_h, [(_h2 = element_h('tr', "".concat(cssPrefix, "-theme-color-placeholders"))).children.apply(_h2, color_palette_toConsumableArray(themeColorPlaceHolders.map(function (color) {
    return buildTd.call(_this2, color);
  })))].concat(color_palette_toConsumableArray(themeColors.map(function (it) {
    var _h3;

    return (_h3 = element_h('tr', "".concat(cssPrefix, "-theme-colors"))).children.apply(_h3, color_palette_toConsumableArray(it.map(function (color) {
      return buildTd.call(_this2, color);
    })));
  })), [(_h4 = element_h('tr', "".concat(cssPrefix, "-standard-colors"))).children.apply(_h4, color_palette_toConsumableArray(standardColors.map(function (color) {
    return buildTd.call(_this2, color);
  })))])));
  this.el.child(table);
};


// CONCATENATED MODULE: ./src/component/dropdown_color.js
function dropdown_color_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_color_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_color_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_color_typeof(obj); }

function dropdown_color_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_color_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_color_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_color_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_color_defineProperties(Constructor, staticProps); return Constructor; }

function dropdown_color_possibleConstructorReturn(self, call) { if (call && (dropdown_color_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_color_assertThisInitialized(self); }

function dropdown_color_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_color_getPrototypeOf(o) { dropdown_color_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_color_getPrototypeOf(o); }

function dropdown_color_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_color_setPrototypeOf(subClass, superClass); }

function dropdown_color_setPrototypeOf(o, p) { dropdown_color_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_color_setPrototypeOf(o, p); }





var dropdown_color_DropdownColor =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_color_inherits(DropdownColor, _Dropdown);

  function DropdownColor(iconName, color) {
    var _this;

    dropdown_color_classCallCheck(this, DropdownColor);

    var icon = new icon_Icon(iconName).css('height', '16px').css('border-bottom', "3px solid ".concat(color));
    var colorPalette = new color_palette_ColorPalette();

    colorPalette.change = function (v) {
      _this.setTitle(v);

      _this.change(v);
    };

    return _this = dropdown_color_possibleConstructorReturn(this, dropdown_color_getPrototypeOf(DropdownColor).call(this, icon, 'auto', false, 'bottom-left', colorPalette.el));
  }

  dropdown_color_createClass(DropdownColor, [{
    key: "setTitle",
    value: function setTitle(color) {
      this.title.css('border-color', color);
      this.hide();
    }
  }]);

  return DropdownColor;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/dropdown_linetype.js
function dropdown_linetype_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_linetype_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_linetype_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_linetype_typeof(obj); }

function dropdown_linetype_toConsumableArray(arr) { return dropdown_linetype_arrayWithoutHoles(arr) || dropdown_linetype_iterableToArray(arr) || dropdown_linetype_nonIterableSpread(); }

function dropdown_linetype_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function dropdown_linetype_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function dropdown_linetype_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function dropdown_linetype_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_linetype_possibleConstructorReturn(self, call) { if (call && (dropdown_linetype_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_linetype_assertThisInitialized(self); }

function dropdown_linetype_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_linetype_getPrototypeOf(o) { dropdown_linetype_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_linetype_getPrototypeOf(o); }

function dropdown_linetype_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_linetype_setPrototypeOf(subClass, superClass); }

function dropdown_linetype_setPrototypeOf(o, p) { dropdown_linetype_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_linetype_setPrototypeOf(o, p); }





var lineTypes = [['thin', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" style="user-select: none;"></line></svg>'], ['medium', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" style="user-select: none;"><line x1="0" y1="1.0" x2="50" y2="1.0" stroke-width="2" stroke="black" style="user-select: none;"></line></svg>'], ['thick', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" style="user-select: none;"><line x1="0" y1="1.5" x2="50" y2="1.5" stroke-width="3" stroke="black" style="user-select: none;"></line></svg>'], ['dashed', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="2" style="user-select: none;"></line></svg>'], ['dotted', '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="1" style="user-select: none;"></line></svg>']];

var dropdown_linetype_DropdownLineType =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_linetype_inherits(DropdownLineType, _Dropdown);

  function DropdownLineType(type) {
    var _getPrototypeOf2;

    var _this;

    dropdown_linetype_classCallCheck(this, DropdownLineType);

    var icon = new icon_Icon('line-type');
    var beforei = 0;
    var lineTypeEls = lineTypes.map(function (it, iti) {
      return element_h('div', "".concat(cssPrefix, "-item state ").concat(type === it[0] ? 'checked' : '')).on('click', function () {
        lineTypeEls[beforei].toggle('checked');
        lineTypeEls[iti].toggle('checked');
        beforei = iti;

        _this.hide();

        _this.change(it);
      }).child(element_h('div', "".concat(cssPrefix, "-line-type")).html(it[1]));
    });
    return _this = dropdown_linetype_possibleConstructorReturn(this, (_getPrototypeOf2 = dropdown_linetype_getPrototypeOf(DropdownLineType)).call.apply(_getPrototypeOf2, [this, icon, 'auto', false, 'bottom-left'].concat(dropdown_linetype_toConsumableArray(lineTypeEls))));
  }

  return DropdownLineType;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/border_palette.js
function border_palette_toConsumableArray(arr) { return border_palette_arrayWithoutHoles(arr) || border_palette_iterableToArray(arr) || border_palette_nonIterableSpread(); }

function border_palette_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function border_palette_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function border_palette_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function border_palette_slicedToArray(arr, i) { return border_palette_arrayWithHoles(arr) || border_palette_iterableToArrayLimit(arr, i) || border_palette_nonIterableRest(); }

function border_palette_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function border_palette_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function border_palette_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function border_palette_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







function buildTable() {
  var _h;

  return element_h('table', '').child((_h = element_h('tbody', '')).children.apply(_h, arguments));
}

function border_palette_buildTd(iconName) {
  var _this = this;

  return element_h('td', '').child(element_h('div', "".concat(cssPrefix, "-border-palette-cell")).child(new icon_Icon("border-".concat(iconName))).on('click', function () {
    _this.mode = iconName;
    var mode = _this.mode,
        style = _this.style,
        color = _this.color;

    _this.change({
      mode: mode,
      style: style,
      color: color
    });
  }));
}

var border_palette_BorderPalette = function BorderPalette() {
  var _this2 = this,
      _h2,
      _h3;

  border_palette_classCallCheck(this, BorderPalette);

  this.color = '#000';
  this.style = 'thin';
  this.mode = 'all';

  this.change = function () {};

  this.ddColor = new dropdown_color_DropdownColor('line-color', this.color);

  this.ddColor.change = function (color) {
    _this2.color = color;
  };

  this.ddType = new dropdown_linetype_DropdownLineType(this.style);

  this.ddType.change = function (_ref) {
    var _ref2 = border_palette_slicedToArray(_ref, 1),
        s = _ref2[0];

    _this2.style = s;
  };

  this.el = element_h('div', "".concat(cssPrefix, "-border-palette"));
  var table = buildTable(element_h('tr', '').children(element_h('td', "".concat(cssPrefix, "-border-palette-left")).child(buildTable((_h2 = element_h('tr', '')).children.apply(_h2, border_palette_toConsumableArray(['all', 'inside', 'horizontal', 'vertical', 'outside'].map(function (it) {
    return border_palette_buildTd.call(_this2, it);
  }))), (_h3 = element_h('tr', '')).children.apply(_h3, border_palette_toConsumableArray(['left', 'top', 'right', 'bottom', 'none'].map(function (it) {
    return border_palette_buildTd.call(_this2, it);
  }))))), element_h('td', "".concat(cssPrefix, "-border-palette-right")).children(element_h('div', "".concat(cssPrefix, "-toolbar-btn")).child(this.ddColor.el), element_h('div', "".concat(cssPrefix, "-toolbar-btn")).child(this.ddType.el))));
  this.el.child(table);
};


// CONCATENATED MODULE: ./src/component/dropdown_border.js
function dropdown_border_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_border_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_border_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_border_typeof(obj); }

function dropdown_border_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_border_possibleConstructorReturn(self, call) { if (call && (dropdown_border_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_border_assertThisInitialized(self); }

function dropdown_border_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_border_getPrototypeOf(o) { dropdown_border_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_border_getPrototypeOf(o); }

function dropdown_border_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_border_setPrototypeOf(subClass, superClass); }

function dropdown_border_setPrototypeOf(o, p) { dropdown_border_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_border_setPrototypeOf(o, p); }





var dropdown_border_DropdownBorder =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_border_inherits(DropdownBorder, _Dropdown);

  function DropdownBorder() {
    var _this;

    dropdown_border_classCallCheck(this, DropdownBorder);

    var icon = new icon_Icon('border-all');
    var borderPalette = new border_palette_BorderPalette();

    borderPalette.change = function (v) {
      _this.change(v);

      _this.hide();
    };

    return _this = dropdown_border_possibleConstructorReturn(this, dropdown_border_getPrototypeOf(DropdownBorder).call(this, icon, 'auto', false, 'bottom-left', borderPalette.el));
  }

  return DropdownBorder;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/toolbar/border.js
function border_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { border_typeof = function _typeof(obj) { return typeof obj; }; } else { border_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return border_typeof(obj); }

function border_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function border_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function border_createClass(Constructor, protoProps, staticProps) { if (protoProps) border_defineProperties(Constructor.prototype, protoProps); if (staticProps) border_defineProperties(Constructor, staticProps); return Constructor; }

function border_possibleConstructorReturn(self, call) { if (call && (border_typeof(call) === "object" || typeof call === "function")) { return call; } return border_assertThisInitialized(self); }

function border_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function border_getPrototypeOf(o) { border_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return border_getPrototypeOf(o); }

function border_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) border_setPrototypeOf(subClass, superClass); }

function border_setPrototypeOf(o, p) { border_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return border_setPrototypeOf(o, p); }




var border_Border =
/*#__PURE__*/
function (_DropdownItem) {
  border_inherits(Border, _DropdownItem);

  function Border() {
    border_classCallCheck(this, Border);

    return border_possibleConstructorReturn(this, border_getPrototypeOf(Border).call(this, 'border'));
  }

  border_createClass(Border, [{
    key: "dropdown",
    value: function dropdown() {
      return new dropdown_border_DropdownBorder();
    }
  }]);

  return Border;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/toolbar/icon_item.js
function icon_item_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { icon_item_typeof = function _typeof(obj) { return typeof obj; }; } else { icon_item_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return icon_item_typeof(obj); }

function icon_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function icon_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function icon_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) icon_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) icon_item_defineProperties(Constructor, staticProps); return Constructor; }

function icon_item_possibleConstructorReturn(self, call) { if (call && (icon_item_typeof(call) === "object" || typeof call === "function")) { return call; } return icon_item_assertThisInitialized(self); }

function icon_item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function icon_item_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { icon_item_get = Reflect.get; } else { icon_item_get = function _get(target, property, receiver) { var base = icon_item_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return icon_item_get(target, property, receiver || target); }

function icon_item_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = icon_item_getPrototypeOf(object); if (object === null) break; } return object; }

function icon_item_getPrototypeOf(o) { icon_item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return icon_item_getPrototypeOf(o); }

function icon_item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) icon_item_setPrototypeOf(subClass, superClass); }

function icon_item_setPrototypeOf(o, p) { icon_item_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return icon_item_setPrototypeOf(o, p); }




var icon_item_IconItem =
/*#__PURE__*/
function (_Item) {
  icon_item_inherits(IconItem, _Item);

  function IconItem() {
    icon_item_classCallCheck(this, IconItem);

    return icon_item_possibleConstructorReturn(this, icon_item_getPrototypeOf(IconItem).apply(this, arguments));
  }

  icon_item_createClass(IconItem, [{
    key: "element",
    value: function element() {
      var _this = this;

      return icon_item_get(icon_item_getPrototypeOf(IconItem.prototype), "element", this).call(this).child(new icon_Icon(this.tag)).on('click', function () {
        return _this.change(_this.tag);
      });
    }
  }, {
    key: "setState",
    value: function setState(disabled) {
      this.el.disabled(disabled);
    }
  }]);

  return IconItem;
}(item_Item);


// CONCATENATED MODULE: ./src/component/toolbar/clearformat.js
function clearformat_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clearformat_typeof = function _typeof(obj) { return typeof obj; }; } else { clearformat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clearformat_typeof(obj); }

function clearformat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clearformat_possibleConstructorReturn(self, call) { if (call && (clearformat_typeof(call) === "object" || typeof call === "function")) { return call; } return clearformat_assertThisInitialized(self); }

function clearformat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function clearformat_getPrototypeOf(o) { clearformat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return clearformat_getPrototypeOf(o); }

function clearformat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) clearformat_setPrototypeOf(subClass, superClass); }

function clearformat_setPrototypeOf(o, p) { clearformat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return clearformat_setPrototypeOf(o, p); }



var Clearformat =
/*#__PURE__*/
function (_IconItem) {
  clearformat_inherits(Clearformat, _IconItem);

  function Clearformat() {
    clearformat_classCallCheck(this, Clearformat);

    return clearformat_possibleConstructorReturn(this, clearformat_getPrototypeOf(Clearformat).call(this, 'clearformat'));
  }

  return Clearformat;
}(icon_item_IconItem);


// CONCATENATED MODULE: ./src/component/toolbar/paintformat.js
function paintformat_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { paintformat_typeof = function _typeof(obj) { return typeof obj; }; } else { paintformat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return paintformat_typeof(obj); }

function paintformat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function paintformat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function paintformat_createClass(Constructor, protoProps, staticProps) { if (protoProps) paintformat_defineProperties(Constructor.prototype, protoProps); if (staticProps) paintformat_defineProperties(Constructor, staticProps); return Constructor; }

function paintformat_possibleConstructorReturn(self, call) { if (call && (paintformat_typeof(call) === "object" || typeof call === "function")) { return call; } return paintformat_assertThisInitialized(self); }

function paintformat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function paintformat_getPrototypeOf(o) { paintformat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return paintformat_getPrototypeOf(o); }

function paintformat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) paintformat_setPrototypeOf(subClass, superClass); }

function paintformat_setPrototypeOf(o, p) { paintformat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return paintformat_setPrototypeOf(o, p); }



var Paintformat =
/*#__PURE__*/
function (_ToggleItem) {
  paintformat_inherits(Paintformat, _ToggleItem);

  function Paintformat() {
    paintformat_classCallCheck(this, Paintformat);

    return paintformat_possibleConstructorReturn(this, paintformat_getPrototypeOf(Paintformat).call(this, 'paintformat'));
  }

  paintformat_createClass(Paintformat, [{
    key: "setState",
    value: function setState() {}
  }]);

  return Paintformat;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/text_color.js
function text_color_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { text_color_typeof = function _typeof(obj) { return typeof obj; }; } else { text_color_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return text_color_typeof(obj); }

function text_color_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function text_color_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function text_color_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_color_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_color_defineProperties(Constructor, staticProps); return Constructor; }

function text_color_possibleConstructorReturn(self, call) { if (call && (text_color_typeof(call) === "object" || typeof call === "function")) { return call; } return text_color_assertThisInitialized(self); }

function text_color_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function text_color_getPrototypeOf(o) { text_color_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return text_color_getPrototypeOf(o); }

function text_color_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) text_color_setPrototypeOf(subClass, superClass); }

function text_color_setPrototypeOf(o, p) { text_color_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return text_color_setPrototypeOf(o, p); }




var text_color_TextColor =
/*#__PURE__*/
function (_DropdownItem) {
  text_color_inherits(TextColor, _DropdownItem);

  function TextColor(color) {
    text_color_classCallCheck(this, TextColor);

    return text_color_possibleConstructorReturn(this, text_color_getPrototypeOf(TextColor).call(this, 'color', undefined, color));
  }

  text_color_createClass(TextColor, [{
    key: "dropdown",
    value: function dropdown() {
      var tag = this.tag,
          value = this.value;
      return new dropdown_color_DropdownColor(tag, value);
    }
  }]);

  return TextColor;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/toolbar/fill_color.js
function fill_color_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { fill_color_typeof = function _typeof(obj) { return typeof obj; }; } else { fill_color_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return fill_color_typeof(obj); }

function fill_color_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fill_color_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fill_color_createClass(Constructor, protoProps, staticProps) { if (protoProps) fill_color_defineProperties(Constructor.prototype, protoProps); if (staticProps) fill_color_defineProperties(Constructor, staticProps); return Constructor; }

function fill_color_possibleConstructorReturn(self, call) { if (call && (fill_color_typeof(call) === "object" || typeof call === "function")) { return call; } return fill_color_assertThisInitialized(self); }

function fill_color_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function fill_color_getPrototypeOf(o) { fill_color_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fill_color_getPrototypeOf(o); }

function fill_color_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) fill_color_setPrototypeOf(subClass, superClass); }

function fill_color_setPrototypeOf(o, p) { fill_color_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fill_color_setPrototypeOf(o, p); }




var fill_color_FillColor =
/*#__PURE__*/
function (_DropdownItem) {
  fill_color_inherits(FillColor, _DropdownItem);

  function FillColor(color) {
    fill_color_classCallCheck(this, FillColor);

    return fill_color_possibleConstructorReturn(this, fill_color_getPrototypeOf(FillColor).call(this, 'bgcolor', undefined, color));
  }

  fill_color_createClass(FillColor, [{
    key: "dropdown",
    value: function dropdown() {
      var tag = this.tag,
          value = this.value;
      return new dropdown_color_DropdownColor(tag, value);
    }
  }]);

  return FillColor;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/dropdown_fontsize.js
function dropdown_fontsize_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_fontsize_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_fontsize_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_fontsize_typeof(obj); }

function dropdown_fontsize_toConsumableArray(arr) { return dropdown_fontsize_arrayWithoutHoles(arr) || dropdown_fontsize_iterableToArray(arr) || dropdown_fontsize_nonIterableSpread(); }

function dropdown_fontsize_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function dropdown_fontsize_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function dropdown_fontsize_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function dropdown_fontsize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_fontsize_possibleConstructorReturn(self, call) { if (call && (dropdown_fontsize_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_fontsize_assertThisInitialized(self); }

function dropdown_fontsize_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_fontsize_getPrototypeOf(o) { dropdown_fontsize_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_fontsize_getPrototypeOf(o); }

function dropdown_fontsize_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_fontsize_setPrototypeOf(subClass, superClass); }

function dropdown_fontsize_setPrototypeOf(o, p) { dropdown_fontsize_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_fontsize_setPrototypeOf(o, p); }






var dropdown_fontsize_DropdownFontSize =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_fontsize_inherits(DropdownFontSize, _Dropdown);

  function DropdownFontSize() {
    var _getPrototypeOf2;

    var _this;

    dropdown_fontsize_classCallCheck(this, DropdownFontSize);

    var nfontSizes = fontSizes.map(function (it) {
      return element_h('div', "".concat(cssPrefix, "-item")).on('click', function () {
        _this.setTitle("".concat(it.pt));

        _this.change(it);
      }).child("".concat(it.pt));
    });
    return _this = dropdown_fontsize_possibleConstructorReturn(this, (_getPrototypeOf2 = dropdown_fontsize_getPrototypeOf(DropdownFontSize)).call.apply(_getPrototypeOf2, [this, '10', '60px', true, 'bottom-left'].concat(dropdown_fontsize_toConsumableArray(nfontSizes))));
  }

  return DropdownFontSize;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/toolbar/font_size.js
function font_size_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { font_size_typeof = function _typeof(obj) { return typeof obj; }; } else { font_size_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return font_size_typeof(obj); }

function font_size_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function font_size_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function font_size_createClass(Constructor, protoProps, staticProps) { if (protoProps) font_size_defineProperties(Constructor.prototype, protoProps); if (staticProps) font_size_defineProperties(Constructor, staticProps); return Constructor; }

function font_size_possibleConstructorReturn(self, call) { if (call && (font_size_typeof(call) === "object" || typeof call === "function")) { return call; } return font_size_assertThisInitialized(self); }

function font_size_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function font_size_getPrototypeOf(o) { font_size_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return font_size_getPrototypeOf(o); }

function font_size_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) font_size_setPrototypeOf(subClass, superClass); }

function font_size_setPrototypeOf(o, p) { font_size_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return font_size_setPrototypeOf(o, p); }




var font_size_Format =
/*#__PURE__*/
function (_DropdownItem) {
  font_size_inherits(Format, _DropdownItem);

  function Format() {
    font_size_classCallCheck(this, Format);

    return font_size_possibleConstructorReturn(this, font_size_getPrototypeOf(Format).call(this, 'font-size'));
  }

  font_size_createClass(Format, [{
    key: "getValue",
    value: function getValue(it) {
      return it.pt;
    }
  }, {
    key: "dropdown",
    value: function dropdown() {
      return new dropdown_fontsize_DropdownFontSize();
    }
  }]);

  return Format;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/dropdown_font.js
function dropdown_font_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_font_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_font_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_font_typeof(obj); }

function dropdown_font_toConsumableArray(arr) { return dropdown_font_arrayWithoutHoles(arr) || dropdown_font_iterableToArray(arr) || dropdown_font_nonIterableSpread(); }

function dropdown_font_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function dropdown_font_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function dropdown_font_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function dropdown_font_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_font_possibleConstructorReturn(self, call) { if (call && (dropdown_font_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_font_assertThisInitialized(self); }

function dropdown_font_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_font_getPrototypeOf(o) { dropdown_font_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_font_getPrototypeOf(o); }

function dropdown_font_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_font_setPrototypeOf(subClass, superClass); }

function dropdown_font_setPrototypeOf(o, p) { dropdown_font_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_font_setPrototypeOf(o, p); }






var dropdown_font_DropdownFont =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_font_inherits(DropdownFont, _Dropdown);

  function DropdownFont() {
    var _getPrototypeOf2;

    var _this;

    dropdown_font_classCallCheck(this, DropdownFont);

    var nfonts = baseFonts.map(function (it) {
      return element_h('div', "".concat(cssPrefix, "-item")).on('click', function () {
        _this.setTitle(it.title);

        _this.change(it);
      }).child(it.title);
    });
    return _this = dropdown_font_possibleConstructorReturn(this, (_getPrototypeOf2 = dropdown_font_getPrototypeOf(DropdownFont)).call.apply(_getPrototypeOf2, [this, baseFonts[0].title, '160px', true, 'bottom-left'].concat(dropdown_font_toConsumableArray(nfonts))));
  }

  return DropdownFont;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/toolbar/font.js
function font_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { font_typeof = function _typeof(obj) { return typeof obj; }; } else { font_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return font_typeof(obj); }

function font_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function font_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function font_createClass(Constructor, protoProps, staticProps) { if (protoProps) font_defineProperties(Constructor.prototype, protoProps); if (staticProps) font_defineProperties(Constructor, staticProps); return Constructor; }

function font_possibleConstructorReturn(self, call) { if (call && (font_typeof(call) === "object" || typeof call === "function")) { return call; } return font_assertThisInitialized(self); }

function font_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function font_getPrototypeOf(o) { font_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return font_getPrototypeOf(o); }

function font_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) font_setPrototypeOf(subClass, superClass); }

function font_setPrototypeOf(o, p) { font_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return font_setPrototypeOf(o, p); }




var font_Font =
/*#__PURE__*/
function (_DropdownItem) {
  font_inherits(Font, _DropdownItem);

  function Font() {
    font_classCallCheck(this, Font);

    return font_possibleConstructorReturn(this, font_getPrototypeOf(Font).call(this, 'font-name'));
  }

  font_createClass(Font, [{
    key: "getValue",
    value: function getValue(it) {
      return it.key;
    }
  }, {
    key: "dropdown",
    value: function dropdown() {
      return new dropdown_font_DropdownFont();
    }
  }]);

  return Font;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/dropdown_format.js
function dropdown_format_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_format_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_format_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_format_typeof(obj); }

function dropdown_format_toConsumableArray(arr) { return dropdown_format_arrayWithoutHoles(arr) || dropdown_format_iterableToArray(arr) || dropdown_format_nonIterableSpread(); }

function dropdown_format_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function dropdown_format_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function dropdown_format_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function dropdown_format_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_format_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_format_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_format_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_format_defineProperties(Constructor, staticProps); return Constructor; }

function dropdown_format_possibleConstructorReturn(self, call) { if (call && (dropdown_format_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_format_assertThisInitialized(self); }

function dropdown_format_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_format_getPrototypeOf(o) { dropdown_format_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_format_getPrototypeOf(o); }

function dropdown_format_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_format_setPrototypeOf(subClass, superClass); }

function dropdown_format_setPrototypeOf(o, p) { dropdown_format_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_format_setPrototypeOf(o, p); }






var dropdown_format_DropdownFormat =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_format_inherits(DropdownFormat, _Dropdown);

  function DropdownFormat() {
    var _getPrototypeOf2;

    var _this;

    dropdown_format_classCallCheck(this, DropdownFormat);

    var nformats = baseFormats.slice(0);
    nformats.splice(2, 0, {
      key: 'divider'
    });
    nformats.splice(8, 0, {
      key: 'divider'
    });
    nformats = nformats.map(function (it) {
      var item = element_h('div', "".concat(cssPrefix, "-item"));

      if (it.key === 'divider') {
        item.addClass('divider');
      } else {
        item.child(it.title()).on('click', function () {
          _this.setTitle(it.title());

          _this.change(it);
        });
        if (it.label) item.child(element_h('div', 'label').html(it.label));
      }

      return item;
    });
    return _this = dropdown_format_possibleConstructorReturn(this, (_getPrototypeOf2 = dropdown_format_getPrototypeOf(DropdownFormat)).call.apply(_getPrototypeOf2, [this, 'Normal', '220px', true, 'bottom-left'].concat(dropdown_format_toConsumableArray(nformats))));
  }

  dropdown_format_createClass(DropdownFormat, [{
    key: "setTitle",
    value: function setTitle(key) {
      for (var i = 0; i < baseFormats.length; i += 1) {
        if (baseFormats[i].key === key) {
          this.title.html(baseFormats[i].title());
        }
      }

      this.hide();
    }
  }]);

  return DropdownFormat;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/toolbar/format.js
function format_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { format_typeof = function _typeof(obj) { return typeof obj; }; } else { format_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return format_typeof(obj); }

function format_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function format_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function format_createClass(Constructor, protoProps, staticProps) { if (protoProps) format_defineProperties(Constructor.prototype, protoProps); if (staticProps) format_defineProperties(Constructor, staticProps); return Constructor; }

function format_possibleConstructorReturn(self, call) { if (call && (format_typeof(call) === "object" || typeof call === "function")) { return call; } return format_assertThisInitialized(self); }

function format_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function format_getPrototypeOf(o) { format_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return format_getPrototypeOf(o); }

function format_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) format_setPrototypeOf(subClass, superClass); }

function format_setPrototypeOf(o, p) { format_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return format_setPrototypeOf(o, p); }




var format_Format =
/*#__PURE__*/
function (_DropdownItem) {
  format_inherits(Format, _DropdownItem);

  function Format() {
    format_classCallCheck(this, Format);

    return format_possibleConstructorReturn(this, format_getPrototypeOf(Format).call(this, 'format'));
  }

  format_createClass(Format, [{
    key: "getValue",
    value: function getValue(it) {
      return it.key;
    }
  }, {
    key: "dropdown",
    value: function dropdown() {
      return new dropdown_format_DropdownFormat();
    }
  }]);

  return Format;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/dropdown_formula.js
function dropdown_formula_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_formula_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_formula_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_formula_typeof(obj); }

function dropdown_formula_toConsumableArray(arr) { return dropdown_formula_arrayWithoutHoles(arr) || dropdown_formula_iterableToArray(arr) || dropdown_formula_nonIterableSpread(); }

function dropdown_formula_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function dropdown_formula_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function dropdown_formula_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function dropdown_formula_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_formula_possibleConstructorReturn(self, call) { if (call && (dropdown_formula_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_formula_assertThisInitialized(self); }

function dropdown_formula_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_formula_getPrototypeOf(o) { dropdown_formula_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_formula_getPrototypeOf(o); }

function dropdown_formula_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_formula_setPrototypeOf(subClass, superClass); }

function dropdown_formula_setPrototypeOf(o, p) { dropdown_formula_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_formula_setPrototypeOf(o, p); }







var dropdown_formula_DropdownFormula =
/*#__PURE__*/
function (_Dropdown) {
  dropdown_formula_inherits(DropdownFormula, _Dropdown);

  function DropdownFormula() {
    var _getPrototypeOf2;

    var _this;

    dropdown_formula_classCallCheck(this, DropdownFormula);

    var nformulas = baseFormulas.map(function (it) {
      return element_h('div', "".concat(cssPrefix, "-item")).on('click', function () {
        _this.hide();

        _this.change(it);
      }).child(it.key);
    });
    return _this = dropdown_formula_possibleConstructorReturn(this, (_getPrototypeOf2 = dropdown_formula_getPrototypeOf(DropdownFormula)).call.apply(_getPrototypeOf2, [this, new icon_Icon('formula'), '180px', true, 'bottom-left'].concat(dropdown_formula_toConsumableArray(nformulas))));
  }

  return DropdownFormula;
}(dropdown_Dropdown);


// CONCATENATED MODULE: ./src/component/toolbar/formula.js
function formula_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { formula_typeof = function _typeof(obj) { return typeof obj; }; } else { formula_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return formula_typeof(obj); }

function formula_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function formula_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function formula_createClass(Constructor, protoProps, staticProps) { if (protoProps) formula_defineProperties(Constructor.prototype, protoProps); if (staticProps) formula_defineProperties(Constructor, staticProps); return Constructor; }

function formula_possibleConstructorReturn(self, call) { if (call && (formula_typeof(call) === "object" || typeof call === "function")) { return call; } return formula_assertThisInitialized(self); }

function formula_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function formula_getPrototypeOf(o) { formula_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return formula_getPrototypeOf(o); }

function formula_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) formula_setPrototypeOf(subClass, superClass); }

function formula_setPrototypeOf(o, p) { formula_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return formula_setPrototypeOf(o, p); }




var formula_Format =
/*#__PURE__*/
function (_DropdownItem) {
  formula_inherits(Format, _DropdownItem);

  function Format() {
    formula_classCallCheck(this, Format);

    return formula_possibleConstructorReturn(this, formula_getPrototypeOf(Format).call(this, 'formula'));
  }

  formula_createClass(Format, [{
    key: "getValue",
    value: function getValue(it) {
      return it.key;
    }
  }, {
    key: "dropdown",
    value: function dropdown() {
      return new dropdown_formula_DropdownFormula();
    }
  }]);

  return Format;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/toolbar/freeze.js
function freeze_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { freeze_typeof = function _typeof(obj) { return typeof obj; }; } else { freeze_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return freeze_typeof(obj); }

function freeze_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function freeze_possibleConstructorReturn(self, call) { if (call && (freeze_typeof(call) === "object" || typeof call === "function")) { return call; } return freeze_assertThisInitialized(self); }

function freeze_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function freeze_getPrototypeOf(o) { freeze_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return freeze_getPrototypeOf(o); }

function freeze_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) freeze_setPrototypeOf(subClass, superClass); }

function freeze_setPrototypeOf(o, p) { freeze_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return freeze_setPrototypeOf(o, p); }



var Freeze =
/*#__PURE__*/
function (_ToggleItem) {
  freeze_inherits(Freeze, _ToggleItem);

  function Freeze() {
    freeze_classCallCheck(this, Freeze);

    return freeze_possibleConstructorReturn(this, freeze_getPrototypeOf(Freeze).call(this, 'freeze'));
  }

  return Freeze;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/merge.js
function merge_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { merge_typeof = function _typeof(obj) { return typeof obj; }; } else { merge_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return merge_typeof(obj); }

function toolbar_merge_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toolbar_merge_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function toolbar_merge_createClass(Constructor, protoProps, staticProps) { if (protoProps) toolbar_merge_defineProperties(Constructor.prototype, protoProps); if (staticProps) toolbar_merge_defineProperties(Constructor, staticProps); return Constructor; }

function merge_possibleConstructorReturn(self, call) { if (call && (merge_typeof(call) === "object" || typeof call === "function")) { return call; } return merge_assertThisInitialized(self); }

function merge_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function merge_getPrototypeOf(o) { merge_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return merge_getPrototypeOf(o); }

function merge_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) merge_setPrototypeOf(subClass, superClass); }

function merge_setPrototypeOf(o, p) { merge_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return merge_setPrototypeOf(o, p); }



var Merge =
/*#__PURE__*/
function (_ToggleItem) {
  merge_inherits(Merge, _ToggleItem);

  function Merge() {
    toolbar_merge_classCallCheck(this, Merge);

    return merge_possibleConstructorReturn(this, merge_getPrototypeOf(Merge).call(this, 'merge'));
  }

  toolbar_merge_createClass(Merge, [{
    key: "setState",
    value: function setState(active, disabled) {
      this.el.active(active).disabled(disabled);
    }
  }]);

  return Merge;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/redo.js
function redo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { redo_typeof = function _typeof(obj) { return typeof obj; }; } else { redo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return redo_typeof(obj); }

function redo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function redo_possibleConstructorReturn(self, call) { if (call && (redo_typeof(call) === "object" || typeof call === "function")) { return call; } return redo_assertThisInitialized(self); }

function redo_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function redo_getPrototypeOf(o) { redo_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return redo_getPrototypeOf(o); }

function redo_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) redo_setPrototypeOf(subClass, superClass); }

function redo_setPrototypeOf(o, p) { redo_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return redo_setPrototypeOf(o, p); }



var Redo =
/*#__PURE__*/
function (_IconItem) {
  redo_inherits(Redo, _IconItem);

  function Redo() {
    redo_classCallCheck(this, Redo);

    return redo_possibleConstructorReturn(this, redo_getPrototypeOf(Redo).call(this, 'redo', 'Ctrl+Y'));
  }

  return Redo;
}(icon_item_IconItem);


// CONCATENATED MODULE: ./src/component/toolbar/undo.js
function undo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { undo_typeof = function _typeof(obj) { return typeof obj; }; } else { undo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return undo_typeof(obj); }

function undo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function undo_possibleConstructorReturn(self, call) { if (call && (undo_typeof(call) === "object" || typeof call === "function")) { return call; } return undo_assertThisInitialized(self); }

function undo_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function undo_getPrototypeOf(o) { undo_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return undo_getPrototypeOf(o); }

function undo_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) undo_setPrototypeOf(subClass, superClass); }

function undo_setPrototypeOf(o, p) { undo_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return undo_setPrototypeOf(o, p); }



var Undo =
/*#__PURE__*/
function (_IconItem) {
  undo_inherits(Undo, _IconItem);

  function Undo() {
    undo_classCallCheck(this, Undo);

    return undo_possibleConstructorReturn(this, undo_getPrototypeOf(Undo).call(this, 'undo', 'Ctrl+Z'));
  }

  return Undo;
}(icon_item_IconItem);


// CONCATENATED MODULE: ./src/component/toolbar/print.js
function print_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { print_typeof = function _typeof(obj) { return typeof obj; }; } else { print_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return print_typeof(obj); }

function toolbar_print_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function print_possibleConstructorReturn(self, call) { if (call && (print_typeof(call) === "object" || typeof call === "function")) { return call; } return print_assertThisInitialized(self); }

function print_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function print_getPrototypeOf(o) { print_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return print_getPrototypeOf(o); }

function print_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) print_setPrototypeOf(subClass, superClass); }

function print_setPrototypeOf(o, p) { print_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return print_setPrototypeOf(o, p); }



var toolbar_print_Print =
/*#__PURE__*/
function (_IconItem) {
  print_inherits(Print, _IconItem);

  function Print() {
    toolbar_print_classCallCheck(this, Print);

    return print_possibleConstructorReturn(this, print_getPrototypeOf(Print).call(this, 'print', 'Ctrl+P'));
  }

  return Print;
}(icon_item_IconItem);


// CONCATENATED MODULE: ./src/component/toolbar/textwrap.js
function textwrap_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { textwrap_typeof = function _typeof(obj) { return typeof obj; }; } else { textwrap_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return textwrap_typeof(obj); }

function textwrap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textwrap_possibleConstructorReturn(self, call) { if (call && (textwrap_typeof(call) === "object" || typeof call === "function")) { return call; } return textwrap_assertThisInitialized(self); }

function textwrap_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function textwrap_getPrototypeOf(o) { textwrap_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return textwrap_getPrototypeOf(o); }

function textwrap_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) textwrap_setPrototypeOf(subClass, superClass); }

function textwrap_setPrototypeOf(o, p) { textwrap_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return textwrap_setPrototypeOf(o, p); }



var Textwrap =
/*#__PURE__*/
function (_ToggleItem) {
  textwrap_inherits(Textwrap, _ToggleItem);

  function Textwrap() {
    textwrap_classCallCheck(this, Textwrap);

    return textwrap_possibleConstructorReturn(this, textwrap_getPrototypeOf(Textwrap).call(this, 'textwrap'));
  }

  return Textwrap;
}(toggle_item_ToggleItem);


// CONCATENATED MODULE: ./src/component/toolbar/more.js
function more_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function more_createClass(Constructor, protoProps, staticProps) { if (protoProps) more_defineProperties(Constructor.prototype, protoProps); if (staticProps) more_defineProperties(Constructor, staticProps); return Constructor; }

function more_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { more_typeof = function _typeof(obj) { return typeof obj; }; } else { more_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return more_typeof(obj); }

function more_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function more_possibleConstructorReturn(self, call) { if (call && (more_typeof(call) === "object" || typeof call === "function")) { return call; } return more_assertThisInitialized(self); }

function more_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function more_getPrototypeOf(o) { more_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return more_getPrototypeOf(o); }

function more_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) more_setPrototypeOf(subClass, superClass); }

function more_setPrototypeOf(o, p) { more_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return more_setPrototypeOf(o, p); }







var more_DropdownMore =
/*#__PURE__*/
function (_Dropdown) {
  more_inherits(DropdownMore, _Dropdown);

  function DropdownMore() {
    var _this;

    more_classCallCheck(this, DropdownMore);

    var icon = new icon_Icon('ellipsis');
    var moreBtns = element_h('div', "".concat(cssPrefix, "-toolbar-more"));
    _this = more_possibleConstructorReturn(this, more_getPrototypeOf(DropdownMore).call(this, icon, 'auto', false, 'bottom-right', moreBtns));
    _this.moreBtns = moreBtns;

    _this.contentEl.css('max-width', '420px');

    return _this;
  }

  return DropdownMore;
}(dropdown_Dropdown);

var More =
/*#__PURE__*/
function (_DropdownItem) {
  more_inherits(More, _DropdownItem);

  function More() {
    var _this2;

    more_classCallCheck(this, More);

    _this2 = more_possibleConstructorReturn(this, more_getPrototypeOf(More).call(this, 'more'));

    _this2.el.hide();

    return _this2;
  }

  more_createClass(More, [{
    key: "dropdown",
    value: function dropdown() {
      return new more_DropdownMore();
    }
  }, {
    key: "show",
    value: function show() {
      this.el.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.hide();
    }
  }]);

  return More;
}(DropdownItem);


// CONCATENATED MODULE: ./src/component/toolbar/index.js
function toolbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toolbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function toolbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) toolbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) toolbar_defineProperties(Constructor, staticProps); return Constructor; }

function toolbar_slicedToArray(arr, i) { return toolbar_arrayWithHoles(arr) || toolbar_iterableToArrayLimit(arr, i) || toolbar_nonIterableRest(); }

function toolbar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function toolbar_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function toolbar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global window */




























function buildDivider() {
  return element_h('div', "".concat(cssPrefix, "-toolbar-divider"));
}

function initBtns2() {
  var _this = this;

  this.btns2 = [];
  this.items.forEach(function (it) {
    if (Array.isArray(it)) {
      it.forEach(function (_ref) {
        var el = _ref.el;
        var rect = el.box();

        var _el$computedStyle = el.computedStyle(),
            marginLeft = _el$computedStyle.marginLeft,
            marginRight = _el$computedStyle.marginRight;

        _this.btns2.push([el, rect.width + parseInt(marginLeft, 10) + parseInt(marginRight, 10)]);
      });
    } else {
      var rect = it.box();

      var _it$computedStyle = it.computedStyle(),
          marginLeft = _it$computedStyle.marginLeft,
          marginRight = _it$computedStyle.marginRight;

      _this.btns2.push([it, rect.width + parseInt(marginLeft, 10) + parseInt(marginRight, 10)]);
    }
  });
}

function moreResize() {
  var _btns$html, _moreBtns$html;

  var el = this.el,
      btns = this.btns,
      moreEl = this.moreEl,
      btns2 = this.btns2;
  var _moreEl$dd = moreEl.dd,
      moreBtns = _moreEl$dd.moreBtns,
      contentEl = _moreEl$dd.contentEl;
  el.css('width', "".concat(this.widthFn(), "px"));
  var elBox = el.box();
  var sumWidth = 160;
  var sumWidth2 = 12;
  var list1 = [];
  var list2 = [];
  btns2.forEach(function (_ref2, index) {
    var _ref3 = toolbar_slicedToArray(_ref2, 2),
        it = _ref3[0],
        w = _ref3[1];

    sumWidth += w;

    if (index === btns2.length - 1 || sumWidth < elBox.width) {
      list1.push(it);
    } else {
      sumWidth2 += w;
      list2.push(it);
    }
  });

  (_btns$html = btns.html('')).children.apply(_btns$html, list1);

  (_moreBtns$html = moreBtns.html('')).children.apply(_moreBtns$html, list2);

  contentEl.css('width', "".concat(sumWidth2, "px"));

  if (list2.length > 0) {
    moreEl.show();
  } else {
    moreEl.hide();
  }
}

function genBtn(it) {
  var _this2 = this;

  var btn = new item_Item();
  btn.el.on('click', function () {
    if (it.onClick) it.onClick(_this2.data.getData(), _this2.data);
  });
  btn.tip = it.tip || '';
  var el = it.el;

  if (it.icon) {
    el = element_h('img').attr('src', it.icon);
  }

  if (el) {
    var icon = element_h('div', "".concat(cssPrefix, "-icon"));
    icon.child(el);
    btn.el.child(icon);
  }

  return btn;
}

var toolbar_Toolbar =
/*#__PURE__*/
function () {
  function Toolbar(data, widthFn) {
    var _this3 = this;

    var isHide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    toolbar_classCallCheck(this, Toolbar);

    this.data = data;

    this.change = function () {};

    this.widthFn = widthFn;
    this.isHide = isHide;
    var style = data.defaultStyle();
    this.items = [[this.undoEl = new Undo(), this.redoEl = new Redo(), new toolbar_print_Print(), this.paintformatEl = new Paintformat(), this.clearformatEl = new Clearformat()], buildDivider(), [this.formatEl = new format_Format()], buildDivider(), [this.fontEl = new font_Font(), this.fontSizeEl = new font_size_Format()], buildDivider(), [this.boldEl = new Bold(), this.italicEl = new Italic(), this.underlineEl = new Underline(), this.strikeEl = new Strike(), this.textColorEl = new text_color_TextColor(style.color)], buildDivider(), [this.fillColorEl = new fill_color_FillColor(style.bgcolor), this.borderEl = new border_Border(), this.mergeEl = new Merge()], buildDivider(), [this.alignEl = new align_Align(style.align), this.valignEl = new valign_Valign(style.valign), this.textwrapEl = new Textwrap()], buildDivider(), [this.freezeEl = new Freeze(), this.autofilterEl = new Autofilter(), this.formulaEl = new formula_Format()]];
    var _data$settings$extend = data.settings.extendToolbar,
        extendToolbar = _data$settings$extend === void 0 ? {} : _data$settings$extend;

    if (extendToolbar.left && extendToolbar.left.length > 0) {
      this.items.unshift(buildDivider());
      var btns = extendToolbar.left.map(genBtn.bind(this));
      this.items.unshift(btns);
    }

    if (extendToolbar.right && extendToolbar.right.length > 0) {
      this.items.push(buildDivider());

      var _btns = extendToolbar.right.map(genBtn.bind(this));

      this.items.push(_btns);
    }

    this.items.push([this.moreEl = new More()]);
    this.el = element_h('div', "".concat(cssPrefix, "-toolbar"));
    this.btns = element_h('div', "".concat(cssPrefix, "-toolbar-btns"));
    this.items.forEach(function (it) {
      if (Array.isArray(it)) {
        it.forEach(function (i) {
          _this3.btns.child(i.el);

          i.change = function () {
            _this3.change.apply(_this3, arguments);
          };
        });
      } else {
        _this3.btns.child(it.el);
      }
    });
    this.el.child(this.btns);

    if (isHide) {
      this.el.hide();
    } else {
      this.reset();
      setTimeout(function () {
        initBtns2.call(_this3);
        moreResize.call(_this3);
      }, 0);
      bind(window, 'resize', function () {
        moreResize.call(_this3);
      });
    }
  }

  toolbar_createClass(Toolbar, [{
    key: "paintformatActive",
    value: function paintformatActive() {
      return this.paintformatEl.active();
    }
  }, {
    key: "paintformatToggle",
    value: function paintformatToggle() {
      this.paintformatEl.toggle();
    }
  }, {
    key: "trigger",
    value: function trigger(type) {
      this["".concat(type, "El")].click();
    }
  }, {
    key: "resetData",
    value: function resetData(data) {
      this.data = data;
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.isHide) return;
      var data = this.data;
      var style = data.getSelectedCellStyle(); // console.log('canUndo:', data.canUndo());

      this.undoEl.setState(!data.canUndo());
      this.redoEl.setState(!data.canRedo());
      this.mergeEl.setState(data.canUnmerge(), !data.selector.multiple());
      this.autofilterEl.setState(!data.canAutofilter()); // this.mergeEl.disabled();
      // console.log('selectedCell:', style, cell);

      var font = style.font,
          format = style.format;
      this.formatEl.setState(format);
      this.fontEl.setState(font.name);
      this.fontSizeEl.setState(font.size);
      this.boldEl.setState(font.bold);
      this.italicEl.setState(font.italic);
      this.underlineEl.setState(style.underline);
      this.strikeEl.setState(style.strike);
      this.textColorEl.setState(style.color);
      this.fillColorEl.setState(style.bgcolor);
      this.alignEl.setState(style.align);
      this.valignEl.setState(style.valign);
      this.textwrapEl.setState(style.textwrap); // console.log('freeze is Active:', data.freezeIsActive());

      this.freezeEl.setState(data.freezeIsActive());
    }
  }]);

  return Toolbar;
}();


// CONCATENATED MODULE: ./src/component/modal.js
function modal_toConsumableArray(arr) { return modal_arrayWithoutHoles(arr) || modal_iterableToArray(arr) || modal_nonIterableSpread(); }

function modal_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function modal_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function modal_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) modal_defineProperties(Constructor, staticProps); return Constructor; }

/* global document */

/* global window */





var modal_Modal =
/*#__PURE__*/
function () {
  function Modal(title, content) {
    var _this = this,
        _h;

    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '600px';

    modal_classCallCheck(this, Modal);

    this.title = title;
    this.el = element_h('div', "".concat(cssPrefix, "-modal")).css('width', width).children(element_h('div', "".concat(cssPrefix, "-modal-header")).children(new icon_Icon('close').on('click.stop', function () {
      return _this.hide();
    }), this.title), (_h = element_h('div', "".concat(cssPrefix, "-modal-content"))).children.apply(_h, modal_toConsumableArray(content))).hide();
  }

  modal_createClass(Modal, [{
    key: "show",
    value: function show() {
      var _this2 = this;

      // dimmer
      this.dimmer = element_h('div', "".concat(cssPrefix, "-dimmer active"));
      document.body.appendChild(this.dimmer.el);

      var _this$el$show$box = this.el.show().box(),
          width = _this$el$show$box.width,
          height = _this$el$show$box.height;

      var _document$documentEle = document.documentElement,
          clientHeight = _document$documentEle.clientHeight,
          clientWidth = _document$documentEle.clientWidth;
      this.el.offset({
        left: (clientWidth - width) / 2,
        top: (clientHeight - height) / 3
      });

      window.xkeydownEsc = function (evt) {
        if (evt.keyCode === 27) {
          _this2.hide();
        }
      };

      bind(window, 'keydown', window.xkeydownEsc);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.hide();
      document.body.removeChild(this.dimmer.el);
      unbind(window, 'keydown', window.xkeydownEsc);
      delete window.xkeydownEsc;
    }
  }]);

  return Modal;
}();


// CONCATENATED MODULE: ./src/component/form_input.js
function form_input_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_input_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_input_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_input_defineProperties(Constructor, staticProps); return Constructor; }




var form_input_FormInput =
/*#__PURE__*/
function () {
  function FormInput(width, hint) {
    var _this = this;

    form_input_classCallCheck(this, FormInput);

    this.vchange = function () {};

    this.el = element_h('div', "".concat(cssPrefix, "-form-input"));
    this.input = element_h('input', '').css('width', width).on('input', function (evt) {
      return _this.vchange(evt);
    }).attr('placeholder', hint);
    this.el.child(this.input);
  }

  form_input_createClass(FormInput, [{
    key: "focus",
    value: function focus() {
      var _this2 = this;

      setTimeout(function () {
        _this2.input.el.focus();
      }, 10);
    }
  }, {
    key: "hint",
    value: function hint(v) {
      this.input.attr('placeholder', v);
    }
  }, {
    key: "val",
    value: function val(v) {
      return this.input.val(v);
    }
  }]);

  return FormInput;
}();


// CONCATENATED MODULE: ./src/component/form_select.js
function form_select_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_select_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_select_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_select_defineProperties(Constructor, staticProps); return Constructor; }





var form_select_FormSelect =
/*#__PURE__*/
function () {
  function FormSelect(key, items, width) {
    var _this = this;

    var getTitle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (it) {
      return it;
    };
    var change = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};

    form_select_classCallCheck(this, FormSelect);

    this.key = key;
    this.getTitle = getTitle;

    this.vchange = function () {};

    this.el = element_h('div', "".concat(cssPrefix, "-form-select"));
    this.suggest = new suggest_Suggest(items.map(function (it) {
      return {
        key: it,
        title: _this.getTitle(it)
      };
    }), function (it) {
      _this.itemClick(it.key);

      change(it.key);

      _this.vchange(it.key);
    }, width, this.el);
    this.el.children(this.itemEl = element_h('div', 'input-text').html(this.getTitle(key)), this.suggest.el).on('click', function () {
      return _this.show();
    });
  }

  form_select_createClass(FormSelect, [{
    key: "show",
    value: function show() {
      this.suggest.search('');
    }
  }, {
    key: "itemClick",
    value: function itemClick(it) {
      this.key = it;
      this.itemEl.html(this.getTitle(it));
    }
  }, {
    key: "val",
    value: function val(v) {
      if (v !== undefined) {
        this.key = v;
        this.itemEl.html(this.getTitle(v));
        return this;
      }

      return this.key;
    }
  }]);

  return FormSelect;
}();


// CONCATENATED MODULE: ./src/component/form_field.js
function form_field_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_field_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_field_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_field_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_field_defineProperties(Constructor, staticProps); return Constructor; }




var patterns = {
  number: /(^\d+$)|(^\d+(\.\d{0,4})?$)/,
  date: /^\d{4}-\d{1,2}-\d{1,2}$/
}; // rule: { required: false, type, pattern: // }

var form_field_FormField =
/*#__PURE__*/
function () {
  function FormField(input, rule, label, labelWidth) {
    var _this = this;

    form_field_classCallCheck(this, FormField);

    this.label = '';
    this.rule = rule;

    if (label) {
      this.label = element_h('label', 'label').css('width', "".concat(labelWidth, "px")).html(label);
    }

    this.tip = element_h('div', 'tip').child('tip').hide();
    this.input = input;

    this.input.vchange = function () {
      return _this.validate();
    };

    this.el = element_h('div', "".concat(cssPrefix, "-form-field")).children(this.label, input.el, this.tip);
  }

  form_field_createClass(FormField, [{
    key: "isShow",
    value: function isShow() {
      return this.el.css('display') !== 'none';
    }
  }, {
    key: "show",
    value: function show() {
      this.el.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.hide();
      return this;
    }
  }, {
    key: "val",
    value: function val(v) {
      return this.input.val(v);
    }
  }, {
    key: "hint",
    value: function hint(_hint) {
      this.input.hint(_hint);
    }
  }, {
    key: "validate",
    value: function validate() {
      var input = this.input,
          rule = this.rule,
          tip = this.tip,
          el = this.el;
      var v = input.val();

      if (rule.required) {
        if (/^\s*$/.test(v)) {
          tip.html(locale_t('validation.required'));
          el.addClass('error');
          return false;
        }
      }

      if (rule.type || rule.pattern) {
        var pattern = rule.pattern || patterns[rule.type];

        if (!pattern.test(v)) {
          tip.html(locale_t('validation.notMatch'));
          el.addClass('error');
          return false;
        }
      }

      el.removeClass('error');
      return true;
    }
  }]);

  return FormField;
}();


// CONCATENATED MODULE: ./src/component/modal_validation.js
function modal_validation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { modal_validation_typeof = function _typeof(obj) { return typeof obj; }; } else { modal_validation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return modal_validation_typeof(obj); }

function modal_validation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modal_validation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modal_validation_createClass(Constructor, protoProps, staticProps) { if (protoProps) modal_validation_defineProperties(Constructor.prototype, protoProps); if (staticProps) modal_validation_defineProperties(Constructor, staticProps); return Constructor; }

function modal_validation_possibleConstructorReturn(self, call) { if (call && (modal_validation_typeof(call) === "object" || typeof call === "function")) { return call; } return modal_validation_assertThisInitialized(self); }

function modal_validation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function modal_validation_getPrototypeOf(o) { modal_validation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return modal_validation_getPrototypeOf(o); }

function modal_validation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) modal_validation_setPrototypeOf(subClass, superClass); }

function modal_validation_setPrototypeOf(o, p) { modal_validation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return modal_validation_setPrototypeOf(o, p); }









var fieldLabelWidth = 100;

var modal_validation_ModalValidation =
/*#__PURE__*/
function (_Modal) {
  modal_validation_inherits(ModalValidation, _Modal);

  function ModalValidation() {
    var _this;

    modal_validation_classCallCheck(this, ModalValidation);

    var mf = new form_field_FormField(new form_select_FormSelect('cell', ['cell'], // cell|row|column
    '100%', function (it) {
      return locale_t("dataValidation.modeType.".concat(it));
    }), {
      required: true
    }, "".concat(locale_t('dataValidation.range'), ":"), fieldLabelWidth);
    var rf = new form_field_FormField(new form_input_FormInput('120px', 'E3 or E3:F12'), {
      required: true,
      pattern: /^([A-Z]{1,2}[1-9]\d*)(:[A-Z]{1,2}[1-9]\d*)?$/
    });
    var cf = new form_field_FormField(new form_select_FormSelect('list', ['list', 'number', 'date', 'phone', 'email'], '100%', function (it) {
      return locale_t("dataValidation.type.".concat(it));
    }, function (it) {
      return _this.criteriaSelected(it);
    }), {
      required: true
    }, "".concat(locale_t('dataValidation.criteria'), ":"), fieldLabelWidth); // operator

    var of = new form_field_FormField(new form_select_FormSelect('be', ['be', 'nbe', 'eq', 'neq', 'lt', 'lte', 'gt', 'gte'], '160px', function (it) {
      return locale_t("dataValidation.operator.".concat(it));
    }, function (it) {
      return _this.criteriaOperatorSelected(it);
    }), {
      required: true
    }).hide(); // min, max

    var minvf = new form_field_FormField(new form_input_FormInput('70px', '10'), {
      required: true
    }).hide();
    var maxvf = new form_field_FormField(new form_input_FormInput('70px', '100'), {
      required: true,
      type: 'number'
    }).hide(); // value

    var svf = new form_field_FormField(new form_input_FormInput('120px', 'a,b,c'), {
      required: true
    });
    var vf = new form_field_FormField(new form_input_FormInput('70px', '10'), {
      required: true,
      type: 'number'
    }).hide();
    _this = modal_validation_possibleConstructorReturn(this, modal_validation_getPrototypeOf(ModalValidation).call(this, locale_t('contextmenu.validation'), [element_h('div', "".concat(cssPrefix, "-form-fields")).children(mf.el, rf.el), element_h('div', "".concat(cssPrefix, "-form-fields")).children(cf.el, of.el, minvf.el, maxvf.el, vf.el, svf.el), element_h('div', "".concat(cssPrefix, "-buttons")).children(new button_Button('cancel').on('click', function () {
      return _this.btnClick('cancel');
    }), new button_Button('remove').on('click', function () {
      return _this.btnClick('remove');
    }), new button_Button('save', 'primary').on('click', function () {
      return _this.btnClick('save');
    }))]));
    _this.mf = mf;
    _this.rf = rf;
    _this.cf = cf;
    _this.of = of;
    _this.minvf = minvf;
    _this.maxvf = maxvf;
    _this.vf = vf;
    _this.svf = svf;

    _this.change = function () {};

    return _this;
  }

  modal_validation_createClass(ModalValidation, [{
    key: "showVf",
    value: function showVf(it) {
      var hint = it === 'date' ? '2018-11-12' : '10';
      var vf = this.vf;
      vf.input.hint(hint);
      vf.show();
    }
  }, {
    key: "criteriaSelected",
    value: function criteriaSelected(it) {
      var of = this.of,
          minvf = this.minvf,
          maxvf = this.maxvf,
          vf = this.vf,
          svf = this.svf;

      if (it === 'date' || it === 'number') {
        of.show();
        minvf.rule.type = it;
        maxvf.rule.type = it;

        if (it === 'date') {
          minvf.hint('2018-11-12');
          maxvf.hint('2019-11-12');
        } else {
          minvf.hint('10');
          maxvf.hint('100');
        }

        minvf.show();
        maxvf.show();
        vf.hide();
        svf.hide();
      } else {
        if (it === 'list') {
          svf.show();
        } else {
          svf.hide();
        }

        vf.hide();
        of.hide();
        minvf.hide();
        maxvf.hide();
      }
    }
  }, {
    key: "criteriaOperatorSelected",
    value: function criteriaOperatorSelected(it) {
      if (!it) return;
      var minvf = this.minvf,
          maxvf = this.maxvf,
          vf = this.vf;

      if (it === 'be' || it === 'nbe') {
        minvf.show();
        maxvf.show();
        vf.hide();
      } else {
        var type = this.cf.val();
        vf.rule.type = type;

        if (type === 'date') {
          vf.hint('2018-11-12');
        } else {
          vf.hint('10');
        }

        vf.show();
        minvf.hide();
        maxvf.hide();
      }
    }
  }, {
    key: "btnClick",
    value: function btnClick(action) {
      if (action === 'cancel') {
        this.hide();
      } else if (action === 'remove') {
        this.change('remove');
        this.hide();
      } else if (action === 'save') {
        // validate
        var attrs = ['mf', 'rf', 'cf', 'of', 'svf', 'vf', 'minvf', 'maxvf'];

        for (var i = 0; i < attrs.length; i += 1) {
          var field = this[attrs[i]]; // console.log('field:', field);

          if (field.isShow()) {
            // console.log('it:', it);
            if (!field.validate()) return;
          }
        }

        var mode = this.mf.val();
        var ref = this.rf.val();
        var type = this.cf.val();
        var operator = this.of.val();
        var value = this.svf.val();

        if (type === 'number' || type === 'date') {
          if (operator === 'be' || operator === 'nbe') {
            value = [this.minvf.val(), this.maxvf.val()];
          } else {
            value = this.vf.val();
          }
        } // console.log(mode, ref, type, operator, value);


        this.change('save', mode, ref, {
          type: type,
          operator: operator,
          required: false,
          value: value
        });
        this.hide();
      }
    } // validation: { mode, ref, validator }

  }, {
    key: "setValue",
    value: function setValue(v) {
      if (v) {
        var mf = this.mf,
            rf = this.rf,
            cf = this.cf,
            of = this.of,
            svf = this.svf,
            vf = this.vf,
            minvf = this.minvf,
            maxvf = this.maxvf;
        var mode = v.mode,
            ref = v.ref,
            validator = v.validator;

        var _ref = validator || {
          type: 'list'
        },
            type = _ref.type,
            operator = _ref.operator,
            value = _ref.value;

        mf.val(mode || 'cell');
        rf.val(ref);
        cf.val(type);
        of.val(operator);

        if (Array.isArray(value)) {
          minvf.val(value[0]);
          maxvf.val(value[1]);
        } else {
          svf.val(value || '');
          vf.val(value || '');
        }

        this.criteriaSelected(type);
        this.criteriaOperatorSelected(operator);
      }

      this.show();
    }
  }]);

  return ModalValidation;
}(modal_Modal);


// CONCATENATED MODULE: ./src/component/sort_filter.js
function sort_filter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sort_filter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sort_filter_createClass(Constructor, protoProps, staticProps) { if (protoProps) sort_filter_defineProperties(Constructor.prototype, protoProps); if (staticProps) sort_filter_defineProperties(Constructor, staticProps); return Constructor; }







function sort_filter_buildMenu(clsName) {
  return element_h('div', "".concat(cssPrefix, "-item ").concat(clsName));
}

function buildSortItem(it) {
  var _this = this;

  return sort_filter_buildMenu('state').child(locale_t("sort.".concat(it))).on('click.stop', function () {
    return _this.itemClick(it);
  });
}

function buildFilterBody(items) {
  var _this2 = this;

  var filterbEl = this.filterbEl,
      filterValues = this.filterValues;
  filterbEl.html('');
  var itemKeys = Object.keys(items);
  itemKeys.forEach(function (it, index) {
    var cnt = items[it];
    var active = filterValues.includes(it) ? 'checked' : '';
    filterbEl.child(element_h('div', "".concat(cssPrefix, "-item state ").concat(active)).on('click.stop', function () {
      return _this2.filterClick(index, it);
    }).children(it === '' ? locale_t('filter.empty') : it, element_h('div', 'label').html("(".concat(cnt, ")"))));
  });
}

function resetFilterHeader() {
  var filterhEl = this.filterhEl,
      filterValues = this.filterValues,
      values = this.values;
  filterhEl.html("".concat(filterValues.length, " / ").concat(values.length));
  filterhEl.checked(filterValues.length === values.length);
}

var sort_filter_SortFilter =
/*#__PURE__*/
function () {
  function SortFilter() {
    var _this3 = this;

    sort_filter_classCallCheck(this, SortFilter);

    this.filterbEl = element_h('div', "".concat(cssPrefix, "-body"));
    this.filterhEl = element_h('div', "".concat(cssPrefix, "-header state")).on('click.stop', function () {
      return _this3.filterClick(0, 'all');
    });
    this.el = element_h('div', "".concat(cssPrefix, "-sort-filter")).children(this.sortAscEl = buildSortItem.call(this, 'asc'), this.sortDescEl = buildSortItem.call(this, 'desc'), sort_filter_buildMenu('divider'), element_h('div', "".concat(cssPrefix, "-filter")).children(this.filterhEl, this.filterbEl), element_h('div', "".concat(cssPrefix, "-buttons")).children(new button_Button('cancel').on('click', function () {
      return _this3.btnClick('cancel');
    }), new button_Button('ok', 'primary').on('click', function () {
      return _this3.btnClick('ok');
    }))).hide(); // this.setFilters(['test1', 'test2', 'text3']);

    this.ci = null;
    this.sortDesc = null;
    this.values = null;
    this.filterValues = [];
  }

  sort_filter_createClass(SortFilter, [{
    key: "btnClick",
    value: function btnClick(it) {
      if (it === 'ok') {
        var ci = this.ci,
            sort = this.sort,
            filterValues = this.filterValues;

        if (this.ok) {
          this.ok(ci, sort, 'in', filterValues);
        }
      }

      this.hide();
    }
  }, {
    key: "itemClick",
    value: function itemClick(it) {
      // console.log('it:', it);
      this.sort = it;
      var sortAscEl = this.sortAscEl,
          sortDescEl = this.sortDescEl;
      sortAscEl.checked(it === 'asc');
      sortDescEl.checked(it === 'desc');
    }
  }, {
    key: "filterClick",
    value: function filterClick(index, it) {
      // console.log('index:', index, it);
      var filterbEl = this.filterbEl,
          filterValues = this.filterValues,
          values = this.values;
      var children = filterbEl.children();

      if (it === 'all') {
        if (children.length === filterValues.length) {
          this.filterValues = [];
          children.forEach(function (i) {
            return element_h(i).checked(false);
          });
        } else {
          this.filterValues = Array.from(values);
          children.forEach(function (i) {
            return element_h(i).checked(true);
          });
        }
      } else {
        var checked = element_h(children[index]).toggle('checked');

        if (checked) {
          filterValues.push(it);
        } else {
          filterValues.splice(filterValues.findIndex(function (i) {
            return i === it;
          }), 1);
        }
      }

      resetFilterHeader.call(this);
    } // v: autoFilter
    // items: {value: cnt}
    // sort { ci, order }

  }, {
    key: "set",
    value: function set(ci, items, filter, sort) {
      this.ci = ci;
      var sortAscEl = this.sortAscEl,
          sortDescEl = this.sortDescEl;

      if (sort !== null) {
        this.sort = sort.order;
        sortAscEl.checked(sort.asc());
        sortDescEl.checked(sort.desc());
      } else {
        this.sortDesc = null;
        sortAscEl.checked(false);
        sortDescEl.checked(false);
      } // this.setFilters(items, filter);


      this.values = Object.keys(items);
      this.filterValues = filter ? Array.from(filter.value) : Object.keys(items);
      buildFilterBody.call(this, items, filter);
      resetFilterHeader.call(this);
    }
  }, {
    key: "setOffset",
    value: function setOffset(v) {
      var _this4 = this;

      this.el.offset(v).show();
      var tindex = 1;
      bindClickoutside(this.el, function () {
        if (tindex <= 0) {
          _this4.hide();
        }

        tindex -= 1;
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.el.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.hide();
      unbindClickoutside(this.el);
    }
  }]);

  return SortFilter;
}();


// CONCATENATED MODULE: ./src/component/message.js
/* global document */



function xtoast(title, content) {
  var el = element_h('div', "".concat(cssPrefix, "-toast"));
  var dimmer = element_h('div', "".concat(cssPrefix, "-dimmer active"));

  var remove = function remove() {
    document.body.removeChild(el.el);
    document.body.removeChild(dimmer.el);
  };

  el.children(element_h('div', "".concat(cssPrefix, "-toast-header")).children(new icon_Icon('close').on('click.stop', function () {
    return remove();
  }), title), element_h('div', "".concat(cssPrefix, "-toast-content")).html(content));
  document.body.appendChild(el.el);
  document.body.appendChild(dimmer.el); // set offset

  var _el$box = el.box(),
      width = _el$box.width,
      height = _el$box.height;

  var _document$documentEle = document.documentElement,
      clientHeight = _document$documentEle.clientHeight,
      clientWidth = _document$documentEle.clientWidth;
  el.offset({
    left: (clientWidth - width) / 2,
    top: (clientHeight - height) / 3
  });
}
/* harmony default export */ var component_message = ({});
// CONCATENATED MODULE: ./src/component/sheet.js
function sheet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sheet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sheet_createClass(Constructor, protoProps, staticProps) { if (protoProps) sheet_defineProperties(Constructor.prototype, protoProps); if (staticProps) sheet_defineProperties(Constructor, staticProps); return Constructor; }

function sheet_slicedToArray(arr, i) { return sheet_arrayWithHoles(arr) || sheet_iterableToArrayLimit(arr, i) || sheet_nonIterableRest(); }

function sheet_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function sheet_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function sheet_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global window */















/**
 * @desc throttle fn
 * @param func function
 * @param wait Delay in milliseconds
 */

function throttle(func, wait) {
  var _this = this;

  var timeout;
  return function () {
    var that = _this;

    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    var args = arg;

    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(that, args);
      }, wait);
    }
  };
}

function scrollbarMove() {
  var data = this.data,
      verticalScrollbar = this.verticalScrollbar,
      horizontalScrollbar = this.horizontalScrollbar;

  var _data$getSelectedRect = data.getSelectedRect(),
      l = _data$getSelectedRect.l,
      t = _data$getSelectedRect.t,
      left = _data$getSelectedRect.left,
      top = _data$getSelectedRect.top,
      width = _data$getSelectedRect.width,
      height = _data$getSelectedRect.height;

  var tableOffset = this.getTableOffset(); // console.log(',l:', l, ', left:', left, ', tOffset.left:', tableOffset.width);

  if (Math.abs(left) + width > tableOffset.width) {
    horizontalScrollbar.move({
      left: l + width - tableOffset.width
    });
  } else {
    var fsw = data.freezeTotalWidth();

    if (left < fsw) {
      horizontalScrollbar.move({
        left: l - 1 - fsw
      });
    }
  } // console.log('top:', top, ', height:', height, ', tof.height:', tableOffset.height);


  if (Math.abs(top) + height > tableOffset.height) {
    verticalScrollbar.move({
      top: t + height - tableOffset.height - 1
    });
  } else {
    var fsh = data.freezeTotalHeight();

    if (top < fsh) {
      verticalScrollbar.move({
        top: t - 1 - fsh
      });
    }
  }
}

function selectorSet(multiple, ri, ci) {
  var indexesUpdated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var moving = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (ri === -1 && ci === -1) return;
  var table = this.table,
      selector = this.selector,
      toolbar = this.toolbar,
      data = this.data,
      contextMenu = this.contextMenu;
  var cell = data.getCell(ri, ci);

  if (multiple) {
    selector.setEnd(ri, ci, moving);
    this.trigger('cells-selected', cell, selector.range);
  } else {
    // trigger click event
    selector.set(ri, ci, indexesUpdated);
    this.trigger('cell-selected', cell, ri, ci);
  }

  contextMenu.setMode(ri === -1 || ci === -1 ? 'row-col' : 'range');
  toolbar.reset();
  table.render();
} // multiple: boolean
// direction: left | right | up | down | row-first | row-last | col-first | col-last


function selectorMove(multiple, direction) {
  var selector = this.selector,
      data = this.data;
  var rows = data.rows,
      cols = data.cols;

  var _selector$indexes = sheet_slicedToArray(selector.indexes, 2),
      ri = _selector$indexes[0],
      ci = _selector$indexes[1];

  var _selector$range = selector.range,
      eri = _selector$range.eri,
      eci = _selector$range.eci;

  if (multiple) {
    var _selector$moveIndexes = sheet_slicedToArray(selector.moveIndexes, 2);

    ri = _selector$moveIndexes[0];
    ci = _selector$moveIndexes[1];
  } // console.log('selector.move:', ri, ci);


  if (direction === 'left') {
    if (ci > 0) ci -= 1;
  } else if (direction === 'right') {
    if (eci !== ci) ci = eci;
    if (ci < cols.len - 1) ci += 1;
  } else if (direction === 'up') {
    if (ri > 0) ri -= 1;
  } else if (direction === 'down') {
    if (eri !== ri) ri = eri;
    if (ri < rows.len - 1) ri += 1;
  } else if (direction === 'row-first') {
    ci = 0;
  } else if (direction === 'row-last') {
    ci = cols.len - 1;
  } else if (direction === 'col-first') {
    ri = 0;
  } else if (direction === 'col-last') {
    ri = rows.len - 1;
  }

  if (multiple) {
    selector.moveIndexes = [ri, ci];
  }

  selectorSet.call(this, multiple, ri, ci);
  scrollbarMove.call(this);
} // private methods


function overlayerMousemove(evt) {
  // console.log('x:', evt.offsetX, ', y:', evt.offsetY);
  if (evt.buttons !== 0) return;
  if (evt.target.className === "".concat(cssPrefix, "-resizer-hover")) return;
  var offsetX = evt.offsetX,
      offsetY = evt.offsetY;
  var rowResizer = this.rowResizer,
      colResizer = this.colResizer,
      tableEl = this.tableEl,
      data = this.data;
  var rows = data.rows,
      cols = data.cols;

  if (offsetX > cols.indexWidth && offsetY > rows.height) {
    rowResizer.hide();
    colResizer.hide();
    return;
  }

  var tRect = tableEl.box();
  var cRect = data.getCellRectByXY(evt.offsetX, evt.offsetY);

  if (cRect.ri >= 0 && cRect.ci === -1) {
    cRect.width = cols.indexWidth;
    rowResizer.show(cRect, {
      width: tRect.width
    });

    if (rows.isHide(cRect.ri - 1)) {
      rowResizer.showUnhide(cRect.ri);
    } else {
      rowResizer.hideUnhide();
    }
  } else {
    rowResizer.hide();
  }

  if (cRect.ri === -1 && cRect.ci >= 0) {
    cRect.height = rows.height;
    colResizer.show(cRect, {
      height: tRect.height
    });

    if (cols.isHide(cRect.ci - 1)) {
      colResizer.showUnhide(cRect.ci);
    } else {
      colResizer.hideUnhide();
    }
  } else {
    colResizer.hide();
  }
} // let scrollThreshold = 15;


function overlayerMousescroll(evt) {
  // scrollThreshold -= 1;
  // if (scrollThreshold > 0) return;
  // scrollThreshold = 15;
  var verticalScrollbar = this.verticalScrollbar,
      horizontalScrollbar = this.horizontalScrollbar,
      data = this.data;

  var _verticalScrollbar$sc = verticalScrollbar.scroll(),
      top = _verticalScrollbar$sc.top;

  var _horizontalScrollbar$ = horizontalScrollbar.scroll(),
      left = _horizontalScrollbar$.left; // console.log('evt:::', evt.wheelDelta, evt.detail * 40);


  var rows = data.rows,
      cols = data.cols; // deltaY for vertical delta

  var deltaY = evt.deltaY,
      deltaX = evt.deltaX;

  var loopValue = function loopValue(ii, vFunc) {
    var i = ii;
    var v = 0;

    do {
      v = vFunc(i);
      i += 1;
    } while (v <= 0);

    return v;
  }; // console.log('deltaX', deltaX, 'evt.detail', evt.detail);
  // if (evt.detail) deltaY = evt.detail * 40;


  var moveY = function moveY(vertical) {
    if (vertical > 0) {
      // up
      var ri = data.scroll.ri + 1;

      if (ri < rows.len) {
        var rh = loopValue(ri, function (i) {
          return rows.getHeight(i);
        });
        verticalScrollbar.move({
          top: top + rh - 1
        });
      }
    } else {
      // down
      var _ri = data.scroll.ri - 1;

      if (_ri >= 0) {
        var _rh = loopValue(_ri, function (i) {
          return rows.getHeight(i);
        });

        verticalScrollbar.move({
          top: _ri === 0 ? 0 : top - _rh
        });
      }
    }
  }; // deltaX for Mac horizontal scroll


  var moveX = function moveX(horizontal) {
    if (horizontal > 0) {
      // left
      var ci = data.scroll.ci + 1;

      if (ci < cols.len) {
        var cw = loopValue(ci, function (i) {
          return cols.getWidth(i);
        });
        horizontalScrollbar.move({
          left: left + cw - 1
        });
      }
    } else {
      // right
      var _ci = data.scroll.ci - 1;

      if (_ci >= 0) {
        var _cw = loopValue(_ci, function (i) {
          return cols.getWidth(i);
        });

        horizontalScrollbar.move({
          left: _ci === 0 ? 0 : left - _cw
        });
      }
    }
  };

  var tempY = Math.abs(deltaY);
  var tempX = Math.abs(deltaX);
  var temp = Math.max(tempY, tempX); // console.log('event:', evt);
  // detail for windows/mac firefox vertical scroll

  if (/Firefox/i.test(window.navigator.userAgent)) throttle(moveY(evt.detail), 50);
  if (temp === tempX) throttle(moveX(deltaX), 50);
  if (temp === tempY) throttle(moveY(deltaY), 50);
}

function overlayerTouch(direction, distance) {
  var verticalScrollbar = this.verticalScrollbar,
      horizontalScrollbar = this.horizontalScrollbar;

  var _verticalScrollbar$sc2 = verticalScrollbar.scroll(),
      top = _verticalScrollbar$sc2.top;

  var _horizontalScrollbar$2 = horizontalScrollbar.scroll(),
      left = _horizontalScrollbar$2.left;

  if (direction === 'left' || direction === 'right') {
    horizontalScrollbar.move({
      left: left - distance
    });
  } else if (direction === 'up' || direction === 'down') {
    verticalScrollbar.move({
      top: top - distance
    });
  }
}

function verticalScrollbarSet() {
  var data = this.data,
      verticalScrollbar = this.verticalScrollbar;

  var _this$getTableOffset = this.getTableOffset(),
      height = _this$getTableOffset.height;

  var erth = data.exceptRowTotalHeight(0, -1); // console.log('erth:', erth);

  verticalScrollbar.set(height, data.rows.totalHeight() - erth);
}

function horizontalScrollbarSet() {
  var data = this.data,
      horizontalScrollbar = this.horizontalScrollbar;

  var _this$getTableOffset2 = this.getTableOffset(),
      width = _this$getTableOffset2.width;

  if (data) {
    horizontalScrollbar.set(width, data.cols.totalWidth());
  }
}

function sheetFreeze() {
  var selector = this.selector,
      data = this.data,
      editor = this.editor;

  var _data$freeze = sheet_slicedToArray(data.freeze, 2),
      ri = _data$freeze[0],
      ci = _data$freeze[1];

  if (ri > 0 || ci > 0) {
    var fwidth = data.freezeTotalWidth();
    var fheight = data.freezeTotalHeight();
    editor.setFreezeLengths(fwidth, fheight);
  }

  selector.resetAreaOffset();
}

function sheetReset() {
  var tableEl = this.tableEl,
      overlayerEl = this.overlayerEl,
      overlayerCEl = this.overlayerCEl,
      table = this.table,
      toolbar = this.toolbar,
      selector = this.selector,
      el = this.el;
  var tOffset = this.getTableOffset();
  var vRect = this.getRect();
  tableEl.attr(vRect);
  overlayerEl.offset(vRect);
  overlayerCEl.offset(tOffset);
  el.css('width', "".concat(vRect.width, "px"));
  verticalScrollbarSet.call(this);
  horizontalScrollbarSet.call(this);
  sheetFreeze.call(this);
  table.render();
  toolbar.reset();
  selector.reset();
}

function clearClipboard() {
  var data = this.data,
      selector = this.selector;
  data.clearClipboard();
  selector.hideClipboard();
}

function copy(evt) {
  var data = this.data,
      selector = this.selector;
  if (data.settings.mode === 'read') return;
  data.copy();
  data.copyToSystemClipboard(evt);
  selector.showClipboard();
}

function cut() {
  var data = this.data,
      selector = this.selector;
  if (data.settings.mode === 'read') return;
  data.cut();
  selector.showClipboard();
}

function paste(what, evt) {
  var _this2 = this;

  var data = this.data;
  if (data.settings.mode === 'read') return;

  if (data.clipboard.isClear()) {
    var resetSheet = function resetSheet() {
      return sheetReset.call(_this2);
    };

    var eventTrigger = function eventTrigger(rows) {
      _this2.trigger('pasted-clipboard', rows);
    }; // pastFromSystemClipboard is async operation, need to tell it how to reset sheet and trigger event after it finishes
    // pasting content from system clipboard


    data.pasteFromSystemClipboard(resetSheet, eventTrigger);
  } else if (data.paste(what, function (msg) {
    return xtoast('Tip', msg);
  })) {
    sheetReset.call(this);
  } else if (evt) {
    var cdata = evt.clipboardData.getData('text/plain');
    this.data.pasteFromText(cdata);
    sheetReset.call(this);
  }
}

function hideRowsOrCols() {
  this.data.hideRowsOrCols();
  sheetReset.call(this);
}

function unhideRowsOrCols(type, index) {
  this.data.unhideRowsOrCols(type, index);
  sheetReset.call(this);
}

function autofilter() {
  var data = this.data;
  data.autofilter();
  sheetReset.call(this);
}

function toolbarChangePaintformatPaste() {
  var toolbar = this.toolbar;

  if (toolbar.paintformatActive()) {
    paste.call(this, 'format');
    clearClipboard.call(this);
    toolbar.paintformatToggle();
  }
}

function overlayerMousedown(evt) {
  var _this3 = this;

  // console.log(':::::overlayer.mousedown:', evt.detail, evt.button, evt.buttons, evt.shiftKey);
  // console.log('evt.target.className:', evt.target.className);
  var selector = this.selector,
      data = this.data,
      table = this.table,
      sortFilter = this.sortFilter;
  var offsetX = evt.offsetX,
      offsetY = evt.offsetY;
  var isAutofillEl = evt.target.className === "".concat(cssPrefix, "-selector-corner");
  var cellRect = data.getCellRectByXY(offsetX, offsetY);
  var left = cellRect.left,
      top = cellRect.top,
      width = cellRect.width,
      height = cellRect.height;
  var ri = cellRect.ri,
      ci = cellRect.ci; // sort or filter

  var autoFilter = data.autoFilter;

  if (autoFilter.includes(ri, ci)) {
    if (left + width - 20 < offsetX && top + height - 20 < offsetY) {
      var items = autoFilter.items(ci, function (r, c) {
        return data.rows.getCell(r, c);
      });
      sortFilter.hide();
      sortFilter.set(ci, items, autoFilter.getFilter(ci), autoFilter.getSort(ci));
      sortFilter.setOffset({
        left: left,
        top: top + height + 2
      });
      return;
    }
  } // console.log('ri:', ri, ', ci:', ci);


  if (!evt.shiftKey) {
    // console.log('selectorSetStart:::');
    if (isAutofillEl) {
      selector.showAutofill(ri, ci);
    } else {
      selectorSet.call(this, false, ri, ci);
    } // mouse move up


    mouseMoveUp(window, function (e) {
      // console.log('mouseMoveUp::::');
      var _data$getCellRectByXY = data.getCellRectByXY(e.offsetX, e.offsetY);

      ri = _data$getCellRectByXY.ri;
      ci = _data$getCellRectByXY.ci;

      if (isAutofillEl) {
        selector.showAutofill(ri, ci);
      } else if (e.buttons === 1 && !e.shiftKey) {
        selectorSet.call(_this3, true, ri, ci, true, true);
      }
    }, function () {
      if (isAutofillEl && selector.arange && data.settings.mode !== 'read') {
        if (data.autofill(selector.arange, 'all', function (msg) {
          return xtoast('Tip', msg);
        })) {
          table.render();
        }
      }

      selector.hideAutofill();
      toolbarChangePaintformatPaste.call(_this3);
    });
  }

  if (!isAutofillEl && evt.buttons === 1) {
    if (evt.shiftKey) {
      // console.log('shiftKey::::');
      selectorSet.call(this, true, ri, ci);
    }
  }
}

function editorSetOffset() {
  var editor = this.editor,
      data = this.data;
  var sOffset = data.getSelectedRect();
  var tOffset = this.getTableOffset();
  var sPosition = 'top'; // console.log('sOffset:', sOffset, ':', tOffset);

  if (sOffset.top > tOffset.height / 2) {
    sPosition = 'bottom';
  }

  editor.setOffset(sOffset, sPosition);
}

function editorSet() {
  var editor = this.editor,
      data = this.data;
  if (data.settings.mode === 'read') return;
  editorSetOffset.call(this);
  editor.setCell(data.getSelectedCell(), data.getSelectedValidator());
  clearClipboard.call(this);
}

function verticalScrollbarMove(distance) {
  var _this4 = this;

  var data = this.data,
      table = this.table,
      selector = this.selector;
  data.scrolly(distance, function () {
    selector.resetBRLAreaOffset();
    editorSetOffset.call(_this4);
    table.render();
  });
}

function horizontalScrollbarMove(distance) {
  var _this5 = this;

  var data = this.data,
      table = this.table,
      selector = this.selector;
  data.scrollx(distance, function () {
    selector.resetBRTAreaOffset();
    editorSetOffset.call(_this5);
    table.render();
  });
}

function rowResizerFinished(cRect, distance) {
  var ri = cRect.ri;
  var table = this.table,
      selector = this.selector,
      data = this.data;
  var _selector$range2 = selector.range,
      sri = _selector$range2.sri,
      eri = _selector$range2.eri;

  if (ri >= sri && ri <= eri) {
    for (var row = sri; row <= eri; row += 1) {
      data.rows.setHeight(row, distance);
    }
  } else {
    data.rows.setHeight(ri, distance);
  }

  table.render();
  selector.resetAreaOffset();
  verticalScrollbarSet.call(this);
  editorSetOffset.call(this);
}

function colResizerFinished(cRect, distance) {
  var ci = cRect.ci;
  var table = this.table,
      selector = this.selector,
      data = this.data;
  var _selector$range3 = selector.range,
      sci = _selector$range3.sci,
      eci = _selector$range3.eci;

  if (ci >= sci && ci <= eci) {
    for (var col = sci; col <= eci; col += 1) {
      data.cols.setWidth(col, distance);
    }
  } else {
    data.cols.setWidth(ci, distance);
  }

  table.render();
  selector.resetAreaOffset();
  horizontalScrollbarSet.call(this);
  editorSetOffset.call(this);
}

function dataSetCellText(text) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'finished';
  var data = this.data,
      table = this.table; // const [ri, ci] = selector.indexes;

  if (data.settings.mode === 'read') return;
  data.setSelectedCellText(text, state);
  var _data$selector = data.selector,
      ri = _data$selector.ri,
      ci = _data$selector.ci;

  if (state === 'finished') {
    table.render();
  } else {
    this.trigger('cell-edited', text, ri, ci);
  }
}

function insertDeleteRowColumn(type) {
  var data = this.data;
  if (data.settings.mode === 'read') return;

  if (type === 'insert-row') {
    data.insert('row');
  } else if (type === 'delete-row') {
    data["delete"]('row');
  } else if (type === 'insert-column') {
    data.insert('column');
  } else if (type === 'delete-column') {
    data["delete"]('column');
  } else if (type === 'delete-cell') {
    data.deleteCell();
  } else if (type === 'delete-cell-format') {
    data.deleteCell('format');
  } else if (type === 'delete-cell-text') {
    data.deleteCell('text');
  } else if (type === 'cell-printable') {
    data.setSelectedCellAttr('printable', true);
  } else if (type === 'cell-non-printable') {
    data.setSelectedCellAttr('printable', false);
  } else if (type === 'cell-editable') {
    data.setSelectedCellAttr('editable', true);
  } else if (type === 'cell-non-editable') {
    data.setSelectedCellAttr('editable', false);
  }

  clearClipboard.call(this);
  sheetReset.call(this);
}

function toolbarChange(type, value) {
  var data = this.data;

  if (type === 'undo') {
    this.undo();
  } else if (type === 'redo') {
    this.redo();
  } else if (type === 'print') {
    this.print.preview();
  } else if (type === 'paintformat') {
    if (value === true) copy.call(this);else clearClipboard.call(this);
  } else if (type === 'clearformat') {
    insertDeleteRowColumn.call(this, 'delete-cell-format');
  } else if (type === 'link') {// link
  } else if (type === 'chart') {// chart
  } else if (type === 'autofilter') {
    // filter
    autofilter.call(this);
  } else if (type === 'freeze') {
    if (value) {
      var _data$selector2 = data.selector,
          ri = _data$selector2.ri,
          ci = _data$selector2.ci;
      this.freeze(ri, ci);
    } else {
      this.freeze(0, 0);
    }
  } else {
    data.setSelectedCellAttr(type, value);

    if (type === 'formula' && !data.selector.multiple()) {
      editorSet.call(this);
    }

    sheetReset.call(this);
  }
}

function sortFilterChange(ci, order, operator, value) {
  // console.log('sort:', sortDesc, operator, value);
  this.data.setAutoFilter(ci, order, operator, value);
  sheetReset.call(this);
}

function sheetInitEvents() {
  var _this6 = this;

  var selector = this.selector,
      overlayerEl = this.overlayerEl,
      rowResizer = this.rowResizer,
      colResizer = this.colResizer,
      verticalScrollbar = this.verticalScrollbar,
      horizontalScrollbar = this.horizontalScrollbar,
      editor = this.editor,
      contextMenu = this.contextMenu,
      toolbar = this.toolbar,
      modalValidation = this.modalValidation,
      sortFilter = this.sortFilter; // overlayer

  overlayerEl.on('mousemove', function (evt) {
    overlayerMousemove.call(_this6, evt);
  }).on('mousedown', function (evt) {
    editor.clear();
    contextMenu.hide(); // the left mouse button: mousedown → mouseup → click
    // the right mouse button: mousedown → contenxtmenu → mouseup

    if (evt.buttons === 2) {
      if (_this6.data.xyInSelectedRect(evt.offsetX, evt.offsetY)) {
        contextMenu.setPosition(evt.offsetX, evt.offsetY);
      } else {
        overlayerMousedown.call(_this6, evt);
        contextMenu.setPosition(evt.offsetX, evt.offsetY);
      }

      evt.stopPropagation();
    } else if (evt.detail === 2) {
      editorSet.call(_this6);
    } else {
      overlayerMousedown.call(_this6, evt);
    }
  }).on('mousewheel.stop', function (evt) {
    overlayerMousescroll.call(_this6, evt);
  }).on('mouseout', function (evt) {
    var offsetX = evt.offsetX,
        offsetY = evt.offsetY;
    if (offsetY <= 0) colResizer.hide();
    if (offsetX <= 0) rowResizer.hide();
  });

  selector.inputChange = function (v) {
    dataSetCellText.call(_this6, v, 'input');
    editorSet.call(_this6);
  }; // slide on mobile


  bindTouch(overlayerEl.el, {
    move: function move(direction, d) {
      overlayerTouch.call(_this6, direction, d);
    }
  }); // toolbar change

  toolbar.change = function (type, value) {
    return toolbarChange.call(_this6, type, value);
  }; // sort filter ok


  sortFilter.ok = function (ci, order, o, v) {
    return sortFilterChange.call(_this6, ci, order, o, v);
  }; // resizer finished callback


  rowResizer.finishedFn = function (cRect, distance) {
    rowResizerFinished.call(_this6, cRect, distance);
  };

  colResizer.finishedFn = function (cRect, distance) {
    colResizerFinished.call(_this6, cRect, distance);
  }; // resizer unhide callback


  rowResizer.unhideFn = function (index) {
    unhideRowsOrCols.call(_this6, 'row', index);
  };

  colResizer.unhideFn = function (index) {
    unhideRowsOrCols.call(_this6, 'col', index);
  }; // scrollbar move callback


  verticalScrollbar.moveFn = function (distance, evt) {
    verticalScrollbarMove.call(_this6, distance, evt);
  };

  horizontalScrollbar.moveFn = function (distance, evt) {
    horizontalScrollbarMove.call(_this6, distance, evt);
  }; // editor


  editor.change = function (state, itext) {
    dataSetCellText.call(_this6, itext, state);
  }; // modal validation


  modalValidation.change = function (action) {
    if (action === 'save') {
      var _this6$data;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_this6$data = _this6.data).addValidation.apply(_this6$data, args);
    } else {
      _this6.data.removeValidation();
    }
  }; // contextmenu


  contextMenu.itemClick = function (type) {
    // console.log('type:', type);
    if (type === 'validation') {
      modalValidation.setValue(_this6.data.getSelectedValidation());
    } else if (type === 'copy') {
      copy.call(_this6);
    } else if (type === 'cut') {
      cut.call(_this6);
    } else if (type === 'paste') {
      paste.call(_this6, 'all');
    } else if (type === 'paste-value') {
      paste.call(_this6, 'text');
    } else if (type === 'paste-format') {
      paste.call(_this6, 'format');
    } else if (type === 'hide') {
      hideRowsOrCols.call(_this6);
    } else {
      insertDeleteRowColumn.call(_this6, type);
    }
  };

  bind(window, 'resize', function () {
    _this6.reload();
  });
  bind(window, 'click', function (evt) {
    _this6.focusing = overlayerEl.contains(evt.target);
  });
  bind(window, 'paste', function (evt) {
    if (!_this6.focusing) return;
    paste.call(_this6, 'all', evt);
    evt.preventDefault();
  });
  bind(window, 'copy', function (evt) {
    if (!_this6.focusing) return;
    copy.call(_this6, evt);
    evt.preventDefault();
  }); // for selector

  bind(window, 'keydown', function (evt) {
    if (!_this6.focusing) return;
    var keyCode = evt.keyCode || evt.which;
    var key = evt.key,
        ctrlKey = evt.ctrlKey,
        shiftKey = evt.shiftKey,
        metaKey = evt.metaKey; // console.log('keydown.evt: ', keyCode);

    if (ctrlKey || metaKey) {
      // const { sIndexes, eIndexes } = selector;
      // let what = 'all';
      // if (shiftKey) what = 'text';
      // if (altKey) what = 'format';
      switch (keyCode) {
        case 90:
          // undo: ctrl + z
          _this6.undo();

          evt.preventDefault();
          break;

        case 89:
          // redo: ctrl + y
          _this6.redo();

          evt.preventDefault();
          break;

        case 67:
          // ctrl + c
          // => copy
          // copy.call(this);
          // evt.preventDefault();
          break;

        case 88:
          // ctrl + x
          cut.call(_this6);
          evt.preventDefault();
          break;

        case 85:
          // ctrl + u
          toolbar.trigger('underline');
          evt.preventDefault();
          break;

        case 86:
          // ctrl + v
          // => paste
          // evt.preventDefault();
          break;

        case 37:
          // ctrl + left
          selectorMove.call(_this6, shiftKey, 'row-first');
          evt.preventDefault();
          break;

        case 38:
          // ctrl + up
          selectorMove.call(_this6, shiftKey, 'col-first');
          evt.preventDefault();
          break;

        case 39:
          // ctrl + right
          selectorMove.call(_this6, shiftKey, 'row-last');
          evt.preventDefault();
          break;

        case 40:
          // ctrl + down
          selectorMove.call(_this6, shiftKey, 'col-last');
          evt.preventDefault();
          break;

        case 32:
          // ctrl + space, all cells in col
          selectorSet.call(_this6, false, -1, _this6.data.selector.ci, false);
          evt.preventDefault();
          break;

        case 66:
          // ctrl + B
          toolbar.trigger('bold');
          break;

        case 73:
          // ctrl + I
          toolbar.trigger('italic');
          break;

        default:
          break;
      }
    } else {
      // console.log('evt.keyCode:', evt.keyCode);
      switch (keyCode) {
        case 32:
          if (shiftKey) {
            // shift + space, all cells in row
            selectorSet.call(_this6, false, _this6.data.selector.ri, -1, false);
          }

          break;

        case 27:
          // esc
          contextMenu.hide();
          clearClipboard.call(_this6);
          break;

        case 37:
          // left
          selectorMove.call(_this6, shiftKey, 'left');
          evt.preventDefault();
          break;

        case 38:
          // up
          selectorMove.call(_this6, shiftKey, 'up');
          evt.preventDefault();
          break;

        case 39:
          // right
          selectorMove.call(_this6, shiftKey, 'right');
          evt.preventDefault();
          break;

        case 40:
          // down
          selectorMove.call(_this6, shiftKey, 'down');
          evt.preventDefault();
          break;

        case 9:
          // tab
          editor.clear(); // shift + tab => move left
          // tab => move right

          selectorMove.call(_this6, false, shiftKey ? 'left' : 'right');
          evt.preventDefault();
          break;

        case 13:
          // enter
          editor.clear(); // shift + enter => move up
          // enter => move down

          selectorMove.call(_this6, false, shiftKey ? 'up' : 'down');
          evt.preventDefault();
          break;

        case 8:
          // backspace
          insertDeleteRowColumn.call(_this6, 'delete-cell-text');
          evt.preventDefault();
          break;

        default:
          break;
      }

      if (key === 'Delete') {
        insertDeleteRowColumn.call(_this6, 'delete-cell-text');
        evt.preventDefault();
      } else if (keyCode >= 65 && keyCode <= 90 || keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105 || evt.key === '=') {
        dataSetCellText.call(_this6, evt.key, 'input');
        editorSet.call(_this6);
      } else if (keyCode === 113) {
        // F2
        editorSet.call(_this6);
      }
    }
  });
}

var sheet_Sheet =
/*#__PURE__*/
function () {
  function Sheet(targetEl, data) {
    var _this7 = this;

    sheet_classCallCheck(this, Sheet);

    this.eventMap = createEventEmitter();
    var _data$settings = data.settings,
        view = _data$settings.view,
        showToolbar = _data$settings.showToolbar,
        showContextmenu = _data$settings.showContextmenu;
    this.el = element_h('div', "".concat(cssPrefix, "-sheet"));
    this.toolbar = new toolbar_Toolbar(data, view.width, !showToolbar);
    this.print = new print_Print(data);
    targetEl.children(this.toolbar.el, this.el, this.print.el);
    this.data = data; // table

    this.tableEl = element_h('canvas', "".concat(cssPrefix, "-table")); // resizer

    this.rowResizer = new resizer_Resizer(false, data.rows.height);
    this.colResizer = new resizer_Resizer(true, data.cols.minWidth); // scrollbar

    this.verticalScrollbar = new scrollbar_Scrollbar(true);
    this.horizontalScrollbar = new scrollbar_Scrollbar(false); // editor

    this.editor = new editor_Editor(formula_formulas, function () {
      return _this7.getTableOffset();
    }, data.rows.height); // data validation

    this.modalValidation = new modal_validation_ModalValidation(); // contextMenu

    this.contextMenu = new contextmenu_ContextMenu(function () {
      return _this7.getRect();
    }, !showContextmenu); // selector

    this.selector = new component_selector_Selector(data);
    this.overlayerCEl = element_h('div', "".concat(cssPrefix, "-overlayer-content")).children(this.editor.el, this.selector.el);
    this.overlayerEl = element_h('div', "".concat(cssPrefix, "-overlayer")).child(this.overlayerCEl); // sortFilter

    this.sortFilter = new sort_filter_SortFilter(); // root element

    this.el.children(this.tableEl, this.overlayerEl.el, this.rowResizer.el, this.colResizer.el, this.verticalScrollbar.el, this.horizontalScrollbar.el, this.contextMenu.el, this.modalValidation.el, this.sortFilter.el); // table

    this.table = new component_table(this.tableEl.el, data);
    sheetInitEvents.call(this);
    sheetReset.call(this); // init selector [0, 0]

    selectorSet.call(this, false, 0, 0);
  }

  sheet_createClass(Sheet, [{
    key: "on",
    value: function on(eventName, func) {
      this.eventMap.on(eventName, func);
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(eventName) {
      var eventMap = this.eventMap;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      eventMap.fire(eventName, args);
    }
  }, {
    key: "resetData",
    value: function resetData(data) {
      // before
      this.editor.clear(); // after

      this.data = data;
      verticalScrollbarSet.call(this);
      horizontalScrollbarSet.call(this);
      this.toolbar.resetData(data);
      this.print.resetData(data);
      this.selector.resetData(data);
      this.table.resetData(data);
    }
  }, {
    key: "loadData",
    value: function loadData(data) {
      this.data.setData(data);
      sheetReset.call(this);
      return this;
    } // freeze rows or cols

  }, {
    key: "freeze",
    value: function freeze(ri, ci) {
      var data = this.data;
      data.setFreeze(ri, ci);
      sheetReset.call(this);
      return this;
    }
  }, {
    key: "undo",
    value: function undo() {
      this.data.undo();
      sheetReset.call(this);
    }
  }, {
    key: "redo",
    value: function redo() {
      this.data.redo();
      sheetReset.call(this);
    }
  }, {
    key: "reload",
    value: function reload() {
      sheetReset.call(this);
      return this;
    }
  }, {
    key: "getRect",
    value: function getRect() {
      var data = this.data;
      return {
        width: data.viewWidth(),
        height: data.viewHeight()
      };
    }
  }, {
    key: "getTableOffset",
    value: function getTableOffset() {
      var _this$data = this.data,
          rows = _this$data.rows,
          cols = _this$data.cols;

      var _this$getRect = this.getRect(),
          width = _this$getRect.width,
          height = _this$getRect.height;

      return {
        width: width - cols.indexWidth,
        height: height - rows.height,
        left: cols.indexWidth,
        top: rows.height
      };
    }
  }]);

  return Sheet;
}();


// CONCATENATED MODULE: ./src/component/bottombar.js
function bottombar_slicedToArray(arr, i) { return bottombar_arrayWithHoles(arr) || bottombar_iterableToArrayLimit(arr, i) || bottombar_nonIterableRest(); }

function bottombar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function bottombar_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function bottombar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function bottombar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bottombar_typeof = function _typeof(obj) { return typeof obj; }; } else { bottombar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bottombar_typeof(obj); }

function bottombar_toConsumableArray(arr) { return bottombar_arrayWithoutHoles(arr) || bottombar_iterableToArray(arr) || bottombar_nonIterableSpread(); }

function bottombar_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function bottombar_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function bottombar_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function bottombar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bottombar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bottombar_createClass(Constructor, protoProps, staticProps) { if (protoProps) bottombar_defineProperties(Constructor.prototype, protoProps); if (staticProps) bottombar_defineProperties(Constructor, staticProps); return Constructor; }

function bottombar_possibleConstructorReturn(self, call) { if (call && (bottombar_typeof(call) === "object" || typeof call === "function")) { return call; } return bottombar_assertThisInitialized(self); }

function bottombar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bottombar_getPrototypeOf(o) { bottombar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bottombar_getPrototypeOf(o); }

function bottombar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) bottombar_setPrototypeOf(subClass, superClass); }

function bottombar_setPrototypeOf(o, p) { bottombar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bottombar_setPrototypeOf(o, p); }






 // Record: temp not used
// import { xtoast } from './message';



var bottombar_DropdownMore =
/*#__PURE__*/
function (_Dropdown) {
  bottombar_inherits(DropdownMore, _Dropdown);

  function DropdownMore(click) {
    var _this;

    bottombar_classCallCheck(this, DropdownMore);

    var icon = new icon_Icon('ellipsis');
    _this = bottombar_possibleConstructorReturn(this, bottombar_getPrototypeOf(DropdownMore).call(this, icon, 'auto', false, 'top-left'));
    _this.contentClick = click;
    return _this;
  }

  bottombar_createClass(DropdownMore, [{
    key: "reset",
    value: function reset(items) {
      var _this2 = this;

      var eles = items.map(function (it, i) {
        return element_h('div', "".concat(cssPrefix, "-item")).css('width', '150px').css('font-weight', 'normal').on('click', function () {
          _this2.contentClick(i);

          _this2.hide();
        }).child(it);
      });
      this.setContentChildren.apply(this, bottombar_toConsumableArray(eles));
    }
  }, {
    key: "setTitle",
    value: function setTitle() {}
  }]);

  return DropdownMore;
}(dropdown_Dropdown);

var bottombar_menuItems = [{
  key: 'delete',
  title: tf('contextmenu.deleteSheet')
}];

function bottombar_buildMenuItem(item) {
  var _this3 = this;

  return element_h('div', "".concat(cssPrefix, "-item")).child(item.title()).on('click', function () {
    _this3.itemClick(item.key);

    _this3.hide();
  });
}

function bottombar_buildMenu() {
  var _this4 = this;

  return bottombar_menuItems.map(function (it) {
    return bottombar_buildMenuItem.call(_this4, it);
  });
}

var bottombar_ContextMenu =
/*#__PURE__*/
function () {
  function ContextMenu() {
    var _h$css;

    bottombar_classCallCheck(this, ContextMenu);

    this.el = (_h$css = element_h('div', "".concat(cssPrefix, "-contextmenu")).css('width', '160px')).children.apply(_h$css, bottombar_toConsumableArray(bottombar_buildMenu.call(this))).hide();

    this.itemClick = function () {};
  }

  bottombar_createClass(ContextMenu, [{
    key: "hide",
    value: function hide() {
      var el = this.el;
      el.hide();
      unbindClickoutside(el);
    }
  }, {
    key: "setOffset",
    value: function setOffset(offset) {
      var el = this.el;
      el.offset(offset);
      el.show();
      bindClickoutside(el);
    }
  }]);

  return ContextMenu;
}();

var bottombar_Bottombar =
/*#__PURE__*/
function () {
  function Bottombar() {
    var _this5 = this;

    var addFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var swapFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var deleteFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var updateFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

    bottombar_classCallCheck(this, Bottombar);

    this.swapFunc = swapFunc;
    this.updateFunc = updateFunc;
    this.dataNames = [];
    this.activeEl = null;
    this.deleteEl = null;
    this.items = [];
    this.moreEl = new bottombar_DropdownMore(function (i) {
      _this5.clickSwap2(_this5.items[i]);
    });
    this.contextMenu = new bottombar_ContextMenu();
    this.contextMenu.itemClick = deleteFunc;
    this.el = element_h('div', "".concat(cssPrefix, "-bottombar")).children(this.contextMenu.el, this.menuEl = element_h('ul', "".concat(cssPrefix, "-menu")).child(element_h('li', '').children(new icon_Icon('add').on('click', function () {
      addFunc();
    }), element_h('span', '').child(this.moreEl))));
  }

  bottombar_createClass(Bottombar, [{
    key: "addItem",
    value: function addItem(name, active, options) {
      var _this6 = this;

      this.dataNames.push(name);
      var item = element_h('li', active ? 'active' : '').child(name);
      item.on('click', function () {
        _this6.clickSwap2(item);
      }).on('contextmenu', function (evt) {
        if (options.mode === 'read') return;
        var _evt$target = evt.target,
            offsetLeft = _evt$target.offsetLeft,
            offsetHeight = _evt$target.offsetHeight;

        _this6.contextMenu.setOffset({
          left: offsetLeft,
          bottom: offsetHeight + 1
        });

        _this6.deleteEl = item;
      }).on('dblclick', function () {
        if (options.mode === 'read') return;
        var v = item.html();
        var input = new form_input_FormInput('auto', '');
        input.val(v);
        input.input.on('blur', function (_ref) {
          var target = _ref.target;
          var value = target.value;

          var nindex = _this6.dataNames.findIndex(function (it) {
            return it === v;
          });

          _this6.renameItem(nindex, value);
          /*
          this.dataNames.splice(nindex, 1, value);
          this.moreEl.reset(this.dataNames);
          item.html('').child(value);
          this.updateFunc(nindex, value);
          */

        });
        item.html('').child(input.el);
        input.focus();
      });

      if (active) {
        this.clickSwap(item);
      }

      this.items.push(item);
      this.menuEl.child(item);
      this.moreEl.reset(this.dataNames);
    }
  }, {
    key: "renameItem",
    value: function renameItem(index, value) {
      this.dataNames.splice(index, 1, value);
      this.moreEl.reset(this.dataNames);
      this.items[index].html('').child(value);
      this.updateFunc(index, value);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this7 = this;

      this.items.forEach(function (it) {
        _this7.menuEl.removeChild(it.el);
      });
      this.items = [];
      this.dataNames = [];
      this.moreEl.reset(this.dataNames);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      var activeEl = this.activeEl,
          deleteEl = this.deleteEl;

      if (this.items.length > 1) {
        var index = this.items.findIndex(function (it) {
          return it === deleteEl;
        });
        this.items.splice(index, 1);
        this.dataNames.splice(index, 1);
        this.menuEl.removeChild(deleteEl.el);
        this.moreEl.reset(this.dataNames);

        if (activeEl === deleteEl) {
          var _this$items = bottombar_slicedToArray(this.items, 1),
              f = _this$items[0];

          this.activeEl = f;
          this.activeEl.toggle();
          return [index, 0];
        }

        return [index, -1];
      }

      return [-1];
    }
  }, {
    key: "clickSwap2",
    value: function clickSwap2(item) {
      var index = this.items.findIndex(function (it) {
        return it === item;
      });
      this.clickSwap(item);
      this.activeEl.toggle();
      this.swapFunc(index);
    }
  }, {
    key: "clickSwap",
    value: function clickSwap(item) {
      if (this.activeEl !== null) {
        this.activeEl.toggle();
      }

      this.activeEl = item;
    }
  }]);

  return Bottombar;
}();


// EXTERNAL MODULE: ./src/index.less
var src_0 = __webpack_require__(1);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spreadsheet", function() { return spreadsheet; });
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_nonIterableRest(); }

function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function src_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }

/* global window, document */








var src_Spreadsheet =
/*#__PURE__*/
function () {
  function Spreadsheet(selectors) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    src_classCallCheck(this, Spreadsheet);

    var targetEl = selectors;
    this.options = _objectSpread({
      showBottomBar: true
    }, options);
    this.sheetIndex = 1;
    this.datas = [];

    if (typeof selectors === 'string') {
      targetEl = document.querySelector(selectors);
    }

    this.bottombar = this.options.showBottomBar ? new bottombar_Bottombar(function () {
      if (_this.options.mode === 'read') return;

      var d = _this.addSheet();

      _this.sheet.resetData(d);
    }, function (index) {
      var d = _this.datas[index];

      _this.sheet.resetData(d);
    }, function () {
      _this.deleteSheet();
    }, function (index, value) {
      _this.datas[index].name = value;

      _this.sheet.trigger('change');
    }) : null;
    this.data = this.addSheet();
    var rootEl = element_h('div', "".concat(cssPrefix)).on('contextmenu', function (evt) {
      return evt.preventDefault();
    }); // create canvas element

    targetEl.appendChild(rootEl.el);
    this.sheet = new sheet_Sheet(rootEl, this.data);

    if (this.bottombar !== null) {
      rootEl.child(this.bottombar.el);
    }
  }

  src_createClass(Spreadsheet, [{
    key: "addSheet",
    value: function addSheet(name) {
      var _this2 = this;

      var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var n = name || "sheet".concat(this.sheetIndex);
      var d = new data_proxy_DataProxy(n, this.options);

      d.change = function () {
        var _this2$sheet;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_this2$sheet = _this2.sheet).trigger.apply(_this2$sheet, ['change'].concat(args));
      };

      this.datas.push(d); // console.log('d:', n, d, this.datas);

      if (this.bottombar !== null) {
        this.bottombar.addItem(n, active, this.options);
      }

      this.sheetIndex += 1;
      return d;
    }
  }, {
    key: "deleteSheet",
    value: function deleteSheet() {
      if (this.bottombar === null) return;

      var _this$bottombar$delet = this.bottombar.deleteItem(),
          _this$bottombar$delet2 = src_slicedToArray(_this$bottombar$delet, 2),
          oldIndex = _this$bottombar$delet2[0],
          nindex = _this$bottombar$delet2[1];

      if (oldIndex >= 0) {
        this.datas.splice(oldIndex, 1);
        if (nindex >= 0) this.sheet.resetData(this.datas[nindex]);
        this.sheet.trigger('change');
      }
    }
  }, {
    key: "loadData",
    value: function loadData(data) {
      var ds = Array.isArray(data) ? data : [data];

      if (this.bottombar !== null) {
        this.bottombar.clear();
      }

      this.datas = [];

      if (ds.length > 0) {
        for (var i = 0; i < ds.length; i += 1) {
          var it = ds[i];
          var nd = this.addSheet(it.name, i === 0);
          nd.setData(it);

          if (i === 0) {
            this.sheet.resetData(nd);
          }
        }
      }

      return this;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.datas.map(function (it) {
        return it.getData();
      });
    }
  }, {
    key: "cellText",
    value: function cellText(ri, ci, text) {
      var sheetIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.datas[sheetIndex].setCellText(ri, ci, text, 'finished');
      return this;
    }
  }, {
    key: "cell",
    value: function cell(ri, ci) {
      var sheetIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return this.datas[sheetIndex].getCell(ri, ci);
    }
  }, {
    key: "cellStyle",
    value: function cellStyle(ri, ci) {
      var sheetIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return this.datas[sheetIndex].getCellStyle(ri, ci);
    }
  }, {
    key: "reRender",
    value: function reRender() {
      this.sheet.table.render();
      return this;
    }
  }, {
    key: "on",
    value: function on(eventName, func) {
      this.sheet.on(eventName, func);
      return this;
    }
  }, {
    key: "validate",
    value: function validate() {
      var validations = this.data.validations;
      return validations.errors.size <= 0;
    }
  }, {
    key: "change",
    value: function change(cb) {
      this.sheet.on('change', cb);
      return this;
    }
  }], [{
    key: "locale",
    value: function locale(lang, message) {
      locale_locale(lang, message);
    }
  }]);

  return Spreadsheet;
}();

var spreadsheet = function spreadsheet(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new src_Spreadsheet(el, options);
};

if (window) {
  window.x_spreadsheet = spreadsheet;

  window.x_spreadsheet.locale = function (lang, message) {
    return locale_locale(lang, message);
  };
}

/* harmony default export */ var src_1 = __webpack_exports__["default"] = (src_Spreadsheet);


/***/ })
/******/ ]);
//# sourceMappingURL=xspreadsheet.js.map