var express = require("express");
var router = express.Router();
// Import the burger (burger.js) to use its database functions.
var burger = require("../models/burgers");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

  router.post("/api/burgers", function (req, res) {
    burger.insertOne(
      ["burger_name", "decimated"],
      [req.body.burger_name, req.body.decimated],
      function (result) {
        res.json({ id: result.insertId });
      }
    );
  });

  router.put("/api/burgers/:id", function (req, res) {
    var state = "id = " + req.params.id;
    console.log("state", state);

    burger.updateOne({ decimated: req.body.decimated }, state, function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

});
module.exports = router;
