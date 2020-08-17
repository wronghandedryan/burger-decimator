/*!
 * test/_umd.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var Connection = require('connection/connection');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - connection.js', function () {

  it('Should create a new instance.', function () {
    var connection = new Connection();

    assert.isInstanceOf(connection, Connection);
  });

});


});