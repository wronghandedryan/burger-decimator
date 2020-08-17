/*!
 * delayApply.js
 * 
 * Copyright (c) 2014
 */

var toArray = require('utl.js/dist/common/toArray');


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
module.exports = function (milliseconds, fn, context, args) {
  args = toArray(args || []);

  setTimeout(function () {
    fn.apply(context, args);
  }, milliseconds);
};


