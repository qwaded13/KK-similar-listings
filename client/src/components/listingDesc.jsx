import React from 'react';
import axios from 'axios';

import ListingImg from './listingImg.jsx';

class ListingDesc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListingImg imageLink={this.props.listing.imageLink} />
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
