const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');

let db = require('../db/index');

let app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/similar-listings/:listingId', (req, res) => {
  let listingId = req.params.listingId;
  db.findOne({ listingId: listingId })
    .exec()
    .then((doc) => {
      if (!doc) {
        res.sendStatus(400);
      } else {
        res.send(doc);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

let port = 3003;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server connected! Listening on http://localhost:' + port);
});
