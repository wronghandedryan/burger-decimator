/*!
 * extend.js
 *
 * Copyright (c) 2014
 */




/* -----------------------------------------------------------------------------
 * extend
 * ---------------------------------------------------------------------------*/

module.exports = function (dest) {
  for (var i = 1; i < arguments.length; i++) {
    for (var k in arguments[i]) {
      dest[k] = arguments[i][k];
    }
  }
  return dest;
};


