const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const cors = require('cors');

let db = require('../db/index');
let insertAllListings = require('../db/insertAllListings')

let app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(Path.join(__dirname, '../client/dist')));

app.get('/similar-listings/:listingId', (req, res) => {
  let listingId = req.params.listingId;
  db.find({})
    .limit(12)
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
