/*!
 * toArray.js
 * 
 * Copyright (c) 2014
 */

define(function () {


/* -----------------------------------------------------------------------------
 * toArray
 * ---------------------------------------------------------------------------*/

/**
 * Convert arguments to an array.
 *
 * @public
 *
 * @params {Array} args - Array like arguments to convert to real Array.
 * @params {number} [start=0] - Slice start.
 * @params {numebr} [end=args.length] - Slice end.
 */
return function (args, start, end) {
  start = start || 0;
  end = end || args.length;

  return Array.prototype.slice.call(args, start, end);
};


});