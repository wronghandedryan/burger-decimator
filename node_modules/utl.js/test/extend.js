/*!
 * test/extend.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'extend'
], function (assert, extend) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('extend.js', function () {

  it('Should return an obj with merged props', function () {
    // Setup Data
    var defaults, opts;
    defaults = {
      'extend'   : 'should',
      'overwrite': 'all'
    };
    opts = {
      'overwrite': 'default',
      'values'   : 'to',
      'the'      : 'destObj'
    };

    // Run extend
    var result = extend({}, defaults, opts);

    // Check results
    assert.deepEqual(result, {
      'extend'   : 'should',
      'overwrite': 'default',
      'values'   : 'to',
      'the'      : 'destObj'
    });

    // Make sure defaults & opts were not changed
    assert.deepEqual({
      'extend'   : 'should',
      'overwrite': 'all'
    }, defaults);
    
    assert.deepEqual({
      'overwrite': 'default',
      'values'   : 'to',
      'the'      : 'destObj'
    }, opts);
  });

});


});