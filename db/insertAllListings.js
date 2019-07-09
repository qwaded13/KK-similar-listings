let fs = require('fs');
let Promise = require('bluebird');

let { SimilarListing } = require('./index');
let listingData = require('../test_data/MOCK_DATA.json');

let listingId = 1;

let insertAllListings = function() {
  let listingPromises = listingData.map((listing) => {
    listing.listingId = listingId++;
    let imageId = Math.floor(Math.random() * 25 + 1);
    listing.imageLink = `https://d39p4ziioa8xad.cloudfront.net/house(${imageId}).jpg`;
    return SimilarListing.findOneAndUpdate(
      { listingName: listing.listingName },
      listing,
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
