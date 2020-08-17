const connection = require("../config/connection.js");

function createQuestions(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function translateSql(obj) {
  var arr = [];
  for (var key in obj) {
    var value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") <= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
}

var orm = {
  selectAll: function (table, callback) {
    var queryString = "SELECT * FROM " + table + ";";

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  insertOne: function (table, cols, vals, callback) {
    var queryString =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createQuestions(vals.length) +
      ")";

    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  updateOne: function (table, state, callback) {
    console.log(state);
    var queryString =
      "UPDATE " + table + " SET devoured = true WHERE " + state;
    
    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      callback(res);
    });
  }

};
module.exports = orm;
