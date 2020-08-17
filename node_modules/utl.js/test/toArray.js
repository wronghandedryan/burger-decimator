/*!
 * test/toArray.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'toArray'
], function (assert, toArray) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('toArray.js', function () {

  it('Should convert function args into a real Array.', function () {
    var testFn = function () {
      return toArray(arguments).concat([3, 4]);
    };

    assert.deepEqual(testFn(1, 2), [1, 2, 3, 4]);
  });

  it('Should slice from specified start', function () {
    var testFn = function () {
      return toArray(arguments, 1);
    };

    assert.deepEqual(testFn(1, 2, 3, 4), [2, 3, 4]);
  });

  it('Should slice to specified end', function () {
    var testFn = function () {
      return toArray(arguments, 0, 3);
    };

    assert.deepEqual(testFn(1, 2, 3, 4), [1, 2, 3]);
  });

});


});