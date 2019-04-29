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
              ? `https://s3.us-east-2.amazonaws.com/similar-listings-home-images/test(${this
                  .props.listingId % 26 || 1}).webp`
              : `https://s3.us-east-2.amazonaws.com/similar-listings-home-images-alt/test(${this
                  .props.listingId % 26 || 1}).webp`
          }
        />
      </div>
    );
  }
}

export default ListingImg;
