import React from 'react';
import axios from 'axios';

class ListingDesc extends React.Component {
  constructor(props) {
    super(props);
    

    // this.state = {
    //   imageUrl:
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
      <div key={this.props.listing.listingId}>
        <img className="listingImg" src={this.props.listing.imageUrl} />
        <div className="listingName">{this.props.listing.listingName}</div>
        <div className="propertyType">{this.props.listing.propertyType}</div>
        <div className="beds">{this.props.listing.beds}</div>
        <div className="price">{this.props.listing.price}</div>
        <div className="rating">{this.props.listing.rating}</div>
        <div className="numberOfReviews">{this.props.listing.numberOfReviews}</div>
      </div>
    );
  }
}

export default ListingDesc;
