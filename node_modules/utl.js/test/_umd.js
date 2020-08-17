/*!
 * test/_umd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'utl/utl'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - utl.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.isFunction);
  });

});


});