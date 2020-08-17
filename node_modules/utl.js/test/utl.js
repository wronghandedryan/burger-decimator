/*!
 * test/utl.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'utl'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('utl.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.extend);
    assert.ok(_.isArray);
    assert.ok(_.isEmpty);
    assert.ok(_.isFunction);
    assert.ok(_.isNull);
    assert.ok(_.isObject);
    assert.ok(_.isUndefined);
    assert.ok(_.tmpl);
    assert.ok(_.toArray);
  });

});


});