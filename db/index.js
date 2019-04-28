let mongoose = require('mongoose');
let dbURL = 'mongodb://localhost/similarlistings';

mongoose.connect(dbURL, { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB!');
});

let Schema = mongoose.Schema;

let similarSchema = new Schema({
  listingName: {
    type: String,
    unique: true
  },
  listingId: {
    type: Number,
    unique: true
  },
  propertyType: String,
  beds: Number,
  price: Number,
  rating: Number,
  numberOfReviews: Number,
  imageLink: String
});

let SimilarListing = mongoose.model('SimilarListing', similarSchema);

module.exports = SimilarListing;
