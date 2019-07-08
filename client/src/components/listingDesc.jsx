import React from 'react';
import axios from 'axios';

import ListingImg from './listingImg.jsx';
import ListingRating from './listingRating.jsx';

class ListingDesc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container' style={{display: 'inline-block'}}>
        <div>
          <ListingImg listingId={this.props.listing.listingId} />
        </div>
        <span className="propertyType">
          {this.props.listing.propertyType.toUpperCase()} ·{' '}
          {this.props.listing.beds} BEDS
        </span>
        <br />
        <span className="listingName">{this.props.listing.listingName}</span>
        <br />
        <span className="price">${this.props.listing.price} per night</span>
        <br />
        <span className="rating">
          <ListingRating rating={this.props.listing.rating} key={this.props.listingId}/>
          &nbsp;&nbsp;{this.props.listing.numberOfReviews}
        </span>
      </div>
    );
  }
}

export default ListingDesc;
