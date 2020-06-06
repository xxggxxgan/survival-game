const express = require('express');
const router = express.Router();

/* GET home page. */
router.route('/')
.get((req, res, next) =>{
  res.render('ps3',  {string: 'Hey now' });
})
.post((req, res, next) =>{
  console.log(req);
  res.send(`${req.body.items},${req.body.items.length}`);
});

module.exports = router;
