import React from 'react';

class ListingImg extends React.Component {
  render() {
    return (
      <div>
        <img
          className="listingImg"
          style={{ height: 225, width: 325, borderRadius: '5px' }}
          src={
            this.props.listingId % 2
              ? `https://s3.us-east-2.amazonaws.com/similar-listings-home-images/house(${this
                  .props.listingId % 26 || 1}).jpg`
              : `https://s3.us-east-2.amazonaws.com/similar-listings-home-images-alt/house(${this
                  .props.listingId % 26 || 1}).jpg`
          }
        />
      </div>
    );
  }
}

export default ListingImg;
