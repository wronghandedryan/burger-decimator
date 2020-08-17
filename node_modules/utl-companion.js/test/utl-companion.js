/*!
 * test/utl-companion.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'utl-companion'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('utl-companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.deepMerge);
    assert.ok(_.delayApply);
    assert.ok(_.delayCall);
    assert.ok(_.evaluate);
  });

});


});