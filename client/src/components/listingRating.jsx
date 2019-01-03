import React from 'react';

class ListingRating extends React.Component {
  render() {
    return (
      <span className="listingRating"> 
        {this.props.rating}
      </span>
    )}
}

export default ListingRating;
