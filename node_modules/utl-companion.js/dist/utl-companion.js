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
    root['companion'] = factory();
  }
}(this, function () {

/*!
 * isArray.js
 * 
 * Copyright (c) 2014
 */
var utlIsArray, utlIsObject, utlToArray, delayApply, delayCall, utlIsFunction, evaluate, utlCompanion, _deepMerge_;
utlIsArray = function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};
/*!
 * isObject.js
 * 
 * Copyright (c) 2014
 */
utlIsObject = function (value) {
  return value === Object(value);
};
/*!
 * deepMerge.js
 * 
 * Copyright (c) 2014
 */
_deepMerge_ = function (isArray, isObject) {
  /* -----------------------------------------------------------------------------
   * deepMerge
   * ---------------------------------------------------------------------------*/
  /**
   * Deep merge 2 objects.
   *
   * @example
   * var dest = deep(dest, objToMerge);
   *
   * @public
   *
   * @param {object} dest - Object to merge properties into.
   * @param {object} obj - Object to merge properties from.
   */
  var deepMerge = function (dest, obj) {
    for (var k in obj) {
      var destVal = dest[k] || {};
      var objVal = obj[k];
      var isObj = isObject(objVal);
      var isArr = isArray(objVal);
      if (isObj || isArr) {
        if (isObj && !isObject(destVal)) {
          dest[k] = {};
        }
        if (isArr && !isArray(destVal)) {
          dest[k] = [];
        }
        dest[k] = deepMerge(destVal, objVal);
      } else {
        dest[k] = objVal;
      }
    }
    return dest;
  };
  /* -----------------------------------------------------------------------------
   * deepMerge
   * ---------------------------------------------------------------------------*/
  return deepMerge;
}(utlIsArray, utlIsObject);
/*!
 * toArray.js
 * 
 * Copyright (c) 2014
 */
utlToArray = function (args, start, end) {
  start = start || 0;
  end = end || args.length;
  return Array.prototype.slice.call(args, start, end);
};
/*!
 * delayApply.js
 * 
 * Copyright (c) 2014
 */
delayApply = function (toArray) {
  /* -----------------------------------------------------------------------------
   * delayApply
   * ---------------------------------------------------------------------------*/
  /**
   * Apply except with a delay.
   *
   * @public
   *
   * @params {number} milliseconds - Milliseconds to delay.
   * @params {function} fn - Function to call.
   * @params {object} context - Context to call function with.
   */
  return function (milliseconds, fn, context, args) {
    args = toArray(args || []);
    setTimeout(function () {
      fn.apply(context, args);
    }, milliseconds);
  };
}(utlToArray);
/*!
 * delayCall.js
 * 
 * Copyright (c) 2014
 */
delayCall = function (toArray) {
  /* -----------------------------------------------------------------------------
   * delayCall
   * ---------------------------------------------------------------------------*/
  /**
   * Call except with a delay.
   *
   * @public
   *
   * @params {number} milliseconds - Milliseconds to delay.
   * @params {function} fn - Function to call.
   * @params {object} context - Context to call function with.
   */
  return function (milliseconds, fn, context) {
    var args = toArray(arguments, 3);
    setTimeout(function () {
      fn.apply(context, args);
    }, milliseconds);
  };
}(utlToArray);
/*!
 * isFunction.js
 * 
 * Copyright (c) 2014
 */
utlIsFunction = function (value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};
/*!
 * evaluate.js
 * 
 * Copyright (c) 2014
 */
evaluate = function (isFunction) {
  /* -----------------------------------------------------------------------------
   * evaluate
   * ---------------------------------------------------------------------------*/
  /**
   * Loop over all object keys. If value is a function
   * execute it and set the return value as the value
   * for that key.
   *
   * @example
   * var test = { key: function () { return 'str'; } }
   * evaluate(test);
   * // test = { key: 'str' }
   *
   * @public
   *
   * @param {object} obj - Object to evaluate.
   * @param {object} obj - Context to call fn on (obj by default.
   *
   * @returns Evaluated object.
   */
  return function (obj, context) {
    for (var k in obj) {
      if (isFunction(obj[k])) {
        obj[k] = obj[k].call(context || obj);
      }
    }
    return obj;
  };
}(utlIsFunction);
/*!
 * utl-companion.js
 * 
 * Copyright (c) 2014
 */
utlCompanion = {
  deepMerge: _deepMerge_,
  delayApply: delayApply,
  delayCall: delayCall,
  evaluate: evaluate
};

return utlCompanion;


}));