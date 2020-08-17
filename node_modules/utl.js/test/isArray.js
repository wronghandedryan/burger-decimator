/*!
 * test/isArray.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'isArray'
], function (assert, isArray) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isArray.js', function () {

  it('Should return true if value is an Array.', function () {
    assert.isTrue(isArray([]));
  });

  it('Should return false if value is not an Array.', function () {
    assert.isFalse(isArray({}));
  });

});


});