/*!
 * test/tmpl.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'tmpl'
], function (assert, tmpl) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('tmpl.js', function () {

  it('Should template using passed array.', function () {
    var msg = tmpl('{0}{1}{1}', [0,'!']);
    
    assert.equal(msg, '0!!');
  });

  it('Should template using passed object.', function () {
    var msg = tmpl('{text}{punctuation}{punctuation}', {
      text: 'msg',
      punctuation: '!'
    });
    
    assert.equal(msg, 'msg!!');
  });

});


});