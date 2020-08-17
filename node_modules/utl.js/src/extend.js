/*!
 * extend.js
 *
 * Copyright (c) 2014
 */

define(function () {


/* -----------------------------------------------------------------------------
 * extend
 * ---------------------------------------------------------------------------*/

return function (dest) {
  for (var i = 1; i < arguments.length; i++) {
    for (var k in arguments[i]) {
      dest[k] = arguments[i][k];
    }
  }
  return dest;
};


});