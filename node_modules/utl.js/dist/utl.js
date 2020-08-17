(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['utl'] = factory();
  }
}(this, function () {

/*!
 * extend.js
 *
 * Copyright (c) 2014
 */
var extend, isArray, isEmpty, isFunction, isNull, isObject, isUndefined, tmpl, toArray, utl;
extend = function (dest) {
  for (var i = 1; i < arguments.length; i++) {
    for (var k in arguments[i]) {
      dest[k] = arguments[i][k];
    }
  }
  return dest;
};
/*!
 * isArray.js
 * 
 * Copyright (c) 2014
 */
isArray = function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};
/*!
 * isEmpty.js
 * 
 * Copyright (c) 2014
 */
isEmpty = function (obj) {
  // Array
  if (isArray(obj)) {
    return obj.length === 0;
  }
  // Object
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};
/*!
 * isFunction.js
 * 
 * Copyright (c) 2014
 */
isFunction = function (value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};
/*!
 * isNull.js
 * 
 * Copyright (c) 2014
 */
isNull = function (variable) {
  return variable === null;
};
/*!
 * isObject.js
 * 
 * Copyright (c) 2014
 */
isObject = function (value) {
  return value === Object(value);
};
/*!
 * isUndefined.js
 * 
 * Copyright (c) 2014
 */
isUndefined = function (variable) {
  return typeof variable === 'undefined';
};
/*!
 * tmpl.js
 * 
 * Copyright (c) 2014
 */
tmpl = function (str, data) {
  return str.replace(/{([^{}]*)}/g, function (a, b) {
    return typeof (data[b] + '') === 'string' ? data[b] : a;
  });
};
/*!
 * toArray.js
 * 
 * Copyright (c) 2014
 */
toArray = function (args, start, end) {
  start = start || 0;
  end = end || args.length;
  return Array.prototype.slice.call(args, start, end);
};
/*!
 * utl.js
 * 
 * Copyright (c) 2014
 */
utl = {
  extend: extend,
  isArray: isArray,
  isEmpty: isEmpty,
  isFunction: isFunction,
  isNull: isNull,
  isObject: isObject,
  isUndefined: isUndefined,
  tmpl: tmpl,
  toArray: toArray
};

return utl;


}));