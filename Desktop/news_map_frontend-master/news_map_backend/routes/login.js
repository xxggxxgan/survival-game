var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
const { OAuth2Client } = require("google-auth-library");
var general = require("../general");
var respond = require("../respond");

async function verify(token, client, clientId) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];
  return userid;
}

/* POST login listing. */
router.post("/", function(req, res, next) {
  var today = new Date();
  const req_params = req.body.params;
  const clientId = general.googleAuthClientId;
  const client = new OAuth2Client(clientId);

  var searched_result = {
    id_token: req_params.id_token,
    email: req_params.email,
    last_name: req_params.familyName,
    first_name: req_params.givenName,
    google_id: req_params.googleId,
    image_url: req_params.imageUrl,
    date: today.toUTCString()
  };
  verify(searched_result.id_token, client, clientId)
    .then(googleId => {
      MongoClient.connect(general.dbUrl, { useUnifiedTopology: true }, function(
        err,
        db
      ) {
        if (err) throw err;
        var dbo = db.db(general.dbName);
        var collection = dbo.collection("user");

        collection.find({ google_id: googleId }).toArray((err, items) => {
          if (items === undefined || items.length == 0) {
            collection.insertOne(searched_result, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          } else {
            collection.updateOne(
              { google_id: googleId },
              { $set: { date: today.toUTCString() } },
              (err, item) => {}
            );
            console.log("document already existed");
            console.log("document updated successfully");
          }
          res.send({
            errorMsg: respond.login.errorMsg,
            errorCode: respond.login.errorCode
          });
        });
      });
    })
    .catch(console.error);
});

module.exports = router;
