import React from 'react';
import axios from 'axios';

class ListingDesc extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   imageLink:
    //     'https://i.pinimg.com/originals/5f/d9/78/5fd9786dc347122dfc4b7ceaed697a0a.jpg',
    //   listingName: 'Shack Reactor',
    //   propertyType: 'Restaurant/School lol',
    //   beds: 13,
    //   price: 'over 9000',
    //   rating: '5/7', // TODO: how am i going to convert this to stars?
    //   numberOfReviews: 314
    // };
  }

  // when the component mounts, make a request to the correct endpoint for a listing's data

  render() {
    return (
      <div>
        <img
          className="listingImg"
          style={{ 'height': 200, 'width': 300, 'borderRadius': '7px'}}
          src={this.props.listing.imageLink}
        />
        <div className="listingName">
          Listing Name: {this.props.listing.listingName}
        </div>
        <div className="propertyType">
          Listing Type: {this.props.listing.propertyType}
        </div>
        <div className="beds">Number of Beds: {this.props.listing.beds}</div>
        <div className="price">Daily Price: ${this.props.listing.price}</div>
        <div className="rating">Rating: {this.props.listing.rating}</div>
        <div className="numberOfReviews">
          Number of Reviews: {this.props.listing.numberOfReviews}
        </div>
      </div>
    );
  }
}

export default ListingDesc;
