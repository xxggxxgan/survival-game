var express = require("express");
var router = express.Router();
var NewsAPI = require("newsapi");
var MongoClient = require("mongodb").MongoClient;

var sourceFile = require("../general");

/* GET users listing. */
router.get("/", function(req, res, next) {
  const newsapi = new NewsAPI("1e302a42554f4faf9fdfcc7168960f94");
  var today = new Date();
  var sevenDaysAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  var fromDate =
    sevenDaysAgo.getFullYear() +
    "-" +
    (sevenDaysAgo.getMonth() + 1) +
    "-" +
    sevenDaysAgo.getDate();
  var toDate =
    today.getFullYear() +
    "-" +
    (sevenDaysAgo.getMonth() + 1) +
    "-" +
    today.getDate();

  newsapi.v2
    .everything({
      q: req.params.searchContent,
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk,techcrunch.com",
      from: fromDate,
      to: toDate,
      language: "en",
      sortBy: "relevancy",
      page: 2
    })
    .then(response => {
      var news_result = response["articles"];
      res.send(news_result);
      // MongoClient.connect(sourceFile.dbUrl, function(err, db) {
      //   if (err) throw err;
      //   var dbo = db.db(sourceFile.dbName);
      //   var searched_result = {
      //     user: "bmao",
      //     search_content: req.params.searchContent,
      //     news_title: news_result[0].title,
      //     news_img: news_result[0].urlToImage,
      //     news_description: news_result[0].description
      //   };
      //   dbo.collection("user").insertOne(searched_result, function(err, res) {
      //     if (err) throw err;
      //     console.log("1 document inserted");
      //     db.close();
      //   });
      // });
    });
});

module.exports = router;
