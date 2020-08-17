/*!
 * test/delayCall.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'delayCall'
], function (assert, delayCall) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('delayCall.js', function () {

  it('Should call function after specified delay.', function (done) {
    delayCall(1, function (num1, num2) {
      assert.equal(num1, 1);
      assert.equal(num2, 2);
      done();
    }, this, 1, 2);
  });

  it('Should call function with specified context.', function (done) {
    var context = { prop: 'val' };

    delayCall(1, function () {
      assert.equal(this, context);
      done();
    }, context);
  });

});


});