/*!
 * test/isNull.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'isNull'
], function (assert, isNull) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isNull.js', function () {

  it('Should return true if value is null.', function () {
    assert.isTrue(isNull(null));
  });

  it('Should return false if value is not null.', function () {
    assert.isFalse(isNull(''));
  });

});


});