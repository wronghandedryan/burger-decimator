/*!
 * test/_amd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'utl-companion/utl-companion'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('amd - utl-companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.deepMerge);
  });

});


});