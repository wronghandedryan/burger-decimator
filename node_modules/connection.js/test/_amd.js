/*!
 * test/_amd.js
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

describe('amd - connection.js', function () {

  it('Should create a new instance.', function () {
    var connection = new Connection();

    assert.isInstanceOf(connection, Connection);
  });

});


});