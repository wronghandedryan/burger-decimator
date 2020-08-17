/*!
 * test/isObject.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'isObject'
], function (assert, isObject) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isObject.js', function () {

  it('Should return true if value is an Object.', function () {
    assert.isTrue(isObject({}));
  });

  it('Should return false if value is not an Object.', function () {
    assert.isFalse(isObject(true));
  });

});


});