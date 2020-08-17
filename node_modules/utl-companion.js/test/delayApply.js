/*!
 * test/delayApply.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'delayApply'
], function (assert, delayApply) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('delayApply.js', function () {

  it('Should apply function after specified delay.', function (done) {
    delayApply(1, function (num1, num2) {
      assert.equal(num1, 1);
      assert.equal(num2, 2);
      done();
    }, this, [1, 2]);
  });

  it('Should apply function with specified context.', function (done) {
    var context = { prop: 'val' };

    delayApply(1, function () {
      assert.equal(this, context);
      done();
    }, context);
  });

});


});