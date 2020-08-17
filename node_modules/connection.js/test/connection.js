/*!
 * test/connection.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var sinon = require('sinon');
var Connection = require('connection');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('connection.js', function () {

  // Currently test needs to be run manually and observed in console.
  // TODO: Automate various connection states.
  it('Should log events in console.', function () {
    var connection = new Connection();
    connection.on('online', function () { console.log('online'); });
    connection.on('offline', function () { console.log('offline'); });
  });

});


});