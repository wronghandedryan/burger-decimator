/*!
 * delayApply.js
 * 
 * Copyright (c) 2014
 */

define([
  'utl/toArray'
], function (toArray) {


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


});