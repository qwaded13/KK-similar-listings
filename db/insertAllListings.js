let fs = require('fs');
let Promise = require('bluebird');

let SimilarListing = require('./index');
let listingData = require('../test_data/MOCK_DATA.json');

let listingId = 1;

let insertAllListings = function() {
  let listingPromises = listingData.map((listing) => {
    listing.listingId = listingId++;
    // listingRecord = new SimilarListing(listing);
    return SimilarListing.findOneAndUpdate(
      { listingName: listing.listingName },
      Object.assign(listing, {imageLink: 'https://i.pinimg.com/originals/5f/d9/78/5fd9786dc347122dfc4b7ceaed697a0a.jpg'}),
      { upsert: true }
    );
  });

  Promise.all(listingPromises)
    .then(() => {
      console.log('Successfully added all the listings to the DB :)');
    })
    .catch((err) => {
      console.log('Something went wrong inserting into the DB :(');
      console.log(err);
    });
};

insertAllListings();
