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
        <span className="propertyType">{this.props.listing.propertyType.toUpperCase()} · {this.props.listing.beds} BEDS</span><br/>
        <span className="listingName">
          {this.props.listing.listingName}
        </span><br/>
        <span className="price">${this.props.listing.price} per night</span><br/>
        <span className="rating">{this.props.listing.rating} * {this.props.listing.numberOfReviews}</span>
      </div>
    );
  }
}

export default ListingDesc;
