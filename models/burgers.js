// to import the orm
const orm = require("../config/orm");

// call the functions from the orm
const burgers = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    insertOne: function(cols, rows, callback) {
      orm.insertOne("burgers", cols, rows, function(res) {
        callback(res);
      });
    },
    updateOne: function( state, callback) {
      orm.updateOne("burgers",  state, function(res) {
        callback(res);
      });
    },

  };
  // export the model functions to the controller.
  module.exports = burgers;