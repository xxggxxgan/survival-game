var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Evil Dragon is currently watching you!");
});

module.exports = router;
